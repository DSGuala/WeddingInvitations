"use strict";(self.webpackChunkwedding_invite=self.webpackChunkwedding_invite||[]).push([[822],{1004:function(e,t,a){a.r(t),a.d(t,{Head:function(){return A}});var n,i,o,r,c=a(4506),l=a(5276),s=a(6540),d=a(7581),g=a(2532),b=a(813);a(961),a(1788),a(9211),a(4810);const m={blue:{default:"#3f51b5",hover:"#283593"},pink:{default:"#e91e63",hover:"#ad1457"},teagreen:{default:"#964742",hover:"#53221e"},beige:{default:"#e9edc9ff",hover:"#c2c2c2"},cornsilk:{default:"#fefae0ff",hover:"#bfbcaa"},papayawhip:{default:"#faedcdff",hover:"#aea58f"},buff:{default:"#d4a373ff",hover:"#8c6c4c"},chorated:{default:"#F1F1F1"},darkchorated:{default:"#535353"}},v=d.Ay.button(n||(n=(0,l.A)(["\n  background-color: ",";\n  color: white;\n  padding: 0.5vw 1.5vw;\n  border-radius: 0.5vw;\n  font-size: 3vw;\n  outline: 0;\n  border: 0; \n  text-transform: uppercase;\n  display: block;\n  margin: auto;\n  cursor: pointer;\n  box-shadow: 0vw 2vw 2vw lightgray;\n  transition: ease background-color 250ms;\n  margin-bottom: 3vw;\n  margin-top: 4vw;\n\n  &:hover {\n    background-color: ",";\n  }\n  &:disabled {\n    cursor: default;\n    opacity: 0.7;\n  }\n"])),(e=>m[e.theme].default),(e=>m[e.theme].hover));v.defaultProps={theme:"teagreen"};const f=d.Ay.button(i||(i=(0,l.A)(["\n  background-color: white;\n  color: ",';\n  padding: 0.5vw 1.5vw;\n  border-radius: 0.5vw;\n  font-size: 2.5vw;\n  outline: 0;\n  border: 0; \n  text-transform: uppercase;\n  display: block;\n  margin: auto;\n  fontWeight: "bold",\n  cursor: pointer;\n  transition: ease background-color 250ms;\n  margin-bottom: 3vw;\n  margin-top: 4vw;\n\n  &:hover {\n    background-color: ',";\n  }\n  &:disabled {\n    cursor: default;\n    opacity: 0.7;\n  }\n"])),(e=>m.teagreen.default),(e=>m[e.theme].hover));f.defaultProps={theme:"beige"};const w=d.Ay.button(o||(o=(0,l.A)(["\n  background-color: lightgrey;\n  color: ",';\n  padding: 0vw 1.3vw;\n  border-radius: 3vw;\n  font-size: 2.5vw;\n  outline: 0;\n  border: 0 ; \n  text-transform: uppercase;\n  // display: block;\n  //margin: auto;\n  fontWeight: "bold",\n  cursor: pointer;\n  transition: ease background-color 250ms;\n  //margin-bottom: 0vw;\n  margin-top: -20vw;\n  margin-left: 2vw;\n\n \n\n  &:hover {\n    background-color: ',";\n  }\n  &:disabled {\n    cursor: default;\n    opacity: 0.7;\n  }\n"])),(e=>m.darkchorated.default),(e=>m[e.theme].hover));w.defaultProps={theme:"beige"};const p=d.Ay.button(r||(r=(0,l.A)(["\n  align-items: center;\n  justify-content: center;\n  padding: 3vw 3vw; //de la pagina\n  background-color: ",";\n  color: white;\n  border: none;\n  border-radius: 50%;\n  box-shadow: 0vw 1vw 1vw lightgray;\n  cursor: pointer;\n  font-size: 16px;\n  margin-left: 2.5vw;\n  margin-right: 2.5vw;\n\n  img {\n    width: 7vw;\n    height: auto;\n  }\n\n  &:hover {\n    background-color:",";\n  }\n"])),(e=>m[e.theme].default),(e=>m[e.theme].hover));p.defaultProps={theme:"teagreen"};const u={fontFamily:"-apple-system, Roboto, sans-serif, serif",backgroundColor:"var(--chorated)"},h={textAlign:"center",color:m.darkchorated.default,marginBottom:"10vw",marginTop:"10vw",fontFamily:"Mulish",fontSize:"4vw",fontWeight:"3vw"},y={fontFamily:"Mulish",marginTop:"10vw",marginBottom:"10vw",fontStyle:"normal",textAlign:"center",textShadow:"0vw 1vw 1vw lightgray",color:m.darkchorated.default,fontWeight:"bold",fontSize:"6vw"},E={fontFamily:"Rouge Script, serif",fontWeight:400,fontStyle:"normal",fontSize:100,textAlign:"center",color:m.darkchorated.default},k={padding:"2vw",backgroundColor:"#f9f9f9",borderRadius:"0.8vw",width:"70vw",margin:"0 auto",fontFamily:"Mulish",fontSize:"3vw",textAlign:"justify",color:m.darkchorated.default},S={padding:"0 w",marginBottom:"2vw",marginLeft:"1vw",margin:"0 0",border:"1px solid #ccc",borderRadius:"0.3vw",width:"50vw",fontWeight:"normal"},x={marginLeft:"8vw",fontWeight:"bold",marginTop:"3vw",textAlign:"left"},W=(m.darkchorated.default,{marginTop:"3vw",marginBottom:"4vw",marginLeft:"auto",marginRight:"auto",color:m.darkchorated.default}),I={position:"relative",margin:"auto",display:"block",justifyContent:"center",alignItems:"center"},_={display:"flex",gap:"10vw",marginTop:"2vw"};t.default=()=>{const[e,t]=s.useState([{name:"",email:"",confirmacion:"Si",message:"",transporte:"No",restrictions:""}]),[n,i]=s.useState(!1),[o,r]=s.useState(!1),[l,d]=s.useState(!0);function A(e){let{onClose:t}=e;return s.createElement("div",{style:H},s.createElement("div",{style:L},s.createElement("h2",{style:h},"Gracias!"),s.createElement("p",{style:h},"Tu información ha sido enviada"),s.createElement(v,{onClick:t},"Volver")))}const C=async t=>{t.preventDefault(),e.forEach((e=>{console.log(e)})),console.log("Form submitted:",e)},z=e=>{var t;null===(t=document.getElementById(e))||void 0===t||t.scrollIntoView({behavior:"smooth"})},O=(a,n,i)=>{const o=(0,c.A)(e);o[a]=Object.assign({},o[a],{[n]:i}),t(o)},F=a=>{t([].concat((0,c.A)(e),[{name:"",email:"",confirmacion:"Si",message:"",transporte:"No",restrictions:""}]))},j=()=>{e.length>1&&t((e=>e.slice(0,e.length-1)))},[N,D]=s.useState(!1);function B(e){let{onClose:t}=e;return s.createElement("div",{style:H},s.createElement("div",{style:L},s.createElement("h2",{style:h},"Mercado pago"),s.createElement("p",{style:h},"Alias: casamiento.sofidiego"),s.createElement(v,{onClick:t},"Volver")))}const[T,R]=s.useState(!1);function M(e){let{onClose:t}=e;return s.createElement("div",{style:H},s.createElement("div",{style:L},s.createElement("h2",{style:h},"PayPal"),s.createElement("a",{href:"https://www.paypal.com/donate/?business=SUTKXAB3SJCQN&no_recurring=1&item_name=Your+presence+at+our+wedding+is+the+best+gift%21+Any+contributions+will+go+towards+the+celebrations+and+honeymoon%2C+thank+you%21&currency_code=CAD"}," ",s.createElement(v,null,"Donar"),"  "),s.createElement(v,{onClick:t},"Volver")))}const[P,V]=s.useState(!1);function J(e){let{onClose:t}=e;return s.createElement("div",{style:H},s.createElement("div",{style:L},s.createElement("h1",{style:Object.assign({},h,{fontSize:"5vw"})},"EVITAR:"),s.createElement("p",{style:Object.assign({},h,{textAlign:"left",marginTop:"-5vw"})}," - Ojotas/crocs  ",s.createElement("br",null),"  - Bermudas/shorts  ",s.createElement("br",null),"  - Remeras con gráficos",s.createElement("br",null),"  - Jean roto o muy gastado ",s.createElement("br",null),"  -Buzo con capucha ",s.createElement("br",null),"  - Ropa deportiva"),s.createElement(v,{onClick:t},"Volver")))}const H={position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3},L={backgroundColor:"white",padding:"20px",borderRadius:"5px",width:"300px",textAlign:"center"};return s.createElement("main",{style:Object.assign({},u,{margin:"auto"})},s.createElement(g.S,{src:"../images/HeroImage.png",alt:"Collage inicial",style:{width:"100vw",margin:"auto"},__imageData:a(1119)}),s.createElement("div",{style:Object.assign({},E,{fontSize:"18vw",margin:"auto",marginBottom:"10vw",marginTop:"10vw"})},"Diego y Sofi"),s.createElement("div",{style:{width:"100vw",height:"25vw",position:"relative",margin:"auto"}},s.createElement("div",{style:{width:"30vw",left:"10vw",top:"10vw",position:"absolute",textAlign:"center",color:"#535353",fontSize:"5vw",fontFamily:"Mulish",fontWeight:"400",wordWrap:"break-word"}},"JUEVES"),s.createElement("div",{style:{width:"100vw",top:"1vw",position:"absolute",textAlign:"center",color:"#535353",fontSize:"5vw",fontFamily:"Mulish",fontWeight:"400",wordWrap:"break-word"}},"MAYO"),s.createElement("div",{style:{width:"100vw",top:"20vw",position:"absolute",textAlign:"center",color:"#535353",fontSize:"5vw",fontFamily:"Mulish",fontWeight:"400",wordWrap:"break-word"}},"2025"),s.createElement("div",{style:{width:"30vw",left:"10vw",top:"9vw",position:"absolute",background:"#535353",border:"0.1vw #535353 solid"}}),s.createElement("div",{style:{width:"30vw",left:"10vw",top:"18vw",position:"absolute",background:"#535353",border:"0.1vw #535353 solid"}}),s.createElement("div",{style:{width:"30vw",left:"60vw",top:"10vw",position:"absolute",textAlign:"center",color:"#535353",fontSize:"5vw",fontFamily:"Mulish",fontWeight:"400",wordWrap:"break-word"}},"12 PM"),s.createElement("div",{style:{width:"30vw",left:"60vw",top:"9vw",position:"absolute",background:"#535353",border:"0.1vw #535353 solid"}}),s.createElement("div",{style:{width:"30vw",left:"60vw",top:"18vw",position:"absolute",background:"#535353",border:"0.1vw #535353 solid"}}),s.createElement("div",{style:{width:"100vw",top:"6vw",position:"absolute",textAlign:"center",color:"#535353",fontSize:"10vw",fontFamily:"Mulish",fontWeight:"400",wordWrap:"break-word"}},"1")),s.createElement("p",{style:h},"Queremos que seas parte de",s.createElement("br",null)," este momento tan especial."),s.createElement("div",{style:{position:"relative",margin:"auto",textAlign:"center",width:"100%"}},s.createElement(p,{onClick:()=>z("DondeSection")},s.createElement(g.S,{src:"../images/location_chorated.svg",alt:"boton_lugar",__imageData:a(7779)})),s.createElement(p,{onClick:()=>z("VestimentaSection")},s.createElement(g.S,{src:"../images/tshirt_chorated.svg",alt:"boton_codigo_vestimenta",__imageData:a(3691)})),s.createElement(p,{onClick:()=>z("RegalosSection")},s.createElement(g.S,{src:"../images/box-heart_chorated.svg",alt:"boton_regalos",__imageData:a(6216)})),s.createElement(p,{onClick:()=>z("RSVPSection")},s.createElement(g.S,{src:"../images/envelope_chorated.svg",alt:"boton_rsvp",__imageData:a(1728)}))),s.createElement("p",{style:y,id:"DondeSection"},"DÓNDE"),s.createElement("p",{style:h}," Quinta P.L. B. Verazzi 1668,",s.createElement("br",null),"Pilar, Buenos Aires, Argentina"),s.createElement("a",{href:"https://maps.app.goo.gl/mG4yY1bEy1bJa1be6"}," ",s.createElement(v,null,"Ver Ubicación")),s.createElement("p",{style:y,id:"VestimentaSection"}," CÓDIGO DE VESTIMENTA"),s.createElement("p",{style:h},"ELEGANTE SPORT",s.createElement(w,{style:{fontWeight:"bold",position:"relative",top:"-0.5vw"},onClick:()=>V(!0)},"?"),P&&s.createElement(J,{onClose:()=>V(!1)}),s.createElement("br",null),s.createElement("br",null),"Venite lindo/a y elegante",s.createElement("br",null),"pero sobretodo cómodo/a."),s.createElement("div",{style:{width:"100vw",height:"88vw",position:"relative",background:"#964742"}},s.createElement("p",{style:Object.assign({},y,{color:m.chorated.default,textShadow:"0vw 0.5vw 0.5vw #4c4545"}),id:"RegalosSection"}," ",s.createElement("br",null)," REGALOS"),s.createElement("div",{style:Object.assign({},h,{color:m.chorated.default,textAlign:"center"})},"Tu presencia es nuestro regalo.",s.createElement("br",null),s.createElement("br",null),"Pero si querés contribuir con los ",s.createElement("br",null)," costos del festejo o luna de miel:  "),s.createElement("div",{style:{width:"50vw",top:"54vw",textAlign:"center",position:"absolute",color:"#F1F1F1",fontSize:"2.4vw",fontFamily:"Mulish",fontWeight:"3vw"}},s.createElement(g.S,{style:Object.assign({},W,{display:"block",width:"7vw"}),src:"../images/ArgentinaBandera.svg",alt:"icono argentina",__imageData:a(5205)}),"Desde Argentina por Mercado Pago",s.createElement("div",null,s.createElement(f,{onClick:()=>D(!0)},"Detalles"),N&&s.createElement(B,{onClose:()=>D(!1)}))),s.createElement("div",{style:{width:"50vw",left:"50vw",textAlign:"center",top:"54vw",position:"absolute",color:"#F1F1F1",fontSize:"2.4vw",fontFamily:"Mulish",fontWeight:"3vw",wordWrap:"break-word"}},s.createElement(g.S,{style:Object.assign({},W,{display:"block",width:"7vw"}),src:"../images/earth-africa1.svg",alt:"icono mundo",__imageData:a(5305)}),"Desde el exterior usando PayPal",s.createElement("div",null,s.createElement(f,{onClick:()=>R(!0)},"Detalles"),T&&s.createElement(M,{onClose:()=>R(!1)}))),s.createElement("div",{style:{width:"18vw",height:0,left:"50vw",top:"77vw",position:"absolute",transform:"rotate(-90deg)",transformOrigin:"0 0",border:"0.02vw #F1F1F1 solid"}})),s.createElement("p",{style:y,id:"RSVPSection"}," CONFIRMAR ASISTENCIA "),s.createElement("p",{style:{fontSize:"3vw",color:m.darkchorated.default,fontWeight:"3vw",textAlign:"center",fontFamily:"Mulish",marginBottom:"10vw"}},"Asegurate de completar una casilla por ",s.createElement("br",null),"invitado/a. Podés agregar invitados con el ",s.createElement("br",null),'botón "+ invitado/a"  '),s.createElement("div",{style:I},e.map(((t,a)=>s.createElement("form",{style:Object.assign({},k,{clear:"both"}),onSubmit:C,key:a},s.createElement("label",{style:Object.assign({},x,{display:"block"})}," Nombre y Apellido",s.createElement("input",{type:"text",name:"name",value:t.name,display:"block",onChange:e=>O(a,"name",e.target.value),style:S})),s.createElement("label",{style:Object.assign({},x,{display:"block"})}," Email",s.createElement("br",null),s.createElement("input",{type:"email",name:"email",value:t.email,onChange:e=>O(a,"email",e.target.value),style:S,display:"block"})),s.createElement("label",{style:Object.assign({},x,{display:"block"})},"Confimación",s.createElement("select",{name:"confirmacion",value:t.confirmacion,onChange:e=>O(a,"confirmacion",e.target.value),style:S,display:"block"},s.createElement("option",{value:"Si "},"Si"),s.createElement("option",{value:"No voy a poder"}," No voy a poder"))),s.createElement("label",{style:Object.assign({},x,{display:"block",marginLeft:"8vw"})},"¿Vas a necesitar transporte",s.createElement("br",null)," desde CABA?",s.createElement("select",{name:"transporte",value:t.transporte,onChange:e=>O(a,"transporte",e.target.value),style:S,display:"block"},s.createElement("option",{value:"No"},"No"),s.createElement("option",{value:"Si"},"Si"),s.createElement("option",{value:"No sé"},"No sé"))),s.createElement("label",{style:Object.assign({},x,{display:"block"})}," Restricciones Alimentarias",s.createElement("textarea",{name:"restrictions",value:t.restrictions,onChange:e=>O(a,"restrictions",e.target.value),style:S,display:"block"}),s.createElement("br",null)),s.createElement("label",{style:Object.assign({},x,{display:"block"})}," Mensaje",s.createElement("textarea",{name:"message",value:t.message,onChange:e=>O(a,"message",e.target.value),style:S,display:"block"}),s.createElement("br",null)),s.createElement("div",{style:_},a===e.length-1&&e.length>1&&s.createElement(v,{onClick:j,style:{marginLeft:"5vw"}},"- Invitado/a"),a===e.length-1&&s.createElement(v,{onClick:F,style:{marginRight:"5vw"}},"+ Invitado/a"))))),s.createElement("div",null,l&&s.createElement(v,{type:"submit",onClick:async t=>{t.preventDefault(),r(!0),d(!1),e.forEach((async e=>{console.log("Submited:",e.name,"awaiting reply");await fetch("https://sunny-emissary-445202-m6.ue.r.appspot.com/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});console.log("Server replied"),r(!1),i(!0)}))}},"Enviar"),n&&s.createElement(A,{onClose:()=>{i(!1),d(!0)}}),o&&s.createElement(b.iK,{height:"10vw",width:"10vw",color:m.teagreen.default,secondaryColor:m.teagreen.hover,ariaLabel:"loading",wrapperStyle:{position:"relative",justifyContent:"center"}})),s.createElement("br",null)))};const A=()=>s.createElement(s.Fragment,null,s.createElement("title",null,"Te invitamos!"),s.createElement("meta",{property:"og:title",content:"Te invitamos!"}),s.createElement("meta",{property:"og:description",content:"Nos encantaría  que nos acompañes en nuestro casamiento."}),s.createElement("meta",{property:"og:type",content:"website"}),s.createElement("meta",{property:"og:url",content:"https://dsguala.github.io/WeddingInvitations/"}))},5305:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/WeddingInvitations/static/7b65c732884b59407ce63360b402bbb3/3222a/earth-africa1.svg","srcSet":"/WeddingInvitations/static/7b65c732884b59407ce63360b402bbb3/56398/earth-africa1.svg 25w,\\n/WeddingInvitations/static/7b65c732884b59407ce63360b402bbb3/7195e/earth-africa1.svg 50w,\\n/WeddingInvitations/static/7b65c732884b59407ce63360b402bbb3/3222a/earth-africa1.svg 100w","sizes":"(min-width: 100px) 100px, 100vw"},"sources":[{"srcSet":"/WeddingInvitations/static/7b65c732884b59407ce63360b402bbb3/2fa99/earth-africa1.webp 25w,\\n/WeddingInvitations/static/7b65c732884b59407ce63360b402bbb3/dbc4a/earth-africa1.webp 50w,\\n/WeddingInvitations/static/7b65c732884b59407ce63360b402bbb3/d8057/earth-africa1.webp 100w","type":"image/webp","sizes":"(min-width: 100px) 100px, 100vw"}]},"width":100,"height":100}')},1119:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/WeddingInvitations/static/ae1c45d9a93f26898483000ca4f2fdea/3c839/HeroImage.png","srcSet":"/WeddingInvitations/static/ae1c45d9a93f26898483000ca4f2fdea/05f43/HeroImage.png 350w,\\n/WeddingInvitations/static/ae1c45d9a93f26898483000ca4f2fdea/fa138/HeroImage.png 701w,\\n/WeddingInvitations/static/ae1c45d9a93f26898483000ca4f2fdea/3c839/HeroImage.png 1401w","sizes":"(min-width: 1401px) 1401px, 100vw"},"sources":[{"srcSet":"/WeddingInvitations/static/ae1c45d9a93f26898483000ca4f2fdea/41205/HeroImage.webp 350w,\\n/WeddingInvitations/static/ae1c45d9a93f26898483000ca4f2fdea/b8505/HeroImage.webp 701w,\\n/WeddingInvitations/static/ae1c45d9a93f26898483000ca4f2fdea/2cfe1/HeroImage.webp 1401w","type":"image/webp","sizes":"(min-width: 1401px) 1401px, 100vw"}]},"width":1401,"height":2285}')},5205:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/WeddingInvitations/static/85f0bf9ae7e8209f4f2cc269d8d48365/24eb4/ArgentinaBandera.svg","srcSet":"/WeddingInvitations/static/85f0bf9ae7e8209f4f2cc269d8d48365/f2ccf/ArgentinaBandera.svg 26w,\\n/WeddingInvitations/static/85f0bf9ae7e8209f4f2cc269d8d48365/cf754/ArgentinaBandera.svg 53w,\\n/WeddingInvitations/static/85f0bf9ae7e8209f4f2cc269d8d48365/24eb4/ArgentinaBandera.svg 105w","sizes":"(min-width: 105px) 105px, 100vw"},"sources":[{"srcSet":"/WeddingInvitations/static/85f0bf9ae7e8209f4f2cc269d8d48365/1f89c/ArgentinaBandera.webp 26w,\\n/WeddingInvitations/static/85f0bf9ae7e8209f4f2cc269d8d48365/1e98c/ArgentinaBandera.webp 53w,\\n/WeddingInvitations/static/85f0bf9ae7e8209f4f2cc269d8d48365/b2f6d/ArgentinaBandera.webp 105w","type":"image/webp","sizes":"(min-width: 105px) 105px, 100vw"}]},"width":105,"height":106}')},6216:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/WeddingInvitations/static/2d77582c02b86a0c61f06c86a9f3ced6/7a509/box-heart_chorated.svg","srcSet":"/WeddingInvitations/static/2d77582c02b86a0c61f06c86a9f3ced6/00485/box-heart_chorated.svg 23w,\\n/WeddingInvitations/static/2d77582c02b86a0c61f06c86a9f3ced6/de99a/box-heart_chorated.svg 46w,\\n/WeddingInvitations/static/2d77582c02b86a0c61f06c86a9f3ced6/7a509/box-heart_chorated.svg 91w","sizes":"(min-width: 91px) 91px, 100vw"},"sources":[{"srcSet":"/WeddingInvitations/static/2d77582c02b86a0c61f06c86a9f3ced6/65086/box-heart_chorated.webp 23w,\\n/WeddingInvitations/static/2d77582c02b86a0c61f06c86a9f3ced6/1a9ee/box-heart_chorated.webp 46w,\\n/WeddingInvitations/static/2d77582c02b86a0c61f06c86a9f3ced6/b4b35/box-heart_chorated.webp 91w","type":"image/webp","sizes":"(min-width: 91px) 91px, 100vw"}]},"width":91,"height":91}')},1728:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/WeddingInvitations/static/8f26ad67261fc9675660bc371def0808/7a509/envelope_chorated.svg","srcSet":"/WeddingInvitations/static/8f26ad67261fc9675660bc371def0808/00485/envelope_chorated.svg 23w,\\n/WeddingInvitations/static/8f26ad67261fc9675660bc371def0808/de99a/envelope_chorated.svg 46w,\\n/WeddingInvitations/static/8f26ad67261fc9675660bc371def0808/7a509/envelope_chorated.svg 91w","sizes":"(min-width: 91px) 91px, 100vw"},"sources":[{"srcSet":"/WeddingInvitations/static/8f26ad67261fc9675660bc371def0808/65086/envelope_chorated.webp 23w,\\n/WeddingInvitations/static/8f26ad67261fc9675660bc371def0808/1a9ee/envelope_chorated.webp 46w,\\n/WeddingInvitations/static/8f26ad67261fc9675660bc371def0808/b4b35/envelope_chorated.webp 91w","type":"image/webp","sizes":"(min-width: 91px) 91px, 100vw"}]},"width":91,"height":91}')},3691:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/WeddingInvitations/static/fac6b5de3f59ff849ae38f635c337932/7a509/tshirt_chorated.svg","srcSet":"/WeddingInvitations/static/fac6b5de3f59ff849ae38f635c337932/00485/tshirt_chorated.svg 23w,\\n/WeddingInvitations/static/fac6b5de3f59ff849ae38f635c337932/de99a/tshirt_chorated.svg 46w,\\n/WeddingInvitations/static/fac6b5de3f59ff849ae38f635c337932/7a509/tshirt_chorated.svg 91w","sizes":"(min-width: 91px) 91px, 100vw"},"sources":[{"srcSet":"/WeddingInvitations/static/fac6b5de3f59ff849ae38f635c337932/65086/tshirt_chorated.webp 23w,\\n/WeddingInvitations/static/fac6b5de3f59ff849ae38f635c337932/1a9ee/tshirt_chorated.webp 46w,\\n/WeddingInvitations/static/fac6b5de3f59ff849ae38f635c337932/b4b35/tshirt_chorated.webp 91w","type":"image/webp","sizes":"(min-width: 91px) 91px, 100vw"}]},"width":91,"height":91}')},7779:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/WeddingInvitations/static/c1b075f45859bbd8b0092a5a1a6b2ac1/7a509/location_chorated.svg","srcSet":"/WeddingInvitations/static/c1b075f45859bbd8b0092a5a1a6b2ac1/00485/location_chorated.svg 23w,\\n/WeddingInvitations/static/c1b075f45859bbd8b0092a5a1a6b2ac1/de99a/location_chorated.svg 46w,\\n/WeddingInvitations/static/c1b075f45859bbd8b0092a5a1a6b2ac1/7a509/location_chorated.svg 91w","sizes":"(min-width: 91px) 91px, 100vw"},"sources":[{"srcSet":"/WeddingInvitations/static/c1b075f45859bbd8b0092a5a1a6b2ac1/65086/location_chorated.webp 23w,\\n/WeddingInvitations/static/c1b075f45859bbd8b0092a5a1a6b2ac1/1a9ee/location_chorated.webp 46w,\\n/WeddingInvitations/static/c1b075f45859bbd8b0092a5a1a6b2ac1/b4b35/location_chorated.webp 91w","type":"image/webp","sizes":"(min-width: 91px) 91px, 100vw"}]},"width":91,"height":91}')}}]);
//# sourceMappingURL=component---src-pages-1-js-76b7794b50ef999cf220.js.map