(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(9),a=(n(0),n(190)),c={id:"json_rpc_api",title:"The Conflux RPC API",custom_edit_url:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/API_Reference/JSON_RPC_API.md"},i={id:"conflux-portal/docs/en/portal/API_Reference/json_rpc_api",title:"The Conflux RPC API",description:"Conflux Portal uses the `conflux.sendAsync()` (and soon, `conflux.send()`) API",source:"@site/docs/conflux-portal/docs/en/portal/API_Reference/JSON_RPC_API.md",permalink:"/docs/conflux-portal/docs/en/portal/API_Reference/json_rpc_api",editUrl:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/API_Reference/JSON_RPC_API.md",lastUpdatedBy:"yqrashawn",lastUpdatedAt:1584670766},l=[],p={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Conflux Portal uses the ",Object(a.b)("inlineCode",{parentName:"p"},"conflux.sendAsync()")," (and soon, ",Object(a.b)("inlineCode",{parentName:"p"},"conflux.send()"),") API\nto wrap an RPC API which is based on an interface exposed by all Conflux\nclients, with some extra methods that are provided by Conflux Portal, as a\nkey-holding signer. You can look up how to pass these methods to the\n",Object(a.b)("inlineCode",{parentName:"p"},"window.conflux")," object ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/conflux-portal/docs/en/portal/API_Reference/provider_api"}),"here"),".  "),Object(a.b)("p",null,"This document is a cross-post of ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ethereum/EIPs/pull/1474/"}),"EIP\n1474"),", which aims to standardize the\ndeclaration of this interface. "),Object(a.b)("p",null,"For the full API, please see ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1474.md"}),"EIP\n1474"),". "))}u.isMDXComponent=!0},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,b=s["".concat(c,".").concat(d)]||s[d]||f[d]||a;return n?o.a.createElement(b,i({ref:t},p,{components:n})):o.a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);