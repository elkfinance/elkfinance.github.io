(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{287:function(t,e,n){var content=n(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(102).default)("1875088f",content,!0,{sourceMap:!1})},308:function(t,e,n){t.exports=n.p+"img/piechart.e03e11d.png"},309:function(t,e,n){"use strict";n(287)},310:function(t,e,n){var o=n(101),l=n(182),c=n(183),r=n(184),_=n(185),m=o(!1),f=l(c),d=l(r),k=l(_);m.push([t.i,'@font-face{font-family:"Aeonik Pro";font-style:normal;font-weight:400;font-display:swap;src:url('+f+') format("opentype")}@font-face{font-family:"Aeonik Pro";font-style:normal;font-weight:700;font-display:swap;src:url('+d+') format("opentype")}@font-face{font-family:"Aeonik Pro";font-style:normal;font-weight:900;font-display:swap;src:url('+k+') format("opentype")}.tokenomics{flex-direction:column;padding:32px 24px;width:100%;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content;background:hsla(0,0%,100%,.1);border-radius:40px;border:1px solid hsla(0,0%,100%,.1)}.tokenomics__title{margin:0 80px 64px 0;height:-webkit-min-content;height:-moz-min-content;height:min-content}.tokenomics__title:after{content:"";position:absolute;top:calc(100% + 4px);left:0;width:100%;height:2px;background:#009f55}.tokenomics__chart,.tokenomics__stats{width:100%}.tokenomics__stats{margin:0 0 16px}.tokenomics__stat-name,.tokenomics__stat-value{flex-direction:column}.tokenomics__stat-name>*,.tokenomics__stat-value>*{margin:0 0 16px}.tokenomics__stat-name{margin:0 16px 0 0}.tokenomics__chart-visual{margin:0 16px 24px 0}.tokenomics__chart-image{width:100%;max-width:254px}.tokenomics__chart-title{bottom:50%;right:50%;transform:translate(50%,50%);width:-webkit-min-content;width:-moz-min-content;width:min-content;text-align:center}.tokenomics__chart-key{flex-direction:column}.tokenomics__chart-label{flex-direction:column;margin:0 0 16px 32px;width:100%}.tokenomics__chart-label:before{content:"";position:absolute;top:0;left:-24px;width:16px;height:16px;border-radius:50%}.tokenomics__chart-label:first-of-type:before{background:#265c4f}.tokenomics__chart-label:nth-of-type(2):before{background:#3c8860}.tokenomics__chart-label:nth-of-type(3):before{background:#65b363}.tokenomics__chart-label:nth-of-type(4):before{background:#abdc62}.tokenomics__chart-label:nth-of-type(5):before{background:#fffd61}',""]),t.exports=m},332:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tokenomics__stat-name flex"},[n("p",[t._v("Total ELK Supply:")]),t._v(" "),n("p",[t._v("Total ELK Issued:")]),t._v(" "),n("p",[t._v("Market Cap:")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"tokenomics__chart-visual pos--rel"},[o("img",{staticClass:"tokenomics__chart-image",attrs:{src:n(308),alt:""}}),t._v(" "),o("div",{staticClass:"tokenomics__chart-title pos--abs fs--20"},[o("span",{staticClass:"tokenomics__chart-altTitle fs--40 fw--700"},[t._v("ELK")]),t._v("\n        distribution\n      ")])])}],l=n(9),c=(n(58),{name:"BaseTokenomics",data:function(){return{totalElkSupply:{value:0},totalElkIssued:{value:0},marketCap:{value:0},labels:[{title:"Community Fund",subtitle:"",value:"20M"},{title:"Yield Farming Rewards",subtitle:"4 years",value:"10M"},{title:"Insurance",subtitle:"(e.g. Impermanent Loss Protection)",value:"10M"},{title:"Team & Advisors",subtitle:"",value:"2M"},{title:"Airdrops",subtitle:"",value:"424K"}]}},fetch:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n,o,l,c,r,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=t.$axios,e.next=3,l.get("https://api.elk.finance/v1/info/circulation");case 3:return c=e.sent,e.next=6,l.get("https://api.elk.finance/v1/info/elknet");case 6:return e.sent,e.next=9,t.$axios({url:"https://api.thegraph.com/subgraphs/name/elkfinance/elkdex-avax",method:"POST",data:{query:'\n            query {\n                tokens(first: 1, where: {symbol: "ELK"}) {\n                    id,\n                    symbol,\n                    name,\n                    decimals,\n                    tokenDayData(orderBy:date, orderDirection:desc, first:1){\n                        date,\n                        priceUSD\n                    }\n                }\n            }\n        '}},{headers:{"Content-Type":"application/json"}});case 9:r=e.sent,_=r.data.data.tokens[0].tokenDayData[0].priceUSD,t.totalElkSupply.value=42424242,t.totalElkIssued.value=null==c||null===(n=c.data)||void 0===n?void 0:n.total,t.marketCap.value=parseInt((null==c||null===(o=c.data)||void 0===o?void 0:o.total)*_);case 14:case"end":return e.stop()}}),e)})))()}}),r=(n(309),n(45)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tokenomics flex flex--y-center"},[n("div",{staticClass:"tokenomics__stats flex flex--x-c"},[n("p",{staticClass:"tokenomics__title fs--24 fw--700 fc--green pos--rel"},[t._v("\n      ELK Tokenomics\n    ")]),t._v(" "),n("div",{staticClass:"tokenomics__stat-data fs--18 flex flex--x-center flex--r-nowrap"},[t._m(0),t._v(" "),n("div",{staticClass:"tokenomics__stat-value flex fw--700"},[n("p",[t._v(t._s(t.totalElkSupply.value.toLocaleString()))]),t._v(" "),n("p",[t._v(t._s(t.totalElkIssued.value.toLocaleString()))]),t._v(" "),n("p",[t._v(t._s(t.marketCap.value.toLocaleString())+" USD")])])])]),t._v(" "),n("div",{staticClass:"tokenomics__chart flex flex--x-center flex--y-center"},[t._m(1),t._v(" "),n("div",{staticClass:"tokenomics__chart-key flex"},t._l(t.labels,(function(label,i){return n("div",{key:label+i,staticClass:"tokenomics__chart-label flex pos--rel"},[n("p",{staticClass:"tokenomics__chart-label-title"},[t._v(t._s(label.title)+" - "),n("span",{staticClass:"tokenomics__chart-label-value fw--700"},[t._v(t._s(label.value))])]),t._v(" "),n("p",{staticClass:"tokenomics__chart-label-subtitle fs--10"},[t._v(t._s(label.subtitle))])])})),0)])])}),o,!1,null,null,null);e.default=component.exports}}]);