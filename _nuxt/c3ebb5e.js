(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{255:function(t,n,e){t.exports=e.p+"3b009198929ecb514c4d5242662efd68.svg"},256:function(t,n,e){var content=e(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(102).default)("4b7d6201",content,!0,{sourceMap:!1})},267:function(t,n,e){t.exports=e.p+"c0015c3dbbbc8cf701d3ab5548db9713.svg"},268:function(t,n,e){t.exports=e.p+"e4c16c3e429a568ca5d54a66a3f44b62.svg"},269:function(t,n,e){"use strict";e(256)},270:function(t,n,e){var r=e(101),o=e(178),l=e(179),c=e(180),_=e(181),f=r(!1),v=o(l),m=o(c),d=o(_);f.push([t.i,'@font-face{font-family:"Aeonik Pro";font-style:normal;font-weight:400;font-display:swap;src:url('+v+') format("opentype")}@font-face{font-family:"Aeonik Pro";font-style:normal;font-weight:700;font-display:swap;src:url('+m+') format("opentype")}@font-face{font-family:"Aeonik Pro";font-style:normal;font-weight:900;font-display:swap;src:url('+d+') format("opentype")}.navbar{margin:16px 0;width:100%}.navbar__logo{margin:0 16px 0 0;height:40px}.navbar__links{display:none}.navbar__link{margin:0 16px}.navbar__buttons{margin:0 0 0 16px}.navbar__button{margin:0 16px 0 0;width:116px;height:40px}.navbar__button:hover{box-shadow:0 0 32px #8247e5}.navbar__menu-button{padding:0;border:0;border-radius:0;background:0}.navbar__menu-button--icon{height:50%}.navbar__menu-button--full-width{width:100%;height:50px}.navbar__menu{flex-direction:column;top:0;right:0;bottom:0;left:0;padding:0 16px;width:100%;height:100%;background:#009f55;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);transform:translateX(100%);transition:.3s cubic-bezier(.5,0,.5,1)}.navbar__menu-item+.navbar__menu-item{margin:44px 0 0}@supports ((-webkit-backdrop-filter:blur()) or (backdrop-filter:blur())){.navbar__menu{background:rgba(0,159,85,.7)}}.close-button{top:28px;right:18px}.menu-open{transform:translateX(0)}@media (min-width:800px){.navbar{margin:48px 96px;width:calc(100% - 192px)}.navbar__logo{height:auto}.navbar__links{display:flex}.navbar__link{transition:.3s}.navbar__link:after{content:"";position:absolute;width:100%;height:2px;bottom:-2px;left:0;transition:.3s}.navbar__link:hover{color:#01522c;font-weight:700}.navbar__link:hover:after{background:#01522c}.open-button{display:none}}',""]),t.exports=f},288:function(t,n,e){"use strict";e.r(n);var r=[function(){var t=this.$createElement,n=this._self._c||t;return n("a",{staticClass:"navbar__logo",attrs:{href:""}},[n("img",{staticClass:"navbar__logo",attrs:{src:e(255),alt:"ElK Finance Logo"}})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"navbar__links flex flex--x-center"},[e("a",{staticClass:"navbar__link pos--rel",attrs:{href:"https://medium.com/elk-finance/tagged/elk-academy/"}},[t._v("Elk Academy")]),t._v(" "),e("a",{staticClass:"navbar__link pos--rel",attrs:{href:"https://docs.elk.finance/litepaper/"}},[t._v("Litepaper")]),t._v(" "),e("a",{staticClass:"navbar__link pos--rel",attrs:{href:"https://docs.elk.finance/"}},[t._v("Docs")]),t._v(" "),e("a",{staticClass:"navbar__link pos--rel",attrs:{href:"https://docs.elk.finance/roadmap/"}},[t._v("Roadmap")]),t._v(" "),e("a",{staticClass:"navbar__link pos--rel",attrs:{href:"https://linktr.ee/elk_finance/"}},[t._v("Socials")])])}],o={name:"TheNavbar",data:function(){return{menu:{open:!1}}}},l=(e(269),e(45)),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("nav",{staticClass:"navbar flex flex--x-between flex--y-center flex--r-nowrap"},[t._m(0),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"navbar__buttons flex flex--y-center flex--r-nowrap"},[r("a",{staticClass:"button button--purple navbar__button fs--14",attrs:{href:"https://app.elk.finance/#/swap/"}},[t._v("dApp")]),t._v(" "),r("button",{staticClass:"navbar__menu-button open-button flex flex--x-center flex--y-center",on:{click:function(n){t.menu.open=!t.menu.open}}},[r("img",{staticClass:"navbar__menu-button--icon",attrs:{src:e(267),alt:""}})])]),t._v(" "),r("div",{staticClass:"navbar__menu flex flex--x-center flex--y-center pos--abs z--1 fw--700",class:{"menu-open":t.menu.open}},[r("button",{staticClass:"navbar__menu-button close-button  flex flex--x-center flex--y-center pos--abs",on:{click:function(n){t.menu.open=!t.menu.open}}},[r("img",{staticClass:"navbar__menu-button--icon",attrs:{src:e(268),alt:""}})]),t._v(" "),r("a",{staticClass:"navbar__menu-item fs--18",attrs:{href:"https://medium.com/elk-finance/tagged/elk-academy/"}},[t._v("Elk Academy")]),t._v(" "),r("a",{staticClass:"navbar__menu-item fs--18",attrs:{href:"https://docs.elk.finance/litepaper/"}},[t._v("Litepaper")]),t._v(" "),r("a",{staticClass:"navbar__menu-item fs--18",attrs:{href:"https://docs.elk.finance/"}},[t._v("Docs")]),t._v(" "),r("a",{staticClass:"navbar__menu-item fs--18",attrs:{href:"https://docs.elk.finance/roadmap/"}},[t._v("Roadmap")]),t._v(" "),r("a",{staticClass:"navbar__menu-item fs--18",attrs:{href:"https://linktr.ee/elk_finance/"}},[t._v("Socials")]),t._v(" "),r("a",{staticClass:"navbar__menu-item navbar__button navbar__menu-button--full-width button button--purple",attrs:{href:"https://app.elk.finance/#/swap/"}},[t._v("dApp")])])])}),r,!1,null,null,null);n.default=component.exports}}]);