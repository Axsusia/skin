function moveDiv()
{
	var dWidth = $(window).width();
	var dHeight = $(window).height();

	var bWidth = 500;
	var bHeight = 174;

	var mgTop = parseInt((dHeight - bHeight - 70) / 2);
	if(mgTop < 0) mgTop = 0;
	$('#mainBox').css('margin-top',mgTop+'px');
	//$('#mainBox').css('display','block');
	$('#mainBox').fadeIn(500);
}

function dpTime(){
	now = new Date();
	hours = now.getHours();
	minutes = now.getMinutes();
	seconds = now.getSeconds();
	/*
	if (hours > 12){
		hours -= 12;
		ampm = "오후 ";
	}else{
		ampm = "오전 ";
	}
	*/
	if (hours < 10){
		hours = "0" + hours;
	}
	if (minutes < 10){
		minutes = "0" + minutes;
	}
	if (seconds < 10){
		seconds = "0" + seconds;
	}
	document.getElementById("dpTime").innerHTML = hours + ":" + minutes + ":" + seconds;
}

function callAjax()
{
	$.ajax ({
		type: "post"
		, async: true
		, url: "/295"
		, dataType: "html"
		, data: ""
		, success: function (response, status, result) {
//			alert (response);
			var article = $(response).find('#article > p').text();
			alert(article);
		}
	});
}

$(document).ready(function() {

	var html = '';

	html += '<div id="mainBox" style="display:none">';
	html += '<div class="blogTitle">Art of Web</div>';
	html += '<div id="dpTime"></div>';
	html += '<div class="welcome">Welcome. It\'s Axsusia\'s Blog.</div>';
	html += '</div>';
	$('.topNav').after(html);

	html = '';
	html += '<div class="iconBar" style="display:none">';	
	html += '<div class="thBox">';
	html += '<ul>';
	$('.ttContent').each(function(idx){
		html += '<li>';
		html += $(this).clone().html();
		html += '</li>';
	});
	html += '</ul>';
	html += '</div>';
	html += '</div>';
	$('body').append(html);

	dpTime();
	setInterval("dpTime()",1000);
	moveDiv();
	$('.ieLow .thBox > ul > li').eq(3).css('margin-right','0px');
	$('.iconBar').fadeIn(500);


	$(window).resize(function(){
		moveDiv();
	}).resize();

});
$(window).load(function(){
	moveDiv();
	$('.ieLow .thBox > ul > li').eq(3).css('margin-right','0px');
	$('.iconBar').fadeIn(500);
});

