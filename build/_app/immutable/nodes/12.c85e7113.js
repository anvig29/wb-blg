import{S as P,i as R,s as W,k as f,l as m,m as _,h as i,n as g,b as G,E as A,O as $,a as x,q as V,c as D,r as F,p as H,C as r,D as N}from"../chunks/index.6a054f53.js";import{g as O}from"../chunks/navigation.af484b61.js";function q(n,t,a){const l=n.slice();return l[3]=t[a],l}function B(n){let t,a,l,e,o,s=n[3].name+"",h,p,d,w=n[3].count+"",y,b,k,E,I;function M(){return n[2](n[3])}return{c(){t=f("div"),a=f("div"),l=x(),e=f("div"),o=f("h2"),h=V(s),p=x(),d=f("span"),y=V(w),b=V(" posts"),k=x(),this.h()},l(u){t=m(u,"DIV",{class:!0,style:!0});var c=_(t);a=m(c,"DIV",{class:!0}),_(a).forEach(i),l=D(c),e=m(c,"DIV",{class:!0});var v=_(e);o=m(v,"H2",{class:!0});var S=_(o);h=F(S,s),S.forEach(i),p=D(v),d=m(v,"SPAN",{class:!0});var C=_(d);y=F(C,w),b=F(C," posts"),C.forEach(i),v.forEach(i),k=D(c),c.forEach(i),this.h()},h(){g(a,"class","overlay svelte-3xl4ml"),g(o,"class","svelte-3xl4ml"),g(d,"class","count svelte-3xl4ml"),g(e,"class","content svelte-3xl4ml"),g(t,"class","category svelte-3xl4ml"),H(t,"background-color",n[3].color)},m(u,c){G(u,t,c),r(t,a),r(t,l),r(t,e),r(e,o),r(o,h),r(e,p),r(e,d),r(d,y),r(d,b),r(t,k),E||(I=N(t,"click",M),E=!0)},p(u,c){n=u},d(u){u&&i(t),E=!1,I()}}}function T(n){let t,a=n[0],l=[];for(let e=0;e<a.length;e+=1)l[e]=B(q(n,a,e));return{c(){t=f("div");for(let e=0;e<l.length;e+=1)l[e].c();this.h()},l(e){t=m(e,"DIV",{class:!0});var o=_(t);for(let s=0;s<l.length;s+=1)l[s].l(o);o.forEach(i),this.h()},h(){g(t,"class","grid svelte-3xl4ml")},m(e,o){G(e,t,o);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(t,null)},p(e,[o]){if(o&3){a=e[0];let s;for(s=0;s<a.length;s+=1){const h=q(e,a,s);l[s]?l[s].p(h,o):(l[s]=B(h),l[s].c(),l[s].m(t,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=a.length}},i:A,o:A,d(e){e&&i(t),$(l,e)}}}function j(n){let t=[{name:"Caffeine of words",count:2,color:"#FF33F6",url:"/blogs/caffeine-of-words"},{name:"Self musings",count:2,color:"#8E7AB5",url:"/blogs/self-musing"},{name:"Metaphor and Meditation",count:2,color:"#efcc00",url:"/blogs/metaphor-and-meditation"},{name:"Reflection and Rhyme",count:2,color:"#a2006d",url:"/blogs/reflection-and-rhyme"},{name:"Voyage and Vision",count:2,color:"#ff7f50",url:"/blogs/voyage-and-vision"},{name:"Gratitude Garden",count:2,color:"#4CACBC",url:"/blogs/gratitude-garden"},{name:"Wired and Wise",count:2,color:"#5733FF",url:"/blogs/wired-and-wise"}];function a(e){O(e)}return[t,a,e=>a(e.url)]}class K extends P{constructor(t){super(),R(this,t,j,T,W,{})}}export{K as component};