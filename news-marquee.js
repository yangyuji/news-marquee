/*
* author: "oujizeng",
* license: "MIT",
* name: "newsMarquee.js",
* github: "https://github.com/yangyuji/news-marquee",
* version: "1.0.0"
*/

(function (root, factory) {
    if (typeof module != 'undefined' && module.exports) {
        module.exports = factory();
    } else if (typeof define == 'function' && define.amd) {
        define( function () { return factory(); } );
    } else {
        root['newsMarquee'] = factory();
    }
}(this, function () {
    'use strict'

    function Marquee(id) {
        var oMarquee = document.getElementById(id);
        var iLineHeight = oMarquee.children[0].offsetHeight;
        var iLineCount = 3;

        function run() {
            oMarquee.scrollTop += 1;
            if(oMarquee.scrollTop >= iLineCount * iLineHeight) {
                oMarquee.scrollTop = 0;
            }
            if(oMarquee.scrollTop % iLineHeight == 0) {
                setTimeout(run, 3500);
            } else {
                setTimeout(run, 10);
            }
        }

        setTimeout(run, 3500);
    }

    return Marquee;
}));