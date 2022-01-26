(this["webpackJsonpbox-office"]=this["webpackJsonpbox-office"]||[]).push([[0],{35:function(n,e,t){},36:function(n,e,t){"use strict";t.r(e);var r,i,c,a,s,o,d,l,b,j=t(1),p=t(16),u=t.n(p),h=t(7),x=t(2),m=t(3),f=t(5),O=t(4),g=t(17),v=t.n(g),w=Object(m.b)(v.a)(r||(r=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n"]))),y=m.b.div(i||(i=Object(O.a)(["\n  width: 300px;\n  height: 100%;\n  margin: 30px 15px 0 40px;\n\n  .img-wrapper {\n    width: 100%;\n    border-radius: 35px;\n    height: 420px;\n    overflow: hidden;\n    border: 1px solid #ddd;\n    img {\n      object-fit: cover;\n      height: 100%;\n      width: 100%;\n    }\n  }\n  h1 {\n    margin: 10px 0;\n    font-size: 21px;\n  }\n  p {\n    margin: 0;\n  }\n"]))),C=m.b.div(c||(c=Object(O.a)(["\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  background-color: ",";\n  clip-path: polygon(\n    50% 0%,\n    61% 35%,\n    98% 35%,\n    68% 57%,\n    79% 91%,\n    50% 70%,\n    21% 91%,\n    32% 57%,\n    2% 35%,\n    39% 35%\n  );\n"])),(function(n){return n.active?"#ffc806":"#ddd"})),S=Object(m.b)(y)(a||(a=Object(O.a)(["\n  .deathday {\n    margin: 0;\n    margin-top: 15px;\n    font-weight: bold;\n  }\n"]))),k=t(0),E=function(n){var e=n.image,t=n.name,r=n.gender,i=n.country,c=n.birthday,a=n.deathday;return Object(k.jsxs)(S,{children:[Object(k.jsx)("div",{className:"img-wrapper ",children:Object(k.jsx)("img",{src:e,alt:"actor"})}),Object(k.jsxs)("h1",{children:[t," ",r?"(".concat(r,")"):null]}),Object(k.jsx)("p",{children:i?"Comes from ".concat(i):"No Country Known"}),c?Object(k.jsxs)("p",{children:["Born on ",c]}):null,Object(k.jsx)("p",{className:"deathday",children:a?"Died ".concat(a):"Alive"})]})},N=t.p+"static/media/not_found.eafa331a.png",_=function(n){var e=n.data;return Object(k.jsx)(w,{children:e.map((function(n){var e=n.person;return Object(k.jsx)(E,{name:e.name,country:e.country?e.country.name:null,birthday:e.birthday,deathday:e.deathday,gender:e.gender,image:e.image?e.image.medium:N},e.id)}))})},U=t(8),D=t(23),F=["label"],H=m.b.label(s||(s=Object(O.a)(["\n  display: block;\n  position: relative;\n  padding-left: 25px;\n  cursor: pointer;\n  font-size: 13px;\n  user-select: none;\n  font-weight: 700;\n  line-height: 1.65;\n  input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n  span {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 16px;\n    width: 16px;\n    background-color: #fff;\n    border: 2px solid ",";\n    border-radius: 50%;\n  }\n  input:checked ~ span {\n    background-color: #fff;\n    border: 2px solid ",';\n  }\n  span:after {\n    content: "";\n    position: absolute;\n    display: none;\n  }\n  input:checked ~ span:after {\n    display: block;\n  }\n  span:after {\n    top: 4px;\n    left: 4px;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: ',";\n  }\n"])),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.blue})),I=function(n){var e=n.label,t=Object(D.a)(n,F);return Object(k.jsxs)(H,{htmlFor:t.id,children:[e,Object(k.jsx)("input",Object(U.a)(Object(U.a)({},t),{},{type:"radio"})),Object(k.jsx)("span",{})]})},T=Object(j.memo)(I),L=m.b.ul(o||(o=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  margin: 0 0 30px;\n  padding: 0;\n"]))),z=Object(m.b)(h.b)(d||(d=Object(O.a)(["\n  margin: 0 10px;\n  padding: 3px 15px;\n  position: relative;\n  text-decoration: none;\n  color: ",";\n  &.active {\n    color: ",';\n    &:after {\n      content: "";\n      position: absolute;\n      display: block;\n      height: 2px;\n      left: 0%;\n      bottom: 0;\n      background-color: ',";\n      animation: slide-in 0.3s ease-in forwards;\n      @keyframes slide-in {\n        from {\n          left: 50%;\n          width: 0;\n        }\n        to {\n          left: 0%;\n          width: 100%;\n        }\n      }\n    }\n  }\n"])),(function(n){return n.theme.mainColors.gray}),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.blue})),A=[{to:"/",text:"Home"},{to:"/starred",text:"starred"}],R=function(){var n=Object(x.e)();return Object(k.jsx)("div",{children:Object(k.jsx)(L,{children:A.map((function(e){return Object(k.jsx)("li",{children:Object(k.jsx)(z,{to:e.to,className:e.to===n.pathname?"active":"",children:e.text})},e.to)}))})})},J=Object(j.memo)(R),B=m.b.div(l||(l=Object(O.a)(["\n  text-align: center;\n  margin: 0 0 40px;\n  h1 {\n    color: ",";\n    letter-spacing: 10px;\n    text-transform: uppercase;\n    margin: 0 0 10px;\n  }\n  p {\n    color: ",";\n    margin: 0;\n  }\n"])),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.dark})),M=function(n){var e=n.title,t=n.subtitle;return Object(k.jsxs)(B,{children:[Object(k.jsx)("h1",{children:e}),Object(k.jsx)("p",{children:t})]})},V=Object(j.memo)(M),K=function(n){var e=n.children;return Object(k.jsxs)("div",{children:[Object(k.jsx)(V,{title:"Box Office",subtitle:"Are you looking for movie or actor?"}),Object(k.jsx)(J,{}),e]})},P=Object(m.b)(y)(b||(b=Object(O.a)(["\n  .btns {\n    margin-top: 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    a {\n      text-decoration-color: #000;\n      color: #000;\n      &:hover {\n        text-decoration-color: blue;\n        color: blue;\n      }\n    }\n    button {\n      outline: none;\n      border: 1px solid #8e8e8e;\n      border-radius: 15px;\n      padding: 5px 20px;\n      background-color: #fff;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n"]))),q=function(n){var e=n.id,t=n.name,r=n.image,i=n.summary,c=n.onStarClick,a=n.isStarred,s=i?"".concat(i.split(" ").slice(0,8).join(" ").replace(/<.+?>/g,""),"..."):"No description";return Object(k.jsxs)(P,{children:[Object(k.jsx)("div",{className:"img-wrapper",children:Object(k.jsx)("img",{src:r,alt:"show"})}),Object(k.jsx)("h1",{children:t}),Object(k.jsx)("p",{children:s}),Object(k.jsxs)("div",{className:"btns",children:[Object(k.jsx)(h.b,{to:"/show/".concat(e),children:"Read more"}),Object(k.jsx)("button",{type:"button",onClick:c,children:Object(k.jsx)(C,{active:a})})]})]})},Q=t(22),W=t(14),G=t.n(W),X=t(21),Y="https://api.tvmaze.com";function Z(n){return $.apply(this,arguments)}function $(){return($=Object(X.a)(G.a.mark((function n(e){var t;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(Y).concat(e)).then((function(n){return n.json()}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function nn(n,e){switch(e.type){case"ADD":return[].concat(Object(Q.a)(n),[e.showId]);case"REMOVE":return n.filter((function(n){return n!==e.showId}));default:return n}}function en(n,e,t){var r=Object(j.useReducer)(n,e,(function(n){var e=localStorage.getItem(t);return e?JSON.parse(e):n})),i=Object(f.a)(r,2),c=i[0],a=i[1];return Object(j.useEffect)((function(){localStorage.setItem(t,JSON.stringify(c))}),[c,t]),[c,a]}function tn(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"shows";return en(nn,[],n)}var rn=function(n,e){switch(e.type){case"FETCH_SUCCESS":return{isLoading:!1,error:null,show:e.show};case"FETCH_UNSUCCESS":return Object(U.a)(Object(U.a)({},n),{},{isLoading:!1,error:e.error});default:return n}};var cn,an,sn,on,dn,ln,bn,jn,pn,un,hn,xn,mn=function(n){var e=n.data,t=tn(),r=Object(f.a)(t,2),i=r[0],c=r[1];return Object(k.jsx)(w,{children:e.map((function(n){var e=n.show,t=i.includes(e.id),r=Object(j.useCallback)((function(){c(t?{type:"REMOVE",showId:e.id}:{type:"ADD",showId:e.id})}),[t,e.id]);return Object(k.jsx)(q,{id:e.id,name:e.name,image:e.image?e.image.medium:N,summary:e.summary,isStarred:t,onStarClick:r},e.id)}))})},fn=m.b.input(cn||(cn=Object(O.a)(['\n  display: block;\n  font-family: "Roboto", sans-serif;\n  width: 200px;\n  margin: auto;\n  outline: none;\n  padding: 13px 15px;\n  border: 1px solid #dbdbdb;\n  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);\n  font-size: 14px;\n  border-radius: 12px;\n  color: #8d8d8d;\n  &::placeholder {\n    font-weight: 300;\n    color: #8d8d8d;\n  }\n']))),On=m.b.div(an||(an=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 20px 0;\n  div {\n    margin: 0 15px;\n  }\n"]))),gn=m.b.div(sn||(sn=Object(O.a)(["\n  text-align: center;\n  margin-bottom: 35px;\n  button {\n    color: #fff;\n    background-color: ",";\n    margin: auto;\n    padding: 10px 50px;\n    font-size: 15px;\n    border: none;\n    outline: none;\n    border-radius: 12px;\n    &:hover {\n      cursor: pointer;\n    }\n  }\n"])),(function(n){return n.theme.mainColors.blue})),vn=function(n){return n&&0===n.length?Object(k.jsx)("div",{children:"No results"}):n&&n.length>0?n[0].show?Object(k.jsx)(mn,{data:n}):Object(k.jsx)(_,{data:n}):null},wn=function(){var n=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lastQuery",e=Object(j.useState)((function(){var e=sessionStorage.getItem(n);return e?JSON.parse(e):""})),t=Object(f.a)(e,2),r=t[0],i=t[1],c=Object(j.useCallback)((function(e){i(e),sessionStorage.setItem(n,JSON.stringify(e))}),[n]);return[r,c]}(),e=Object(f.a)(n,2),t=e[0],r=e[1],i=Object(j.useState)(null),c=Object(f.a)(i,2),a=c[0],s=c[1],o=Object(j.useState)("shows"),d=Object(f.a)(o,2),l=d[0],b=d[1],p="shows"===l,u=Object(j.useCallback)((function(n){r(n.target.value)}),[r]),h=function(){Z("/search/".concat(l,"?q=").concat(t)).then((function(n){s(n)}))},x=Object(j.useCallback)((function(n){b(n.target.value)}),[]);return Object(k.jsxs)(K,{children:[Object(k.jsx)(fn,{type:"text",placeholder:"Search for something",onChange:u,value:t,onKeyDown:function(n){13===n.keyCode&&h()}}),Object(k.jsxs)(On,{children:[Object(k.jsx)("div",{children:Object(k.jsx)(T,{label:"Shows",id:"show-search",value:"shows",checked:p,onChange:x})}),Object(k.jsx)("div",{children:Object(k.jsx)(T,{label:"Actors",id:"actor-search",value:"people",checked:!p,onChange:x})})]}),Object(k.jsx)(gn,{children:Object(k.jsx)("button",{type:"button",onClick:h,children:"Search"})}),vn(a)]})},yn=m.b.div(on||(on=Object(O.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  .cast-item {\n    flex: 1 0 50%;\n    display: flex;\n    margin-bottom: 20px;\n    align-items: center;\n    @media only screen and (max-width: 768px) {\n      flex: 1 0 100%;\n    }\n  }\n  .pic-wrapper {\n    width: 50px;\n    min-width: 50px;\n    height: 50px;\n    overflow: hidden;\n    border-radius: 50%;\n    img {\n      object-fit: cover;\n      width: 100%;\n      height: 100%;\n    }\n  }\n  .actor {\n    margin-left: 25px;\n    .bold {\n      font-weight: bold;\n    }\n  }\n"]))),Cn=function(n){var e=n.cast;return Object(k.jsx)(yn,{children:e.map((function(n,e){var t=n.person,r=n.character,i=n.voice;return Object(k.jsxs)("div",{className:"cast-item",children:[Object(k.jsx)("div",{className:"pic-wrapper",children:Object(k.jsx)("img",{src:t.image?t.image.medium:N,alt:"cast-person"})}),Object(k.jsx)("div",{className:"actor",children:Object(k.jsxs)("span",{children:[Object(k.jsx)("span",{className:"bold",children:t.name})," | ",r.name," ",i?"| Voice":""]})})]},e)}))})},Sn=m.b.div(dn||(dn=Object(O.a)(["\n  p {\n    margin: 5px 0;\n    span {\n      font-weight: bold;\n    }\n  }\n"]))),kn=function(n){var e=n.status,t=n.network,r=n.premiered;return Object(k.jsxs)(Sn,{children:[Object(k.jsxs)("p",{children:["Status: ",Object(k.jsx)("span",{children:e})]}),Object(k.jsxs)("p",{children:["Premiered ",r," on :",Object(k.jsx)("span",{children:t?" ".concat(t.name):null})]})]})},En=m.b.div(ln||(ln=Object(O.a)(["\n  p {\n    margin: 5px 0;\n  }\n  span {\n    font-weight: 700;\n  }\n"]))),Nn=m.b.div(bn||(bn=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  .season-item {\n    display: flex;\n    align-items: center;\n    margin: 10px 0;\n    &:last-child {\n      margin-bottom: 0;\n    }\n    .left {\n      flex: 0 0 30%;\n      border-right: 1px solid #b0b0b0;\n      padding-right: 20px;\n    }\n    .right {\n      padding-left: 20px;\n      flex: 1;\n    }\n  }\n"]))),_n=function(n){var e=n.seasons;return Object(k.jsxs)(En,{children:[Object(k.jsxs)("p",{children:["Seasons in total: ","# ",Object(k.jsx)("span",{children:e.length})]}),Object(k.jsxs)("p",{children:["Episodes in total:","# ",Object(k.jsx)("span",{children:e.reduce((function(n,e){return n+e.episodeOrder}),0)})]}),Object(k.jsx)(Nn,{children:e.map((function(n){return Object(k.jsxs)("div",{className:"season-item",children:[Object(k.jsxs)("div",{className:"left",children:[Object(k.jsxs)("p",{children:["Season :","- "," ",n.number]}),Object(k.jsxs)("p",{children:["Episodes:","- ",Object(k.jsx)("span",{children:n.episodeOrder?" ".concat(n.episodeOrder):"not found"})]})]}),Object(k.jsxs)("div",{className:"right",children:["Aired:","- ",Object(k.jsxs)("span",{children:[n.premiereDate," - ",n.endDate]})]})]},n.id)}))})]})},Un=m.b.div(jn||(jn=Object(O.a)(["\n  display: flex;\n  margin-bottom: 40px;\n  img {\n    min-width: 250px;\n    width: 300px;\n    max-height: 450px;\n    border: 1px solid #ddd;\n    border-radius: 40px;\n  }\n  .text-side {\n    margin-left: 20px;\n    .summary {\n      color: #5f5f5f;\n      line-height: 1.5;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    flex-wrap: wrap;\n    img {\n      margin-bottom: 20px;\n      margin: auto;\n    }\n    .text-side {\n      margin-left: 0;\n      margin-top: 20px;\n    }\n  }\n"]))),Dn=m.b.div(pn||(pn=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  h1 {\n    margin: 0;\n    border-right: 1px solid #ddd;\n    padding-right: 25px;\n    margin-right: 20px;\n  }\n  div {\n    display: flex;\n    align-items: center;\n    span {\n      margin-left: 10px;\n    }\n  }\n"]))),Fn=m.b.div(un||(un=Object(O.a)(["\n  display: inline-flex;\n  flex-wrap: wrap;\n  span {\n    margin: 6px;\n    margin-bottom: 0;\n    color: blue;\n    background-color: #d0c9ff;\n    padding: 3px 13px;\n    border-radius: 20px;\n    font-size: 14px;\n  }\n"]))),Hn=function(n){var e=n.name,t=n.rating,r=n.summary,i=n.tags,c=n.image;return Object(k.jsxs)(Un,{children:[Object(k.jsx)("img",{src:c?c.original:N,alt:"show-cover"}),Object(k.jsxs)("div",{className:"text-side",children:[Object(k.jsxs)(Dn,{children:[Object(k.jsx)("h1",{children:e}),Object(k.jsxs)("div",{children:[Object(k.jsx)(C,{active:!0}),Object(k.jsx)("span",{children:t.average||"N/A"})]})]}),Object(k.jsx)("div",{className:"summary",dangerouslySetInnerHTML:{__html:r}}),Object(k.jsxs)(Fn,{children:["Tags:"," ",Object(k.jsx)("div",{children:i.map((function(n,e){return Object(k.jsxs)("span",{children:["#",n]},e)}))})]})]})]})},In=m.b.div(hn||(hn=Object(O.a)(["\n  padding: 0 20px;\n  @media only screen and (min-width: 516px) {\n    padding: 0 40px;\n  }\n  @media only screen and (min-width: 768px) {\n    padding: 0 60px;\n  }\n  @media only screen and (min-width: 992px) {\n    padding: 0 80px;\n  }\n"]))),Tn=m.b.div(xn||(xn=Object(O.a)(["\n  margin-bottom: 40px;\n  h2 {\n    margin: 0;\n    margin-bottom: 30px;\n    font-size: 22px;\n  }\n"]))),Ln=function(){var n=function(n){var e=Object(j.useReducer)(rn,{show:null,isLoading:!0,error:null}),t=Object(f.a)(e,2),r=t[0],i=t[1];return Object(j.useEffect)((function(){var e=!0;return Z("/shows/".concat(n,"?embed[]=seasons&embed[]=cast")).then((function(n){e&&i({type:"FETCH_SUCCESS",show:n})})).catch((function(n){e&&i({type:"FETCH_UNSUCCESS",error:n.message})})),function(){e=!1}}),[n]),r}(Object(x.g)().id),e=n.isLoading,t=n.show,r=n.error;return e?Object(k.jsx)("div",{children:"Data is loading"}):r?Object(k.jsxs)("div",{children:["Opps Error occured: ",r]}):Object(k.jsxs)(In,{children:[Object(k.jsx)(Hn,{image:t.image,name:t.name,rating:t.rating,summary:t.summary,tags:t.genres}),Object(k.jsxs)(Tn,{children:[Object(k.jsx)("h2",{children:"Details"}),Object(k.jsx)(kn,{status:t.status,network:t.network,premiered:t.premiered})]}),Object(k.jsxs)(Tn,{children:[Object(k.jsx)("h2",{children:"Seasons"}),Object(k.jsx)(_n,{seasons:t._embedded.seasons})]}),Object(k.jsxs)(Tn,{children:[Object(k.jsx)("h2",{children:"Cast"}),Object(k.jsx)(Cn,{cast:t._embedded.cast})]})]})},zn=function(n,e){switch(e.type){case"FETCH_SUCCESS":return{isLoading:!1,error:null,show:e.show};case"FETCH_UNSUCCESS":return Object(U.a)(Object(U.a)({},n),{},{isLoading:!1,error:e.error});default:return n}},An={show:null,isLoading:!0,error:null},Rn=function(){var n=tn(),e=Object(f.a)(n,1)[0],t=Object(j.useReducer)(zn,An),r=Object(f.a)(t,2),i=r[0],c=i.isLoading,a=i.error,s=i.show,o=r[1];return Object(j.useEffect)((function(){if(e&&e.length>0){var n=e.map((function(n){return Z("/shows/".concat(n))}));Promise.all(n).then((function(n){return n.map((function(n){return{show:n}}))})).then((function(n){o({type:"FETCH_SUCCESS",show:n})})).catch((function(n){o({type:"FETCH_UNSUCCESS",error:n.message})}))}}),[e]),Object(k.jsxs)(K,{children:[c&&Object(k.jsx)("div",{children:"Shows are still loading"}),a&&Object(k.jsxs)("div",{children:["Error occured : ",a]}),!c&&!s&&Object(k.jsx)("div",{children:"No shows were added"}),!c&&!a&&s&&Object(k.jsx)(mn,{data:s})]})},Jn={mainColors:{blue:"#2400ff",gray:"#c6c6c6",dark:"#353535"}};var Bn=function(){return Object(k.jsx)(m.a,{theme:Jn,children:Object(k.jsxs)(x.c,{children:[Object(k.jsx)(x.a,{index:!0,element:Object(k.jsx)(wn,{})}),Object(k.jsx)(x.a,{path:"/starred",element:Object(k.jsx)(Rn,{})}),Object(k.jsx)(x.a,{path:"/show/:id",element:Object(k.jsx)(Ln,{})}),Object(k.jsx)(x.a,{path:"*",element:"Not Found"})]})})};t(35);u.a.render(Object(k.jsx)(h.a,{children:Object(k.jsx)(Bn,{})}),document.getElementById("root")),ServiceWorker.register()}},[[36,1,2]]]);
//# sourceMappingURL=main.fddc8445.chunk.js.map