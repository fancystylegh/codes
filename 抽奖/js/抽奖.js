var data=["iphone7","ipad","苹果笔记本电脑","佳能相机","惠普打印机","谢谢参与","50元充值卡","100元超市购物券"],
    timer=null;
var play=document.getElementById("play");
window.onload=function(){
    var stop = document.getElementById("stop");
    play.onclick = playFun;
    stop.onclick = stopFun;
}

function playFun(){
	var title=document.getElementById("title");
	timer=setInterval(function(){
		var random=Math.floor(Math.random()*data.length); /*随机数*/
		title.innerHTML=data[random];
	},50);
	play.style.background="#999";
}

function stopFun(){
	clearInterval(timer);
	play.style.background="#036";
}