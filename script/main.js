setREVStartSize({
  c: "the_flash",
  rl: [1240, 1024, 768, 480],
  el: [950, 768, 960, 720],
  gw: [1240, 1024, 778, 480],
  gh: [950, 768, 960, 720],
  layout: "fullwidth",
  mh: "0"
});
var revapi23, tpj;
jQuery(function() {
  tpj = jQuery;
  if (tpj("#the_flash").revolution == undefined) {
    revslider_showDoubleJqueryError("#the_flash");
  } else {
    revapi23 = tpj("#the_flash")
      .show()
      .revolution({
        gridwidth: "1240,1024,778,480", //IMG MAS GRANDE
        gridheight: "950,768,960,720", //IMG MAS GRANDE

        responsiveLevels: "1240,1024,768,480", //IMG MAS GRANDE
        //disableProgressBar: "", // <---  SI QUIERO PROGREESBAR COMENTAR ESTE CODIGO
        navigation: {
          mouseScrollNavigation: false,
          onHoverStop: false,
          bullets: {
            enable: true,
            tmp:
              '<div class="text"><div class="minimalist-bullet-num"><span class="cate">{{param1}}</span><br><span class="product">{{param2}}</span></div></div>',
            style: "bullet-text",
            hide_onmobile: true,
            hide_under: 640,
            h_align: "right",
            v_align: "center",
            h_offset: 30,
            direction: "vertical", // bloques del slider
            space: 20 // ESPACIO ENTRE LOS BLOQUES DE SLIDER
          }
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      });
  }
});

var htmlDivCss = unescape(
  "%0A.text%7B%0Atext-align%3Aright%3B%0Aposition%3Arelative%3B%0A%7D%0A.bullet-text%20%7B%0A%20%09white-space%3A%20nowrap%3B%0A%7D%0A%0A.bullet-text%20.tp-bullet%20%7B%0A%20%20%20%0A%20%20%20%20display%3Ainline-block%3B%0A%20%20%20%20width%3Aauto%3B%0A%20%20%20%20height%3A%20auto%3B%0A%20%20%20%20font-size%3A%200%3B%0A%20%20%20%20line-height%3A%201%3B%0A%20%20%20%20opacity%3A0.5%3B%0A%20%20%20%20white-space%3A%20nowrap%3B%0A%20%20%20%20background-color%3A%20transparent%3B%0A%20%20%20%20-webkit-transition%3A%20all%20.25s%20ease%3B%0A%20%20%20%20transition%3A%20all%20.25s%20ease%3B%0A%20%20%20%20margin-bottom%3A20px%3B%0A%7D%0A%0A.bullet-text%20.tp-bullet%3Anot%28%3Alast-child%29%20%7B%0A%09margin-bottom%3A35px%3B%0A%7D%0A%0A.bullet-text%20.minimalist-bullet-num%20%7B%0A%09margin-right%3A0%3B%0A%20%20%20%20font-size%3A%2016px%3B%0A%20%20%20%20font-weight%3A%20400%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20text-align%3A%20right%3B%0A%20%20%20%20padding-bottom%3A10px%3B%0A%7D%0A.bullet-text%20.minimalist-bullet-num%20.cate%7B%0Afont-size%3A15px%3B%0Apadding-bottom%3A5px%3B%0A%7D%0A.bullet-text%20.minimalist-bullet-num%20.product%7B%0Afont-size%3A18px%3B%0Afont-weight%3Abold%3B%0Aline-height%3A32px%3B%0A%7D%0A.bullet-text%20.tp-bullet.selected%2C%0A.bullet-text%20.tp-bullet%3Ahover%20%7B%0A%09opacity%3A%201%3B%0A%7D%0A%0A.bullet-text%20.tp-bullet%20.text%3Aafter%20%7B%0A%09content%3A%20%27%20%27%3B%0A%09display%3A%20inline-block%3B%0A%20%20%20%20vertical-align%3A%20middle%3B%0A%20%20%20%20height%3A%201px%3B%0A%20%20%20%20width%3A%2025px%3B%0A%20%20%20%20background-color%3A%20%23444%20%21important%3B%0A%20%20%20%20-webkit-transition%3A%20all%20.25s%20ease%3B%0A%20%20%20%20transition%3A%20all%20.25s%20ease%3B%0A%20%20%20%20position%3Aabsolute%3B%0A%20%20%20%20right%3A0%3B%0A%20%20%20%20bottom%3A0%3B%0A%7D%0A.bullet-text%20.tp-bullet%3Ahover%20.text%3Aafter%2C%0A.bullet-text%20.tp-bullet.selected%20.text%3Aafter%20%7B%0A%09%20width%3A%2050px%3B%0A%7D%0A%0A%2F%2A%20vertical%20style%20%20%2A%2F%0A%0A.bullet-text.nav-dir-vertical%20.tp-bullet%20%7B%0A%09display%3Ablock%3B%0A%7D%0A%0A.bullet-text.nav-dir-vertical%20.tp-bullet%3Anot%28%3Alast-child%29%20%7B%0A%09margin-bottom%3A15px%3B%0A%7D%0A%0A%0A"
);
var htmlDiv = document.getElementById("rs-plugin-settings-inline-css");
if (htmlDiv) {
  htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
  var htmlDiv = document.createElement("div");
  htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
  document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
}

function setREVStartSize(a) {
  try {
    var b,
      c = document.getElementById(a.c).parentNode.offsetWidth;
    if (
      ((c = 0 === c || isNaN(c) ? window.innerWidth : c),
      (a.tabw = void 0 === a.tabw ? 0 : parseInt(a.tabw)),
      (a.thumbw = void 0 === a.thumbw ? 0 : parseInt(a.thumbw)),
      (a.tabh = void 0 === a.tabh ? 0 : parseInt(a.tabh)),
      (a.thumbh = void 0 === a.thumbh ? 0 : parseInt(a.thumbh)),
      (a.tabhide = void 0 === a.tabhide ? 0 : parseInt(a.tabhide)),
      (a.thumbhide = void 0 === a.thumbhide ? 0 : parseInt(a.thumbhide)),
      (a.mh = void 0 === a.mh || "" == a.mh ? 0 : a.mh),
      "fullscreen" === a.layout || "fullscreen" === a.l)
    )
      b = Math.max(a.mh, window.innerHeight);
    else {
      for (var d in ((a.gw = Array.isArray(a.gw) ? a.gw : [a.gw]), a.rl))
        (void 0 === a.gw[d] || 0 === a.gw[d]) && (a.gw[d] = a.gw[d - 1]);
      for (var d in ((a.gh =
        void 0 === a.el ||
        "" === a.el ||
        (Array.isArray(a.el) && 0 == a.el.length)
          ? a.gh
          : a.el),
      (a.gh = Array.isArray(a.gh) ? a.gh : [a.gh]),
      a.rl))
        (void 0 === a.gh[d] || 0 === a.gh[d]) && (a.gh[d] = a.gh[d - 1]);
      var e,
        f = Array(a.rl.length),
        g = 0;
      for (var d in ((a.tabw = a.tabhide >= c ? 0 : a.tabw),
      (a.thumbw = a.thumbhide >= c ? 0 : a.thumbw),
      (a.tabh = a.tabhide >= c ? 0 : a.tabh),
      (a.thumbh = a.thumbhide >= c ? 0 : a.thumbh),
      a.rl))
        f[d] = a.rl[d] < window.innerWidth ? 0 : a.rl[d];
      for (var d in ((e = f[0]), f))
        e > f[d] && 0 < f[d] && ((e = f[d]), (g = d));
      var h =
        c > a.gw[g] + a.tabw + a.thumbw
          ? 1
          : (c - (a.tabw + a.thumbw)) / a.gw[g];
      b = a.gh[g] * h + (a.tabh + a.thumbh);
    }
    void 0 === window.rs_init_css &&
      (window.rs_init_css = document.head.appendChild(
        document.createElement("style")
      )),
      (document.getElementById(a.c).height = b),
      (window.rs_init_css.innerHTML +=
        "#" + a.c + "_wrapper { height: " + b + "px }");
  } catch (a) {
    console.log("Failure at Presize of Slider:" + a);
  }
}
