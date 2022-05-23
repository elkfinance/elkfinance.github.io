(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{326:function(t,e,n){var r=n(3);t.exports=r(1..valueOf)},327:function(t,e,n){var content=n(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(102).default)("3c83c44d",content,!0,{sourceMap:!1})},334:function(t,e,n){"use strict";n.r(e);var r=n(9),o=(n(58),n(40),n(13),n(32),n(347),n(350),n(27),n(74),{name:"BaseMoveStats",data:function(){return{blockchains:{value:0},users:{value:0},price:{value:0},done:{value:0},cap:{value:0},total:{value:0},transfersin:{value:0},transfersout:{value:0},valuein:{value:0},valueout:{value:0},crosschain:{value:0},circulating:{value:0},hasAnimationPlayed:!1}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,c,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.next=3,n.get("https://api.elk.finance/v1/info/circulation");case 3:return r=e.sent,e.next=6,n.get("https://api.elk.finance/v1/info/elknet");case 6:o=e.sent,t.circulating.value=r.data.total,t.done.value=o.data.total["num-transfers"],t.total.value=o.data.total["amount-transfers"],t.users.value=o.data.total.users,e.t0=regeneratorRuntime.keys(o.data);case 12:if((e.t1=e.t0()).done){e.next=24;break}if("total"!==(l=e.t1.value)){e.next=16;break}return e.abrupt("continue",12);case 16:f=o.data[l],t.transfersin.value=f["num-transfers-in"],t.transfersout.value=f["num-transfers-out"],t.valuein.value=f["amount-transfers-in"],t.valueout.value=f["amount-transfers-out"],t.blockchains.value=(null!==(c=Object.keys(null==o?void 0:o.data).length)&&void 0!==c?c:1)-1,e.next=12;break;case 24:case"end":return e.stop()}}),e)})))()},methods:{getNumberBase:function(t){return Math.abs(Number(t))>=1e12?{symbol:"T",base:1e12}:Math.abs(Number(t))>=1e9?{symbol:"B",base:1e9}:Math.abs(Number(t))>=1e6?{symbol:"M",base:1e6}:Math.abs(Number(t))>=1e3?{symbol:"k",base:1e3}:{symbol:"",base:1}},formatNumber:function(t,e){var symbol=e.symbol,base=e.base,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;return(t/base).toFixed(n)+symbol},animateValue:function(t,e,n,r){var o=this,l=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],c=null,f=2e3;n=parseFloat(n);var v=this.getNumberBase(n);l||(v={symbol:"",base:1});var m=function l(m){c||(c=m);var progress=Math.min((m-c)/f,1),h=progress*(n-e)+e;n%1==0&&(h=Math.floor(h));var _=o.formatNumber(h,v,r);t.innerHTML=_.replace(".00","").replace(/\.0$/,"").toLocaleString(),progress<1&&window.requestAnimationFrame(l)};window.requestAnimationFrame(m)},intersectionCallback:function(t){t[0].isIntersecting&&!this.hasAnimationPlayed&&(this.animateValue(document.querySelector("#blockchains"),0,this.blockchains.value),this.animateValue(document.querySelector("#users"),0,this.users.value),this.animateValue(document.querySelector("#price"),0,this.price.value),this.animateValue(document.querySelector("#done"),0,this.done.value),this.animateValue(document.querySelector("#cap"),0,this.cap.value),this.animateValue(document.querySelector("#total"),0,this.total.value),this.animateValue(document.querySelector("#transfersin"),0,this.transfersin.value,1),this.animateValue(document.querySelector("#transfersout"),0,this.transfersout.value,1),this.animateValue(document.querySelector("#valuein"),0,this.valuein.value,1),this.animateValue(document.querySelector("#valueout"),0,this.valueout.value,1),this.animateValue(document.querySelector("#crosschain"),0,this.crosschain.value,2),this.hasAnimationPlayed=!0)},getCurrencyPrice:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={BSC:"https://api.thegraph.com/subgraphs/name/elkfinance/elkdex-bsc",AVAX:"https://api.thegraph.com/subgraphs/name/elkfinance/elkdex-avax",HECO:"https://api.thegraph.com/subgraphs/name/elkfinance/elkdex-heco",MATIC:"https://api.thegraph.com/subgraphs/name/elkfinance/elkdex-matic",FTM:"https://api.thegraph.com/subgraphs/name/elkfinance/elkdex-ftm",XDAI:"https://api.thegraph.com/subgraphs/name/elkfinance/elkdex-xdai",HARMONY:"https://graph.t.hmny.io/subgraphs/name/elkfinance/elkdex-harmony",KCC:"https://kcc-graph.elk.finance/subgraphs/name/elkfinance/elkdex-kcc",OKEX:"https://okex-graph.elk.finance/subgraphs/name/elkfinance/elkdex-okex",HOO:"https://hoo-graph.elk.finance/subgraphs/name/elkfinance/elkdex-hoo",ELASTOS:"https://elastos-graph.elk.finance/subgraphs/name/elkfinance/elkdex-elastos",MOONRIVER:"https://moonriver-graph.elk.finance/subgraphs/name/elkfinance/elkdex-moonriver"},n.next=3,e.$axios({url:r[t],method:"POST",data:{query:'\n            query {\n                tokens(first: 1, where: {symbol: "ELK"}) {\n                    id,\n                    symbol,\n                    name,\n                    decimals,\n                    tokenDayData(orderBy:date, orderDirection:desc, first:1){\n                        date,\n                        priceUSD\n                    }\n                }\n            }\n        '}},{headers:{"Content-Type":"application/json"}});case 3:return o=n.sent,n.abrupt("return",o.data.data.tokens[0].tokenDayData[0].priceUSD);case 5:case"end":return n.stop()}}),n)})))()},averageArray:function(t){return t.reduce((function(a,b){return a+b}),0)/t.length}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,symbol,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:new IntersectionObserver(t.intersectionCallback,{threshold:.33}).observe(document.querySelector(".move-stats")),n=["AVAX","BSC","XDAI"],r=[],e.t0=regeneratorRuntime.keys(n);case 5:if((e.t1=e.t0()).done){e.next=14;break}return o=e.t1.value,symbol=n[o],e.next=10,t.getCurrencyPrice(symbol);case 10:l=e.sent,r.push(parseFloat(l)),e.next=5;break;case 14:c=t.averageArray(r).toFixed(2),t.price.value=c,t.crosschain.value=t.total.value*c,t.cap.value=t.circulating.value*c;case 18:case"end":return e.stop()}}),e)})))()}}),l=o,c=(n(351),n(45)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"move-stats fs--12"},[n("div",{staticClass:"move-stats__global-stats pos--rel"},[n("div",{staticClass:"move-stats__global-stat--blockchains flex flex--x-between"},[n("p",{staticClass:"move-stats__stat-title fs--12 lh--180"},[t._v("\n        blockchains\n      ")]),t._v(" "),n("p",{staticClass:"move-stats__stat-value fs--34 fw--700 flex flex--x-between",attrs:{id:"blockchains"}},[t._v("\n        0\n      ")])]),t._v(" "),n("div",{staticClass:"move-stats__global-stat--users flex flex--x-between"},[n("p",{staticClass:"move-stats__stat-title fs--12 lh--180"},[t._v("\n        unique users\n      ")]),t._v(" "),n("p",{staticClass:"move-stats__stat-value fs--34 fw--700 flex flex--x-between",attrs:{id:"users"}},[t._v("\n        0\n      ")])]),t._v(" "),n("div",{staticClass:"move-stats__global-stat--price flex flex--x-between"},[n("p",{staticClass:"move-stats__stat-title fs--12 lh--180"},[t._v("\n        price (average)\n      ")]),t._v(" "),n("p",{staticClass:"move-stats__stat-value fs--34 fw--700 flex flex--x-between",attrs:{id:"price"}},[t._v("\n        0\n      ")])]),t._v(" "),n("div",{staticClass:"move-stats__global-stat--done flex flex--x-between"},[n("p",{staticClass:"move-stats__stat-title fs--12 lh--180"},[t._v("\n        total transfers done\n      ")]),t._v(" "),n("p",{staticClass:"move-stats__stat-value fs--34 fw--700 flex flex--x-between",attrs:{id:"done"}},[t._v("\n        0\n      ")])]),t._v(" "),n("div",{staticClass:"move-stats__global-stat--cap flex flex--x-between"},[n("p",{staticClass:"move-stats__stat-title fs--12 lh--180"},[t._v("\n        total market cap\n      ")]),t._v(" "),n("p",{staticClass:"move-stats__stat-value fs--34 fw--700 flex flex--x-between",attrs:{id:"cap"}},[t._v("\n        0\n      ")])]),t._v(" "),n("div",{staticClass:"move-stats__global-stat--total flex flex--x-between"},[n("p",{staticClass:"move-stats__stat-title fs--12 lh--180"},[t._v("\n        elk transfered total\n      ")]),t._v(" "),n("p",{staticClass:"move-stast__stat-value fs--34 fw--700 flex flex--x-between",attrs:{id:"total"}},[t._v("\n        0\n      ")])])]),t._v(" "),n("div",{staticClass:"move-stats__elknet-stats flex pos--rel"},[n("div",{staticClass:"move-stats__elknet-stat--transfers flex flex--x-between"},[n("p",{staticClass:"move-stat-title fs--12 lh--180"},[t._v("\n        total transfers\n      ")]),t._v(" "),n("div",{staticClass:"move-stats__stat-group flex flex--x-between"},[n("p",{staticClass:"move-stats__stat-value fw--700 fs--34 flex flex--x-between",attrs:{id:"transfersin"}},[t._v("\n          0\n        ")]),t._v(" "),n("p",{staticClass:"move-stats__stat-value fw--700 fs--34 flex flex--x-between",attrs:{id:"transfersout"}},[t._v("\n          0\n        ")])])]),t._v(" "),n("div",{staticClass:"move-stats__elknet-stat--value flex flex--x-between"},[n("p",{staticClass:"move-stats__stat-title fs--12 lh--180"},[t._v("\n        total value transfered\n      ")]),t._v(" "),n("div",{staticClass:"move-stats__stat-group flex flex--x-between"},[n("p",{staticClass:"move-stats__stat-value fw--700 fs--34 flex flex--x-between",attrs:{id:"valuein"}},[t._v("\n          0\n        ")]),t._v(" "),n("p",{staticClass:"move-stats__stat-value fw--700 fs--34 flex flex--x-between",attrs:{id:"valueout"}},[t._v("\n          0\n        ")])])])]),t._v(" "),n("div",{staticClass:"move-stats__crosschain-stat flex flex--x-between fc--green"},[n("p",{staticClass:"move-stats__stat-title fs--12 lh--180"},[t._v("\n      total value moved cross-chain\n    ")]),t._v(" "),n("p",{staticClass:"move-stats__stat-value fw--700 fs--34 flex flex--x-between",attrs:{id:"crosschain"}},[t._v("\n      0\n    ")])])])}],!1,null,null,null);e.default=component.exports},347:function(t,e,n){"use strict";var r=n(14),o=n(0),l=n(3),c=n(104),f=n(19),v=n(15),m=n(187),h=n(39),_=n(103),d=n(186),x=n(5),k=n(73).f,w=n(35).f,y=n(18).f,C=n(326),N=n(348).trim,S="Number",A=o.Number,E=A.prototype,I=o.TypeError,M=l("".slice),O=l("".charCodeAt),V=function(t){var e=d(t,"number");return"bigint"==typeof e?e:R(e)},R=function(t){var e,n,r,o,l,c,f,code,v=d(t,"number");if(_(v))throw I("Cannot convert a Symbol value to a number");if("string"==typeof v&&v.length>2)if(v=N(v),43===(e=O(v,0))||45===e){if(88===(n=O(v,2))||120===n)return NaN}else if(48===e){switch(O(v,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+v}for(c=(l=M(v,2)).length,f=0;f<c;f++)if((code=O(l,f))<48||code>o)return NaN;return parseInt(l,r)}return+v};if(c(S,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var F,T=function(t){var e=arguments.length<1?0:A(V(t)),n=this;return h(E,n)&&x((function(){C(n)}))?m(Object(e),n,T):e},P=r?k(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),L=0;P.length>L;L++)v(A,F=P[L])&&!v(T,F)&&y(T,F,w(A,F));T.prototype=E,E.constructor=T,f(o,S,T)}},348:function(t,e,n){var r=n(3),o=n(22),l=n(11),c=n(349),f=r("".replace),v="["+c+"]",m=RegExp("^"+v+v+"*"),h=RegExp(v+v+"*$"),_=function(t){return function(e){var n=l(o(e));return 1&t&&(n=f(n,m,"")),2&t&&(n=f(n,h,"")),n}};t.exports={start:_(1),end:_(2),trim:_(3)}},349:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},350:function(t,e,n){"use strict";var r=n(6),o=n(0),l=n(3),c=n(50),f=n(326),v=n(188),m=n(5),h=o.RangeError,_=o.String,d=Math.floor,x=l(v),k=l("".slice),w=l(1..toFixed),y=function(t,e,n){return 0===e?n:e%2==1?y(t,e-1,n*t):y(t*t,e/2,n)},C=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=d(r/1e7)},N=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=d(n/t),n=n%t*1e7},S=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=_(data[t]);s=""===s?e:s+x("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:m((function(){return"0.000"!==w(8e-5,3)||"1"!==w(.9,0)||"1.25"!==w(1.255,2)||"1000000000000000128"!==w(0xde0b6b3a7640080,0)}))||!m((function(){w({})}))},{toFixed:function(t){var e,n,r,o,l=f(this),v=c(t),data=[0,0,0,0,0,0],m="",d="0";if(v<0||v>20)throw h("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return _(l);if(l<0&&(m="-",l=-l),l>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(l*y(2,69,1))-69)<0?l*y(2,-e,1):l/y(2,e,1),n*=4503599627370496,(e=52-e)>0){for(C(data,0,n),r=v;r>=7;)C(data,1e7,0),r-=7;for(C(data,y(10,r,1),0),r=e-1;r>=23;)N(data,1<<23),r-=23;N(data,1<<r),C(data,1,1),N(data,2),d=S(data)}else C(data,0,n),C(data,1<<-e,0),d=S(data)+x("0",v);return d=v>0?m+((o=d.length)<=v?"0."+x("0",v-o)+d:k(d,0,o-v)+"."+k(d,o-v)):m+d}})},351:function(t,e,n){"use strict";n(327)},352:function(t,e,n){var r=n(101),o=n(182),l=n(183),c=n(184),f=n(185),v=r(!1),m=o(l),h=o(c),_=o(f);v.push([t.i,'@font-face{font-family:"Aeonik Pro";font-style:normal;font-weight:400;font-display:swap;src:url('+m+') format("opentype")}@font-face{font-family:"Aeonik Pro";font-style:normal;font-weight:700;font-display:swap;src:url('+h+') format("opentype")}@font-face{font-family:"Aeonik Pro";font-style:normal;font-weight:900;font-display:swap;src:url('+_+') format("opentype")}.move-stats{display:grid;grid-template-areas:"global" "elknet" "crosschain";grid-gap:8px;gap:8px;margin:0 0 48px;width:100%;max-width:1160px;text-transform:uppercase}.move-stats__global-stats{display:grid;grid-area:global;grid-template-areas:"blockchains users" "price done" "cap done" "total total";grid-gap:8px;gap:8px;margin:48px 0 0}.move-stats__global-stats:before{content:"GLOBAL";position:absolute;left:0;bottom:calc(100% + 16px)}.move-stats__global-stat--blockchains{grid-area:blockchains}.move-stats__global-stat--users{grid-area:users}.move-stats__global-stat--price{grid-area:price}.move-stats__global-stat--done{grid-area:done}.move-stats__global-stat--cap{grid-area:cap}.move-stats__global-stat--total{grid-area:total}.move-stats__elknet-stats{grid-area:elknet;flex-direction:column;margin:48px 0 0}.move-stats__elknet-stats:before{content:"ELKNET";position:absolute;left:0;bottom:calc(100% + 16px)}.move-stats__elknet-stat--transfers{margin:0 0 8px}.move-stats__crosschain-stat{grid-area:crosschain;background:#fff}.move-stats__crosschain-stat,.move-stats__elknet-stats>*,.move-stats__global-stats>*{padding:12px 10px 10px;min-height:96px;flex-direction:column}.move-stats__global-stats>*{background:#521ea0}.move-stats__elknet-stats>*{background:#01522c}.move-stats__stat-value:before{margin:0 8px 0 0;font-size:15px}#cap:before,#crosschain:before,#price:before{content:"usd"}#transfersin:before,#valuein:before{content:"in"}#transfersout:before,#valueout:before{content:"out"}@media (min-width:1160px){.move-stats{grid-template-areas:"global elknet" "crosschain crosschain"}.move-stats__global-stats{grid-template-areas:"blockchains cap done" "price users total"}.move-stats__global-stats>*{width:260px}.move-stats__elknet-stats>*{width:356px}}',""]),t.exports=v}}]);