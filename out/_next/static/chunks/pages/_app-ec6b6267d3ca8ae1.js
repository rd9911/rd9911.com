(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(8159)}])},8418:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(t=(c=i.next()).done)&&(r.push(c.value),!n||r.length!==n);t=!0);}catch(u){a=!0,o=u}finally{try{t||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var a,o=(a=r(7294))&&a.__esModule?a:{default:a},c=r(6273),i=r(387),u=r(7190);var l={};function s(e,n,r,t){if(e&&c.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[n+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,a=i.useRouter(),f=o.default.useMemo((function(){var n=t(c.resolveHref(a,e.href,!0),2),r=n[0],o=n[1];return{href:r,as:e.as?c.resolveHref(a,e.as):o||r}}),[a,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,y=e.shallow,b=e.scroll,m=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var j=(n=o.default.Children.only(v))&&"object"===typeof n&&n.ref,x=t(u.useIntersection({rootMargin:"200px"}),2),w=x[0],g=x[1],E=o.default.useCallback((function(e){w(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,w]);o.default.useEffect((function(){var e=g&&r&&c.isLocalURL(d),n="undefined"!==typeof m?m:a&&a.locale,t=l[d+"%"+p+(n?"%"+n:"")];e&&!t&&s(a,d,p,{locale:n})}),[p,d,g,m,r,a]);var _={ref:E,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,a,o,i,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),null==i&&t.indexOf("#")>=0&&(i=!1),n[a?"replace":"push"](r,t,{shallow:o,locale:u,scroll:i}))}(e,a,d,p,h,y,b,m)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),c.isLocalURL(d)&&s(a,d,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var k="undefined"!==typeof m?m:a&&a.locale,N=a&&a.isLocaleDomain&&c.getDomainLocale(p,k,a&&a.locales,a&&a.domainLocales);_.href=N||c.addBasePath(c.addLocale(p,k,a&&a.defaultLocale))}return o.default.cloneElement(n,_)};n.default=f},7190:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(t=(c=i.next()).done)&&(r.push(c.value),!n||r.length!==n);t=!0);}catch(u){a=!0,o=u}finally{try{t||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!c,u=a.useRef(),l=t(a.useState(!1),2),s=l[0],f=l[1],d=a.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||s||e&&e.tagName&&(u.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=i.get(n);if(r)return r;var t=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return i.set(n,r={id:n,observer:a,elements:t}),r}(r),a=t.id,o=t.observer,c=t.elements;return c.set(e,n),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),i.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[r,n,s]);return a.useEffect((function(){if(!c&&!s){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[s]),[d,s]};var a=r(7294),o=r(9311),c="undefined"!==typeof IntersectionObserver;var i=new Map},8159:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return s}});var t=r(5893),a=r(1664);function o(){return(0,t.jsx)("header",{children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)(a.default,{href:"/",children:(0,t.jsx)("h2",{children:(0,t.jsx)(a.default,{href:"/",passHref:!0,children:"rd9911"})})})})})}var c=r(9008);r(9221),r(7294);var i=function(){return(0,t.jsx)("div",{children:(0,t.jsxs)("nav",{className:"nav-bar",children:[(0,t.jsx)(a.default,{className:"nav-btn",href:"/",passHref:!0,children:"Home"}),(0,t.jsx)(a.default,{className:"nav-btn",href:"/projects",passHref:!0,children:"Projects"}),(0,t.jsx)(a.default,{className:"nav-btn",href:"/bookshelf",passHref:!0,children:"Bookshelf"}),(0,t.jsx)(a.default,{className:"nav-btn",href:"/bio",passHref:!0,children:"About me"})]})})};function u(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){u(e,n,r[n])}))}return e}var s=function(e){var n=e.Component,r=e.pageProps;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(c.default,{children:[(0,t.jsx)("title",{children:"rd9911"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]}),(0,t.jsx)(o,{}),(0,t.jsxs)("main",{children:[(0,t.jsx)("div",{className:"container",children:(0,t.jsx)(i,{})}),(0,t.jsx)(n,l({},r))]})]})}},9221:function(){},9008:function(e,n,r){e.exports=r(5443)},1664:function(e,n,r){e.exports=r(8418)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(1780),n(387)}));var r=e.O();_N_E=r}]);