import{e as A,d as z}from"../chunks/utils.34dffdb9.js";import{c as H}from"../chunks/sanityClient.4c99891d.js";import{S as L,i as B,s as F,a as b,k as p,L as G,h as m,c as $,l as g,m as h,n as v,b as y,g as I,F as C,d as E,Y as N,q as k,y as O,r as S,z as P,C as u,A as T,E as j,B as q}from"../chunks/index.6a054f53.js";import{f as J,a as M}from"../chunks/index.ccf670be.js";import{P as R}from"../chunks/PostGrid.4aaa51f6.js";import{I as Y}from"../chunks/Icon.82cce8fa.js";async function D({params:d}){const e=JSON.parse(localStorage.getItem("savedItems"))||[];if(e.length==0)return{posts:[]};const t=await H.fetch(`*[_type == "blog" && slug.current in $saved] {
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
		}`,{saved:e});return t?(t.forEach(a=>{a.ert=A(a.body)+" min read",a.daysAgo=z(a.date),delete a.body}),{posts:t}):{posts:[]}}const se=Object.freeze(Object.defineProperty({__proto__:null,load:D},Symbol.toStringTag,{value:"Module"}));function K(d){let e,t,a,s,n;return s=new R({props:{posts:d[0]}}),{c(){e=p("h1"),t=k("Saved posts"),a=b(),O(s.$$.fragment),this.h()},l(r){e=g(r,"H1",{class:!0});var i=h(e);t=S(i,"Saved posts"),i.forEach(m),a=$(r),P(s.$$.fragment,r),this.h()},h(){v(e,"class","highlight svelte-639inn")},m(r,i){y(r,e,i),u(e,t),y(r,a,i),T(s,r,i),n=!0},p:j,i(r){n||(I(s.$$.fragment,r),n=!0)},o(r){E(s.$$.fragment,r),n=!1},d(r){r&&m(e),r&&m(a),q(s,r)}}}function Q(d){let e,t,a,s,n,r,i,f,_,o;return t=new Y({props:{icon:"solar:book-bookmark-minimalistic-broken"}}),{c(){e=p("section"),O(t.$$.fragment),a=b(),s=p("h1"),n=k("Nothing saved yet"),r=b(),i=p("p"),f=k("Save your favorite blogs to read them later"),this.h()},l(l){e=g(l,"SECTION",{class:!0});var c=h(e);P(t.$$.fragment,c),a=$(c),s=g(c,"H1",{class:!0});var w=h(s);n=S(w,"Nothing saved yet"),w.forEach(m),r=$(c),i=g(c,"P",{class:!0});var x=h(i);f=S(x,"Save your favorite blogs to read them later"),x.forEach(m),c.forEach(m),this.h()},h(){v(s,"class","svelte-639inn"),v(i,"class","svelte-639inn"),v(e,"class","error svelte-639inn")},m(l,c){y(l,e,c),T(t,e,null),u(e,a),u(e,s),u(s,n),u(e,r),u(e,i),u(i,f),o=!0},p:j,i(l){o||(I(t.$$.fragment,l),_||C(()=>{_=N(e,J,{}),_.start()}),o=!0)},o(l){E(t.$$.fragment,l),o=!1},d(l){l&&m(e),q(t)}}}function U(d){let e,t,a,s,n,r;const i=[Q,K],f=[];function _(o,l){return o[0].length===0?0:1}return a=_(d),s=f[a]=i[a](d),{c(){e=b(),t=p("section"),s.c(),this.h()},l(o){G("svelte-qj9505",document.head).forEach(m),e=$(o),t=g(o,"SECTION",{class:!0});var c=h(t);s.l(c),c.forEach(m),this.h()},h(){document.title="Saved ",v(t,"class","main svelte-639inn")},m(o,l){y(o,e,l),y(o,t,l),f[a].m(t,null),r=!0},p(o,[l]){s.p(o,l)},i(o){r||(I(s),n||C(()=>{n=N(t,M,{y:10,duration:500}),n.start()}),r=!0)},o(o){E(s),r=!1},d(o){o&&m(e),o&&m(t),f[a].d()}}}function V(d,e,t){let{data:a}=e,s=a.posts;return s.forEach(n=>{n.coverImage=n.coverImage+"?w=400&fm=webp"}),d.$$set=n=>{"data"in n&&t(1,a=n.data)},[s,a]}class re extends L{constructor(e){super(),B(this,e,V,U,F,{data:1})}}export{re as component,se as universal};
