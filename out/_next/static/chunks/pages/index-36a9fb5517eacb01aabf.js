_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{Qetd:function(e,a,n){"use strict";var c=Object.assign.bind(Object);e.exports=c,e.exports.default=e.exports},RNiq:function(e,a,n){"use strict";n.r(a),n.d(a,"__N_SSG",(function(){return u})),n.d(a,"default",(function(){return o}));var c=n("nKUr"),t=n("q1tI"),r=n("lzdc"),i=n.n(r);function s(e){var a=e.dev;return Object(c.jsxs)("div",{className:i.a.card,children:[Object(c.jsx)("img",{src:a.avatar_url,alt:"",className:i.a.avatar}),Object(c.jsxs)("div",{className:i.a.cardBody,children:[Object(c.jsxs)("h3",{className:i.a.name,children:["@",a.login]}),Object(c.jsx)("p",{className:i.a.title,children:"Full Stack Developer"}),Object(c.jsx)("p",{className:i.a.location,children:"Bay Area, San Francisco"})]})]})}var l=function(e){var a=e.currentDevs,n=e.pageNumbers,t=e.currentPage,r=e.handleClick;return Object(c.jsxs)("div",{className:i.a.container,children:[Object(c.jsx)("div",{className:i.a.cards,children:a.map((function(e){return Object(c.jsx)("a",{href:e.html_url,title:"View in GitHub",children:Object(c.jsx)(s,{dev:e})})}))}),Object(c.jsx)("ul",{className:i.a.pagination,children:n.map((function(e,a){return Object(c.jsx)("li",{onClick:r,id:e,className:t===e?i.a.currentPage:"",children:e},a)}))})]})},d=function(){return Object(c.jsx)("header",{className:i.a.container,children:Object(c.jsx)("a",{href:"/",children:Object(c.jsx)("h1",{children:"TzDevs"})})})},u=!0;function o(e){for(var a=e.devs,n=[],r=Object(t.useState)(1),i=r[0],s=r[1],u=Object(t.useState)(15),o=u[0],j=(u[1],i*o),_=j-o,b=a.slice(_,j),h=1;h<=Math.ceil(a.length/o);h++)n.push(h);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(d,{}),Object(c.jsx)(l,{currentDevs:b,pageNumbers:n,currentPage:i,handleClick:function(e){s(Number(e.target.id))}})]})}},lzdc:function(e,a,n){e.exports={container:"Main_container__3xi4O",cards:"Main_cards__3O5iH",card:"Main_card__2m-eq",avatar:"Main_avatar__1p1_c",cardBody:"Main_cardBody__1fOHg",pagination:"Main_pagination__22bxo",currentPage:"Main_currentPage__v3Uac"}},vlRD:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1]]]);