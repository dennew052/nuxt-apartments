import{o,c as u,a as e,s as g,t as m,v as k,x as h,w as B,y as j,r as v,z as $,n as S,g as V,A as D,b as q,q as f,B as z,F as p,C as E}from"./CToIIIKZ.js";import{_ as F}from"./Q23lNA6_.js";import{a as I}from"./B4uVmeYG.js";const L={class:"flex justify-center p-6"},O={class:"flex text-xl [&>div]:w-12 [&>div]:h-12 [&>div]:border-l-2 [&>div]:bg-white [&>div]:flex [&>div]:items-center [&>div]:justify-center [&>div:active]:bg-gray-300"},A={key:0,class:"!w-fit pl-4 pr-4 active:!bg-white"},M={__name:"Pagination",props:{info:Object,currentPage:Number},emits:["nextPage","previousPage","openPageByNum"],setup(t,{emit:r}){const a=r;return(s,n)=>(o(),u("div",L,[e("div",O,[e("div",{class:g(t.info&&t.info.prev?"cursor-pointer":["text-gray-300","active:!bg-white"]),onClick:n[0]||(n[0]=()=>a("openPageByNum",1))},"« ",2),e("div",{class:g(t.info&&t.info.prev?"cursor-pointer":["text-gray-300","active:!bg-white"]),onClick:n[1]||(n[1]=()=>a("previousPage"))},"‹ ",2),t.info.pages?(o(),u("div",A,m(t.currentPage)+" из "+m(t.info.pages),1)):k("",!0),e("div",{class:g(t.info&&t.info.next?"cursor-pointer":["text-gray-300","active:!bg-white"]),onClick:n[2]||(n[2]=()=>a("nextPage"))},"› ",2),e("div",{class:g(t.info&&t.info.next?"cursor-pointer":["text-gray-300","active:!bg-white"]),onClick:n[3]||(n[3]=()=>a("openPageByNum",t.info.pages))},"» ",2)]),e("input",{onChange:n[4]||(n[4]=l=>{a("openPageByNum",l.target.value),l.target.value=""}),type:"text",class:"ml-4 w-14 text-center"},null,32)]))}},R={class:"h-96 flex rounded-2xl border border-slate-100 cursor-pointer transition hover:-translate-y-2 flex-col",style:{"box-shadow":"rgba(50, 50, 93, 0.25) 0 6px 12px -2px, rgba(0, 0, 0, 0.3) 0 3px 7px -3px"}},G=["src"],H={class:"text-2xl h-full flex items-center justify-center text-center font-medium"},J={__name:"Card",props:{id:String,title:String,image:String},setup(t){return(r,a)=>{const s=F;return o(),h(s,{to:`/${t.id}`},{default:B(()=>[e("div",R,[e("img",{src:t.image,alt:"photo",class:"min-h-72 object-cover rounded-t-xl"},null,8,G),e("div",H,m(t.title),1)])]),_:1},8,["to"])}}},K=e("div",{class:"flex mb-6"},[e("div",{class:"w-full h-96 bg-[url('public/background-main.jpg')] bg-cover brightness-50"}),e("div",{class:"text-white absolute w-full h-96 md:text-6xl text-4xl font-medium text-center flex items-center justify-center"}," Лучшие апартаменты ")],-1),Q={class:"pt-10 bg-gray-300"},T={class:"flex gap-4 flex-row justify-center p-4"},U=e("option",{value:""},"Тип - По умолчанию",-1),W=e("option",{value:"Condo"},"Condo",-1),X=e("option",{value:"Villa"},"Villa",-1),Y=[U,W,X],Z={class:"grid gap-5 p-6 justify-items-center",style:{"grid-template-columns":"repeat(auto-fill, minmax(300px, 1fr))"}},ae=j({__name:"index",setup(t){const r=v([]),a=v([]),s=$({type:""}),n=v(1),l=v(!1),c=async()=>{try{const i={"type[0]":s.type,_page:n.value,_per_page:5},{data:x}=await I.get("http://localhost:3001/items",{params:i});r.value=x.data,a.value=x}catch(i){console.log(i)}finally{l.value=!1}},y=i=>{s.type=i.target.value},_=()=>{l.value||(console.log(a.value.next),a.value.next&&(n.value++,c()))},b=()=>{l.value||a.value.prev&&(n.value--,c())},P=i=>{console.log("Проверка "+i),Number(i)>=1&&Number(i)<=a.value.pages&&(n.value=Number(i),c())};return S(()=>{c()}),V(s,c),(i,x)=>{const w=M,C=J,N=D("auto-animate");return o(),u(p,null,[K,e("div",Q,[e("div",T,[e("select",{onChange:y,class:"py-2 px-3 border rounded-md outline-none text-xl w-[350px]"},Y,32)]),q(w,{onNextPage:_,onPreviousPage:b,onOpenPageByNum:P,info:f(a),currentPage:f(n)},null,8,["info","currentPage"])]),z((o(),u("div",Z,[(o(!0),u(p,null,E(f(r),d=>(o(),h(C,{key:d.id,id:d.id,title:d.title.ru,image:d.images[0]},null,8,["id","title","image"]))),128))])),[[N]])],64)}}});export{ae as default};