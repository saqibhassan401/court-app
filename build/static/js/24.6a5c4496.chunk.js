(this.webpackJsonpmatchbox=this.webpackJsonpmatchbox||[]).push([[24,39],{489:function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"e",(function(){return i})),n.d(e,"g",(function(){return a})),n.d(e,"d",(function(){return c})),n.d(e,"f",(function(){return o})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return l})),n.d(e,"h",(function(){return h})),n.d(e,"i",(function(){return j})),n.d(e,"l",(function(){return b})),n.d(e,"j",(function(){return x})),n.d(e,"k",(function(){return u})),n.d(e,"m",(function(){return O})),n.d(e,"n",(function(){return f}));var r=n(17),s="#3e82f7",i="#04d182",a="#ffc107",c="rgba(62, 130, 247, 0.15)",o="rgba(4, 209, 130, 0.1)",d=[s,i,"#ff6b72",a,"#a461d8","#fa8c16","#17bcff"],l=[c,o,"rgba(222, 68, 54, 0.1)","rgba(255, 193, 7, 0.1)","rgba(139, 75, 157, 0.1)","rgba(250, 140, 22, .1)","rgba(23, 188, 255, 0.15)"],h="#edf2f9",j="#455560",b={chart:{zoom:{enabled:!1},toolbar:{show:!1}},colors:[].concat(d),dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth",lineCap:"round"},legend:{position:"top",horizontalAlign:"right",offsetY:-15,itemMargin:{vertical:20},tooltipHoverFormatter:function(t,e){return t+" - "+e.w.globals.series[e.seriesIndex][e.dataPointIndex]}},xaxis:{categories:[]},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}}},x=Object(r.a)({},b),u={chart:{zoom:{enabled:!1},toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"25px",startingShapre:"rounded",endingShape:"rounded"}},colors:[].concat(d),dataLabels:{enabled:!1},stroke:{show:!0,width:6,curve:"smooth",colors:["transparent"]},legend:{position:"top",horizontalAlign:"right",offsetY:-15,inverseOrder:!0,itemMargin:{vertical:20},tooltipHoverFormatter:function(t,e){return t+" - "+e.w.globals.series[e.seriesIndex][e.dataPointIndex]}},xaxis:{categories:[]},fill:{opacity:1},tooltip:{y:{formatter:function(t){return"".concat(t)}}}},O={colors:[].concat(d),plotOptions:{pie:{size:50,donut:{labels:{show:!0,total:{show:!0,showAlways:!0,label:"",fontSize:"18px",fontFamily:"Roboto",fontWeight:"bold",color:"#1a3353",formatter:function(t){return t.globals.seriesTotals.reduce((function(t,e){return t+e}),0)}}},size:"87%"}}},labels:[],dataLabels:{enabled:!1},legend:{show:!1}},f={chart:{type:"line",sparkline:{enabled:!0}},stroke:{width:2,curve:"smooth"},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(t){return""}}},marker:{show:!1}}}},499:function(t,e,n){"use strict";n.r(e);n(0);var r=n(2);e.default=function(t){var e=t.name,n=t.desc;return Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsxs)("span",{className:"font-weight-bold text-dark",children:[e,":"]}),Object(r.jsxs)("span",{className:"text-gray-light",children:[" ",n]})]})}},574:function(t,e,n){"use strict";var r=n(17),s=n(0),i=n(500),a=n(495),c=n.n(a),o=n(489),d=n(594),l=n(2),h={position:"absolute",zIndex:"1"},j={position:"absolute",zIndex:"1",right:"0",top:"-2px"},b=function(t){var e=t.title,n=t.series,a=t.width,b=t.height,x=t.xAxis,u=t.customOptions,O=t.card,f=t.type,p=t.extra,m=function(t){switch(t){case"line":return o.l;case"bar":return o.k;case"area":return o.j;default:return o.l}}(f),g=window.innerWidth<768,J=function(){if(y.current){var t,e=y.current.querySelectorAll("div.apexcharts-legend")[0];e.style.marginRight="".concat(g?0:null===(t=v.current)||void 0===t?void 0:t.offsetWidth,"px"),g&&(e.style.position="relative",e.style.top=0,e.style.justifyContent="start",e.style.padding=0)}};Object(s.useEffect)((function(){J()}),[]);var v=Object(s.useRef)(null),y=Object(s.useRef)();m.xaxis.categories=x,u&&(m=Object(r.a)(Object(r.a)({},m),u));var w=Object(l.jsx)(d.a,{onResize:void setTimeout((function(){J()}),600),children:Object(l.jsx)("div",{className:"chartRef",ref:y,children:Object(l.jsx)(c.a,{options:m,type:f,series:n,width:a,height:b})})});return Object(l.jsx)(l.Fragment,{children:O?Object(l.jsx)(i.a,{children:Object(l.jsxs)("div",{className:"position-relative",children:[Object(l.jsx)("div",{style:g?{}:h,children:e})&&Object(l.jsx)("h4",{className:"font-weight-bold",style:g?{}:h,children:e}),p&&Object(l.jsx)("div",{ref:v,style:g?{}:j,children:p}),w]})}):w})};b.defaultProps={series:[],height:300,width:"100%",card:!0,type:"line"},e.a=b},879:function(t,e,n){"use strict";n.r(e);n(0);var r=n(574),s=n(499),i=n(3257),a=n(507),c=n(114),o=n(2),d=function(){var t={series:[{name:"Session Duration",data:[45,52,38,24,33,26,21,20,6,8,15,10]},{name:"Page Views",data:[35,41,62,42,13,18,29,37,36,51,32,35]}],categories:["01 Jan","02 Jan","03 Jan","04 Jan","05 Jan","06 Jan","07 Jan","08 Jan","09 Jan","10 Jan","11 Jan","12 Jan"]};return Object(o.jsx)(r.a,{title:"Unique Visitors",series:t.series,xAxis:t.categories,height:400})},l=function(){var t={series:[{name:"Session Duration",data:[45,52,38,24,33,26,21]},{name:"Page Views",data:[35,41,62,42,13,18,29]}],categories:["01 Jan","02 Jan","03 Jan","04 Jan","05 Jan","06 Jan","07 Jan"]};return Object(o.jsx)(r.a,{series:t.series,xAxis:t.categories,title:"Unique Visitors",height:410,type:"bar",customOptions:{colors:["#ff6b72","#04d182"]},extra:Object(o.jsx)(c.a,{type:"default",size:"small",children:"Extra Content"})})};e.default=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"ChartWidget"}),Object(o.jsxs)("div",{className:"mt-4",children:[Object(o.jsx)(s.default,{name:"Location",desc:"src/components/shared-components/ChartWidget.js"}),Object(o.jsx)(s.default,{name:"Description",desc:"Create a chart wrapped by card "})]}),Object(o.jsxs)("div",{className:"mt-4",children:[Object(o.jsx)("h4",{children:"Line"}),Object(o.jsx)(d,{}),Object(o.jsx)(i.a,{className:"hl-code",language:"jsx",style:a.a,children:"import React from 'react'\nimport ChartWidget from 'components/shared-components/ChartWidget'\n\nexport default const LineDemo = () => {\n\n\tconst visitorChartData = {\n  \tseries: [\n\t\t\t{\n\t\t\t\tname: \"Session Duration\",\n\t\t\t\tdata: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: \"Page Views\",\n\t\t\t\tdata: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]\n\t\t\t}\n\t\t],\n\t\tcategories:[\n\t\t\t'01 Jan', \n\t\t\t'02 Jan', \n\t\t\t'03 Jan', \n\t\t\t'04 Jan', \n\t\t\t'05 Jan', \n\t\t\t'06 Jan', \n\t\t\t'07 Jan', \n\t\t\t'08 Jan', \n\t\t\t'09 Jan',\n\t\t\t'10 Jan', \n\t\t\t'11 Jan', \n\t\t\t'12 Jan'\n\t\t]\n\t}\n\treturn (\n\t\t<ChartWidget \n\t\t\ttitle=\"Unique Visitors\" \n\t\t\tseries={visitorChartData.series} \n\t\t\txAxis={visitorChartData.categories} \n\t\t\theight={400}\n\t\t/>\n\t)\n}\n"})]}),Object(o.jsxs)("div",{className:"mt-5",children:[Object(o.jsx)("h4",{children:"Bar"}),Object(o.jsx)(l,{}),Object(o.jsx)(i.a,{className:"hl-code",language:"jsx",style:a.a,children:"import React from 'react'\nimport ChartWidget from 'components/shared-components/ChartWidget'\n\nexport default const BarDemo = () => {\n\n\tconst uniqueVisitorsData = {\n\t\tseries: [\n\t\t\t{\n\t\t\t\tname: \"Session Duration\",\n\t\t\t\tdata: [45, 52, 38, 24, 33, 26, 21]\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: \"Page Views\",\n\t\t\t\tdata: [35, 41, 62, 42, 13, 18, 29]\n\t\t\t}\n\t\t],\n\t\tcategories:[\n\t\t\t'01 Jan', \n\t\t\t'02 Jan', \n\t\t\t'03 Jan', \n\t\t\t'04 Jan', \n\t\t\t'05 Jan', \n\t\t\t'06 Jan', \n\t\t\t'07 Jan'\n\t\t]\n\t}\n\n\treturn (\n\t\t<ChartWidget \n\t\t\tseries={uniqueVisitorsData.series} \n\t\t\txAxis={uniqueVisitorsData.categories} \n\t\t\ttitle=\"Unique Visitors\"\n\t\t\theight={410}\n\t\t\ttype=\"bar\"\n\t\t\tcustomOptions={\n\t\t\t\t{\n\t\t\t\t\tcolors: ['#ff6b72', '#04d182']\n\t\t\t\t}\n\t\t\t}\n\t\t\textra={\n\t\t\t\t<Button type=\"default\" size=\"small\">Extra Content</Button>\n\t\t\t}\n\t\t/>\n\t)\n}\n"})]}),Object(o.jsx)("h4",{className:"mt-4",children:"Props"}),Object(o.jsx)("div",{className:"api-container border-0 p-0",children:Object(o.jsxs)("table",{children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Property"}),Object(o.jsx)("th",{children:"Description"}),Object(o.jsx)("th",{children:"Type"}),Object(o.jsx)("th",{children:"Default"})]})}),Object(o.jsxs)("tbody",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"title"}),Object(o.jsx)("td",{children:"Widget title"}),Object(o.jsx)("td",{children:"string | ReactNode"}),Object(o.jsx)("td",{})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"series"}),Object(o.jsx)("td",{children:"Chart series"}),Object(o.jsxs)("td",{children:["array","<","{","name: string, data: number[]",">","}"]}),Object(o.jsx)("td",{children:"[]"})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"xAxis"}),Object(o.jsx)("td",{children:"Chart xAxis"}),Object(o.jsx)("td",{children:"string[]"}),Object(o.jsx)("td",{})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"customOptions"}),Object(o.jsx)("td",{children:"Custom options for chart"}),Object(o.jsx)("td",{children:Object(o.jsx)("a",{href:"https://apexcharts.com/docs/options/annotations/",children:"Apexcharts option"})}),Object(o.jsx)("td",{})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"width"}),Object(o.jsx)("td",{children:"Chart width"}),Object(o.jsx)("td",{children:"number | string"}),Object(o.jsx)("td",{children:"'100%'"})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"height"}),Object(o.jsx)("td",{children:"Chart height"}),Object(o.jsx)("td",{children:"number | string"}),Object(o.jsx)("td",{children:"300"})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"card"}),Object(o.jsx)("td",{children:"Display in card"}),Object(o.jsx)("td",{children:"boolean"}),Object(o.jsx)("td",{children:"true"})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"type"}),Object(o.jsx)("td",{children:"Chart type"}),Object(o.jsx)("td",{children:"line | bar | area"}),Object(o.jsx)("td",{children:"'line'"})]})]})]})})]})}}}]);
//# sourceMappingURL=24.6a5c4496.chunk.js.map