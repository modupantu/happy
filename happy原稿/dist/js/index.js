 //监听音乐
 window.onload = function() {
    startAnimation();
    window.addEventListener('scroll',function(){
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        var  audio = document.querySelector('#audio');
        if(scrollTop > 300){
            audio.play();
        }else if( scrollTop < 5){
            audio.pause();
        }
    },true); 
};   
//心形状
//var arr = []; //保存所有的XY坐标，只为验证。  
var r = 4;
var radian; //弧度  
var i;
var radianDecrement; //弧度增量  
var time = 30; //每个点之间的时间间隔  
var intervalId;
var num = 360; //分割为 360 个点  
var startRadian = Math.PI;
var ctx;
function startAnimation() {
    ctx = document.getElementById('Mycanvas').getContext('2d');
    W_WIDTH = document.documentElement.clientWidth;
    W_HEIGHT = document.getElementById('Mycanvas').clientHeight;
    ctx.width = W_WIDTH;
    ctx.height = W_HEIGHT;
    drawHeart();
};
function drawHeart() {
    ctx.strokeStyle = "red";
    ctx.lineWidth = 1; //线宽
    radian = startRadian; //弧度设为初始弧度
    radianDecrement = Math.PI / num * 2;
    ctx.moveTo(getX(radian), getY(radian)); //移动到初始位置
    i = 0;
    intervalId = setInterval("printHeart()", time);
}
//x = 16 sin^3 t, y = (13 cos t - 5 cos 2t - 2 cos 3t - cos 4t) 
function printHeart() {
    radian += radianDecrement;
    ctx.lineTo(getX(radian), getY(radian)); //在新旧点之间连线
    //arr.push('X:' + getX(radian) + 'Y:' + getY(radian) + '<br>');
    i++;
    ctx.stroke(); //画线
    if (i >= num) {
        clearInterval(intervalId);
    }
}
function getX(t) {
    return 100 + r * (16 * Math.pow(Math.sin(t), 3));
}

function getY(t) {
    return 50 - r * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
}
//心形状结束

// 一起的时间
var TimeDate = Date.parse(new Date());
var lasttime = Date.parse("1995-01-11");
var day = parseInt((TimeDate - lasttime) / (1000 * 60 * 60 * 24));
var IdTime = document.querySelector('#time');
IdTime.innerHTML = '第' + day + "天";