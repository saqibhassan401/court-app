(this.webpackJsonpmatchbox=this.webpackJsonpmatchbox||[]).push([[85],{3226:function(e,t,n){"use strict";n.r(t);var a=n(491),c=n(223),l=n(64),s=n(0),r=n(81),i=n(481),j=n(138),d=n(3256),b=n(905),u=n(458),o=n(493),m=n(494),O=n(807),x=n(114),h=n(500),f=n(909),v=n(215),p=n.n(v),g=(new Date).getMonth(),N=(new Date).getFullYear(),y=function(e){return p()(new Date(N,g,e)).format("DD MMMM")},D=[{date:y(2),event:[{title:"Meeting",bullet:"cyan",start:"11.00am",end:"1.00pm"}]},{date:y(5),event:[{title:"Birthday Party",bullet:"cyan",start:"11.00am",end:"1.00pm"},{title:"Designer Meeting",bullet:"red",start:"3.00pm",end:"4.00pm"}]},{date:y(20),event:[{title:"Dave ceremony",bullet:"blue",start:"2.00pm",end:"5.00pm"}]},{date:y(25),event:[{title:"Project discussion",bullet:"gold",start:"8.00pm",end:"9.00pm"}]}],w=n(518),M=n(504),E=n(2),H=r.a.Option,k=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"],C={title:"",start:p()("00:00:00","HH:mm:ss"),end:p()("00:00:00","HH:mm:ss"),bullet:k[0]},I="DD MMMM",S=function(e){var t=e.list,n=e.onDelete;return t.map((function(e){return Object(E.jsxs)("div",{className:"calendar-list",children:[Object(E.jsxs)("h4",{children:[Object(E.jsx)(w.a,{}),Object(E.jsx)("span",{className:"ml-2",children:e.date})]}),e.event.map((function(t,a){return Object(E.jsxs)("div",{className:"calendar-list-item",children:[Object(E.jsxs)("div",{className:"d-flex",children:[Object(E.jsx)(i.a,{color:t.bullet}),Object(E.jsxs)("div",{children:[Object(E.jsx)("h5",{className:"mb-1",children:t.title}),Object(E.jsxs)("span",{className:"text-muted",children:[t.start," - ",t.end]})]})]}),Object(E.jsx)("div",{className:"calendar-list-item-delete",children:Object(E.jsx)(j.a,{title:"Delete event",children:Object(E.jsx)(M.a,{onClick:function(){return n(e.date,a)}})})})]},"".concat(t.title,"-").concat(a))}))]},e.date)}))},A=function(e){var t=e.visible,n=e.addEvent,a=e.cancel,c=d.a.useForm(),j=Object(l.a)(c,1)[0];return Object(s.useEffect)((function(){j.setFieldsValue(C)})),Object(E.jsx)(b.a,{title:"New Event",visible:t,footer:null,destroyOnClose:!0,onCancel:a,children:Object(E.jsxs)(d.a,{form:j,layout:"vertical",name:"new-event",preserve:!1,onFinish:function(e){n(e)},children:[Object(E.jsx)(d.a.Item,{name:"title",label:"Title",children:Object(E.jsx)(u.a,{autoComplete:"off"})}),Object(E.jsxs)(o.a,{gutter:"16",children:[Object(E.jsx)(m.a,{span:12,children:Object(E.jsx)(d.a.Item,{name:"start",label:"Start",children:Object(E.jsx)(O.a,{className:"w-100"})})}),Object(E.jsx)(m.a,{span:12,children:Object(E.jsx)(d.a.Item,{name:"end",label:"End",children:Object(E.jsx)(O.a,{className:"w-100"})})})]}),Object(E.jsx)(d.a.Item,{name:"bullet",label:"Label",children:Object(E.jsx)(r.a,{children:k.map((function(e){return Object(E.jsxs)(H,{value:e,children:[Object(E.jsx)(i.a,{color:e}),Object(E.jsx)("span",{className:"text-capitalize font-weight-semibold",children:e})]},e)}))})}),Object(E.jsx)(d.a.Item,{className:"text-right mb-0",children:Object(E.jsx)(x.a,{type:"primary",htmlType:"submit",children:"Add Event"})})]})})};t.default=function(){var e=Object(s.useState)(D),t=Object(l.a)(e,2),n=t[0],r=t[1],j=Object(s.useState)(!1),d=Object(l.a)(j,2),b=d[0],u=d[1],O=Object(s.useState)(null),x=Object(l.a)(O,2),v=x[0],g=x[1],N=function(e){var t=[];return n.forEach((function(n){n.date===e&&(t=n.event)})),t};return Object(E.jsxs)(h.a,{className:"calendar mb-0",children:[Object(E.jsxs)(o.a,{children:[Object(E.jsxs)(m.a,{xs:24,sm:24,md:9,lg:6,children:[Object(E.jsx)("h2",{className:"mb-4",children:"Agenda"}),Object(E.jsx)(S,{list:n,onDelete:function(e,t){var a=n.map((function(n){return n.date===e&&(n.event=n.event.filter((function(e,n){return n!==t}))),n})).filter((function(e){return 0!==e.event.length}));r(a)}})]}),Object(E.jsx)(m.a,{xs:24,sm:24,md:15,lg:18,children:Object(E.jsx)(f.a,{onSelect:function(e){return function(e){var t=e.format(I);u(!0),g(t)}(e)},dateCellRender:function(e){var t=N(e.format(I));return Object(E.jsx)("ul",{className:"calendar-event",children:t.map((function(e,t){return Object(E.jsx)("li",{children:Object(E.jsx)(i.a,{color:e.bullet,text:e.title})},"".concat(e.title,"-").concat(t))}))})}})})]}),Object(E.jsx)(A,{visible:b,addEvent:function(e){var t=[{title:e.title?e.title:"Untitled Event",bullet:e.bullet,start:e.start.format("HH:mm A"),end:e.end.format("HH:mm A")}],l=n;if(l.find((function(e){return e.date===v}))){var s,i=Object(c.a)(l);try{for(i.s();!(s=i.n()).done;){var j=s.value;j.date===v&&(j.event=[].concat(Object(a.a)(j.event),t))}}catch(b){i.e(b)}finally{i.f()}}else l.push({date:v,event:t});var d=l.sort((function(e,t){return p()(e.date)-p()(t.date)}));u(!1),r(d)},cancel:function(){u(!1)}})]})}}}]);
//# sourceMappingURL=85.8a3d4afc.chunk.js.map