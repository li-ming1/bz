!function (e) {
    var t = { sectionContainer: "section", easing: "ease", animationTime: 1e3, pagination: true, updateURL: false, keyboard: true, beforeMove: null, afterMove: null, loop: true, responsiveFallback: false, direction: "vertical" };
    e.fn.swipeEvents = function ()
    {
        return this.each(function ()
        {
            function i(e){
                var i = e.originalEvent.touches;
                if (i && i.length) { t = i[0].pageX; n = i[0].pageY; r.bind("touchmove", s) }
            }
            function s(e) {
                var i = e.originalEvent.touches;
                if (i && i.length) {
                    var o = t - i[0].pageX;
                    var u = n - i[0].pageY;
                    if (o >= 50) {
                        r.trigger("swipeLeft")
                    } if (o <= -50) {
                        r.trigger("swipeRight")
                    } if (u >= 50) {
                        r.trigger("swipeUp")
                    } if (u <= -50) {
                        r.trigger("swipeDown")
                    } if (Math.abs(o) >= 50 || Math.abs(u) >= 50) {
                        r.unbind("touchmove", s)
                    }
                }
            } var t, n, r = e(this); r.bind("touchstart", i)
        })
    }; e.fn.onepage_scroll = function (n) {
        function o() {
            var t = false;
            var n = typeof r.responsiveFallback;
            if (n == "number") {
                t = e(window).width() < r.responsiveFallback
            } if (n == "boolean") {
                t = r.responsiveFallback
            } if (n == "function") {
                valFunction = r.responsiveFallback();
                t = valFunction; typeOFv = typeof t;
                if (typeOFv == "number") {
                    t = e(window).width() < valFunction
                }
            } if (t) {
                e("body").addClass("disabled-onepage-scroll");
                e(document).unbind("mousewheel DOMMouseScroll MozMousePixelScroll");
                i.swipeEvents().unbind("swipeDown swipeUp")
            } else {
                if (e("body").hasClass("disabled-onepage-scroll")) {
                    e("body").removeClass("disabled-onepage-scroll");
                    e("html, body, .wrapper").animate({ scrollTop: 0 }, "fast")
                } i.swipeEvents().bind("swipeDown", function (t) {
                    if (!e("body").hasClass("disabled-onepage-scroll")) t.preventDefault(); i.moveUp()
                }).bind("swipeUp", function (t) {
                    if (!e("body").hasClass("disabled-onepage-scroll")) t.preventDefault(); i.moveDown()
                }); e(document).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function (e) {
                    e.preventDefault();
                    var t = e.originalEvent.wheelDelta || -e.originalEvent.detail; u(e, t)
                })
            }
        } function u(e, t) {
            deltaOfInterest = t;
            var n = (new Date).getTime();
            if (n - lastAnimation < quietPeriod + r.animationTime) {
                e.preventDefault(); return
            } if (deltaOfInterest < 0) {
                i.moveDown()
            } else {
                i.moveUp()
            } lastAnimation = n
        } var r = e.extend({}, t, n), i = e(this), s = e(r.sectionContainer);
        total = s.length, status = "off", topPos = 0, leftPos = 0, lastAnimation = 0, quietPeriod = 500, paginationList = "";
        e.fn.transformPage = function (t, n, r) {
            if (typeof t.beforeMove == "function") t.beforeMove(r);
            if (e("html").hasClass("ie8")) {
                if (t.direction == "horizontal") {
                    var s = i.width() / 100 * n; e(this).animate({ left: s + "px" }, t.animationTime)
                } else {
                    var s = i.height() / 100 * n; e(this).animate({ top: s + "px" }, t.animationTime)
                }
            } else {
                e(this).css({ "-webkit-transform": t.direction == "horizontal" ? "translate3d(" + n + "%, 0, 0)" : "translate3d(0, " + n + "%, 0)", "-webkit-transition": "all " + t.animationTime + "ms " + t.easing, "-moz-transform": t.direction == "horizontal" ? "translate3d(" + n + "%, 0, 0)" : "translate3d(0, " + n + "%, 0)", "-moz-transition": "all " + t.animationTime + "ms " + t.easing, "-ms-transform": t.direction == "horizontal" ? "translate3d(" + n + "%, 0, 0)" : "translate3d(0, " + n + "%, 0)", "-ms-transition": "all " + t.animationTime + "ms " + t.easing, transform: t.direction == "horizontal" ? "translate3d(" + n + "%, 0, 0)" : "translate3d(0, " + n + "%, 0)", transition: "all " + t.animationTime + "ms " + t.easing })
            } e(this).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function (e) {
                if (typeof t.afterMove == "function") t.afterMove(r)
            })
        }; e.fn.moveDown = function () {
            var t = e(this);
            index = e(r.sectionContainer + ".active").data("index"); current = e(r.sectionContainer + "[data-index='" + index + "']");
            next = e(r.sectionContainer + "[data-index='" + (index + 1) + "']");
            if (next.length < 1) {
                if (r.loop == true) {
                    pos = 0; next = e(r.sectionContainer + "[data-index='1']")
                } else { return }
            } else { pos = index * 100 * -1 }
            if (typeof r.beforeMove == "function") r.beforeMove(next.data("index"));
            current.removeClass("active"); next.addClass("active");
            if (r.pagination == true) {
                e(".onepage-pagination li a" + "[data-index='" + index + "']").removeClass("active");
                e(".onepage-pagination li a" + "[data-index='" + next.data("index") + "']").addClass("active")
            } e("body")[0].className = e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, ""); e("body").addClass("viewing-page-" + next.data("index"));
            if (history.replaceState && r.updateURL == true) {
                var n = window.location.href.substr(0, window.location.href.indexOf("#")) + "#" + (index + 1);
                history.pushState({}, document.title, n)
            } t.transformPage(r, pos, next.data("index"))
        }; e.fn.moveUp = function () {
            var t = e(this);
            index = e(r.sectionContainer + ".active").data("index"); current = e(r.sectionContainer + "[data-index='" + index + "']"); next = e(r.sectionContainer + "[data-index='" + (index - 1) + "']");
            if (next.length < 1) {
                if (r.loop == true) {
                    pos = (total - 1) * 100 * -1;
                    next = e(r.sectionContainer + "[data-index='" + total + "']")
                } else { return }
            } else { pos = (next.data("index") - 1) * 100 * -1 }
            if (typeof r.beforeMove == "function") r.beforeMove(next.data("index"));
            current.removeClass("active"); next.addClass("active");
            if (r.pagination == true) {
                e(".onepage-pagination li a" + "[data-index='" + index + "']").removeClass("active");
                e(".onepage-pagination li a" + "[data-index='" + next.data("index") + "']").addClass("active")
            } e("body")[0].className = e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, ""); e("body").addClass("viewing-page-" + next.data("index"));
            if (history.replaceState && r.updateURL == true) {
                var n = window.location.href.substr(0, window.location.href.indexOf("#")) + "#" + (index - 1); history.pushState({}, document.title, n)
            } t.transformPage(r, pos, next.data("index"))
        }; e.fn.moveTo = function (t) {
            current = e(r.sectionContainer + ".active");
            next = e(r.sectionContainer + "[data-index='" + t + "']");
            if (next.length > 0) {
                if (typeof r.beforeMove == "function") r.beforeMove(next.data("index"));
                current.removeClass("active"); next.addClass("active");
                e(".onepage-pagination li a" + ".active").removeClass("active");
                e(".onepage-pagination li a" + "[data-index='" + t + "']").addClass("active");
                e("body")[0].className = e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, ""); e("body").addClass("viewing-page-" + next.data("index")); pos = (t - 1) * 100 * -1;
                if (history.replaceState && r.updateURL == true) {
                    var n = window.location.href.substr(0, window.location.href.indexOf("#")) + "#" + (t - 1);
                    history.pushState({}, document.title, n)
                } i.transformPage(r, pos, t)
            }
        }; i.addClass("onepage-wrapper").css("position", "relative");
        e.each(s, function (t) {
            e(this).css({ position: "absolute", top: topPos + "%" }).addClass("section").attr("data-index", t + 1); e(this).css({ position: "absolute", left: r.direction == "horizontal" ? leftPos + "%" : 0, top: r.direction == "vertical" || r.direction != "horizontal" ? topPos + "%" : 0 });
            if (r.direction == "horizontal") leftPos = leftPos + 100; else topPos = topPos + 100; if (r.pagination == true) {
                paginationList += "<li><a data-index='" + (t + 1) + "' href='#" + (t + 1) + "'></a></li>"
            }
        }); i.swipeEvents().bind("swipeDown", function (t) {
            if (!e("body").hasClass("disabled-onepage-scroll")) t.preventDefault(); i.moveUp()
        }).bind("swipeUp", function (t) {
            if (!e("body").hasClass("disabled-onepage-scroll")) t.preventDefault(); i.moveDown()
        }); if (r.pagination == true) {
            if (e("ul.onepage-pagination").length < 1) e("<ul class='onepage-pagination'></ul>").prependTo("body");
            if (r.direction == "horizontal") {
                posLeft = i.find(".onepage-pagination").width() / 2 * -1; i.find(".onepage-pagination").css("margin-left", posLeft)
            } else {
                posTop = i.find(".onepage-pagination").height() / 2 * -1; i.find(".onepage-pagination").css("margin-top", posTop)
            } e("ul.onepage-pagination").html(paginationList)
        } if (window.location.hash != "" && window.location.hash != "#1") {
            init_index = window.location.hash.replace("#", "");
            if (parseInt(init_index) <= total && parseInt(init_index) > 0) {
                e(r.sectionContainer + "[data-index='" + init_index + "']").addClass("active"); e("body").addClass("viewing-page-" + init_index);
                if (r.pagination == true) e(".onepage-pagination li a" + "[data-index='" + init_index + "']").addClass("active"); next = e(r.sectionContainer + "[data-index='" + init_index + "']"); if (next) { next.addClass("active"); if (r.pagination == true) e(".onepage-pagination li a" + "[data-index='" + init_index + "']").addClass("active"); e("body")[0].className = e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, ""); e("body").addClass("viewing-page-" + next.data("index")); if (history.replaceState && r.updateURL == true) { var a = window.location.href.substr(0, window.location.href.indexOf("#")) + "#" + init_index; history.pushState({}, document.title, a) } } pos = (init_index - 1) * 100 * -1; i.transformPage(r, pos, init_index)
            } else {
                e(r.sectionContainer + "[data-index='1']").addClass("active"); e("body").addClass("viewing-page-1");
                if (r.pagination == true) e(".onepage-pagination li a" + "[data-index='1']").addClass("active")
            }
        } else {
            e(r.sectionContainer + "[data-index='1']").addClass("active"); e("body").addClass("viewing-page-1");
            if (r.pagination == true) e(".onepage-pagination li a" + "[data-index='1']").addClass("active")
        } if (r.pagination == true) {
            e(".onepage-pagination li a").click(function () {
                var t = e(this).data("index");
                i.moveTo(t)
            })
        } e(document).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function (t) {
            t.preventDefault(); var n = t.originalEvent.wheelDelta || -t.originalEvent.detail;
            if (!e("body").hasClass("disabled-onepage-scroll")) u(t, n)
        }); if (r.responsiveFallback != false) {
            e(window).resize(function () { o() });
            o()
        } if (r.keyboard == true) {
            e(document).keydown(function (t) {
                var n = t.target.tagName.toLowerCase();
                if (!e("body").hasClass("disabled-onepage-scroll")) {
                    switch (t.which) {
                        case 38: if (n != "input" && n != "textarea") i.moveUp();
                            break;
                        case 40: if (n != "input" && n != "textarea") i.moveDown();
                            break;
                        case 32: if (n != "input" && n != "textarea") i.moveDown();
                            break;
                        case 33: if (n != "input" && n != "textarea") i.moveUp();
                            break;
                        case 34: if (n != "input" && n != "textarea") i.moveDown();
                            break;
                        case 36: i.moveTo(1);
                            break;
                        case 35: i.moveTo(total);
                            break;
                        default: return
                    }
                }
            })
        } return false
    }
}(window.jQuery)






