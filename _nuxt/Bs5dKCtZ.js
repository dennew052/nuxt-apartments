import{u as y,r as n,n as b,q as e,c,a as t,s as w,v as r,t as i,o as u}from"./CToIIIKZ.js";import{a as I}from"./B4uVmeYG.js";const k={key:0,class:"flex flex-col gap-8 items-center pt-4 m-4"},L={class:"relative"},C=["src"],B=t("div",{class:"text-3xl font-bold text-center -translate-x-0.5 translate-y-0.5"}," < ",-1),M=[B],j=t("div",{class:"text-3xl font-bold text-center translate-x-0.5 translate-y-0.5"}," > ",-1),H=[j],N={class:"text-center"},S={class:"flex flex-col items-center justify-between h-[700px] text-2xl gap-8"},T={class:"font-medium"},V=["innerHTML"],F={__name:"[id]",setup(q){const h=y(),s=n([]),v=async()=>{try{const{data:l}=await I.get(`http://localhost:3001/items/${h.params.id}`);s.value=l}catch(l){console.log(l)}finally{d.value=!1}},a=n(0),o=n(!1),d=n(!0),x=()=>{a.value>=0&&o.value===!1&&(o.value=!0,a.value--)},f=()=>{a.value<s.value.images.length-1&&o.value===!1&&(o.value=!0,a.value++)},g=()=>{o.value=!1};return b(()=>{v()}),(l,z)=>{var m,p,_;return e(d)?r("",!0):(u(),c("div",k,[t("div",L,[t("img",{src:(m=e(s).images)==null?void 0:m[e(a)],onLoad:g,alt:"image",class:w(["w-[1000px] h-[700px] object-cover",e(o)?"opacity-50":"opacity-100"])},null,42,C),e(a)>0?(u(),c("div",{key:0,onClick:x,class:"w-12 h-12 bg-white absolute top-[50%] left-0 translate-x-[25%] -translate-y-[50%] rounded-full opacity-60 hover:scale-110 transition cursor-pointer"},M)):r("",!0),e(a)<((p=e(s).images)==null?void 0:p.length)-1?(u(),c("div",{key:1,onClick:f,class:"w-12 h-12 bg-white absolute top-[50%] right-0 -translate-x-[25%] -translate-y-[50%] rounded-full opacity-60 hover:scale-110 transition cursor-pointer"},H)):r("",!0),t("div",N,i(e(a)+1)+"/"+i((_=e(s).images)==null?void 0:_.length),1)]),t("div",S,[t("div",T,i(e(s).title.ru),1),t("div",null,i(parseInt(e(s).price).toLocaleString())+" руб.",1),t("div",{class:"text-lg max-w-[800px] pb-24",innerHTML:e(s).description.ru},null,8,V)])]))}}};export{F as default};