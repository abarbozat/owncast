(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7116],{25330:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"}},57096:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"}},71961:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=(a=n(79686))&&a.__esModule?a:{default:a};t.default=r,e.exports=r},20054:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=(a=n(32615))&&a.__esModule?a:{default:a};t.default=r,e.exports=r},79686:function(e,t,n){"use strict";var a=n(64836),r=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(42122)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=i?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(67294)),l=a(n(25330)),u=a(n(92074));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}var s=function(e,t){return o.createElement(u.default,(0,i.default)((0,i.default)({},e),{},{ref:t,icon:l.default}))};s.displayName="CheckOutlined";var d=o.forwardRef(s);t.default=d},32615:function(e,t,n){"use strict";var a=n(64836),r=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(42122)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=i?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(67294)),l=a(n(57096)),u=a(n(92074));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}var s=function(e,t){return o.createElement(u.default,(0,i.default)((0,i.default)({},e),{},{ref:t,icon:l.default}))};s.displayName="PlusOutlined";var d=o.forwardRef(s);t.default=d},89552:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(10434)),o=r(n(38416)),l=r(n(27424)),u=r(n(94184)),c=r(n(23279)),s=r(n(18475)),d=a(n(67294)),f=n(31929),p=n(47419),v=n(66764),h=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};(0,v.tuple)("small","default","large");var m=null,y=function(e){var t=e.spinPrefixCls,n=e.spinning,a=void 0===n||n,r=e.delay,v=e.className,y=e.size,b=void 0===y?"default":y,g=e.tip,j=e.wrapperClassName,x=e.style,O=e.children,w=h(e,["spinPrefixCls","spinning","delay","className","size","tip","wrapperClassName","style","children"]),P=d.useState(function(){return a&&(!a||!r||!!isNaN(Number(r)))}),_=(0,l.default)(P,2),E=_[0],N=_[1];return d.useEffect(function(){var e=(0,c.default)(function(){N(a)},r);return e(),function(){var t;null===(t=null==e?void 0:e.cancel)||void 0===t||t.call(e)}},[r,a]),d.createElement(f.ConfigConsumer,null,function(n){var a,r,l,c=n.direction,f=(0,u.default)(t,(l={},(0,o.default)(l,"".concat(t,"-sm"),"small"===b),(0,o.default)(l,"".concat(t,"-lg"),"large"===b),(0,o.default)(l,"".concat(t,"-spinning"),E),(0,o.default)(l,"".concat(t,"-show-text"),!!g),(0,o.default)(l,"".concat(t,"-rtl"),"rtl"===c),l),v),h=(0,s.default)(w,["indicator","prefixCls"]),y=d.createElement("div",(0,i.default)({},h,{style:x,className:f,"aria-live":"polite","aria-busy":E}),(a=e.indicator,r="".concat(t,"-dot"),null===a?null:(0,p.isValidElement)(a)?(0,p.cloneElement)(a,{className:(0,u.default)(a.props.className,r)}):(0,p.isValidElement)(m)?(0,p.cloneElement)(m,{className:(0,u.default)(m.props.className,r)}):d.createElement("span",{className:(0,u.default)(r,"".concat(t,"-dot-spin"))},d.createElement("i",{className:"".concat(t,"-dot-item")}),d.createElement("i",{className:"".concat(t,"-dot-item")}),d.createElement("i",{className:"".concat(t,"-dot-item")}),d.createElement("i",{className:"".concat(t,"-dot-item")}))),g?d.createElement("div",{className:"".concat(t,"-text")},g):null);if(void 0!==O){var P=(0,u.default)("".concat(t,"-container"),(0,o.default)({},"".concat(t,"-blur"),E));return d.createElement("div",(0,i.default)({},h,{className:(0,u.default)("".concat(t,"-nested-loading"),j)}),E&&d.createElement("div",{key:"loading"},y),d.createElement("div",{className:P,key:"container"},O))}return y})},b=function(e){var t=e.prefixCls,n=(0,d.useContext(f.ConfigContext).getPrefixCls)("spin",t),a=(0,i.default)((0,i.default)({},e),{spinPrefixCls:n});return d.createElement(y,(0,i.default)({},a))};b.setDefaultIndicator=function(e){m=e},t.default=b},42698:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(){return null}},1286:function(e,t,n){"use strict";var a=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{inkBar:!0,tabPane:!1};return(t=!1===n?{inkBar:!1,tabPane:!1}:!0===n?{inkBar:!0,tabPane:!0}:(0,i.default)({inkBar:!0},"object"===(0,r.default)(n)?n:{})).tabPane&&(t.tabPaneMotion=(0,i.default)((0,i.default)({},l),{motionName:(0,o.getTransitionName)(e,"switch")})),t};var r=a(n(18698)),i=a(n(10434)),o=n(53683),l={motionAppear:!1,motionEnter:!0,motionLeave:!0}},47397:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return e||(0,l.default)(t).map(function(e){if(o.isValidElement(e)){var t=e.key,n=e.props||{},a=n.tab,r=u(n,["tab"]);return(0,i.default)((0,i.default)({key:String(t)},r),{label:a})}return null}).filter(function(e){return e})};var i=r(n(10434)),o=a(n(67294)),l=r(n(45598));r(n(13594));var u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n}},20838:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(38416)),o=r(n(10434)),l=r(n(40753)),u=r(n(26937)),c=r(n(20054)),s=r(n(94184)),d=r(n(93068)),f=a(n(67294)),p=n(31929),v=r(n(3236));r(n(13594));var h=r(n(1286)),m=r(n(47397)),y=r(n(42698)),b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};function g(e){var t,n=e.type,a=e.className,r=e.size,y=e.onEdit,g=e.hideAdd,j=e.centered,x=e.addIcon,O=e.children,w=e.items,P=e.animated,_=b(e,["type","className","size","onEdit","hideAdd","centered","addIcon","children","items","animated"]),E=_.prefixCls,N=_.moreIcon,k=void 0===N?f.createElement(u.default,null):N,M=f.useContext(p.ConfigContext),C=M.getPrefixCls,I=M.direction,S=M.getPopupContainer,A=C("tabs",E);"editable-card"===n&&(t={onEdit:function(e,t){var n=t.key,a=t.event;null==y||y("add"===e?a:n,e)},removeIcon:f.createElement(l.default,null),addIcon:x||f.createElement(c.default,null),showAdd:!0!==g});var T=C(),B=(0,m.default)(w,O),F=(0,h.default)(A,P);return f.createElement(v.default.Consumer,null,function(e){var l,u=void 0!==r?r:e;return f.createElement(d.default,(0,o.default)({direction:I,getPopupContainer:S,moreTransitionName:"".concat(T,"-slide-up")},_,{items:B,className:(0,s.default)((l={},(0,i.default)(l,"".concat(A,"-").concat(u),u),(0,i.default)(l,"".concat(A,"-card"),["card","editable-card"].includes(n)),(0,i.default)(l,"".concat(A,"-editable-card"),"editable-card"===n),(0,i.default)(l,"".concat(A,"-centered"),j),l),a),editable:t,moreIcon:k,prefixCls:A,animated:F}))})}g.TabPane=y.default,t.default=g},89277:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(10434));r(n(18698));var o=a(n(67294));r(n(13594));var l=r(n(28460)),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},c=o.forwardRef(function(e,t){var n=e.ellipsis,a=e.rel,r=u(e,["ellipsis","rel"]),c=(0,i.default)((0,i.default)({},r),{rel:void 0===a&&"_blank"===r.target?"noopener noreferrer":a});return delete c.navigate,o.createElement(l.default,(0,i.default)({},c,{ref:t,ellipsis:!!n,component:"a"}))});t.default=c},21987:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(10434)),o=a(n(67294)),l=r(n(28460)),u=o.forwardRef(function(e,t){return o.createElement(l.default,(0,i.default)({ref:t},e,{component:"div"}))});t.default=u},15394:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(10434)),o=r(n(18698)),l=r(n(18475)),u=a(n(67294));r(n(13594));var c=r(n(28460)),s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},d=u.forwardRef(function(e,t){var n=e.ellipsis,a=s(e,["ellipsis"]),r=u.useMemo(function(){return n&&"object"===(0,o.default)(n)?(0,l.default)(n,["expandable","rows"]):n},[n]);return u.createElement(c.default,(0,i.default)({ref:t},a,{ellipsis:r,component:"span"}))});t.default=d},53740:function(e,t,n){"use strict";var a=n(64836).default;t.default=void 0;var r=a(n(89277)),i=a(n(21987)),o=a(n(15394)),l=a(n(34528)),u=a(n(89652)).default;u.Text=o.default,u.Link=r.default,u.Title=l.default,u.Paragraph=i.default,t.default=u},27561:function(e,t,n){var a=n(67990),r=/^\s+/;e.exports=function(e){return e?e.slice(0,a(e)+1).replace(r,""):e}},67990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:function(e,t,n){var a=n(13218),r=n(7771),i=n(14841),o=Math.max,l=Math.min;e.exports=function(e,t,n){var u,c,s,d,f,p,v=0,h=!1,m=!1,y=!0;if("function"!=typeof e)throw TypeError("Expected a function");function b(t){var n=u,a=c;return u=c=void 0,v=t,d=e.apply(a,n)}function g(e){var n=e-p,a=e-v;return void 0===p||n>=t||n<0||m&&a>=s}function j(){var e,n,a,i=r();if(g(i))return x(i);f=setTimeout(j,(e=i-p,n=i-v,a=t-e,m?l(a,s-n):a))}function x(e){return(f=void 0,y&&u)?b(e):(u=c=void 0,d)}function O(){var e,n=r(),a=g(n);if(u=arguments,c=this,p=n,a){if(void 0===f)return v=e=p,f=setTimeout(j,t),h?b(e):d;if(m)return clearTimeout(f),f=setTimeout(j,t),b(p)}return void 0===f&&(f=setTimeout(j,t)),d}return t=i(t)||0,a(n)&&(h=!!n.leading,s=(m="maxWait"in n)?o(i(n.maxWait)||0,t):s,y="trailing"in n?!!n.trailing:y),O.cancel=function(){void 0!==f&&clearTimeout(f),v=0,u=p=c=f=void 0},O.flush=function(){return void 0===f?d:x(r())},O}},13218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7771:function(e,t,n){var a=n(55639);e.exports=function(){return a.Date.now()}},14841:function(e,t,n){var a=n(27561),r=n(13218),i=n(33448),o=0/0,l=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return o;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=a(e);var n=u.test(e);return n||c.test(e)?s(e.slice(2),n?2:8):l.test(e)?o:+e}},78513:function(e,t,n){"use strict";n.r(t),n.d(t,{AuthModal:function(){return I}});var a=n(85893),r=n(20838),i=n(4480),o=n(4511),l=n(4863),u=n(51024),c=n(74048),s=n(89552),d=n(68469),f=n(53740),p=n(65400),v=n(5152),h=n.n(v),m=n(67294),y=n(53899);let{Panel:b}=d.default,{Link:g}=f.default,j=h()(()=>Promise.resolve().then(n.t.bind(n,67996,23)),{loadableGenerated:{webpack:()=>[67996]},ssr:!1}),x=e=>{let{authenticated:t,displayName:n,accessToken:r}=e,[i,o]=(0,m.useState)(null),[f,v]=(0,m.useState)(!1),[h,x]=(0,m.useState)(!1),[O,w]=(0,m.useState)(""),P=t?(0,a.jsxs)("span",{children:[(0,a.jsx)("b",{children:"You are already authenticated"}),". However, you can add other domains or log in as a different user."]}):(0,a.jsxs)("span",{children:["Use your own domain to authenticate ",(0,a.jsx)("span",{children:n})," or login as a previously"," ","authenticated chat user using IndieAuth."]}),_=i;_&&_.includes("url does not support indieauth")&&(_="The provided URL is either invalid or does not support IndieAuth.");let E=e=>{if(!(0,y.jv)(e)||!e.includes(".")){x(!1);return}x(!0)},N=async()=>{if(h){v(!0);try{let e=await fetch("/api/auth/indieauth?accessToken=".concat(r),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({authHost:"https://".concat(O)})}),t=await e.json();if(t.message){o(t.message),v(!1);return}if(!t.redirect){o("Auth provider did not return a redirect URL."),v(!1);return}if(t.redirect){let{redirect:e}=t;window.location=e}}catch(e){o(e.message)}v(!1)}};return(0,a.jsx)(s.default,{spinning:f,children:(0,a.jsxs)(c.default,{direction:"vertical",children:[P,_&&(0,a.jsx)(l.default,{message:"Error",description:_,type:"error",showIcon:!0}),(0,a.jsx)("div",{children:"Your domain"}),(0,a.jsx)(u.default.Search,{addonBefore:"https://",onInput:e=>{let t=e.nativeEvent.data;if(":"===t)return;w(e.target.value);let n="https://".concat(e.target.value);E(n)},type:"url",value:O,placeholder:"yoursite.com",status:!h&&O.length>0?"error":void 0,onSearch:N,enterButton:(0,a.jsx)(p.default,{type:h?"primary":"default",disabled:!h||0===O.length,children:(0,a.jsx)(j,{})})}),(0,a.jsx)(d.default,{ghost:!0,children:(0,a.jsxs)(b,{header:"Learn more about using IndieAuth to authenticate with chat.",children:[(0,a.jsx)("p",{children:"IndieAuth allows for a completely independent and decentralized way of identifying yourself using your own domain."}),(0,a.jsxs)("p",{children:["If you run an Owncast instance, you can use that domain here. Otherwise,"," ",(0,a.jsx)(g,{href:"https://indieauth.net/#providers",children:"learn more about how you can support IndieAuth"}),"."]})]},"header")}),(0,a.jsxs)("div",{children:[(0,a.jsx)("strong",{children:"Note"}),": This is for authentication purposes only, and no personal information will be accessed or stored."]})]})})};var O=n(80453),w=n.n(O);let{Panel:P}=d.default,_=h()(()=>Promise.resolve().then(n.t.bind(n,67996,23)),{loadableGenerated:{webpack:()=>[67996]},ssr:!1}),E=e=>{let{authenticated:t,displayName:n,accessToken:r}=e,[i,o]=(0,m.useState)(null),[f,v]=(0,m.useState)(!1),[h,b]=(0,m.useState)(!1),[g,j]=(0,m.useState)(""),[x,O]=(0,m.useState)(""),[E,N]=(0,m.useState)(!1),k=t?(0,a.jsxs)("span",{children:[(0,a.jsx)("b",{children:"You are already authenticated"}),". However, you can add other domains or log in as a different user."]}):(0,a.jsxs)("span",{children:["Receive a direct message on the Fediverse to link your account to"," ",(0,a.jsx)("strong",{children:n}),", or login as a previously linked chat user."]}),M=i;M&&M.includes("url does not support indieauth")&&(M="The provided URL is either invalid or does not support IndieAuth.");let C=e=>{b((0,y.ME)(e))},I=async(e,t)=>{let n=await fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}),a=await n.json();a.message&&(o(a.message),v(!1))},S=async()=>{v(!0);try{await I("/api/auth/fediverse/verify?accessToken=".concat(r),{code:x}),window.location.href="/"}catch(e){console.error(e),o(e)}v(!1)},A=async()=>{if(!h)return;v(!0),o(null);let e=g.replace(/^@+/,"");try{await I("/api/auth/fediverse?accessToken=".concat(r),{account:e}),N(!0)}catch(e){console.error(e),o(e)}v(!1)},T=(0,a.jsxs)("div",{children:["Paste in the code that was sent to your Fediverse account. If you did not receive a code, make sure you can accept direct messages.",(0,a.jsxs)("div",{className:w().codeInputContainer,children:[(0,a.jsx)(u.default,{value:x,onChange:e=>O(e.target.value),className:w().codeInput,placeholder:"123456",maxLength:6}),(0,a.jsx)(p.default,{type:"primary",onClick:S,disabled:x.length<6,className:w().submitButton,children:"Verify Code"})]})]}),B=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{children:"Your Fediverse Account"}),(0,a.jsx)(u.default.Search,{addonBefore:"@",onInput:e=>{j(e.target.value),C(e.target.value)},value:g,placeholder:"youraccount@yourserver.com",status:!h&&g.length>0?"error":void 0,onSearch:A,enterButton:(0,a.jsx)(p.default,{type:h?"primary":"default",disabled:!h||0===g.length,children:(0,a.jsx)(_,{})})})]});return(0,a.jsx)(s.default,{spinning:f,children:(0,a.jsxs)(c.default,{direction:"vertical",children:[k,M&&(0,a.jsx)(l.default,{message:"Error",description:M,type:"error",showIcon:!0}),E?T:B,(0,a.jsx)(d.default,{ghost:!0,children:(0,a.jsx)(P,{header:"Learn more about using the Fediverse to authenticate with chat.",children:(0,a.jsx)("p",{children:"You can link your chat identity with your Fediverse identity. Next time you want to use this chat identity you can again go through the Fediverse authentication."})},"header")}),(0,a.jsxs)("div",{children:[(0,a.jsx)("strong",{children:"Note"}),": This is for authentication purposes only, and no personal information will be accessed or stored."]})]})})};var N=n(444),k=n.n(N),M=n(44974),C=n(69183);let I=e=>{let{forceTabs:t}=e,n=(0,i.sJ)(M.L4),l=(0,i.sJ)(M.FI),u=(0,i.sJ)(M.db),c=(0,i.sJ)(M.g1);if(!u)return null;let{displayName:s}=u,{federation:d}=c,{enabled:f}=d,p=(0,a.jsxs)("span",{className:k().tabContent,children:[(0,a.jsx)("img",{className:k().icon,src:"/img/indieauth.png",alt:"IndieAuth"}),"IndieAuth"]}),v=(0,a.jsx)(x,{authenticated:n,displayName:s,accessToken:l}),h=(0,a.jsxs)("span",{className:k().tabContent,children:[(0,a.jsx)("img",{className:k().icon,src:"/img/fediverse-black.png",alt:"Fediverse auth"}),"FediAuth"]}),m=(0,a.jsx)(E,{authenticated:n,displayName:s,accessToken:l});return(0,a.jsx)(o.SV,{fallbackRender:e=>{let{error:t,resetErrorBoundary:n}=e;return(0,a.jsx)(C.A,{componentName:"AuthModal",message:t.message,retryFunction:n})},children:(0,a.jsx)("div",{children:(0,a.jsx)(r.default,{defaultActiveKey:"1",items:[{label:p,key:"1",children:v},{label:h,key:"2",children:m}],type:"card",size:"small",renderTabBar:f||t?null:()=>null})})})}},53899:function(e,t,n){"use strict";n.d(t,{Kf:function(){return i},ME:function(){return l},ax:function(){return a},bu:function(){return o},jv:function(){return r}});let a="https?://.*";function r(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["http:","https:"];try{let n=new URL(e);if(""===n.protocol||""===n.hostname||!t.includes(n.protocol))return!1}catch(e){return!1}return!0}function i(e,t){e.startsWith("@")&&(e=e.slice(1));let n=e.split(/:|@/),[a,r,i]=n;return a===t&&3===n.length&&!!a&&!!r&&!!i}function o(e){e.startsWith("matrix:")&&(e=e.slice(7)),e.startsWith("@")&&(e=e.slice(1));let t=e.split(":"),[n,a]=t;return 2===t.length&&!!n&&!!a}function l(e){let t=e.replace(/^@+/,"");return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())}},444:function(e){e.exports={tabContent:"AuthModal_tabContent__sQX_a",icon:"AuthModal_icon__624lg"}},80453:function(e){e.exports={codeInputContainer:"FediAuthModal_codeInputContainer__LheQq",codeInput:"FediAuthModal_codeInput__TbAom",submitButton:"FediAuthModal_submitButton__n9SbC"}},96774:function(e){e.exports=function(e,t,n,a){var r=n?n.call(a,e,t):void 0;if(void 0!==r)return!!r;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),u=0;u<i.length;u++){var c=i[u];if(!l(c))return!1;var s=e[c],d=t[c];if(!1===(r=n?n.call(a,s,d,c):void 0)||void 0===r&&s!==d)return!1}return!0}}}]);