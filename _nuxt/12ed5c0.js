(window.webpackJsonp=window.webpackJsonp||[]).push([[15,6,8],{255:function(t,e,n){var content=n(260);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(102).default)("6bc03061",content,!0,{sourceMap:!1})},256:function(t,e,n){"use strict";n.r(e);var o={name:"BaseTitle"},r=(n(259),n(45)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h2",{staticClass:"title fs--48"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},259:function(t,e,n){"use strict";n(255)},260:function(t,e,n){var o=n(101),r=n(182),c=n(183),l=n(184),d=n(185),f=o(!1),h=r(c),m=r(l),y=r(d);f.push([t.i,'@font-face{font-family:"Aeonik Pro";font-style:normal;font-weight:400;font-display:swap;src:url('+h+') format("opentype")}@font-face{font-family:"Aeonik Pro";font-style:normal;font-weight:700;font-display:swap;src:url('+m+') format("opentype")}@font-face{font-family:"Aeonik Pro";font-style:normal;font-weight:900;font-display:swap;src:url('+y+') format("opentype")}.title{background-image:radial-gradient(#05ff8b,#009f55);-webkit-background-clip:text;background-clip:text;color:transparent;text-align:center}@media (min-width:600px){.title{font-size:65px}}',""]),t.exports=f},270:function(t,e,n){var content=n(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(102).default)("5cebd337",content,!0,{sourceMap:!1})},290:function(t,e,n){var content=n(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(102).default)("4dbb40aa",content,!0,{sourceMap:!1})},291:function(t,e,n){"use strict";n(270)},292:function(t,e,n){var o=n(101),r=n(182),c=n(183),l=n(184),d=n(185),f=o(!1),h=r(c),m=r(l),y=r(d);f.push([t.i,'@font-face{font-family:"Aeonik Pro";font-style:normal;font-weight:400;font-display:swap;src:url('+h+') format("opentype")}@font-face{font-family:"Aeonik Pro";font-style:normal;font-weight:700;font-display:swap;src:url('+m+') format("opentype")}@font-face{font-family:"Aeonik Pro";font-style:normal;font-weight:900;font-display:swap;src:url('+y+') format("opentype")}.cards{max-width:864px}.cards,.cards.flickity-enabled{width:100%}.cards.focus-visible,.cards[focus-within]{outline:none}.cards.focus-visible,.cards:focus-within{outline:none}.cards:focus-visible,.cards[focus-within]{outline:none}.cards:focus-visible,.cards:focus-within{outline:none}.card{flex-direction:column;padding:32px;width:100%;max-width:40ch;background:#fff;border-radius:32px;transition:.3s}.card.focus-visible,.card[focus-within]{outline:none}.card.focus-visible,.card:focus-within{outline:none}.card:focus-visible,.card[focus-within]{outline:none}.card:focus-visible,.card:focus-within{outline:none}.card>*+*{margin:16px 0 0}.card__subtitle,.card__text,.card__title{width:100%;transition:.3s}.card__subtitle{padding:0 0 16px;border-bottom:1px solid rgba(0,0,0,.1)}.card__image-wrap{flex-grow:1}.card__image{max-width:100%}.card__button{width:100%;height:50px}.flickity-slider .card{margin:0 16px 0 0}ol.flickity-page-dots{position:relative;bottom:unset;display:flex;align-items:center;justify-content:center;list-style:none;margin:32px 0 0}ol.flickity-page-dots .dot{margin:7px;width:16px;height:16px;background:0;border:2px solid #009f55;border-radius:50%}ol.flickity-page-dots .dot.is-selected{margin:5px;width:20px;height:20px;background:#009f55}.hide{display:none}@media (min-width:886px){.cards{display:flex;flex-wrap:wrap}.card{margin:16px}.card:hover{background:#009f55}.card:hover .card__title{color:#01522c}.card:hover .card__subtitle,.card:hover .card__text{color:#fff;opacity:1}.card:hover .card__button{background:#63ca02;border-color:#63ca02}}',""]),t.exports=f},299:function(t,e,n){"use strict";n.r(e);n(59),n(13),n(31),n(316);var o={name:"BaseCards",data:function(){return{cards:[{title:"Impermanent Loss Protection (ILP)",subtitle:"Prevents users from being penalised for providing liquidity.",src:"card1.png",alt:"Elk ILP Graph",text:"Each day in a farm provides liquidity providers with ~2.5% of ILP coverage until 100% has been reached. Users can claim ELK rewards at any time; ILP coverage is prorated based on length of time in the farm.",buttontext:"Read More",link:"https://medium.com/elk-finance/impermanent-loss-protection-new-farms-aecd6e1e9992/"},{title:"Dynamic farming",subtitle:"Promotes a sustainable token trajectory.",src:"card2.png",text:"Emission targets are used to adjust rewards dynamically on each chain at the start of each farming round.",buttontext:"Check out Farms",link:"https://app.elk.finance/#/elk/"},{title:"$CHFT",subtitle:"A Multi-chain Native Stablecoin",src:"card3.png",text:"The first cross-chain stablecoin based on an innovative “gyroscopic” design, which allows it to be minted natively on any network that Elk supports.",buttontext:"Read More",link:"https://docs.elk.finance/tokens/chft-stablecoin/"},{title:"Proxy Tokens",subtitle:"Cross-chain virtual assets.",src:"card4.png",text:"Proxy tokens transform any token into a virtual asset that can be moved to any chain.",buttontext:"Read More",link:"https://medium.com/elk-finance/beyond-the-bridge-exploring-use-cases-for-the-elk-blockchain-b744cd4da8d1"}]}},mounted:function(){var t=new(n(317))(this.$refs.slider,{draggable:!0,prevNextButtons:!1});window.addEventListener("resize",(function(){window.innerWidth<886?t.activate():t.deactivate()})),window.dispatchEvent(new CustomEvent("resize")),document.querySelector(".flickity-viewport")&&setTimeout((function(){document.querySelectorAll(".flickity-slider .card").forEach((function(t){t.style.height="".concat(document.querySelector(".flickity-viewport").offsetHeight,"px")}))}),300)}},r=(n(291),n(45)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"slider",staticClass:"cards flex--x-center"},t._l(t.cards,(function(e,i){return n("div",{key:e+i,staticClass:"card flex flex--r-nowrap fc--black"},[n("p",{staticClass:"card__title fs--32 fc--green fw--700"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"card__subtitle o--6"},[t._v(t._s(e.subtitle))]),t._v(" "),n("div",{staticClass:"card__image-wrap flex flex--x-center flex--y-center"},[n("img",{staticClass:"card__image",attrs:{src:"/"+e.src,alt:e.alt}})]),t._v(" "),n("p",{staticClass:"card__text o--6"},[t._v(t._s(e.text))]),t._v(" "),n("a",{staticClass:"button button--purple card__button",attrs:{href:e.link}},[t._v(t._s(e.buttontext))])])})),0)}),[],!1,null,null,null);e.default=component.exports},314:function(t,e,n){"use strict";n(290)},315:function(t,e,n){var o=n(101),r=n(182),c=n(183),l=n(184),d=n(185),f=o(!1),h=r(c),m=r(l),y=r(d);f.push([t.i,'@font-face{font-family:"Aeonik Pro";font-style:normal;font-weight:400;font-display:swap;src:url('+h+') format("opentype")}@font-face{font-family:"Aeonik Pro";font-style:normal;font-weight:700;font-display:swap;src:url('+m+') format("opentype")}@font-face{font-family:"Aeonik Pro";font-style:normal;font-weight:900;font-display:swap;src:url('+y+') format("opentype")}.sectionWhy{flex-direction:column;padding:32px 16px 80px;width:100%;overflow-x:hidden}.sectionWhy__title{margin:48px 0 32px}',""]),t.exports=f},335:function(t,e,n){"use strict";n.r(e);var o={name:"SectionWhy"},r=(n(314),n(45)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sectionWhy flex flex--y-center"},[n("BaseTitle",{staticClass:"sectionWhy__title"},[t._v("Why ELK?")]),t._v(" "),n("BaseCards")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseTitle:n(256).default,BaseCards:n(299).default})}}]);