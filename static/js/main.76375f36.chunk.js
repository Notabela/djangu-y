(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(56)},33:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),s=a(16),r=a.n(s),i=(a(33),a(34),a(35),a(8)),c=a(9),o=a(11),u=a(10),m=a(12),f=a(63),p=(a(36),function(e){var t=e.isVisible;return l.a.createElement("div",{id:"splash-page",className:t?"":"fadeOut"},l.a.createElement("svg",null,l.a.createElement("g",null,l.a.createElement("path",{d:"M 50,100 A 1,1 0 0 1 50,0"})),l.a.createElement("g",null,l.a.createElement("path",{d:"M 50,75 A 1,1 0 0 0 50,-25"})),l.a.createElement("defs",null,l.a.createElement("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%"},l.a.createElement("stop",{offset:"0%",style:{stopColor:"#FF56A1",stopOpacity:"1"}}),l.a.createElement("stop",{offset:"100%",style:{stopColor:"#FF9350",stopOpacity:"1"}})))))}),d=(a(37),a(57)),h=a(58),b=a(59),E=a(70),g=a(60),v=a(61),x=a(62),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).toggle=function(){a.setState({isOpen:!a.state.isOpen})},a.state={isOpen:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d.a,{light:!0,expand:"md"},l.a.createElement(h.a,{href:"/"},"Djangu-y"),l.a.createElement(b.a,{onClick:this.toggle}),l.a.createElement(E.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(g.a,{className:"ml-auto",navbar:!0},l.a.createElement(v.a,null,l.a.createElement(x.a,{href:"#message"},"Mission")),l.a.createElement(v.a,null,l.a.createElement(x.a,{href:"#usage"},"Fonctionnalit\xe9s")),l.a.createElement(v.a,null,l.a.createElement(x.a,{href:"#about"},"Application")),l.a.createElement(v.a,null,l.a.createElement(x.a,{href:"#contact"},"Abonnement"))))))}}]),t}(n.Component),C=(a(47),function(){var e={backgroundImage:"url(".concat("https://i.imgur.com/KcpM22Y.png?1",")"),backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"};return l.a.createElement("div",{className:"intro-wrapper"},l.a.createElement(y,null),l.a.createElement("div",{id:"intro",style:e},l.a.createElement("div",{id:"topic",className:"shadows"},"Djangu-",l.a.createElement("span",{style:{color:"#379683"}},"y"))),l.a.createElement("div",{id:"intro-courses"},l.a.createElement("p",null,l.a.createElement("strong",null,"Les cours prochainement disponibles:")),l.a.createElement("p",{className:"text-center bare-element"}," \xa0 Franc\u0327ais \xa0 Philo \xa0 H-G \xa0 Maths \xa0 SVT \xa0 PC \xa0 Anglais")))}),O=a(17),j=a.n(O),w=(a(48),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).onMessageVisible=function(e){a.messageVisible=e,e&&a.setState({messageVisible:e})},a.state={messageVisible:!1},a.messageVisible=!1,a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.splashVisible||this.setState({messageVisible:this.messageVisible})}},{key:"render",value:function(){return l.a.createElement(f.a,{fluid:!0,className:"message-wrapper"},l.a.createElement("div",{id:"message",className:"text-center"},l.a.createElement(j.a,{onChange:this.onMessageVisible},l.a.createElement("p",{className:this.state.messageVisible?"animated slideInUp":"hide"},"Changer votre mani\xe8re d'apprendre ",l.a.createElement("br",null),"avec une touche de technologie"))))}}]),t}(n.Component)),N=a(64),S=a(65),k=(a(49),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={bulletVisible:!1},a.bulletVisible=!1,a.onBulletVisible=function(e){a.bulletVisible=e,e&&a.setState({bulletVisible:e})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.splashVisible||this.setState({bulletVisible:this.bulletVisible})}},{key:"render",value:function(){return l.a.createElement(f.a,{fluid:!0},l.a.createElement(N.a,{className:this.state.bulletVisible?"animated fadeIn":"hide",style:{marginTop:"3%"}},l.a.createElement(S.a,{xs:"3",className:"bare-element text-center"},l.a.createElement("img",{src:this.props.imageUrl,alt:this.props.altText})),l.a.createElement(S.a,{xs:"9"},l.a.createElement(j.a,{onChange:this.onBulletVisible},l.a.createElement("p",{className:"image-bullet-topics"},this.props.textTitle)),l.a.createElement("p",null,this.props.text))))}}]),t}(n.Component)),V=(a(50),function(e){var t=e.imageData,a=e.splashVisible;return l.a.createElement(f.a,{fluid:!0},l.a.createElement("div",{id:"usage"},l.a.createElement("div",{className:"section-center"},l.a.createElement("h4",{className:"text-center"},"Notre approche unique: apprendre n\u2019importe ou\u0300, n\u2019importe quand"),l.a.createElement("div",{className:"image-bullets"},t.map(function(e,t){return l.a.createElement(k,{key:t,splashVisible:a,imageUrl:e.imgUrl,altText:e.altText,textTitle:e.textTitle,text:e.text})})))))}),T=a(66),D=a(67),I=a(68),F=a(69),M=(a(51),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).submitForm=function(e){e.preventDefault(),document.querySelector("#subscribe-form").reset()},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(f.a,{fluid:!0,className:"contact",id:"contact"},l.a.createElement(N.a,null,l.a.createElement(S.a,{sm:"12",md:{size:8,offset:2},className:"text-center"},l.a.createElement("p",null,"Pour ne rien rater de l'actualie\u0301 de Djanguy ",l.a.createElement("br",null),"Abonne -toi a\u0300 notre newsletter"))),l.a.createElement(N.a,{className:"text-center"},l.a.createElement(S.a,{sm:"12",md:{size:8,offset:2}},l.a.createElement(T.a,{id:"subscribe-form",onSubmit:this.submitForm},l.a.createElement(D.a,null,l.a.createElement(I.a,{type:"text",placeholder:"Nom Complet"})),l.a.createElement(D.a,null,l.a.createElement(I.a,{type:"tel",placeholder:"Num\xe9ro de T\xe9l\xe9phone"})),l.a.createElement(D.a,null,l.a.createElement(F.a,null,"Envoyer"))))))}}]),t}(n.Component)),A=a(14),U=(a(52),function(){return l.a.createElement(f.a,{fluid:!0,className:"footer text-center"},l.a.createElement(N.a,{id:"footer-blurb"},l.a.createElement(S.a,null,l.a.createElement("p",null,"L'e\u0301ducation par les mille\u0301niaux et pour les mille\u0301niaux"))),l.a.createElement(N.a,null,l.a.createElement(S.a,null,l.a.createElement("p",{className:"notabela"},l.a.createElement(A.c,{color:"blue"})," avec ",l.a.createElement("span",{id:"react-icon"},l.a.createElement(A.f,{color:"#00d8ff"}))," par notabela, ic\xf4nes par ",l.a.createElement("a",{href:"https://icons8.com"},"Icons8")))))}),P=(a(53),function(e){var t=e.animation,a=e.digit;return l.a.createElement("div",{className:"flipCard ".concat(t)},l.a.createElement("span",null,a))}),W=function(e){var t=e.position,a=e.digit;return l.a.createElement("div",{className:t},l.a.createElement("span",null,a))},q=function(e){var t=e.digit,a=e.shuffle,n=e.unit,s=t,r=t+1;s<10&&(s="0".concat(s)),r<10&&(r="0".concat(r));var i=a?r:s,c=a?s:r,o=a?"fold":"unfold",u=a?"unfold":"fold";return l.a.createElement("div",{className:"flipUnitContainer"},l.a.createElement(W,{position:"upperCard",digit:s}),l.a.createElement(W,{position:"lowerCard",digit:r}),l.a.createElement(P,{digit:i,animation:o}),l.a.createElement(P,{digit:c,animation:u}),l.a.createElement("div",{className:"card-label"},l.a.createElement("p",null,n)))},L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).dhm=function(e){var t=e%864e5,a=e%36e5,n=e%6e4;return{days:Math.floor(e/864e5),hours:Math.floor(t/36e5),minutes:Math.floor(a/6e4),seconds:Math.floor(n/1e3)}},a.wdhms=function(e){var t=e/1e3|0;e-=1e3*t;var a=t/60|0;t-=60*a;var n=a/60|0;a-=60*n;var l=n/24|0;n-=24*l;var s=l/7|0;return{weeks:s,days:l-=7*s,hours:n,minutes:a,seconds:t}},a.updateTime=function(){var e=new Date(a.props.dateString)-new Date;e<0&&(clearInterval(a.timerID),e=0);var t=a.wdhms(e),n=t.weeks,l=t.days,s=t.hours,r=t.minutes,i=t.seconds;if(n!==a.state.weeks){var c=!a.state.weeksShuffle;a.setState({weeks:n,weeksShuffle:c})}if(l!==a.state.days){var o=!a.state.daysShuffle;a.setState({days:l,daysShuffle:o})}if(s!==a.state.hours){var u=!a.state.hoursShuffle;a.setState({hours:s,hoursShuffle:u})}if(r!==a.state.minutes){var m=!a.state.minutesShuffle;a.setState({minutes:r,minutesShuffle:m})}if(i!==a.state.seconds){var f=!a.state.secondsShuffle;a.setState({seconds:i,secondsShuffle:f})}},a.state={weeks:0,weeksShuffle:!0,days:0,daysShuffle:!0,hours:0,hoursShuffle:!0,minutes:0,minutesShuffle:!0,seconds:0,secondsShuffle:!0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval(function(){return e.updateTime()},50)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e=this.state,t=e.weeks,a=e.days,n=e.hours,s=e.minutes,r=e.seconds,i=e.weeksShuffle,c=e.daysShuffle,o=e.hoursShuffle,u=e.minutesShuffle,m=e.secondsShuffle;return l.a.createElement(f.a,{fluid:!0,className:"flipClock"},l.a.createElement(N.a,{className:"text-center justify-content-center"},l.a.createElement(S.a,{xs:"1"},l.a.createElement(q,{unit:"sems",digit:t,shuffle:i})),l.a.createElement(S.a,{xs:"1"},l.a.createElement(q,{unit:"jours",digit:a,shuffle:c})),l.a.createElement(S.a,{xs:"1"},l.a.createElement(q,{unit:"heures",digit:n,shuffle:o})),l.a.createElement(S.a,{xs:"1"},l.a.createElement(q,{unit:"mins",digit:s,shuffle:u})),l.a.createElement(S.a,{xs:"1"},l.a.createElement(q,{unit:"secs",digit:r,shuffle:m}))))}}]),t}(l.a.Component),R=(a(54),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(f.a,{fluid:!0,id:"about"},l.a.createElement(f.a,{fluid:!0},l.a.createElement(N.a,null,l.a.createElement(S.a,{id:"about-float-text",className:"text-center"},l.a.createElement("p",null,"Comment c\u0327a marche?")))),l.a.createElement(f.a,{fluid:!0,className:"text-center",id:"about-grid"},l.a.createElement(N.a,{className:"about-top"},l.a.createElement(S.a,{sm:"6",className:"about-box about-1-box"},l.a.createElement("p",{className:"about-number"},"1"),l.a.createElement("p",null,"T\xe9l\xe9charger l'application")),l.a.createElement(S.a,{sm:"6",className:"about-box about-2-box"},l.a.createElement("p",{className:"about-number"},"2"),l.a.createElement("p",null,"Payer les frais d'acce\u0301s"))),l.a.createElement(N.a,{className:"about-bottom"},l.a.createElement(S.a,{sm:"6",className:"about-box about-3-box"},l.a.createElement("p",{className:"about-number"},"3"),l.a.createElement("p",null,"Choisir son cours")),l.a.createElement(S.a,{sm:"6",className:"about-box about-4-box"},l.a.createElement("p",{className:"about-number"},"4"),l.a.createElement("p",null,"Suivre en direct le cours et revoir le ",l.a.createElement("br",null),"me\u0302me cours apre\u0301s la diffusion en direct"))),l.a.createElement(N.a,{id:"about-countdown",className:"text-center"},l.a.createElement(S.a,null,l.a.createElement("p",{id:"countdown-text"},"Jours restant avant",l.a.createElement("br",null),"le lancement de l\u2019application"),l.a.createElement(L,{dateString:this.props.countDownFrom})))))}}]),t}(n.Component)),B=(a(55),a(27)),z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={showSplash:!0,childVisibility:!0},a.imageData=[{imgUrl:"https://img.icons8.com/color/96/000000/multiple-devices.png",faImg:{faClass:A.d,color:"#C0C0C0"},altText:"Devices",textTitle:"Des cours de renforcement diffuse\u0301s en direct",text:"Le visionnage est possible sur votre smartphone, tablette ou ordinateur."},{imgUrl:"https://img.icons8.com/color/96/000000/communication.png",faImg:{faClass:B.a,color:"#0084ff"},altText:"Messages",textTitle:"Inte\u0301raction renforce\u0301e",text:"Tchats en temps re\u0301el et notifications sur les mises a\u0300 jour lie\u0301es au cours."},{imgUrl:"https://img.icons8.com/color/96/000000/youtube-play.png",faImg:{faClass:A.e,color:"#C0C0C0"},altText:"Replay",textTitle:"Fonctionnalite\u0301 Replay",text:"Les vide\u0301os des cours filme\u0301s sont toujours disponibles sur notre plateforme, 15 jours apre\u0301s la diffusion en directe."},{imgUrl:"https://img.icons8.com/color/96/000000/wi-fi-connected.png",faImg:{faClass:A.g,color:"#C0C0C0"},altText:"WiFi",textTitle:"La technologie diffusion en continu a\u0300 plusieurs de\u0301bits",text:"Gra\u0302ce a\u0300 cette fonctionnalite\u0301 la vitesse internet des participants n'a pas d'impact sur la qualite\u0301 de la vide\u0301o visionne\u0301e."},{imgUrl:"https://img.icons8.com/color/96/000000/coins.png",faImg:{faClass:A.a,color:"#C0C0C0"},altText:"Coins",textTitle:"Flexi-paiement",text:"Et oui, les frais mensuels (10 000 FCFA) sont payables en quatre versements (versement minimum de 500 FCFA)."},{imgUrl:"https://img.icons8.com/color/96/000000/online-money-transfer.png",faImg:{faClass:A.b,color:"#C0C0C0"},altText:"debit",textTitle:"Payer avec Orange Money ou Waari",text:"Pour avoir acce\u0301s aux cours, les frais mensuels sont payables avec Orange Money ou Waari."}],setTimeout(function(){a.setState({showSplash:!1})},2e3),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(p,{isVisible:this.state.showSplash}),l.a.createElement(f.a,{fluid:!0,className:"page"},l.a.createElement(C,null),l.a.createElement(w,{splashVisible:this.state.showSplash}),l.a.createElement(V,{imageData:this.imageData,splashVisible:this.state.splashVisible}),l.a.createElement(R,{countDownFrom:"April 28, 2019"}),l.a.createElement(M,null),l.a.createElement(U,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.76375f36.chunk.js.map