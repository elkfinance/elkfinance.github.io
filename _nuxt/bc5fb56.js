(window.webpackJsonp=window.webpackJsonp||[]).push([[14,7,8],{255:function(t,e,n){var content=n(260);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(102).default)("6bc03061",content,!0,{sourceMap:!1})},256:function(t,e,n){"use strict";n.r(e);var o={name:"BaseTitle"},l=(n(259),n(45)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h2",{staticClass:"title fs--48"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},259:function(t,e,n){"use strict";n(255)},260:function(t,e,n){var o=n(101),l=n(182),r=n(183),c=n(184),f=n(185),d=o(!1),_=l(r),m=l(c),x=l(f);d.push([t.i,'@font-face{font-family:"Aeonik Pro";font-style:normal;font-weight:400;font-display:swap;src:url('+_+') format("opentype")}@font-face{font-family:"Aeonik Pro";font-style:normal;font-weight:700;font-display:swap;src:url('+m+') format("opentype")}@font-face{font-family:"Aeonik Pro";font-style:normal;font-weight:900;font-display:swap;src:url('+x+') format("opentype")}.title{background-image:radial-gradient(#05ff8b,#009f55);-webkit-background-clip:text;background-clip:text;color:transparent;text-align:center}@media (min-width:600px){.title{font-size:65px}}',""]),t.exports=d},271:function(t,e,n){var content=n(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(102).default)("6c819caf",content,!0,{sourceMap:!1})},293:function(t,e,n){var content=n(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(102).default)("b7c60bdc",content,!0,{sourceMap:!1})},294:function(t,e,n){"use strict";n(271)},295:function(t,e,n){var o=n(101),l=n(182),r=n(183),c=n(184),f=n(185),d=o(!1),_=l(r),m=l(c),x=l(f);d.push([t.i,'@font-face{font-family:"Aeonik Pro";font-style:normal;font-weight:400;font-display:swap;src:url('+_+') format("opentype")}@font-face{font-family:"Aeonik Pro";font-style:normal;font-weight:700;font-display:swap;src:url('+m+') format("opentype")}@font-face{font-family:"Aeonik Pro";font-style:normal;font-weight:900;font-display:swap;src:url('+x+') format("opentype")}.tiles-container{width:100%}.tiles,.tiles__quarter{flex-direction:column;margin:32px 0;width:100%}.tiles__quarter{padding:0 0 16px;border-bottom:1px solid hsla(0,0%,100%,.1)}.tiles__quarter>*+*{margin:16px 0 0}.tiles__quarter:before{position:absolute;top:-32px;left:0;font-size:22px;font-weight:700}.quarter-1:before{content:"Q1"}.quarter-2:before{content:"Q2"}.quarter-3:before{content:"Q3"}.quarter-4:before{content:"Q4"}.tile{flex-direction:column;padding:16px;width:100%;background:#202020;border-radius:8px}.tile__header{margin:0 0 8px}.tile__name{margin:0 8px 0 0}.tile--done{background:#202020}.tile--done .tile__name{opacity:.8}.tile--done .tile__status{color:#009f55}.tile--done .tile__content{opacity:.5}.tile--planned{background:#01522c}.tile--planned .tile__name,.tile--planned .tile__status{color:#63ca02}.tile--in-development{background:#521ea0}@media (min-width:1258px){.tiles{flex-direction:row;margin:32px 32px 32px 16px;width:-webkit-max-content;width:-moz-max-content;width:max-content}.tiles__quarter{padding:8px;width:auto;border:0;border-left:1px solid hsla(0,0%,100%,.1)}.tiles__quarter:before{transform:translateX(-50%)}.tiles .tile{max-width:265px}}.none{display:none}',""]),t.exports=d},300:function(t,e,n){"use strict";n.r(e);var o={name:"BaseRoadmapTiles",data:function(){return{years:{2022:{quarter1:[{name:"ElkNet V2 Upgrade",status:"done",content:"Fee optimization & faster value transfer"},{name:"Ethereum Arbitrum & Optimism Launch",status:"done",content:""},{name:"New dApp/UI",status:"done",content:"Redesigned UI and UX for ElkDEX and ElkNet"}],quarter2:[{name:"ElkNet Nodes",status:"in-development",content:"Secure ElkNet by staking ELK"},{name:"Community Governance",status:"in-development",content:""},{name:"Elk SDK",status:"in-development",content:"For developers and platforms to build on ElkNet"},{name:"Cross-Chain Swaps",status:"in-development",content:"Direct cross-chain swaps between all the networks supported by ElkNet"},{name:"BaaS",status:"in-development",content:"Alpha release of Bridge-as-a-Service"}],quarter3:[{name:"Non-EVM",status:"planned",content:"Integrating ElkNet to non-EVM networks"},{name:"$CHFT stablecoin",status:"planned",content:"Enable minting of cross-chain native stablecoin"},{name:"BaaS",status:"planned",content:"Beta release of Bridge-as-a-Service"}],quarter4:[{name:"To be revealed",status:"planned",content:""}]}},select:{value:2022}}},methods:{changeYear:function(t){this.select.value=t.target.value,console.log(t.target.value)}}},l=(n(294),n(45)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tiles-container"},t._l(t.years,(function(e,i){return n("div",{key:e+i,staticClass:"tiles flex flex--x-center",class:{none:i!=t.select.value}},[n("div",{staticClass:"tiles__quarter quarter-1 flex pos--rel"},t._l(e.quarter1,(function(e,i){return n("div",{key:e+i,staticClass:"tile flex",class:"tile--"+e.status},[n("div",{staticClass:"tile__header flex flex--x-between"},[n("p",{staticClass:"tile__name fs--20 fw--700"},[t._v("\n            "+t._s(e.name)+"\n          ")]),t._v(" "),n("p",{staticClass:"tile__status"},[t._v("\n            "+t._s(e.status)+"\n          ")])]),t._v(" "),n("p",{staticClass:"tile__content"},[t._v("\n          "+t._s(e.content)+"\n        ")])])})),0),t._v(" "),n("div",{staticClass:"tiles__quarter quarter-2 flex pos--rel"},t._l(e.quarter2,(function(e,i){return n("div",{key:e+i,staticClass:"tile flex",class:"tile--"+e.status},[n("div",{staticClass:"tile__header flex flex--x-between"},[n("p",{staticClass:"tile__name fs--20 fw--700"},[t._v("\n            "+t._s(e.name)+"\n          ")]),t._v(" "),n("p",{staticClass:"tile__status"},[t._v("\n            "+t._s(e.status)+"\n          ")])]),t._v(" "),n("p",{staticClass:"tile__content"},[t._v("\n          "+t._s(e.content)+"\n        ")])])})),0),t._v(" "),n("div",{staticClass:"tiles__quarter quarter-3 flex pos--rel"},t._l(e.quarter3,(function(e,i){return n("div",{key:e+i,staticClass:"tile flex",class:"tile--"+e.status},[n("div",{staticClass:"tile__header flex flex--x-between"},[n("p",{staticClass:"tile__name fs--20 fw--700"},[t._v("\n            "+t._s(e.name)+"\n          ")]),t._v(" "),n("p",{staticClass:"tile__status"},[t._v("\n            "+t._s(e.status)+"\n          ")])]),t._v(" "),n("p",{staticClass:"tile__content"},[t._v("\n          "+t._s(e.content)+"\n        ")])])})),0),t._v(" "),n("div",{staticClass:"tiles__quarter quarter-4 flex pos--rel"},t._l(e.quarter4,(function(e,i){return n("div",{key:e+i,staticClass:"tile flex",class:"tile--"+e.status},[n("div",{staticClass:"tile__header flex flex--x-between"},[n("p",{staticClass:"tile__name fs--20 fw--700"},[t._v("\n            "+t._s(e.name)+"\n          ")]),t._v(" "),n("p",{staticClass:"tile__status"},[t._v("\n            "+t._s(e.status)+"\n          ")])]),t._v(" "),n("p",{staticClass:"tile__content"},[t._v("\n          "+t._s(e.content)+"\n        ")])])})),0)])})),0)}),[],!1,null,null,null);e.default=component.exports},320:function(t,e,n){t.exports=n.p+"d540ebe62dc4e61c6e53ca47c9b497e0.svg"},321:function(t,e,n){"use strict";n(293)},322:function(t,e,n){var o=n(101),l=n(182),r=n(183),c=n(184),f=n(185),d=o(!1),_=l(r),m=l(c),x=l(f);d.push([t.i,'@font-face{font-family:"Aeonik Pro";font-style:normal;font-weight:400;font-display:swap;src:url('+_+') format("opentype")}@font-face{font-family:"Aeonik Pro";font-style:normal;font-weight:700;font-display:swap;src:url('+m+') format("opentype")}@font-face{font-family:"Aeonik Pro";font-style:normal;font-weight:900;font-display:swap;src:url('+x+') format("opentype")}.sectionRoadmap{padding:32px 16px;width:100%;background:#010f1e}.sectionRoadmap__container{flex-direction:column;width:100%}.sectionRoadmap__header{width:100%}.sectionRoadmap__title{margin:0}.sectionRoadmap__logo{height:48px}.sectionRoadmap__dropdown-wrap{align-self:flex-start;margin:0 0 16px}.sectionRoadmap__dropdown-wrap:before{content:"";position:absolute;top:10px;right:-10px;width:5px;height:5px;border:2px solid #009f55;border-top:0;border-left:0;transform:rotate(45deg)}.sectionRoadmap__dropdown{background:#010f1e;border:0;font-family:"aeonik pro",sans-serif;-webkit-appearance:none;-moz-appearance:none;appearance:none}@media (min-width:1258px){.sectionRoadmap__container{padding:32px 24px;width:auto;border:1px solid hsla(0,0%,100%,.1);border-radius:16px}}',""]),t.exports=d},336:function(t,e,n){"use strict";n.r(e);var o={name:"SectionRoadmap"},l=(n(321),n(45)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"sectionRoadmap flex flex--x-center"},[o("div",{staticClass:"sectionRoadmap__container flex flex--y-center"},[o("div",{staticClass:"sectionRoadmap__header flex flex--x-between flex--y-center"},[o("BaseTitle",{staticClass:"sectionRoadmap__title"},[t._v("Roadmap")]),t._v(" "),o("img",{staticClass:"sectionRoadmap__logo",attrs:{src:n(320),alt:"Elk Logo"}})],1),t._v(" "),o("div",{staticClass:"sectionRoadmap__dropdown-wrap pos--rel"},[o("select",{staticClass:"sectionRoadmap__dropdown fs--28 fc--green",on:{change:function(e){return t.$refs.dropdown.changeYear(e)}}},[o("option",{attrs:{value:"2022",selected:""}},[t._v("2022")])])]),t._v(" "),o("BaseRoadmapTiles",{ref:"dropdown"})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseTitle:n(256).default,BaseRoadmapTiles:n(300).default})}}]);