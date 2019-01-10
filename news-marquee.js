/*
* author: "oujizeng",
* license: "MIT",
* name: "newsMarquee.js",
* github: "https://github.com/yangyuji/news-marquee",
* version: "1.0.3"
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

    function Marquee(el, opt) {
        var _self = this;
        this.oMarquee = typeof el == 'string' ? document.querySelector(el) : el;
        if (!this.oMarquee) return;

        this.iLineHeight = this.oMarquee.children[0].offsetHeight;
        this.iLineCount = this.oMarquee.children.length;

        this.options = {
            successive: false,  //是否连续
            speed: 1000/60,     //滚动速度
            pause: 3500         //停顿时间
        }

        for (var i in opt) {
            this.options[i] = opt[i];
        }

        appendChild();

        function run() {
            _self.oMarquee.scrollTop += 1;
            if(_self.oMarquee.scrollTop >= _self.iLineCount * _self.iLineHeight) {
                _self.oMarquee.scrollTop = 0;
            }
            if (_self.options.successive) {
                setTimeout(run, _self.options.speed);
            } else {
                if(_self.oMarquee.scrollTop % _self.iLineHeight === 0) {
                    setTimeout(run, _self.options.pause);
                } else {
                    setTimeout(run, _self.options.speed);
                }
            }
        }

        function appendChild() {
            var node = _self.oMarquee.children[0].cloneNode(true);
            _self.oMarquee.appendChild(node);
        }

        run();
    }

    return Marquee;
}));