"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[838],{5718:(t,e,n)=>{n.d(e,{PH:()=>o,h0:()=>v,ok:()=>w,tg:()=>g});var r,o,i=n(9804),c=n.n(i),a=n(9340),u=n(3245),s=n(6819),l=(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),p=function(){return p=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},p.apply(this,arguments)},f=function(t,e,n,r){var o,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(c=(i<3?o(c):i>3?o(e,n,c):o(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},d=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function c(t){try{u(r.next(t))}catch(t){i(t)}}function a(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,a)}u((r=r.apply(t,e||[])).next())}))},h=function(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(c=0)),c;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,r=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){c=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){c.label=a[1];break}if(6===a[0]&&c.label<o[1]){c.label=o[1],o=a;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(a);break}o[2]&&c.ops.pop(),c.trys.pop();continue}a=e.call(t,c)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},y={defaultSetupTime:nodecg.Replicant("defaultSetupTime"),horaroImportSavedOpts:nodecg.Replicant("horaroImportSavedOpts"),horaroImportStatus:nodecg.Replicant("horaroImportStatus"),oengusImportStatus:nodecg.Replicant("oengusImportStatus"),runDataActiveRun:nodecg.Replicant("runDataActiveRun"),runDataActiveRunSurrounding:nodecg.Replicant("runDataActiveRunSurrounding"),runDataArray:nodecg.Replicant("runDataArray"),runFinishTimes:nodecg.Replicant("runFinishTimes"),timer:nodecg.Replicant("timer"),timerChangesDisabled:nodecg.Replicant("timerChangesDisabled"),twitchAPIData:nodecg.Replicant("twitchAPIData"),twitchChannelInfo:nodecg.Replicant("twitchChannelInfo"),twitchCommercialTimer:nodecg.Replicant("twitchCommercialTimer")},v=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.reps={},e}return l(e,t),e.prototype.setState=function(t){var e=t.name,n=t.val;a.Ay.set(this.reps,e,c()(n))},e.prototype.setReplicant=function(t){var e=t.name,n=t.val,r=t.merge,o=void 0===r||r,i=this.reps[e],u=n;i&&o&&"object"==typeof i&&!Array.isArray(i)&&(u=p(p({},c()(i)),n)),a.Ay.set(this.reps,e,c()(u)),y[e].value=c()(u)},f([s.sM],e.prototype,"setState",null),f([s.sM],e.prototype,"setReplicant",null),f([(0,s.nV)({name:"ReplicantModule",namespaced:!0})],e)}(s.hw),w=(0,u.MF)("ReplicantModule");function g(t){return d(this,void 0,Promise,(function(){return h(this,(function(e){switch(e.label){case 0:return Object.keys(y).forEach((function(e){y[e].on("change",(function(n){t.commit("ReplicantModule/setState",{name:e,val:n})}))})),[4,NodeCG.waitForReplicants.apply(NodeCG,Object.keys(y).map((function(t){return y[t]})))];case 1:return e.sent(),o=(0,s.f_)(v,t),[2]}}))}))}},9180:(t,e,n)=>{n.d(e,{o:()=>o});var r=n(305);function o(t,e){void 0===e&&(e={});var n=e.deep,o=void 0!==n&&n,i=e.immediate,c=void 0!==i&&i;return(0,r.u1)((function(e,n){"object"!=typeof e.watch&&(e.watch=Object.create(null));var r=e.watch;"object"!=typeof r[t]||Array.isArray(r[t])?void 0===r[t]&&(r[t]=[]):r[t]=[r[t]],r[t].push({handler:n,deep:o,immediate:c})}))}},7290:(t,e,n)=>{n.d(e,{$c:()=>b,BN:()=>g,D9:()=>R,Dg:()=>s,HP:()=>h,LJ:()=>o,PT:()=>v,Zb:()=>w,bD:()=>i,fF:()=>u,fl:()=>a,fo:()=>m,g8:()=>d,kW:()=>l,no:()=>c,qE:()=>O,uP:()=>f});let r=!1;try{if("undefined"!=typeof window){const t=Object.defineProperty({},"passive",{get:()=>{r=!0}});window.addEventListener("testListener",t,t),window.removeEventListener("testListener",t,t)}}catch(t){console.warn(t)}function o(t,e,n){const r=e.length-1;if(r<0)return void 0===t?n:t;for(let o=0;o<r;o++){if(null==t)return n;t=t[e[o]]}return null==t||void 0===t[e[r]]?n:t[e[r]]}function i(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime())return!1;if(t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length===Object.keys(e).length&&n.every((n=>i(t[n],e[n])))}function c(t,e,n){return null!=t&&e&&"string"==typeof e?void 0!==t[e]?t[e]:o(t,(e=(e=e.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),n):n}function a(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return 0;return+window.getComputedStyle(t).getPropertyValue("z-index")||a(t.parentNode)}function u(t,e){const n={};for(let r=0;r<e.length;r++){const o=e[r];void 0!==t[o]&&(n[o]=t[o])}return n}function s(t,e="px"){return null==t||""===t?void 0:isNaN(+t)?String(t):`${Number(t)}${e}`}function l(t){return(t||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function p(t){return null!==t&&"object"==typeof t}const f=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function d(t,e){const n=t.$vuetify.icons.component;if(e.startsWith("$")){const n=c(t,`$vuetify.icons.values.${e.split("$").pop().split(".").pop()}`,e);if("string"!=typeof n)return n;e=n}return null==n?e:{component:n,props:{icon:e}}}function h(t){return Object.keys(t)}const y=/-(\w)/g,v=t=>t.replace(y,((t,e)=>e?e.toUpperCase():""));function w(t){return t.charAt(0).toUpperCase()+t.slice(1)}function g(t){return null!=t?Array.isArray(t)?t:[t]:[]}function m(t,e,n){return t.$slots.hasOwnProperty(e)&&t.$scopedSlots.hasOwnProperty(e)&&t.$scopedSlots[e].name?n?"v-slot":"scoped":t.$slots.hasOwnProperty(e)?"normal":t.$scopedSlots.hasOwnProperty(e)?"scoped":void 0}function b(t,e="default",n,r=!1){const o=l(e);return t.$scopedSlots.hasOwnProperty(e)?t.$scopedSlots[e](n instanceof Function?n():n):t.$scopedSlots.hasOwnProperty(o)?t.$scopedSlots[o](n instanceof Function?n():n):!t.$slots.hasOwnProperty(e)||n&&!r?!t.$slots.hasOwnProperty(o)||n&&!r?void 0:t.$slots[o]:t.$slots[e]}function O(t,e=0,n=1){return Math.max(e,Math.min(n,t))}function R(t={},e={}){for(const n in e){const r=t[n],o=e[n];p(r)&&p(o)?t[n]=R(r,o):t[n]=o}return t}}}]);