import{n as y}from"../modules/unplugin-icons-DZjh6C0b.js";import{d as h,y as u,o as i,b as c,e as s,l as S,A as w,F as f,x as m,g as I,ad as z,aa as V,ab as $,h as x,i as d,p as B,a as D}from"../modules/vue-BbxyWt8p.js";import{n as F,r as M,C as N,_ as A}from"../index-B0Jz1orf.js";const k=a=>(B("data-v-52a29648"),a=a(),D(),a),L=["title"],T={class:"flex gap-0.5 items-center min-w-16 font-mono mr1"},U=k(()=>s("div",{"flex-auto":""},null,-1)),j={"text-primary":""},q=k(()=>s("span",{op25:""},"/",-1)),E={op50:""},K=["min","max"],R=h({__name:"ClicksSlider",props:{clicksContext:{type:null,required:!0}},setup(a){const n=a,o=u(()=>n.clicksContext.total),p=u(()=>F(0,n.clicksContext.clicksStart,o.value)),r=u(()=>o.value-p.value+1),t=u({get(){return n.clicksContext.current>o.value?-1:n.clicksContext.current},set(v){n.clicksContext.current=v}}),C=u(()=>M(p.value,o.value+1));function b(){(t.value<0||t.value>o.value)&&(t.value=0)}return(v,l)=>{const g=y;return i(),c("div",{class:d(["flex gap-1 items-center select-none",r.value?"":"op50"]),title:`Clicks in this slide: ${r.value}`},[s("div",T,[S(g,{"text-sm":"",op50:""}),U,t.value>=0&&t.value!==w(N)?(i(),c(f,{key:0},[s("span",j,m(t.value),1),q],64)):I("v-if",!0),s("span",E,m(o.value),1)]),s("div",{relative:"","flex-auto":"",h5:"","font-mono":"",flex:"~",onDblclick:l[2]||(l[2]=e=>t.value=v.clicksContext.total)},[(i(!0),c(f,null,z(C.value,e=>(i(),c("div",{key:e,border:"y main","of-hidden":"",relative:"",class:d([e===0?"rounded-l border-l":"",e===o.value?"rounded-r border-r":""]),style:x({width:r.value>0?`${1/r.value*100}%`:"100%"})},[s("div",{absolute:"","inset-0":"",class:d(e<=t.value?"bg-primary op15":"")},null,2),s("div",{class:d([+e==+t.value?"text-primary font-bold op100 border-primary":"op30 border-main",e===0?"rounded-l":"",e===o.value?"rounded-r":"border-r-2"]),"w-full":"","h-full":"","text-xs":"",flex:"","items-center":"","justify-center":"","z-1":""},m(e),3)],6))),128)),V(s("input",{"onUpdate:modelValue":l[0]||(l[0]=e=>t.value=e),class:"range",absolute:"","inset-0":"",type:"range",min:p.value,max:o.value,step:1,"z-10":"",op0:"",style:x({"--thumb-width":`${1/(r.value+1)*100}%`}),onMousedown:b,onFocus:l[1]||(l[1]=e=>{var _;return(_=e.currentTarget)==null?void 0:_.blur()})},null,44,K),[[$,t.value]])],32)],10,L)}}}),J=A(R,[["__scopeId","data-v-52a29648"],["__file","/Users/paulnegoescu/work/clean-code-frontend/node_modules/@slidev/client/internals/ClicksSlider.vue"]]);export{J as C};