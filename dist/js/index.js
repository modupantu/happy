// 一起的时间
var TimeDate = Date.parse(new Date());
var lasttime = Date.parse("1995-01-11");
var day = parseInt((TimeDate - lasttime) / (1000 * 60 * 60 * 24));

var str = `                亲爱的老妈:

    生日快乐!
曾经的曾经,过去的过去,
是你撑着一把伞带着我们两,
以后我俩共撑一把伞为你遮风挡雨.
今天是您养育并陪伴我们第${day}天,

                            爱老虎油!  Happy!!!`;
//判断手机类型
var audio = document.querySelector('#audio');
function ismobile(test) {
    var u = navigator.userAgent, app = navigator.appVersion;
    if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
        if (window.location.href.indexOf("?mobile") < 0) {
            try {
                if (/iPhone|mac|iPod|iPad/i.test(navigator.userAgent)) {
                    return '0';
                } else {
                    return '1';
                }
            } catch (e) { }
        }
    } else if (u.indexOf('iPad') > -1) {
        return '0';
    } else {
        return '1';
    }
};

var pla = ismobile(1);
if(ismobile(1)==='1'){
    (function () {
        audio.load();
        audio.play();
    })();
}else{
    function forceSafariPlayAudio() {
        audio.load(); // iOS 9   还需要额外的 load 一下, 否则直接 play 无效
        audio.play(); // iOS 7/8 仅需要 play 一下
    }
    audio.addEventListener('play', function () {
        // 当 audio 能够播放后, 移除这个事件
        window.removeEventListener('touchstart', forceSafariPlayAudio, false);
    }, false);
    window.addEventListener('touchstart', forceSafariPlayAudio, false);
}

//监听音乐
window.onload = function () {
    //随机颜色
    function bianse() {
        var r = Math.floor(Math.random() * 100000) % 256;
        var g = Math.floor(Math.random() * 100000) % 256;
        var b = Math.floor(Math.random() * 100000) % 256;
        return huan = 'rgb(' + r + ',' + g + ',' + b + ')';
    }
    var Photo4 = document.querySelector('.photo4');
    var fontIndex = 0;
    var timer;
    var aa = str.length;
    function typeWord() {
        if (aa == fontIndex) {
            clearInterval(timer);
        }
        Photo4.style.color = bianse();
        Str = str.substring(0, fontIndex++) + "_";
        Photo4.innerText = Str;
    }
    timer = setInterval(typeWord, 250);

};
