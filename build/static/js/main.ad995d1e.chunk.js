(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{11:function(e,s,t){},19:function(e,s,t){},28:function(e,s,t){},35:function(e,s,t){},42:function(e,s,t){},43:function(e,s,t){},44:function(e,s,t){},45:function(e,s,t){},46:function(e,s,t){},65:function(e,s,t){"use strict";t.r(s);var a=t(1),c=t(29),i=t.n(c),n=(t(11),t(8)),l=t(9),r=(t(35),t(0)),o=["btn--primary","btn--outline"],j=["btn--medium","btn--large"],b=function(e){var s=e.children,t=e.type,a=e.onClick,c=e.buttonStyle,i=e.buttonSize,n=o.includes(c)?c:o[0],b=j.includes(i)?i:j[0];return Object(r.jsx)(l.b,{to:"/",className:"btn-mobile",children:Object(r.jsx)("button",{className:"btn ".concat(n," ").concat(b),onClick:a,type:t,children:s})})};t(42);var m=function(){var e=Object(a.useState)(!1),s=Object(n.a)(e,2),t=s[0],c=s[1],i=Object(a.useState)(!0),o=Object(n.a)(i,2),j=(o[0],o[1]),b=Object(a.useState)(!1),m=Object(n.a)(b,2),h=m[0],d=m[1],O=function(){return c(!1)},x=function(){window.innerWidth<=960?j(!1):j(!0)};return Object(a.useEffect)((function(){x()}),[]),window.addEventListener("resize",x),window.addEventListener("scroll",(function(){window.scrollY>=800?d(!0):d(!1)})),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("nav",{className:h?"navbar active":"navbar",children:Object(r.jsxs)("div",{className:"navbar-container",children:[Object(r.jsxs)(l.b,{to:"/",className:"navbar-logo",onClick:O,children:["SS ",Object(r.jsx)("i",{className:"fab fa-typo3"})]}),Object(r.jsx)("div",{className:"menu-icon",onClick:function(){return c(!t)},children:Object(r.jsx)("i",{className:t?"fas fa-times":"fas fa-bars"})}),Object(r.jsxs)("ul",{className:t?"nav-menu active":"nav-menu",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{href:"#My__Home",children:Object(r.jsx)("span",{className:"nav-links",onClick:O,children:"Home"})})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{href:"#About__Me",children:Object(r.jsx)("span",{className:"nav-links",onClick:O,children:"About"})})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{href:"#My__Skills",children:Object(r.jsx)("span",{className:"nav-links",onClick:O,children:"Skills"})})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{href:"#My__Projects",children:Object(r.jsx)("span",{className:"nav-links",onClick:O,children:"Projects"})})})]}),Object(r.jsx)("a",{href:"#My__Footer",children:Object(r.jsx)("span",{className:"nav-links__button",children:"CONTACT"})})]})})})},h=t(2);t(43);var d=function(){return Object(r.jsxs)("div",{className:"about-wrap",id:"About__Me",children:[Object(r.jsxs)("div",{className:"about-title",children:[Object(r.jsx)("h1",{id:"abo",children:"ABO"}),Object(r.jsx)("h1",{id:"ut-me",children:"UT ME"})]}),Object(r.jsxs)("div",{className:"about-container",children:[Object(r.jsx)("div",{className:"about-left",children:Object(r.jsx)("img",{src:"image/about-img-3.jpeg",className:"about-my-image",alt:"error"})}),Object(r.jsxs)("div",{className:"about-right",children:[Object(r.jsxs)("div",{className:"about-name",children:[Object(r.jsx)("p",{className:"start-txt",children:"Hi! I'm "}),Object(r.jsx)("h2",{className:"about-myname",children:"SATYAM SHARMA"})]}),Object(r.jsxs)("div",{className:"about-content",children:[Object(r.jsx)("p",{className:"about-para",children:"I'm a Curious Programmer & an enthusiastic developer living in ghaziabad & currently pursuing my ICE degree from NSUT, Dwarka, New Delhi."}),Object(r.jsx)("p",{className:"about-para",children:"I'm a Full-Stack Web Developer with my expertise in Redux, ReactJs, NodeJs & Firebase & currently learning MySQL and MongoDB for expertising in database management."}),Object(r.jsx)("p",{className:"about-para",children:"I'm a Results driven person & likes to satisfy my clients with my work more than excuses. I always try to explore new technologies & regularly work on my Problem Solving Skills by polishing my knowledge of Data Structures and Algorithms."}),Object(r.jsx)("button",{className:"about-btn",children:"MY RESUME"})]})]})]})]})};var O=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("li",{className:"cards__item",children:Object(r.jsxs)("a",{className:"cards__item__link",href:e.path,target:e.target,children:[Object(r.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(r.jsx)("img",{src:e.src,alt:"Error",className:"cards__item__img"})}),Object(r.jsx)("div",{className:"cards__item__info",children:Object(r.jsx)("h5",{className:"cards__item__text",children:e.text})})]})})})};t(44);var x=function(){return Object(r.jsxs)("div",{className:"cards",id:"My__Projects",children:[Object(r.jsx)("h1",{children:"MY PROJECTS "}),Object(r.jsx)("div",{className:"cards__container",children:Object(r.jsxs)("div",{className:"cards__wrapper",children:[Object(r.jsxs)("ul",{className:"cards__items",children:[Object(r.jsx)(O,{src:"image/project-img-1.png",text:"SAATHI is a professionalonline platform for all those who take their passion as a profession and need more than just one page of resume to describe their work and themselves.It's built with the framework of React.js and Firebase with proper authentication, feeds section, dynamic profile management, one-to-one chat section etc. with a highlighting feature under development.",label:"SAATHI",path:"/",target:""}),Object(r.jsx)(O,{src:"image/project-img-6.png",text:"Covid-Tracker is an API based Project which shows the spots indicating the presence of covid cases with different colors.Darker the color of spot, more the no. of cases are present in that region.It also uses Mapbox which is a custom online map provider for websites and applications. ",label:"Covid-Tracker",path:"https://github.com/heyyy-satyammm/Corona-cases-Tracker/tree/master",target:"_blank"})]}),Object(r.jsxs)("ul",{className:"cards__items",children:[Object(r.jsx)(O,{src:"image/project-img-4.png",text:"Rock-Paper-Scissors is a back-end project with a basic front-end and a strong application of javascript and its properties.The complete logic  involves an introductory page with fade-in animation, a proper score board, results as win, loss and tie possibilites and also moving animations of hands to make the game lively.",label:"ROCK-PAPER-SCISSORS",path:"https://github.com/heyyy-satyammm/Rock-Paper-Scissors/tree/master",target:"_blank"}),Object(r.jsx)(O,{src:"image/project-img-2.png",text:"It's a web version of Tinder App made with ReactJs framework including features of swiping left, right, super like and it also gives the swipe summary at the end of all profiles.The database is static and can actually become a good scale project with proper authentication and making profiles dynamic with proper database which is under development.",label:"TINDER CLONE",path:"https://github.com/heyyy-satyammm/Tinder-Clone",target:"_blank"})]}),Object(r.jsxs)("ul",{className:"cards__items",children:[Object(r.jsx)(O,{src:"image/project-img-7.png",text:"It's front-end mini-project which shows an Animation card with 3D-effects. It's a pure Javascript and CSS based project which involves a really fine quality of 3D animation when one hovers on the Card.",label:"3D CARD",path:"https://github.com/heyyy-satyammm/3D-Animation-Card",target:"_blank"}),Object(r.jsx)(O,{src:"image/project-img-5.png",text:"Ink9fable is a Portfolio website of an Artist and my recent client-based project under development.It's aims to showcase all the works of the artist so far in different fields of Art.The main focus is on front-end development and since the client is an artist himself, the bar is high. Apart from this, there is also a form section where visitors can apply for commission based hiring for their personal work.",label:"INK9FABLE",path:"/",target:""})]})]})})]})};t(45);var u=function(){return Object(r.jsxs)("div",{className:"footer-container",id:"My__Footer",children:[Object(r.jsxs)("section",{className:"footer-subscription",children:[Object(r.jsx)("p",{className:"footer-subscription-heading",children:"GET IN TOUCH"}),Object(r.jsx)("div",{className:"contact-sections",children:Object(r.jsx)("div",{className:"input-areas",children:Object(r.jsxs)("form",{action:"",children:[Object(r.jsx)("input",{type:"email",name:"email",placeholder:"Your Email",className:"footer-input"}),Object(r.jsx)("textarea",{name:"message",placeholder:"Message",className:"footer-input",cols:"30",rows:"5"}),Object(r.jsx)(b,{buttonStyle:"btn--outline",type:"reset",children:"Submit"})]})})})]}),Object(r.jsx)("section",{class:"social-media",children:Object(r.jsxs)("div",{class:"social-media-wrap",children:[Object(r.jsx)("div",{class:"footer-logo",children:Object(r.jsxs)("a",{href:"/",className:"social-logo",children:["SS",Object(r.jsx)("i",{class:"fab fa-typo3"})]})}),Object(r.jsxs)("div",{class:"social-icons",children:[Object(r.jsx)("a",{href:"https://www.facebook.com/profile.php?id=100011243261547",target:"_blank","aria-label":"Facebook",class:"social-icon-link facebook",children:Object(r.jsx)("i",{class:"fab fa-facebook-f"})}),Object(r.jsx)("a",{class:"social-icon-link instagram",href:"https://www.instagram.com/heyyy_satyammm/",target:"_blank","aria-label":"Instagram",children:Object(r.jsx)("i",{class:"fab fa-instagram"})}),Object(r.jsx)("a",{class:"social-icon-link youtube",href:"#About__Me","aria-label":"Youtube",children:Object(r.jsx)("i",{class:"fab fa-youtube"})}),Object(r.jsx)("a",{class:"social-icon-link github",href:"https://github.com/heyyy-satyammm",target:"_blank","aria-label":"Github",children:Object(r.jsx)("i",{class:"fab fa-github"})}),Object(r.jsx)("a",{class:"social-icon-link linkedin",href:"https://www.linkedin.com/in/satyam-sharma-72737a191/",target:"_blank","aria-label":"LinkedIn",children:Object(r.jsx)("i",{class:"fab fa-linkedin"})})]}),Object(r.jsx)("small",{class:"website-rights",children:"Copyright \xa9 2021 All Rights Reserved"})]})})]})};t(19),t(46);var p=function(){return Object(r.jsxs)("div",{className:"wrapper",children:[Object(r.jsx)("div",{className:"static-text",children:"I'M "}),Object(r.jsxs)("ul",{className:"dynamic-text",children:[Object(r.jsx)("li",{children:Object(r.jsx)("span",{children:"ENGINEER"})}),Object(r.jsx)("li",{children:Object(r.jsx)("span",{children:"WEB DEVELOPER"})}),Object(r.jsx)("li",{children:Object(r.jsx)("span",{children:"PROGRAMMER"})}),Object(r.jsx)("li",{children:Object(r.jsx)("span",{children:"WEB DESIGNER"})})]})]})};var g=function(){return Object(r.jsx)("div",{className:"hero-container",id:"My__Home",children:Object(r.jsxs)("div",{className:"text-content",children:[Object(r.jsx)("h3",{children:"LET'S BUILD SOMETHING "}),Object(r.jsx)("h1",{children:"AMAZING"}),Object(r.jsx)(p,{}),Object(r.jsx)("div",{className:"hero-btns",children:Object(r.jsx)("a",{href:"/",className:"first-btn",children:Object(r.jsx)("span",{className:"First_button",children:"GET STARTED"})})})]})})},f=t(13),y=t.n(f);t(28);var N=function(){var e=Object(a.useState)([]),s=Object(n.a)(e,2),t=s[0],c=s[1],i=Object(a.useState)([]),l=Object(n.a)(i,2),o=l[0],j=l[1],b=Object(a.useState)([]),m=Object(n.a)(b,2),h=m[0],d=m[1],O=Object(a.useState)(!1),x=Object(n.a)(O,2),u=x[0],p=x[1];return Object(r.jsxs)("div",{className:"git-container",children:[Object(r.jsxs)("div",{className:"git-username",children:[Object(r.jsx)("h3",{children:"heyyy-satyammm"}),Object(r.jsx)("button",{onClick:function(e){e.preventDefault(),p(!0),y()({method:"get",url:"https://api.github.com/users/heyyy-satyammm/repos"}).then((function(e){p(!1),c(e.data)})),p(!0),y()({method:"get",url:"https://api.github.com/users/heyyy-satyammm/followers"}).then((function(e){p(!1),j(e.data)})),p(!0),y()({method:"get",url:"https://api.github.com/users/heyyy-satyammm/following"}).then((function(e){p(!1),d(e.data)}))},children:u?"Loading...":"Refresh"})]}),Object(r.jsxs)("div",{className:"git-details",children:[Object(r.jsxs)("div",{className:"git-info",children:[Object(r.jsx)("h3",{children:"Repositories"}),Object(r.jsx)("p",{children:t.length})]}),Object(r.jsxs)("div",{className:"git-info",children:[Object(r.jsx)("h3",{children:"Followers"}),Object(r.jsx)("p",{children:o.length})]}),Object(r.jsxs)("div",{className:"git-info",children:[Object(r.jsx)("h3",{children:"Following"}),Object(r.jsx)("p",{children:h.length})]})]}),Object(r.jsx)("a",{href:"http://github.com/heyyy-satyammm",target:"_blank",className:"git-link",children:"My GitHub"})]})};var v=function(){return Object(r.jsxs)("div",{className:"skills-section",id:"My__Skills",children:[Object(r.jsx)("div",{className:"skills-heading",children:Object(r.jsx)("h1",{children:"MY FINEST SKILLS"})}),Object(r.jsx)("div",{className:"skills-container",children:Object(r.jsxs)("ul",{className:"honeycomb",children:[Object(r.jsxs)("li",{className:"honeycomb-cell",children:[Object(r.jsx)("img",{src:"image/skills-img-1.png",alt:"error",className:"honeycomb-cell-img"}),Object(r.jsx)("div",{className:"honeycomb-cell-title",children:"C/C++"})]}),Object(r.jsxs)("li",{className:"honeycomb-cell",children:[Object(r.jsx)("img",{src:"image/skills-img-2b.png",alt:"error",className:"honeycomb-cell-img"}),Object(r.jsx)("div",{className:"honeycomb-cell-title",children:"HTML CSS JS"})]}),Object(r.jsxs)("li",{className:"honeycomb-cell",children:[Object(r.jsx)("img",{src:"image/skills-img-3b.png",alt:"error",className:"honeycomb-cell-img"}),Object(r.jsx)("div",{className:"honeycomb-cell-title",children:"DS Algorithms"})]}),Object(r.jsxs)("li",{className:"honeycomb-cell",children:[Object(r.jsx)("img",{src:"image/skills-img-4.jpg",alt:"error",className:"honeycomb-cell-img"}),Object(r.jsx)("div",{className:"honeycomb-cell-title",children:"ReactJs"})]}),Object(r.jsxs)("li",{className:"honeycomb-cell",children:[Object(r.jsx)("img",{src:"image/skills-img-5b.jpg",alt:"error",className:"honeycomb-cell-img"}),Object(r.jsx)("div",{className:"honeycomb-cell-title",children:"Firebase"})]}),Object(r.jsxs)("li",{className:"honeycomb-cell",children:[Object(r.jsx)("img",{src:"image/skills-img-6.png",alt:"error",className:"honeycomb-cell-img"}),Object(r.jsx)("div",{className:"honeycomb-cell-title",children:"NodeJs"})]}),Object(r.jsxs)("li",{className:"honeycomb-cell",children:[Object(r.jsx)("img",{src:"image/skills-img-7b.png",alt:"error",className:"honeycomb-cell-img"}),Object(r.jsx)("div",{className:"honeycomb-cell-title",children:"MySQL"})]}),Object(r.jsx)("li",{className:"honeycomb-cell honeycomb-hidden"})]})}),Object(r.jsxs)("div",{className:"skills-footer",children:[Object(r.jsx)("p",{className:"git-heading",children:"MY GITHUB PROFILE"}),Object(r.jsx)(N,{})]})]})};var k=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(g,{}),Object(r.jsx)(d,{}),Object(r.jsx)(v,{}),Object(r.jsx)(x,{}),Object(r.jsx)(u,{})]})};var w=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(l.a,{children:[Object(r.jsx)(m,{}),Object(r.jsx)(h.c,{children:Object(r.jsx)(h.a,{path:"/",exact:!0,component:k})})]})})};i.a.render(Object(r.jsx)(w,{}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.ad995d1e.chunk.js.map