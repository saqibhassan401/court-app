(this.webpackJsonpmatchbox=this.webpackJsonpmatchbox||[]).push([[69],{3212:function(e,t,a){"use strict";a.r(t),a.d(t,"Mail",(function(){return Q}));var s=a(17),n=a(84),r=a(85),c=a(109),i=a(110),o=a(0),l=a(572),d=a(114),h=a(185),m=a(481),p=a(456),u=a(637),b=a(464),j=a(471),f=a(597),x=a(504),y=a(54),g=a(2),v=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.match,a=e.location;return Object(g.jsxs)("div",{className:"w-100",children:[Object(g.jsx)("div",{className:"p-3",children:Object(g.jsx)(y.c,{to:"".concat(t.url,"/compose"),children:Object(g.jsxs)(d.a,{type:"primary",block:!0,children:[Object(g.jsx)(p.a,{}),Object(g.jsx)("span",{children:"Compose"})]})})}),Object(g.jsxs)(h.a,{defaultSelectedKeys:"".concat(t.url,"/inbox/1"),mode:"inline",selectedKeys:[a.pathname],children:[Object(g.jsxs)(h.a.Item,{children:[Object(g.jsx)(u.a,{}),Object(g.jsx)("span",{children:"Inbox"}),Object(g.jsx)(y.c,{to:"".concat(t.url,"/inbox")})]},"".concat(t.url,"/inbox")),Object(g.jsxs)(h.a.Item,{children:[Object(g.jsx)(b.a,{}),Object(g.jsx)("span",{children:"Sent"}),Object(g.jsx)(y.c,{to:"".concat(t.url,"/sent")})]},"".concat(t.url,"/sent")),Object(g.jsxs)(h.a.Item,{children:[Object(g.jsx)(j.a,{}),Object(g.jsx)("span",{children:"Draft"}),Object(g.jsx)(y.c,{to:"".concat(t.url,"/draft")})]},"".concat(t.url,"/draft")),Object(g.jsxs)(h.a.Item,{children:[Object(g.jsx)(f.a,{}),Object(g.jsx)("span",{children:"Starred"}),Object(g.jsx)(y.c,{to:"".concat(t.url,"/starred")})]},"".concat(t.url,"/starred")),Object(g.jsxs)(h.a.Item,{children:[Object(g.jsx)(x.a,{}),Object(g.jsx)("span",{children:"Deleted"}),Object(g.jsx)(y.c,{to:"".concat(t.url,"/deleted")})]},"".concat(t.url,"/deleted")),Object(g.jsxs)(h.a.ItemGroup,{title:"Labels",children:[Object(g.jsxs)(h.a.Item,{children:[Object(g.jsx)(m.a,{color:"blue"}),Object(g.jsx)("span",{children:"Works"}),Object(g.jsx)(y.c,{to:"".concat(t.url,"/works")})]},"".concat(t.url,"/works")),Object(g.jsxs)(h.a.Item,{children:[Object(g.jsx)(m.a,{color:"cyan"}),Object(g.jsx)("span",{children:"Private"}),Object(g.jsx)(y.c,{to:"".concat(t.url,"/private")})]},"".concat(t.url,"/private")),Object(g.jsxs)(h.a.Item,{children:[Object(g.jsx)(m.a,{color:"red"}),Object(g.jsx)("span",{children:"Important"}),Object(g.jsx)(y.c,{to:"".concat(t.url,"/important")})]},"".concat(t.url,"/important"))]})]})]})}}]),a}(o.Component),O=a(43),w=a(454),k=a(138),I=a(458),C=a(472),N=a(731),L=a(750),M=a(564),z=a(800),T=a(747),S=a(636),H=a(748),F=a(749),B=["works","private","important"],A=function(e){switch(e){case"works":return"blue";case"private":return"cyan";case"important":return"red";default:return"#ececec"}},D=function(e){switch(e){case"doc":return Object(g.jsx)(T.a,{className:"text-primary"});case"xls":return Object(g.jsx)(S.a,{className:"text-success"});case"pdf":return Object(g.jsx)(H.a,{className:"text-danger"});case"jpg":case"png":return Object(g.jsx)(F.a,{className:"text-warning"});default:return null}},E=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={mails:[],selectedRowKeys:[],searchValue:""},e.onSelectChange=function(t){e.setState({selectedRowKeys:t})},e.onStarTicked=function(t){var a=t.id,s=t.starred;e.setState({mails:e.state.mails.map((function(e){return e.id===a?(e.starred=!s,e):e}))})},e.formatBody=function(e){return e.replace(/<(?:.|\n)*?>/gm," ")},e.loadMail=function(){var t=e.getCurrentCategory();e.setState({mails:t,selectedRowKeys:[]})},e.massDeleted=function(t){var a=e.state.mails;t.forEach((function(e){a=a.filter((function(t){return t.id!==e}))})),e.setState({mails:a,selectedRowKeys:[]})},e.massStar=function(t){var a=e.state.mails;t.forEach((function(e){a=a.map((function(t){return t.id===e?(t.starred=!0,t):t}))})),e.setState({mails:a,selectedRowKeys:[]})},e.massCategorize=function(t,a){var s=e.state.mails;a.forEach((function(e){s=s.map((function(a){return a.id===e?(a.label=t,a):a}))})),e.setState({mails:s,selectedRowKeys:[]})},e.onSelectEmail=function(t){var a=e.props,s=a.match,n=a.history;return{onClick:function(e){e.preventDefault(),n.push("".concat(s.url,"/").concat(t.id))}}},e.search=function(t){var a,s=t.target.value;a=e.getCurrentCategory().filter((function(e){return""===s?e:e.name.toLowerCase().includes(s)})),e.setState({mails:a})},e.getCurrentCategory=function(){var t=e.props.match.params.category;if(B.includes(t))return z.inbox.filter((function(e){return e.label===t}));switch(t){case"inbox":return z.inbox;case"sent":return z.sent;case"draft":return z.draft;case"starred":return z.inbox.filter((function(e){return e.starred}));case"deleted":return z.deleted}},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.loadMail()}},{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&this.loadMail()}},{key:"render",value:function(){var e=this,t=this.props,a=t.match,s=t.history,n=this.state.selectedRowKeys,r={selectedRowKeys:n,onChange:this.onSelectChange},c={emptyText:Object(g.jsxs)("div",{className:"text-center my-5",children:[Object(g.jsx)("img",{src:"/img/others/img-10.png",alt:"Add credit card"}),Object(g.jsx)("h3",{className:"mt-3 font-weight-light",children:"There is no mail!"})]})},i=[{title:function(){return Object(g.jsxs)("div",{className:"mail-list-action",children:[Object(g.jsx)("div",{children:o?Object(g.jsxs)("div",{children:[Object(g.jsx)(w.a,{overlay:Object(g.jsx)(h.a,{children:B.map((function(t){return Object(g.jsxs)(h.a.Item,{onClick:function(){e.massCategorize(t,e.state.selectedRowKeys)},children:[Object(g.jsx)(m.a,{color:A(t)}),Object(g.jsx)("span",{className:"text-capitalize",children:t})]},"key-".concat(t))}))}),children:Object(g.jsx)("span",{className:"mail-list-action-icon ml-0",onClick:function(e){return e.preventDefault()},children:Object(g.jsx)(L.a,{})})}),Object(g.jsx)("span",{className:"mail-list-action-icon",onClick:function(){e.massDeleted(e.state.selectedRowKeys)},children:Object(g.jsx)(k.a,{title:"Delete",children:Object(g.jsx)(x.a,{})})}),Object(g.jsx)("span",{className:"mail-list-action-icon",onClick:function(){e.massStar(e.state.selectedRowKeys)},children:Object(g.jsx)(k.a,{title:"Star",children:Object(g.jsx)(f.a,{})})})]}):null}),Object(g.jsx)("div",{children:Object(g.jsx)(I.a,{size:"small",placeholder:"Search",onChange:function(t){e.search(t)}})})]})},colSpan:4,dataIndex:"name",className:"mail-list-sender",render:function(t,a){return Object(g.jsxs)("div",{className:"d-flex align-items-center",children:[Object(g.jsx)("div",{onClick:function(t){t.stopPropagation(),e.onStarTicked(a)},className:"mail-list-star font-size-md ".concat(a.starred?"checked":"uncheck"),children:a.starred?Object(g.jsx)(M.a,{}):Object(g.jsx)(f.a,{})}),Object(g.jsxs)("div",{className:"d-flex align-items-center",children:[Object(g.jsx)(C.a,{src:a.avatar,size:30}),Object(g.jsx)("h4",{className:"mb-0 ml-2",children:a.name})]})]})}},{title:"",colSpan:0,className:"mail-list-content",render:function(t,a){return Object(g.jsxs)("div",{className:" mail-list-content-msg",children:[Object(g.jsx)(m.a,{color:A(a.label)}),Object(g.jsx)("span",{className:"font-weight-semibold text-dark ml-1",children:a.title}),Object(g.jsx)("span",{className:"mx-2",children:" - "}),Object(g.jsx)("span",{className:"p mb-0",children:e.formatBody(a.content)})]})}},{title:"",colSpan:0,className:"mail-list-date",render:function(e,t){return Object(g.jsx)("div",{children:t.date})}}],o=n.length>0;return Object(g.jsx)("div",{className:"mail-list",children:Object(g.jsx)(N.a,{rowSelection:r,columns:i,dataSource:this.state.mails,locale:c,onRow:function(e){return{onClick:function(t){t.preventDefault(),s.push("".concat(a.url,"/").concat(e.id))}}},rowKey:"id"})})}}]),a}(o.Component),K=a(573),R=a(509),V=a(751),P=a(546),_=a(549),J=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={detail:{},starred:!1,attachment:[]},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=e.category,a=e.id,s=parseInt(a),n=(B.includes(t)?z.inbox.filter((function(e){return e.id===s})):z[t].filter((function(e){return e.id===s})))[0];this.setState({detail:n,starred:n.starred,attachment:n.attachment})}},{key:"tick",value:function(){this.setState({starred:!this.state.starred})}},{key:"back",value:function(){this.props.history.goBack()}},{key:"render",value:function(){var e=this,t=this.state.detail,a=t.name,s=t.avatar,n=t.title,r=t.date,c=t.to,i=t.content,o=this.state.attachment;return Object(g.jsxs)("div",{className:"mail-detail",children:[Object(g.jsxs)("div",{className:"d-lg-flex align-items-center justify-content-between",children:[Object(g.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[Object(g.jsx)("div",{className:"font-size-md mr-3",onClick:function(){e.back()},children:Object(g.jsx)(V.a,{className:"mail-detail-action-icon font-size-md ml-0"})}),Object(g.jsx)(R.a,{src:s,name:a,subTitle:"To: ".concat(c)})]}),Object(g.jsxs)("div",{className:"mail-detail-action mb-3",children:[Object(g.jsx)("span",{className:"mr-2 font-size-md",children:r}),Object(g.jsx)(k.a,{title:"Reply",children:Object(g.jsx)(_.a,{className:"mail-detail-action-icon",svg:K.d})}),Object(g.jsx)(k.a,{title:"Star",onClick:function(){e.tick()},children:this.state.starred?Object(g.jsx)(M.a,{className:"mail-detail-action-icon star checked"}):Object(g.jsx)(f.a,{className:"mail-detail-action-icon star"})}),o.length>0?Object(g.jsx)(k.a,{title:"Download Attachment",children:Object(g.jsx)(P.a,{className:"mail-detail-action-icon"})}):null,Object(g.jsx)(k.a,{title:"Delete",children:Object(g.jsx)(x.a,{className:"mail-detail-action-icon"})})]})]}),Object(g.jsxs)("div",{className:"mail-detail-content",children:[Object(g.jsx)("h3",{className:"mb-4",children:n}),Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:i}}),Object(g.jsx)("div",{className:"mail-detail-attactment",children:o.map((function(e,t){return Object(g.jsxs)("div",{className:"mail-detail-attactment-item",children:[Object(g.jsx)("span",{children:D(e.type)}),Object(g.jsxs)("div",{className:"ml-2",children:[Object(g.jsx)("div",{children:e.file}),Object(g.jsx)("div",{className:"text-muted font-size-sm",children:e.size})]})]},"attachment-file-".concat(t))}))})]})]})}}]),a}(o.Component),W=a(306),Y=a(3256),G=a(950),X=a.n(G),U=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).modules={toolbar:[[{header:[1,2,!1]}],["bold","italic","underline"],["image","code-block"]]},e.back=function(){e.props.history.goBack()},e.onFinish=function(t){var a=e.props.history;W.b.success("Email has been sent"),a.push("inbox")},e}return Object(r.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"mail-compose",children:[Object(g.jsx)("h4",{className:"mb-4",children:"New Message"}),Object(g.jsxs)(Y.a,{name:"nest-messages",onFinish:this.onFinish,children:[Object(g.jsx)(Y.a.Item,{name:["mail","to"],children:Object(g.jsx)(I.a,{placeholder:"To:"})}),Object(g.jsx)(Y.a.Item,{name:["mail","cc"],children:Object(g.jsx)(I.a,{placeholder:"Cc:"})}),Object(g.jsx)(Y.a.Item,{name:["mail","subject"],children:Object(g.jsx)(I.a,{placeholder:"Subject:"})}),Object(g.jsx)(Y.a.Item,{name:["mail","content"],children:Object(g.jsx)(X.a,{theme:"snow",modules:this.modules})}),Object(g.jsx)(Y.a.Item,{children:Object(g.jsxs)("div",{className:"mt-5 text-right",children:[Object(g.jsx)(d.a,{type:"link",className:"mr-2",children:"Save Darft"}),Object(g.jsx)(d.a,{className:"mr-2",onClick:this.back,children:"Discard"}),Object(g.jsx)(d.a,{type:"primary",htmlType:"submit",children:"Send"})]})})]})]})}}]),a}(o.Component),q=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.match;return Object(g.jsxs)(O.d,{children:[Object(g.jsx)(O.b,{path:"".concat(e.url,"/compose"),component:U}),Object(g.jsx)(O.b,{path:"".concat(e.url,"/:category/:id"),component:J}),Object(g.jsx)(O.b,{exact:!0,path:"".concat(e.url,"/:category"),component:E})]})}}]),a}(o.Component),Q=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"mail",children:Object(g.jsx)(l.a,{sideContent:Object(g.jsx)(v,Object(s.a)({},this.props)),mainContent:Object(g.jsx)(q,Object(s.a)({},this.props)),border:!0})})}}]),a}(o.Component);t.default=Q},509:function(e,t,a){"use strict";var s=a(17),n=(a(0),a(472)),r=a(2),c=function(e){return Object(r.jsx)(n.a,Object(s.a)(Object(s.a)({},e),{},{className:"ant-avatar-".concat(e.type),children:e.text}))};t.a=function(e){var t=e.name,a=e.suffix,s=e.subTitle,n=e.id,i=e.type,o=e.src,l=e.icon,d=e.size,h=e.shape,m=e.gap,p=e.text,u=e.onNameClick;return Object(r.jsxs)("div",{className:"avatar-status d-flex align-items-center",children:[c({icon:l,src:o,type:i,size:d,shape:h,gap:m,text:p}),Object(r.jsxs)("div",{className:"ml-2",children:[Object(r.jsxs)("div",{children:[u?Object(r.jsx)("div",{onClick:function(){return u({name:t,subTitle:s,src:o,id:n})},className:"avatar-status-name clickable",children:t}):Object(r.jsx)("div",{className:"avatar-status-name",children:t}),Object(r.jsx)("span",{children:a})]}),Object(r.jsx)("div",{className:"text-muted avatar-status-subtitle",children:s})]})]})}},549:function(e,t,a){"use strict";var s=a(0),n=a.n(s),r=a(555),c=a(2),i=n.a.forwardRef((function(e,t){return Object(c.jsx)(r.a,{component:e.svg,className:e.className})}));t.a=i},572:function(e,t,a){"use strict";var s=a(17),n=a(64),r=a(0),c=a(216),i=a(480),o=a(55),l=a(608),d=a(2),h=c.a.useBreakpoint,m=function(e){var t=e.sideContent,a=e.sideContentWidth,s=void 0===a?250:a,n=e.border;return Object(d.jsx)("div",{className:"side-content ".concat(n?"with-border":""),style:{width:"".concat(s,"px")},children:t})},p=function(e){var t=e.sideContent,a=e.visible,s=e.onSideContentClose;return Object(d.jsx)(i.a,{width:320,placement:"left",closable:!1,onClose:s,visible:a,bodyStyle:{paddingLeft:0,paddingRight:0},children:Object(d.jsx)("div",{className:"h-100",children:t})})};t.a=function(e){var t=e.mainContent,a=e.pageHeader,c=e.sideContentGutter,i=void 0===c||c,u=!o.a.getBreakPoint(h()).includes("lg"),b=Object(r.useState)(!1),j=Object(n.a)(b,2),f=j[0],x=j[1];return Object(d.jsxs)("div",{className:"inner-app-layout",children:[u?Object(d.jsx)(p,Object(s.a)({visible:f,onSideContentClose:function(e){x(!1)}},e)):Object(d.jsx)(m,Object(s.a)({},e)),Object(d.jsxs)("div",{className:"main-content ".concat(a?"has-page-header":""," ").concat(i?"gutter":"no-gutter"),children:[u?Object(d.jsx)("div",{className:"font-size-lg mb-3 ".concat(i?"":"pt-3 px-3"),children:Object(d.jsx)(l.a,{onClick:function(){x(!0)}})}):null,t]})]})}},573:function(e,t,a){"use strict";a.d(t,"d",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return c})),a.d(t,"c",(function(){return i}));a(0);var s=a(2),n=function(){return Object(s.jsx)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",children:Object(s.jsx)("path",{d:"M537.016,909.264c-7.034,0-14.006-2.372-19.671-6.97L18.508,496.986C11.232,491.055,7,482.161,7,472.781\r c0-9.374,4.232-18.267,11.508-24.204L517.345,43.272c9.318-7.551,22.258-9.104,33.064-3.959\r c10.871,5.175,17.785,16.135,17.785,28.162v219.277c243.388,16.107,436.483,219.246,436.483,466.625v62.353\r c0,12.18-7.097,23.235-18.147,28.314c-11.054,5.119-24.054,3.292-33.311-4.626l-52.55-45.027\r c-93.318-79.986-210.359-126.841-332.476-133.66v217.36c0,12.022-6.914,22.986-17.785,28.158\r C546.146,908.262,541.58,909.268,537.016,909.264L537.016,909.264z M125.715,472.781L506.65,782.309V614.776\r c0-15.697,12.702-28.401,28.399-28.401c134.946,0,265.707,48.367,368.18,136.193l0.972,0.834\r c-2.664-201.286-167.231-364.213-369.148-364.213c-15.699,0-28.4-12.704-28.4-28.399V163.258\r C506.65,163.258,125.715,472.781,125.715,472.781L125.715,472.781z"})})},r=function(){return Object(s.jsx)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",children:Object(s.jsxs)("g",{children:[Object(s.jsx)("path",{fill:"#59C36A",d:"M827.301,875.968c-84.521,71.388-194.169,116.693-313.528,116.693c-177.609,0-333.52-97.848-418.041-240.62\r l31.646-145.858l140.255-26.039c32.553,105.078,130.779,182.178,246.141,182.178c55.964,0,107.937-17.703,150.767-49.112\r l134.777,20.558L827.301,875.968z"}),Object(s.jsx)("path",{fill:"#00A66C",d:"M827.301,875.968l-27.984-142.201l-134.777-20.558c-42.83,31.409-94.803,49.112-150.767,49.112v230.34\r C633.132,992.661,742.779,947.355,827.301,875.968z"}),Object(s.jsx)("g",{id:"Connected_Home_1_",children:Object(s.jsx)("g",{children:Object(s.jsx)("g",{children:Object(s.jsx)("g",{children:Object(s.jsx)("path",{fill:"#FFDA2D",d:"M256.781,505.331c0,26.267,3.998,51.396,10.851,74.813l-171.9,171.897\r c-42.83-71.957-69.29-156.48-69.29-246.71c0-90.233,26.46-174.754,69.29-246.711l137.965,23.743l33.936,148.154\r C260.779,453.932,256.781,479.06,256.781,505.331L256.781,505.331z"})})})})}),Object(s.jsx)("path",{fill:"#4086F4",d:"M1001.103,505.331c0,148.48-68.719,281.547-173.802,370.637L664.539,713.209\r c33.121-23.988,61.107-55.971,79.384-93.66h-230.15c-15.993,0-28.556-12.567-28.556-28.554V419.666\r c0-15.99,12.563-28.554,28.556-28.554h450.78c13.707,0,25.698,9.708,27.983,23.412\r C998.247,444.225,1001.103,475.063,1001.103,505.331L1001.103,505.331z"}),Object(s.jsx)("path",{fill:"#4175DF",d:"M743.924,619.549c-18.275,37.689-46.264,69.672-79.382,93.66l162.759,162.759\r c105.083-89.09,173.802-222.153,173.802-370.637c0-30.269-2.855-61.106-8.567-90.807c-2.284-13.704-14.278-23.412-27.984-23.412\r H513.772v228.437H743.924z"}),Object(s.jsx)("path",{fill:"#FF641A",d:"M835.297,154.107c0.571,7.996-2.855,15.422-7.996,21.131L705.086,296.881\r c-9.704,10.278-25.694,11.421-37.118,2.855c-45.119-33.693-98.231-51.396-154.195-51.396\r c-115.361,0-213.588,77.095-246.141,182.178L95.731,258.62C180.253,115.848,336.163,18,513.772,18\r c113.647,0,224.439,41.88,311.244,114.978C831.298,138.119,834.723,146.112,835.297,154.107L835.297,154.107z"}),Object(s.jsx)("path",{fill:"#F03800",d:"M667.966,299.736c11.422,8.567,27.411,7.423,37.119-2.855l122.214-121.643\r c5.143-5.709,8.569-13.133,7.996-21.131c-0.575-7.997-3.999-15.988-10.279-21.13C738.212,59.88,627.42,18,513.772,18v230.34\r C569.736,248.34,622.849,266.043,667.966,299.736z"})]})})},c=function(){return Object(s.jsx)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",children:Object(s.jsxs)("g",{children:[Object(s.jsx)("path",{fill:"#4A7AFF",d:"M1015.363,506.525c0,279.749-226.775,506.524-506.525,506.524c-279.749,0-506.524-226.775-506.524-506.524\r C2.313,226.775,229.089,0,508.838,0C788.588,0,1015.363,226.775,1015.363,506.525z"}),Object(s.jsx)("path",{fill:"#FFFFFF",d:"M663.688,149.015v114.697c0,0-131.686-19.113-131.686,65.843v84.957h118.941L636.08,544.072H532.002v337.709\r H400.316V544.072l-112.572-2.126V414.512H398.19V316.81c0,0-7.288-145.343,135.938-172.038\r C593.602,133.68,663.688,149.015,663.688,149.015z"}),Object(s.jsx)("path",{fill:"#DCE1EB",d:"M663.688,263.712V149.015c0,0-70.086-15.335-129.56-4.243c-9.291,1.73-17.932,3.973-25.993,6.623v730.387\r h23.867V544.072h104.07l14.871-129.561H532.002c0,0,0,0,0-84.957C532.002,244.599,663.688,263.712,663.688,263.712z"})]})})},i=function(){return Object(s.jsx)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",children:Object(s.jsxs)("g",{children:[Object(s.jsx)("g",{children:Object(s.jsx)("path",{fill:"#E5E1E5",d:"M163.033,1011.756L2.746,191.353c-4.863-24.879,11.365-48.991,36.245-53.852l124.042-24.234l194.642-42.82\r l279.663,941.308H163.033V1011.756z"})}),Object(s.jsx)("path",{fill:"#99E6FC",d:"M163.033,680.979L68.355,196.393l94.678-18.501l143.802-23.615l62.994,584.599L163.033,680.979z"}),Object(s.jsxs)("g",{id:"XMLID_159_",children:[Object(s.jsx)("g",{children:Object(s.jsx)("path",{fill:"#F9F7F8",d:"M1014.357,64.9v957.461c0,25.351-20.549,45.899-45.899,45.899H208.93\r c-25.351,0-45.901-20.549-45.901-45.899V64.9c0-25.35,20.551-45.9,45.901-45.9h759.528C993.809,19,1014.357,39.551,1014.357,64.9\r z"})}),Object(s.jsx)("path",{fill:"#EFEDEF",d:"M574.473,971.206c-90.848,0-164.495-73.646-164.495-164.493V19H208.93\r c-25.351,0-45.901,20.551-45.901,45.9v957.461c0,25.351,20.551,45.899,45.901,45.899h759.528\r c25.351,0,45.899-20.549,45.899-45.899v-51.155H574.473z"}),Object(s.jsx)("path",{fill:"#FEC165",d:"M950.933,737.554V234.861c0-7.122-5.774-12.896-12.897-12.896H239.354c-7.12,0-12.896,5.774-12.896,12.896\r v502.692H950.933z"}),Object(s.jsx)("path",{fill:"#FDB441",d:"M409.978,221.965H239.354c-7.12,0-12.896,5.774-12.896,12.896v502.692h183.52V221.965z"}),Object(s.jsx)("circle",{fill:"#FEE903",cx:"588.693",cy:"600.309",r:"246.948"}),Object(s.jsx)("path",{fill:"#F4D902",d:"M409.978,770.729V429.889c-42.274,44.316-68.229,104.339-68.229,170.419\r C341.748,666.391,367.703,726.41,409.978,770.729z"}),Object(s.jsxs)("g",{children:[Object(s.jsx)("path",{fill:"#99E6FC",d:"M902.813,668.316c-57.591-25.393-122.604-28.267-182.203-8.034l-51.163,17.336\r c-52.369,17.759-109.135,17.759-161.505,0l-51.163-17.336c-59.602-20.232-124.611-17.358-182.182,8.034l-48.142,21.226v105.269\r l80.12,33.354h599.658l44.699-33.354V689.542L902.813,668.316z"}),Object(s.jsx)("path",{fill:"#62DBFB",d:"M409.978,828.165V649.264c-45.72-6.239-92.605,0.184-135.379,19.053l-48.141,21.226v105.269\r l80.119,33.354H409.978z"}),Object(s.jsx)("path",{fill:"#62DBFB",d:"M950.933,794.811v61.709c0,5.452-4.424,9.878-9.879,9.878H236.332c-5.453,0-9.877-4.426-9.877-9.878\r v-61.709l48.142-21.229c57.57-25.39,122.58-28.268,182.182-8.055l51.163,17.358c52.37,17.759,109.136,17.759,161.505,0\r l51.163-17.358c59.6-20.213,124.612-17.335,182.203,8.055L950.933,794.811z"}),Object(s.jsx)("path",{fill:"#01D0FB",d:"M236.332,866.397h184.86c-7.214-18.51-11.215-38.625-11.215-59.685v-52.188\r c-45.72-6.231-92.605,0.192-135.379,19.061l-48.141,21.226v61.71c-0.003,5.451,4.421,9.875,9.874,9.875V866.397z"})]})]})]})})}},800:function(e){e.exports=JSON.parse('{"inbox":[{"id":1,"name":"Eileen Horton","label":"","starred":true,"avatar":"/img/avatars/thumb-1.jpg","title":"An \'extremely credible source\'","date":"12:06PM","to":"nathan@themenate.com","content":"<p>Hi Nathan,</p><p>An \'extremely credible source\' has called my office and told me that Barack Obama\'s placeholder text is a fraud. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen.</p><p>This can\'t be! Artoo, you\'re playing the wrong message. There will be no bargain. We\'re doomed. I will not give up my favorite decoration. I like Captain Solo where he is. Artoo, look! Captain Solo. And he\'s still frozen in carbonite. What could possibly have come over Master Luke. Is it something I did? He never expressed any unhappiness with my work. Oh! Oh! Hold it! Ohh!</p><p> <br>Your fleet has lost. And your friends on the Endor moon will not survive. There is no escape, my young apprentice. <br><br><br>Moruth Doole, <br></p>","checked":false,"attachment":[{"file":"Prospectus.doc","size":"1MB","type":"doc"},{"file":"Financial_Report.xls","size":"652KB","type":"xls"}]},{"id":2,"name":"Terrance Moreno","label":"works","starred":false,"avatar":"/img/avatars/thumb-2.jpg","title":"Lorem Ipsum is FAKE TEXT!","date":"9:35PM","to":"nathan@themenate.com","content":"<p>Hi Nathan,</p><p>All of the words in Lorem Ipsum have flirted with me - consciously or unconsciously. That\'s to be expected. We have so many things that we have to do better</p> <p>The concept of Lorem Ipsum was created by and for the Chinese in order to make U.S. design jobs non-competitive. I think my strongest asset maybe by far is my temperament. I have a placeholding temperament. The other thing with Lorem Ipsum is that you have to take out its family. The other thing with Lorem Ipsum is that you have to take out its family.</p><p>An \u2018extremely credible source\' has called my office and told me that Barack Obama\'s placeholder text is a fraud. Lorem Ipsum is unattractive, both inside and out. I fully understand why it\'s former users left it for something else. They made a good decision.</p><br/><p>Terrance Moreno<br/> Chief Officer</p>","checked":false,"attachment":[{"file":"Prospectus.pdf","size":"219KB","type":"pdf"},{"file":"Company_img.jpg","size":"152KB","type":"jpg"}]},{"id":3,"name":"Ron Vargas","label":"private","starred":false,"avatar":"/img/avatars/thumb-3.jpg","title":"My text is long and beautiful","date":"8:16am","to":"nathan@themenate.com","content":"<p>Hi Nathan,</p><p>I think my strongest asset maybe by far is my temperament. I have a placeholding temperament. When other websites give you text, they\'re not sending the best.</p> <p>I\'m the best thing that ever happened to placeholder text. All of the words in Lorem Ipsum have flirted with me - consciously or unconsciously. That\'s to be expected. I will write some great placeholder text \u2013 and nobody writes better placeholder text than me, believe me \u2013 and I\'ll write it very inexpensively. I will write some great, great text on your website\'s Southern border, and I will make Google pay for that text. Mark my words. All of the words in Lorem Ipsum have flirted with me - consciously or unconsciously. That\'s to be expected. Look at these words. Are they small words? And he referred to my words - if they\'re small, something else must be small. I guarantee you there\'s no problem, I guarantee.</p><p>The other thing with Lorem Ipsum is that you have to take out its family. You\'re telling the enemy exactly what you\'re going to do. No wonder you\'ve been fighting Lorem Ipsum your entire adult life.</p><br /><p><strong class=\'text-dark\'>Ron Vargas</strong><br />Sales & Marketing Director</p>","checked":false,"attachment":[{"file":"Presentation.pdf","size":"3.2MB","type":"pdf"}]},{"id":4,"name":"Luke Cook","label":"work","starred":false,"avatar":"/img/avatars/thumb-4.jpg","title":"They\'re bringing mistakes","date":"Feb 3","to":"nathan@themenate.com","content":"<p>Dear Nathan,</p><p>Despite the constant negative ipsum covfefe. You have so many different things placeholder text has to be able to do, and I don\'t believe Lorem Ipsum has the stamina. I know words. I have the best words. If Trump Ipsum weren\'t my own words, perhaps I\'d be dating it.</p><br /><p><strong class=\'text-dark\'>Luke Cook</strong><br />Sales & Marketing Director</p>","checked":false,"attachment":[{"file":"Prospectus.pdf","size":"219KB","type":"pdf"},{"file":"Company_img.jpg","size":"152KB","type":"jpg"}]},{"id":5,"name":"Joyce Freeman","label":"important","starred":false,"avatar":"/img/avatars/thumb-5.jpg","title":"I don\'t think anybody knows","date":"Feb 2","to":"nathan@themenate.com","content":"<p>Hi Nathan,</p><p>Some people have an ability to write placeholder text... It\'s an art you\'re basically born with. You either have it or you don\'t. I was going to say something extremely rough to Lorem Ipsum, to its family, </p><p>Trump Ipsum is calling for a total and complete shutdown of Muslim text entering your website. He\'s not a word hero. He\'s a word hero because he was captured. I like text that wasn\'t captured. You have so many different things placeholder text has to be able to do, and I don\'t believe Lorem Ipsum has the stamina. When other websites give you text, they\'re not sending the best. They\'re not sending you, they\'re sending words that have lots of problems and they\'re bringing those problems with us. They\'re bringing mistakes. They\'re bringing misspellings. They\'re typists\u2026 And some, I assume, are good words.</p><br /><p><strong class=\'text-dark\'>Joyce Freeman</strong><br />Chief Technical Officer</p>","checked":false,"attachment":[]},{"id":6,"name":"Samantha Phillips","label":"","starred":true,"avatar":"/img/avatars/thumb-6.jpg","title":"Lorem Ipsum is unattractive","date":"Jan 30","to":"nathan@themenate.com","content":"<p>Hi Nathan,</p><p> I fully understand why it\'s former users left it for something else. They made a good decision. Be careful, or I will spill the beans on your placeholder text.</p><br /><p><strong class=\'text-dark\'>Samantha Phillips</strong><br />Normal Crew</p>","checked":false,"attachment":[]},{"id":7,"name":"Tara Fletcher","label":"works","starred":false,"avatar":"/img/avatars/thumb-7.jpg","title":"He\'s not a word hero","date":"Jan 28","to":"nathan@themenate.com","content":"<p>Hi Nathan,</p><p>He\'s a word hero because he was captured. I like text that wasn\'t captured. I think the only difference between me and the other placeholder text is that I\'m more honest and my words are more beautiful. </p><p>Lorem Ipsum\'s father was with Lee Harvey Oswald prior to Oswald\'s being, you know, shot. All of the words in Lorem Ipsum have flirted with me - consciously or unconsciously. That\'s to be expected. I was going to say something extremely rough to Lorem Ipsum, to its family, and I said to myself, \'I can\'t do it. I just can\'t do it. It\'s inappropriate. It\'s not nice.\'</p><br /><p><strong class=\'text-dark\'>Tara Fletcher</strong><br />CFO</p>","checked":false,"attachment":[{"file":"Family.jpg","size":"2.1MB","type":"jpg"},{"file":"Brotherhood.jpg","size":"1.9MB","type":"jpg"}]},{"id":8,"name":"Lisa Smith","label":"","starred":false,"avatar":"/img/avatars/thumb-8.jpg","title":"I love Hispanics","date":"Jan 27","to":"nathan@themenate.com","content":"<p>Hi Nathan,</p><p>An \'extremely credible source\' has called my office and told me that Lorem Ipsum\'s birth certificate is a fraud. I\'m the best thing that ever happened to placeholder text. That other text? Sadly, it\'s no longer a 10. I know words. I have the best words.</p><p>Trump Ipsum is calling for a total and complete shutdown of Muslim text entering your website. Lorem Ipsum\'s father was with Lee Harvey Oswald prior to Oswald\'s being, you know, shot. We have so many things that we have to do better... and certainly ipsum is one of them. An \'extremely credible source\' has called my office and told me that Lorem Ipsum\'s birth certificate is a fraud.</p><p>An \u2018extremely credible source\' has called my office and told me that Barack Obama\'s placeholder text is a fraud. Lorem Ipsum is unattractive, both inside and out. I fully understand why it\'s former users left it for something else. They made a good decision.</p><br /><p><strong class=\'text-dark\'>Lisa Smith</strong><br />Sales & Marketing Director</p>","checked":false,"attachment":[{"file":"Prospectus.doc","size":"1MB","type":"doc"},{"file":"Financial_Report.xls","size":"652KB","type":"xls"}]},{"id":9,"name":"Carolyn Hanson","label":"important","starred":false,"avatar":"/img/avatars/thumb-9.jpg","title":"Greater than ever before","date":"Jan 26","to":"nathan@themenate.com","content":"<p>Hi Nathan,</p><p>I was going to say something extremely rough to Lorem Ipsum, to its family, and I said to myself, \'I can\'t do it. I just can\'t do it. It\'s inappropriate. It\'s not nice.\' Lorem Ispum is a choke artist. It chokes! You could see there was text coming out of her eyes, text coming out of her wherever.</p><p>The other thing with Lorem Ipsum is that you have to take out its family. Lorem Ipsum better hope that there are no \'tapes\' of our conversations before he starts leaking to the press! I know words. I have the best words. Lorem Ipsum is FAKE TEXT! My text is long and beautiful, as, it has been well documented, are various other parts of my website. Trump Ipsum is calling for a total and complete shutdown of Muslim text entering your website.</p><br /><p><strong class=\'text-dark\'>Carolyn Hanson</strong><br />Sales & Marketing Executive</p>","checked":false,"attachment":[{"file":"Prospectus.doc","size":"1MB","type":"doc"},{"file":"Financial_Report.xls","size":"652KB","type":"xls"}]},{"id":10,"name":"Brittany Hale","label":"","starred":false,"avatar":"/img/avatars/thumb-10.jpg","title":"I will write some great placeholder","date":"Jan 26","to":"nathan@themenate.com","content":"<p>Hi Nathan,</p><p>Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen. I write the best placeholder text, and I\'m the biggest developer on the web by far... While that\'s mock-ups and this is politics, are they really so different?</p><p>I\'m speaking with myself, number one, because I have a very good brain and I\'ve said a lot of things. I\u2019m the best thing that ever happened to placeholder text. The best taco bowls are made in Trump Tower Grill. I love Hispanics! Lorem Ipsum is FAKE TEXT!</p><p>The best taco bowls are made in Trump Tower Grill. I love Hispanics! Look at these words. Are they small words? And he referred to my words - if they\'re small, something else must be small. I guarantee you there\'s no problem, I guarantee.</p><br /><p><strong class=\'text-dark\'>Brittany Hale</strong><br />Sales & Marketing Executive</p>","checked":false,"attachment":[]}],"sent":[{"id":519,"name":"Lisa Smith","label":"","starred":false,"avatar":"/img/avatars/thumb-8.jpg","title":"Despite the constant ","date":"7:11PM","to":"iamlisa@imaze.infotech.io","content":"<p>Hey Lisa,</p><p>Lorem Ispum is a choke artist. It chokes! I was going to say something extremely rough to Lorem Ipsum, to its family, and I said to myself.</p>","checked":false,"attachment":[{"file":"Prospectus.doc","size":"1MB","type":"doc"},{"file":"Financial_Report.xls","size":"652KB","type":"xls"}]}],"draft":[],"deleted":[],"starred":[{"id":1,"name":"Eileen Horton","label":"","starred":true,"avatar":"/img/avatars/thumb-1.jpg","title":"An \'extremely credible source\'","date":"12:06PM","to":"nathan@themenate.com","content":"<p>Hi Nathan,</p><p>An \'extremely credible source\' has called my office and told me that Barack Obama\'s placeholder text is a fraud. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen.</p><p>This can\'t be! Artoo, you\'re playing the wrong message. There will be no bargain. We\'re doomed. I will not give up my favorite decoration. I like Captain Solo where he is. Artoo, look! Captain Solo. And he\'s still frozen in carbonite. What could possibly have come over Master Luke. Is it something I did? He never expressed any unhappiness with my work. Oh! Oh! Hold it! Ohh!</p><p> <br>Your fleet has lost. And your friends on the Endor moon will not survive. There is no escape, my young apprentice. <br><br><br>Moruth Doole, <br></p>","checked":false,"attachment":[{"file":"Prospectus.doc","size":"1MB","type":"doc"},{"file":"Financial_Report.xls","size":"652KB","type":"xls"}]},{"id":6,"name":"Samantha Phillips","label":"","starred":true,"avatar":"/img/avatars/thumb-6.jpg","title":"Lorem Ipsum is unattractive","date":"Jan 30","to":"nathan@themenate.com","content":"<p>Hi Nathan,</p><p> I fully understand why it\'s former users left it for something else. They made a good decision. Be careful, or I will spill the beans on your placeholder text.</p><br /><p><strong class=\'text-dark\'>Samantha Phillips</strong><br />Normal Crew</p>","checked":false,"attachment":[]}]}')}}]);
//# sourceMappingURL=69.f9b8000d.chunk.js.map