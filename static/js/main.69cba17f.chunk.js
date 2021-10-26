(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{183:function(e,a,t){"use strict";t.r(a);var n=t(2),c=t.n(n),s=t(61),i=t.n(s),r=(t(74),t(75),t(4)),o=t(3),h=t.n(o),d=t(1);var j=function(){return Object(d.jsx)("div",{children:function(e){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],t=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(a," ").concat(t," ").concat(n," ").concat(c)}(new Date)})},l=t(62),u=t.n(l);var b=function(){return Object(d.jsx)("div",{className:u.a.loading})},m=t(8),_=t.n(m),x=t(39),p=t(64),O=t(63),f=t(65);var g=function(e){var a=e.sunrise,t=e.sunset,n=new Date(1e3*t),c=new Date(1e3*a);return Object(d.jsxs)("div",{className:_.a.weatherInfo,children:[Object(d.jsxs)("div",{className:_.a.humi,children:[Object(d.jsxs)("li",{className:_.a.icon,children:[" ",Object(d.jsx)(O.a,{})," Wind Speed : ",e.windSpeed," m/s"]}),Object(d.jsxs)("li",{className:_.a.icon,children:[" ",Object(d.jsx)(p.a,{})," Humidity : ",e.humidity," g.kg",Object(d.jsx)("sup",{children:"-1"})]}),Object(d.jsxs)("li",{className:_.a.icon,children:[" ",Object(d.jsx)(f.a,{})," Pressure : ",e.pressure," Pa"]})]}),Object(d.jsxs)("div",{className:_.a.sun,children:[Object(d.jsxs)("li",{className:_.a.icon,children:[" ",Object(d.jsx)(x.a,{})," Sunrise : ","".concat(c.getHours()," : ").concat(c.getMinutes()," : ").concat(c.getSeconds())]}),Object(d.jsxs)("li",{className:_.a.icon,children:[" ",Object(d.jsx)(x.b,{})," Sunset : ","".concat(n.getHours()," : ").concat(n.getMinutes()," : ").concat(n.getSeconds())]})]})]})},v=t(66),w=t.n(v),y=t(69);var M=function(e){var a=Object(n.useState)({}),t=Object(r.a)(a,2),c=t[0],s=t[1],i=Object(n.useState)(!0),o=Object(r.a)(i,2),h=o[0],j=o[1],l="https://api.openweathermap.org/data/2.5/forecast?q=".concat("bangalore","&appid=").concat("f32cfa0133a992d042027732e48eae99");if(Object(n.useEffect)((function(){fetch(l).then((function(e){return e.json()})).then((function(e){s(e),j(!1),console.log(e)}))}),[]),h)return Object(d.jsx)("h1",{children:"Loading"});var u=[c.list[0],c.list[10],c.list[20],c.list[30],c.list[39]],b=[];u.forEach((function(e){var a=new Date(1e3*e.dt).getDate();b.push(a)})),console.log(b);var m={labels:[b[0]+" / 2021",b[1]+" / 2021",b[2]+" / 2021",b[3]+" / 2021",b[4]+" / 2021"],datasets:[{label:"High",backgroundColor:"rgb(255, 99, 132)",borderColor:"rgb(255, 99, 132)",data:[u[0].main.temp_max-273,u[1].main.temp_max-273,u[2].main.temp_max-273,u[3].main.temp_max-273,u[4].main.temp_max-273]},{label:"Low",borderColor:"#aba",backgroundColor:"#123",data:[u[0].main.temp_min-273,u[1].main.temp_min-273,u[2].main.temp_min-273,u[3].main.temp_min-273,u[4].main.temp_min-273]}]};return Object(d.jsx)("div",{className:w.a.chart,children:Object(d.jsx)(y.a,{data:m})})};var N=function(){var e=Object(n.useState)("bangalore"),a=Object(r.a)(e,2),t=a[0],c=a[1],s=Object(n.useState)(!1),i=Object(r.a)(s,2),o=i[0],l=i[1],u=Object(n.useState)({}),m=Object(r.a)(u,2),_=m[0],x=m[1],p=Object(n.useState)(!1),O=Object(r.a)(p,2),f=O[0],v=O[1],w=Object(n.useState)(!1),y=Object(r.a)(w,2),N=y[0],S=y[1],W=function(){fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat("f32cfa0133a992d042027732e48eae99")).then((function(e){return e.json()})).then((function(e){c(""),console.log(e),x(e),l(!1)}))};return Object(n.useEffect)((function(){W()}),[]),o?Object(d.jsx)(b,{}):Object(d.jsx)("div",{className:h.a.container,children:Object(d.jsxs)("main",{className:h.a.main,children:[Object(d.jsx)("div",{className:h.a.search_box,children:Object(d.jsx)("input",{type:"text",className:"search-bar",placeholder:"search",onChange:function(e){return c(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&W()}})}),"undefined"!=typeof _.main?Object(d.jsxs)("div",{children:[Object(d.jsxs)("article",{children:[Object(d.jsxs)("div",{className:h.a.dateLocation,children:[Object(d.jsxs)("div",{className:h.a.location,children:[_.name,",",_.sys.country]}),Object(d.jsx)("div",{className:h.a.date,children:Object(d.jsx)(j,{})})]}),Object(d.jsxs)("div",{className:h.a.weatherbox,children:[Object(d.jsxs)("div",{className:h.a.temp,children:[Math.round(_.main.temp-273.15),"\xb0c"]}),Object(d.jsxs)("div",{className:h.a.desc,children:[Object(d.jsx)("h5",{children:_.weather[0].main}),Object(d.jsx)("p",{children:_.weather[0].description})]})]})]}),Object(d.jsxs)("div",{className:h.a.highLow,children:[Object(d.jsxs)("div",{className:h.a.high,children:["Todays's High : ",Math.round(_.main.temp_max-273.15),"\xb0c"]}),Object(d.jsxs)("div",{className:h.a.low,children:["Todays's Low : ",Math.round(_.main.temp_min-273.15),"\xb0c"]})]}),f?Object(d.jsx)(g,{windSpeed:_.wind.speed,pressure:_.main.pressure,sunrise:_.sys.sunrise,sunset:_.sys.sunset,humidity:_.main.humidity}):null]}):"",Object(d.jsxs)("div",{className:h.a.btn,children:[Object(d.jsx)("button",{onClick:function(){v(!f)},children:f?"Hide Details":"Show Details"}),Object(d.jsx)("button",{className:h.a.graphBtn,onClick:function(){S(!N)},children:N?"Hide Graph":"Show Graph"})]}),N?Object(d.jsx)(M,{city:t}):null]})})};var S=function(){var e=window.navigator.onLine;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:e?"connect":"notConneted"}),Object(d.jsx)(N,{})]})};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root"))},3:function(e,a,t){e.exports={container:"WeatherMain_container__2Lnbf",main:"WeatherMain_main__1sG8d",search_box:"WeatherMain_search_box__3-hgr",weatherbox:"WeatherMain_weatherbox__19Znv",location:"WeatherMain_location__12Ycz",date:"WeatherMain_date__2PtbY",temp:"WeatherMain_temp__xCcnX",desc:"WeatherMain_desc__3Zpdc",weather:"WeatherMain_weather__1sEyh",highLow:"WeatherMain_highLow__27fPc",high:"WeatherMain_high__3o6nM",low:"WeatherMain_low__2gLG0",cloud:"WeatherMain_cloud__2pGMR",btn:"WeatherMain_btn__343C7",graphBtn:"WeatherMain_graphBtn__cHftj"}},62:function(e,a,t){e.exports={loading:"Loading_loading__1tDtf"}},66:function(e,a,t){e.exports={chart:"Chart_chart__2R1-B"}},74:function(e,a,t){},75:function(e,a,t){},8:function(e,a,t){e.exports={weatherInfo:"WeatherInfo_weatherInfo__1zGKX",icon:"WeatherInfo_icon__1u6QD"}}},[[183,1,2]]]);
//# sourceMappingURL=main.69cba17f.chunk.js.map