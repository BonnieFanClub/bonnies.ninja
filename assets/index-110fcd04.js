var ne=Object.defineProperty;var ie=(t,e,n)=>e in t?ne(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var q=(t,e,n)=>(ie(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function h(){}function Y(t){return t()}function W(){return Object.create(null)}function U(t){t.forEach(Y)}function Z(t){return typeof t=="function"}function C(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function re(t){return Object.keys(t).length===0}function f(t,e){t.appendChild(e)}function v(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode&&t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function y(){return k(" ")}function X(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function _(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function oe(t){return Array.from(t.childNodes)}function M(t,e){e=""+e,t.data!==e&&(t.data=e)}let V;function T(t){V=t}const I=[],G=[];let j=[];const H=[],se=Promise.resolve();let K=!1;function le(){K||(K=!0,se.then(ee))}function R(t){j.push(t)}const z=new Set;let O=0;function ee(){if(O!==0)return;const t=V;do{try{for(;O<I.length;){const e=I[O];O++,T(e),ue(e.$$)}}catch(e){throw I.length=0,O=0,e}for(T(null),I.length=0,O=0;G.length;)G.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];z.has(n)||(z.add(n),n())}j.length=0}while(I.length);for(;H.length;)H.pop()();K=!1,z.clear(),T(t)}function ue(t){if(t.fragment!==null){t.update(),U(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(R)}}function ae(t){const e=[],n=[];j.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),j=e}const D=new Set;let ce;function B(t,e){t&&t.i&&(D.delete(t),t.i(e))}function x(t,e,n,i){if(t&&t.o){if(D.has(t))return;D.add(t),ce.c.push(()=>{D.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function E(t){t&&t.c()}function b(t,e,n){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),R(()=>{const o=t.$$.on_mount.map(Y).filter(Z);t.$$.on_destroy?t.$$.on_destroy.push(...o):U(o),t.$$.on_mount=[]}),r.forEach(R)}function w(t,e){const n=t.$$;n.fragment!==null&&(ae(n.after_update),U(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function fe(t,e){t.$$.dirty[0]===-1&&(I.push(t),le(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function S(t,e,n,i,r,o,s,u=[-1]){const m=V;T(t);const l=t.$$={fragment:null,ctx:[],props:o,update:h,not_equal:r,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(m?m.$$.context:[])),callbacks:W(),dirty:u,skip_bound:!1,root:e.target||m.$$.root};s&&s(l.root);let c=!1;if(l.ctx=n?n(t,e.props||{},(a,A,...$)=>{const P=$.length?$[0]:A;return l.ctx&&r(l.ctx[a],l.ctx[a]=P)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](P),c&&fe(t,a)),A}):[],l.update(),c=!0,U(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){const a=oe(e.target);l.fragment&&l.fragment.l(a),a.forEach(p)}else l.fragment&&l.fragment.c();e.intro&&B(t.$$.fragment),b(t,e.target,e.anchor),ee()}T(m)}class N{constructor(){q(this,"$$");q(this,"$$set")}$destroy(){w(this,1),this.$destroy=h}$on(e,n){if(!Z(n))return h;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!re(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const de="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(de);function me(t){let e,n,i,r;return{c(){e=g("h1"),n=g("span"),i=k(t[0]),r=g("span"),r.textContent="|",_(n,"id","title"),_(n,"class","svelte-1xv9tu"),_(r,"id","pipe"),_(r,"class","svelte-1xv9tu"),_(e,"class","svelte-1xv9tu")},m(o,s){v(o,e,s),f(e,n),f(n,i),f(e,r)},p(o,[s]){s&1&&M(i,o[0])},i:h,o:h,d(o){o&&p(e)}}}function ge(t,e,n){let i=["B","Bo","Bon","Bonn","Bonni","Bonnie","Bonnies","Bonnies.","Bonnies.n","Bonnies.ni","Bonnies.nin","Bonnies.ninj","Bonnies.ninja","Bonnies.ninja","Bonnies.ninja","Bonnies.ninj","Bonnies.nin","Bonnies.ni","Bonnies.n","Bonnies.","Bonnies","Bonnie","Bonnie","Bonnie","Bonnie","Bonnie","Bonni","Bonn","Bon","Bo"],r=["∪･ω･∪","U●ᴥ●U","U^ｪ^U","∪･ｪ･∪"],o=0;setInterval(()=>{document.title=r[o],o=(o+1)%r.length},1e3);let s="B",u=1;return setInterval(()=>{n(0,s=i[u]),u=(u+1)%i.length},300),[s]}class he extends N{constructor(e){super(),S(this,e,ge,me,C,{})}}function _e(t){let e,n,i,r,o,s,u,m;return{c(){e=g("a"),n=g("div"),i=g("h2"),r=k(t[0]),o=y(),s=g("div"),u=g("h2"),m=k(t[2]),_(s,"class","social"),_(n,"class","card svelte-1782hgv"),_(e,"href",t[1])},m(l,c){v(l,e,c),f(e,n),f(n,i),f(i,r),f(n,o),f(n,s),f(s,u),f(u,m)},p(l,[c]){c&1&&M(r,l[0]),c&4&&M(m,l[2]),c&2&&_(e,"href",l[1])},i:h,o:h,d(l){l&&p(e)}}}function pe(t,e,n){let{name:i}=e,{link:r}=e,{social:o}=e,{image:s}=e;return t.$$set=u=>{"name"in u&&n(0,i=u.name),"link"in u&&n(1,r=u.link),"social"in u&&n(2,o=u.social),"image"in u&&n(3,s=u.image)},[i,r,o,s]}class J extends N{constructor(e){super(),S(this,e,pe,_e,C,{name:0,link:1,social:2,image:3})}}let $e="/background/",Q=41;function ye(t){let e=[];for(let n=1;n<Q+1;n++)e.push(`bonnie${n}.webp`);if(console.log(e.length),e.length>=Q){let n=Math.floor(Math.random()*e.length),i=$e+e[n];document.addEventListener("DOMContentLoaded",()=>{document.documentElement.style.background=`url('${i}')`,document.documentElement.style.backgroundSize="cover",document.documentElement.style.backgroundPosition="center"})}return[]}class ve extends N{constructor(e){super(),S(this,e,ye,null,C,{})}}function Be(t){let e,n,i=t[0].toLocaleTimeString()+"",r;return{c(){e=g("div"),n=g("h2"),r=k(i),_(e,"class","clock")},m(o,s){v(o,e,s),f(e,n),f(n,r)},p(o,[s]){s&1&&i!==(i=o[0].toLocaleTimeString()+"")&&M(r,i)},i:h,o:h,d(o){o&&p(e)}}}function be(t,e,n){let i=new Date;return setInterval(()=>{n(0,i=new Date)},300),[i]}class we extends N{constructor(e){super(),S(this,e,be,Be,C,{})}}function xe(t){let e,n,i,r,o,s,u,m,l;return{c(){e=g("button"),e.textContent="start",n=y(),i=g("button"),i.textContent="reset",r=y(),o=g("h1"),s=k(t[0]),u=k("s")},m(c,a){v(c,e,a),v(c,n,a),v(c,i,a),v(c,r,a),v(c,o,a),f(o,s),f(o,u),m||(l=[X(e,"click",t[2]),X(i,"click",t[1])],m=!0)},p(c,[a]){a&1&&M(s,c[0])},i:h,o:h,d(c){c&&(p(e),p(n),p(i),p(r),p(o)),m=!1,U(l)}}}function Ee(t,e,n){let i=0;function r(){i!==0&&n(0,i=0),clearInterval(o)}let o;function s(){o=setInterval(()=>{n(0,i+=1)},1e3)}return[i,r,s]}class ke extends N{constructor(e){super(),S(this,e,Ee,xe,C,{})}}function Le(t){let e,n,i,r,o,s,u,m,l,c,a,A,$,P,L,F;return n=new ve({}),r=new he({}),u=new J({props:{name:"bonnie fanclub",image:"/bonnie1.webp",link:"https://matrix.to/#/!EOaJuchteaWXqvdooL:mozilla.org",social:"matrix"}}),l=new J({props:{name:"r/BonnieFanClub",image:"",link:"https://www.reddit.com/r/BonnieFanClub/",social:"reddit"}}),a=new J({props:{name:"bonnie_fan_club",image:"",link:"https://www.instagram.com/bonnie_fan_club/",social:"instagram"}}),$=new we({}),L=new ke({}),{c(){e=g("main"),E(n.$$.fragment),i=y(),E(r.$$.fragment),o=y(),s=g("div"),E(u.$$.fragment),m=y(),E(l.$$.fragment),c=y(),E(a.$$.fragment),A=y(),E($.$$.fragment),P=y(),E(L.$$.fragment),_(s,"class","socials svelte-1mp43tt")},m(d,te){v(d,e,te),b(n,e,null),f(e,i),b(r,e,null),f(e,o),f(e,s),b(u,s,null),f(s,m),b(l,s,null),f(s,c),b(a,s,null),f(e,A),b($,e,null),f(e,P),b(L,e,null),F=!0},p:h,i(d){F||(B(n.$$.fragment,d),B(r.$$.fragment,d),B(u.$$.fragment,d),B(l.$$.fragment,d),B(a.$$.fragment,d),B($.$$.fragment,d),B(L.$$.fragment,d),F=!0)},o(d){x(n.$$.fragment,d),x(r.$$.fragment,d),x(u.$$.fragment,d),x(l.$$.fragment,d),x(a.$$.fragment,d),x($.$$.fragment,d),x(L.$$.fragment,d),F=!1},d(d){d&&p(e),w(n),w(r),w(u),w(l),w(a),w($),w(L)}}}class Oe extends N{constructor(e){super(),S(this,e,null,Le,C,{})}}new Oe({target:document.getElementById("app")});
