(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{145:function(e,t,n){"use strict";n.r(t);n(75),n(56),n(39),n(160),n(34);var r=n(0),a=n.n(r),i=(n(162),n(151),n(152),n(167)),o=n.n(i),u=function(e){var t=e.fields,n=e.handleFieldChange,r=e.linesArr,i=[],u=[],l=function(){if(f){if(s>=c.length)return"break";m=c[s++]}else{if((s=c.next()).done)return"break";m=s.value}var e=t[m],r=e.string,l=e.display,p=e.calc,v=e.value,b=e.content,d=e.lineNum,h=e.hide,y=void 0,g=void 0;p?(y=a.a.createElement("li",{key:b},a.a.createElement("input",{type:"hidden",name:d,value:v,onChange:function(t){return n(t,e)},readOnly:!0,required:!0})),g=h?null:a.a.createElement(a.a.Fragment,{key:d},a.a.createElement("p",null,l,":"),a.a.createElement("p",{className:o.a.value},v))):y=a.a.createElement("li",{id:d,key:b},a.a.createElement("label",null,a.a.createElement("span",{className:o.a.lineNumber},"Line: ",d),a.a.createElement("br",null)," ",b),a.a.createElement("input",{type:r?"text":"number",name:d,value:v,onChange:function(t){return n(t,e)},required:!0}),a.a.createElement("br",null)),u.push(g),i.push(y)},c=r,f=Array.isArray(c),s=0;for(c=f?c:c[Symbol.iterator]();;){var m;if("break"===l())break}return a.a.createElement("div",{className:o.a.wrapper},a.a.createElement("div",{className:o.a.inputs},a.a.createElement("ul",null,i)),a.a.createElement("div",{className:o.a.calculated},a.a.createElement("ul",null,u)))},l=(n(168),n(171),function(e,t,n,r,a){var i;if(e){i=0;var o=e,u=Array.isArray(o),l=0;for(o=u?o:o[Symbol.iterator]();;){var c;if(u){if(l>=o.length)break;c=o[l++]}else{if((l=o.next()).done)break;c=l.value}var f=c;if(r[f])i+=Number.parseInt(r[f].value)?Number.parseInt(r[f].value):0}"ref"===a&&i<0&&(i*=-1)}else if(t){i=(Number.parseInt(r[t[0]].value)?Number.parseInt(r[t[0]].value):0)-(Number.parseInt(r[t[1]].value)?Number.parseInt(r[t[1]].value):0)}else if(n){var s=Number.parseInt(r[n[0]].value)?Number.parseInt(r[n[0]].value):0;i=Math.round(s*n[1]*100)/100}return i}),c=function e(t,n){return t.forEach(function(t){var r=n[t],a=r.sum,i=r.difference,o=r.mult,u=r.affects,c=r.reforbal;(a||i||o)&&(n[t]=Object.assign({},n[t],{value:l(a,i,o,n,c)}),u[0]&&e(u,n))}),n},f=function(e){e.edges,e.fill;var t=e.setFields,n=e.fields,r=e.linesArr;return a.a.createElement("form",{action:"/api/fill",method:"POST",id:"tax"},a.a.createElement(u,{fields:n,handleFieldChange:function(e,n){e.persist(),t(function(t){return Object.assign({},function(e,t,n){var r=e.lineNum,a=e.affects;return n[r]=Object.assign({},n[r],{value:t}),c(a,n)}(n,e.target.value,t))})},linesArr:r}))},s=n(149),m=n(173),p=n.n(m),v=function(e){var t,n=e.curFormName,i=e.handleFillClick,o=e.saveForm,u=e.formNames,l=e.changeForm,c=Object(r.useState)(0),f=c[0],s=c[1],m=Object(r.useState)(""),v=m[0],b=m[1],d=Object(r.useState)(""),h=d[0],y=d[1];return a.a.createElement("ul",{className:p.a.toolbar},a.a.createElement("li",null,"Saved forms: ",(t=[],u.forEach(function(e){var r=a.a.createElement("button",{key:e,onClick:l.bind(void 0,e),className:n===e?p.a.currentForm:null},e);t.push(r)}),t)),a.a.createElement("li",null,a.a.createElement("button",{onClick:function(){i(0)}},"New form")),a.a.createElement("li",null,a.a.createElement("label",null,"Go to line #",a.a.createElement("input",{type:"number",name:"goto",value:h,onChange:function(e){y(e.target.value)},id:"goto"})),a.a.createElement("a",{href:"#"+h},"Go")),a.a.createElement("li",null,a.a.createElement("label",null,"Save form as:",a.a.createElement("input",{type:"text",value:v,name:"newform",onChange:function(e){b(e.target.value)}})),a.a.createElement("button",{onClick:o.bind(void 0,v)},"Save")),a.a.createElement("li",null,a.a.createElement("label",null,"Fill fields with:",a.a.createElement("input",{type:"number",name:"fill",onInput:function(e){s(e.target.value)}})),a.a.createElement("button",{onClick:i.bind(void 0,f)},"Fill Fields")),a.a.createElement("li",null,a.a.createElement("input",{type:"submit",value:"Submit Form",name:"submit",form:"tax"})))},b=(n(174),n(82),n(83),{}),d=function(e,t,n){e.forEach(function(e){var r=e.node,a=r.sum,i=r.mult,o=r.difference,u=r.lineNum,l=a||i||o;if(b[u]=b[u]?b[u]:Object.assign({},r),b[u].affects=b[u].affects?b[u].affects:[],b[u].value=t,l&&(b[u].calc=!0),a){var c=a,f=Array.isArray(c),s=0;for(c=f?c:c[Symbol.iterator]();;){var m;if(f){if(s>=c.length)break;m=c[s++]}else{if((s=c.next()).done)break;m=s.value}var p=m;n.includes(p+"")&&b[p].affects.push(u)}}else if(o){var v=o,d=Array.isArray(v),h=0;for(v=d?v:v[Symbol.iterator]();;){var y;if(d){if(h>=v.length)break;y=v[h++]}else{if((h=v.next()).done)break;y=h.value}b[y].affects.push(u)}}else i&&b[i[0]].affects.push(u)});for(var r=[],a=Object.entries(b),i=0;i<a.length;i++){var o=a[i][1];o.calc&&r.push(o)}return r.forEach(function(e){var t=e.sum,n=e.mult,r=e.difference,a=e.lineNum,i=e.affects;b[a]=Object.assign({},b[a],{value:l(t,r,n,b)}),i[0]&&h(i)}),b},h=function e(t){t.forEach(function(t){var n=b[t],r=n.sum,a=n.mult,i=n.difference,o=n.affects,u=n.reforbal;b[t]=Object.assign({},b[t],{value:l(r,i,a,b,u)}),o[0]&&e(o)})};if(n.d(t,"query",function(){return y}),window)window.localStorage;t.default=function(e){var t=e.data.allFormFieldsJson.edges,n=t.map(function(e){return e.node.lineNum}),i=Object(r.useState)(function(){return d(t,0,n)}),o=i[0],u=i[1],l=Object(r.useState)(function(){if(localStorage.key(0)){for(var e={},t=0,n=localStorage.length;t<n;t++){var r=localStorage.key(t),a=JSON.parse(localStorage.getItem(r));e[r]=a}return e}return{Untitled:o}}),c=l[0],m=l[1],p=Object(r.useState)("Untitled"),b=p[0],h=p[1],y=Object(r.useRef)(!1);Object(r.useEffect)(function(){y.current&&u(c[b]),y.current=!0},[b]);return a.a.createElement(s.a,null,a.a.createElement(v,{formNames:Object.keys(c),handleFillClick:function(e){u(function(){return Object.assign({},d(t,e,n))})},saveForm:function(e){localStorage.setItem(e,JSON.stringify(o)),m(function(t){var n;return t.Untitled&&delete t.Untitled,Object.assign({},t,((n={})[e]=JSON.parse(localStorage.getItem(e)),n))}),h(e)},changeForm:function(e){h(e)},curFormName:b}),a.a.createElement(f,{fields:o,setFields:u,linesArr:n,edges:t}))};var y="2675720021"},146:function(e,t,n){var r;e.exports=(r=n(148))&&r.default||r},147:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(4),o=n.n(i),u=n(33),l=n.n(u);n.d(t,"a",function(){return l.a});n(146),a.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},148:function(e,t,n){"use strict";n.r(t);n(34);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),u=n(57),l=n(2),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},149:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(147),o=n(150),u=n.n(o),l=function(e){return a.a.createElement("li",null,a.a.createElement(i.a,{to:e.to},e.children))};t.a=function(e){var t=e.children;return a.a.createElement("div",{className:u.a.wrapper},a.a.createElement("header",{className:u.a.header},a.a.createElement("ul",null,a.a.createElement(l,{to:"/"},"Home"),a.a.createElement(l,{to:"/formFiller/"},"Form Filler"))),t,a.a.createElement("footer",null,"Made by Calum Sieppert"))}},151:function(e,t,n){n(155)("asyncIterator")},152:function(e,t,n){"use strict";var r=n(5),a=n(26),i=n(19),o=n(11),u=n(14),l=n(164).KEY,c=n(18),f=n(40),s=n(41),m=n(38),p=n(3),v=n(156),b=n(155),d=n(165),h=n(84),y=n(6),g=n(12),E=n(36),N=n(76),S=n(55),O=n(78),F=n(166),j=n(154),I=n(25),w=n(35),k=j.f,x=I.f,A=F.f,_=r.Symbol,C=r.JSON,P=C&&C.stringify,T=p("_hidden"),J=p("toPrimitive"),R={}.propertyIsEnumerable,M=f("symbol-registry"),q=f("symbols"),G=f("op-symbols"),U=Object.prototype,D="function"==typeof _,L=r.QObject,V=!L||!L.prototype||!L.prototype.findChild,Y=i&&c(function(){return 7!=O(x({},"a",{get:function(){return x(this,"a",{value:7}).a}})).a})?function(e,t,n){var r=k(U,t);r&&delete U[t],x(e,t,n),r&&e!==U&&x(U,t,r)}:x,K=function(e){var t=q[e]=O(_.prototype);return t._k=e,t},W=D&&"symbol"==typeof _.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof _},X=function(e,t,n){return e===U&&X(G,t,n),y(e),t=N(t,!0),y(n),a(q,t)?(n.enumerable?(a(e,T)&&e[T][t]&&(e[T][t]=!1),n=O(n,{enumerable:S(0,!1)})):(a(e,T)||x(e,T,S(1,{})),e[T][t]=!0),Y(e,t,n)):x(e,t,n)},z=function(e,t){y(e);for(var n,r=d(t=E(t)),a=0,i=r.length;i>a;)X(e,n=r[a++],t[n]);return e},H=function(e){var t=R.call(this,e=N(e,!0));return!(this===U&&a(q,e)&&!a(G,e))&&(!(t||!a(this,e)||!a(q,e)||a(this,T)&&this[T][e])||t)},Q=function(e,t){if(e=E(e),t=N(t,!0),e!==U||!a(q,t)||a(G,t)){var n=k(e,t);return!n||!a(q,t)||a(e,T)&&e[T][t]||(n.enumerable=!0),n}},$=function(e){for(var t,n=A(E(e)),r=[],i=0;n.length>i;)a(q,t=n[i++])||t==T||t==l||r.push(t);return r},B=function(e){for(var t,n=e===U,r=A(n?G:E(e)),i=[],o=0;r.length>o;)!a(q,t=r[o++])||n&&!a(U,t)||i.push(q[t]);return i};D||(u((_=function(){if(this instanceof _)throw TypeError("Symbol is not a constructor!");var e=m(arguments.length>0?arguments[0]:void 0),t=function(n){this===U&&t.call(G,n),a(this,T)&&a(this[T],e)&&(this[T][e]=!1),Y(this,e,S(1,n))};return i&&V&&Y(U,e,{configurable:!0,set:t}),K(e)}).prototype,"toString",function(){return this._k}),j.f=Q,I.f=X,n(153).f=F.f=$,n(74).f=H,n(77).f=B,i&&!n(37)&&u(U,"propertyIsEnumerable",H,!0),v.f=function(e){return K(p(e))}),o(o.G+o.W+o.F*!D,{Symbol:_});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ee=0;Z.length>ee;)p(Z[ee++]);for(var te=w(p.store),ne=0;te.length>ne;)b(te[ne++]);o(o.S+o.F*!D,"Symbol",{for:function(e){return a(M,e+="")?M[e]:M[e]=_(e)},keyFor:function(e){if(!W(e))throw TypeError(e+" is not a symbol!");for(var t in M)if(M[t]===e)return t},useSetter:function(){V=!0},useSimple:function(){V=!1}}),o(o.S+o.F*!D,"Object",{create:function(e,t){return void 0===t?O(e):z(O(e),t)},defineProperty:X,defineProperties:z,getOwnPropertyDescriptor:Q,getOwnPropertyNames:$,getOwnPropertySymbols:B}),C&&o(o.S+o.F*(!D||c(function(){var e=_();return"[null]"!=P([e])||"{}"!=P({a:e})||"{}"!=P(Object(e))})),"JSON",{stringify:function(e){for(var t,n,r=[e],a=1;arguments.length>a;)r.push(arguments[a++]);if(n=t=r[1],(g(t)||void 0!==e)&&!W(e))return h(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!W(t))return t}),r[1]=t,P.apply(C,r)}}),_.prototype[J]||n(13)(_.prototype,J,_.prototype.valueOf),s(_,"Symbol"),s(Math,"Math",!0),s(r.JSON,"JSON",!0)},153:function(e,t,n){var r=n(80),a=n(58).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,a)}},154:function(e,t,n){var r=n(74),a=n(55),i=n(36),o=n(76),u=n(26),l=n(79),c=Object.getOwnPropertyDescriptor;t.f=n(19)?c:function(e,t){if(e=i(e),t=o(t,!0),l)try{return c(e,t)}catch(n){}if(u(e,t))return a(!r.f.call(e,t),e[t])}},155:function(e,t,n){var r=n(5),a=n(20),i=n(37),o=n(156),u=n(25).f;e.exports=function(e){var t=a.Symbol||(a.Symbol=i?{}:r.Symbol||{});"_"==e.charAt(0)||e in t||u(t,e,{value:o.f(e)})}},156:function(e,t,n){t.f=n(3)},157:function(e,t,n){var r=n(11),a=n(22),i=n(18),o=n(158),u="["+o+"]",l=RegExp("^"+u+u+"*"),c=RegExp(u+u+"*$"),f=function(e,t,n){var a={},u=i(function(){return!!o[e]()||"​"!="​"[e]()}),l=a[e]=u?t(s):o[e];n&&(a[n]=l),r(r.P+r.F*u,"String",a)},s=f.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(c,"")),e};e.exports=f},158:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},160:function(e,t,n){var r=n(27),a=n(35);n(161)("keys",function(){return function(e){return a(r(e))}})},161:function(e,t,n){var r=n(11),a=n(20),i=n(18);e.exports=function(e,t){var n=(a.Object||{})[e]||Object[e],o={};o[e]=t(n),r(r.S+r.F*i(function(){n(1)}),"Object",o)}},162:function(e,t,n){var r=n(11);r(r.P,"Array",{fill:n(163)}),n(42)("fill")},163:function(e,t,n){"use strict";var r=n(27),a=n(81),i=n(16);e.exports=function(e){for(var t=r(this),n=i(t.length),o=arguments.length,u=a(o>1?arguments[1]:void 0,n),l=o>2?arguments[2]:void 0,c=void 0===l?n:a(l,n);c>u;)t[u++]=e;return t}},164:function(e,t,n){var r=n(38)("meta"),a=n(12),i=n(26),o=n(25).f,u=0,l=Object.isExtensible||function(){return!0},c=!n(18)(function(){return l(Object.preventExtensions({}))}),f=function(e){o(e,r,{value:{i:"O"+ ++u,w:{}}})},s=e.exports={KEY:r,NEED:!1,fastKey:function(e,t){if(!a(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,r)){if(!l(e))return"F";if(!t)return"E";f(e)}return e[r].i},getWeak:function(e,t){if(!i(e,r)){if(!l(e))return!0;if(!t)return!1;f(e)}return e[r].w},onFreeze:function(e){return c&&s.NEED&&l(e)&&!i(e,r)&&f(e),e}}},165:function(e,t,n){var r=n(35),a=n(77),i=n(74);e.exports=function(e){var t=r(e),n=a.f;if(n)for(var o,u=n(e),l=i.f,c=0;u.length>c;)l.call(e,o=u[c++])&&t.push(o);return t}},166:function(e,t,n){var r=n(36),a=n(153).f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return o&&"[object Window]"==i.call(e)?function(e){try{return a(e)}catch(t){return o.slice()}}(e):a(r(e))}},168:function(e,t,n){"use strict";var r=n(5),a=n(26),i=n(15),o=n(169),u=n(76),l=n(18),c=n(153).f,f=n(154).f,s=n(25).f,m=n(157).trim,p=r.Number,v=p,b=p.prototype,d="Number"==i(n(78)(b)),h="trim"in String.prototype,y=function(e){var t=u(e,!1);if("string"==typeof t&&t.length>2){var n,r,a,i=(t=h?t.trim():m(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+t}for(var o,l=t.slice(2),c=0,f=l.length;c<f;c++)if((o=l.charCodeAt(c))<48||o>a)return NaN;return parseInt(l,r)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof p&&(d?l(function(){b.valueOf.call(n)}):"Number"!=i(n))?o(new v(y(t)),n,p):y(t)};for(var g,E=n(19)?c(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;E.length>N;N++)a(v,g=E[N])&&!a(p,g)&&s(p,g,f(v,g));p.prototype=b,b.constructor=p,n(14)(r,"Number",p)}},169:function(e,t,n){var r=n(12),a=n(170).set;e.exports=function(e,t,n){var i,o=t.constructor;return o!==n&&"function"==typeof o&&(i=o.prototype)!==n.prototype&&r(i)&&a&&a(e,i),e}},170:function(e,t,n){var r=n(12),a=n(6),i=function(e,t){if(a(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{(r=n(21)(Function.call,n(154).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(a){t=!0}return function(e,n){return i(e,n),t?e.__proto__=n:r(e,n),e}}({},!1):void 0),check:i}},171:function(e,t,n){var r=n(11),a=n(172);r(r.S+r.F*(Number.parseInt!=a),"Number",{parseInt:a})},172:function(e,t,n){var r=n(5).parseInt,a=n(157).trim,i=n(158),o=/^[-+]?0[xX]/;e.exports=8!==r(i+"08")||22!==r(i+"0x16")?function(e,t){var n=a(String(e),3);return r(n,t>>>0||(o.test(n)?16:10))}:r},174:function(e,t,n){var r=n(11),a=n(175)(!0);r(r.S,"Object",{entries:function(e){return a(e)}})},175:function(e,t,n){var r=n(35),a=n(36),i=n(74).f;e.exports=function(e){return function(t){for(var n,o=a(t),u=r(o),l=u.length,c=0,f=[];l>c;)i.call(o,n=u[c++])&&f.push(e?[n,o[n]]:o[n]);return f}}}}]);
//# sourceMappingURL=component---src-pages-form-filler-js-5b16d73f068cc87caa3a.js.map