(function(){"use strict";var e={469:function(e,n,t){var a=t(963),r=t(252);function o(e,n,t,a,o,i){const s=(0,r.up)("Header"),l=(0,r.up)("router-view"),u=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(s,{class:"header"}),(0,r.Wm)(l),(0,r.Wm)(u)],64)}const i=e=>((0,r.dD)("data-v-a5e573a6"),e=e(),(0,r.Cn)(),e),s={class:"navbar navbar-expand-lg"},l={class:"container-fluid"},u=i((()=>(0,r._)("a",{class:"navbar-brand name",href:"/"},"ㅈㅎㅅ",-1))),c=i((()=>(0,r._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,r._)("span",{class:"navbar-toggler-icon"})],-1))),f={class:"collapse navbar-collapse justify-content-end",id:"navbarNav"},d={class:"navbar-nav"},p=(0,r.Uk)("About Me"),b={class:"nav-item"},m=(0,r.Uk)("Skills"),v={class:"nav-item"},h=(0,r.Uk)("Portfolio"),g={class:"nav-item"},k=(0,r.Uk)("Experiences");function _(e,n,t,a,o,i){const _=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("nav",s,[(0,r._)("div",l,[u,c,(0,r._)("div",f,[(0,r._)("ul",d,[(0,r._)("li",null,[(0,r.Wm)(_,{to:{name:"About"},class:"nav-link"},{default:(0,r.w5)((()=>[p])),_:1})]),(0,r._)("li",b,[(0,r.Wm)(_,{to:{name:"Skills"},class:"nav-link"},{default:(0,r.w5)((()=>[m])),_:1})]),(0,r._)("li",v,[(0,r.Wm)(_,{to:{name:"Portfolio"},class:"nav-link"},{default:(0,r.w5)((()=>[h])),_:1})]),(0,r._)("li",g,[(0,r.Wm)(_,{to:{name:"Experiences"},class:"nav-link"},{default:(0,r.w5)((()=>[k])),_:1})])])])])])}var y={name:"Header",setup(){return{}}},w=t(744);const C=(0,w.Z)(y,[["render",_],["__scopeId","data-v-a5e573a6"]]);var E=C;const O=e=>((0,r.dD)("data-v-36f3dbf1"),e=e(),(0,r.Cn)(),e),j={class:"footer container-fluid py-5 text-start"},A=O((()=>(0,r._)("div",{class:"fw-bold"},"Haesung Cho's Portfolio",-1))),x={class:"d-flex gap-3 mt-3"},P=["href"],S=O((()=>(0,r._)("i",{class:"bi bi-instagram fs-5"},null,-1))),T=[S],N=["href"],D=O((()=>(0,r._)("i",{class:"bi bi-facebook fs-5"},null,-1))),F=[D],W=["href"],B=O((()=>(0,r._)("i",{class:"bi bi-github fs-5"},null,-1))),H=[B],U=["href"],q=O((()=>(0,r._)("i",{class:"bi bi-linkedin fs-5"},null,-1))),L=[q],M=O((()=>(0,r._)("a",{href:"mailto:tg8685@gmail.com"},[(0,r._)("i",{class:"bi bi-envelope-fill fs-5"})],-1)));function I(e,n,t,a,o,i){return(0,r.wg)(),(0,r.iD)("nav",j,[A,(0,r._)("div",x,[(0,r._)("a",{href:a.links.instagram,target:"_blank"},T,8,P),(0,r._)("a",{href:a.links.facebook,target:"_blank"},F,8,N),(0,r._)("a",{href:a.links.github,target:"_blank"},H,8,W),(0,r._)("a",{href:a.links.linkedin,target:"_blank"},L,8,U),M])])}var Z=t(262),K={name:"Footer",setup(){const e=(0,Z.qj)({facebook:"https://www.facebook.com/tanggae",github:"https://github.com/daedaem",instagram:"https://www.instagram.com/sun_castle_8685/",linkedin:"https://www.linkedin.com/in/%ED%95%B4%EC%84%B1-%EC%A1%B0-518a021a9/"});return{links:e}}};const Y=(0,w.Z)(K,[["render",I],["__scopeId","data-v-36f3dbf1"]]);var z=Y,G={name:"App",setup(){return{}},components:{Header:E,Footer:z}};const J=(0,w.Z)(G,[["render",o]]);var Q=J,R=t(119);const V=[{path:"/",name:"Main",component:()=>t.e(587).then(t.bind(t,678))},{path:"/about",name:"About",component:()=>t.e(893).then(t.bind(t,570))},{path:"/skills",name:"Skills",component:()=>t.e(126).then(t.bind(t,105))},{path:"/portfolios",name:"Portfolio",component:()=>t.e(839).then(t.bind(t,133))},{path:"/pairplay",name:"Pairplay",component:()=>t.e(831).then(t.bind(t,634))},{path:"/unique",name:"Unique",component:()=>t.e(762).then(t.bind(t,762))},{path:"/campus",name:"Campus",component:()=>t.e(387).then(t.bind(t,387))},{path:"/expereince",name:"Experiences",component:()=>t.e(6).then(t.bind(t,6))}],X=(0,R.p7)({history:(0,R.r5)("/portfolio/"),routes:V});var $=X,ee=t(907),ne=(0,ee.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});const te=(0,a.ri)(Q);te.use(ne).use($).mount("#app")}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var o=n[a]={exports:{}};return e[a](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,a,r,o){if(!a){var i=1/0;for(c=0;c<e.length;c++){a=e[c][0],r=e[c][1],o=e[c][2];for(var s=!0,l=0;l<a.length;l++)(!1&o||i>=o)&&Object.keys(t.O).every((function(e){return t.O[e](a[l])}))?a.splice(l--,1):(s=!1,o<i&&(i=o));if(s){e.splice(c--,1);var u=r();void 0!==u&&(n=u)}}return n}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[a,r,o]}}(),function(){t.d=function(e,n){for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,a){return t.f[a](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{6:"362c3f6e",126:"12096e34",387:"30933175",587:"f0e5b41a",762:"6a7a199e",831:"aee2450c",839:"30b33b4d",893:"6072227e"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{6:"1068c015",126:"cbaba2d4",387:"24bc27de",587:"7d8d1c4e",762:"24bc27de",831:"690cb331",839:"501c375a",893:"b0eb9f9d"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="portfolio:";t.l=function(a,r,o,i){if(e[a])e[a].push(r);else{var s,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var f=u[c];if(f.getAttribute("src")==a||f.getAttribute("data-webpack")==n+o){s=f;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",n+o),s.src=a),e[a]=[r];var d=function(n,t){s.onerror=s.onload=null,clearTimeout(p);var r=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/portfolio/"}(),function(){var e=function(e,n,t,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=function(o){if(r.onerror=r.onload=null,"load"===o.type)t();else{var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||n,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,r.parentNode.removeChild(r),a(l)}};return r.onerror=r.onload=o,r.href=n,document.head.appendChild(r),r},n=function(e,n){for(var t=document.getElementsByTagName("link"),a=0;a<t.length;a++){var r=t[a],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===e||o===n))return r}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){r=i[a],o=r.getAttribute("data-href");if(o===e||o===n)return r}},a=function(a){return new Promise((function(r,o){var i=t.miniCssF(a),s=t.p+i;if(n(i,s))return r();e(a,s,r,o)}))},r={143:0};t.f.miniCss=function(e,n){var t={6:1,126:1,387:1,587:1,762:1,831:1,839:1,893:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=a(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,a){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)a.push(r[2]);else{var o=new Promise((function(t,a){r=e[n]=[t,a]}));a.push(r[2]=o);var i=t.p+t.u(n),s=new Error,l=function(a){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+n+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,r[1](s)}};t.l(i,l,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,a){var r,o,i=a[0],s=a[1],l=a[2],u=0;if(i.some((function(n){return 0!==e[n]}))){for(r in s)t.o(s,r)&&(t.m[r]=s[r]);if(l)var c=l(t)}for(n&&n(a);u<i.length;u++)o=i[u],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(c)},a=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(469)}));a=t.O(a)})();
//# sourceMappingURL=app.ca3bdb98.js.map