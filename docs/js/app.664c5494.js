(function(){var n={1119:function(n,e,t){"use strict";var r=t(9242),c=t(3396);function s(n,e,t,r,s,o){const i=(0,c.up)("CardGame");return(0,c.wg)(),(0,c.j4)(i,{msg:"Welcome to Your Vue.js App"})}t(7658);var o=t(7139),i=t(4870);const a=n=>((0,c.dD)("data-v-0a11ac56"),n=n(),(0,c.Cn)(),n),u={class:"game"},p={class:"cards"},l=["onClick"],f={class:"card-info"},g=a((()=>(0,c._)("div",{class:"card-front"},null,-1))),d={class:"card-back"},m=["src"],v={class:"button-container"},h=a((()=>(0,c._)("span",null,null,-1))),b=a((()=>(0,c._)("span",null,null,-1))),_=a((()=>(0,c._)("span",null,null,-1))),x=a((()=>(0,c._)("span",null,null,-1))),O=a((()=>(0,c._)("span",null,null,-1))),k=a((()=>(0,c._)("span",null,null,-1))),C=a((()=>(0,c._)("span",null,null,-1))),w=a((()=>(0,c._)("span",null,null,-1))),y={name:"CardGame",props:{msg:String}};var j=Object.assign(y,{setup(n){const e=t(22),r=e.keys().map((n=>n.slice(2))),s=(0,i.iH)([]),a=(0,i.iH)(!1),y=(0,i.iH)(!1),j=(0,i.iH)(0),T=n=>{const e=n.slice();for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e},E=()=>{const n=T(r),t=n.flatMap((n=>[{image:e(`./${n}`),reverse:!1,matched:!1},{image:e(`./${n}`),reverse:!1,matched:!1}]));return 0===j.value?t.slice(0,12):t},M=(0,i.qj)(E()),D=n=>{for(let e=n.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}};D(M);const H=n=>{if(a.value){if(s.value.length<2){const e=M[n];e.reverse||e.matched||(e.reverse=!0,s.value.push(e),2===s.value.length&&G())}}else alert("게임 시작을 눌러주세요.")},G=()=>{const[n,e]=s.value;n.image===e.image&&(n.matched=!0,e.matched=!0),setTimeout((()=>{P()}),500)},P=()=>{s.value.forEach((n=>{n.reverse=!1})),s.value=[]},U=async()=>{y.value=!1,a.value=!1,M.forEach((n=>{n.reverse=!1,n.matched=!1}));const n=E();M.splice(0,M.length,...n),D(M),setTimeout((()=>{A()}),1e3)},A=async()=>{a.value||(M.forEach(((n,e)=>{setTimeout((function(){n.reverse=!0}),1e3+100*e)})),setTimeout((()=>{M.forEach((n=>{n.matched||(n.reverse=!1)}))}),3e3),a.value=!0)};return(0,c.YP)(M,(()=>{const n=M.filter((n=>n.matched));n.length!==M.length||y.value||(y.value=!0,setTimeout((()=>{M.forEach(((n,e)=>{setTimeout((function(){n.reverse=!1,n.matched=!1}),1e3+100*e)})),alert("카드 게임 -완-")}),500))})),(n,e)=>((0,c.wg)(),(0,c.iD)(c.HY,null,[(0,c._)("div",u,[(0,c._)("div",p,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(M,((n,e)=>((0,c.wg)(),(0,c.iD)("div",{key:e,class:(0,o.C_)(["card",{reverse:n.reverse,matched:n.matched}]),onClick:n=>H(e)},[(0,c._)("div",f,[g,(0,c._)("div",d,[(0,c._)("img",{src:n.image,alt:"Card"},null,8,m)])])],10,l)))),128))])]),(0,c._)("div",v,[(0,c._)("a",{href:"#",class:"button_css",onClick:e[0]||(e[0]=n=>A())},[h,b,_,x,(0,c.Uk)(" 게임 시작 ")]),(0,c.Uk)(" $nbsp; "),(0,c._)("a",{href:"#",class:"button_css",onClick:e[1]||(e[1]=n=>U())},[O,k,C,w,(0,c.Uk)(" 다시 시작 ")])])],64))}}),T=t(89);const E=(0,T.Z)(j,[["__scopeId","data-v-0a11ac56"]]);var M=E,D={name:"App",components:{CardGame:M}};const H=(0,T.Z)(D,[["render",s]]);var G=H;(0,r.ri)(G).mount("#app")},22:function(n,e,t){var r={"./A.png":2399,"./B.png":2065,"./C.png":7016,"./D.png":6176,"./E.png":2875,"./F.png":485,"./G.png":2863,"./H.png":60,"./I.png":6786,"./J.png":7055,"./K.png":4015,"./L.png":6382,"./M.png":9938,"./N.png":6599,"./O.png":5121,"./P.png":3477,"./Q.png":5896,"./T.png":7424};function c(n){var e=s(n);return t(e)}function s(n){if(!t.o(r,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return r[n]}c.keys=function(){return Object.keys(r)},c.resolve=s,n.exports=c,c.id=22},2399:function(n,e,t){"use strict";n.exports=t.p+"img/A.9b5efa1c.png"},2065:function(n,e,t){"use strict";n.exports=t.p+"img/B.dcd36e14.png"},7016:function(n,e,t){"use strict";n.exports=t.p+"img/C.6ffd8ac0.png"},6176:function(n,e,t){"use strict";n.exports=t.p+"img/D.cab6d752.png"},2875:function(n,e,t){"use strict";n.exports=t.p+"img/E.e461cba5.png"},485:function(n,e,t){"use strict";n.exports=t.p+"img/F.edaeab65.png"},2863:function(n,e,t){"use strict";n.exports=t.p+"img/G.3e18f253.png"},60:function(n,e,t){"use strict";n.exports=t.p+"img/H.579340a1.png"},6786:function(n,e,t){"use strict";n.exports=t.p+"img/I.e539d27b.png"},7055:function(n,e,t){"use strict";n.exports=t.p+"img/J.1acacf2a.png"},4015:function(n,e,t){"use strict";n.exports=t.p+"img/K.20346b87.png"},6382:function(n,e,t){"use strict";n.exports=t.p+"img/L.ba5df79a.png"},9938:function(n,e,t){"use strict";n.exports=t.p+"img/M.4f1d173c.png"},6599:function(n,e,t){"use strict";n.exports=t.p+"img/N.0c14ed47.png"},5121:function(n,e,t){"use strict";n.exports=t.p+"img/O.c30b4c56.png"},3477:function(n,e,t){"use strict";n.exports=t.p+"img/P.01d9653b.png"},5896:function(n,e,t){"use strict";n.exports=t.p+"img/Q.01d9653b.png"},7424:function(n,e,t){"use strict";n.exports=t.p+"img/T.e4db90f9.png"}},e={};function t(r){var c=e[r];if(void 0!==c)return c.exports;var s=e[r]={exports:{}};return n[r].call(s.exports,s,s.exports,t),s.exports}t.m=n,function(){var n=[];t.O=function(e,r,c,s){if(!r){var o=1/0;for(p=0;p<n.length;p++){r=n[p][0],c=n[p][1],s=n[p][2];for(var i=!0,a=0;a<r.length;a++)(!1&s||o>=s)&&Object.keys(t.O).every((function(n){return t.O[n](r[a])}))?r.splice(a--,1):(i=!1,s<o&&(o=s));if(i){n.splice(p--,1);var u=c();void 0!==u&&(e=u)}}return e}s=s||0;for(var p=n.length;p>0&&n[p-1][2]>s;p--)n[p]=n[p-1];n[p]=[r,c,s]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){t.p="/cardgame/"}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,r){var c,s,o=r[0],i=r[1],a=r[2],u=0;if(o.some((function(e){return 0!==n[e]}))){for(c in i)t.o(i,c)&&(t.m[c]=i[c]);if(a)var p=a(t)}for(e&&e(r);u<o.length;u++)s=o[u],t.o(n,s)&&n[s]&&n[s][0](),n[s]=0;return t.O(p)},r=self["webpackChunkcardgame"]=self["webpackChunkcardgame"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(1119)}));r=t.O(r)})();
//# sourceMappingURL=app.664c5494.js.map