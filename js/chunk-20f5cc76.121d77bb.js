(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-20f5cc76"],{"19e6":function(e,t,s){},ae7b:function(e,t,s){"use strict";var n=s("19e6");s.n(n).a},fff4:function(e,t,s){"use strict";s.r(t);var n=s("2f62"),o=s("ed08");function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},n=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),n.forEach((function(t){r(e,t,s[t])}))}return e}function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var i={name:"AppendSubAccount",data:function(){return{Items:{dialogOpen:!1,valid:!1,account:{selected:"",options:[]},nameItems:{name:"",nameRules:[]},passwordItems:{password:"",passwordIsVisible:!1,passwordConfirmation:"",passwordConfirmationIsVisible:!1,passwordRules:[]},whetherAllowLogin:{selected:0,options:[]},openSuperLottery:{show:!0,selected:1,options:[]},identity:{selected:"查詢員",options:[{text:"查詢員",value:"查詢員"}]},remark:{contents:""}}}},computed:a({},Object(n.c)({getGenerateHleadAccountState:"account-management/getGenerateHleadAccountState",getDashboardInfoState:"account-management/getDashboardInfoState"})),watch:{"$store.state.lang":function(e){this.initLanguage()},getGenerateHleadAccountState:function(e){this.Items.account.selected=e.result.account[0],this.Items.account.options=e.result.account},"Items.dialogOpen":function(e){e||(this.clearField(),this.$refs.form.resetValidation())}},mounted:function(){this.initLanguage(),this.loadGenerateAccount(),this.updateDashboardInfo()},methods:a({},Object(n.b)({postSubAccount:"api/postSubAccount",getGenerateAccount:"api/getGenerateAccount"}),{add:function(){var e=this,t={l_no:this.Items.account.selected,l_name:this.Items.nameItems.name,l_pwd:this.Items.passwordItems.password,l_pwd_confirmation:this.Items.passwordItems.passwordConfirmation,is_close:this.Items.whetherAllowLogin.selected,remark:this.Items.remark.contents};this.Items.openSuperLottery.show&&(t.open_super=this.Items.openSuperLottery.selected);try{this.postSubAccount(t).then((function(t){"[object Error]"===Object.prototype.toString.call(t)&&t.hasOwnProperty("response")&&200!==t.response.status?t.response.data.hasOwnProperty("errors")?o.a.errorMsgHandler(t.response.data.errors):e.$toastr.error("".concat(e.$ln("新增失敗"))):200===t.status&&(e.$toastr.success("".concat(e.$ln("新增成功")),"",{timeOut:2e3,closeButton:!1}),e.clearField(),e.$emit("status",!0),e.loadGenerateAccount(),e.Items.dialogOpen=!1)}))["catch"]((function(t){e.$toastr.error("".concat(e.$ln("新增失敗")))}))}catch(s){this.$toastr.error("".concat(this.$ln("站台資料錯誤，請聯絡客服")))}},loadGenerateAccount:function(){var e=this;try{this.getGenerateAccount({type:"hlead"}).then((function(t){if("[object Error]"===Object.prototype.toString.call(t)&&t.hasOwnProperty("response")&&200!==t.response.status){if(401===t.response.status)return;t.response.data.hasOwnProperty("errors")?o.a.errorMsgHandler(t.response.data.errors):e.$toastr.error("".concat(e.$ln("取得可新增子帳號失敗")))}else 200===t.status&&(t.data.hasOwnProperty("errors")||t.data.hasOwnProperty("result"))}))["catch"]((function(e){}))}catch(t){this.$toastr.error("".concat(this.$ln("站台資料錯誤，請聯絡客服")))}},clearField:function(){this.Items.nameItems.name="",this.Items.passwordItems.password="",this.Items.passwordItems.passwordConfirmation="",this.Items.whetherAllowLogin.selected=0,this.Items.openSuperLottery.selected=0,this.Items.identity.selected="查詢員",this.Items.remark.contents=""},updateDashboardInfo:function(){var e=JSON.parse(sessionStorage.getItem("super.manage.dashboard.info"));if(e&&e.hasOwnProperty("noOpenGame"))for(var t in e.noOpenGame)this.closeGameType(e.noOpenGame[t])},closeGameType:function(e){switch(e){case"s17":this.Items.openSuperLottery.show=!1}},initLanguage:function(){var e=this;this.Items.nameItems.nameRules=[function(t){return!!t||e.$ln("不能為空格")},function(t){return/^[\u4e00-\u9fa5_A-Za-z0-9\(\)\_\-]+$/.test(t)||""===t||e.$ln("不能為特殊符號或空格，除了「括號()」、「底線_」和「-」")},function(t){return t.length<=20||e.$ln("不能超過 20 個字元")}],this.Items.passwordItems.passwordRules=[function(t){return!!t||e.$ln("不能為空格")},function(t){return 0===t.length||t.length>=4||e.$ln("長度需為 4 位以上")},function(t){return/^[A-Za-z0-9]+$/.test(t)||""===t||e.$ln("需為英文或數字")},function(t){return!/^[0-9]+$/.test(t)||""===t||e.$ln("需為英文加數字組合")},function(t){return!/^[A-Za-z]+$/.test(t)||""===t||e.$ln("需為英文加數字組合")}],this.Items.whetherAllowLogin.options=[{text:this.$ln("是"),value:0},{text:this.$ln("否"),value:1}],this.Items.openSuperLottery.options=[{text:this.$ln("是"),value:0},{text:this.$ln("否"),value:1}]}})},l=(s("ae7b"),s("2877")),c=Object(l.a)(i,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:e.Items.dialogOpen,callback:function(t){e.$set(e.Items,"dialogOpen",t)},expression:"Items.dialogOpen"}},[s("v-btn",{attrs:{slot:"activator",small:"",color:"deep-orange darken-1"},slot:"activator"},[e._v(e._s(e.$ln("新增子帳號")))]),s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v(e._s(e.$ln("新增子帳號")))])]),s("v-card-text",[s("v-container",{attrs:{"grid-list-md":""}},[s("v-form",{ref:"form",model:{value:e.Items.valid,callback:function(t){e.$set(e.Items,"valid",t)},expression:"Items.valid"}},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[s("v-select",{attrs:{items:e.Items.account.options,"no-data-text":e.$ln("無可用帳號"),label:e.$ln("帳號"),required:""},model:{value:e.Items.account.selected,callback:function(t){e.$set(e.Items.account,"selected",t)},expression:"Items.account.selected"}})],1),s("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[s("v-text-field",{attrs:{rules:e.Items.nameItems.nameRules,label:e.$ln("名稱")},model:{value:e.Items.nameItems.name,callback:function(t){e.$set(e.Items.nameItems,"name",t)},expression:"Items.nameItems.name"}})],1),s("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[s("v-text-field",{attrs:{rules:e.Items.passwordItems.passwordRules,"append-icon":e.Items.passwordItems.passwordIsVisible?"mdi-eye":"mdi-eye-off",type:e.Items.passwordItems.passwordIsVisible?"text":"password",label:e.$ln("密碼"),hint:e.$ln("長度需為 4 位以上，並且是字母和數字的組合"),required:""},on:{"click:append":function(t){e.Items.passwordItems.passwordIsVisible=!e.Items.passwordItems.passwordIsVisible}},model:{value:e.Items.passwordItems.password,callback:function(t){e.$set(e.Items.passwordItems,"password",t)},expression:"Items.passwordItems.password"}})],1),s("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[s("v-text-field",{attrs:{rules:e.Items.passwordItems.passwordRules,"append-icon":e.Items.passwordItems.passwordConfirmationIsVisible?"mdi-eye":"mdi-eye-off",type:e.Items.passwordItems.passwordConfirmationIsVisible?"text":"password",label:e.$ln("確認密碼"),hint:e.$ln("長度需為 4 位以上，並且是字母和數字的組合"),required:""},on:{"click:append":function(t){e.Items.passwordItems.passwordConfirmationIsVisible=!e.Items.passwordItems.passwordConfirmationIsVisible}},model:{value:e.Items.passwordItems.passwordConfirmation,callback:function(t){e.$set(e.Items.passwordItems,"passwordConfirmation",t)},expression:"Items.passwordItems.passwordConfirmation"}})],1),s("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[s("div",{staticClass:"v-input__slot"},[s("div",{staticClass:"v-text-field__slot"},[s("label",{staticClass:"v-label theme--light",staticStyle:{left:"0px",right:"auto",position:"absolute"},attrs:{"aria-hidden":"true"}},[e._v(e._s(e.$ln("是否允許登入")))]),s("v-radio-group",{attrs:{row:""},model:{value:e.Items.whetherAllowLogin.selected,callback:function(t){e.$set(e.Items.whetherAllowLogin,"selected",t)},expression:"Items.whetherAllowLogin.selected"}},e._l(e.Items.whetherAllowLogin.options,(function(e,t){return s("v-radio",{key:t,staticClass:"v-input-checkbox",attrs:{label:e.text,value:e.value}})})),1)],1)])]),s("v-flex",{directives:[{name:"show",rawName:"v-show",value:e.Items.openSuperLottery.show,expression:"Items.openSuperLottery.show"}],attrs:{xs12:"",sm6:"",md4:""}},[s("div",{staticClass:"v-input__slot"},[s("div",{staticClass:"v-text-field__slot"},[s("label",{staticClass:"v-label",staticStyle:{left:"0px",right:"auto",position:"absolute"},attrs:{"aria-hidden":"true"}},[e._v(e._s(e.$ln("開放Super彩球")))]),s("v-radio-group",{attrs:{row:""},model:{value:e.Items.openSuperLottery.selected,callback:function(t){e.$set(e.Items.openSuperLottery,"selected",t)},expression:"Items.openSuperLottery.selected"}},e._l(e.Items.openSuperLottery.options,(function(e,t){return s("v-radio",{key:t,staticClass:"v-input-checkbox",attrs:{label:e.text,value:e.value}})})),1)],1)])]),s("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[s("v-select",{attrs:{items:e.Items.identity.options,label:e.$ln("身份"),required:""},scopedSlots:e._u([{key:"selection",fn:function(t){var s=t.item;return[e._v(e._s(e.$ln(s.text)))]}},{key:"item",fn:function(t){var s=t.item;return[e._v(e._s(e.$ln(s.text)))]}}]),model:{value:e.Items.identity.selected,callback:function(t){e.$set(e.Items.identity,"selected",t)},expression:"Items.identity.selected"}})],1),s("v-flex",{attrs:{xs12:""}},[s("div",{staticStyle:{"margin-top":"-30px"}},[s("v-textarea",{attrs:{label:e.$ln("備註")},model:{value:e.Items.remark.contents,callback:function(t){e.$set(e.Items.remark,"contents",t)},expression:"Items.remark.contents"}})],1)])],1)],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(t){e.Items.dialogOpen=!1}}},[e._v(e._s(e.$ln("取消")))]),e.Items.valid?s("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(t){e.add()}}},[e._v(e._s(e.$ln("新增")))]):s("v-btn",{attrs:{disabled:"",color:"blue darken-1",flat:""}},[e._v(e._s(e.$ln("新增")))])],1)],1)],1)}),[],!1,null,null,null);c.options.__file="Append.vue";t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-20f5cc76.121d77bb.js.map