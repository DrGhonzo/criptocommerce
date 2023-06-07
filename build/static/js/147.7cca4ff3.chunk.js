(this["webpackJsonpacorn-react"]=this["webpackJsonpacorn-react"]||[]).push([[147],{827:function(e,t,n){"use strict";var r=n(977),o=n.n(r),a=n(0);t.a=function(e,t,n){var r=Object(a.useRef)(null);r.current=t,Object(a.useEffect)((function(){return o.a.bind(e,(function(e,t){"function"===typeof r.current&&r.current(e,t)}),n),function(){o.a.unbind(e)}}),[e])}},977:function(e,t,n){var r;!function(o,a,i){if(o){for(var c,u={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},s={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},l={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},f={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},p=1;p<20;++p)u[111+p]="f"+p;for(p=0;p<=9;++p)u[p+96]=p.toString();b.prototype.bind=function(e,t,n){var r=this;return e=e instanceof Array?e:[e],r._bindMultiple.call(r,e,t,n),r},b.prototype.unbind=function(e,t){return this.bind.call(this,e,(function(){}),t)},b.prototype.trigger=function(e,t){var n=this;return n._directMap[e+":"+t]&&n._directMap[e+":"+t]({},e),n},b.prototype.reset=function(){var e=this;return e._callbacks={},e._directMap={},e},b.prototype.stopCallback=function(e,t){if((" "+t.className+" ").indexOf(" mousetrap ")>-1)return!1;if(k(t,this.target))return!1;if("composedPath"in e&&"function"===typeof e.composedPath){var n=e.composedPath()[0];n!==e.target&&(t=n)}return"INPUT"==t.tagName||"SELECT"==t.tagName||"TEXTAREA"==t.tagName||t.isContentEditable},b.prototype.handleKey=function(){var e=this;return e._handleKey.apply(e,arguments)},b.addKeycodes=function(e){for(var t in e)e.hasOwnProperty(t)&&(u[t]=e[t]);c=null},b.init=function(){var e=b(a);for(var t in e)"_"!==t.charAt(0)&&(b[t]=function(t){return function(){return e[t].apply(e,arguments)}}(t))},b.init(),o.Mousetrap=b,e.exports&&(e.exports=b),void 0===(r=function(){return b}.call(t,n,t,e))||(e.exports=r)}function h(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)}function d(e){if("keypress"==e.type){var t=String.fromCharCode(e.which);return e.shiftKey||(t=t.toLowerCase()),t}return u[e.which]?u[e.which]:s[e.which]?s[e.which]:String.fromCharCode(e.which).toLowerCase()}function y(e){return"shift"==e||"ctrl"==e||"alt"==e||"meta"==e}function m(e,t,n){return n||(n=function(){if(!c)for(var e in c={},u)e>95&&e<112||u.hasOwnProperty(e)&&(c[u[e]]=e);return c}()[e]?"keydown":"keypress"),"keypress"==n&&t.length&&(n="keydown"),n}function v(e,t){var n,r,o,a=[];for(n=function(e){return"+"===e?["+"]:(e=e.replace(/\+{2}/g,"+plus")).split("+")}(e),o=0;o<n.length;++o)r=n[o],f[r]&&(r=f[r]),t&&"keypress"!=t&&l[r]&&(r=l[r],a.push("shift")),y(r)&&a.push(r);return{key:r,modifiers:a,action:t=m(r,a,t)}}function k(e,t){return null!==e&&e!==a&&(e===t||k(e.parentNode,t))}function b(e){var t=this;if(e=e||a,!(t instanceof b))return new b(e);t.target=e,t._callbacks={},t._directMap={};var n,r={},o=!1,i=!1,c=!1;function u(e){e=e||{};var t,n=!1;for(t in r)e[t]?n=!0:r[t]=0;n||(c=!1)}function s(e,n,o,a,i,c){var u,s,l,f,p=[],h=o.type;if(!t._callbacks[e])return[];for("keyup"==h&&y(e)&&(n=[e]),u=0;u<t._callbacks[e].length;++u)if(s=t._callbacks[e][u],(a||!s.seq||r[s.seq]==s.level)&&h==s.action&&("keypress"==h&&!o.metaKey&&!o.ctrlKey||(l=n,f=s.modifiers,l.sort().join(",")===f.sort().join(",")))){var d=!a&&s.combo==i,m=a&&s.seq==a&&s.level==c;(d||m)&&t._callbacks[e].splice(u,1),p.push(s)}return p}function l(e,n,r,o){t.stopCallback(n,n.target||n.srcElement,r,o)||!1===e(n,r)&&(function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}(n),function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}(n))}function f(e){"number"!==typeof e.which&&(e.which=e.keyCode);var n=d(e);n&&("keyup"!=e.type||o!==n?t.handleKey(n,function(e){var t=[];return e.shiftKey&&t.push("shift"),e.altKey&&t.push("alt"),e.ctrlKey&&t.push("ctrl"),e.metaKey&&t.push("meta"),t}(e),e):o=!1)}function p(e,t,a,i){function s(t){return function(){c=t,++r[e],clearTimeout(n),n=setTimeout(u,1e3)}}function f(t){l(a,t,e),"keyup"!==i&&(o=d(t)),setTimeout(u,10)}r[e]=0;for(var p=0;p<t.length;++p){var h=p+1===t.length?f:s(i||v(t[p+1]).action);m(t[p],h,i,e,p)}}function m(e,n,r,o,a){t._directMap[e+":"+r]=n;var i,c=(e=e.replace(/\s+/g," ")).split(" ");c.length>1?p(e,c,n,r):(i=v(e,r),t._callbacks[i.key]=t._callbacks[i.key]||[],s(i.key,i.modifiers,{type:i.action},o,e,a),t._callbacks[i.key][o?"unshift":"push"]({callback:n,modifiers:i.modifiers,action:i.action,seq:o,level:a,combo:e}))}t._handleKey=function(e,t,n){var r,o=s(e,t,n),a={},f=0,p=!1;for(r=0;r<o.length;++r)o[r].seq&&(f=Math.max(f,o[r].level));for(r=0;r<o.length;++r)if(o[r].seq){if(o[r].level!=f)continue;p=!0,a[o[r].seq]=1,l(o[r].callback,n,o[r].combo,o[r].seq)}else p||l(o[r].callback,n,o[r].combo);var h="keypress"==n.type&&i;n.type!=c||y(e)||h||u(a),i=p&&"keydown"==n.type},t._bindMultiple=function(e,t,n){for(var r=0;r<e.length;++r)m(e[r],t,n)},h(e,"keypress",f),h(e,"keydown",f),h(e,"keyup",f)}}("undefined"!==typeof window?window:null,"undefined"!==typeof window?document:null)}}]);