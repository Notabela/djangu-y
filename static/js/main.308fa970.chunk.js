(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(40)},26:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),s=a.n(l),c=(a(26),a(27),a(28),a(7)),i=a(8),o=a(10),u=a(9),m=a(11),f=a(41),d=(a(29),function(){return r.a.createElement("div",{id:"splash-page"},r.a.createElement("svg",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M 50,100 A 1,1 0 0 1 50,0"})),r.a.createElement("g",null,r.a.createElement("path",{d:"M 50,75 A 1,1 0 0 0 50,-25"})),r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%"},r.a.createElement("stop",{offset:"0%",style:{stopColor:"#FF56A1",stopOpacity:"1"}}),r.a.createElement("stop",{offset:"100%",style:{stopColor:"#FF9350",stopOpacity:"1"}})))))}),p=(a(30),function(){var e={backgroundImage:"url(".concat("https://i.imgur.com/KcpM22Y.png?1",")"),backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"};return r.a.createElement("div",{className:"intro-wrapper"},r.a.createElement("div",{id:"intro",style:e},r.a.createElement("div",{id:"topic"},r.a.createElement("p",null,"Djangu-",r.a.createElement("span",{style:{color:"#379683"}},"Y")))),r.a.createElement("div",{id:"intro-courses"},r.a.createElement("p",null,r.a.createElement("strong",null,"Cours Disponibles:")),r.a.createElement("p",{className:"text-center bare-element"}," \xa0 Franc\u0327ais \xa0 Philo \xa0 H-G \xa0 Maths \xa0 SVT \xa0 PC \xa0 Anglais")))}),E=a(14),h=a.n(E),b=(a(31),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).onMessageVisible=function(e){e&&a.setState({messageVisible:e})},a.state={messageVisible:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{fluid:!0,className:"message-wrapper"},r.a.createElement("div",{id:"message",className:"text-center"},r.a.createElement(h.a,{onChange:this.onMessageVisible},r.a.createElement("p",{className:this.state.messageVisible?"animated slideInUp":"hide"},"Changer votre mani\xe8re d'apprendre ",r.a.createElement("br",null),"avec une touche de technologie"))))}}]),t}(n.Component)),g=a(42),v=a(43),x=(a(34),function(e){var t=e.imageUrl,a=e.altText,n=e.textTitle,l=e.text;return r.a.createElement(f.a,{fluid:!0},r.a.createElement(g.a,{style:{marginTop:"3%"}},r.a.createElement(v.a,{xs:"3",className:"bare-element"},r.a.createElement("img",{src:t,alt:a})),r.a.createElement(v.a,{xs:"9"},r.a.createElement(h.a,null,r.a.createElement("p",{className:"image-bullet-topics"},r.a.createElement("strong",null,n))),r.a.createElement("p",null,l))))}),y=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{fluid:!0},r.a.createElement("div",{id:"usage"},r.a.createElement("div",{className:"section-center"},r.a.createElement("h4",{className:"text-center"},"Notre approche unique: apprendre n\u2019importe ou\u0300, n\u2019importe quand"),r.a.createElement("div",{className:"image-bullets"},this.props.imageData.map(function(e,t){return r.a.createElement(x,{key:t,imageUrl:e.imgUrl,altText:e.altText,textTitle:e.textTitle,text:e.text})})))))}}]),t}(n.Component),w=a(44),S=a(45),j=a(46),N=a(47),O=(a(35),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).submitForm=function(e){e.preventDefault(),document.querySelector("#subscribe-form").reset()},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{fluid:!0,className:"contact"},r.a.createElement(g.a,null,r.a.createElement(v.a,{sm:"12",md:{size:8,offset:2},className:"text-center"},r.a.createElement("p",null,"Pour ne rien rater de l'actualie\u0301 de Djanguy ",r.a.createElement("br",null),"Abonne -toi a\u0300 notre newsletter"))),r.a.createElement(g.a,{className:"text-center"},r.a.createElement(v.a,{sm:"12",md:{size:8,offset:2}},r.a.createElement(w.a,{id:"subscribe-form",onSubmit:this.submitForm},r.a.createElement(S.a,null,r.a.createElement(j.a,{type:"text",placeholder:"Votre Nom"})),r.a.createElement(S.a,null,r.a.createElement(j.a,{type:"email",placeholder:"Votre Adresse E-mail"})),r.a.createElement(S.a,null,r.a.createElement(N.a,null,"Envoyer"))))))}}]),t}(n.Component)),k=a(16),T=(a(36),function(){return r.a.createElement(f.a,{fluid:!0,className:"footer text-center"},r.a.createElement(g.a,{id:"footer-blurb"},r.a.createElement(v.a,null,r.a.createElement("p",null,"L'e\u0301ducation par les mille\u0301niaux et pour les mille\u0301niaux"))),r.a.createElement(g.a,null,r.a.createElement(v.a,null,r.a.createElement("p",{className:"notabela"},r.a.createElement(k.a,{color:"blue"})," avec ",r.a.createElement("span",{id:"react-icon"},r.a.createElement(k.b,{color:"#00d8ff"}))," par notabela"))))}),C=(a(37),function(e){var t=e.animation,a=e.digit;return r.a.createElement("div",{className:"flipCard ".concat(t)},r.a.createElement("span",null,a))}),D=function(e){var t=e.position,a=e.digit;return r.a.createElement("div",{className:t},r.a.createElement("span",null,a))},F=function(e){var t=e.digit,a=e.shuffle,n=e.unit,l=t,s=t+1;l<10&&(l="0".concat(l)),s<10&&(s="0".concat(s));var c=a?s:l,i=a?l:s,o=a?"fold":"unfold",u=a?"unfold":"fold";return r.a.createElement("div",{className:"flipUnitContainer"},r.a.createElement(D,{position:"upperCard",digit:l}),r.a.createElement(D,{position:"lowerCard",digit:s}),r.a.createElement(C,{digit:c,animation:o}),r.a.createElement(C,{digit:i,animation:u}),r.a.createElement("div",{className:"card-label"},r.a.createElement("p",null,n)))},M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).dhm=function(e){var t=e%864e5,a=e%36e5,n=e%6e4;return{days:Math.floor(e/864e5),hours:Math.floor(t/36e5),minutes:Math.floor(a/6e4),seconds:Math.floor(n/1e3)}},a.wdhms=function(e){var t=e/1e3|0;e-=1e3*t;var a=t/60|0;t-=60*a;var n=a/60|0;a-=60*n;var r=n/24|0;n-=24*r;var l=r/7|0;return{weeks:l,days:r-=7*l,hours:n,minutes:a,seconds:t}},a.updateTime=function(){var e=new Date(a.props.dateString)-new Date;e<0&&(clearInterval(a.timerID),e=0);var t=a.wdhms(e),n=t.weeks,r=t.days,l=t.hours,s=t.minutes,c=t.seconds;if(n!==a.state.weeks){var i=!a.state.weeksShuffle;a.setState({weeks:n,weeksShuffle:i})}if(r!==a.state.days){var o=!a.state.daysShuffle;a.setState({days:r,daysShuffle:o})}if(l!==a.state.hours){var u=!a.state.hoursShuffle;a.setState({hours:l,hoursShuffle:u})}if(s!==a.state.minutes){var m=!a.state.minutesShuffle;a.setState({minutes:s,minutesShuffle:m})}if(c!==a.state.seconds){var f=!a.state.secondsShuffle;a.setState({seconds:c,secondsShuffle:f})}},a.state={weeks:0,weeksShuffle:!0,days:0,daysShuffle:!0,hours:0,hoursShuffle:!0,minutes:0,minutesShuffle:!0,seconds:0,secondsShuffle:!0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval(function(){return e.updateTime()},50)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e=this.state,t=e.weeks,a=e.days,n=e.hours,l=e.minutes,s=e.seconds,c=e.weeksShuffle,i=e.daysShuffle,o=e.hoursShuffle,u=e.minutesShuffle,m=e.secondsShuffle;return r.a.createElement(f.a,{fluid:!0,className:"flipClock"},r.a.createElement(g.a,{className:"text-center justify-content-center"},r.a.createElement(v.a,{xs:"1"},r.a.createElement(F,{unit:"sems",digit:t,shuffle:c})),r.a.createElement(v.a,{xs:"1"},r.a.createElement(F,{unit:"jours",digit:a,shuffle:i})),r.a.createElement(v.a,{xs:"1"},r.a.createElement(F,{unit:"heures",digit:n,shuffle:o})),r.a.createElement(v.a,{xs:"1"},r.a.createElement(F,{unit:"mins",digit:l,shuffle:u})),r.a.createElement(v.a,{xs:"1"},r.a.createElement(F,{unit:"secs",digit:s,shuffle:m}))))}}]),t}(r.a.Component),U=(a(38),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{fluid:!0,id:"about"},r.a.createElement(f.a,{fluid:!0},r.a.createElement(g.a,null,r.a.createElement(v.a,{id:"about-float-text",className:"text-center"},r.a.createElement("p",null,"Comment c\u0327a marche?")))),r.a.createElement(f.a,{fluid:!0,className:"text-center",id:"about-grid"},r.a.createElement(g.a,{className:"about-top"},r.a.createElement(v.a,{sm:"6",className:"about-box about-1-box"},r.a.createElement("p",{className:"about-number"},"1"),r.a.createElement("p",null,"T\xe9l\xe9charger l'application")),r.a.createElement(v.a,{sm:"6",className:"about-box about-2-box"},r.a.createElement("p",{className:"about-number"},"2"),r.a.createElement("p",null,"Payer les frais d'acce\u0301s"))),r.a.createElement(g.a,{className:"about-bottom"},r.a.createElement(v.a,{sm:"6",className:"about-box about-3-box"},r.a.createElement("p",{className:"about-number"},"3"),r.a.createElement("p",null,"Choisir son cours")),r.a.createElement(v.a,{sm:"6",className:"about-box about-4-box"},r.a.createElement("p",{className:"about-number"},"4"),r.a.createElement("p",null,"Suivre en direct le cours et revoir le ",r.a.createElement("br",null),"me\u0302me cours apre\u0301s la diffusion en direct"))),r.a.createElement(g.a,{id:"about-countdown",className:"text-center"},r.a.createElement(v.a,null,r.a.createElement("p",{id:"countdown-text"},"Jours restant avant",r.a.createElement("br",null),"le lancement de l\u2019application"),r.a.createElement(M,{dateString:this.props.countDownFrom})))))}}]),t}(n.Component)),I=(a(39),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={showSplash:!0},a.imageData=[{imgUrl:"https://i.imgur.com/lDWgCHO.png",altText:"Devices",textTitle:"Des cours de renforcement diffuse\u0301s en direct",text:"Le visionnage est possible sur votre smartphone, tablette ou ordinateur."},{imgUrl:"https://i.imgur.com/6wIb4Zr.png",altText:"Messages",textTitle:"Inte\u0301raction renforce\u0301e",text:"Tchats en temps re\u0301el et notifications sur les mises a\u0300 jour lie\u0301es au cours."},{imgUrl:"https://i.imgur.com/E9aMUBx.png",altText:"Replay",textTitle:"Fonctionnalite\u0301 Replay",text:"Les vide\u0301os des cours filme\u0301s sont toujours disponibles sur notre plateforme, 15 jours apre\u0301s la diffusion en directe."},{imgUrl:"https://i.imgur.com/bGBSGSZ.png",altText:"WiFi",textTitle:"La technologie diffusion en continu a\u0300 plusieurs de\u0301bits",text:"Gra\u0302ce a\u0300 cette fonctionnalite\u0301 la vitesse internet des participants n'a pas d'impact sur la qualite\u0301 de la vide\u0301o visionne\u0301e."},{imgUrl:"https://i.imgur.com/2dTGgZH.png",altText:"Coins",textTitle:"Flexi-paiement",text:"Et oui, les frais mensuels (10 000 FCFA) sont payables en quatre versements (versement minimum de 500 FCFA)."},{imgUrl:"https://i.imgur.com/U0HneKb.png",altText:"debit",textTitle:"Payer avec Orange Money ou Waari",text:"Pour avoir acce\u0301s aux cours, les frais mensuels sont payables avec Orange Money ou Waari."}],setTimeout(function(){a.setState({showSplash:!1})},1500),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.showSplash?r.a.createElement(d,null):r.a.createElement(f.a,{fluid:!0,className:"fade-in page"},r.a.createElement(p,null),r.a.createElement(b,null),r.a.createElement(y,{imageData:this.imageData}),r.a.createElement(U,{countDownFrom:"April 28, 2019"}),r.a.createElement(O,null),r.a.createElement(T,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.308fa970.chunk.js.map