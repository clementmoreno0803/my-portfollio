(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Work"],{"5cb7":function(t,e,c){"use strict";c("8d4c")},"8d4c":function(t,e,c){},f126:function(t,e,c){"use strict";c.r(e);var o=c("7a23");const r=t=>(Object(o["D"])("data-v-f1e90882"),t=t(),Object(o["B"])(),t),n={class:"container"},s=r(()=>Object(o["f"])("span",{class:"project-union"},null,-1)),a=r(()=>Object(o["f"])("span",{class:"selected"}," Selectionnés",-1)),i={class:"projects"},j={class:"project-container"};function b(t,e,c,r,b,l){const u=Object(o["H"])("Cursor"),O=Object(o["H"])("AllProject");return Object(o["A"])(),Object(o["e"])("main",n,[Object(o["i"])(u),Object(o["f"])("h2",{onMouseover:e[0]||(e[0]=e=>t.store.isHoveringContent=!0),onMouseout:e[1]||(e[1]=e=>t.store.isHoveringContent=!1),class:"project-title"},[Object(o["h"])(" Projets "),s,a],32),Object(o["f"])("section",i,[Object(o["f"])("div",j,[(Object(o["A"])(!0),Object(o["e"])(o["a"],null,Object(o["G"])(t.store.projects,(t,e)=>(Object(o["A"])(),Object(o["e"])("div",{key:e,class:"project-container-card"},[Object(o["i"])(O,{project:t,index:e,class:"cards"},null,8,["project","index"])]))),128))])])])}var l=c("f314"),u=c("a4f5"),O=c("7c05"),p=c("cffa"),d=c("1dac"),f=Object(o["j"])({components:{AllProject:l["a"],Cursor:O["a"]},setup(){const t=Object(u["a"])(),e=Object(o["F"])([]),c=p["a"].timeline();return Object(o["y"])(async()=>{await t.getDataFromFirebase(),p["a"].registerPlugin(d["a"]),e.value=p["a"].utils.toArray(".project-container-card"),e.value.forEach(t=>{c.to(t,{opacity:1,duration:2,transform:"translateX(0)",scrollTrigger:{trigger:t,start:"bottom bottom",end:"top top",scrub:!0}})})}),{store:t}}}),v=(c("5cb7"),c("6b0d")),g=c.n(v);const m=g()(f,[["render",b],["__scopeId","data-v-f1e90882"]]);e["default"]=m}}]);
//# sourceMappingURL=Work.39173d07.js.map