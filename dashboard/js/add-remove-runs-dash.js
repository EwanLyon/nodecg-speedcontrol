(()=>{var t,e={931:t=>{t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"panelTitle":"Add/Remove Runs","removeAllRuns":"Remove All Runs"},"ja":{"panelTitle":"走者情報の追加/削除","removeAllRuns":"全ての走者情報の削除"}}'),delete t.options._Ctor}},8364:(t,e,n)=>{"use strict";var o,r,i=n(9340),a=n(6882),s=n(9804),l=n.n(s),c=n(3245),u=n(6819),p=(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),f=function(){return f=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},f.apply(this,arguments)},d=function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},h={defaultSetupTime:nodecg.Replicant("defaultSetupTime"),horaroImportSavedOpts:nodecg.Replicant("horaroImportSavedOpts"),horaroImportStatus:nodecg.Replicant("horaroImportStatus"),oengusImportStatus:nodecg.Replicant("oengusImportStatus"),runDataActiveRun:nodecg.Replicant("runDataActiveRun"),runDataActiveRunSurrounding:nodecg.Replicant("runDataActiveRunSurrounding"),runDataArray:nodecg.Replicant("runDataArray"),runFinishTimes:nodecg.Replicant("runFinishTimes"),timer:nodecg.Replicant("timer"),timerChangesDisabled:nodecg.Replicant("timerChangesDisabled"),twitchAPIData:nodecg.Replicant("twitchAPIData"),twitchChannelInfo:nodecg.Replicant("twitchChannelInfo"),twitchCommercialTimer:nodecg.Replicant("twitchCommercialTimer")},v=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.reps={},e}return p(e,t),e.prototype.setState=function(t){var e=t.name,n=t.val;i.Ay.set(this.reps,e,l()(n))},e.prototype.setReplicant=function(t){var e=t.name,n=t.val,o=t.merge,r=void 0===o||o,a=this.reps[e],s=n;a&&r&&"object"==typeof a&&!Array.isArray(a)&&(s=f(f({},l()(a)),n)),i.Ay.set(this.reps,e,l()(s)),h[e].value=l()(s)},d([u.sM],e.prototype,"setState",null),d([u.sM],e.prototype,"setReplicant",null),d([(0,u.nV)({name:"ReplicantModule",namespaced:!0})],e)}(u.hw),g=(0,c.MF)("ReplicantModule"),y=n(1932),m=n(2297),b=n(3324),w=n(4211),S=n(4141),A=n(8395),R=n(9251),O=n(7290),_=n(3041);!function(t){t.xSmall="12px",t.small="16px",t.default="24px",t.medium="28px",t.large="36px",t.xLarge="40px"}(r||(r={}));const x=(0,_.A)(w.A,S.A,A.A,R.A).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:()=>!1,hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),(0,O.g8)(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=(0,O.HP)(t).find((e=>t[e]));return e&&r[e]||(0,O.Dg)(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){const t=this.getSize(),e={...this.getDefaultData(),style:t?{fontSize:t,height:t,width:t}:void 0};return this.applyColors(e),e},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){const n=[],o=this.getDefaultData();let r="material-icons";const i=t.indexOf("-"),a=i<=-1;a?n.push(t):(r=t.slice(0,i),function(t){return["fas","far","fal","fab","fad","fak"].some((e=>t.includes(e)))}(r)&&(r="")),o.class[r]=!0,o.class[t]=!a;const s=this.getSize();return s&&(o.style={fontSize:s}),this.applyColors(o),e(this.hasClickListener?"button":this.tag,o,n)},renderSvgIcon(t,e){const n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},o=this.getSize();return o&&(n.style={fontSize:o,height:o,width:o}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent(t,e){const n={class:{"v-icon__component":!0}},o=this.getSize();o&&(n.style={fontSize:o,height:o,width:o}),this.applyColors(n);const r=t.component;return n.props=t.props,n.nativeOn=n.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(r,n)])}},render(t){const e=this.getIcon();return"string"==typeof e?function(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}}),C=i.Ay.extend({name:"v-icon",$_wrapperFor:x,functional:!0,render(t,{data:e,children:n}){let o="";return e.domProps&&(o=e.domProps.textContent||e.domProps.innerHTML||o,delete e.domProps.textContent,delete e.domProps.innerHTML),t(x,e,o?[o]:n)}});var P=n(305);function k(t){return new Promise((function(e){var n,o=nodecg.getDialog(t),r=null==o?void 0:o.querySelector("iframe");r&&o?(null===(n=r.contentWindow)||void 0===n?void 0:n.openDialog)?e():(r.addEventListener("load",(function(){o.close(),e()}),{once:!0}),o.open()):e()}))}function D(t){var e;try{var n=nodecg.getDialog(t),o=(null===(e=null==n?void 0:n.querySelector("iframe"))||void 0===e?void 0:e.contentWindow)||null;if(!o)throw new Error("Could not find the iFrame");return o}catch(e){nodecg.log.error('getDialog could not successfully find dialog "'.concat(t,'":'),e),window.alert("Attempted to open a NodeCG dialog but failed (if you are using a standalone version of a dashboard panel, this is not yet supported).")}return null}n(7980),n(8010),n(6577),n(8969),n(9493);var j=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),$=function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a};const L=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return j(e,t),Object.defineProperty(e.prototype,"disableRemoveAll",{get:function(){return["running","paused"].includes(this.timer.state)},enumerable:!1,configurable:!0}),e.prototype.openAddDialog=function(){k("run-modification-dialog").then((function(){var t=D("run-modification-dialog");t&&t.openDialog({mode:"New"})}))},e.prototype.removeAllRunsConfirm=function(){var t=this;k("alert-dialog").then((function(){var e=D("alert-dialog");e&&e.openDialog({name:"RemoveAllRunsConfirm",func:t.removeAllRuns})}))},e.prototype.removeAllRuns=function(t){return e=this,n=void 0,r=function(){return function(t,e){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(l){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(n=1,o&&(r=2&s[0]?o.return:s[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,s[1])).done)return r;switch(o=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,o=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){a.label=s[1];break}if(6===s[0]&&a.label<r[1]){a.label=r[1],r=s;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(s);break}r[2]&&a.ops.pop(),a.trys.pop();continue}s=e.call(t,a)}catch(t){s=[6,t],o=0}finally{n=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}(this,(function(e){switch(e.label){case 0:if(!t)return[3,4];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,nodecg.sendMessage("removeAllRuns")];case 2:case 3:return e.sent(),[3,4];case 4:return[2]}}))},new((o=Promise)||(o=Promise))((function(t,i){function a(t){try{l(r.next(t))}catch(t){i(t)}}function s(t){try{l(r.throw(t))}catch(t){i(t)}}function l(e){var n;e.done?t(e.value):(n=e.value,n instanceof o?n:new o((function(t){t(n)}))).then(a,s)}l((r=r.apply(e,n||[])).next())}));var e,n,o,r},e.prototype.mounted=function(){var t;(null===(t=window.frameElement)||void 0===t?void 0:t.parentElement)&&window.frameElement.parentElement.setAttribute("display-title",this.$t("panelTitle"))},$([g.State((function(t){return t.reps.timer}))],e.prototype,"timer",void 0),$([P.Ay],e)}(i.Ay);var T=n(5225),I=n(931);const z=n.n(I)();var M=(0,T.A)(L,(function(){var t=this,e=t._self._c;return t._self._setupProxy,e(m.A,[e(b.A,{staticClass:"green darken-2",on:{click:t.openAddDialog}},[e(C,{staticClass:"pr-2"},[t._v("\n      mdi-plus-box\n    ")]),t._v(t._s(t.$t("addNewRun"))+"\n  ")],1),t._v(" "),e(b.A,{staticClass:"red darken-2 mt-3",attrs:{disabled:t.disableRemoveAll},on:{click:t.removeAllRunsConfirm}},[e(C,{staticClass:"pr-2"},[t._v("\n      mdi-delete\n    ")]),t._v(t._s(t.$t("removeAllRuns"))+"\n  ")],1)],1)}),[],!1,null,null,null);"function"==typeof z&&z(M);const E=M.exports;var F=n(3578);i.Ay.use(F.Ay);const N=new F.il({strict:!1,state:{},modules:{ReplicantModule:v}});(function(t){return e=this,n=void 0,r=function(){return function(t,e){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(l){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(n=1,o&&(r=2&s[0]?o.return:s[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,s[1])).done)return r;switch(o=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,o=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){a.label=s[1];break}if(6===s[0]&&a.label<r[1]){a.label=r[1],r=s;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(s);break}r[2]&&a.ops.pop(),a.trys.pop();continue}s=e.call(t,a)}catch(t){s=[6,t],o=0}finally{n=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}(this,(function(e){switch(e.label){case 0:return Object.keys(h).forEach((function(e){h[e].on("change",(function(n){t.commit("ReplicantModule/setState",{name:e,val:n})}))})),[4,NodeCG.waitForReplicants.apply(NodeCG,Object.keys(h).map((function(t){return h[t]})))];case 1:return e.sent(),(0,u.f_)(v,t),[2]}}))},new((o=Promise)||(o=Promise))((function(t,i){function a(t){try{l(r.next(t))}catch(t){i(t)}}function s(t){try{l(r.throw(t))}catch(t){i(t)}}function l(e){var n;e.done?t(e.value):(n=e.value,n instanceof o?n:new o((function(t){t(n)}))).then(a,s)}l((r=r.apply(e,n||[])).next())}));var e,n,o,r})(N).then((function(){new i.Ay({vuetify:y.A,i18n:a.A,store:N,el:"#App",render:function(t){return t(E)}})}))},8969:(t,e,n)=>{"use strict";"undefined"!=typeof Reflect&&Reflect.getMetadata},7290:(t,e,n)=>{"use strict";n.d(e,{$c:()=>f,D9:()=>h,Dg:()=>s,HP:()=>p,LJ:()=>r,fF:()=>a,g8:()=>u,no:()=>i,qE:()=>d,uP:()=>c});let o=!1;try{if("undefined"!=typeof window){const t=Object.defineProperty({},"passive",{get:()=>{o=!0}});window.addEventListener("testListener",t,t),window.removeEventListener("testListener",t,t)}}catch(t){console.warn(t)}function r(t,e,n){const o=e.length-1;if(o<0)return void 0===t?n:t;for(let r=0;r<o;r++){if(null==t)return n;t=t[e[r]]}return null==t||void 0===t[e[o]]?n:t[e[o]]}function i(t,e,n){return null!=t&&e&&"string"==typeof e?void 0!==t[e]?t[e]:r(t,(e=(e=e.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),n):n}function a(t,e){const n={};for(let o=0;o<e.length;o++){const r=e[o];void 0!==t[r]&&(n[r]=t[r])}return n}function s(t,e="px"){return null==t||""===t?void 0:isNaN(+t)?String(t):`${Number(t)}${e}`}function l(t){return null!==t&&"object"==typeof t}const c=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function u(t,e){const n=t.$vuetify.icons.component;if(e.startsWith("$")){const n=i(t,`$vuetify.icons.values.${e.split("$").pop().split(".").pop()}`,e);if("string"!=typeof n)return n;e=n}return null==n?e:{component:n,props:{icon:e}}}function p(t){return Object.keys(t)}function f(t,e="default",n,o=!1){const r=(e||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();return t.$scopedSlots.hasOwnProperty(e)?t.$scopedSlots[e](n instanceof Function?n():n):t.$scopedSlots.hasOwnProperty(r)?t.$scopedSlots[r](n instanceof Function?n():n):!t.$slots.hasOwnProperty(e)||n&&!o?!t.$slots.hasOwnProperty(r)||n&&!o?void 0:t.$slots[r]:t.$slots[e]}function d(t,e=0,n=1){return Math.max(e,Math.min(n,t))}function h(t={},e={}){for(const n in e){const o=t[n],r=e[n];l(o)&&l(r)?t[n]=h(o,r):t[n]=r}return t}}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.m=e,t=[],o.O=(e,n,r,i)=>{if(!n){var a=1/0;for(u=0;u<t.length;u++){for(var[n,r,i]=t[u],s=!0,l=0;l<n.length;l++)(!1&i||a>=i)&&Object.keys(o.O).every((t=>o.O[t](n[l])))?n.splice(l--,1):(s=!1,i<a&&(a=i));if(s){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[n,r,i]},o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t={773:0};o.O.j=e=>0===t[e];var e=(e,n)=>{var r,i,[a,s,l]=n,c=0;if(a.some((e=>0!==t[e]))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(l)var u=l(o)}for(e&&e(n);c<a.length;c++)i=a[c],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(u)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var r=o.O(void 0,[988,680,819,678],(()=>o(8364)));r=o.O(r)})();