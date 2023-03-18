import{s as X,r as z,I as be,v as se,x as j,y as oe,p as R,z as Y,e as d,A as O,B as re,i as h,C as pe,D as le,E as ze,F as Ie,G as Ce,g as N,H as xe,f as _e,b as f,S as ie,h as Re,k as we,a as $e,J as Ne,K as Be,L as te,M as Ve,N as ke,O as Pe,P as G,Q as T,R as ue,U as ne,V as Le,W as Oe,m as ce,X as Te,d as de,Y as He,t as Me,Z as We}from"./index.f631209f.js";function H(e){const a=X("useRender");a.render=e}function Ae(e){const a=z(),n=z();if(be){const t=new ResizeObserver(s=>{e==null||e(s,t),s.length&&(n.value=s[0].contentRect)});se(()=>{t.disconnect()}),j(a,(s,r)=>{r&&(t.unobserve(r),n.value=void 0),s&&t.observe(s)},{flush:"post"})}return{resizeRef:a,contentRect:oe(n)}}const D=Symbol.for("vuetify:layout"),ve=Symbol.for("vuetify:layout-item"),ae=1e3,Ee=R({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),lt=R({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function je(){const e=Y(D);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function it(e){var u;const a=Y(D);if(!a)throw new Error("[Vuetify] Could not find injected layout");const n=(u=e.id)!=null?u:`layout-item-${pe()}`,t=X("useLayoutItem");le(ve,{id:n});const s=z(!1);ze(()=>s.value=!0),Ie(()=>s.value=!1);const{layoutItemStyles:r,layoutItemScrimStyles:l}=a.register(t,{...e,active:d(()=>s.value?!1:e.active.value),id:n});return se(()=>a.unregister(n)),{layoutItemStyles:r,layoutRect:a.layoutRect,layoutItemScrimStyles:l}}const De=(e,a,n,t)=>{let s={top:0,left:0,right:0,bottom:0};const r=[{id:"",layer:{...s}}];for(const l of e){const u=a.get(l),y=n.get(l),c=t.get(l);if(!u||!y||!c)continue;const m={...s,[u.value]:parseInt(s[u.value],10)+(c.value?parseInt(y.value,10):0)};r.push({id:l,layer:m}),s=m}return r};function Fe(e){const a=Y(D,null),n=d(()=>a?a.rootZIndex.value-100:ae),t=z([]),s=O(new Map),r=O(new Map),l=O(new Map),u=O(new Map),y=O(new Map),{resizeRef:c,contentRect:m}=Ae(),I=d(()=>{var o;const g=new Map,S=(o=e.overlaps)!=null?o:[];for(const v of S.filter(i=>i.includes(":"))){const[i,b]=v.split(":");if(!t.value.includes(i)||!t.value.includes(b))continue;const x=s.get(i),k=s.get(b),P=r.get(i),A=r.get(b);!x||!k||!P||!A||(g.set(b,{position:x.value,amount:parseInt(P.value,10)}),g.set(i,{position:k.value,amount:-parseInt(A.value,10)}))}return g}),p=d(()=>{const g=[...new Set([...l.values()].map(o=>o.value))].sort((o,v)=>o-v),S=[];for(const o of g){const v=t.value.filter(i=>{var b;return((b=l.get(i))==null?void 0:b.value)===o});S.push(...v)}return De(S,s,r,u)}),w=d(()=>!Array.from(y.values()).some(g=>g.value)),$=d(()=>p.value[p.value.length-1].layer),M=d(()=>({"--v-layout-left":h($.value.left),"--v-layout-right":h($.value.right),"--v-layout-top":h($.value.top),"--v-layout-bottom":h($.value.bottom),...w.value?void 0:{transition:"none"}})),C=d(()=>p.value.slice(1).map((g,S)=>{let{id:o}=g;const{layer:v}=p.value[S],i=r.get(o),b=s.get(o);return{id:o,...v,size:Number(i.value),position:b.value}})),B=g=>C.value.find(S=>S.id===g),V=X("createLayout"),W=z(!1);re(()=>{W.value=!0}),le(D,{register:(g,S)=>{let{id:o,order:v,position:i,layoutSize:b,elementSize:x,active:k,disableTransitions:P,absolute:A}=S;l.set(o,v),s.set(o,i),r.set(o,b),u.set(o,k),P&&y.set(o,P);const J=Ce(ve,V==null?void 0:V.vnode).indexOf(g);J>-1?t.value.splice(J,0,o):t.value.push(o);const Q=d(()=>C.value.findIndex(L=>L.id===o)),U=d(()=>n.value+p.value.length*2-Q.value*2),ye=d(()=>{const L=i.value==="left"||i.value==="right",K=i.value==="right",Se=i.value==="bottom",ee={[i.value]:0,zIndex:U.value,transform:`translate${L?"X":"Y"}(${(k.value?0:-110)*(K||Se?-1:1)}%)`,position:A.value||n.value!==ae?"absolute":"fixed",...w.value?void 0:{transition:"none"}};if(!W.value)return ee;const _=C.value[Q.value];if(!_)throw new Error(`[Vuetify] Could not find layout item "${o}"`);const Z=I.value.get(o);return Z&&(_[Z.position]+=Z.amount),{...ee,height:L?`calc(100% - ${_.top}px - ${_.bottom}px)`:x.value?`${x.value}px`:void 0,left:K?void 0:`${_.left}px`,right:K?`${_.right}px`:void 0,top:i.value!=="bottom"?`${_.top}px`:void 0,bottom:i.value!=="top"?`${_.bottom}px`:void 0,width:L?x.value?`${x.value}px`:void 0:`calc(100% - ${_.left}px - ${_.right}px)`}}),he=d(()=>({zIndex:U.value-1}));return{layoutItemStyles:ye,layoutItemScrimStyles:he,zIndex:U}},unregister:g=>{l.delete(g),s.delete(g),r.delete(g),u.delete(g),y.delete(g),t.value=t.value.filter(S=>S!==g)},mainRect:$,mainStyles:M,getLayoutItem:B,items:C,layoutRect:m,rootZIndex:n});const F=d(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),q=d(()=>({zIndex:n.value,position:a?"relative":void 0,overflow:a?"hidden":void 0}));return{layoutClasses:F,layoutStyles:q,getLayoutItem:B,items:C,layoutRect:m,layoutRef:c}}const ut=N(!1)({name:"VDefaultsProvider",props:{defaults:Object,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,a){let{slots:n}=a;const{defaults:t,reset:s,root:r,scoped:l}=xe(e);return _e(t,{reset:s,root:r,scoped:l}),()=>{var u;return(u=n.default)==null?void 0:u.call(n)}}});const qe=R({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Ue(e){return{dimensionStyles:d(()=>({height:h(e.height),maxHeight:h(e.maxHeight),maxWidth:h(e.maxWidth),minHeight:h(e.minHeight),minWidth:h(e.minWidth),width:h(e.width)}))}}function Ke(e){return{aspectStyles:d(()=>{const a=Number(e.aspectRatio);return a?{paddingBottom:String(1/a*100)+"%"}:void 0})}}const Ze=N()({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...qe()},setup(e,a){let{slots:n}=a;const{aspectStyles:t}=Ke(e),{dimensionStyles:s}=Ue(e);return H(()=>{var r;return f("div",{class:"v-responsive",style:s.value},[f("div",{class:"v-responsive__sizer",style:t.value},null),(r=n.additional)==null?void 0:r.call(n),n.default&&f("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}});function Xe(e,a){if(!ie)return;const n=a.modifiers||{},t=a.value,{handler:s,options:r}=typeof t=="object"?t:{handler:t,options:{}},l=new IntersectionObserver(function(){var I;let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],y=arguments.length>1?arguments[1]:void 0;const c=(I=e._observe)==null?void 0:I[a.instance.$.uid];if(!c)return;const m=u.some(p=>p.isIntersecting);s&&(!n.quiet||c.init)&&(!n.once||m||c.init)&&s(m,u,y),m&&n.once?fe(e,a):c.init=!0},r);e._observe=Object(e._observe),e._observe[a.instance.$.uid]={init:!1,observer:l},l.observe(e)}function fe(e,a){var t;const n=(t=e._observe)==null?void 0:t[a.instance.$.uid];!n||(n.observer.unobserve(e),delete e._observe[a.instance.$.uid])}const Ye={mounted:Xe,unmounted:fe},Ge=Ye,Je=R({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),E=(e,a)=>{let{slots:n}=a;const{transition:t,...s}=e,{component:r=$e,...l}=typeof t=="object"?t:{};return Re(r,we(typeof t=="string"?{name:t}:l,s),n)},ct=N()({name:"VImg",directives:{intersect:Ge},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...Je()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,a){let{emit:n,slots:t}=a;const s=z(""),r=z(),l=z(e.eager?"loading":"idle"),u=z(),y=z(),c=d(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),m=d(()=>c.value.aspect||u.value/y.value||0);j(()=>e.src,()=>{I(l.value!=="idle")}),j(m,(o,v)=>{!o&&v&&r.value&&C(r.value)}),Ne(()=>I());function I(o){if(!(e.eager&&o)&&!(ie&&!o&&!e.eager)){if(l.value="loading",c.value.lazySrc){const v=new Image;v.src=c.value.lazySrc,C(v,null)}!c.value.src||Be(()=>{var v,i;if(n("loadstart",((v=r.value)==null?void 0:v.currentSrc)||c.value.src),(i=r.value)!=null&&i.complete){if(r.value.naturalWidth||w(),l.value==="error")return;m.value||C(r.value,null),p()}else m.value||C(r.value),$()})}}function p(){var o;$(),l.value="loaded",n("load",((o=r.value)==null?void 0:o.currentSrc)||c.value.src)}function w(){var o;l.value="error",n("error",((o=r.value)==null?void 0:o.currentSrc)||c.value.src)}function $(){const o=r.value;o&&(s.value=o.currentSrc||o.src)}let M=-1;function C(o){let v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const i=()=>{clearTimeout(M);const{naturalHeight:b,naturalWidth:x}=o;b||x?(u.value=x,y.value=b):!o.complete&&l.value==="loading"&&v!=null?M=window.setTimeout(i,v):(o.currentSrc.endsWith(".svg")||o.currentSrc.startsWith("data:image/svg+xml"))&&(u.value=1,y.value=1)};i()}const B=d(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),V=()=>{var i;if(!c.value.src||l.value==="idle")return null;const o=f("img",{class:["v-img__img",B.value],src:c.value.src,srcset:c.value.srcset,alt:"",sizes:e.sizes,ref:r,onLoad:p,onError:w},null),v=(i=t.sources)==null?void 0:i.call(t);return f(E,{transition:e.transition,appear:!0},{default:()=>[te(v?f("picture",{class:"v-img__picture"},[v,o]):o,[[Pe,l.value==="loaded"]])]})},W=()=>f(E,{transition:e.transition},{default:()=>[c.value.lazySrc&&l.value!=="loaded"&&f("img",{class:["v-img__img","v-img__img--preload",B.value],src:c.value.lazySrc,alt:""},null)]}),F=()=>t.placeholder?f(E,{transition:e.transition,appear:!0},{default:()=>[(l.value==="loading"||l.value==="error"&&!t.error)&&f("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,q=()=>t.error?f(E,{transition:e.transition,appear:!0},{default:()=>[l.value==="error"&&f("div",{class:"v-img__error"},[t.error()])]}):null,g=()=>e.gradient?f("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,S=z(!1);{const o=j(m,v=>{v&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{S.value=!0})}),o())})}return H(()=>te(f(Ze,{class:["v-img",{"v-img--booting":!S.value}],style:{width:h(e.width==="auto"?u.value:e.width)},aspectRatio:m.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>f(ke,null,[f(V,null,null),f(W,null,null),f(g,null,null),f(F,null,null),f(q,null,null)]),default:t.default}),[[Ve("intersect"),{handler:I,options:e.options},null,{once:!0}]])),{currentSrc:s,image:r,state:l,naturalWidth:u,naturalHeight:y}}}),me=R({tag:{type:String,default:"div"}},"tag"),dt=R({border:[Boolean,Number,String]},"border");function vt(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return{borderClasses:d(()=>{const t=T(e)?e.value:e.border,s=[];if(t===!0||t==="")s.push(`${a}--border`);else if(typeof t=="string"||t===0)for(const r of String(t).split(" "))s.push(`border-${r}`);return s})}}const ft=R({elevation:{type:[Number,String],validator(e){const a=parseInt(e);return!isNaN(a)&&a>=0&&a<=24}}},"elevation");function mt(e){return{elevationClasses:d(()=>{const n=T(e)?e.value:e.elevation,t=[];return n==null||t.push(`elevation-${n}`),t})}}const gt=R({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function yt(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return{roundedClasses:d(()=>{const t=T(e)?e.value:e.rounded,s=[];if(t===!0||t==="")s.push(`${a}--rounded`);else if(typeof t=="string"||t===0)for(const r of String(t).split(" "))s.push(`rounded-${r}`);return s})}}function ge(e){return ue(()=>{const a=[],n={};return e.value.background&&(ne(e.value.background)?n.backgroundColor=e.value.background:a.push(`bg-${e.value.background}`)),e.value.text&&(ne(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):a.push(`text-${e.value.text}`)),{colorClasses:a,colorStyles:n}})}function Qe(e,a){const n=d(()=>({text:T(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:s}=ge(n);return{textColorClasses:t,textColorStyles:s}}function ht(e,a){const n=d(()=>({background:T(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:s}=ge(n);return{backgroundColorClasses:t,backgroundColorStyles:s}}function et(){const e=z(!1);return re(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:d(()=>e.value?void 0:{transition:"none !important"}),isBooted:oe(e)}}const tt=["x-small","small","default","large","x-large"],nt=R({size:{type:[String,Number],default:"default"}},"size");function at(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return ue(()=>{let n,t;return Le(tt,e.size)?n=`${a}--size-${e.size}`:e.size&&(t={width:h(e.size),height:h(e.size)}),{sizeClasses:n,sizeStyles:t}})}const st=R({color:String,start:Boolean,end:Boolean,icon:Oe,...nt(),...me({tag:"i"}),...ce()},"v-icon"),St=N()({name:"VIcon",props:st(),setup(e,a){let{attrs:n,slots:t}=a,s;t.default&&(s=d(()=>{var I,p;const m=(I=t.default)==null?void 0:I.call(t);if(!!m)return(p=m.filter(w=>w.type===Te&&w.children&&typeof w.children=="string")[0])==null?void 0:p.children}));const{themeClasses:r}=de(e),{iconData:l}=He(s||e),{sizeClasses:u}=at(e),{textColorClasses:y,textColorStyles:c}=Qe(Me(e,"color"));return H(()=>f(l.value.component,{tag:e.tag,icon:l.value.icon,class:["v-icon","notranslate",r.value,u.value,y.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end}],style:[u.value?void 0:{fontSize:h(e.size),height:h(e.size),width:h(e.size)},c.value],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>{var m;return[(m=t.default)==null?void 0:m.call(t)]}})),{}}});const bt=N()({name:"VMain",props:{scrollable:Boolean,...me({tag:"main"})},setup(e,a){let{slots:n}=a;const{mainStyles:t}=je(),{ssrBootStyles:s}=et();return H(()=>f(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[t.value,s.value]},{default:()=>{var r,l;return[e.scrollable?f("div",{class:"v-main__scroller"},[(r=n.default)==null?void 0:r.call(n)]):(l=n.default)==null?void 0:l.call(n)]}})),{}}});const pt=N()({name:"VApp",props:{...Ee({fullHeight:!0}),...ce()},setup(e,a){let{slots:n}=a;const t=de(e),{layoutClasses:s,layoutStyles:r,getLayoutItem:l,items:u,layoutRef:y}=Fe(e),{rtlClasses:c}=We();return H(()=>{var m;return f("div",{ref:y,class:["v-application",t.themeClasses.value,s.value,c.value],style:r.value},[f("div",{class:"v-application__wrap"},[(m=n.default)==null?void 0:m.call(n)])])}),{getLayoutItem:l,items:u,theme:t}}});export{ut as V,dt as a,ft as b,gt as c,ht as d,vt as e,mt as f,yt as g,ct as h,lt as i,et as j,it as k,St as l,me as m,bt as n,pt as o,ge as p,Qe as q,nt as r,at as s,qe as t,H as u,Ue as v};