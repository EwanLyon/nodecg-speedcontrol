(self.webpackChunk=self.webpackChunk||[]).push([[645],{3327:t=>{t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"search":"Search...","noTwitchGame":"Run has no Twitch game directory listed","searchResultCount":"1 run found. | {count} runs found."},"ja":{"search":"検索","noTwitchGame":"Twitchゲームカテゴリを設定していない走者情報のみ表示","searchResultCount":"1件の走者情報が見つかりました。 | {count}件の走者情報が見つかりました。"}}'),delete t.options._Ctor}},3537:t=>{t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"playRun":"Play Run","newRunAfter":"Add New Run After","removeRun":"Remove Run"},"ja":{"playRun":"走者情報の実行","newRunAfter":"後ろに走者情報を追加","removeRun":"走者情報の削除"}}'),delete t.options._Ctor}},4667:(t,e,n)=>{"use strict";function i(t){return new Promise((function(e){var n,i=nodecg.getDialog(t),a=null==i?void 0:i.querySelector("iframe");a&&i?(null===(n=a.contentWindow)||void 0===n?void 0:n.openDialog)?e():(a.addEventListener("load",(function(){i.close(),e()}),{once:!0}),i.open()):e()}))}function a(t){var e;try{var n=nodecg.getDialog(t),i=(null===(e=null==n?void 0:n.querySelector("iframe"))||void 0===e?void 0:e.contentWindow)||null;if(!i)throw new Error("Could not find the iFrame");return i}catch(e){nodecg.log.error('getDialog could not successfully find dialog "'.concat(t,'":'),e),window.alert("Attempted to open a NodeCG dialog but failed (if you are using a standalone version of a dashboard panel, this is not yet supported).")}return null}n.d(e,{jq:()=>i,rC:()=>a})},7645:(t,e,n)=>{"use strict";n.d(e,{A:()=>nt});var i=n(9643),a=n(212),o=n(527),s=n(9340);const r=s.Ay.extend({name:"rippleable",directives:{ripple:o.A},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}});var l=n(7290);const u=s.Ay.extend({name:"comparable",props:{valueComparator:{type:Function,default:l.bD}}});var c=n(3041);function d(t){t.preventDefault()}const p=(0,c.A)(a.A,r,u).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some((e=>this.valueComparator(e,t))):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=a.A.options.methods.genLabel.call(this);return t?(t.data.on={click:d},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:d},ref:"input"})},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const n=e.length;e=e.filter((e=>!this.valueComparator(e,t))),e.length===n&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown(t){}}}).extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...a.A.options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(t){this.$nextTick((()=>this.inputIndeterminate=t))},inputIndeterminate(t){this.$emit("update:indeterminate",t)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(i.A,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...e,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}});var h=n(9078),v=n(9251),f=n(7098);const m=(0,c.A)(u,h.A,v.A).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter(((t,e)=>this.toggleMethod(this.getValue(t,e))))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return t=>this.valueComparator(this.internalValue,t);const t=this.internalValue;return Array.isArray(t)?e=>t.some((t=>this.valueComparator(t,e))):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&(0,f.OP)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue:(t,e)=>void 0===t.value?e:t.value,onClick(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register(t){const e=this.items.push(t)-1;t.$on("change",(()=>this.onClick(t))),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,e)},unregister(t){if(this._isDestroyed)return;const e=this.items.indexOf(t),n=this.getValue(t,e);if(this.items.splice(e,1),!(this.selectedValues.indexOf(n)<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((t=>t!==n)):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(t,e){const n=this.getValue(t,e);t.isActive=this.toggleMethod(n)},updateItemsState(){this.$nextTick((()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)}))},updateInternalValue(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory(t){if(!this.items.length)return;const e=this.items.slice();t&&e.reverse();const n=e.find((t=>!t.disabled));if(!n)return;const i=this.items.indexOf(n);this.updateInternalValue(this.getValue(n,i))},updateMultiple(t){const e=(Array.isArray(this.internalValue)?this.internalValue:[]).slice(),n=e.findIndex((e=>this.valueComparator(e,t)));this.mandatory&&n>-1&&e.length-1<1||null!=this.max&&n<0&&e.length+1>this.max||(n>-1?e.splice(n,1):e.push(t),this.internalValue=e)},updateSingle(t){const e=this.valueComparator(this.internalValue,t);this.mandatory&&e||(this.internalValue=e?void 0:t)}},render(t){return t(this.tag,this.genData(),(0,l.$c)(this))}}),y=(m.extend({name:"v-item-group",provide(){return{itemGroup:this}}}),m.extend({name:"v-expansion-panels",provide(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes(){return{...m.options.computed.classes.call(this),"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile}}},created(){this.$attrs.hasOwnProperty("expand")&&(0,f.q4)("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"==typeof this.value[0]&&(0,f.q4)(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem(t,e){const n=this.getValue(t,e),i=this.getValue(t,e+1);t.isActive=this.toggleMethod(n),t.nextIsActive=this.toggleMethod(i)}}}));var g=n(9278),b=n(7268),_=n(5307),x=n.n(_),A=n(3133),w=n(4442);const C=(0,c.A)((0,A.P)("expansionPanels","v-expansion-panel","v-expansion-panels"),(0,w.G)("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:()=>({content:null,header:null,nextIsActive:!1}),computed:{classes(){return{"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled,...this.groupClasses}},isDisabled(){return this.expansionPanels.disabled||this.disabled},isReadonly(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent(t){this.content=t},unregisterContent(){this.content=null},registerHeader(t){this.header=t,t.$on("click",this.onClick)},unregisterHeader(){this.header=null},onClick(t){t.detail&&this.header.$el.blur(),this.$emit("click",t),this.isReadonly||this.isDisabled||this.toggle()},toggle(){this.$nextTick((()=>this.$emit("change")))}},render(t){return t("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},(0,l.$c)(this))}});var D=n(208),k=n(6022),R=n(4141);const I=(0,c.A)(k.A,R.A,(0,w.W)("expansionPanel","v-expansion-panel-content","v-expansion-panel")).extend().extend({name:"v-expansion-panel-content",data:()=>({isActive:!1}),computed:{parentIsActive(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler(t,e){t&&(this.isBooted=!0),null==e?this.isActive=t:this.$nextTick((()=>this.isActive=t))}}},created(){this.expansionPanel.registerContent(this)},beforeDestroy(){this.expansionPanel.unregisterContent()},render(t){return t(D.Qo,this.showLazyContent((()=>[t("div",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:this.isActive}]}),[t("div",{class:"v-expansion-panel-content__wrap"},(0,l.$c)(this,"default",{open:this.isActive}))])])))}}),$=(0,c.A)(R.A,(0,w.W)("expansionPanel","v-expansion-panel-header","v-expansion-panel")).extend().extend({name:"v-expansion-panel-header",directives:{ripple:o.A},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:()=>({hasMousedown:!1}),computed:{classes(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive(){return this.expansionPanel.isActive},isDisabled(){return this.expansionPanel.isDisabled},isReadonly(){return this.expansionPanel.isReadonly}},created(){this.expansionPanel.registerHeader(this)},beforeDestroy(){this.expansionPanel.unregisterHeader()},methods:{onClick(t){this.$emit("click",t)},genIcon(){const t=(0,l.$c)(this,"actions",{open:this.isActive})||[this.$createElement(i.A,this.expandIcon)];return this.$createElement(D.mM,[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},t)])}},render(t){return t("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.$listeners,click:this.onClick,mousedown:()=>this.hasMousedown=!0,mouseup:()=>this.hasMousedown=!1}}),[(0,l.$c)(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}});var V,P=n(3572),O=n(4667),S=n(5718),T=n(3324),j=n(2930),B=(V=function(t,e){return V=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},V(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}V(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),M=function(t,e,n,i){var a,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(s=(o<3?a(s):o>3?a(e,n,s):a(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};const N=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return B(e,t),M([(0,b.kv)({type:String,required:!0})],e.prototype,"icon",void 0),M([(0,b.kv)({type:String,required:!0})],e.prototype,"tooltip",void 0),M([(0,b.kv)(Boolean)],e.prototype,"disabled",void 0),M([b.uA],e)}(b.lD);var E=n(5225);const q=(0,E.A)(N,(function(){var t=this,e=t._self._c;return t._self._setupProxy,e(j.A,{attrs:{right:"",disabled:t.disabled},scopedSlots:t._u([{key:"activator",fn:function({on:n}){return[e(T.A,t._g({attrs:{icon:"",outlined:"",small:"",disabled:t.disabled},on:{click:function(e){return t.$emit("click")}}},n),[e(P.A,{attrs:{small:""}},[t._v("\n        "+t._s(t.icon)+"\n      ")])],1)]}}])},[t._v(" "),e("span",[t._v(t._s(t.tooltip))])])}),[],!1,null,null,null).exports;var L=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),F=function(t,e,n,i){var a,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(s=(o<3?a(s):o>3?a(e,n,s):a(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s},G=function(t,e,n,i){return new(n||(n=Promise))((function(a,o){function s(t){try{l(i.next(t))}catch(t){o(t)}}function r(t){try{l(i.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,r)}l((i=i.apply(t,e||[])).next())}))},H=function(t,e){var n,i,a,o,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function r(r){return function(l){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,r[0]&&(s=0)),s;)try{if(n=1,i&&(a=2&r[0]?i.return:r[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,r[1])).done)return a;switch(i=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,i=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!((a=(a=s.trys).length>0&&a[a.length-1])||6!==r[0]&&2!==r[0])){s=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){s.label=r[1];break}if(6===r[0]&&s.label<a[1]){s.label=a[1],a=r;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(r);break}a[2]&&s.ops.pop(),s.trys.pop();continue}r=e.call(t,s)}catch(t){r=[6,t],i=0}finally{n=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,l])}}};const W=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return L(e,t),Object.defineProperty(e.prototype,"playerStr",{get:function(){return this.runData.teams.map((function(t){return"".concat(t.name?"".concat(t.name,":"):"","\n      ").concat(t.players.map((function(t){return t.pronouns?"".concat(t.name," [").concat(t.pronouns,"]"):t.name})).join(", "))})).join(" vs. ")},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"runFinishTime",{get:function(){return this.runFinishTimes[this.runData.id]},enumerable:!1,configurable:!0}),e.prototype.customDataName=function(t){var e,n,i,a=nodecg.bundleConfig;return(null===(i=((null===(e=a.schedule)||void 0===e?void 0:e.customData)||(null===(n=a.customData)||void 0===n?void 0:n.run)||[]).find((function(e){return e.key===t})))||void 0===i?void 0:i.name)||"? (".concat(t,")")},e.prototype.playRun=function(){return G(this,void 0,Promise,(function(){return H(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,nodecg.sendMessage("changeActiveRun",this.runData.id)];case 1:return t.sent()&&(0,O.jq)("alert-dialog").then((function(){var t=(0,O.rC)("alert-dialog");t&&t.openDialog({name:"NoTwitchGame"})})),[3,3];case 2:return t.sent(),[3,3];case 3:return[2]}}))}))},e.prototype.duplicateRun=function(){var t=this;(0,O.jq)("run-modification-dialog").then((function(){var e=(0,O.rC)("run-modification-dialog");e&&e.openDialog({mode:"Duplicate",runData:t.runData})}))},e.prototype.addNewRunAfter=function(){var t=this;(0,O.jq)("run-modification-dialog").then((function(){var e=(0,O.rC)("run-modification-dialog");e&&e.openDialog({mode:"New",prevID:t.runData.id})}))},e.prototype.editRun=function(){var t=this;(0,O.jq)("run-modification-dialog").then((function(){var e=(0,O.rC)("run-modification-dialog");e&&e.openDialog({mode:"EditOther",runData:t.runData})}))},e.prototype.removeRunConfirm=function(){var t=this;(0,O.jq)("alert-dialog").then((function(){var e=(0,O.rC)("alert-dialog");e&&e.openDialog({name:"RemoveRunConfirm",data:{runData:t.runData},func:t.removeRun})}))},e.prototype.removeRun=function(t){return G(this,void 0,Promise,(function(){return H(this,(function(e){switch(e.label){case 0:if(!t)return[3,4];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,nodecg.sendMessage("removeRun",this.runData.id)];case 2:case 3:return e.sent(),[3,4];case 4:return[2]}}))}))},F([(0,b.kv)({type:Object,required:!0})],e.prototype,"runData",void 0),F([(0,b.kv)(Boolean)],e.prototype,"editor",void 0),F([(0,b.kv)(Boolean)],e.prototype,"disableChange",void 0),F([(0,b.kv)(Boolean)],e.prototype,"moveDisabled",void 0),F([S.ok.State((function(t){return t.reps.runDataActiveRun}))],e.prototype,"activeRun",void 0),F([S.ok.State((function(t){return t.reps.runFinishTimes}))],e.prototype,"runFinishTimes",void 0),F([(0,b.uA)({components:{ModifyButton:q}})],e)}(b.lD);var z=n(3537);const K=n.n(z)();var Q=(0,E.A)(W,(function(){var t=this,e=t._self._c;return t._self._setupProxy,e(C,{class:{"grey darken-2":!t.editor&&t.activeRun&&t.activeRun.id===t.runData.id},style:{"overflow-x":"hidden"}},[e($,[e("span",[t.moveDisabled?t._e():e(P.A,{staticClass:"Handle",style:{cursor:"move"}},[t._v("\n        mdi-drag-vertical\n      ")]),t._v("\n      "+t._s(t.runData.game)+"\n    ")],1)]),t._v(" "),e(I,{staticClass:"body-2",style:{"overflow-wrap":"break-word"}},[t.playerStr?e("div",[e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("players"))+":")]),t._v(" "),e("span",[t._v(t._s(t.playerStr))])]):t._e(),t._v(" "),t.runData.category?e("div",[e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("category"))+":")]),t._v(" "),e("span",[t._v(t._s(t.runData.category))])]):t._e(),t._v(" "),t.runData.estimate?e("div",[e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("estimate"))+":")]),t._v(" "),e("span",[t._v(t._s(t.runData.estimate))])]):t._e(),t._v(" "),t.runData.system?e("div",[e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("system"))+":")]),t._v(" "),e("span",[t._v(t._s(t.runData.system))])]):t._e(),t._v(" "),t.runData.region?e("div",[e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("region"))+":")]),t._v(" "),e("span",[t._v(t._s(t.runData.region))])]):t._e(),t._v(" "),t.runData.release?e("div",[e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("released"))+":")]),t._v(" "),e("span",[t._v(t._s(t.runData.release))])]):t._e(),t._v(" "),t.runData.relay?e("div",[e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("relay"))+":")]),t._v(" "),e("span",[t._v("✅")])]):t._e(),t._v(" "),t.runFinishTime?e("div",[e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("finalTime"))+":")]),t._v(" "),e("span",[t._v(t._s(t.runFinishTime.time))])]):t._e(),t._v(" "),t._l(t.runData.customData,(function(n,i){return e("div",{key:i},[e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.customDataName(i))+":")]),t._v(" "),e("span",[t._v(t._s(n))])])})),t._v(" "),e("div",{staticStyle:{"margin-top":"10px"}},[t.editor?e("div",[e("modify-button",{attrs:{icon:"mdi-content-duplicate",tooltip:t.$t("duplicateRun")},on:{click:t.duplicateRun}}),t._v(" "),e("modify-button",{attrs:{icon:"mdi-file-plus-outline",tooltip:t.$t("newRunAfter")},on:{click:t.addNewRunAfter}}),t._v(" "),e("modify-button",{attrs:{icon:"mdi-square-edit-outline",tooltip:t.$t("editRun")},on:{click:t.editRun}}),t._v(" "),e("modify-button",{attrs:{icon:"mdi-file-remove-outline",tooltip:t.$t("removeRun")},on:{click:t.removeRunConfirm}})],1):e("div",[e("modify-button",{attrs:{icon:"mdi-play",tooltip:t.$t("playRun"),disabled:t.disableChange},on:{click:t.playRun}})],1)])],2)],1)}),[],!1,null,null,null);"function"==typeof K&&K(Q);const J=Q.exports;var U=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),X=function(t,e,n,i){var a,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(s=(o<3?a(s):o>3?a(e,n,s):a(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};const Y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.searchTerm="",e.hasNoTwitch=!1,e}return U(e,t),Object.defineProperty(e.prototype,"runDataArray",{get:function(){return S.PH.reps.runDataArray},set:function(t){this.$store.commit("updateRunOrder",t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"filteredRunDataArray",{get:function(){var t=this;return this.runDataArray.filter((function(e){var n=t.searchTerm?t.searchTerm.toLowerCase():"";return(!n||n&&(e.game&&e.game.toLowerCase().includes(n)||!!e.teams.find((function(t){return t.name&&t.name.toLowerCase().includes(n)||!!t.players.find((function(t){return t.name.toLowerCase().includes(n)}))}))))&&(t.hasNoTwitch&&!e.gameTwitch||!t.hasNoTwitch)}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"disableChange",{get:function(){return["running","paused"].includes(this.timer.state)},enumerable:!1,configurable:!0}),e.prototype.onActiveRunChange=function(t){this.editor||this.scroll(t)},e.prototype.scroll=function(t){t?this.$vuetify.goTo("#run-".concat(t.id),{offset:25,container:".RunList"}):this.$vuetify.goTo(0,{container:".RunList"})},e.prototype.mounted=function(){this.editor||this.scroll(this.activeRun)},X([(0,b.kv)(Boolean)],e.prototype,"editor",void 0),X([S.ok.State((function(t){return t.reps.runDataActiveRun}))],e.prototype,"activeRun",void 0),X([S.ok.State((function(t){return t.reps.twitchAPIData}))],e.prototype,"twitchAPIData",void 0),X([S.ok.State((function(t){return t.reps.timer}))],e.prototype,"timer",void 0),X([(0,b.ox)("activeRun")],e.prototype,"onActiveRunChange",null),X([(0,b.uA)({components:{Draggable:x(),RunPanel:J}})],e)}(b.lD);var Z=n(3327);const tt=n.n(Z)();var et=(0,E.A)(Y,(function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",[e(g.A,{attrs:{filled:"",clearable:"",label:t.$t("search"),"append-icon":"mdi-magnify",messages:t.$tc("searchResultCount",t.filteredRunDataArray.length)},model:{value:t.searchTerm,callback:function(e){t.searchTerm=e},expression:"searchTerm"}}),t._v(" "),t.editor&&"on"===t.twitchAPIData.state?e("div",[e(p,{staticClass:"ma-1 pa-0",attrs:{"hide-details":"",label:t.$t("noTwitchGame")},model:{value:t.hasNoTwitch,callback:function(e){t.hasNoTwitch=e},expression:"hasNoTwitch"}})],1):t._e(),t._v(" "),e("div",{ref:"runList",staticClass:"RunList",style:{height:"400px","overflow-y":"scroll"}},[e(y,{attrs:{accordion:""}},[e("draggable",{staticStyle:{width:"100%"},attrs:{handle:".Handle",disabled:t.searchTerm||t.hasNoTwitch||!t.editor},model:{value:t.runDataArray,callback:function(e){t.runDataArray=e},expression:"runDataArray"}},[e("transition-group",{attrs:{name:"list"}},t._l(t.filteredRunDataArray,(function(n){return e("run-panel",{key:n.id,attrs:{id:`run-${n.id}`,"run-data":n,editor:t.editor,"disable-change":t.disableChange,"move-disabled":!!t.searchTerm||t.hasNoTwitch||!t.editor}})})),1)],1)],1)],1)],1)}),[],!1,null,"d2541eb6",null);"function"==typeof tt&&tt(et);const nt=et.exports},7158:(t,e,n)=>{"use strict";n.d(e,{k:()=>o});var i=n(305),a=n(8969);function o(t){return void 0===t&&(t={}),function(e,n){(0,a.A)(t,e,n),(0,i.u1)((function(e,n){(e.props||(e.props={}))[n]=t}))(e,n)}}},8969:(t,e,n)=>{"use strict";n.d(e,{A:()=>a});var i="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function a(t,e,n){if(i&&!Array.isArray(t)&&"function"!=typeof t&&!t.hasOwnProperty("type")&&void 0===t.type){var a=Reflect.getMetadata("design:type",e,n);a!==Object&&(t.type=a)}}},7268:(t,e,n)=>{"use strict";n.d(e,{kv:()=>o.k,lD:()=>i.Ay,ox:()=>s.o,uA:()=>a.Ay});var i=n(9340),a=n(305),o=(n(7980),n(8010),n(6577),n(7158)),s=(n(9493),n(9180))},208:(t,e,n)=>{"use strict";n.d(e,{Qo:()=>r,mM:()=>o,vt:()=>s});var i=n(9437),a=n(5596);(0,i.o)("carousel-transition"),(0,i.o)("carousel-reverse-transition"),(0,i.o)("tab-transition"),(0,i.o)("tab-reverse-transition"),(0,i.o)("menu-transition"),(0,i.o)("fab-transition","center center","out-in"),(0,i.o)("dialog-transition"),(0,i.o)("dialog-bottom-transition"),(0,i.o)("dialog-top-transition");const o=(0,i.o)("fade-transition"),s=((0,i.o)("scale-transition"),(0,i.o)("scroll-x-transition"),(0,i.o)("scroll-x-reverse-transition"),(0,i.o)("scroll-y-transition"),(0,i.o)("scroll-y-reverse-transition"),(0,i.o)("slide-x-transition")),r=((0,i.o)("slide-x-reverse-transition"),(0,i.o)("slide-y-transition"),(0,i.o)("slide-y-reverse-transition"),(0,i.b)("expand-transition",(0,a.A)()));(0,i.b)("expand-x-transition",(0,a.A)("",!0))},4442:(t,e,n)=>{"use strict";n.d(e,{G:()=>r,W:()=>s});var i=n(9340),a=n(7098);function o(t,e){return()=>(0,a.OP)(`The ${t} component must be used inside a ${e}`)}function s(t,e,n){const a=e&&n?{register:o(e,n),unregister:o(e,n)}:null;return i.Ay.extend({name:"registrable-inject",inject:{[t]:{default:a}}})}function r(t,e=!1){return i.Ay.extend({name:"registrable-provide",provide(){return{[t]:e?this:{register:this.register,unregister:this.unregister}}}})}}}]);