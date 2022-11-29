(()=>{var t,e={5121:t=>{t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"panelTitle":"Player Layout","note":"This order is only temporary, it does not modify the permenant copy.","noneAvailable":"No Teams/Run Available"},"ja":{"panelTitle":"走者レイアウト","note":"この順番は一時的なものであり、永続的にデータを変更するものではありません。","noneAvailable":"ゲーム情報/プレイヤー情報がありません。"}}'),delete t.options._Ctor}},5936:(t,e,n)=>{"use strict";var r,o,i=n(5803),a=n(3559),s=n(8138),l=n.n(s),c=n(3415),u=n(4170),p=(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),f=function(){return f=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},f.apply(this,arguments)},d=function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},h={defaultSetupTime:nodecg.Replicant("defaultSetupTime"),horaroImportSavedOpts:nodecg.Replicant("horaroImportSavedOpts"),horaroImportStatus:nodecg.Replicant("horaroImportStatus"),oengusImportStatus:nodecg.Replicant("oengusImportStatus"),runDataActiveRun:nodecg.Replicant("runDataActiveRun"),runDataActiveRunSurrounding:nodecg.Replicant("runDataActiveRunSurrounding"),runDataArray:nodecg.Replicant("runDataArray"),runFinishTimes:nodecg.Replicant("runFinishTimes"),timer:nodecg.Replicant("timer"),timerChangesDisabled:nodecg.Replicant("timerChangesDisabled"),twitchAPIData:nodecg.Replicant("twitchAPIData"),twitchChannelInfo:nodecg.Replicant("twitchChannelInfo"),twitchCommercialTimer:nodecg.Replicant("twitchCommercialTimer")},y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.reps={},e}return p(e,t),e.prototype.setState=function(t){var e=t.name,n=t.val;i.ZP.set(this.reps,e,l()(n))},e.prototype.setReplicant=function(t){var e=t.name,n=t.val,r=t.merge,o=void 0===r||r,a=this.reps[e],s=n;a&&o&&"object"==typeof a&&!Array.isArray(a)&&(s=f(f({},l()(a)),n)),i.ZP.set(this.reps,e,l()(s)),h[e].value=l()(s)},d([u.mm],e.prototype,"setState",null),d([u.mm],e.prototype,"setReplicant",null),d([(0,u.Yl)({name:"ReplicantModule",namespaced:!0})],e)}(u.g4),v=(0,c.uD)("ReplicantModule"),m=n(504),g=n(9146),b=n(690),_=n(509),w=n(9657);const O=(0,n(6248).Z)(_.Z,w.Z,b.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...w.Z.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...b.Z.options.computed.classes.call(this)}},styles(){const t={...b.Z.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=_.Z.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:n}=this.generateRouteLink();return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}});var k=n(5925);n(4807),n(7023),n(5654),n(779),n(8793);var P=n(4048),R=n.n(P),j=n(8586),x=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),$=function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a};i.ZP.use(j.ZP);var D=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return x(e,t),e.prototype.updateTeamOrder=function(t){o.setReplicant({name:"runDataActiveRun",val:{teams:t}})},$([u.mm],e.prototype,"updateTeamOrder",null),$([(0,u.Yl)({name:"OurModule"})],e)}(u.g4),A=new j.yh({strict:!1,state:{},modules:{ReplicantModule:y,OurModule:D}});const S=A;var Z=(0,u.rT)(D,A),T=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),C=function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a};const q=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return T(e,t),Object.defineProperty(e.prototype,"teams",{get:function(){var t;return(null===(t=this.runDataActiveRun)||void 0===t?void 0:t.teams)||[]},set:function(t){Z.updateTeamOrder(t)},enumerable:!1,configurable:!0}),e.prototype.mounted=function(){var t;(null===(t=window.frameElement)||void 0===t?void 0:t.parentElement)&&window.frameElement.parentElement.setAttribute("display-title",this.$t("panelTitle"))},C([v.State((function(t){return t.reps.runDataActiveRun}))],e.prototype,"runDataActiveRun",void 0),C([(0,k.ZP)({components:{Draggable:R()}})],e)}(i.ZP);var I=n(5440),E=n(5121);const B=n.n(E)();var M=(0,I.Z)(q,(function(){var t=this,e=t._self._c;return t._self._setupProxy,e(g.Z,[e("em",[t._v(t._s(t.$t("note")))]),t._v(" "),t.teams.length?e("draggable",{model:{value:t.teams,callback:function(e){t.teams=e},expression:"teams"}},[e("transition-group",{attrs:{name:"list"}},t._l(t.teams,(function(n){return e(O,{key:n.id,style:{"text-align":"center",padding:"5px","margin-top":"10px"}},[n.name?e("span",[t._v(t._s(n.name))]):t._l(n.players,(function(r,o){return e("span",{key:r.id},[t._v("\n          "+t._s(r.name)),o+1<n.players.length?e("span",[t._v(",")]):t._e()])}))],2)})),1)],1):e("div",[e("br"),t._v(t._s(t.$t("noneAvailable"))+"\n  ")])],1)}),[],!1,null,"5bae7c2c",null);"function"==typeof B&&B(M);const L=M.exports;(function(t){return e=this,n=void 0,i=function(){return function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(e){switch(e.label){case 0:return Object.keys(h).forEach((function(e){h[e].on("change",(function(n){t.commit("ReplicantModule/setState",{name:e,val:n})}))})),[4,NodeCG.waitForReplicants.apply(NodeCG,Object.keys(h).map((function(t){return h[t]})))];case 1:return e.sent(),o=(0,u.rT)(y,t),[2]}}))},new((r=Promise)||(r=Promise))((function(t,o){function a(t){try{l(i.next(t))}catch(t){o(t)}}function s(t){try{l(i.throw(t))}catch(t){o(t)}}function l(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(t){t(n)}))).then(a,s)}l((i=i.apply(e,n||[])).next())}));var e,n,r,i})(S).then((function(){new i.ZP({vuetify:m.Z,i18n:a.Z,store:S,el:"#App",render:function(t){return t(L)}})}))},779:(t,e,n)=>{"use strict";"undefined"!=typeof Reflect&&Reflect.getMetadata},1058:(t,e,n)=>{"use strict";n.d(e,{Qn:()=>a,Z5:()=>i});var r=n(2727),o=n(4240);(0,r.q)("carousel-transition"),(0,r.q)("carousel-reverse-transition"),(0,r.q)("tab-transition"),(0,r.q)("tab-reverse-transition"),(0,r.q)("menu-transition"),(0,r.q)("fab-transition","center center","out-in"),(0,r.q)("dialog-transition"),(0,r.q)("dialog-bottom-transition"),(0,r.q)("dialog-top-transition");const i=(0,r.q)("fade-transition"),a=((0,r.q)("scale-transition"),(0,r.q)("scroll-x-transition"),(0,r.q)("scroll-x-reverse-transition"),(0,r.q)("scroll-y-transition"),(0,r.q)("scroll-y-reverse-transition"),(0,r.q)("slide-x-transition"));(0,r.q)("slide-x-reverse-transition"),(0,r.q)("slide-y-transition"),(0,r.q)("slide-y-reverse-transition"),(0,r.x)("expand-transition",(0,o.Z)()),(0,r.x)("expand-x-transition",(0,o.Z)("",!0))},2027:(t,e,n)=>{"use strict";n.d(e,{d:()=>a});var r=n(5803),o=n(2377);const i={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function a(t=[]){return r.ZP.extend({name:"positionable",props:t.length?(0,o.ji)(i,t):i})}a()},312:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var r=n(5803);const o=function(t="value",e="change"){return r.ZP.extend({name:"proxyable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{internalLazyValue:this[t]}},computed:{internalValue:{get(){return this.internalLazyValue},set(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:{[t](t){this.internalLazyValue=t}}})}()},9405:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const r=n(5803).ZP.extend().extend({name:"themeable",provide(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data:()=>({themeableProvide:{isDark:!1}}),computed:{appIsDark(){return this.$vuetify.theme.dark||!1},isDark(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler(t,e){t!==e&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}})},8298:(t,e,n)=>{"use strict";n.d(e,{Kd:()=>i,N6:()=>a});var r=n(9307);function o(t,e,n){if(!r.Z.config.silent){if(n&&(e={_isVue:!0,$parent:n,$options:e}),e){if(e.$_alreadyWarned=e.$_alreadyWarned||[],e.$_alreadyWarned.includes(t))return;e.$_alreadyWarned.push(t)}return`[Vuetify] ${t}`+(e?function(t){if(t._isVue&&t.$parent){const e=[];let n=0;for(;t;){if(e.length>0){const r=e[e.length-1];if(r.constructor===t.constructor){n++,t=t.$parent;continue}n>0&&(e[e.length-1]=[r,n],n=0)}e.push(t),t=t.$parent}return"\n\nfound in\n\n"+e.map(((t,e)=>`${0===e?"---\x3e ":" ".repeat(5+2*e)}${Array.isArray(t)?`${l(t[0])}... (${t[1]} recursive calls)`:l(t)}`)).join("\n")}return`\n\n(found in ${l(t)})`}(e):"")}}function i(t,e,n){const r=o(t,e,n);null!=r&&console.warn(r)}function a(t,e,n){const r=o(t,e,n);null!=r&&console.error(r)}const s=/(?:^|[-_])(\w)/g;function l(t,e){if(t.$root===t)return"<Root>";const n="function"==typeof t&&null!=t.cid?t.options:t._isVue?t.$options||t.constructor.options:t||{};let r=n.name||n._componentTag;const o=n.__file;if(!r&&o){const t=o.match(/([^/\\]+)\.vue$/);r=t&&t[1]}return(r?`<${i=r,i.replace(s,(t=>t.toUpperCase())).replace(/[-_]/g,"")}>`:"<Anonymous>")+(o&&!1!==e?` at ${o}`:"");var i}},2377:(t,e,n)=>{"use strict";n.d(e,{Do:()=>c,Ee:()=>m,TI:()=>h,XP:()=>u,_A:()=>f,jC:()=>d,ji:()=>a,kb:()=>s,qw:()=>o,uZ:()=>v,vO:()=>i,z9:()=>y});let r=!1;try{if("undefined"!=typeof window){const t=Object.defineProperty({},"passive",{get:()=>{r=!0}});window.addEventListener("testListener",t,t),window.removeEventListener("testListener",t,t)}}catch(t){console.warn(t)}function o(t,e,n){const r=e.length-1;if(r<0)return void 0===t?n:t;for(let o=0;o<r;o++){if(null==t)return n;t=t[e[o]]}return null==t||void 0===t[e[r]]?n:t[e[r]]}function i(t,e,n){return null!=t&&e&&"string"==typeof e?void 0!==t[e]?t[e]:o(t,(e=(e=e.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),n):n}function a(t,e){const n={};for(let r=0;r<e.length;r++){const o=e[r];void 0!==t[o]&&(n[o]=t[o])}return n}function s(t,e="px"){return null==t||""===t?void 0:isNaN(+t)?String(t):`${Number(t)}${e}`}function l(t){return null!==t&&"object"==typeof t}const c=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function u(t){return Object.keys(t)}const p=/-(\w)/g,f=t=>t.replace(p,((t,e)=>e?e.toUpperCase():""));function d(t){return t.charAt(0).toUpperCase()+t.slice(1)}function h(t){return null!=t?Array.isArray(t)?t:[t]:[]}function y(t,e="default",n,r=!1){return t.$scopedSlots.hasOwnProperty(e)?t.$scopedSlots[e](n instanceof Function?n():n):!t.$slots.hasOwnProperty(e)||n&&!r?void 0:t.$slots[e]}function v(t,e=0,n=1){return Math.max(e,Math.min(n,t))}function m(t={},e={}){for(const n in e){const r=t[n],o=e[n];l(r)&&l(o)?t[n]=m(r,o):t[n]=o}return t}}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={exports:{}};return e[t].call(i.exports,i,i.exports,r),i.exports}r.m=e,t=[],r.O=(e,n,o,i)=>{if(!n){var a=1/0;for(u=0;u<t.length;u++){for(var[n,o,i]=t[u],s=!0,l=0;l<n.length;l++)(!1&i||a>=i)&&Object.keys(r.O).every((t=>r.O[t](n[l])))?n.splice(l--,1):(s=!1,i<a&&(a=i));if(s){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[n,o,i]},r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t={941:0};r.O.j=e=>0===t[e];var e=(e,n)=>{var o,i,[a,s,l]=n,c=0;if(a.some((e=>0!==t[e]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(l)var u=l(r)}for(e&&e(n);c<a.length;c++)i=a[c],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(u)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var o=r.O(void 0,[468,81,170,119,852],(()=>r(5936)));o=r.O(o)})();