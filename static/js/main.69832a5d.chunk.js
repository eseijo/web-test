(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,a,t){},105:function(e,a,t){},106:function(e,a,t){},108:function(e,a,t){},109:function(e,a,t){},110:function(e,a,t){},111:function(e,a,t){},112:function(e,a,t){},113:function(e,a,t){},114:function(e,a,t){},115:function(e,a,t){},116:function(e,a,t){},117:function(e,a,t){},120:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(14),r=t.n(o),s=(t(92),t(6)),l=t(7),c=t(9),u=t(8),d=t(10),m=t(79),p=t(158),b=(t(93),t(160)),f=t(161),v=(t(94),function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props.t;return i.a.createElement("div",{className:"Main"},i.a.createElement("p",{className:"main-label label-big"},e("main.label")),i.a.createElement(b.a,{size:"large",variant:"contained",color:"secondary"},e("main.ask-appointment")))}}]),a}(n.Component)),y=Object(f.a)()(v),g=t(62),h=t.n(g),E=(t(104),function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props.t;return i.a.createElement("div",{className:"About"},i.a.createElement("img",{className:"profile",src:h.a}),i.a.createElement("div",{className:"frame"},i.a.createElement("h3",{className:"primary"},e("bio.title.part1")),i.a.createElement("h3",{className:"primary"},e("bio.title.part2")),i.a.createElement("h4",{className:"primary"},e("bio.title.part3")),i.a.createElement("br",null),i.a.createElement("p",null,e("bio.body.part1")),i.a.createElement("p",null,e("bio.body.part2")),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("u",null,e("bio.body.part3.key")),e("bio.body.part3.value")),i.a.createElement("li",null,i.a.createElement("u",null,e("bio.body.part4.key")),e("bio.body.part4.value")),i.a.createElement("li",null,i.a.createElement("u",null,e("bio.body.part5.key")),e("bio.body.part5.value"))),i.a.createElement("p",null,e("bio.body.part6")),i.a.createElement("blockquote",null,e("bio.quote"))))}}]),a}(n.Component)),j=Object(f.a)()(E),O=t(63),N=t.n(O),k=t(159),C=t(162),w=(t(105),function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"form-container"},i.a.createElement("div",{className:"form-title label primary"},this.props.title),i.a.createElement("div",{className:"service-form"},i.a.createElement(C.a,{fullWidth:!0},i.a.createElement(k.a,{required:!0,label:"Nombre"})),i.a.createElement(C.a,{fullWidth:!0},i.a.createElement(k.a,{required:!0,label:"Correo electr\xf3nico"})),i.a.createElement(C.a,{fullWidth:!0},i.a.createElement(k.a,{required:!0,multiline:!0,rows:10,label:"\xbfEn qu\xe9 te puedo ayudar?"})),i.a.createElement("div",{className:"form-actions"},i.a.createElement(b.a,{size:"large",variant:"contained",color:"secondary"},"Enviar"))))}}]),a}(n.Component)),S=t(65),z=t.n(S),q=t(64),A=t.n(q),D=(t(106),function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props.t;return i.a.createElement("div",{className:"Contact"},i.a.createElement(w,{title:e("contact.form-title")}),i.a.createElement("div",{className:"profile"},i.a.createElement("img",{className:"profile-img",src:N.a}),i.a.createElement("div",{className:"profile-info"},i.a.createElement("h5",{className:"primary"},e("contact.profile.name")),i.a.createElement("h6",{className:"primary"},e("contact.profile.location")),i.a.createElement("h5",{className:"primary"},e("contact.profile.member")," GA00068"),i.a.createElement("h5",{className:"secondary"},i.a.createElement("a",{className:"secondary",href:"mailto:lauraregueironutricion@gmail.com"},i.a.createElement(A.a,null)," lauraregueironutricion@gmail.com")),i.a.createElement("h5",{className:"secondary"},i.a.createElement("a",{className:"secondary",href:"tel:647240165"},i.a.createElement(z.a,null)," 647240165")))))}}]),a}(n.Component)),x=Object(f.a)()(D),I=(t(108),function(e){function a(e){var t;Object(s.a)(this,a),t=Object(c.a)(this,Object(u.a)(a).call(this,e));var n=Object.keys(t.props.data);return t.state={list:n,selected:0},t.content=Object.values(t.props.data),t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"getUpperList",value:function(){var e=this,a=this.props.t;return"up"===this.props.fixed?this.state.list.map(function(e,t){return i.a.createElement("li",{className:t%2===0?"alt-primary":"alt-secondary"},a(e))}):this.props.fixed?void 0:this.state.list.slice(0,this.state.selected+1).map(function(t,n){return i.a.createElement("li",{onClick:function(){return e.setState({selected:n})},className:n%2===0?"alt-primary":"alt-secondary"},a(t))})}},{key:"getLowerList",value:function(){var e=this,a=this.props.t;return"down"===this.props.fixed?this.state.list.map(function(e,t){return i.a.createElement("li",{className:t%2===0?"alt-primary":"alt-secondary"},a(e))}):this.props.fixed?void 0:this.state.list.slice(this.state.selected+1,this.state.list.length).map(function(t,n){var o=e.state.selected+n+1;return i.a.createElement("li",{onClick:function(){return e.setState({selected:o})},className:o%2===0?"alt-primary":"alt-secondary"},a(t))})}},{key:"render",value:function(){return i.a.createElement("div",{id:"listContentWrapper"},i.a.createElement("div",{id:"listContentContainer"},i.a.createElement("div",{id:"upperListFragment",className:"list-fragment"},this.getUpperList()),i.a.createElement("div",{id:"contentFragment"},this.content[this.state.selected]),i.a.createElement("div",{id:"lowerListFragment",className:"list-fragment"},this.getLowerList())),i.a.createElement("div",{id:"listContentExpanded"},this.content[this.state.selected]))}}]),a}(n.Component)),L=Object(f.a)()(I),T=(t(109),function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"Consultations"},i.a.createElement("div",{className:"first-session"},i.a.createElement("p",{className:"alt-primary"},"1\xaa SESI\xd3N"),i.a.createElement("ul",null,i.a.createElement("li",null,"Historia completa"),i.a.createElement("li",null,"Revisi\xf3n anal\xedtica"),i.a.createElement("li",null,"Establecimiento plan acci\xf3n"),i.a.createElement("li",null,"Env\xedo pauta individualizada"),i.a.createElement("li",null,"Duraci\xf3n apr\xf3x. 1h"),i.a.createElement("li",null,"Precio: 50\u20ac"))),i.a.createElement("div",{className:"next-sessions"},i.a.createElement("p",{className:"alt-secondary"},"REVISIONES"),i.a.createElement("ul",null,i.a.createElement("li",null,"Valoraci\xf3n evoluci\xf3n"),i.a.createElement("li",null,"Resoluci\xf3n dudas"),i.a.createElement("li",null,"Nuevas herramientas, pauta y material adicional"),i.a.createElement("li",null,"Establecimiento nuevos objetivos"),i.a.createElement("li",null,"Duraci\xf3n apr\xf3x. 30 minutos"),i.a.createElement("li",null,"Precio: 30\u20ac"))))}}]),a}(n.Component)),R=(t(110),t(154)),U=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(c.a)(this,Object(u.a)(a).call(this,e))).state={selectedTab:0,consultationsEnabled:!1},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"getData",value:function(){return{"online-consultation.nutritional-education.title":this.getDetails("online-consultation.nutritional-education",3),"online-consultation.overweight.title":this.getDetails("online-consultation.overweight",2),"online-consultation.clinic-nutrition.title":this.getDetails("online-consultation.clinic-nutrition",4),"online-consultation.life-stages.title":this.getDetails("online-consultation.life-stages",3),"online-consultation.vegetarian-diet.title":this.getDetails("online-consultation.vegetarian-diet",2)}}},{key:"getDetails",value:function(e,a){var t=this.props.t;return i.a.createElement("ul",{className:"details-list"},Array(a).fill().map(function(a,n){return i.a.createElement("li",null,t(e+".content.item"+(n+1)))}))}},{key:"render",value:function(){var e=this,a=this.props.t;return i.a.createElement("div",{className:"service"},i.a.createElement("div",{className:"consultation-container"},i.a.createElement("div",{className:"title"},i.a.createElement("p",null,a("online-consultation.title.part1")),i.a.createElement("p",null,a("online-consultation.title.part2"))),i.a.createElement(L,{data:this.getData()}),i.a.createElement("div",{className:"actions"},i.a.createElement(b.a,{size:"large",variant:"contained",color:this.state.consultationsEnabled?"secondary":"primary",onClick:function(){e.setState({consultationsEnabled:!e.state.consultationsEnabled})}},a("online-consultation.info-feeds")))),i.a.createElement(R.a,{in:this.state.consultationsEnabled},i.a.createElement("div",null,i.a.createElement(T,null))))}}]),a}(n.Component),F=Object(f.a)()(U),H=(t(111),function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"getData",value:function(){return{"workshops.trainings":this.getDetail(),"workshops.workshops":this.getDetail(),"workshops.conferences":this.getDetail()}}},{key:"getDetail",value:function(){var e=this.props.t;return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,e("workshops.detail.part1")),i.a.createElement("ul",null,i.a.createElement("li",null,e("workshops.detail.part2")),i.a.createElement("li",null,e("workshops.detail.part3")),i.a.createElement("li",null,e("workshops.detail.part4"))),i.a.createElement("p",null,e("workshops.detail.part5")))}},{key:"render",value:function(){var e=this.props.t;return i.a.createElement("div",{className:"workshop-container service"},i.a.createElement("div",{className:"title"},i.a.createElement("p",null,e("workshops.title.part1")),i.a.createElement("p",null,e("workshops.title.part2"))),i.a.createElement(L,{data:this.getData(),fixed:"up"}))}}]),a}(n.Component)),M=Object(f.a)()(H),Q=t(66),G=t.n(Q),B=(t(112),function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"getDetails",value:function(){var e=this.props.t;return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,e("colaborations.detail")),i.a.createElement("div",{className:"actions"},i.a.createElement("img",{src:G.a})))}},{key:"getData",value:function(){return{"colaborations.valuation":this.getDetails(),"colaborations.assessment":this.getDetails()}}},{key:"render",value:function(){var e=this.props.t;return i.a.createElement("div",{className:"colaborations-container service"},i.a.createElement("div",{className:"title"},i.a.createElement("p",null,e("colaborations.title.part1")),i.a.createElement("p",null,e("colaborations.title.part2"))),i.a.createElement(L,{data:this.getData(),fixed:"up"}))}}]),a}(n.Component)),P=Object(f.a)()(B),W=(t(113),function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props,a=e.title,t=e.image,n=e.alt,o=e.onClick;return i.a.createElement("div",{className:"service-icon-wrapper",onClick:o},i.a.createElement("img",{src:t,className:"service-image",alt:n}),i.a.createElement("div",{className:"service-title"},a))}}]),a}(n.Component)),V=t(67),_=t.n(V),J=t(68),Y=t.n(J),$=t(69),K=t.n($),X=(t(114),t(155)),Z=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(c.a)(this,Object(u.a)(a).call(this,e))).state={selected:"online-consultation"},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this,a=this.props.t;return i.a.createElement("div",{className:"Info"},i.a.createElement("div",{className:"services"},i.a.createElement("div",{id:"personalized-consultation",className:"online-consultation"===this.state.selected?"selected":""},i.a.createElement(W,{title:a("info.online-consultation"),image:_.a,onClick:function(){return e.setState({selected:"online-consultation"})}}),i.a.createElement(F,null)),i.a.createElement("div",{id:"workshops",className:"workshops"===this.state.selected?"selected":""},i.a.createElement(W,{title:a("info.workshops"),image:Y.a,onClick:function(){return e.setState({selected:"workshops"})}}),i.a.createElement(M,null)),i.a.createElement("div",{id:"colaborations",className:"colaborations"===this.state.selected?"selected":""},i.a.createElement(W,{title:a("info.colaborations"),image:K.a,onClick:function(){return e.setState({selected:"colaborations"})}}),i.a.createElement(P,null))),i.a.createElement("div",{className:"services-expanded"},i.a.createElement(X.a,{in:"online-consultation"===this.state.selected,timeout:{enter:500},unmountOnExit:!0,mountOnEnter:!0},i.a.createElement("div",null,i.a.createElement(F,null))),i.a.createElement(X.a,{in:"workshops"===this.state.selected,timeout:{enter:500},unmountOnExit:!0,mountOnEnter:!0},i.a.createElement("div",null,i.a.createElement(M,null))),i.a.createElement(X.a,{in:"colaborations"===this.state.selected,timeout:{enter:500},unmountOnExit:!0,mountOnEnter:!0},i.a.createElement("div",null,i.a.createElement(P,null)))))}}]),a}(n.Component),ee=Object(f.a)()(Z),ae=t(70),te=t.n(ae),ne=t(71),ie=t.n(ne),oe=t(72),re=t.n(oe),se=(t(115),function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"Footer"},i.a.createElement("h6",{className:"secondary"},"Laura Regueiro 2020 - Aviso legal"),i.a.createElement("div",{className:"icons"},i.a.createElement("a",{className:"round-icon",href:"https://www.instagram.com/lauraregueironutricion/"},i.a.createElement(te.a,{fontSize:"large"})),i.a.createElement("a",{className:"round-icon",href:"https://www.facebook.com/lauraregueironutricion/"},i.a.createElement(ie.a,{fontSize:"large"})),i.a.createElement("a",{className:"round-icon",href:"https://www.linkedin.com/in/lauraregueirofolgueira/"},i.a.createElement(re.a,{fontSize:"large"}))))}}]),a}(n.Component)),le=(t(116),function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=i.a.createElement(y,null);return"About"===this.props.content?e=i.a.createElement(j,null):"Info"===this.props.content?e=i.a.createElement(ee,null):"Contact"===this.props.content?e=i.a.createElement(x,null):"Footer"===this.props.content&&(e=i.a.createElement(se,null)),i.a.createElement("div",{className:"Panel"},e)}}]),a}(n.Component)),ce=t(73),ue=t.n(ce),de=(t(117),t(156)),me=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"setScrollingListener",value:function(e,a){var t=document.querySelector(e);t.addEventListener("click",function(){var e=document.querySelector(a);window.scrollTo({top:e.offsetTop-t.offsetHeight,behavior:"smooth"})})}},{key:"componentDidMount",value:function(){var e=document.querySelector("nav");this.setScrollingListener=this.setScrollingListener.bind(e),this.setScrollingListener("li .navbar-logo","div.Main"),this.setScrollingListener("li.info-button","div.Info"),this.setScrollingListener("li.about-button","div.About"),this.setScrollingListener("li.contact-button","div.Contact");var a=e.querySelector(".logo-big"),t=a.offsetHeight,n=e.querySelector("ul"),i=n.querySelector(".main-button");a.style.height=t+"px",n.style.height=n.offsetHeight+"px",e.style.height="max-content",document.addEventListener("scroll",function(){i.classList.remove("hidden"),n.classList.remove("colored");var e=window.scrollY,o=t-e;o>0?(a.style.height=o+"px",i.classList.add("hidden")):(a.style.height="0px",n.classList.add("colored"))})}},{key:"render",value:function(){var e=this.props.t;return i.a.createElement("nav",{className:"fixed-nav"},i.a.createElement("div",{className:"logo-big-container"},i.a.createElement(de.a,{maxWidth:"xl",className:"logo-big"})),i.a.createElement("ul",null,i.a.createElement("li",{className:"main-button hidden"},i.a.createElement("img",{className:"navbar-logo",src:ue.a})),i.a.createElement("li",{className:"info-button"},e("menu.services")),i.a.createElement("li",{className:"about-button"},e("menu.about-me")),i.a.createElement("li",{className:"contact-button"},e("menu.contact"))))}}]),a}(n.Component),pe=Object(f.a)()(me),be=t(157),fe=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=Object(m.a)({palette:{primary:{light:"#cf5524",main:"#cf5524",dark:"#cf5524",contrastText:"#fff"},secondary:{light:"#facb0b",main:"#facb0b",dark:"#facb0b",contrastText:"#fff"}}});return i.a.createElement(n.Suspense,{fallback:i.a.createElement(be.a,null)},i.a.createElement(p.a,{theme:e},i.a.createElement("div",{className:"App"},i.a.createElement(pe,null),i.a.createElement(de.a,{maxWidth:"xl"},i.a.createElement(le,{content:"Main"}),i.a.createElement(le,{content:"Info"}),i.a.createElement(le,{content:"About"}),i.a.createElement(le,{content:"Contact"})),i.a.createElement(le,{content:"Footer"}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ve=t(50),ye=t(39),ge=t(74),he=t(75),Ee=t(76),je=(t(118),t(78)),Oe={en:{translation:ge},es:{translation:he},gl:{translation:Ee}};ve.a.use(je.a).use(ye.e).init({fallbackLng:"es",debug:!0,resources:Oe,interpolation:{escapeValue:!1}});ve.a;r.a.render(i.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},62:function(e,a,t){e.exports=t.p+"static/media/profile_esc.9230b8a5.jpg"},63:function(e,a,t){e.exports=t.p+"static/media/profile_alt.ec0d59e6.jpg"},66:function(e,a,t){e.exports=t.p+"static/media/nutriendo_empresa.ac281ca7.jpeg"},67:function(e,a,t){e.exports=t.p+"static/media/personalized_consultation1.bcb187ce.png"},68:function(e,a,t){e.exports=t.p+"static/media/workshops1.f46159c5.png"},69:function(e,a,t){e.exports=t.p+"static/media/colaborations.496bcc85.png"},73:function(e,a,t){e.exports=t.p+"static/media/logo_no_name.aaba307b.png"},74:function(e){e.exports={menu:{services:"Servicios","about-me":"Sobre m\xed",contact:"Contacto"},main:{label:"\xbfQuieres cambiar tu alimentaci\xf3n? Deja que te ayude","ask-appointment":"Pide cita"},info:{"online-consultation":"Consulta personalizada, online y presencial",workshops:"Formaciones y talleres",colaborations:"Restauraci\xf3n colectiva y empresas"},"online-consultation":{title:{part1:"\xbfNecesitas ayuda para mejorar tu alimentaci\xf3n?",part2:"Puedo ayudarte:"},"info-feeds":"+ info consultas/Tarifas","nutritional-education":{title:"Educaci\xf3n nutricional",content:{item1:"\xbfTu alimentaci\xf3n no es mala pero te gustar\xeda seguir mejor\xe1ndola?",item2:"Desde la educaci\xf3n nutricional te ayudar\xe9 a comer saludable disfrutando de la comida y evitando la monoton\xeda",item3:"Te acompa\xf1ar\xe9 en el camino del cambio de h\xe1bitos aport\xe1ndote las herramientas necesarias para ello"}},overweight:{title:"Sobrepeso y obesidad",content:{item1:'Buscaremos\xa0alcanzar la p\xe9rdida de grasa desde la educaci\xf3n nutricional evitando las "dietas" restrictivas, mon\xf3tonas y de caj\xf3n',item2:"El peso no lo es todo, aprenderemos a buscar otras referencias que nos permitan ver los cambios obtenidos sin centrarnos unicamente en la b\xe1scula"}},"clinic-nutrition":{title:"Nutrici\xf3n cl\xednica",content:{item1:"\xbfSab\xedas que tus problemas de salud pueden mejorar adaptando tu alimentaci\xf3n?",item2:"Si tienes problemas renales, digestivos, cardiovasculares, disfagia...  puedo ayudarte",item3:"Te ayudar\xe9 a sentirte mejor, mejorar los par\xe1metros anal\xedticos y los riesgos asociados a tu enfermedad",item4:"Mi especialidad es la patolog\xeda renal"}},"life-stages":{title:"Etapas de la vida",content:{item1:"Son etapas de la vida el embarazo, infancia, vejez... mi predilecci\xf3n es la vejez",item2:"Entre las personas mayores a menudo aparece deterioro cognitivo unido a falta de apetito, dificultades para tragar, disfagia... que solemos pasar por alto",item3:"Si eres cuidador de una persona mayor y no sabes c\xf3mo abordar\xa0su alimentaci\xf3n puedo ayudarte"}},"vegetarian-diet":{title:"Alimentaci\xf3n vegetariana y vegana",content:{item1:"\xbfQuieres cambiar tu alimentaci\xf3n a una dieta vegetariana/vegana y no sabes c\xf3mo?",item2:"Te ayudar\xe9 a adaptar tu alimentaci\xf3n a esta pauta asegurando que se incluyan todos los nutrientes necesarios"}}},workshops:{title:{part1:"\xbfTe interesa recibir/organizar alguna formaci\xf3n sobre nutrici\xf3n?",part2:"\xbfQuieres profundizar en un tema espec\xedfico?"},trainings:"Formaciones",workshops:"Charlas y talleres",conferences:"Conferencias",detail:{part1:"Destinadas a:",part2:"p\xfablico general",part3:"asociaciones",part4:"centros y empresas...",part5:"Con tem\xe1ticas, contenido, metodolog\xeda y duraci\xf3n adaptada a los intereses y objetivos deseados."}},colaborations:{title:{part1:"\xbfTe interesa recibir/organizar alguna formaci\xf3n sobre nutrici\xf3n?",part2:"\xbfQuieres profundizar en un tema espec\xedfico?"},valuation:"Valoraci\xf3n, supervisi\xf3n y  elaboraci\xf3n de men\xfas",assessment:"Asesoramiento\xa0y colaboraciones peri\xf3dicas",detail:"Si eres una empresa comprometida con la salud y el bienestar de tus trabajadores, esto te interesa:"},bio:{title:{part1:"Mi nombre es",part2:"LAURA REGUEIRO FOLGUEIRA",part3:"Soy dietista-nutricionista"},body:{part1:"Realic\xe9 mis estudios de Grado en Nutrici\xf3n en Nutrici\xf3n Humana y Diet\xe9tica en la Universidad de Santiago de Compostela y desde entonces no he dejado de formarme y trabajar en este mundo de la nutrici\xf3n que me apasiona. Actualmente realizo un doctorado en Ciencias de la Salud en el grupo de Investigaci\xf3n en Gerontolog\xeda de la Universidad de A Coru\xf1a.",part2:"He desarrollado mi trayectoria profesional fundamentalmente en tres campos:",part3:{key:"Investigaci\xf3n como miembro del INIBIC",value:" (Instituto de Investigaci\xf3n Biom\xe9dica de A Coru\xf1a) en el \xe1rea de nutrici\xf3n y gerontolog\xeda, colaborando en proyectos de investigaci\xf3n dedicados a identificar los factores de riesgo y h\xe1bitos de vida que influyen en el deterioro de salud y del estado nutricional de las personas mayores y/o pacientes hospitalizados."},part4:{key:"Nutrici\xf3n hospitalaria\xa0en el CHUAC",value:" (Complejo Hospitalario Universitario de A Coru\xf1a) en la atenci\xf3n a pacientes con obesidad y que van a ser intervenidos de cirug\xeda bari\xe1trica, as\xed como pacientes desnutridos, con disfagia, patolog\xeda digestiva, renal, etc."},part5:{key:"Consulta de educaci\xf3n nutricional y nutrici\xf3n cl\xednica.",value:" Realizo atenci\xf3n nutricional personalizada en consulta, ayudando a las personas que lo desean a mejorar su alimentaci\xf3n y aprender a llevar un estilo de vida saludable adaptado a su situaci\xf3n personal, problemas o enfermedades de base. Me apasiona y me motiva ayudar a la gente a cambiar su alimentaci\xf3n y a disfrutar de la comida de forma saludable, por eso creo y apuesto por la educaci\xf3n nutricional basada en la evidencia cient\xedfica como la clave para mejorar h\xe1bitos, huyendo de las dietas milagro, de caj\xf3n, suplementos adelgazantes..."},part6:"Dada mi trayectoria y mi formaci\xf3n complementaria estoy especializada en Obesidad, cirug\xeda bari\xe1trica y Nutrici\xf3n cl\xednica en patolog\xeda renal y disfagia."},quote:"Me encanta mi trabajo, porque me permite intervenir y mejorar la alimentaci\xf3n de la poblaci\xf3n de muchas formas, adem\xe1s de en consulta tambi\xe9n con formaciones, charlas, talleres, revisi\xf3n de men\xfas, asesoramiento a empresas, industria\u2026"},contact:{"form-title":"\xbfTienes alguna duda? \xbfQuieres pedir cita?",profile:{name:"Laura Regueiro Dietista-Nutricionista",location:"Tu dietista-nutricionista Online y en A Coru\xf1a",member:"N\xba Colegiada:"}}}},75:function(e){e.exports={menu:{services:"Servicios","about-me":"Sobre m\xed",contact:"Contacto"},main:{label:"\xbfQuieres cambiar tu alimentaci\xf3n? Deja que te ayude","ask-appointment":"Pide cita"},info:{"online-consultation":"Consulta personalizada, online y presencial",workshops:"Formaciones y talleres",colaborations:"Restauraci\xf3n colectiva y empresas"},"online-consultation":{title:{part1:"\xbfNecesitas ayuda para mejorar tu alimentaci\xf3n?",part2:"Puedo ayudarte:"},"info-feeds":"+ info consultas/Tarifas","nutritional-education":{title:"Educaci\xf3n nutricional",content:{item1:"\xbfTu alimentaci\xf3n no es mala pero te gustar\xeda seguir mejor\xe1ndola?",item2:"Desde la educaci\xf3n nutricional te ayudar\xe9 a comer saludable disfrutando de la comida y evitando la monoton\xeda",item3:"Te acompa\xf1ar\xe9 en el camino del cambio de h\xe1bitos aport\xe1ndote las herramientas necesarias para ello"}},overweight:{title:"Sobrepeso y obesidad",content:{item1:'Buscaremos\xa0alcanzar la p\xe9rdida de grasa desde la educaci\xf3n nutricional evitando las "dietas" restrictivas, mon\xf3tonas y de caj\xf3n',item2:"El peso no lo es todo, aprenderemos a buscar otras referencias que nos permitan ver los cambios obtenidos sin centrarnos unicamente en la b\xe1scula"}},"clinic-nutrition":{title:"Nutrici\xf3n cl\xednica",content:{item1:"\xbfSab\xedas que tus problemas de salud pueden mejorar adaptando tu alimentaci\xf3n?",item2:"Si tienes problemas renales, digestivos, cardiovasculares, disfagia...  puedo ayudarte",item3:"Te ayudar\xe9 a sentirte mejor, mejorar los par\xe1metros anal\xedticos y los riesgos asociados a tu enfermedad",item4:"Mi especialidad es la patolog\xeda renal"}},"life-stages":{title:"Etapas de la vida",content:{item1:"Son etapas de la vida el embarazo, infancia, vejez... mi predilecci\xf3n es la vejez",item2:"Entre las personas mayores a menudo aparece deterioro cognitivo unido a falta de apetito, dificultades para tragar, disfagia... que solemos pasar por alto",item3:"Si eres cuidador de una persona mayor y no sabes c\xf3mo abordar\xa0su alimentaci\xf3n puedo ayudarte"}},"vegetarian-diet":{title:"Alimentaci\xf3n vegetariana y vegana",content:{item1:"\xbfQuieres cambiar tu alimentaci\xf3n a una dieta vegetariana/vegana y no sabes c\xf3mo?",item2:"Te ayudar\xe9 a adaptar tu alimentaci\xf3n a esta pauta asegurando que se incluyan todos los nutrientes necesarios"}}},workshops:{title:{part1:"\xbfTe interesa recibir/organizar alguna formaci\xf3n sobre nutrici\xf3n?",part2:"\xbfQuieres profundizar en un tema espec\xedfico?"},trainings:"Formaciones",workshops:"Charlas y talleres",conferences:"Conferencias",detail:{part1:"Destinadas a:",part2:"p\xfablico general",part3:"asociaciones",part4:"centros y empresas...",part5:"Con tem\xe1ticas, contenido, metodolog\xeda y duraci\xf3n adaptada a los intereses y objetivos deseados."}},colaborations:{title:{part1:"\xbfTe interesa recibir/organizar alguna formaci\xf3n sobre nutrici\xf3n?",part2:"\xbfQuieres profundizar en un tema espec\xedfico?"},valuation:"Valoraci\xf3n, supervisi\xf3n y  elaboraci\xf3n de men\xfas",assessment:"Asesoramiento\xa0y colaboraciones peri\xf3dicas",detail:"Si eres una empresa comprometida con la salud y el bienestar de tus trabajadores, esto te interesa:"},bio:{title:{part1:"Mi nombre es",part2:"LAURA REGUEIRO FOLGUEIRA",part3:"Soy dietista-nutricionista"},body:{part1:"Realic\xe9 mis estudios de Grado en Nutrici\xf3n en Nutrici\xf3n Humana y Diet\xe9tica en la Universidad de Santiago de Compostela y desde entonces no he dejado de formarme y trabajar en este mundo de la nutrici\xf3n que me apasiona. Actualmente realizo un doctorado en Ciencias de la Salud en el grupo de Investigaci\xf3n en Gerontolog\xeda de la Universidad de A Coru\xf1a.",part2:"He desarrollado mi trayectoria profesional fundamentalmente en tres campos:",part3:{key:"Investigaci\xf3n como miembro del INIBIC",value:" (Instituto de Investigaci\xf3n Biom\xe9dica de A Coru\xf1a) en el \xe1rea de nutrici\xf3n y gerontolog\xeda, colaborando en proyectos de investigaci\xf3n dedicados a identificar los factores de riesgo y h\xe1bitos de vida que influyen en el deterioro de salud y del estado nutricional de las personas mayores y/o pacientes hospitalizados."},part4:{key:"Nutrici\xf3n hospitalaria\xa0en el CHUAC",value:" (Complejo Hospitalario Universitario de A Coru\xf1a) en la atenci\xf3n a pacientes con obesidad y que van a ser intervenidos de cirug\xeda bari\xe1trica, as\xed como pacientes desnutridos, con disfagia, patolog\xeda digestiva, renal, etc."},part5:{key:"Consulta de educaci\xf3n nutricional y nutrici\xf3n cl\xednica.",value:" Realizo atenci\xf3n nutricional personalizada en consulta, ayudando a las personas que lo desean a mejorar su alimentaci\xf3n y aprender a llevar un estilo de vida saludable adaptado a su situaci\xf3n personal, problemas o enfermedades de base. Me apasiona y me motiva ayudar a la gente a cambiar su alimentaci\xf3n y a disfrutar de la comida de forma saludable, por eso creo y apuesto por la educaci\xf3n nutricional basada en la evidencia cient\xedfica como la clave para mejorar h\xe1bitos, huyendo de las dietas milagro, de caj\xf3n, suplementos adelgazantes..."},part6:"Dada mi trayectoria y mi formaci\xf3n complementaria estoy especializada en Obesidad, cirug\xeda bari\xe1trica y Nutrici\xf3n cl\xednica en patolog\xeda renal y disfagia."},quote:"Me encanta mi trabajo, porque me permite intervenir y mejorar la alimentaci\xf3n de la poblaci\xf3n de muchas formas, adem\xe1s de en consulta tambi\xe9n con formaciones, charlas, talleres, revisi\xf3n de men\xfas, asesoramiento a empresas, industria\u2026"},contact:{"form-title":"\xbfTienes alguna duda? \xbfQuieres pedir cita?",profile:{name:"Laura Regueiro Dietista-Nutricionista",location:"Tu dietista-nutricionista Online y en A Coru\xf1a",member:"N\xba Colegiada:"}}}},76:function(e){e.exports={menu:{services:"Servicios","about-me":"Sobre m\xed",contact:"Contacto"},main:{label:"\xbfQuieres cambiar tu alimentaci\xf3n? Deja que te ayude","ask-appointment":"Pide cita"},info:{"online-consultation":"Consulta personalizada, online y presencial",workshops:"Formaciones y talleres",colaborations:"Restauraci\xf3n colectiva y empresas"},"online-consultation":{title:{part1:"\xbfNecesitas ayuda para mejorar tu alimentaci\xf3n?",part2:"Puedo ayudarte:"},"info-feeds":"+ info consultas/Tarifas","nutritional-education":{title:"Educaci\xf3n nutricional",content:{item1:"\xbfTu alimentaci\xf3n no es mala pero te gustar\xeda seguir mejor\xe1ndola?",item2:"Desde la educaci\xf3n nutricional te ayudar\xe9 a comer saludable disfrutando de la comida y evitando la monoton\xeda",item3:"Te acompa\xf1ar\xe9 en el camino del cambio de h\xe1bitos aport\xe1ndote las herramientas necesarias para ello"}},overweight:{title:"Sobrepeso y obesidad",content:{item1:'Buscaremos\xa0alcanzar la p\xe9rdida de grasa desde la educaci\xf3n nutricional evitando las "dietas" restrictivas, mon\xf3tonas y de caj\xf3n',item2:"El peso no lo es todo, aprenderemos a buscar otras referencias que nos permitan ver los cambios obtenidos sin centrarnos unicamente en la b\xe1scula"}},"clinic-nutrition":{title:"Nutrici\xf3n cl\xednica",content:{item1:"\xbfSab\xedas que tus problemas de salud pueden mejorar adaptando tu alimentaci\xf3n?",item2:"Si tienes problemas renales, digestivos, cardiovasculares, disfagia...  puedo ayudarte",item3:"Te ayudar\xe9 a sentirte mejor, mejorar los par\xe1metros anal\xedticos y los riesgos asociados a tu enfermedad",item4:"Mi especialidad es la patolog\xeda renal"}},"life-stages":{title:"Etapas de la vida",content:{item1:"Son etapas de la vida el embarazo, infancia, vejez... mi predilecci\xf3n es la vejez",item2:"Entre las personas mayores a menudo aparece deterioro cognitivo unido a falta de apetito, dificultades para tragar, disfagia... que solemos pasar por alto",item3:"Si eres cuidador de una persona mayor y no sabes c\xf3mo abordar\xa0su alimentaci\xf3n puedo ayudarte"}},"vegetarian-diet":{title:"Alimentaci\xf3n vegetariana y vegana",content:{item1:"\xbfQuieres cambiar tu alimentaci\xf3n a una dieta vegetariana/vegana y no sabes c\xf3mo?",item2:"Te ayudar\xe9 a adaptar tu alimentaci\xf3n a esta pauta asegurando que se incluyan todos los nutrientes necesarios"}}},workshops:{title:{part1:"\xbfTe interesa recibir/organizar alguna formaci\xf3n sobre nutrici\xf3n?",part2:"\xbfQuieres profundizar en un tema espec\xedfico?"},trainings:"Formaciones",workshops:"Charlas y talleres",conferences:"Conferencias",detail:{part1:"Destinadas a:",part2:"p\xfablico general",part3:"asociaciones",part4:"centros y empresas...",part5:"Con tem\xe1ticas, contenido, metodolog\xeda y duraci\xf3n adaptada a los intereses y objetivos deseados."}},colaborations:{title:{part1:"\xbfTe interesa recibir/organizar alguna formaci\xf3n sobre nutrici\xf3n?",part2:"\xbfQuieres profundizar en un tema espec\xedfico?"},valuation:"Valoraci\xf3n, supervisi\xf3n y  elaboraci\xf3n de men\xfas",assessment:"Asesoramiento\xa0y colaboraciones peri\xf3dicas",detail:"Si eres una empresa comprometida con la salud y el bienestar de tus trabajadores, esto te interesa:"},bio:{title:{part1:"Mi nombre es",part2:"LAURA REGUEIRO FOLGUEIRA",part3:"Soy dietista-nutricionista"},body:{part1:"Realic\xe9 mis estudios de Grado en Nutrici\xf3n en Nutrici\xf3n Humana y Diet\xe9tica en la Universidad de Santiago de Compostela y desde entonces no he dejado de formarme y trabajar en este mundo de la nutrici\xf3n que me apasiona. Actualmente realizo un doctorado en Ciencias de la Salud en el grupo de Investigaci\xf3n en Gerontolog\xeda de la Universidad de A Coru\xf1a.",part2:"He desarrollado mi trayectoria profesional fundamentalmente en tres campos:",part3:{key:"Investigaci\xf3n como miembro del INIBIC",value:" (Instituto de Investigaci\xf3n Biom\xe9dica de A Coru\xf1a) en el \xe1rea de nutrici\xf3n y gerontolog\xeda, colaborando en proyectos de investigaci\xf3n dedicados a identificar los factores de riesgo y h\xe1bitos de vida que influyen en el deterioro de salud y del estado nutricional de las personas mayores y/o pacientes hospitalizados."},part4:{key:"Nutrici\xf3n hospitalaria\xa0en el CHUAC",value:" (Complejo Hospitalario Universitario de A Coru\xf1a) en la atenci\xf3n a pacientes con obesidad y que van a ser intervenidos de cirug\xeda bari\xe1trica, as\xed como pacientes desnutridos, con disfagia, patolog\xeda digestiva, renal, etc."},part5:{key:"Consulta de educaci\xf3n nutricional y nutrici\xf3n cl\xednica.",value:" Realizo atenci\xf3n nutricional personalizada en consulta, ayudando a las personas que lo desean a mejorar su alimentaci\xf3n y aprender a llevar un estilo de vida saludable adaptado a su situaci\xf3n personal, problemas o enfermedades de base. Me apasiona y me motiva ayudar a la gente a cambiar su alimentaci\xf3n y a disfrutar de la comida de forma saludable, por eso creo y apuesto por la educaci\xf3n nutricional basada en la evidencia cient\xedfica como la clave para mejorar h\xe1bitos, huyendo de las dietas milagro, de caj\xf3n, suplementos adelgazantes..."},part6:"Dada mi trayectoria y mi formaci\xf3n complementaria estoy especializada en Obesidad, cirug\xeda bari\xe1trica y Nutrici\xf3n cl\xednica en patolog\xeda renal y disfagia."},quote:"Me encanta mi trabajo, porque me permite intervenir y mejorar la alimentaci\xf3n de la poblaci\xf3n de muchas formas, adem\xe1s de en consulta tambi\xe9n con formaciones, charlas, talleres, revisi\xf3n de men\xfas, asesoramiento a empresas, industria\u2026"},contact:{"form-title":"\xbfTienes alguna duda? \xbfQuieres pedir cita?",profile:{name:"Laura Regueiro Dietista-Nutricionista",location:"Tu dietista-nutricionista Online y en A Coru\xf1a",member:"N\xba Colegiada:"}}}},87:function(e,a,t){e.exports=t(120)},92:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){}},[[87,1,2]]]);
//# sourceMappingURL=main.69832a5d.chunk.js.map