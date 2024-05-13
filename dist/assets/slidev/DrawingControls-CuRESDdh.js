import{g as O,B as Q,C as T,D as Y,E as W,F as X,G as Z,H as ee,J as ne,K as te,L as se,M as oe}from"../modules/unplugin-icons-DZjh6C0b.js";import{d as B,t as $,Q as le,aB as ae,o as g,b as L,f as re,h as M,A as e,c as x,k as o,l as n,i as l,e as i,x as ie,aa as m,ab as ue,F as ce,ad as de,an as b,g as _e}from"../modules/vue-BbxyWt8p.js";import{L as pe}from"../modules/shiki-C09VQ4t4.js";import{c as me}from"./DrawingPreview-BxsNwTGT.js";import{V as D}from"./ContextMenu-BFrecAkT.js";import{_ as z}from"../index-B0Jz1orf.js";import{I as a}from"./IconButton-C_GfWXgT.js";import"./title-renderer-C6Pg8xnr.js";import"./context-BzSppQYF.js";const ge=B({__name:"Draggable",props:{storageKey:{type:String,required:!1},initial:{type:Object,required:!1}},setup(h){const u=h,f=$(null),w=u.initial??{x:0,y:0},k=u.storageKey?le(u.storageKey,w):$(w),{style:y}=ae(f,{initialValue:k});return(v,d)=>(g(),L("div",{ref_key:"el",ref:f,class:"fixed",style:M(e(y))},[re(v.$slots,"default")],4))}}),fe=z(ge,[["__file","/Users/paulnegoescu/work/clean-code-frontend/node_modules/@slidev/client/internals/Draggable.vue"]]),we=i("svg",{width:"1em",height:"1em",class:"-mt-0.5",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[i("path",{d:"M21.71 3.29a1 1 0 0 0-1.42 0l-18 18a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l18-18a1 1 0 0 0 0-1.42z",fill:"currentColor"})],-1),ve=i("svg",{viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},[i("line",{x1:"2",y1:"15",x2:"22",y2:"4",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round"}),i("line",{x1:"2",y1:"24",x2:"28",y2:"10",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"}),i("line",{x1:"7",y1:"31",x2:"29",y2:"19",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1),be={class:"flex bg-main p-2"},ke={class:"inline-block w-7 text-center"},ye={class:"pt-.5"},Ce=B({__name:"DrawingControls",setup(h){const{brush:u,canClear:f,canRedo:w,canUndo:k,clear:y,drauu:v,drawingEnabled:d,drawingMode:r,drawingPinned:c,brushColors:S}=me();function V(){v.undo()}function U(){v.redo()}let C="stylus";function _(p){r.value=p,d.value=!0,p!=="eraseLine"&&(C=p)}function E(p){u.color=p,d.value=!0,r.value=C}return(p,t)=>{const K=O,A=Q,F=T,N=Y,R=W,j=X,q=Z,I=ee,P=ne,G=te,H=se,J=oe;return g(),x(fe,{class:l(["flex flex-wrap text-xl p-2 gap-1 rounded-md bg-main shadow transition-opacity duration-200 z-20 border border-main",e(d)?"":e(c)?"opacity-40 hover:opacity-90":"opacity-0 pointer-events-none"]),"storage-key":"slidev-drawing-pos","initial-x":10,"initial-y":10},{default:o(()=>[n(a,{title:"Draw with stylus",class:l({shallow:e(r)!=="stylus"}),onClick:t[0]||(t[0]=s=>_("stylus"))},{default:o(()=>[n(K)]),_:1},8,["class"]),n(a,{title:"Draw a line",class:l({shallow:e(r)!=="line"}),onClick:t[1]||(t[1]=s=>_("line"))},{default:o(()=>[we]),_:1},8,["class"]),n(a,{title:"Draw an arrow",class:l({shallow:e(r)!=="arrow"}),onClick:t[2]||(t[2]=s=>_("arrow"))},{default:o(()=>[n(A)]),_:1},8,["class"]),n(a,{title:"Draw an ellipse",class:l({shallow:e(r)!=="ellipse"}),onClick:t[3]||(t[3]=s=>_("ellipse"))},{default:o(()=>[n(F)]),_:1},8,["class"]),n(a,{title:"Draw a rectangle",class:l({shallow:e(r)!=="rectangle"}),onClick:t[4]||(t[4]=s=>_("rectangle"))},{default:o(()=>[n(N)]),_:1},8,["class"]),n(a,{title:"Erase",class:l({shallow:e(r)!=="eraseLine"}),onClick:t[5]||(t[5]=s=>_("eraseLine"))},{default:o(()=>[n(R)]),_:1},8,["class"]),n(D),n(e(pe),null,{popper:o(()=>[i("div",be,[i("div",ke,ie(e(u).size),1),i("div",ye,[m(i("input",{"onUpdate:modelValue":t[6]||(t[6]=s=>e(u).size=s),type:"range",min:"1",max:"15",onChange:t[7]||(t[7]=s=>r.value=e(C))},null,544),[[ue,e(u).size]])])])]),default:o(()=>[n(a,{title:"Adjust stroke width",class:l({shallow:e(r)==="eraseLine"})},{default:o(()=>[ve]),_:1},8,["class"])]),_:1}),(g(!0),L(ce,null,de(e(S),s=>(g(),x(a,{key:s,title:"Set brush color",class:l(e(u).color===s&&e(r)!=="eraseLine"?"active":"shallow"),onClick:xe=>E(s)},{default:o(()=>[i("div",{class:l(["w-6 h-6 transition-all transform border",e(u).color!==s?"rounded-1/2 scale-85 border-white":"rounded-md border-gray-300/50"]),style:M(e(d)?{background:s}:{borderColor:s})},null,6)]),_:2},1032,["class","onClick"]))),128)),n(D),n(a,{title:"Undo",class:l({disabled:!e(k)}),onClick:t[8]||(t[8]=s=>V())},{default:o(()=>[n(j)]),_:1},8,["class"]),n(a,{title:"Redo",class:l({disabled:!e(w)}),onClick:t[9]||(t[9]=s=>U())},{default:o(()=>[n(q)]),_:1},8,["class"]),n(a,{title:"Delete",class:l({disabled:!e(f)}),onClick:t[10]||(t[10]=s=>e(y)())},{default:o(()=>[n(I)]),_:1},8,["class"]),n(D),n(a,{title:e(c)?"Unpin drawing":"Pin drawing",class:l({shallow:!e(c)}),onClick:t[11]||(t[11]=s=>c.value=!e(c))},{default:o(()=>[m(n(P,{class:"transform -rotate-45"},null,512),[[b,e(c)]]),m(n(G,null,null,512),[[b,!e(c)]])]),_:1},8,["title","class"]),e(d)?(g(),x(a,{key:0,title:e(c)?"Drawing pinned":"Drawing unpinned",class:l({shallow:!e(d)}),onClick:t[12]||(t[12]=s=>d.value=!e(d))},{default:o(()=>[m(n(H,null,null,512),[[b,e(c)]]),m(n(J,null,null,512),[[b,!e(c)]])]),_:1},8,["title","class"])):_e("v-if",!0)]),_:1},8,["class"])}}}),Ue=z(Ce,[["__file","/Users/paulnegoescu/work/clean-code-frontend/node_modules/@slidev/client/internals/DrawingControls.vue"]]);export{Ue as default};
