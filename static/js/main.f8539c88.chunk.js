(this["webpackJsonpcoin-exchange"]=this["webpackJsonpcoin-exchange"]||[]).push([[0],{34:function(e,n,t){},59:function(e,n,t){"use strict";t.r(n);var c,a,r,i,s,o=t(1),l=t.n(o),b=t(26),h=t.n(b),j=(t(34),t(14)),u=t(5),d=t.n(u),p=t(11),O=t(7),f=t(2),m=t(3),x=t(0),g=m.a.td(c||(c=Object(f.a)(["\nmargin: 25rem;\nborder: 1px solid white;\nwidth: 14vw;\n"]))),v=Object(m.a)(g)(a||(a=Object(f.a)(["\nwidth: 34vw;\n"]))),k=Object(m.a)(g)(r||(r=Object(f.a)(["\nwidth 20vw;\n"]))),w=m.a.button(i||(i=Object(f.a)(["\nfont-size: 11px;\nwidt: 64px;\nmargin: 3px 5px 0;\n"])));function y(e){return Object(x.jsxs)("tr",{children:[Object(x.jsx)(k,{children:e.name}),Object(x.jsx)(g,{children:e.ticker}),Object(x.jsxs)(g,{children:["$",e.price]}),Object(x.jsx)(g,{children:e.showBalance?e.balance:"-"}),Object(x.jsx)(v,{children:Object(x.jsxs)("form",{action:"#",method:"POST",children:[Object(x.jsx)(w,{className:"btn btn-info",onClick:function(n){n.preventDefault(),e.handleRefresh(e.tickerId)},children:"Refresh"}),Object(x.jsx)(w,{className:"btn btn-warning",onClick:function(n){n.preventDefault(),e.handleTransaction(!0,e.tickerId)},children:"Buy"}),Object(x.jsx)(w,{className:"btn btn-danger",onClick:function(n){n.preventDefault(),e.handleTransaction(!1,e.tickerId)},children:"Sell"})]})})]})}var B,C,S,T,N=m.a.table(s||(s=Object(f.a)(["\n    color: white;\n    font-size: 1.4rem;\n"])));function D(e){return Object(x.jsxs)(N,{className:"table table-primary table-bordered",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Name"}),Object(x.jsx)("th",{children:"Ticker"}),Object(x.jsx)("th",{children:"Price"}),Object(x.jsx)("th",{children:"Balance"}),Object(x.jsx)("th",{children:"Actions"})]})}),Object(x.jsx)("tbody",{children:e.coinData.map((function(n){var t=n.key,c=n.name,a=n.ticker,r=n.price,i=n.balance;return Object(x.jsx)(y,{handleRefresh:e.handleRefresh,handleTransaction:e.handleTransaction,name:c,ticker:a,showBalance:e.showBalance,balance:i,price:r,tickerId:t},t)}))})]})}var F=m.a.section(B||(B=Object(f.a)(["\ncolor: white;\nfont-size: 2rem;\ntext-align: center;\nmargin-bottom: 2rem;\ndisplay: inline-block;\n"]))),I=m.a.button(C||(C=Object(f.a)(["\nmargin: 0 8px;\n"]))),R=Object(m.a)(I)(S||(S=Object(f.a)(["\nwidth 150px;\n"]))),z=m.a.div(T||(T=Object(f.a)(["\ncolor white;\nmin-width 250px;\nfont-size 1.5em;\n"]))),P=Intl.NumberFormat("en-us",{style:"currency",currency:"USD"});function A(e){var n=e.showBalance?"Hide Balance":"Show Balance",t="\xa0";e.showBalance&&(t=Object(x.jsx)(x.Fragment,{children:P.format(e.amount)}));var c=e.showBalance?"btn btn-warning":"btn btn-info";return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(z,{children:t}),Object(x.jsxs)(F,{children:[Object(x.jsx)(R,{onClick:e.handleBalanceVisibilityChange,className:c,children:n}),Object(x.jsx)(I,{className:"btn btn-success",onClick:e.handleBrrrr,children:"Money Button"})]})]})}var E,L,U,q=t.p+"static/media/logo.6ce24c58.svg",J=(t(16),t(17),m.a.img(E||(E=Object(f.a)(["\nheight: 6rem;\n    pointer-events: none;\n"])))),M=m.a.h1(L||(L=Object(f.a)(["\ncolor:rgb(244, 248, 240);\n"]))),V=m.a.header(U||(U=Object(f.a)(["\nbackground-color: rgb(2, 1, 53);\n    min-height: 20vh;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: calc(10px + 2vmin);\n    color: white;\n"])));function G(e){return Object(x.jsxs)(V,{children:[Object(x.jsx)(J,{src:q,alt:"React Logo"}),Object(x.jsx)(M,{children:"The Greatest Coin Exchange of All Time"})]})}var H,$=t(6),K=t.n($),Q=m.a.div(H||(H=Object(f.a)(["\n    text-align: center;\n    background-color: rgb(4, 6, 85);\n"]))),W=function(e){return parseFloat(Number(e).toFixed(4))};var X=function(e){var n=Object(o.useState)(1e4),t=Object(O.a)(n,2),c=t[0],a=t[1],r=Object(o.useState)(!1),i=Object(O.a)(r,2),s=i[0],l=i[1],b=Object(o.useState)([]),h=Object(O.a)(b,2),u=h[0],f=h[1],m=function(){var e=Object(p.a)(d.a.mark((function e(){var n,t,c,a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.a.get("https://api.coinpaprika.com/v1/coins");case 2:return n=e.sent,t=n.data.slice(0,10).map((function(e){return e.id})),"https://api.coinpaprika.com/v1/tickers/",c=t.map((function(e){return K.a.get("https://api.coinpaprika.com/v1/tickers/"+e)})),e.next=8,Promise.all(c);case 8:a=e.sent,r=a.map((function(e){var n=e.data;return{key:n.id,name:n.name,ticker:n.symbol,balance:0,price:W(n.quotes.USD.price)}})),f(r);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){0===u.length&&m()}));var g=function(){var e=Object(p.a)(d.a.mark((function e(n){var t,c,a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.coinpaprika.com/v1/tickers/".concat(n),e.next=3,K.a.get(t);case 3:c=e.sent,a=W(c.data.quotes.USD.price),r=u.map((function(e){var t=Object(j.a)({},e);return n===e.key&&(t.price=a),t})),f(r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(x.jsxs)(Q,{className:"App",children:[Object(x.jsx)(G,{}),Object(x.jsx)(A,{amount:c,showBalance:s,handleBrrrr:function(){a((function(e){return e+1200}))},handleBalanceVisibilityChange:function(){l((function(e){return!e}))}}),Object(x.jsx)(D,{coinData:u,showBalance:s,handleTransaction:function(e,n){var t=e?1:-1,c=u.map((function(e){var c=Object(j.a)({},e);return n==e.key&&(c.balance+=t,a((function(e){return e-t*c.price}))),c}));f(c)},handleRefresh:g})]})},Y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,60)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),c(e),a(e),r(e),i(e)}))};h.a.render(Object(x.jsx)(l.a.StrictMode,{children:Object(x.jsx)(X,{})}),document.getElementById("root")),Y()}},[[59,1,2]]]);
//# sourceMappingURL=main.f8539c88.chunk.js.map