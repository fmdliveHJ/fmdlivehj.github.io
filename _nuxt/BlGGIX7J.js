import{N as l,m as u,c as _,O as m,u as a,a as o,b as p,t as s,B as i,o as d}from"./Bhb1Y7FI.js";import{u as f}from"./C3cHSHd9.js";const g={key:0},k={__name:"[slug]",async setup(y){let e,n;const r=l(),{data:t}=([e,n]=u(()=>f(()=>queryContent("blog",r.params.slug).findOne(),"$qFggIq0u6c")),e=await e,n(),e);return(C,h)=>{const c=i("ContentRenderer");return a(t)?(d(),_("article",g,[o("h1",null,s(a(t).title),1),o("p",null,s(a(t).date),1),p(c,{value:a(t)},null,8,["value"])])):m("",!0)}}};export{k as default};
