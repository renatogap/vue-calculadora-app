import{_ as b,V as m,a as f,b as s,c as u,f as d}from"./VRow.c07f5444.js";import{n as g,o as x}from"./VApp.70209c13.js";import{o as _,l as C,w as e,b as t,n,a7 as k,_ as v,N}from"./index.c1f2b624.js";const V={data(){return{tela:"0",timeout:0}},methods:{setNumber(r){this.tela=="0"?this.tela=`${r}`:this.tela=`${this.tela}${r}`},calcularResultado(){},apagar(){this.tela=this.tela.substring(0,this.tela.length-1)},onMouseDown(){this.timeout=setTimeout(()=>{this.tela="0"},1e3)},onMouseUp(){console.log("mouseUp...",this.timeout),clearTimeout(this.timeout)}},watch:{tela(r){r||(this.tela="0")}}};function M(r,l,c,w,i,a){return _(),C(x,{id:"inspire"},{default:e(()=>[t(g,null,{default:e(()=>[t(m,null,{default:e(()=>[t(f,{class:"d-flex align-center justify-center"},{default:e(()=>[t(s,{md:"4",col:"5",class:"calculadora-body rounded-lg"},{default:e(()=>[t(f,{class:"mt-10"},{default:e(()=>[t(s,null,{default:e(()=>[t(u,{class:"tela"},{default:e(()=>[t(d,{class:"resultado-tela"},{default:e(()=>[n(k(i.tela),1)]),_:1})]),_:1})]),_:1})]),_:1}),t(f,null,{default:e(()=>[t(s,{md:"3",lg:"3"},{default:e(()=>[t(u,{class:"text-center"},{default:e(()=>[t(d,{class:"botao",onClick:l[0]||(l[0]=o=>a.setNumber(1))},{default:e(()=>[n("1")]),_:1})]),_:1})]),_:1}),t(s,{md:"3",lg:"3"},{default:e(()=>[t(u,{class:"text-center"},{default:e(()=>[t(d,{class:"botao",onClick:l[1]||(l[1]=o=>a.setNumber(2))},{default:e(()=>[n("2")]),_:1})]),_:1})]),_:1}),t(s,{md:"3",lg:"3"},{default:e(()=>[t(u,{class:"text-center"},{default:e(()=>[t(d,{class:"botao",onClick:l[2]||(l[2]=o=>a.setNumber(3))},{default:e(()=>[n("3")]),_:1})]),_:1})]),_:1}),t(s,{md:"3",lg:"3"},{default:e(()=>[t(u,{class:"text-center"},{default:e(()=>[t(d,{class:"botao",onClick:l[3]||(l[3]=o=>a.setNumber("+"))},{default:e(()=>[n("+")]),_:1})]),_:1})]),_:1})]),_:1}),t(f,null,{default:e(()=>[t(s,{md:"3",lg:"3"},{default:e(()=>[t(u,{class:"text-center"},{default:e(()=>[t(d,{class:"botao",onClick:l[4]||(l[4]=o=>a.setNumber(4))},{default:e(()=>[n("4")]),_:1})]),_:1})]),_:1}),t(s,{md:"3",lg:"3"},{default:e(()=>[t(u,{class:"text-center"},{default:e(()=>[t(d,{class:"botao",onClick:l[5]||(l[5]=o=>a.setNumber(5))},{default:e(()=>[n("5")]),_:1})]),_:1})]),_:1}),t(s,{md:"3",lg:"3"},{default:e(()=>[t(u,{class:"text-center"},{default:e(()=>[t(d,{class:"botao",onClick:l[6]||(l[6]=o=>a.setNumber(6))},{default:e(()=>[n("6")]),_:1})]),_:1})]),_:1}),t(s,{md:"3",lg:"3"},{default:e(()=>[t(u,{class:"text-center"},{default:e(()=>[t(d,{class:"botao",onClick:l[7]||(l[7]=o=>a.setNumber("-"))},{default:e(()=>[n("-")]),_:1})]),_:1})]),_:1})]),_:1}),t(f,null,{default:e(()=>[t(s,{md:"3",lg:"3"},{default:e(()=>[t(u,{class:"text-center"},{default:e(()=>[t(d,{class:"botao",onClick:l[8]||(l[8]=o=>a.setNumber(7))},{default:e(()=>[n("7")]),_:1})]),_:1})]),_:1}),t(s,{md:"3",lg:"3"},{default:e(()=>[t(u,{class:"text-center"},{default:e(()=>[t(d,{class:"botao",onClick:l[9]||(l[9]=o=>a.setNumber(8))},{default:e(()=>[n("8")]),_:1})]),_:1})]),_:1}),t(s,{md:"3",lg:"3"},{default:e(()=>[t(u,{class:"text-center"},{default:e(()=>[t(d,{class:"botao",onClick:l[10]||(l[10]=o=>a.setNumber(9))},{default:e(()=>[n("9")]),_:1})]),_:1})]),_:1}),t(s,{md:"3",lg:"3"},{default:e(()=>[t(u,{class:"text-center"},{default:e(()=>[t(d,{class:"botao",onClick:l[11]||(l[11]=o=>a.setNumber("*"))},{default:e(()=>[n("*")]),_:1})]),_:1})]),_:1})]),_:1}),t(f,{class:"mb-5"},{default:e(()=>[t(s,{md:"3",lg:"3"},{default:e(()=>[t(u,{class:"text-center"},{default:e(()=>[t(d,{class:"botao",onClick:l[12]||(l[12]=o=>a.apagar()),onMousedown:l[13]||(l[13]=o=>a.onMouseDown()),onMouseup:a.onMouseUp},{default:e(()=>[n("C ")]),_:1},8,["onMouseup"])]),_:1})]),_:1}),t(s,{md:"3",lg:"3"},{default:e(()=>[t(u,{class:"text-center"},{default:e(()=>[t(d,{class:"botao",onClick:l[14]||(l[14]=o=>a.setNumber(0))},{default:e(()=>[n("0")]),_:1})]),_:1})]),_:1}),t(s,{md:"3",lg:"3"},{default:e(()=>[t(u,{class:"text-center"},{default:e(()=>[t(d,{class:"botao",onClick:l[15]||(l[15]=o=>a.calcularResultado())},{default:e(()=>[n("=")]),_:1})]),_:1})]),_:1}),t(s,{md:"3",lg:"3"},{default:e(()=>[t(u,{class:"text-center"},{default:e(()=>[t(d,{class:"botao",onClick:l[16]||(l[16]=o=>a.setNumber("/"))},{default:e(()=>[n("/")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const p=b(V,[["render",M]]),B={__name:"Calculadora",setup(r){return(l,c)=>(_(),v(N,null,[t(m),t(p)],64))}};export{B as default};
