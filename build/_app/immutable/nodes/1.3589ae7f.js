import{S as Q,i as W,s as X,a as M,k as n,q as f,L as Y,h as a,c as O,l as c,m as u,r as E,M as Z,n as r,b as F,C as e,u as J,E as K,N as ee}from"../chunks/index.6a054f53.js";import{p as te}from"../chunks/stores.fe9344bb.js";function se(h){let _,b,l,i,s,m,G,y,o,T=h[0].status+"",S,I,k=h[0].error.message+"",U,P,R,q,C,p,H,w,L,$,g,z;return document.title=_=h[0].status+" - "+h[0].error.message,{c(){b=M(),l=n("main"),i=n("section"),s=n("div"),m=n("img"),y=M(),o=n("h1"),S=f(T),I=f(" - "),U=f(k),P=M(),R=n("span"),q=f("x("),C=M(),p=n("p"),H=f("There was an error with the page. Please check the URL."),w=n("strong"),L=f("Report a bug"),$=M(),g=n("button"),z=f("RETURN HOME"),this.h()},l(t){Y("svelte-1rlnzzk",document.head).forEach(a),b=O(t),l=c(t,"MAIN",{class:!0});var B=u(l);i=c(B,"SECTION",{class:!0});var D=u(i);s=c(D,"DIV",{class:!0});var d=u(s);m=c(d,"IMG",{src:!0,alt:!0,class:!0}),y=O(d),o=c(d,"H1",{class:!0});var N=u(o);S=E(N,T),I=E(N," - "),U=E(N,k),P=O(N),R=c(N,"SPAN",{class:!0});var V=u(R);q=E(V,"x("),V.forEach(a),N.forEach(a),C=O(d),p=c(d,"P",{class:!0});var A=u(p);H=E(A,"There was an error with the page. Please check the URL."),w=c(A,"STRONG",{});var j=u(w);L=E(j,"Report a bug"),j.forEach(a),A.forEach(a),$=O(d),g=c(d,"BUTTON",{class:!0,onclick:!0});var x=u(g);z=E(x,"RETURN HOME"),x.forEach(a),d.forEach(a),D.forEach(a),B.forEach(a),this.h()},h(){Z(m.src,G="/img/favicon/logo.webp")||r(m,"src",G),r(m,"alt",""),r(m,"class","svelte-13agdod"),r(R,"class","svelte-13agdod"),r(o,"class","svelte-13agdod"),r(p,"class","svelte-13agdod"),r(g,"class","btn btn-secondary svelte-13agdod"),r(g,"onclick","location.href='/blogs';"),r(s,"class","message svelte-13agdod"),r(i,"class","error-body svelte-13agdod"),r(l,"class","svelte-13agdod")},m(t,v){F(t,b,v),F(t,l,v),e(l,i),e(i,s),e(s,m),e(s,y),e(s,o),e(o,S),e(o,I),e(o,U),e(o,P),e(o,R),e(R,q),e(s,C),e(s,p),e(p,H),e(p,w),e(w,L),e(s,$),e(s,g),e(g,z)},p(t,[v]){v&1&&_!==(_=t[0].status+" - "+t[0].error.message)&&(document.title=_),v&1&&T!==(T=t[0].status+"")&&J(S,T),v&1&&k!==(k=t[0].error.message+"")&&J(U,k)},i:K,o:K,d(t){t&&a(b),t&&a(l)}}}function ae(h,_,b){let l;return ee(h,te,i=>b(0,l=i)),[l]}class oe extends Q{constructor(_){super(),W(this,_,ae,se,X,{})}}export{oe as component};