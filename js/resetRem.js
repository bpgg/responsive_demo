$(document).ready(function (){
    function refreshRem() {
        var docEl = document.documentElement;
        var width = docEl.getBoundingClientRect().width;
        // console.log(width);
        if (width > 1440) {/*左侧主内容栏最大1060px*/
            width = 1060;
        } else if (width >= 768) {/*pc端自适应，右侧栏固定380px*/
            width = width - 380;
        }
        var rem = width / 10;
        docEl.style.fontSize = rem + 'px';
        window.rem = rem;
    }
    refreshRem();
    window.addEventListener('resize', refreshRem);
})
