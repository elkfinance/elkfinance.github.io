(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{265:function(o,n,e){var content=e(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,e(102).default)("94f1c97e",content,!0,{sourceMap:!1})},281:function(o,n,e){"use strict";e(265)},282:function(o,n,e){var t=e(101),l=e(179),c=e(180),h=e(181),r=e(182),f=t(!1),v=l(c),m=l(h),d=l(r);f.push([o.i,'@font-face{font-family:"Aeonik Pro";font-style:normal;font-weight:400;font-display:swap;src:url('+v+') format("opentype")}@font-face{font-family:"Aeonik Pro";font-style:normal;font-weight:700;font-display:swap;src:url('+m+') format("opentype")}@font-face{font-family:"Aeonik Pro";font-style:normal;font-weight:900;font-display:swap;src:url('+d+') format("opentype")}.chains{width:100%}.chains--vertical{flex-direction:column;padding:16px 0}.chains--vertical .chains__chain{transform:translateY(-50%);width:250px;height:auto}.chains__chainHolder{height:50px}.chains__chainHolder:not(:last-child){display:none}.chains__chain{padding:0 20px;height:32px}@media(min-width:400px){.chains--vertical{padding:16px 32px}}@media(min-width:800px){.chains--vertical{padding:100px 32px 50px}.chains__chain{padding:0 2.5vw;height:32px}.chains__chainHolder{height:100px}.chains__chainHolder:not(:last-child){display:flex}}',""]),o.exports=f},295:function(o,n,e){"use strict";e.r(n);var t={name:"TheChains",props:{type:{type:String,default:"horizontal"}},data:function(){return{chains:[{name:"Avalanche",logo:"/avalanche.svg",logoWhite:"/avalanche.svg"},{name:"Polygon",logo:"/polygon.svg",logoWhite:"/polygon.svg"},{name:"Fantom",logo:"/fantom.svg",logoWhite:"/fantom.svg"},{name:"HECO",logo:"/heco.svg",logoWhite:"/heco.svg"},{name:"Gnosis",logo:"/Gnosis.svg",logoWhite:"/Gnosis.svg"},{name:"Binance Smart Chain",logo:"/binance.svg",logoWhite:"/binance.svg"},{name:"Kucoin Community Chain",logo:"/kucoin.svg",logoWhite:"/kucoin.svg"},{name:"HOO Smart Chain",logo:"/hoo.svg",logoWhite:"/hoo.svg"},{name:"OEC",logo:"/oec.svg",logoWhite:"/oec.svg"},{name:"Harmony",logo:"/harmony.svg",logoWhite:"/harmony.svg"},{name:"Cronos",logo:"/cronos.svg",logoWhite:"/cronos.svg"},{name:"Telos",logo:"/telos.svg",logoWhite:"/telos.svg"},{name:"Elastos",logo:"/elastos.svg",logoWhite:"/elastos.svg"},{name:"Moonriver",logo:"/moonriver.svg",logoWhite:"/moonriver.svg"},{name:"Fuse",logo:"/fuse.svg",logoWhite:"/fuse.svg"},{name:"IoTeX",logo:"/iotex.svg",logoWhite:"/iotex.svg"}]}}},l=(e(281),e(45)),component=Object(l.a)(t,(function(){var o=this,n=o.$createElement,e=o._self._c||n;return"horizontal"===o.type?e("div",{staticClass:"chains chains--horizontal flex flex--r-nowrap"},o._l(o.chains,(function(o,n){return e("img",{key:o+n,staticClass:"chains__chain",attrs:{src:o.logoWhite,alt:o.name+" Logo"}})})),0):e("div",{staticClass:"chains chains--vertical flex flex--r-nowrap pos--rel"},[o._l(o.chains,(function(o,n){return e("div",{key:o+n,staticClass:"chains__chainHolder flex flex--x-center"},[e("img",{staticClass:"chains__chain",attrs:{src:o.logo,alt:o.name+" Logo"}})])})),o._v(" "),o._m(0)],2)}),[function(){var o=this,n=o.$createElement,e=o._self._c||n;return e("div",{staticClass:"chains__chainHolder flex flex--x-center flex--y-center"},[e("span",{staticClass:"sectionHero__alt-title fc--darkblue"},[o._v("All Chains")])])}],!1,null,null,null);n.default=component.exports}}]);