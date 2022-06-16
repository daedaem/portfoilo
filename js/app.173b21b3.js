(function(){"use strict";var e={308:function(e,n,t){var r=t(963),a=t(252);function o(e,n,t,r,o,i){const s=(0,a.up)("Header"),u=(0,a.up)("router-view"),l=(0,a.up)("Footer");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(s,{class:"header"}),(0,a.Wm)(u),(0,a.Wm)(l)],64)}const i=e=>((0,a.dD)("data-v-5f2412ce"),e=e(),(0,a.Cn)(),e),s={class:"navbar navbar-expand-lg"},u={class:"container-fluid"},l=i((()=>(0,a._)("a",{class:"navbar-brand name",href:"/"},"ㅈㅎㅅ",-1))),c=i((()=>(0,a._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,a._)("span",{class:"navbar-toggler-icon"})],-1))),f={class:"collapse navbar-collapse justify-content-end",id:"navbarNav"},d={class:"navbar-nav"},p=(0,a.Uk)("About Me"),b=i((()=>(0,a._)("li",{class:"nav-item"},null,-1))),v=i((()=>(0,a._)("li",{class:"nav-item"},[(0,a._)("a",{class:"nav-link",herf:"#"},"Portfolio")],-1))),m=i((()=>(0,a._)("li",{class:"nav-item"},[(0,a._)("a",{class:"nav-link",href:"#"},"Experience")],-1)));function h(e,n,t,r,o,i){const h=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("nav",s,[(0,a._)("div",u,[l,c,(0,a._)("div",f,[(0,a._)("ul",d,[(0,a._)("li",null,[(0,a.Wm)(h,{to:{name:"About"},class:"nav-link"},{default:(0,a.w5)((()=>[p])),_:1})]),b,v,m])])])])}var g={name:"Header",setup(){return{}}},_=t(744);const k=(0,_.Z)(g,[["render",h],["__scopeId","data-v-5f2412ce"]]);var y=k;const w=e=>((0,a.dD)("data-v-36f3dbf1"),e=e(),(0,a.Cn)(),e),C={class:"footer container-fluid py-5 text-start"},O=w((()=>(0,a._)("div",{class:"fw-bold"},"Haesung Cho's Portfolio",-1))),E={class:"d-flex gap-3 mt-3"},j=["href"],A=w((()=>(0,a._)("i",{class:"bi bi-instagram fs-5"},null,-1))),P=[A],T=["href"],x=w((()=>(0,a._)("i",{class:"bi bi-facebook fs-5"},null,-1))),N=[x],S=["href"],D=w((()=>(0,a._)("i",{class:"bi bi-github fs-5"},null,-1))),F=[D],B=["href"],H=w((()=>(0,a._)("i",{class:"bi bi-linkedin fs-5"},null,-1))),q=[H],L=w((()=>(0,a._)("a",{href:"mailto:tg8685@gmail.com"},[(0,a._)("i",{class:"bi bi-envelope-fill fs-5"})],-1)));function M(e,n,t,r,o,i){return(0,a.wg)(),(0,a.iD)("nav",C,[O,(0,a._)("div",E,[(0,a._)("a",{href:r.links.instagram,target:"_blank"},P,8,j),(0,a._)("a",{href:r.links.facebook,target:"_blank"},N,8,T),(0,a._)("a",{href:r.links.github,target:"_blank"},F,8,S),(0,a._)("a",{href:r.links.linkedin,target:"_blank"},q,8,B),L])])}var W=t(262),I={name:"Footer",setup(){const e=(0,W.qj)({facebook:"https://www.facebook.com/tanggae",github:"https://github.com/daedaem",instagram:"https://www.instagram.com/sun_castle_8685/",linkedin:"https://www.linkedin.com/in/%ED%95%B4%EC%84%B1-%EC%A1%B0-518a021a9/"});return{links:e}}};const U=(0,_.Z)(I,[["render",M],["__scopeId","data-v-36f3dbf1"]]);var Z=U,K={name:"App",setup(){return{}},components:{Header:y,Footer:Z}};const Y=(0,_.Z)(K,[["render",o]]);var z=Y,G=t(119);const J=[{path:"/",name:"Main",component:()=>t.e(763).then(t.bind(t,335))},{path:"/about",name:"About",component:()=>t.e(600).then(t.bind(t,763))},{path:"/pairplay",name:"Pairplay",component:()=>t.e(831).then(t.bind(t,634))},{path:"/unique",name:"Unique",component:()=>t.e(762).then(t.bind(t,762))},{path:"/campus",name:"Campus",component:()=>t.e(387).then(t.bind(t,387))}],Q=(0,G.p7)({history:(0,G.PO)("/"),routes:J});var R=Q,V=t(907),X=(0,V.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});const $=(0,r.ri)(z);$.use(X).use(R).mount("#app")}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,r,a,o){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],a=e[c][1],o=e[c][2];for(var s=!0,u=0;u<r.length;u++)(!1&o||i>=o)&&Object.keys(t.O).every((function(e){return t.O[e](r[u])}))?r.splice(u--,1):(s=!1,o<i&&(i=o));if(s){e.splice(c--,1);var l=a();void 0!==l&&(n=l)}}return n}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,a,o]}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{387:"fd6626f0",600:"eff006ec",762:"22d40e09",763:"4c7e7934",831:"3ac4ac8d"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{387:"24bc27de",600:"804e17a7",762:"24bc27de",763:"e9b0a53e",831:"690cb331"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="portfolio:";t.l=function(r,a,o,i){if(e[r])e[r].push(a);else{var s,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var f=l[c];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==n+o){s=f;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",n+o),s.src=r),e[r]=[a];var d=function(n,t){s.onerror=s.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e=function(e,n,t,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=function(o){if(a.onerror=a.onload=null,"load"===o.type)t();else{var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,a.parentNode.removeChild(a),r(u)}};return a.onerror=a.onload=o,a.href=n,document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var a=t[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===n))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){a=i[r],o=a.getAttribute("data-href");if(o===e||o===n)return a}},r=function(r){return new Promise((function(a,o){var i=t.miniCssF(r),s=t.p+i;if(n(i,s))return a();e(r,s,a,o)}))},a={143:0};t.f.miniCss=function(e,n){var t={387:1,600:1,762:1,763:1,831:1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=r(e).then((function(){a[e]=0}),(function(n){throw delete a[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var a=t.o(e,n)?e[n]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(t,r){a=e[n]=[t,r]}));r.push(a[2]=o);var i=t.p+t.u(n),s=new Error,u=function(r){if(t.o(e,n)&&(a=e[n],0!==a&&(e[n]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+n+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,a[1](s)}};t.l(i,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var a,o,i=r[0],s=r[1],u=r[2],l=0;if(i.some((function(n){return 0!==e[n]}))){for(a in s)t.o(s,a)&&(t.m[a]=s[a]);if(u)var c=u(t)}for(n&&n(r);l<i.length;l++)o=i[l],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(c)},r=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(308)}));r=t.O(r)})();
//# sourceMappingURL=app.173b21b3.js.map