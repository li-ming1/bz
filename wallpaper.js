//var seting = {
//    apiUrl: "api.php",    // api鍦板潃
//    ratio: 0.618,        // 鍥剧墖瀹介珮姣�
//    types: '360new',     // 鍔犺浇澹佺焊鐨勭绫�
//    downApi: 'http://image.baidu.com/search/down?tn=download&word=download&ie=utf8&fr=detail&url=' // 鐢ㄤ簬涓嬭浇鍥剧墖鐨刟pi鍦板潃
//};
//var jigsaw = {
//    count: 0,            // 宸插姞杞界殑鎬绘暟
//    halfHtml: '',
//    pageno: 0,	// 鏈€鍚庝竴涓姞杞界殑html
//    value: '',
//    loadBig: false,      // 鏄惁宸插姞杞芥渶澶х殑閭ｄ釜
//    ajaxing: false        //鏄惁姝ｅ湪ajax鍔犺浇
//};
//// 澶у皬鏀瑰彉
//window.onresize = function () {
//    resizeHeight();
//};
//// 鍒濆鍖�
//window.onload = function () {
//    ajax360Tags();
//    loadData(seting.types, true);   // 鍒濆鍔犺浇澹佺焊
//    loadData(seting.types, false);
//    loadData(seting.types, false);
//    resizeHeight();
//};

//$(function () {

//    // 鐩戝惉婊氬姩娑堟伅
//    $(window).scroll(function () {

//        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

//        if (scrollTop + $(window).height() + 57 >= $(document).height() && scrollTop > 20) {

//            if (seting.types === '360search') {
//                loadDataSearch(seting.types, false, jigsaw.value);
//                loadDataSearch(seting.types, false, jigsaw.value);
//            } else {
//                if (seting.types != "bing") {
//                    loadData(seting.types, false);
//                    loadData(seting.types, false);
//                }
//            }
//        }
//        if (seting.types != 'bing' && seting.types != 'ciba') {
//            if (scrollTop >= 300) {
//                $('#toolBall').fadeIn(400);
//            } else {
//                $('#toolBall').fadeOut(200);
//            }
//        }
//    });

//    $("#toolBall").click(function () {
//        if (seting.types == 'bing' || seting.types == 'ciba') {
//            return true;
//        }
//        $("html,body").animate({ "scrollTop": top });
//        return false;
//    });

//    // 鐐瑰嚮鍏抽棴寮瑰嚭灞�
//    $("body").on("click", "#full-img", function () {
//        $("#full-img").remove();
//    });

//    // 鐐瑰嚮灏忓浘鏄剧ず澶у浘
//    $("#walBox").on("click", "img", function () {
//        showImg($(this).data('realurl'));
//    });
//});

//// 鍔犺浇澹佺焊瀹瑰櫒涓殑澹佺焊
//function loadData(types, newload) {
//    $(".navbar-collapse").removeClass("show");
//    if (types != seting.types || newload === true) {

//        seting.types = types;
//        jigsaw = {
//            count: 0,            // 宸插姞杞界殑鎬绘暟
//            halfHtml: '',        // 鏈€鍚庝竴涓姞杞界殑html
//            pageno: 0,
//            value: '',
//            loadBig: false,      // 鏄惁宸插姞杞芥渶澶х殑閭ｄ釜
//            ajaxing: false        //鏄惁姝ｅ湪ajax鍔犺浇
//        };
//        $("#walBox").html('');
//        $(document).unbind('mousewheel DOMMouseScroll MozMousePixelScroll');    // 瑙ｉ櫎鍏ㄥ睆婊氬姩鐨勭粦瀹�
//        $(".onepage-pagination").remove();
//        $("body").removeClass();
//        $(".jigsaw").removeAttr("style");
//        $("#toolBall").attr('href', 'javascript:void(0);');
//        $("#toolBall").attr('class', 'uptoTop');
//        $("#toolBall").attr('title', '杩斿洖椤堕儴');
//        $("#toolBall").hide();
//    }

//    switch (seting.types) {
//        case 'bing':    //鍔犺浇蹇呭簲澹佺焊
//            ajaxBingWal(-1, 8);
//            ajaxBingWal(7, 8);
//            $("#toolBall").show();
//            $("#toolBall").attr('class', 'downBing');
//            $("#toolBall").attr('title', '涓嬭浇杩欏紶鍥剧墖');
//            break;

//        case 'ciba':    // 鍔犺浇閲戝北璇嶉湼姣忔棩涓€鍙ュ绾�
//            if (newload === false) return;
//            ajaxCiba(1);
//            $("#toolBall").show();
//            $("#toolBall").attr('class', 'downBing');
//            $("#toolBall").attr('title', '涓嬭浇杩欏紶鍥剧墖');
//            break;

//        default:    // 鍔犺浇鏉ヨ嚜360鐨勫绾�
//            ajax360Wal(seting.types, jigsaw.pageno, 10);
//    }
//}

//// 鍔犺浇澹佺焊瀹瑰櫒涓殑澹佺焊
//function loadDataSearch(types, newload, content) {
//    if (types != seting.types || newload === true) {
//        seting.types = types;
//        jigsaw = {
//            count: 0,            // 宸插姞杞界殑鎬绘暟
//            halfHtml: '',        // 鏈€鍚庝竴涓姞杞界殑html
//            pageno: 0,
//            value: '',
//            loadBig: false,      // 鏄惁宸插姞杞芥渶澶х殑閭ｄ釜
//            ajaxing: false        //鏄惁姝ｅ湪ajax鍔犺浇
//        };
//        $("#walBox").html('');
//        $(document).unbind('mousewheel DOMMouseScroll MozMousePixelScroll');    // 瑙ｉ櫎鍏ㄥ睆婊氬姩鐨勭粦瀹�
//        $(".onepage-pagination").remove();
//        $("body").removeClass();
//        $(".jigsaw").removeAttr("style");
//        $("#toolBall").attr('href', 'javascript:void(0);');
//        $("#toolBall").attr('class', 'uptoTop');
//        $("#toolBall").attr('title', '杩斿洖椤堕儴');
//        $("#toolBall").hide();
//    }
//    switch (seting.types) {
//        case '360search':
//            jigsaw.value = content;
//            ajax360WalSearch(seting.types, jigsaw.pageno, 10, content);
//            break;
//    }
//}

//resizeHeight();

//// 閲嶆柊璋冩暣楂樺害
//function resizeHeight() {
//    switch (seting.types) {
//        default:
//            var newHeight = $("#walBox").width() * (seting.ratio / 2);    // parseInt($(".jigsaw .half").css('width'))
//            $(".jigsaw .item").css('height', newHeight);
//            $(".jigsaw .Hhalf").css('height', newHeight / 2);
//    }
//    return true;
//}

//// 鏄剧ず涓€寮犳嫾鍥惧绾�
//function addJigsaw(img, alt) {
//    var newHtml;    // 鏂板鐨勫唴瀹�
//    jigsaw.count++;    // 宸插姞杞藉绾告暟鑷姞

//    if (jigsaw.halfHtml !== '')    //  1/4 鐨勫绾革紝宸插姞杞藉畬涓婇潰涓€鍗婏紝鎺ョ潃鍔犺浇涓嬮潰閭ｅ崐
//    {
//        newHtml = '    <div class="Hhalf oneImg" onmouseover="hoverJigsawSearch(this)">'
//            + '        <img data-original="' + img + '" alt="' + alt + '" title="鍏抽敭瀛楋細' + alt + '" data-realurl="' + img + '">'
//            + '    </div>'
//            + '</div>';
//        contAdd(jigsaw.halfHtml + newHtml);    //寰€瀹瑰櫒涓姞鍏ュ唴瀹�
//        jigsaw.halfHtml = '';    // 鍙﹀鍗婅竟鍔犺浇瀹屾垚
//        return true;    // 鍑芥暟鍔熻兘宸插畬鎴�
//    }

//    if (((jigsaw.count - 1) % 5) === 0) {
//        jigsaw.loadBig = false;
//    }    // 鏂扮殑涓€琛岋紝鐘舵€侀噸缃�

//    if ((jigsaw.loadBig === false) && ((Math.floor(Math.random() * 3) === 0) || ((jigsaw.count % 5) === 0)))    // 闅忔満鍔犺浇澶у紶澹佺焊
//    {
//        newHtml = '<div class="item half oneImg" onmouseover="hoverJigsawSearch(this)">'
//            + '    <img data-original="' + img + '" alt="' + alt + '" title="鍏抽敭瀛楋細' + alt + '" data-realurl="' + img + '">'
//            + '</div>';
//        contAdd(newHtml);    //寰€瀹瑰櫒涓姞鍏ュ唴瀹�
//        jigsaw.loadBig = true;    // 澶у紶澹佺焊宸茶鍔犺浇
//        return true;    // 鍑芥暟鍔熻兘宸插畬鎴�
//    }

//    // 鍔犺浇鍗婂紶鐨勫绾�
//    jigsaw.halfHtml = '<div class="item quater">'
//        + '    <div class="Hhalf oneImg" onmouseover="hoverJigsawSearch(this)">'
//        + '        <img data-original="' + img + '" alt="' + alt + '" title="鍏抽敭瀛楋細' + alt + '" data-realurl="' + img + '">'
//        + '    </div>';
//    return true;
//}

//// 寰€澹佺焊瀹瑰櫒涓姞鍏ュ唴瀹�
//function contAdd(html) {
//    var myBox = $("#walBox");    // 瑁呭绾哥殑瀹瑰櫒
//    var $newHtml = $(html);
//    myBox.append($newHtml);    // 鍔犺浇鍒板鍣ㄤ腑
//    $("img", $newHtml).lazyload({
//        effect: 'fadeIn',
//        threshold: 200 // 鎻愬墠寮€濮嬪姞杞�
//    });
//}
//// ajax鍔犺浇蹇呭簲澹佺焊
//function ajaxBingWal(start, count) {
//    $.ajax({
//        type: "GET",
//        url: seting.apiUrl,
//        data: "cid=bing&start=" + start + "&count=" + count,
//        dataType: "json",
//        success: function (jsonData) {
//            let newHtml = "";
//            if (isPC()) {
//                newHtml += '<link rel="stylesheet" href="css/onepage-scroll.css">', downUrl = '';
//                $("#walBox").append(newHtml);   // 鍏ㄥ睆婊氬姩鎻掍欢css
//            }
//            for (var i = 0; i < jsonData.images.length; i++) {
//                downUrl = seting.downApi + 'http://cn.bing.com' + jsonData.images[i].url;
//                if (isPC()) {
//                    newHtml += '<section data-url="' + downUrl + '" data-img="http://cn.bing.com' + jsonData.images[i].url + '"><p class="note">' + jsonData.images[i].copyright + '</p></section>';
//                } else {
//                    let copyright = getParenthesesStr(jsonData.images[i].copyright);
//                    let title = jsonData.images[i].copyright.replace(copyright, "");
//                    copyright = copyright.substring(1, copyright.length - 1);
//                    newHtml += `<div class="xben-by-img"><img data-realurl="http://cn.bing.com${jsonData.images[i].url}" src="http://cn.bing.com${jsonData.images[i].url}" /> <p class="title">${title}<a href="${downUrl}" class="xben-bing-download">&nbsp|&nbsp绔嬪嵆涓嬭浇</a></p><p class="copyright">${copyright}</p></div>`;
//                    $("#toolBall").css("display", "none");
//                }

//            }
//            $("#walBox").append(newHtml);
//            if (isPC()) {
//                $('#walBox').onepage_scroll({
//                    // sectionContainer: '#walBox',
//                    // direction: 'horizontal',  // 姘村钩婊氬姩
//                    // pagination: false,  // 涓嶆樉绀哄彸渚у渾鐐�
//                    // easing: 'ease-in',
//                    loop: false,    // 绂佹寰幆婊氬姩
//                    beforeMove: function (index) {
//                        $("#toolBall").attr('href', $(".section").eq(index - 1).attr('data-url'));
//                        $(".section").eq(index - 1).attr('style', 'background-image: url(' + $(".section").eq(index - 1).attr('data-img') + ')');
//                    },
//                    afterMove: function (index) {
//                        $(".section").eq(index).attr('style', 'background-image: url(' + $(".section").eq(index).attr('data-img') + ')');
//                        $(".section").eq(index - 2).attr('style', 'background-image: url(' + $(".section").eq(index - 2).attr('data-img') + ')');
//                        // $(".section").eq(index-1).attr('style','background-image: url('+ $(".section").eq(index-1).attr('data-img') +')');
//                    }
//                });
//                $("#toolBall").attr('href', $(".section").eq(0).attr('data-url'));
//                $(".section").eq(0).attr('style', 'background-image: url(' + $(".section").eq(0).attr('data-img') + ')');
//            }
//        }
//    });
//    return true;
//}
//// ajax鍔犺浇閲戝北璇嶉湼姣忔棩鍥剧墖
//function ajaxCiba(data) {
//    $.ajax({
//        type: "GET",
//        url: "https://zhouxiaoben.info/iciba/dsapi/",
//        dataType: "jsonp",
//        jsonp: "callback",
//        jsonpCallback: "jQuery111300015518879258571427_1609679126184",
//        success: function (jsonData) {
//            var newHtml = `<div class="xben-day-img" ><img data-realurl="${jsonData.picture2}" src="${jsonData.picture2}"  /><p class="note xben-note" title="${jsonData.translation}"><span onclick="$('audio')[0].play();" title="鐐瑰嚮鏈楄" class="ciba-eng">${jsonData.content}</span><span>${jsonData.note}    <span title="${jsonData.love}浜哄枩娆�" class="ciba-love" onclick="$('.love-count').html(parseInt($('.love-count').html()) + 1)"><span class="xben-love">鈾�</span>&nbsp;<span class="love-count">${jsonData.love}</span></span></span></p><audio src="${jsonData.tts}" hidden></audio></div>`;
//            $("#walBox").append(newHtml);
//            $("#toolBall").attr('href', seting.downApi + jsonData.picture2);    // 涓嬭浇閾炬帴
//        }
//    });
//    return true;
//}

//// ajax鍔犺浇360澹佺焊鏍囩
//function ajax360Tags() {
//    $.ajax({
//        type: "GET",
//        url: seting.apiUrl,
//        data: "cid=360tags",
//        dataType: "json",
//        success: function (jsonData) {
//            var newHtml = '';
//            for (var i = 0; i < jsonData.data.length; i++) {

//                newHtml += '<a class="dropdown-item" href="javascript:void(0)" data-id=' + jsonData.data[i].old_id + ' onclick="loadData(' + jsonData.data[i].old_id + ', true);changeTitle(this)">' + jsonData.data[i].category + '</a>';
//            }
//            $("#xbenTags").append(newHtml);
//        }
//    });
//    return true;
//}

////ajax鎼滅储360澹佺焊
//function ajax360WalSearch(cid, start, count, content) {
//    if (jigsaw.ajaxing === true) return false;
//    $("#loadmore").html('鍔姏鍔犺浇涓€︹€�');
//    $("#loadmore").show();
//    jigsaw.ajaxing = true;
//    jigsaw.pageno++;
//    $.ajax({
//        type: "GET",
//        url: seting.apiUrl,
//        data: "cid=" + cid + "&start=" + start + "&count=" + count + "&content=" + encodeURIComponent(content),
//        dataType: "json",
//        success: function (jsonData) {
//            for (var i = 0; i < jsonData.data.list.length; i++) {
//                addJigsawSearch(jsonData.data.list[i].url, jsonData.data.list[i].tag);
//            }
//            resizeHeight();
//            jigsaw.ajaxing = false;
//            if (jsonData.data.list.length === 0) {
//                $("#loadmore").html('鎵€鏈夌殑澹佺焊閮藉凡缁忓姞杞藉畬鍟︼紒');
//            } else {
//                $("#loadmore").hide();
//            }
//        }
//    });
//    return true;
//}

//// 鏄剧ず涓€寮犳嫾鍥惧绾革紙360鎼滅储锛�
//function addJigsawSearch(img, alt) {
//    var newHtml;    // 鏂板鐨勫唴瀹�
//    jigsaw.count++;    // 宸插姞杞藉绾告暟鑷姞

//    if (jigsaw.halfHtml !== '')    //  1/4 鐨勫绾革紝宸插姞杞藉畬涓婇潰涓€鍗婏紝鎺ョ潃鍔犺浇涓嬮潰閭ｅ崐
//    {

//        newHtml = '    <div class="Hhalf oneImg" onmouseover="hoverJigsawSearch(this)">'
//            + '        <img data-original="' + img + '" alt="' + alt + '" title="鍏抽敭瀛楋細' + alt + '" data-realurl="' + img + '">'
//            + '    </div>'
//            + '</div>';
//        contAdd(jigsaw.halfHtml + newHtml);    //寰€瀹瑰櫒涓姞鍏ュ唴瀹�
//        jigsaw.halfHtml = '';    // 鍙﹀鍗婅竟鍔犺浇瀹屾垚
//        return true;    // 鍑芥暟鍔熻兘宸插畬鎴�
//    }

//    if (((jigsaw.count - 1) % 5) === 0) {
//        jigsaw.loadBig = false;
//    }    // 鏂扮殑涓€琛岋紝鐘舵€侀噸缃�

//    if ((jigsaw.loadBig === false) && ((Math.floor(Math.random() * 3) === 0) || ((jigsaw.count % 5) === 0)))    // 闅忔満鍔犺浇澶у紶澹佺焊
//    {


//        newHtml = '<div class="item half oneImg" onmouseover="hoverJigsawSearch(this)">'
//            + '    <img data-original="' + img + '" alt="' + alt + '" title="鍏抽敭瀛楋細' + alt + '" data-realurl="' + img + '">'
//            + '</div>';
//        contAdd(newHtml);    //寰€瀹瑰櫒涓姞鍏ュ唴瀹�
//        jigsaw.loadBig = true;    // 澶у紶澹佺焊宸茶鍔犺浇
//        return true;    // 鍑芥暟鍔熻兘宸插畬鎴�
//    }

//    // 鍔犺浇鍗婂紶鐨勫绾�
//    jigsaw.halfHtml = '<div class="item quater">'
//        + '    <div class="Hhalf oneImg" onmouseover="hoverJigsawSearch(this)">'
//        + '        <img data-original="' + img + '" alt="' + alt + '" title="鍏抽敭瀛楋細' + alt + '" data-realurl="' + img + '">'
//        + '    </div>';
//    return true;
//}

//// ajax鍔犺浇鏉ヨ嚜360鐨勫绾�
//function ajax360Wal(cid, start, count) {
//    if (jigsaw.ajaxing === true) return false;

//    $("#loadmore").html('鍔姏鍔犺浇涓€︹€�');
//    $("#loadmore").show();
//    jigsaw.ajaxing = true;
//    jigsaw.pageno++;
//    $.ajax({
//        type: "GET",
//        url: seting.apiUrl,
//        data: "cid=" + cid + "&start=" + start + "&count=" + count,
//        dataType: "json",
//        success: function (jsonData) {
//            for (var i = 0; i < jsonData.data.list.length; i++) {
//                addJigsaw(jsonData.data.list[i].url, jsonData.data.list[i].tag);
//            }
//            resizeHeight();
//            jigsaw.ajaxing = false;
//            if (jsonData.data.list.length === 0) {
//                $("#loadmore").html('鎵€鏈夌殑澹佺焊閮藉凡缁忓姞杞藉畬鍟︼紒');
//            } else {
//                $("#loadmore").hide();
//            }
//        }
//    });
//    return true;
//}



//// 瑙ｇ爜360鍥剧墖鐨勯摼鎺ワ紝鑾峰緱鎸囧畾灏哄鍥剧墖
//function decode360Url(oldUrl, width, height, quality) {
//    return oldUrl.replace("r\/__85", "m\/" + parseInt(width) + "_" + parseInt(height) + "_" + quality);
//}

//function hoverJigsawSearch(obj) {
//    if ($(obj).find('.down').length > 0) return true;

//    var realUrl = $(obj).find('img').attr("data-realurl");
//    var downBox = '';
//    downBox = '<ul class="down" title="涓嬭浇澹佺焊">'
//        + '<li><a href="' + seting.downApi + realUrl + '" target="_blank" title="涓嬭浇鍘熷灏哄鍥剧墖">鍘熷灏哄</a></li></ul>'
//    $(obj).append(downBox);
//}

//// 鍚屾鏀瑰彉娴忚鍣ㄦ爣棰�
//function changeTitle(obj) {
//    if ($(obj).html() == '') {
//        $('title').html('灏忕鐢佃剳澹佺焊-灏忕鍦ㄧ嚎澹佺焊-鍦ㄧ嚎鎼滅储');
//    } else {
//        $('title').html($(obj).html() + ' - 鍦ㄧ嚎澹佺焊');
//    }
//}

//var imgDom;
//// 鍏ㄥ睆灞曠ず鍥剧墖
//// 鍙傛暟锛氬浘鐗囬摼鎺�
//function showImg(img) {
//    if (isPC()) {
//        imgDom = $('<img>').attr('id', 'full-img').attr('src', img).appendTo('body');
//        return;
//    }
//    if ($(".xben-full-img").is(":hidden")) {
//        $(".xben-full-img").css("display", "flex");
//        $(".xben-full-img>img").attr("src", img);
//        $(".xben-full-img>img").removeClass("horizontal");
//        $(".horizontal-btn").show();
//    }

//}
////妯睆鏄剧ず
//$(".horizontal-btn").click(function () {
//    $(".xben-full-img>img").addClass("horizontal");
//    $(this).hide();
//})

//$(".xben-full-img").click(function () {
//    $(this).hide();
//});
//$(".xben-full-img .horizontal-btn").click((e) => {
//    e.stopPropagation();
//})

//function loadData360Search() {
//    var text = document.getElementById("360text").value;
//    if (text === "") {
//        text = '涓浗';
//    }
//    loadDataSearch('360search', true, text);
//}

//function isPC() {
//    var userAgentInfo = navigator.userAgent;
//    var Agents = ["Android", "iPhone",
//        "SymbianOS", "Windows Phone",
//        "iPad", "iPod"];
//    var flag = true;
//    for (var v = 0; v < Agents.length; v++) {
//        if (userAgentInfo.indexOf(Agents[v]) > 0) {
//            flag = false;
//            break;
//        }
//    }
//    return flag;
//}
//function getParenthesesStr(text) {
//    let result = ''
//    if ($.isEmptyObject(text))
//        return result
//    let regex = /\((.+?)\)/g;
//    let options = text.match(regex)
//    if (!$.isEmptyObject(options)) {
//        let option = options[0]
//        if (!$.isEmptyObject(option)) {
//            result = option.substring(0, option.length)
//        }
//    }
//    return result
//}

//console.info('灏忕澹佺焊鏉ユ簮浜庯細360澹佺焊搴撱€佸繀搴旈椤靛绾镐互鍙婇噾灞辫瘝闇稿紑鏀惧钩鍙癨n灏忕鍒嗕韩绔欙細https://zhouxiaoben.info\n鍩轰簬瀛熷潳澹佺焊浜屾寮€鍙慭nGithub锛歨ttps://github.com/water1996/xben-wallpaper');





var settings = {
    apiUrl: "api.php",     // api地址
    ratio: 0.618,         // 黄金比例
    types: '360new',      // 360新标签
    downApi: 'http://image.baidu.com/search/down?tn=download&word=download&ie=utf8&fr=detail&url=' // 下载api地址
};

var jigsaw = {
    count: 0,             // 模块计数
    halfHtml: '',
    pageno: 0,           // 当前页码
    value: '',
    loadBig: false,       // 是否加载大图
    ajaxing: false        // 是否正在ajax加载
};

// 窗口大小变化
window.onresize = function () {
    resizeHeight();
};

// 页面加载完成
window.onload = function () {
    ajax360Tags();
    loadData(settings.types, true);    // 加载360新标签
    loadData(settings.types, false);
    loadData(settings.types, false);
    resizeHeight();
};

$(function () {

    // 窗口滚动事件
    $(window).scroll(function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

        if (scrollTop + $(window).height() + 57 >= $(document).height() && scrollTop > 20) {
            if (settings.types === '360search') {
                loadDataSearch(settings.types, false, jigsaw.value);
                loadDataSearch(settings.types, false, jigsaw.value);
            } else {
                if (settings.types != "bing") {
                    loadData(settings.types, false);
                    loadData(settings.types, false);
                }
            }
        }
        if (settings.types != 'bing' && settings.types != 'ciba') {
            if (scrollTop >= 300) {
                $('#toolBall').fadeIn(400);
            } else {
                $('#toolBall').fadeOut(200);
            }
        }
    });

    $("#toolBall").click(function () {
        if (settings.types == 'bing' || settings.types == 'ciba') {
            return true;
        }
        $("html,body").animate({ "scrollTop": top });
        return false;
    });

    // 全屏图片点击事件
    $("body").on("click", "#full-img", function () {
        $("#full-img").remove();
    });

    // 图片点击事件
    $("#walBox").on("click", "img", function () {
        showImg($(this).data('realurl'));
    });
});

// 加载数据
function loadData(types, newload) {
    $(".navbar-collapse").removeClass("show");
    if (types != settings.types || newload === true) {
        settings.types = types;
        jigsaw = {
            count: 0,             // 模块计数
            halfHtml: '',         // 半屏HTML
            pageno: 0,
            value: '',
            loadBig: false,       // 是否加载大图
            ajaxing: false        // 是否正在ajax加载
        };
        $("#walBox").html('');
        $(document).unbind('mousewheel DOMMouseScroll MozMousePixelScroll');     // 解绑鼠标滚轮事件
        $(".onepage-pagination").remove();
        $("body").removeClass();
        $(".jigsaw").removeAttr("style");
        $("#toolBall").attr('href', 'javascript:void(0);');
        $("#toolBall").attr('class', 'uptoTop');
        $("#toolBall").attr('title', '返回顶部');
        $("#toolBall").hide();
    }

    switch (settings.types) {
        case 'bing':     // bing搜索
            ajaxBingWal(-1, 8);
            ajaxBingWal(7, 8);
            $("#toolBall").show();
            $("#toolBall").attr('class', 'downBing');
            $("#toolBall").attr('title', '下载bing图片');
            break;

        case 'ciba':     // ciba搜索
            if (newload === false) return;
            ajaxCiba(1);
            $("#toolBall").show();
            $("#toolBall").attr('class', 'downBing');
            $("#toolBall").attr('title', '下载ciba图片');
            break;

        default:     // 360搜索
            ajax360Wal(settings.types, jigsaw.pageno, 10);
    }
}

// 加载搜索数据
function loadDataSearch(types, newload, content) {
    if (types != settings.types || newload === true) {
        settings.types = types;
        jigsaw = {
            count: 0,             // 模块计数
            halfHtml: '',         // 半屏HTML
            pageno: 0,
            value: '',
            loadBig: false,       // 是否加载大图
            ajaxing: false        // 是否正在ajax加载
        };
        $("#walBox").html('');
        $(document).unbind('mousewheel DOMMouseScroll MozMousePixelScroll');     // 解绑鼠标滚轮事件
        $(".onepage-pagination").remove();
        $("body").removeClass();
        $(".jigsaw").removeAttr("style");
        $("#toolBall").attr('href', 'javascript:void(0);');
        $("#toolBall").attr('class', 'uptoTop');
        $("#toolBall").attr('title', '返回顶部');
        $("#toolBall").hide();
    }
    switch (settings.types) {
        case '360search':
            jigsaw.value = content;
            ajax360WalSearch(settings.types, jigsaw.pageno, 10, content);
            break;
    }
}

resizeHeight();

// 调整高度
function resizeHeight() {
    switch (settings.types) {
        default:
            var newHeight = $("#walBox").width() * (settings.ratio / 2);     // parseInt($(".jigsaw .half").css('width'))
            $(".jigsaw .item").css('height', newHeight);
            $(".jigsaw .Hhalf").css('height', newHeight / 2);
    }
    return true;
}

// 添加拼图
function addJigsaw(img, alt) {
    var newHtml;     // 新HTML
    jigsaw.count++;     // 模块计数

    if (jigsaw.halfHtml !== '')     // 1/4 模块
    {
        newHtml = '     <div class="Hhalf oneImg" onmouseover="hoverJigsawSearch(this)">'
            + '         <img data-original="' + img + '" alt="' + alt + '" title="原始尺寸' + alt + '" data-realurl="' + img + '">'
            + '     </div>'
            + '</div>';
        contAdd(jigsaw.halfHtml + newHtml);     // 添加到内容
        jigsaw.halfHtml = '';     // 重置半屏HTML
        return true;     // 返回true
    }

    if (((jigsaw.count - 1) % 5) === 0) {
        jigsaw.loadBig = false;
    }     // 模块加载

    if ((jigsaw.loadBig === false) && ((Math.floor(Math.random() * 3) === 0) || ((jigsaw.count % 5) === 0)))     // 随机加载大图
    {
        newHtml = '<div class="item half oneImg" onmouseover="hoverJigsawSearch(this)">'
            + '     <img data-original="' + img + '" alt="' + alt + '" title="原始尺寸' + alt + '" data-realurl="' + img + '">'
            + '</div>';
        contAdd(newHtml);     // 添加到内容
        jigsaw.loadBig = true;     // 设置加载大图
        return true;     // 返回true
    }

    // 添加拼图
    jigsaw.halfHtml = '<div class="item quater">'
        + '     <div class="Hhalf oneImg" onmouseover="hoverJigsawSearch(this)">'
        + '         <img data-original="' + img + '" alt="' + alt + '" title="原始尺寸' + alt + '" data-realurl="' + img + '">'
        + '     </div>';
    return true;
}

// 添加内容
function contAdd(html) {
    var myBox = $("#walBox");     // 盒子
    var $newHtml = $(html);
    myBox.append($newHtml);     // 添加到盒子
    $("img", $newHtml).lazyload({
        effect: 'fadeIn',
        threshold: 200 // 阈值
    });
}

// bing搜索ajax
function ajaxBingWal(start, count) {
    $.ajax({
        type: "GET",
        url: settings.apiUrl,
        data: "cid=bing&start=" + start + "&count=" + count,
        dataType: "json",
        success: function (jsonData) {
            let newHtml = "";
            if (isPC()) {
                newHtml += '<link rel="stylesheet" href="css/onepage-scroll.css">', downUrl = '';
                $("#walBox").append(newHtml);    // 添加css
            }
            for (var i = 0; i < jsonData.images.length; i++) {
                downUrl = settings.downApi + jsonData.images[i].url;
                if (isPC()) {
                    newHtml += '<section data-url="' + downUrl + '" data-img="http://cn.bing.com' + jsonData.images[i].url + '"><p class="note">' + jsonData.images[i].copyright + '</p></section>';
                } else {
                    let copyright = getParenthesesStr(jsonData.images[i].copyright);
                    let title = jsonData.images[i].copyright.replace(copyright, "");
                    copyright = copyright.substring(1, copyright.length - 1);
                    newHtml += `<div class="xben-by-img"><img data-realurl="http://cn.bing.com${jsonData.images[i].url}" src="http://cn.bing.com${jsonData.images[i].url}" /> <p class="title">${title}<a href="${downUrl}" class="xben-bing-download">&nbsp|&nbsp下载</a></p><p class="copyright">${copyright}</p></div>`;
                    $("#toolBall").css("display", "none");
                }
            }
            $("#walBox").append(newHtml);
            if (isPC()) {
                $('#walBox').onepage_scroll({
                    // sectionContainer: '#walBox',
                    // direction: 'horizontal',   // 水平滚动
                    // pagination: false,   // 分页
                    // easing: 'ease-in',
                    loop: false,     // 循环
                    beforeMove: function (index) {
                        $("#toolBall").attr('href', $(".section").eq(index - 1).attr('data-url'));
                        $(".section").eq(index - 1).attr('style', 'background-image: url(' + $(".section").eq(index - 1).attr('data-img') + ')');
                    },
                    afterMove: function (index) {
                        $(".section").eq(index).attr('style', 'background-image: url(' + $(".section").eq(index).attr('data-img') + ')');
                        $(".section").eq(index - 2).attr('style', 'background-image: url(' + $(".section").eq(index - 2).attr('data-img') + ')');
                        // $(".section").eq(index-1).attr('style','background-image: url('+ $(".section").eq(index-1).attr('data-img') +')');
                    }
                });
                $("#toolBall").attr('href', $(".section").eq(0).attr('data-url'));
                $(".section").eq(0).attr('style', 'background-image: url(' + $(".section").eq(0).attr('data-img') + ')');
            }
        }
    });
    return true;
}

// ciba搜索ajax
function ajaxCiba(data) {
    $.ajax({
        type: "GET",
        url: "https://zhouxiaoben.info/iciba/dsapi/",
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "jQuery111300015518879258571427_1609679126184",
        success: function (jsonData) {
            var newHtml = `<div class="xben-day-img" ><img data-realurl="${jsonData.picture2}" src="${jsonData.picture2}"   /><p class="note xben-note" title="${jsonData.translation}"><span onclick="$('audio')[0].play();" title="播放" class="ciba-eng">${jsonData.content}</span><span>${jsonData.note}     <span title="${jsonData.love}喜欢" class="ciba-love" onclick="$('.love-count').html(parseInt($('.love-count').html()) + 1)"><span class="xben-love">❤</span>&nbsp;<span class="love-count">${jsonData.love}</span></span></span></span></p><audio src="${jsonData.tts}" hidden></audio></div>`;
            $("#walBox").append(newHtml);
            $("#toolBall").attr('href', settings.downApi + jsonData.picture2);     // 下载链接
        }
    });
    return true;
}

// 360标签ajax
function ajax360Tags() {
    $.ajax({
        type: "GET",
        url: settings.apiUrl,
        data: "cid=360tags",
        dataType: "json",
        success: function (jsonData) {
            var newHtml = '';
            for (var i = 0; i < jsonData.data.length; i++) {
                newHtml += '<a class="dropdown-item" href="javascript:void(0)" data-id=' + jsonData.data[i].old_id + ' onclick="loadData(' + jsonData.data[i].old_id + ', true);changeTitle(this)">' + jsonData.data[i].category + '</a>';
            }
            $("#xbenTags").append(newHtml);
        }
    });
    return true;
}

// 360搜索ajax
function ajax360WalSearch(cid, start, count, content) {
    if (jigsaw.ajaxing === true) return false;
    $("#loadmore").html('加载中...');
    $("#loadmore").show();
    jigsaw.ajaxing = true;
    jigsaw.pageno++;
    $.ajax({
        type: "GET",
        url: settings.apiUrl,
        data: "cid=" + cid + "&start=" + start + "&count=" + count + "&content=" + encodeURIComponent(content),
        dataType: "json",
        success: function (jsonData) {
            for (var i = 0; i < jsonData.data.list.length; i++) {
                addJigsawSearch(jsonData.data.list[i].url, jsonData.data.list[i].tag);
            }
            resizeHeight();
            jigsaw.ajaxing = false;
            if (jsonData.data.list.length === 0) {
                $("#loadmore").html('没有更多内容');
            } else {
                $("#loadmore").hide();
            }
        }
    });
    return true;
}

// 添加搜索拼图
function addJigsawSearch(img, alt) {
    var newHtml;     // 新HTML
    jigsaw.count++;     // 模块计数

    if (jigsaw.halfHtml !== '')     // 1/4 模块
    {
        newHtml = '     <div class="Hhalf oneImg" onmouseover="hoverJigsawSearch(this)">'
            + '         <img data-original="' + img + '" alt="' + alt + '" title="原始尺寸' + alt + '" data-realurl="' + img + '">'
            + '     </div>'
            + '</div>';
        contAdd(jigsaw.halfHtml + newHtml);     // 添加到内容
        jigsaw.halfHtml = '';     // 重置半屏HTML
        return true;     // 返回true
    }

    if (((jigsaw.count - 1) % 5) === 0) {
        jigsaw.loadBig = false;
    }     // 模块加载

    if ((jigsaw.loadBig === false) && ((Math.floor(Math.random() * 3) === 0) || ((jigsaw.count % 5) === 0)))     // 随机加载大图
    {
        newHtml = '<div class="item half oneImg" onmouseover="hoverJigsawSearch(this)">'
            + '     <img data-original="' + img + '" alt="' + alt + '" title="原始尺寸' + alt + '" data-realurl="' + img + '">'
            + '</div>';
        contAdd(newHtml);     // 添加到内容
        jigsaw.loadBig = true;     // 设置加载大图
        return true;     // 返回true
    }

    // 添加拼图
    jigsaw.halfHtml = '<div class="item quater">'
        + '     <div class="Hhalf oneImg" onmouseover="hoverJigsawSearch(this)">'
        + '         <img data-original="' + img + '" alt="' + alt + '" title="原始尺寸' + alt + '" data-realurl="' + img + '">'
        + '     </div>';
    return true;
}

// 360搜索ajax
function ajax360Wal(cid, start, count) {
    if (jigsaw.ajaxing === true) return false;

    $("#loadmore").html('加载中...');
    $("#loadmore").show();
    jigsaw.ajaxing = true;
    jigsaw.pageno++;
    $.ajax({
        type: "GET",
        url: settings.apiUrl,
        data: "cid=" + cid + "&start=" + start + "&count=" + count,
        dataType: "json",
        success: function (jsonData) {
            for (var i = 0; i < jsonData.data.list.length; i++) {
                addJigsaw(jsonData.data.list[i].url, jsonData.data.list[i].tag);
            }
            resizeHeight();
            jigsaw.ajaxing = false;
            if (jsonData.data.list.length === 0) {
                $("#loadmore").html('没有更多内容');
            } else {
                $("#loadmore").hide();
            }
        }
    });
    return true;
}

// 解码360链接
function decode360Url(oldUrl, width, height, quality) {
    return oldUrl.replace("r\/__85", "m\/" + parseInt(width) + "_" + parseInt(height) + "_" + quality);
}

// 悬浮显示下载链接
function hoverJigsawSearch(obj) {
    if ($(obj).find('.down').length > 0) return true;

    var realUrl = $(obj).find('img').attr("data-realurl");
    var downBox = '';
    downBox = '<ul class="down" title="原始尺寸">'
        + '<li><a href="' + settings.downApi + realUrl + '" target="_blank" title="原始尺寸">原始尺寸</a></li></ul>'
    $(obj).append(downBox);
}

// 更改标题
function changeTitle(obj) {
    if ($(obj).html() == '') {
        $('title').html('360壁纸 - 360壁纸大全 - 壁纸大全');
    } else {
        $('title').html($(obj).html() + ' - 壁纸大全');
    }
}

var imgDom;
// 显示全屏图片
function showImg(img) {
    if (isPC()) {
        imgDom = $('<img>').attr('id', 'full-img').attr('src', img).appendTo('body');
        return;
    }
    if ($(".xben-full-img").is(":hidden")) {
        $(".xben-full-img").css("display", "flex");
        $(".xben-full-img>img").attr("src", img);
        $(".xben-full-img>img").removeClass("horizontal");
        $(".horizontal-btn").show();
    }
}

// 横向滚动
$(".horizontal-btn").click(function () {
    $(".xben-full-img>img").addClass("horizontal");
    $(this).hide();
})

$(".xben-full-img").click(function () {
    $(this).hide();
});

$(".xben-full-img .horizontal-btn").click((e) => {
    e.stopPropagation();
})

function loadData360Search() {
    var text = document.getElementById("360text").value;
    if (text === "") {
        text = '最新';
    }
    loadDataSearch('360search', true, text);
}

function isPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

function getParenthesesStr(text) {
    let result = ''
    if ($.isEmptyObject(text))
        return result
    let regex = /\((.+?)\)/g;
    let options = text.match(regex)
    if (!$.isEmptyObject(options)) {
        let option = options[0]
        if (!$.isEmptyObject(option)) {
            result = option.substring(0, option.length)
        }
    }
    return result
}

