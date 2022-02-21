var k=Object.defineProperty,v=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var b=(t,r,a)=>r in t?k(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,m=(t,r)=>{for(var a in r||(r={}))R.call(r,a)&&b(t,a,r[a]);if(g)for(var a of g(r))j.call(r,a)&&b(t,a,r[a]);return t},f=(t,r)=>v(t,A(r));import{c as d,R as N,j as e,N as h,a as l,t as E,D as P,b as T,r as p,e as _,o as S,d as D,f as O,g as u,h as y,i as $,k as U}from"./vendor.993b6700.js";const G=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}};G();const J=d({type:"dark",theme:{colors:{blur:"rgba(0,0,0,0.5)"}}}),L=()=>(N.useState(!1),e(h,{theme:J,children:e("nav",{className:"w-full sticky top-0 z-50 backdrop-blur-lg ",children:l("div",{className:"w-30 mx-5 flex md:justify-center justify-between items-center px-3",children:[e("div",{className:"md:flex-[0.5] flex-initial justify-center items-center",children:e("h3",{className:"w-32 cursor-pointer",children:"Job Site"})}),e("ul",{className:"md:flex hidden list-none flex-row justify-between items-center flex-initial",children:e("li",{className:"mx-4 cursor-pointer",children:e(E,{href:"https://www.nowhiteboard.org/",target:"_blank",icon:!0,color:"text",children:"No Whiteboard"})})})]})})})),M=d({type:"dark",theme:{colors:{}}}),I=()=>l(h,{theme:M,children:[e(P,{}),e(T,{className:"text-center my-2",size:12,children:"Job Posting 2022 - All Rights Reserved"})]});d({type:"dark",theme:{colors:{}}});const z=()=>e(h,{children:e("div",{className:"flex w-full justify-center items-center",children:e("div",{className:"flex mf:flex row flex-col items-start justify-between md:p-20 py-12 px-4",children:e("div",{className:"flex flex-1 justify-start flex-col mf:mr-10",children:l("h1",{className:"text-3xl sm:text-5xl py-1",children:["Get A",e("br",{}),"Job In Tech"]})})})})});function C({job:t}){const r=d({type:"dark",theme:{colors:{}}});return e(h,{theme:r,children:e("div",{className:"d-flex w-30 justify-content-between py-3 px-2 z-30 md:w-[75%] lg:w-[75%]",children:l(p,{hoverable:!0,borderWeight:!0,children:[e(p.Header,{children:l("h4",{children:[t.name," - ",e("span",{className:"text-muted font-weight-light",children:t.company})]})}),e(_,{}),e(p.Body,{css:{py:"$10",px:"$10"},children:e("div",{className:"flex justify-content",children:l(S,{justify:"space-between",children:[l(T,{children:[t.role,", ",t.level," ",e("br",{})," ",t.location]}),e(E,{href:t.url,target:"_blank",children:e(D,{variant:"primary",size:"sm",children:"Visit site"})})]})})})]})})})}function K({page:t,setPage:r,hasNextPage:a}){const o=d({type:"dark",theme:{colors:{}}});function s(n){r(n)}return e(h,{theme:o,children:e(O,{total:143,siblings:1,initialPage:1,page:t,onChange:n=>s(n),shadow:!0,bordered:!0})})}const i={MAKE_REQUEST:"makeRequest",GET_DATA:"getData",ERROR:"error",UPDATE_HAS_NEXT_PAGE:"update-has-next-page"};function F(t,r){switch(r.type){case i.MAKE_REQUEST:return{loading:!0,jobs:[]};case i.GET_DATA:return f(m({},t),{loading:!1,jobs:r.payload.jobs});case i.ERROR:return f(m({},t),{loading:!1,error:r.payload.error,jobs:[]});case i.UPDATE_HAS_NEXT_PAGE:return f(m({},t),{hasNextPage:r.payload.hasNextPage});default:return t}}function H(t,r){const[a,o]=u.exports.useReducer(F,{jobs:[],loading:!0}),s="/api/jobs";return u.exports.useEffect(()=>{const n=y.CancelToken.source();return o({type:i.MAKE_REQUEST}),y.get(s,{cancelToken:n.token}).then(c=>{o({type:i.GET_DATA,payload:{jobs:c.data}})}).catch(c=>{y.isCancel(c)||o({type:i.ERROR,payload:{error:c}})}),()=>{n.cancel()}},[t]),a}const Q=d({type:"dark",theme:{colors:{}}});function W(){u.exports.useState(0);const[t,r]=u.exports.useState({}),[a,o]=u.exports.useState(1),{jobs:s,loading:n,error:c,hasNextPage:w}=H(t);return e(h,{theme:Q,children:l("div",{className:"min-h-screen",children:[e(L,{}),e(z,{}),l($,{align:"center",children:[e(K,{page:a,setPage:o,hasNextPage:w}),l("div",{className:"flex flex-col justify-center items-center",children:[n&&e("h1",{children:"Loading..."}),c&&e("h1",{children:"Error"}),s.map(x=>e(C,{job:x},x.id))]})]}),e(I,{})]})})}U.render(e(N.StrictMode,{children:e(W,{})}),document.getElementById("root"));
