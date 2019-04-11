!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("VueEasyCm",[],t):"object"==typeof exports?exports.VueEasyCm=t():e.VueEasyCm=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,n){"use strict";t.a={name:"EasyCm",data:function(){return{show:!1,axis:{x:0,y:0}}},props:{tag:{},list:{required:!0},underline:{default:!1},arrow:{default:!1},border:{default:!0},itemWidth:{default:140},itemHeight:{default:36},itemSize:{default:14},offset:{default:function(){return{x:6,y:2}}},borderWidth:{default:6}},mounted:function(){var e=this;this.$root.$on("easyAxis",function(t){t.tag==e.tag&&(e.show=!0,e.axis=t)}),document.addEventListener("click",function(){e.show=!1},!0)},watch:{axis:function(){if(this.border){var e=document.body.offsetWidth,t=document.body.offsetHeight;this.axis.x+this.offset.x+this.itemWidth>=e&&(this.axis.x=e-this.itemWidth-this.borderWidth-this.offset.x),this.axis.y+this.offset.y+this.itemHeight*this.list.length>=t&&(this.axis.y=t-this.itemHeight*this.list.length-this.borderWidth-this.offset.y)}}},computed:{axisComputed:function(){return{top:this.axis.y+this.offset.y+"px",left:this.axis.x+this.offset.x+"px"}},liStyle:function(){return{width:this.itemWidth+"px",height:this.itemHeight+"px",lineHeight:this.itemHeight+"px",fontSize:this.itemSize+"px"}},firstLeft:function(){var e=document.body.offsetWidth;return this.axis.x+2*this.itemWidth>=e},secondLeft:function(){var e=document.body.offsetWidth;return this.axis.x+3*this.itemWidth>=e}},methods:{secondBorderCheck:function(e,t){if(void 0!==t&&void 0!==t.disabled&&t.disabled)return{display:"none"};var n=document.body.offsetWidth,i=document.body.offsetHeight,r=this.axis.y+(e+this.list[e].children.length)*this.itemHeight;return{left:this.axis.x+2*this.itemWidth>=n?"-100%":"100%",top:i>=r?0:-(this.list[e].children.length-1)*this.itemHeight+"px"}},thirdBorderCheck:function(e,t,n){if(void 0!==n&&void 0!==n.disabled&&n.disabled)return{display:"none"};var i=document.body.offsetWidth,r=document.body.offsetHeight,o=this.axis.y+this.list[e].children[t].children.length*this.itemHeight+(e+t)*this.itemHeight+parseInt(this.secondBorderCheck(e).top);return{left:this.axis.x+3*this.itemWidth>=i?"-100%":"100%",top:o>r?-(this.list[e].children[t].children.length-1)*this.itemHeight+"px":0}},callback:function(e,t){if(void 0!==t&&void 0!==t.disabled&&t.disabled)return void(this.show=!0);if(t.hotKey&&e.length>1){var n=this.$el.lastChild.childNodes[e[0]].lastChild.childNodes[e[1]];if(3==e.length&&(n=n.lastChild.childNodes[e[2]]),"none"===window.getComputedStyle(n.parentNode).display)return}this.show=!1,this.$emit("ecmcb",e,t)},upperKey:function(e){if(void 0!==e&&null!=e&&0!=e.length){for(var t="",n=0;n<e.length;n++)t+=e[n].substring(0,1).toUpperCase()+e[n].substring(1,e[n].length)+"-";return t=t.substring(0,t.length-1)}},liClass:function(e){var t="";return t+="separator"==e.id?"item-separator":"",t+=e.disabled?"disabled":""}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),r=n(10),o=n.n(r),s={install:function(e){e.component("easy-cm",i.a),e.prototype.$easycm=function(e,t,n){e.stopPropagation(),e.preventDefault(),t.$emit("easyAxis",{tag:n,x:e.clientX,y:e.clientY})}}};"undefined"!=typeof window&&window.Vue&&(window.Vue.use(s),window.Vue.use(o.a)),t.default=s},function(e,t,n){"use strict";function i(e){n(3)}var r=n(0),o=n(9),s=n(8),a=i,c=s(r.a,o.a,!1,a,"data-v-5c9f9be5",null);t.a=c.exports},function(e,t,n){var i=n(4);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(6)("3cc6f770",i,!0,{})},function(e,t,n){t=e.exports=n(5)(!1),t.push([e.i,'.icon[data-v-5c9f9be5]{width:.9em;height:.9em;vertical-align:-.15em;fill:currentColor;overflow:hidden;position:absolute;right:0;top:50%;transform:translateY(-50%)}.cm-container[data-v-5c9f9be5]{position:fixed;user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;z-index:9999}.cm-ul[data-v-5c9f9be5]{width:100%;padding:0;margin:0;list-style:none;box-shadow:0 0 1px #666;background-color:#fff;color:#2e2e2e}.cm-ul li[data-v-5c9f9be5]{width:100%;box-sizing:border-box;text-align:left;position:relative;cursor:pointer}.cm-ul li:hover>ul[data-v-5c9f9be5]{display:block}.cm-ul li div[data-v-5c9f9be5]{display:inline-block;box-sizing:border-box;width:100%;height:100%;padding:0 .8em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative}.cm-ul li i[data-v-5c9f9be5]{display:inline-block;width:1em;font-size:1.3em;text-align:center}.cm-ul-2[data-v-5c9f9be5],.cm-ul-3[data-v-5c9f9be5]{position:absolute;top:0;display:none;z-index:10000}.cm-left svg[data-v-5c9f9be5]{transform:translateY(-50%) rotate(180deg);left:0}.cm-underline li div[data-v-5c9f9be5]:after{content:"";width:90%;position:absolute;left:5%;top:0;height:1px;background-color:#ccc;z-index:10001}.cm-underline>li:first-child>div[data-v-5c9f9be5]:after,.cm-underline li div[data-v-5c9f9be5]:hover:after{display:none}.cm-ul li[data-v-5c9f9be5]:not(.disabled):hover{background-color:#58c0dd;color:#fff}.cm-ul li.disabled[data-v-5c9f9be5]{cursor:not-allowed;color:#aaa}.item-hotKey[data-v-5c9f9be5]{float:right;color:#aaa;font-size:12px}.item-separator[data-v-5c9f9be5]{padding:0;height:0!important;border-bottom:1px solid #eee;margin:4px 1px}',""])},function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=i(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([o]).join("\n")}return[n].join("\n")}function i(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var i=n(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){function i(e){for(var t=0;t<e.length;t++){var n=e[t],i=u[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(o(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(o(n.parts[r]));u[n.id]={id:n.id,refs:1,parts:s}}}}function r(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function o(e){var t,n,i=document.querySelector("style["+m+'~="'+e.id+'"]');if(i){if(p)return y;i.parentNode.removeChild(i)}if(g){var o=h++;i=f||(f=r()),t=s.bind(null,i,o,!1),n=s.bind(null,i,o,!0)}else i=r(),t=a.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}function s(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=b(t,r);else{var o=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function a(e,t){var n=t.css,i=t.media,r=t.sourceMap;if(i&&e.setAttribute("media",i),v.ssrId&&e.setAttribute(m,t.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(7),u={},d=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,h=0,p=!1,y=function(){},v=null,m="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,r){p=n,v=r||{};var o=l(e,t);return i(o),function(t){for(var n=[],r=0;r<o.length;r++){var s=o[r],a=u[s.id];a.refs--,n.push(a)}t?(o=l(e,t),i(o)):o=[];for(var r=0;r<n.length;r++){var a=n[r];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete u[a.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],i={},r=0;r<t.length;r++){var o=t[r],s=o[0],a=o[1],c=o[2],l=o[3],u={id:e+":"+r,css:a,media:c,sourceMap:l};i[s]?i[s].parts.push(u):n.push(i[s]={id:s,parts:[u]})}return n}},function(e,t){e.exports=function(e,t,n,i,r,o){var s,a=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(s=e,a=e.default);var l="function"==typeof a?a.options:a;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId=r);var u;if(o?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=u):i&&(u=i),u){var d=l.functional,f=d?l.render:l.beforeCreate;d?(l._injectStyles=u,l.render=function(e,t){return u.call(t),f(e,t)}):l.beforeCreate=f?[].concat(f,u):[u]}return{esModule:s,exports:a,options:l}}},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("div",{staticClass:"cm-container",style:e.axisComputed},[n("svg",{staticStyle:{position:"absolute",width:"0px",height:"0px",overflow:"hidden"},attrs:{"aria-hidden":"true"}},[n("symbol",{attrs:{id:"icon-youjiantou",viewBox:"0 0 1024 1024"}},[n("path",{attrs:{d:"M288.791335 65.582671l446.41733 446.417329-446.41733 446.417329z"}})])]),e._v(" "),n("ul",{staticClass:"cm-ul cm-ul-1 easy-cm-ul",class:e.underline?"cm-underline":""},e._l(e.list,function(t,i){return n("li",{class:e.liClass(t),style:e.liStyle},["separator"!=t.id?n("div",{directives:[{name:"shortkey",rawName:"v-shortkey",value:t.hotKey,expression:"item.hotKey"}],class:e.firstLeft?"cm-left":"",on:{shortkey:function(n){return e.callback([i],t)},click:function(n){return n.stopPropagation(),e.callback([i],t)}}},[n("i",{class:t.icon}),e._v(" "),n("span",{staticClass:"item-content"},[e._v(e._s(t.text))]),e._v(" "),void 0!==t.hotKey&&null!=t.hotKey&&t.hotKey.length>0?n("span",{staticClass:"item-hotKey"},[e._v(e._s(e.upperKey(t.hotKey)))]):e._e(),e._v(" "),e.arrow&&t.children&&t.children.length>0?n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-youjiantou"}})]):e._e()]):e._e(),e._v(" "),t.children&&t.children.length>0?n("ul",{staticClass:"cm-ul cm-ul-2 easy-cm-ul",class:e.underline?"cm-underline":"",style:e.secondBorderCheck(i,t)},e._l(t.children,function(t,r){return n("li",{class:e.liClass(t),style:e.liStyle},["separator"!=t.id?n("div",{directives:[{name:"shortkey",rawName:"v-shortkey",value:t.hotKey,expression:"second.hotKey"}],class:e.secondLeft?"cm-left":"",on:{click:function(n){return n.stopPropagation(),e.callback([i,r],t)},shortkey:function(n){return e.callback([i,r],t)}}},[n("i",{class:t.icon}),e._v(" "),n("span",[e._v(e._s(t.text))]),e._v(" "),void 0!==t.hotKey&&null!=t.hotKey&&t.hotKey.length>0?n("span",{staticClass:"item-hotKey"},[e._v(e._s(e.upperKey(t.hotKey)))]):e._e(),e._v(" "),e.arrow&&t.children&&t.children.length>0?n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-youjiantou"}})]):e._e()]):e._e(),e._v(" "),t.children&&t.children.length>0?n("ul",{staticClass:"cm-ul cm-ul-3 easy-cm-ul",class:e.underline?"cm-underline":"",style:e.thirdBorderCheck(i,r,t)},e._l(t.children,function(t,o){return n("li",{class:e.liClass(t),style:e.liStyle},["separator"!=t.id?n("div",{directives:[{name:"shortkey",rawName:"v-shortkey",value:t.hotKey,expression:"third.hotKey"}],on:{click:function(n){return n.stopPropagation(),e.callback([i,r,o],t)},shortkey:function(n){return e.callback([i,r,o],t)}}},[n("i",{class:t.icon}),e._v(" "),n("span",[e._v(e._s(t.text))]),e._v(" "),void 0!==t.hotKey&&null!=t.hotKey&&t.hotKey.length>0?n("span",{staticClass:"item-hotKey"},[e._v(e._s(e.upperKey(t.hotKey)))]):e._e()]):e._e()])}),0):e._e()])}),0):e._e()])}),0)]):e._e()},r=[],o={render:i,staticRenderFns:r};t.a=o},function(e,t,n){!function(t,n){e.exports=n()}("undefined"!=typeof self&&self,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="../dist/",t(t.s=0)}([function(e,t,n){"use strict";(function(i){function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var o;n(2);var s={},a={},c=[],l=[],u=!1,d=function(e){return e="string"==typeof e?JSON.parse(e.replace(/\'/gi,'"')):e,e instanceof Array?{"":e}:e},f=function(e,t,n,i){var r=!0===n.modifiers.push,o=!0===n.modifiers.avoid,s=1==!n.modifiers.focus,a=!0===n.modifiers.once;o?(c=c.filter(function(e){return!e===t}),c.push(t)):v({b:e,push:r,once:a,focus:s,el:i.elm})},h=function(e,t){for(var n in e){var i=s.encodeKey(e[n]),r=a[i].el.indexOf(t);a[i].el.length>1&&r>-1?a[i].el.splice(r,1):delete a[i]}};s.install=function(e,t){l=[].concat(r(t&&t.prevent?t.prevent:[])),e.directive("shortkey",{bind:function(e,t,n){var i=d(t.value);f(i,e,t,n)},update:function(e,t,n){var i=d(t.oldValue);h(i,e);var r=d(t.value);f(r,e,t,n)},unbind:function(e,t){var n=d(t.value);h(n,e)}})},s.decodeKey=function(e){return p(e)},s.encodeKey=function(e){var t={};t.shiftKey=e.includes("shift"),t.ctrlKey=e.includes("ctrl"),t.metaKey=e.includes("meta"),t.altKey=e.includes("alt");var n=p(t);return n+=e.filter(function(e){return!["shift","ctrl","meta","alt"].includes(e)}).join("")};var p=function(e){var t="";return("Shift"===e.key||e.shiftKey)&&(t+="shift"),("Control"===e.key||e.ctrlKey)&&(t+="ctrl"),("Meta"===e.key||e.metaKey)&&(t+="meta"),("Alt"===e.key||e.altKey)&&(t+="alt"),"ArrowUp"===e.key&&(t+="arrowup"),"ArrowLeft"===e.key&&(t+="arrowleft"),"ArrowRight"===e.key&&(t+="arrowright"),"ArrowDown"===e.key&&(t+="arrowdown"),"AltGraph"===e.key&&(t+="altgraph"),"Escape"===e.key&&(t+="esc"),"Enter"===e.key&&(t+="enter"),"Tab"===e.key&&(t+="tab")," "===e.key&&(t+="space"),"PageUp"===e.key&&(t+="pageup"),"PageDown"===e.key&&(t+="pagedown"),"Home"===e.key&&(t+="home"),"End"===e.key&&(t+="end"),"Delete"===e.key&&(t+="del"),"Insert"===e.key&&(t+="insert"),"NumLock"===e.key&&(t+="numlock"),"CapsLock"===e.key&&(t+="capslock"),"Pause"===e.key&&(t+="pause"),"ContextMenu"===e.key&&(t+="contextmenu"),"ScrollLock"===e.key&&(t+="scrolllock"),"BrowserHome"===e.key&&(t+="browserhome"),"MediaSelect"===e.key&&(t+="mediaselect"),(e.key&&" "!==e.key&&1===e.key.length||/F\d{1,2}|\//g.test(e.key))&&(t+=e.key.toLowerCase()),t},y=function(e){var t=new Event("shortkey",{bubbles:!1});a[e].key&&(t.srcKey=a[e].key);var n=a[e].el;n[n.length-1].dispatchEvent(t)};s.keyDown=function(e){(!a[e].once&&!a[e].push||a[e].push&&!u)&&y(e)},i&&Object({NODE_ENV:"production"})&&function(){document.addEventListener("keydown",function(e){var t=s.decodeKey(e);if(m(t))if(e.preventDefault(),e.stopPropagation(),a[t].focus)s.keyDown(t),u=!0;else if(!u){var n=a[t].el;n[n.length-1].focus(),u=!0}},!0),document.addEventListener("keyup",function(e){var t=s.decodeKey(e);m(t)&&(e.preventDefault(),e.stopPropagation(),(a[t].once||a[t].push)&&y(t)),u=!1},!0)}();var v=function(e){var t=e.b,n=e.push,i=e.once,r=e.focus,o=e.el;for(var c in t){var l=s.encodeKey(t[c]),u=a[l]&&a[l].el?a[l].el:[];u.push(o),a[l]={push:n,once:i,focus:r,key:c,el:u}}},m=function(e){var t=!!c.find(function(e){return e===document.activeElement}),n=!!l.find(function(e){return document.activeElement&&document.activeElement.matches(e)});return!!a[e]&&!(t||n)};void 0!==e&&e.exports?e.exports=s:void 0!==(o=function(){return s}.call(t,n,t,e))&&(e.exports=o)}).call(t,n(1))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function r(e){if(u===setTimeout)return setTimeout(e,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(e,0);try{return u(e,0)}catch(t){try{return u.call(null,e,0)}catch(t){return u.call(this,e,0)}}}function o(e){if(d===clearTimeout)return clearTimeout(e);if((d===i||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function s(){y&&h&&(y=!1,h.length?p=h.concat(p):v=-1,p.length&&a())}function a(){if(!y){var e=r(s);y=!0;for(var t=p.length;t;){for(h=p,p=[];++v<t;)h&&h[v].run();v=-1,t=p.length}h=null,y=!1,o(e)}}function c(e,t){this.fun=e,this.array=t}function l(){}var u,d,f=e.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(e){u=n}try{d="function"==typeof clearTimeout?clearTimeout:i}catch(e){d=i}}();var h,p=[],y=!1,v=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];p.push(new c(e,t)),1!==p.length||y||r(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=l,f.addListener=l,f.once=l,f.off=l,f.removeListener=l,f.removeAllListeners=l,f.emit=l,f.prependListener=l,f.prependOnceListener=l,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector)}])})}])});
//# sourceMappingURL=vue-easycm.js.map