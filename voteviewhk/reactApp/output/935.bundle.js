(self.webpackChunkreactApp=self.webpackChunkreactApp||[]).push([[935],{199:(t,n,e)=>{"use strict";function r(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}var o,i;e.d(n,{b4:()=>u,$1:()=>a,We:()=>s,VV:()=>d,w6:()=>m,ly:()=>v,sd:()=>p});const u=(1===(o=r).length&&(i=o,o=function(t,n){return r(i(t),n)}),{left:function(t,n,e,r){for(null==e&&(e=0),null==r&&(r=t.length);e<r;){var i=e+r>>>1;o(t[i],n)<0?e=i+1:r=i}return e},right:function(t,n,e,r){for(null==e&&(e=0),null==r&&(r=t.length);e<r;){var i=e+r>>>1;o(t[i],n)>0?r=i:e=i+1}return e}}).right;function a(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function s(t,n){var e,r,o,i=t.length,u=-1;if(null==n){for(;++u<i;)if(null!=(e=t[u])&&e>=e)for(r=o=e;++u<i;)null!=(e=t[u])&&(r>e&&(r=e),o<e&&(o=e))}else for(;++u<i;)if(null!=(e=n(t[u],u,t))&&e>=e)for(r=o=e;++u<i;)null!=(e=n(t[u],u,t))&&(r>e&&(r=e),o<e&&(o=e));return[r,o]}var c=Array.prototype,l=(c.slice,c.map,Math.sqrt(50)),f=Math.sqrt(10),h=Math.sqrt(2);function p(t,n,e){var r,o,i,u,a=-1;if(e=+e,(t=+t)==(n=+n)&&e>0)return[t];if((r=n<t)&&(o=t,t=n,n=o),0===(u=function(t,n,e){var r=(n-t)/Math.max(0,e),o=Math.floor(Math.log(r)/Math.LN10),i=r/Math.pow(10,o);return o>=0?(i>=l?10:i>=f?5:i>=h?2:1)*Math.pow(10,o):-Math.pow(10,-o)/(i>=l?10:i>=f?5:i>=h?2:1)}(t,n,e))||!isFinite(u))return[];if(u>0)for(t=Math.ceil(t/u),n=Math.floor(n/u),i=new Array(o=Math.ceil(n-t+1));++a<o;)i[a]=(t+a)*u;else for(t=Math.floor(t*u),n=Math.ceil(n*u),i=new Array(o=Math.ceil(t-n+1));++a<o;)i[a]=(t-a)/u;return r&&i.reverse(),i}function v(t,n,e){var r=Math.abs(n-t)/Math.max(0,e),o=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),i=r/o;return i>=l?o*=10:i>=f?o*=5:i>=h&&(o*=2),n<t?-o:o}function d(t,n){var e,r,o=t.length,i=-1;if(null==n){for(;++i<o;)if(null!=(e=t[i])&&e>=e)for(r=e;++i<o;)null!=(e=t[i])&&r>e&&(r=e)}else for(;++i<o;)if(null!=(e=n(t[i],i,t))&&e>=e)for(r=e;++i<o;)null!=(e=n(t[i],i,t))&&r>e&&(r=e);return r}function m(t,n,e){t=+t,n=+n,e=(o=arguments.length)<2?(n=t,t=0,1):o<3?1:+e;for(var r=-1,o=0|Math.max(0,Math.ceil((n-t)/e)),i=new Array(o);++r<o;)i[r]=t+r*e;return i}},63:(t,n,e)=>{"use strict";e.r(n),e.d(n,{entries:()=>g,keys:()=>m,map:()=>u,nest:()=>a,set:()=>d,values:()=>y});var r="$";function o(){}function i(t,n){var e=new o;if(t instanceof o)t.each((function(t,n){e.set(n,t)}));else if(Array.isArray(t)){var r,i=-1,u=t.length;if(null==n)for(;++i<u;)e.set(i,t[i]);else for(;++i<u;)e.set(n(r=t[i],i,t),r)}else if(t)for(var a in t)e.set(a,t[a]);return e}o.prototype=i.prototype={constructor:o,has:function(t){return r+t in this},get:function(t){return this[r+t]},set:function(t,n){return this[r+t]=n,this},remove:function(t){var n=r+t;return n in this&&delete this[n]},clear:function(){for(var t in this)t[0]===r&&delete this[t]},keys:function(){var t=[];for(var n in this)n[0]===r&&t.push(n.slice(1));return t},values:function(){var t=[];for(var n in this)n[0]===r&&t.push(this[n]);return t},entries:function(){var t=[];for(var n in this)n[0]===r&&t.push({key:n.slice(1),value:this[n]});return t},size:function(){var t=0;for(var n in this)n[0]===r&&++t;return t},empty:function(){for(var t in this)if(t[0]===r)return!1;return!0},each:function(t){for(var n in this)n[0]===r&&t(this[n],n.slice(1),this)}};const u=i;function a(){var t,n,e,r=[],o=[];function i(e,o,a,s){if(o>=r.length)return null!=t&&e.sort(t),null!=n?n(e):e;for(var c,l,f,h=-1,p=e.length,v=r[o++],d=u(),m=a();++h<p;)(f=d.get(c=v(l=e[h])+""))?f.push(l):d.set(c,[l]);return d.each((function(t,n){s(m,n,i(t,o,a,s))})),m}function a(t,e){if(++e>r.length)return t;var i,u=o[e-1];return null!=n&&e>=r.length?i=t.entries():(i=[],t.each((function(t,n){i.push({key:n,values:a(t,e)})}))),null!=u?i.sort((function(t,n){return u(t.key,n.key)})):i}return e={object:function(t){return i(t,0,s,c)},map:function(t){return i(t,0,l,f)},entries:function(t){return a(i(t,0,l,f),0)},key:function(t){return r.push(t),e},sortKeys:function(t){return o[r.length-1]=t,e},sortValues:function(n){return t=n,e},rollup:function(t){return n=t,e}}}function s(){return{}}function c(t,n,e){t[n]=e}function l(){return u()}function f(t,n,e){t.set(n,e)}function h(){}var p=u.prototype;function v(t,n){var e=new h;if(t instanceof h)t.each((function(t){e.add(t)}));else if(t){var r=-1,o=t.length;if(null==n)for(;++r<o;)e.add(t[r]);else for(;++r<o;)e.add(n(t[r],r,t))}return e}h.prototype=v.prototype={constructor:h,has:p.has,add:function(t){return this[r+(t+="")]=t,this},remove:p.remove,clear:p.clear,values:p.keys,size:p.size,empty:p.empty,each:p.each};const d=v;function m(t){var n=[];for(var e in t)n.push(e);return n}function y(t){var n=[];for(var e in t)n.push(t[e]);return n}function g(t){var n=[];for(var e in t)n.push({key:e,value:t[e]});return n}},699:(t,n,e)=>{"use strict";e.r(n),e.d(n,{dispatch:()=>c});var r={value:function(){}};function o(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r||/[\s.]/.test(t))throw new Error("illegal type: "+t);r[t]=[]}return new i(r)}function i(t){this._=t}function u(t,n){return t.trim().split(/^|\s+/).map((function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}}))}function a(t,n){for(var e,r=0,o=t.length;r<o;++r)if((e=t[r]).name===n)return e.value}function s(t,n,e){for(var o=0,i=t.length;o<i;++o)if(t[o].name===n){t[o]=r,t=t.slice(0,o).concat(t.slice(o+1));break}return null!=e&&t.push({name:n,value:e}),t}i.prototype=o.prototype={constructor:i,on:function(t,n){var e,r=this._,o=u(t+"",r),i=-1,c=o.length;if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++i<c;)if(e=(t=o[i]).type)r[e]=s(r[e],t.name,n);else if(null==n)for(e in r)r[e]=s(r[e],t.name,null);return this}for(;++i<c;)if((e=(t=o[i]).type)&&(e=a(r[e],t.name)))return e},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new i(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,o=new Array(e),i=0;i<e;++i)o[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(i=0,e=(r=this._[t]).length;i<e;++i)r[i].value.apply(n,o)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],o=0,i=r.length;o<i;++o)r[o].value.apply(n,e)}};const c=o},493:function(t,n,e){var r,o,i,u;function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}u=function(t,n,e,r){"use strict";function o(t,r){var o,i,u,a,s=e.dispatch("beforesend","progress","load","error"),c=n.map(),l=new XMLHttpRequest,f=null,h=null,p=0;function v(t){var n,e=l.status;if(!e&&function(t){var n=t.responseType;return n&&"text"!==n?t.response:t.responseText}(l)||e>=200&&e<300||304===e){if(u)try{n=u.call(o,l)}catch(t){return void s.call("error",o,t)}else n=l;s.call("load",o,n)}else s.call("error",o,t)}if("undefined"!=typeof XDomainRequest&&!("withCredentials"in l)&&/^(http(s)?:)?\/\//.test(t)&&(l=new XDomainRequest),"onload"in l?l.onload=l.onerror=l.ontimeout=v:l.onreadystatechange=function(t){l.readyState>3&&v(t)},l.onprogress=function(t){s.call("progress",o,t)},o={header:function(t,n){return t=(t+"").toLowerCase(),arguments.length<2?c.get(t):(null==n?c.remove(t):c.set(t,n+""),o)},mimeType:function(t){return arguments.length?(i=null==t?null:t+"",o):i},responseType:function(t){return arguments.length?(a=t,o):a},timeout:function(t){return arguments.length?(p=+t,o):p},user:function(t){return arguments.length<1?f:(f=null==t?null:t+"",o)},password:function(t){return arguments.length<1?h:(h=null==t?null:t+"",o)},response:function(t){return u=t,o},get:function(t,n){return o.send("GET",t,n)},post:function(t,n){return o.send("POST",t,n)},send:function(n,e,r){return l.open(n,t,!0,f,h),null==i||c.has("accept")||c.set("accept",i+",*/*"),l.setRequestHeader&&c.each((function(t,n){l.setRequestHeader(n,t)})),null!=i&&l.overrideMimeType&&l.overrideMimeType(i),null!=a&&(l.responseType=a),p>0&&(l.timeout=p),null==r&&"function"==typeof e&&(r=e,e=null),null!=r&&1===r.length&&(r=function(t){return function(n,e){t(null==n?e:null)}}(r)),null!=r&&o.on("error",r).on("load",(function(t){r(null,t)})),s.call("beforesend",o,l),l.send(null==e?null:e),o},abort:function(){return l.abort(),o},on:function(){var t=s.on.apply(s,arguments);return t===s?o:t}},null!=r){if("function"!=typeof r)throw new Error("invalid callback: "+r);return o.get(r)}return o}function i(t,n){return function(e,r){var i=o(e).mimeType(t).response(n);if(null!=r){if("function"!=typeof r)throw new Error("invalid callback: "+r);return i.get(r)}return i}}var u=i("text/html",(function(t){return document.createRange().createContextualFragment(t.responseText)})),a=i("application/json",(function(t){return JSON.parse(t.responseText)})),s=i("text/plain",(function(t){return t.responseText})),c=i("application/xml",(function(t){var n=t.responseXML;if(!n)throw new Error("parse error");return n}));function l(t,n){return function(e,r,i){arguments.length<3&&(i=r,r=null);var u=o(e).mimeType(t);return u.row=function(t){return arguments.length?u.response(f(n,r=t)):r},u.row(r),i?u.get(i):u}}function f(t,n){return function(e){return t(e.responseText,n)}}var h=l("text/csv",r.csvParse),p=l("text/tab-separated-values",r.tsvParse);t.request=o,t.html=u,t.json=a,t.text=s,t.xml=c,t.csv=h,t.tsv=p,Object.defineProperty(t,"__esModule",{value:!0})},"object"===a(n)?u(n,e(63),e(699),e(0)):(o=[n,e(63),e(699),e(0)],void 0===(i="function"==typeof(r=u)?r.apply(n,o):r)||(t.exports=i))},0:(t,n,e)=>{"use strict";e.r(n),e.d(n,{autoType:()=>M,csvFormat:()=>h,csvFormatBody:()=>p,csvFormatRow:()=>d,csvFormatRows:()=>v,csvFormatValue:()=>m,csvParse:()=>l,csvParseRows:()=>f,dsvFormat:()=>s,tsvFormat:()=>w,tsvFormatBody:()=>A,tsvFormatRow:()=>b,tsvFormatRows:()=>x,tsvFormatValue:()=>T,tsvParse:()=>g,tsvParseRows:()=>_});var r={},o={};function i(t){return new Function("d","return {"+t.map((function(t,n){return JSON.stringify(t)+": d["+n+'] || ""'})).join(",")+"}")}function u(t){var n=Object.create(null),e=[];return t.forEach((function(t){for(var r in t)r in n||e.push(n[r]=r)})),e}function a(t,n){var e=t+"",r=e.length;return r<n?new Array(n-r+1).join(0)+e:e}function s(t){var n=new RegExp('["'+t+"\n\r]"),e=t.charCodeAt(0);function s(t,n){var i,u=[],a=t.length,s=0,c=0,l=a<=0,f=!1;function h(){if(l)return o;if(f)return f=!1,r;var n,i,u=s;if(34===t.charCodeAt(u)){for(;s++<a&&34!==t.charCodeAt(s)||34===t.charCodeAt(++s););return(n=s)>=a?l=!0:10===(i=t.charCodeAt(s++))?f=!0:13===i&&(f=!0,10===t.charCodeAt(s)&&++s),t.slice(u+1,n-1).replace(/""/g,'"')}for(;s<a;){if(10===(i=t.charCodeAt(n=s++)))f=!0;else if(13===i)f=!0,10===t.charCodeAt(s)&&++s;else if(i!==e)continue;return t.slice(u,n)}return l=!0,t.slice(u,a)}for(10===t.charCodeAt(a-1)&&--a,13===t.charCodeAt(a-1)&&--a;(i=h())!==o;){for(var p=[];i!==r&&i!==o;)p.push(i),i=h();n&&null==(p=n(p,c++))||u.push(p)}return u}function c(n,e){return n.map((function(n){return e.map((function(t){return f(n[t])})).join(t)}))}function l(n){return n.map(f).join(t)}function f(t){return null==t?"":t instanceof Date?(o=(e=t).getUTCHours(),i=e.getUTCMinutes(),u=e.getUTCSeconds(),s=e.getUTCMilliseconds(),isNaN(e)?"Invalid Date":((r=e.getUTCFullYear())<0?"-"+a(-r,6):r>9999?"+"+a(r,6):a(r,4))+"-"+a(e.getUTCMonth()+1,2)+"-"+a(e.getUTCDate(),2)+(s?"T"+a(o,2)+":"+a(i,2)+":"+a(u,2)+"."+a(s,3)+"Z":u?"T"+a(o,2)+":"+a(i,2)+":"+a(u,2)+"Z":i||o?"T"+a(o,2)+":"+a(i,2)+"Z":"")):n.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t;var e,r,o,i,u,s}return{parse:function(t,n){var e,r,o=s(t,(function(t,o){if(e)return e(t,o-1);r=t,e=n?function(t,n){var e=i(t);return function(r,o){return n(e(r),o,t)}}(t,n):i(t)}));return o.columns=r||[],o},parseRows:s,format:function(n,e){return null==e&&(e=u(n)),[e.map(f).join(t)].concat(c(n,e)).join("\n")},formatBody:function(t,n){return null==n&&(n=u(t)),c(t,n).join("\n")},formatRows:function(t){return t.map(l).join("\n")},formatRow:l,formatValue:f}}var c=s(","),l=c.parse,f=c.parseRows,h=c.format,p=c.formatBody,v=c.formatRows,d=c.formatRow,m=c.formatValue,y=s("\t"),g=y.parse,_=y.parseRows,w=y.format,A=y.formatBody,x=y.formatRows,b=y.formatRow,T=y.formatValue;function M(t){for(var n in t){var e,r,o=t[n].trim();if(o)if("true"===o)o=!0;else if("false"===o)o=!1;else if("NaN"===o)o=NaN;else if(isNaN(e=+o)){if(!(r=o.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/)))continue;S&&r[4]&&!r[7]&&(o=o.replace(/-/g,"/").replace(/T/," ")),o=new Date(o)}else o=e;else o=null;t[n]=o}return t}var S=new Date("2019-01-01T00:00").getHours()||new Date("2019-07-01T00:00").getHours()},293:(t,n,e)=>{"use strict";e.r(n),e.d(n,{clientPoint:()=>wt,create:()=>dt,creator:()=>s,customEvent:()=>ut,event:()=>tt,local:()=>yt,matcher:()=>p,mouse:()=>At,namespace:()=>i,namespaces:()=>o,select:()=>vt,selectAll:()=>xt,selection:()=>pt,selector:()=>l,selectorAll:()=>h,style:()=>E,touch:()=>bt,touches:()=>Tt,window:()=>M});var r="http://www.w3.org/1999/xhtml";const o={svg:"http://www.w3.org/2000/svg",xhtml:r,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function i(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),o.hasOwnProperty(n)?{space:o[n],local:t}:t}function u(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===r&&n.documentElement.namespaceURI===r?n.createElement(t):n.createElementNS(e,t)}}function a(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function s(t){var n=i(t);return(n.local?a:u)(n)}function c(){}function l(t){return null==t?c:function(){return this.querySelector(t)}}function f(){return[]}function h(t){return null==t?f:function(){return this.querySelectorAll(t)}}function p(t){return function(){return this.matches(t)}}function v(t){return new Array(t.length)}function d(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}function m(t,n,e,r,o,i){for(var u,a=0,s=n.length,c=i.length;a<c;++a)(u=n[a])?(u.__data__=i[a],r[a]=u):e[a]=new d(t,i[a]);for(;a<s;++a)(u=n[a])&&(o[a]=u)}function y(t,n,e,r,o,i,u){var a,s,c,l={},f=n.length,h=i.length,p=new Array(f);for(a=0;a<f;++a)(s=n[a])&&(p[a]=c="$"+u.call(s,s.__data__,a,n),c in l?o[a]=s:l[c]=s);for(a=0;a<h;++a)(s=l[c="$"+u.call(t,i[a],a,i)])?(r[a]=s,s.__data__=i[a],l[c]=null):e[a]=new d(t,i[a]);for(a=0;a<f;++a)(s=n[a])&&l[p[a]]===s&&(o[a]=s)}function g(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function _(t){return function(){this.removeAttribute(t)}}function w(t){return function(){this.removeAttributeNS(t.space,t.local)}}function A(t,n){return function(){this.setAttribute(t,n)}}function x(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function b(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function T(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function M(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function S(t){return function(){this.style.removeProperty(t)}}function C(t,n,e){return function(){this.style.setProperty(t,n,e)}}function N(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function E(t,n){return t.style.getPropertyValue(n)||M(t).getComputedStyle(t,null).getPropertyValue(n)}function R(t){return function(){delete this[t]}}function P(t,n){return function(){this[t]=n}}function k(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}function j(t){return t.trim().split(/^|\s+/)}function q(t){return t.classList||new D(t)}function D(t){this._node=t,this._names=j(t.getAttribute("class")||"")}function L(t,n){for(var e=q(t),r=-1,o=n.length;++r<o;)e.add(n[r])}function O(t,n){for(var e=q(t),r=-1,o=n.length;++r<o;)e.remove(n[r])}function F(t){return function(){L(this,t)}}function V(t){return function(){O(this,t)}}function B(t,n){return function(){(n.apply(this,arguments)?L:O)(this,t)}}function U(){this.textContent=""}function H(t){return function(){this.textContent=t}}function X(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}function z(){this.innerHTML=""}function I(t){return function(){this.innerHTML=t}}function $(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}function G(){this.nextSibling&&this.parentNode.appendChild(this)}function Z(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Y(){return null}function J(){var t=this.parentNode;t&&t.removeChild(this)}function K(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function W(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}d.prototype={constructor:d,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}},D.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var Q={},tt=null;function nt(t,n,e){return t=et(t,n,e),function(n){var e=n.relatedTarget;e&&(e===this||8&e.compareDocumentPosition(this))||t.call(this,n)}}function et(t,n,e){return function(r){var o=tt;tt=r;try{t.call(this,this.__data__,n,e)}finally{tt=o}}}function rt(t){return t.trim().split(/^|\s+/).map((function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}}))}function ot(t){return function(){var n=this.__on;if(n){for(var e,r=0,o=-1,i=n.length;r<i;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++o]=e:this.removeEventListener(e.type,e.listener,e.capture);++o?n.length=o:delete this.__on}}}function it(t,n,e){var r=Q.hasOwnProperty(t.type)?nt:et;return function(o,i,u){var a,s=this.__on,c=r(n,i,u);if(s)for(var l=0,f=s.length;l<f;++l)if((a=s[l]).type===t.type&&a.name===t.name)return this.removeEventListener(a.type,a.listener,a.capture),this.addEventListener(a.type,a.listener=c,a.capture=e),void(a.value=n);this.addEventListener(t.type,c,e),a={type:t.type,name:t.name,value:n,listener:c,capture:e},s?s.push(a):this.__on=[a]}}function ut(t,n,e,r){var o=tt;t.sourceEvent=tt,tt=t;try{return n.apply(e,r)}finally{tt=o}}function at(t,n,e){var r=M(t),o=r.CustomEvent;"function"==typeof o?o=new o(n,e):(o=r.document.createEvent("Event"),e?(o.initEvent(n,e.bubbles,e.cancelable),o.detail=e.detail):o.initEvent(n,!1,!1)),t.dispatchEvent(o)}function st(t,n){return function(){return at(this,t,n)}}function ct(t,n){return function(){return at(this,t,n.apply(this,arguments))}}"undefined"!=typeof document&&("onmouseenter"in document.documentElement||(Q={mouseenter:"mouseover",mouseleave:"mouseout"}));var lt=[null];function ft(t,n){this._groups=t,this._parents=n}function ht(){return new ft([[document.documentElement]],lt)}ft.prototype=ht.prototype={constructor:ft,select:function(t){"function"!=typeof t&&(t=l(t));for(var n=this._groups,e=n.length,r=new Array(e),o=0;o<e;++o)for(var i,u,a=n[o],s=a.length,c=r[o]=new Array(s),f=0;f<s;++f)(i=a[f])&&(u=t.call(i,i.__data__,f,a))&&("__data__"in i&&(u.__data__=i.__data__),c[f]=u);return new ft(r,this._parents)},selectAll:function(t){"function"!=typeof t&&(t=h(t));for(var n=this._groups,e=n.length,r=[],o=[],i=0;i<e;++i)for(var u,a=n[i],s=a.length,c=0;c<s;++c)(u=a[c])&&(r.push(t.call(u,u.__data__,c,a)),o.push(u));return new ft(r,o)},filter:function(t){"function"!=typeof t&&(t=p(t));for(var n=this._groups,e=n.length,r=new Array(e),o=0;o<e;++o)for(var i,u=n[o],a=u.length,s=r[o]=[],c=0;c<a;++c)(i=u[c])&&t.call(i,i.__data__,c,u)&&s.push(i);return new ft(r,this._parents)},data:function(t,n){if(!t)return v=new Array(this.size()),l=-1,this.each((function(t){v[++l]=t})),v;var e,r=n?y:m,o=this._parents,i=this._groups;"function"!=typeof t&&(e=t,t=function(){return e});for(var u=i.length,a=new Array(u),s=new Array(u),c=new Array(u),l=0;l<u;++l){var f=o[l],h=i[l],p=h.length,v=t.call(f,f&&f.__data__,l,o),d=v.length,g=s[l]=new Array(d),_=a[l]=new Array(d);r(f,h,g,_,c[l]=new Array(p),v,n);for(var w,A,x=0,b=0;x<d;++x)if(w=g[x]){for(x>=b&&(b=x+1);!(A=_[b])&&++b<d;);w._next=A||null}}return(a=new ft(a,o))._enter=s,a._exit=c,a},enter:function(){return new ft(this._enter||this._groups.map(v),this._parents)},exit:function(){return new ft(this._exit||this._groups.map(v),this._parents)},join:function(t,n,e){var r=this.enter(),o=this,i=this.exit();return r="function"==typeof t?t(r):r.append(t+""),null!=n&&(o=n(o)),null==e?i.remove():e(i),r&&o?r.merge(o).order():o},merge:function(t){for(var n=this._groups,e=t._groups,r=n.length,o=e.length,i=Math.min(r,o),u=new Array(r),a=0;a<i;++a)for(var s,c=n[a],l=e[a],f=c.length,h=u[a]=new Array(f),p=0;p<f;++p)(s=c[p]||l[p])&&(h[p]=s);for(;a<r;++a)u[a]=n[a];return new ft(u,this._parents)},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,o=t[n],i=o.length-1,u=o[i];--i>=0;)(r=o[i])&&(u&&4^r.compareDocumentPosition(u)&&u.parentNode.insertBefore(r,u),u=r);return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=g);for(var e=this._groups,r=e.length,o=new Array(r),i=0;i<r;++i){for(var u,a=e[i],s=a.length,c=o[i]=new Array(s),l=0;l<s;++l)(u=a[l])&&(c[l]=u);c.sort(n)}return new ft(o,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){var t=new Array(this.size()),n=-1;return this.each((function(){t[++n]=this})),t},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],o=0,i=r.length;o<i;++o){var u=r[o];if(u)return u}return null},size:function(){var t=0;return this.each((function(){++t})),t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var o,i=n[e],u=0,a=i.length;u<a;++u)(o=i[u])&&t.call(o,o.__data__,u,i);return this},attr:function(t,n){var e=i(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?w:_:"function"==typeof n?e.local?T:b:e.local?x:A)(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?S:"function"==typeof n?N:C)(t,n,null==e?"":e)):E(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?R:"function"==typeof n?k:P)(t,n)):this.node()[t]},classed:function(t,n){var e=j(t+"");if(arguments.length<2){for(var r=q(this.node()),o=-1,i=e.length;++o<i;)if(!r.contains(e[o]))return!1;return!0}return this.each(("function"==typeof n?B:n?F:V)(e,n))},text:function(t){return arguments.length?this.each(null==t?U:("function"==typeof t?X:H)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?z:("function"==typeof t?$:I)(t)):this.node().innerHTML},raise:function(){return this.each(G)},lower:function(){return this.each(Z)},append:function(t){var n="function"==typeof t?t:s(t);return this.select((function(){return this.appendChild(n.apply(this,arguments))}))},insert:function(t,n){var e="function"==typeof t?t:s(t),r=null==n?Y:"function"==typeof n?n:l(n);return this.select((function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)}))},remove:function(){return this.each(J)},clone:function(t){return this.select(t?W:K)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,o,i=rt(t+""),u=i.length;if(!(arguments.length<2)){for(a=n?it:ot,null==e&&(e=!1),r=0;r<u;++r)this.each(a(i[r],n,e));return this}var a=this.node().__on;if(a)for(var s,c=0,l=a.length;c<l;++c)for(r=0,s=a[c];r<u;++r)if((o=i[r]).type===s.type&&o.name===s.name)return s.value},dispatch:function(t,n){return this.each(("function"==typeof n?ct:st)(t,n))}};const pt=ht;function vt(t){return"string"==typeof t?new ft([[document.querySelector(t)]],[document.documentElement]):new ft([[t]],lt)}function dt(t){return vt(s(t).call(document.documentElement))}var mt=0;function yt(){return new gt}function gt(){this._="@"+(++mt).toString(36)}function _t(){for(var t,n=tt;t=n.sourceEvent;)n=t;return n}function wt(t,n){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var r=e.createSVGPoint();return r.x=n.clientX,r.y=n.clientY,[(r=r.matrixTransform(t.getScreenCTM().inverse())).x,r.y]}var o=t.getBoundingClientRect();return[n.clientX-o.left-t.clientLeft,n.clientY-o.top-t.clientTop]}function At(t){var n=_t();return n.changedTouches&&(n=n.changedTouches[0]),wt(t,n)}function xt(t){return"string"==typeof t?new ft([document.querySelectorAll(t)],[document.documentElement]):new ft([null==t?[]:t],lt)}function bt(t,n,e){arguments.length<3&&(e=n,n=_t().changedTouches);for(var r,o=0,i=n?n.length:0;o<i;++o)if((r=n[o]).identifier===e)return wt(t,r);return null}function Tt(t,n){null==n&&(n=_t().touches);for(var e=0,r=n?n.length:0,o=new Array(r);e<r;++e)o[e]=wt(t,n[e]);return o}gt.prototype=yt.prototype={constructor:gt,get:function(t){for(var n=this._;!(n in t);)if(!(t=t.parentNode))return;return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}}}}]);