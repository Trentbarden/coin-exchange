(this["webpackJsonpcoin-exchange"]=this["webpackJsonpcoin-exchange"]||[]).push([[0],{31:function(e,n,t){},54:function(e,n,t){"use strict";t.r(n);var c,a,r=t(1),i=t.n(r),s=t(22),o=t.n(s),l=(t(31),t(26)),h=t(5),j=t.n(h),u=t(9),b=t(7),d=t(3),p=t(4),f=t(0),x=p.a.td(c||(c=Object(d.a)(["\nmargin: 25rem;\nborder: 1px solid white;"])));function O(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)(x,{children:e.name}),Object(f.jsx)(x,{children:e.ticker}),Object(f.jsxs)(x,{children:["$",e.price]}),e.showBalance?Object(f.jsx)(x,{children:e.balance}):null,Object(f.jsx)(x,{children:Object(f.jsx)("form",{action:"#",method:"POST",children:Object(f.jsx)("button",{onClick:function(n){n.preventDefault(),e.handleRefresh(e.tickerId)},children:"Refresh"})})})]})}var m,g=p.a.table(a||(a=Object(d.a)(["\ncolor: white;\n    margin: 25px auto 25px auto ;\n    display: inlineblock;\n    font-size: 1.4rem;\n"])));function v(e){return Object(f.jsxs)(g,{children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Name"}),Object(f.jsx)("th",{children:"Ticker"}),Object(f.jsx)("th",{children:"Price"}),e.showBalance?Object(f.jsx)("th",{children:"Balance"}):null,Object(f.jsx)("th",{children:"Actions"})]})}),Object(f.jsx)("tbody",{children:e.coinData.map((function(n){var t=n.key,c=n.name,a=n.ticker,r=n.price,i=n.balance;return Object(f.jsx)(O,{handleRefresh:e.handleRefresh,name:c,ticker:a,showBalance:e.showBalance,balance:i,price:r,tickerId:t},t)}))})]})}var k=p.a.section(m||(m=Object(d.a)(["\ncolor: white;\nfont-size: 2rem;\ntext-align: left;\npadding 1.5rem 0 1.5rem 5rem;\n"])));function w(e){var n=e.showBalance?"Hide Balance":"Show Balance",t=null;return e.showBalance&&(t=Object(f.jsxs)(f.Fragment,{children:["Big Money Balance:$",e.amount]})),Object(f.jsxs)(k,{children:[t,Object(f.jsx)("button",{onClick:e.handleBalanceVisibilityChange,children:n})]})}var B,y,S,C=t.p+"static/media/logo.6ce24c58.svg",F=p.a.img(B||(B=Object(d.a)(["\nheight: 6rem;\n    pointer-events: none;\n"]))),D=p.a.h1(y||(y=Object(d.a)(["\ncolor:rgb(244, 248, 240);\n"]))),R=p.a.header(S||(S=Object(d.a)(["\nbackground-color: rgb(2, 1, 53);\n    min-height: 20vh;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: calc(10px + 2vmin);\n    color: white;\n"])));function T(e){return Object(f.jsxs)(R,{children:[Object(f.jsx)(F,{src:C,alt:"React Logo"}),Object(f.jsx)(D,{children:"The Greatest Coin Exchange of All Time"})]})}var P,I=t(6),z=t.n(I),A=p.a.div(P||(P=Object(d.a)(["\n    text-align: center;\n    background-color: rgb(4, 6, 85);\n"]))),E=function(e){return parseFloat(Number(e).toFixed(4))};var L=function(e){var n=Object(r.useState)(1e4),t=Object(b.a)(n,2),c=t[0],a=(t[1],Object(r.useState)(!0)),i=Object(b.a)(a,2),s=i[0],o=i[1],h=Object(r.useState)([]),d=Object(b.a)(h,2),p=d[0],x=d[1],O=function(){var e=Object(u.a)(j.a.mark((function e(){var n,t,c,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.get("https://api.coinpaprika.com/v1/coins");case 2:return n=e.sent,t=n.data.slice(0,10).map((function(e){return e.id})),"https://api.coinpaprika.com/v1/tickers/",c=t.map((function(e){return z.a.get("https://api.coinpaprika.com/v1/tickers/"+e)})),e.next=8,Promise.all(c);case 8:a=e.sent,r=a.map((function(e){var n=e.data;return{key:n.id,name:n.name,ticker:n.symbol,balance:0,price:E(n.quotes.USD.price)}})),x(r);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){0===p.length&&O()}));var m=function(){var e=Object(u.a)(j.a.mark((function e(n){var t,c,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.coinpaprika.com/v1/tickers/".concat(n),e.next=3,z.a.get(t);case 3:c=e.sent,a=E(c.data.quotes.USD.price),r=p.map((function(e){var t=Object(l.a)({},e);return n===e.key&&(t.price=a),t})),x(r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(f.jsxs)(A,{className:"App",children:[Object(f.jsx)(T,{}),Object(f.jsx)(w,{amount:c,showBalance:s,handleBalanceVisibilityChange:function(){o((function(e){return!e}))}}),Object(f.jsx)(v,{coinData:p,showBalance:s,handleRefresh:m})]})},N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,55)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),c(e),a(e),r(e),i(e)}))};o.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(L,{})}),document.getElementById("root")),N()}},[[54,1,2]]]);
//# sourceMappingURL=main.c23f7210.chunk.js.map