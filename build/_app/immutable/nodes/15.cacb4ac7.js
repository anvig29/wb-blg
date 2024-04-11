import{S as O,i as F,s as G,e as x,b as z,d as $,f as L,g as k,h as g,N as M,v as Q,y as T,z as P,A as Y,B as j,k as d,a as N,q,l as y,m as h,c as I,r as E,n as _,C as m,E as w,F as A,Y as B,_ as S,$ as C}from"../chunks/index.6a054f53.js";import{p as Z}from"../chunks/stores.fe9344bb.js";import{c as D}from"../chunks/sanityClient.4c99891d.js";import{P as J}from"../chunks/PostGrid.4aaa51f6.js";import{e as K,d as U}from"../chunks/utils.34dffdb9.js";import{I as R}from"../chunks/Icon.82cce8fa.js";import{f as H}from"../chunks/index.ccf670be.js";function V(p){let t,e;return t=new J({props:{posts:p[2]}}),{c(){T(t.$$.fragment)},l(s){P(t.$$.fragment,s)},m(s,a){Y(t,s,a),e=!0},p(s,a){const i={};a&4&&(i.posts=s[2]),t.$set(i)},i(s){e||(k(t.$$.fragment,s),e=!0)},o(s){$(t.$$.fragment,s),e=!1},d(s){j(t,s)}}}function W(p){let t,e,s,a,i,n,l,r,f,u;return e=new R({props:{icon:"solar:ghost-broken"}}),{c(){t=d("section"),T(e.$$.fragment),s=N(),a=d("h1"),i=q("Sorry, No Results found"),n=N(),l=d("p"),r=q("Try searching for something more specific."),this.h()},l(o){t=y(o,"SECTION",{class:!0});var c=h(t);P(e.$$.fragment,c),s=I(c),a=y(c,"H1",{class:!0});var v=h(a);i=E(v,"Sorry, No Results found"),v.forEach(g),n=I(c),l=y(c,"P",{class:!0});var b=h(l);r=E(b,"Try searching for something more specific."),b.forEach(g),c.forEach(g),this.h()},h(){_(a,"class","svelte-uq52wz"),_(l,"class","svelte-uq52wz"),_(t,"class","error svelte-uq52wz")},m(o,c){z(o,t,c),Y(e,t,null),m(t,s),m(t,a),m(a,i),m(t,n),m(t,l),m(l,r),u=!0},p:w,i(o){u||(k(e.$$.fragment,o),f||A(()=>{f=B(t,H,{}),f.start()}),u=!0)},o(o){$(e.$$.fragment,o),u=!1},d(o){o&&g(t),j(e)}}}function X(p){let t,e,s,a;return{c(){t=S("svg"),e=S("style"),s=q(`.spinner_7mtw {
				transform-origin: center;
				animation: spinner_jgYN 0.6s linear infinite;
				fill: #ff2600;
			}
			@keyframes spinner_jgYN {
				100% {
					transform: rotate(360deg);
				}
			}
		`),a=S("path"),this.h()},l(i){t=C(i,"svg",{width:!0,class:!0,height:!0,viewBox:!0,xmlns:!0});var n=h(t);e=C(n,"style",{});var l=h(e);s=E(l,`.spinner_7mtw {
				transform-origin: center;
				animation: spinner_jgYN 0.6s linear infinite;
				fill: #ff2600;
			}
			@keyframes spinner_jgYN {
				100% {
					transform: rotate(360deg);
				}
			}
		`),l.forEach(g),a=C(n,"path",{class:!0,d:!0}),h(a).forEach(g),n.forEach(g),this.h()},h(){_(a,"class","spinner_7mtw"),_(a,"d","M2,12A11.2,11.2,0,0,1,13,1.05C12.67,1,12.34,1,12,1a11,11,0,0,0,0,22c.34,0,.67,0,1-.05C6,23,2,17.74,2,12Z"),_(t,"width","48"),_(t,"class","loader svelte-uq52wz"),_(t,"height","48"),_(t,"viewBox","0 0 24	 24"),_(t,"xmlns","http://www.w3.org/2000/svg")},m(i,n){z(i,t,n),m(t,e),m(e,s),m(t,a)},p:w,i:w,o:w,d(i){i&&g(t)}}}function tt(p){let t,e,s,a,i,n,l,r,f,u;return e=new R({props:{icon:"solar:arrow-to-top-left-broken"}}),{c(){t=d("section"),T(e.$$.fragment),s=N(),a=d("h1"),i=q("No search query"),n=N(),l=d("p"),r=q("Try searching from the search bar above."),this.h()},l(o){t=y(o,"SECTION",{class:!0});var c=h(t);P(e.$$.fragment,c),s=I(c),a=y(c,"H1",{class:!0});var v=h(a);i=E(v,"No search query"),v.forEach(g),n=I(c),l=y(c,"P",{class:!0});var b=h(l);r=E(b,"Try searching from the search bar above."),b.forEach(g),c.forEach(g),this.h()},h(){_(a,"class","svelte-uq52wz"),_(l,"class","svelte-uq52wz"),_(t,"class","error svelte-uq52wz")},m(o,c){z(o,t,c),Y(e,t,null),m(t,s),m(t,a),m(a,i),m(t,n),m(t,l),m(l,r),u=!0},p:w,i(o){u||(k(e.$$.fragment,o),f||A(()=>{f=B(t,H,{}),f.start()}),u=!0)},o(o){$(e.$$.fragment,o),u=!1},d(o){o&&g(t),j(e)}}}function et(p){let t,e,s,a;const i=[tt,X,W,V],n=[];function l(r,f){return r[0]?!r[1]&&!r[2].length?1:r[1]&&r[2].length==0?2:r[2].length>0?3:-1:0}return~(t=l(p))&&(e=n[t]=i[t](p)),{c(){e&&e.c(),s=x()},l(r){e&&e.l(r),s=x()},m(r,f){~t&&n[t].m(r,f),z(r,s,f),a=!0},p(r,[f]){let u=t;t=l(r),t===u?~t&&n[t].p(r,f):(e&&(Q(),$(n[u],1,1,()=>{n[u]=null}),L()),~t?(e=n[t],e?e.p(r,f):(e=n[t]=i[t](r),e.c()),k(e,1),e.m(s.parentNode,s)):e=null)},i(r){a||(k(e),a=!0)},o(r){$(e),a=!1},d(r){~t&&n[t].d(r),r&&g(s)}}}function rt(p,t,e){let s;M(p,Z,r=>e(3,s=r));let a,i=!1;async function n(r){e(1,i=!1),e(2,l=[]);let f=await D.fetch(`*[_type == "blog" && (title match $query || description match $query || tags[] match $query)] | order(date desc) {
				title,
				description,
				body,
				date,
				"category": category->name,
				"slug": slug.current,
				"color": category->color,
				"symbol": category->icon,
				tags,
				"coverImage": featuredImage.asset->url,
				"url": "/article/" + slug.current,
				"imageSrc": featuredImage.asset -> creditLine,
				featured,
				"avgColor": featuredImage.asset->metadata.palette.dominant.background,
				featuredImage{
					asset->{
						...,
						metadata
					}
				}
			}`,{query:r}).then(u=>u.map(o=>({...o,ert:K(o.body)+" min read",daysAgo:U(o.date),coverImage:o.coverImage+"?w=400&fm=webp"})));return e(1,i=!0),f}let l=[];return p.$$.update=()=>{p.$$.dirty&8&&e(0,a=s.url.searchParams.toString().split("q=")[1]),p.$$.dirty&1&&n(a).then(r=>{e(2,l=r)})},[a,i,l,s]}class ft extends O{constructor(t){super(),F(this,t,rt,et,G,{})}}export{ft as component};
