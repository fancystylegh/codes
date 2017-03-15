/**
 * Created by gdc on 2017/3/10.
 */
/*滚动监听*/
$('body').scrollspy({
    target: '#main-nav'
});
/*轮播图*/
$('#myCarousel').carousel({
    /*设置自动播放2秒*/
    interval:2000,
    /*设置暂停按钮的事件*/
    pause:'hover',
    /*循环播放*/
    wrap:true
});
/*案例里的特效，鼠标移上去会出现图片的介绍*/
/*页面加载完成*/
$(function(){
    $('portfolio-desc').mouseover(function(){
        this.style.display="block";
    }).mouseout(function(){
        this.style.display="hidden";
    });
});