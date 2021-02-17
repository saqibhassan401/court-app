(this.webpackJsonpmatchbox=this.webpackJsonpmatchbox||[]).push([[76],{3245:function(e,t,n){"use strict";n.r(t);var o=n(17),a=n(0),c=n(185),i=n(54),s=n(572),r=n(43),u=n(87),l=n(2),m=[{name:"Introduction",key:"introduction",sub:[]},{name:"Product Content",key:"product-content",sub:[]},{name:"Folder Structure",key:"folder-structure",sub:[]},{name:"Layout Overview",key:"layout-overview",sub:[]},{name:"Installation",key:"installation",sub:[]},{name:"TemplateSetting",key:"template-setting",sub:[]},{name:"Routing",key:"routing",sub:[]},{name:"Authentication",key:"authentication",sub:[{name:"JWT",key:"jwt",sub:[]},{name:"Firebase",key:"firebase",sub:[]}]},{name:"Localization",key:"localization",sub:[]},{name:"Components",key:"components",sub:[{name:"AvatarStatusDemo",key:"avatar-status-demo",sub:[]},{name:"ChartWidgetDemo",key:"chart-widget-demo",sub:[]},{name:"CustomStatisticDemo",key:"custom-statistic-demo",sub:[]},{name:"ColorPickerDemo",key:"color-picker-demo",sub:[]},{name:"DataDisplayWidgetDemo",key:"data-display-demo",sub:[]},{name:"DonutChartWidgetDemo",key:"donut-chart-Widget-demo",sub:[]},{name:"EllipsisDropdownDemo",key:"ellipsis-dropdown-demo",sub:[]},{name:"FlexDemo",key:"flex-demo",sub:[]},{name:"GoalWidgetDemo",key:"goal-widget-demo",sub:[]},{name:"LoadingDemo",key:"loading-demo",sub:[]},{name:"RegiondataWidgetDemo",key:"regiondata-widget-demo",sub:[]},{name:"StatisticWidgetDemo",key:"statistic-widget-demo",sub:[]},{name:"CustomIconDemo",key:"custom-icon-demo",sub:[]}]},{name:"UtilityClasses",key:"utility-classes",sub:[]},{name:"Changelog",key:"changelog",sub:[]}],d="documentation/",j=function(e){var t=e.match,n=e.location;return Object(l.jsx)("div",{className:"w-100",children:Object(l.jsx)(c.a,{defaultSelectedKeys:"".concat(t.url,"/").concat(d,"introduction"),mode:"inline",selectedKeys:[n.pathname],children:m.map((function(e){return 0===e.sub.length?Object(l.jsxs)(c.a.Item,{children:[Object(l.jsx)("span",{children:e.name}),Object(l.jsx)(i.c,{to:"".concat(t.url,"/").concat(d).concat(e.key)})]},"".concat(t.url,"/").concat(d).concat(e.key)):Object(l.jsx)(c.a.SubMenu,{title:e.name,children:e.sub.map((function(e){return Object(l.jsxs)(c.a.Item,{children:[Object(l.jsx)("span",{children:e.name}),Object(l.jsx)(i.c,{to:"".concat(t.url,"/").concat(d).concat(e.key)})]},"".concat(t.url,"/").concat(d).concat(e.key))}))},"".concat(t.url,"/").concat(d).concat(e.key))}))})})};t.default=function(e){var t=e.match;return Object(l.jsx)(s.a,{sideContent:Object(l.jsx)(j,Object(o.a)({},e)),mainContent:Object(l.jsx)("div",{className:"p-4",children:Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsx)(a.Suspense,{fallback:Object(l.jsx)(u.a,{}),children:Object(l.jsxs)(r.d,{children:[m.map((function(e){return 0===e.sub.length?Object(l.jsx)(r.b,{path:"".concat(t.url,"/").concat(d).concat(e.key),component:Object(a.lazy)((function(){return n(788)("./".concat(e.name.replace(/\s/g,"")))}))},e.key):e.sub.map((function(e){return Object(l.jsx)(r.b,{path:"".concat(t.url,"/").concat(d).concat(e.key),component:Object(a.lazy)((function(){return n(788)("./".concat(e.name.replace(/\s/g,"")))}))},e.key)}))})),Object(l.jsx)(r.a,{from:"".concat(t.url),to:"".concat(t.url,"/").concat(d,"introduction")})]})})})}),sideContentWidth:300,sideContentGutter:!1,border:!0})}},572:function(e,t,n){"use strict";var o=n(17),a=n(64),c=n(0),i=n(216),s=n(480),r=n(55),u=n(608),l=n(2),m=i.a.useBreakpoint,d=function(e){var t=e.sideContent,n=e.sideContentWidth,o=void 0===n?250:n,a=e.border;return Object(l.jsx)("div",{className:"side-content ".concat(a?"with-border":""),style:{width:"".concat(o,"px")},children:t})},j=function(e){var t=e.sideContent,n=e.visible,o=e.onSideContentClose;return Object(l.jsx)(s.a,{width:320,placement:"left",closable:!1,onClose:o,visible:n,bodyStyle:{paddingLeft:0,paddingRight:0},children:Object(l.jsx)("div",{className:"h-100",children:t})})};t.a=function(e){var t=e.mainContent,n=e.pageHeader,i=e.sideContentGutter,s=void 0===i||i,b=!r.a.getBreakPoint(m()).includes("lg"),g=Object(c.useState)(!1),h=Object(a.a)(g,2),y=h[0],p=h[1];return Object(l.jsxs)("div",{className:"inner-app-layout",children:[b?Object(l.jsx)(j,Object(o.a)({visible:y,onSideContentClose:function(e){p(!1)}},e)):Object(l.jsx)(d,Object(o.a)({},e)),Object(l.jsxs)("div",{className:"main-content ".concat(n?"has-page-header":""," ").concat(s?"gutter":"no-gutter"),children:[b?Object(l.jsx)("div",{className:"font-size-lg mb-3 ".concat(s?"":"pt-3 px-3"),children:Object(l.jsx)(u.a,{onClick:function(){p(!0)}})}):null,t]})]})}},608:function(e,t,n){"use strict";var o=n(0),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]},name:"menu",theme:"outlined"},c=n(11),i=function(e,t){return o.createElement(c.a,Object.assign({},e,{ref:t,icon:a}))};i.displayName="MenuOutlined";t.a=o.forwardRef(i)},788:function(e,t,n){var o={"./AvatarStatusDemo":[877,1,0,18],"./AvatarStatusDemo.js":[877,1,0,18],"./Changelog":[878,38],"./Changelog.js":[878,38],"./ChartWidgetDemo":[879,1,0,5,23,24],"./ChartWidgetDemo.js":[879,1,0,5,23,24],"./ColorPickerDemo":[880,1,0,25],"./ColorPickerDemo.js":[880,1,0,25],"./ComponentIntro":[499,39],"./ComponentIntro.js":[499,39],"./CustomIconDemo":[881,1,0,20],"./CustomIconDemo.js":[881,1,0,20],"./CustomStatisticDemo":[882,1,0,21],"./CustomStatisticDemo.js":[882,1,0,21],"./DataDisplayWidgetDemo":[883,1,0,16],"./DataDisplayWidgetDemo.js":[883,1,0,16],"./DonutChartWidgetDemo":[884,1,0,5,14],"./DonutChartWidgetDemo.js":[884,1,0,5,14],"./EllipsisDropdownDemo":[885,1,0,22],"./EllipsisDropdownDemo.js":[885,1,0,22],"./Firebase":[886,0,31],"./Firebase.js":[886,0,31],"./FlexDemo":[887,1,0,26],"./FlexDemo.js":[887,1,0,26],"./FolderStructure":[888,4,10,40],"./FolderStructure.js":[888,4,10,40],"./GoalWidgetDemo":[889,1,0,30,28],"./GoalWidgetDemo.js":[889,1,0,30,28],"./Installation":[890,41],"./Installation.js":[890,41],"./Introduction":[891,42],"./Introduction.js":[891,42],"./JWT":[892,0,32],"./JWT.js":[892,0,32],"./LayoutOverview":[893,43],"./LayoutOverview.js":[893,43],"./LoadingDemo":[894,1,0,27],"./LoadingDemo.js":[894,1,0,27],"./Localization":[895,0,4,10,33],"./Localization.js":[895,0,4,10,33],"./ProductContent":[896,34],"./ProductContent.js":[896,34],"./RegiondataWidgetDemo":[897,1,0,7,19],"./RegiondataWidgetDemo.js":[897,1,0,7,19],"./Routing":[898,0,35],"./Routing.js":[898,0,35],"./StatisticWidgetDemo":[899,1,0,17],"./StatisticWidgetDemo.js":[899,1,0,17],"./TemplateSetting":[900,0,36],"./TemplateSetting.js":[900,0,36],"./UtilityClasses":[901,13],"./UtilityClasses.js":[901,13]};function a(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],a=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(a)}))}a.keys=function(){return Object.keys(o)},a.id=788,e.exports=a}}]);
//# sourceMappingURL=76.98955d34.chunk.js.map