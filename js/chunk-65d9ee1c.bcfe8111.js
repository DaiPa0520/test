(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-65d9ee1c"],{ade1:function(t,e,a){"use strict";var o=a("b987");a.n(o).a},b987:function(t,e,a){},e1b4:function(t,e,a){"use strict";a.r(e);var o=a("a34a"),n=a.n(o),s=a("200f");function l(t,e,a,o,n,s,l){try{var i=t[s](l),r=i.value}catch(p){return void a(p)}i.done?e(r):Promise.resolve(r).then(o,n)}var i,r,p={name:"EditMajorShareholder",mixins:[a("ab41").a],data:function(){return{level:5,upLevel:6}},methods:{init:(i=n.a.mark((function c(){var t,e,a,o=this;return n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(this.initLanguage(),this.$toastr.options.timeOut=36e5,this.$toastr.options.extendedTimeOut=1e3,this.$toastr.options.closeButton=!0,!this.$route.query.account){n.next=20;break}return t={l_lv:this.level,searchAccount:this.$route.query.account},n.next=8,s.a.getAccount(t);case 8:if(!(e=n.sent).hasOwnProperty("list")){n.next=13;break}return this.reload=(new Date).getTime(),n.next=13,this.setAccount(e.list);case 13:for(a in this.mapSportName)this.editGameSetItems.hasOwnProperty(a)&&(-1===this.showGameSetItems.selected.indexOf(a)?this.editGameSetItems[a].show=!1:this.editGameSetItems[a].show=!0);this.loadQuota(),this.loadGameSet(),this.loadDefaultGameSet(),this.$route.query.searchStatus?(this.loadingStatus=!0,this.getDownAccount({accountLine:this.$route.query.account}).then((function(t){200===t.status&&t.data.hasOwnProperty("result")&&t.data.result.hasOwnProperty("accountLine")&&(o.searchUpAccount=t.data.result.accountLine[6],o.loadUpAccountAllInfo()),o.loadingStatus=!1}))["catch"]((function(t){o.loadingStatus=!1}))):this.loadUpAccountAllInfo(),n.next=21;break;case 20:this.toBack();case 21:this.updateDashboardInfo(),this.closeGameType("s15");case 23:case"end":return n.stop()}}),c,this)})),r=function(){var t=this,e=arguments;return new Promise((function(a,o){var n=i.apply(t,e);function s(t){l(n,a,o,s,r,"next",t)}function r(t){l(n,a,o,s,r,"throw",t)}s(undefined)}))},function(){return r.apply(this,arguments)}),toBack:function(){6===parseInt(sessionStorage.getItem("super.manage.level"))?this.$router.push({path:"/manage/account-management/major-shareholder-management/directList",query:{pageType:"edit"}}):this.$route.query.searchStatus&&this.searchUpAccount?this.$router.push({path:"/manage/account-management/major-shareholder-management",query:{upAccount:this.searchUpAccount,pageType:"edit"}}):this.$route.query.upAccount?this.$router.push({path:"/manage/account-management/major-shareholder-management",query:{upAccount:this.$route.query.upAccount,pageType:"edit"}}):this.$router.push({path:"/manage/account-management/major-shareholder-management",query:{pageType:"edit"}})},getUpAccountValue:function(){return 6===parseInt(sessionStorage.getItem("super.manage.level"))?sessionStorage.getItem("super.manage.account"):this.$route.query.searchStatus&&this.searchUpAccount?this.searchUpAccount:this.$route.query.upAccount?this.$route.query.upAccount:void 0}}},m=(a("ade1"),a("2877")),u=Object(m.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"edit"},[a("v-container",{attrs:{fluid:"","grid-list-xl":""}},[a("CommonErrorMsg",{attrs:{show:t.error.show,message:t.error.message},on:{"update:show":function(e){t.$set(t.error,"show",e)},"update:message":function(e){t.$set(t.error,"message",e)}}}),t.modifyingStatus?a("MaterialLoadingMask",{attrs:{showText:t.$ln("修改中")}}):t._e(),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"mt-0",attrs:{md6:"",tag:"h3"}},[t._v("\n        "+t._s(t.$ln("修改大股東"))+" ("+t._s(t.Items.account)+")\n      ")]),a("v-flex",{staticClass:"text-xs-right",attrs:{md6:""}},[t.loadingStatus?a("v-btn",{attrs:{disabled:"",small:"",color:"amber darken-3"}},[a("v-icon",[t._v("mdi-arrow-left")]),t._v("\n          "+t._s(t.$ln("返回"))+"\n        ")],1):a("v-btn",{attrs:{small:"",color:"amber darken-3"},on:{click:function(e){t.toBack()}}},[a("v-icon",[t._v("mdi-arrow-left")]),t._v("\n          "+t._s(t.$ln("返回"))+"\n        ")],1)],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{md6:""}},[a("AccountManagementDeleteAccount",{attrs:{account:t.Items.account,"edit-level-code":5},on:{deleteStatus:t.deleteAccountStatus}}),a("AccountManagementEditQuotaIndex",{attrs:{account:t.Items.account,"sport-up-limit-quota":t.Items.sportUpLimitQuota,"sport-surplus-quota":t.Items.sportSurplusQuota,"bingo-up-limit-quota":t.Items.bingoUpLimitQuota,"bingo-surplus-quota":t.Items.bingoSurplusQuota,"lottery-up-limit-quota":t.Items.lotteryUpLimitQuota,"lottery-surplus-quota":t.Items.lotterySurplusQuota,"royal-up-limit-quota":t.Items.royalUpLimitQuota,"royal-surplus-quota":t.Items.royalSurplusQuota,"bingo-api-show":t.setApi.bingo.show,"lottery-api-show":t.setApi.lottery.show,"royal-api-show":t.setApi.royal.show},on:{status:t.editQuotaStatus,quotaDialogOpen:t.quotaDialogOpen}}),t.passwordItems.show?a("AccountManagementEditPasswordIndex",{attrs:{account:t.Items.account,"update-type":"others","account-type":"glead"}}):t._e()],1),a("v-flex",{staticClass:"text-md-right",attrs:{md6:""}},[t.modifyingStatus?t.modifyingStatus?a("v-btn",{attrs:{loading:t.modifyingStatus,disabled:"",small:"",color:"deep-orange darken-1"}},[t._v("\n          "+t._s(t.$ln("確定修改"))+"\n        ")]):t._e():a("v-btn",{attrs:{small:"",color:"deep-orange darken-1"},on:{click:function(e){t.editAccount()}}},[t._v("\n          "+t._s(t.$ln("確定修改"))+"\n        ")])],1)],1),a("v-form",{model:{value:t.Items.valid,callback:function(e){t.$set(t.Items,"valid",e)},expression:"Items.valid"}},[a("material-card",[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xl9:"",md8:""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{md4:""}},[a("v-text-field",{attrs:{label:t.$ln("修改時間"),disabled:""},model:{value:t.Items.lastDateTime,callback:function(e){t.$set(t.Items,"lastDateTime",e)},expression:"Items.lastDateTime"}})],1),a("v-flex",{attrs:{md4:""}},[a("v-text-field",{attrs:{label:t.$ln("大股東帳號"),disabled:""},model:{value:t.Items.account,callback:function(e){t.$set(t.Items,"account",e)},expression:"Items.account"}})],1),a("v-flex",{attrs:{md4:""}},[a("v-text-field",{attrs:{rules:t.Items.nameItems.nameRules,label:t.$ln("大股東名稱")},model:{value:t.Items.nameItems.name,callback:function(e){t.$set(t.Items.nameItems,"name",e)},expression:"Items.nameItems.name"}})],1),a("v-flex",{directives:[{name:"show",rawName:"v-show",value:t.Items.sportCreditItems.show,expression:"Items.sportCreditItems.show"}],attrs:{md4:""}},[a("v-text-field",{staticClass:"v-input-input",attrs:{suffix:""+t.Items.sportCreditItems.suffixLeft+t.Items.sportSurplusQuota+t.Items.sportCreditItems.suffixRight,disabled:t.Items.sportCreditItems.disabled,label:t.$ln("(體育)信用額度")},model:{value:t.Items.sportCreditItems.amount,callback:function(e){t.$set(t.Items.sportCreditItems,"amount",t._n(e))},expression:"Items.sportCreditItems.amount"}})],1),a("v-flex",{directives:[{name:"show",rawName:"v-show",value:t.Items.sportCashItems.show,expression:"Items.sportCashItems.show"}],attrs:{md4:""}},[a("v-text-field",{attrs:{suffix:""+t.Items.sportCashItems.suffixRight,disabled:t.Items.sportCashItems.disabled,label:t.$ln("(體育)現金額度")},model:{value:t.Items.sportCashItems.amount,callback:function(e){t.$set(t.Items.sportCashItems,"amount",t._n(e))},expression:"Items.sportCashItems.amount"}})],1),t.Items.downLimitItems.show?a("v-flex",{attrs:{md4:""}},[t.Items.downLimitItems.disabled?a("v-text-field",{attrs:{suffix:"≥"+t.Items.downLimitItems.minLimit,disabled:t.Items.downLimitItems.disabled,label:t.$ln("單注下限")},model:{value:t.Items.downLimitItems.amount,callback:function(e){t.$set(t.Items.downLimitItems,"amount",t._n(e))},expression:"Items.downLimitItems.amount"}}):a("v-text-field",{attrs:{rules:t.Items.downLimitItems.rules,suffix:"≥"+t.Items.downLimitItems.minLimit,disabled:t.Items.downLimitItems.disabled,label:t.$ln("單注下限")},model:{value:t.Items.downLimitItems.amount,callback:function(e){t.$set(t.Items.downLimitItems,"amount",t._n(e))},expression:"Items.downLimitItems.amount"}})],1):t._e(),a("v-flex",{attrs:{md4:""}},[a("v-text-field",{attrs:{label:t.$ln("備註")},model:{value:t.Items.remark.contents,callback:function(e){t.$set(t.Items.remark,"contents",e)},expression:"Items.remark.contents"}})],1)],1)],1),a("v-flex",{staticClass:"pl-4",attrs:{xl3:"",md4:""}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!(!t.setApi.bingo.show&&!t.setApi.lottery.show&&!t.setApi.royal.show),expression:"!(!setApi.bingo.show && !setApi.lottery.show && !setApi.royal.show)"}],staticClass:"py-3"},[a("div",{staticClass:"v-input__slot"},[a("div",{staticClass:"v-text-field__slot"},[a("label",{staticClass:"v-label caption",staticStyle:{left:"0px",right:"auto",position:"absolute"},attrs:{"aria-hidden":"true"}},[t._v(t._s(t.$ln("API設定")))]),a("div",{staticClass:"pt-3"},[a("AccountManagementEditBingoIndex",{directives:[{name:"show",rawName:"v-show",value:t.setApi.bingo.show,expression:"setApi.bingo.show"}],staticClass:"mb-1",attrs:{"bingo-account":t.Items.account,"bingo-quota":t.Items.bingoQuota,"bingo-surplus-quota":t.Items.bingoSurplusQuota,"up-status":t.upStatus.bingo,"up-close":t.upClose.bingo,"loading-status":t.setApi.bingo.loadingStatus,"edit-level-code":5},on:{editBingoStatus:t.editBingoStatus,bingoDialogOpen:t.bingoDialogOpen}}),a("AccountManagementEditLotteryIndex",{directives:[{name:"show",rawName:"v-show",value:t.setApi.lottery.show,expression:"setApi.lottery.show"}],staticClass:"mb-1",attrs:{"lottery-account":t.Items.account,"lottery-quota":t.Items.lotteryQuota,"lottery-surplus-quota":t.Items.lotterySurplusQuota,"up-status":t.upStatus.lottery,"up-close":t.upClose.lottery,"loading-status":t.setApi.lottery.loadingStatus,"edit-level-code":5},on:{editLotteryStatus:t.editLotteryStatus,lotteryDialogOpen:t.lotteryDialogOpen}}),a("AccountManagementEditRoyalIndex",{directives:[{name:"show",rawName:"v-show",value:t.setApi.royal.show,expression:"setApi.royal.show"}],staticClass:"mb-1",attrs:{"royal-account":t.Items.account,"royal-quota":t.Items.royalQuota,"royal-surplus-quota":t.Items.royalSurplusQuota,"royal-up-limit-quota":t.Items.royalUpLimitQuota,"royal-up-limit-level":t.Items.royalUpLimitLevel,"up-status":t.upStatus.royal,"loading-status":t.setApi.royal.loadingStatus,promptGreaterUpGameSetDialogOpen:t.promptGreaterUpGameSetDialogOpen,promptLesserDownGameSetDialogOpen:t.promptLesserDownGameSetDialogOpen,"edit-level-code":5},on:{"update:promptGreaterUpGameSetDialogOpen":function(e){t.promptGreaterUpGameSetDialogOpen=e},"update:promptLesserDownGameSetDialogOpen":function(e){t.promptLesserDownGameSetDialogOpen=e},editRoyalStatus:t.editRoyalStatus,royalDialogOpen:t.royalDialogOpen}})],1)])])]),a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{sx6:""}},[a("div",{staticClass:"v-input__slot"},[a("div",{staticClass:"v-text-field__slot"},[a("label",{staticClass:"v-label caption",staticStyle:{left:"0px",right:"auto",position:"absolute"},attrs:{"aria-hidden":"true"}},[t._v(t._s(t.$ln("是否允許登入")))]),a("v-radio-group",{attrs:{disabled:0!==t.upStatus.sport,row:""},model:{value:t.Items.whetherAllowLogin.selected,callback:function(e){t.$set(t.Items.whetherAllowLogin,"selected",e)},expression:"Items.whetherAllowLogin.selected"}},[t._l(t.Items.whetherAllowLogin.options,(function(e,o){return 0===e.value?a("v-radio",{key:o,staticClass:"v-input-checkbox",attrs:{label:t.$ln(e.text),value:e.value}}):t._e()})),t._l(t.Items.whetherAllowLogin.options,(function(e,o){return 1===e.value?a("v-radio",{key:o,staticClass:"v-input-checkbox",attrs:{label:t.$ln(e.text),value:e.value},nativeOn:{click:function(e){e.stopPropagation(),t.allowLoginIsNoItems.dialogOpen=!0}}}):t._e()}))],2)],1)]),a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.allowLoginIsNoItems.dialogOpen,callback:function(e){t.$set(t.allowLoginIsNoItems,"dialogOpen",e)},expression:"allowLoginIsNoItems.dialogOpen"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v(t._s(t.$ln("不允許登入")))]),a("v-card-text",[t._v(t._s(t.$ln("是否確認「鎖定帳號」？"))+" "),a("br"),t._v(t._s(t.$ln("請注意，下線也會同步執行")))]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",flat:"flat"},on:{click:function(e){t.isNoAllowLogin(!1)}}},[t._v(t._s(t.$ln("取消"))+"\n                      ")]),a("v-btn",{attrs:{color:"blue darken-1",flat:"flat"},on:{click:function(e){t.isNoAllowLogin(!0)}}},[t._v(t._s(t.$ln("確定"))+"\n                      ")])],1)],1)],1)],1),a("v-flex",{attrs:{sx6:""}},[a("div",{staticClass:"v-input__slot"},[a("div",{staticClass:"v-text-field__slot"},[a("label",{staticClass:"v-label caption",staticStyle:{left:"0px",right:"auto",position:"absolute"},attrs:{"aria-hidden":"true"}},[t._v(t._s(t.$ln("下線允許投注")))]),a("v-radio-group",{attrs:{disabled:0!==t.upClose.sport,row:""},model:{value:t.Items.whetherAllowBet.selected,callback:function(e){t.$set(t.Items.whetherAllowBet,"selected",e)},expression:"Items.whetherAllowBet.selected"}},[t._l(t.Items.whetherAllowBet.options,(function(e,o){return 0===e.value?a("v-radio",{key:o,staticClass:"v-input-checkbox",attrs:{label:t.$ln(e.text),value:e.value}}):t._e()})),t._l(t.Items.whetherAllowBet.options,(function(e,o){return 1===e.value?a("v-radio",{key:o,staticClass:"v-input-checkbox",attrs:{label:t.$ln(e.text),value:e.value},nativeOn:{click:function(e){e.stopPropagation(),t.allowBetIsNoItems.dialogOpen=!0}}}):t._e()}))],2)],1)]),a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.allowBetIsNoItems.dialogOpen,callback:function(e){t.$set(t.allowBetIsNoItems,"dialogOpen",e)},expression:"allowBetIsNoItems.dialogOpen"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v(t._s(t.$ln("不允許投注")))]),a("v-card-text",[t._v(t._s(t.$ln("是否確認「停押帳號」？"))+" "),a("br"),t._v(t._s(t.$ln("請注意，下線也會同步執行")))]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",flat:"flat"},on:{click:function(e){t.isNoAllowBet(!1)}}},[t._v(t._s(t.$ln("取消"))+"\n                      ")]),a("v-btn",{attrs:{color:"blue darken-1",flat:"flat"},on:{click:function(e){t.isNoAllowBet(!0)}}},[t._v(t._s(t.$ln("確定"))+"\n                      ")])],1)],1)],1)],1)],1)],1)],1)],1),a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{md4:"",xs12:""}},[t._v("\n          "+t._s(t.$ln("顯示顏色說明"))+"\n          "),a("p",[a("span",{staticClass:"red lighten-4"},[t._v(t._s(t.$ln("紅底 - 滾球")))]),t._v(" \n            "),a("span",{staticClass:"blue lighten-4"},[t._v(t._s(t.$ln("藍底 - 過關")))]),t._v(" \n            "),a("span",{staticClass:"amber lighten-4"},[t._v(t._s(t.$ln("橘底 - 編輯狀態")))])])]),a("v-flex",{attrs:{md8:"",xs12:""}},[t._v("\n          "+t._s(t.$ln("修改顏色說明"))+"\n          "),a("p",[a("span",{staticClass:"grey lighten-3"},[t._v(t._s(t.$ln("灰底 - 有修改過值")))]),t._v(" \n            ")])])],1),a("div",{staticClass:"pb-2"},[a("h4",{staticClass:"title mb-2"},[t._v(t._s(t.$ln("球類佔成設定")))]),a("AccountManagementEditOccupyIndex",{attrs:{reload:t.reload,items:t.userData,promptGreaterUpGameSetDialogOpen:t.promptGreaterUpGameSetDialogOpen,promptLesserDownGameSetDialogOpen:t.promptLesserDownGameSetDialogOpen,"edit-level-code":5},on:{"update:reload":function(e){t.reload=e},"update:promptGreaterUpGameSetDialogOpen":function(e){t.promptGreaterUpGameSetDialogOpen=e},"update:promptLesserDownGameSetDialogOpen":function(e){t.promptLesserDownGameSetDialogOpen=e},validStatus:t.checkValidStatus,editParams:t.checkOccupyEditParams}})],1),a("div",{staticClass:"pb-2 pt-4"},[a("h4",{staticClass:"title mb-2"},[t._v(t._s(t.$ln("球類設定資訊")))]),a("material-card",[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xl1:"",md2:""}},[t._v("\n              "+t._s(t.$ln("顯示修改類別"))+"\n            ")]),a("v-flex",{attrs:{xl11:"",md10:""}},[a("span",{staticClass:"d-inline-block mr-3"},[a("v-checkbox",{staticClass:"v-input-checkbox",attrs:{label:t.$ln("全部")},model:{value:t.showGameSetSelectAll,callback:function(e){t.showGameSetSelectAll=e},expression:"showGameSetSelectAll"}})],1),t._l(t.showGameSetItems.items,(function(e,o){return a("span",{key:o,staticClass:"d-inline-block mr-3"},[a("v-checkbox",{staticClass:"v-input-checkbox",attrs:{label:t.$ln(e.name),value:e.id,number:""},model:{value:t.showGameSetItems.selected,callback:function(e){t.$set(t.showGameSetItems,"selected",e)},expression:"showGameSetItems.selected"}})],1)}))],2)],1),a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xl1:"",md2:""}},[t._v("\n              "+t._s(t.$ln("快速設定"))+"\n            ")]),a("v-flex",{attrs:{xl11:"",md8:""}},[a("span",{staticClass:"d-inline-block mr-3"},[a("v-checkbox",{staticClass:"v-input-checkbox",attrs:{disabled:t.disableQuickSettingGameSelectAll,label:t.$ln("全部")},model:{value:t.quickSettingGameSelectAll,callback:function(e){t.quickSettingGameSelectAll=e},expression:"quickSettingGameSelectAll"}})],1),t._l(t.quickSettingGame.items,(function(e,o){return a("span",{key:o,staticClass:"d-inline-block mr-3"},[a("v-checkbox",{staticClass:"v-input-checkbox",attrs:{label:t.$ln(e.name),value:e.id,disabled:e.disabled,number:""},model:{value:t.quickSettingGame.selected,callback:function(e){t.$set(t.quickSettingGame,"selected",e)},expression:"quickSettingGame.selected"}})],1)}))],2)],1),a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xl1:"",md2:""}},[t._v("\n              "+t._s(t.$ln("類別"))),a("br"),a("span",{staticClass:"red--text body-2"},[t._v(t._s("("+t.$ln("必須選擇一種")+")"))])]),a("v-flex",{attrs:{xl11:"",md10:""}},[a("span",{staticClass:"d-inline-block mr-3"},[a("v-checkbox",{staticClass:"v-input-checkbox",attrs:{label:t.$ln("各項設定(全部)")},model:{value:t.quickSettingPlaySelectAll,callback:function(e){t.quickSettingPlaySelectAll=e},expression:"quickSettingPlaySelectAll"}})],1),t._l(t.quickSettingPlay.items,(function(e,o){return a("span",{key:o,staticClass:"d-inline-block mr-3"},[a("v-checkbox",{staticClass:"v-input-checkbox",attrs:{label:t.$ln(e.name),value:e.id,number:""},model:{value:t.quickSettingPlay.selected,callback:function(e){t.$set(t.quickSettingPlay,"selected",e)},expression:"quickSettingPlay.selected"}})],1)}))],2)],1),a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xl1:"",md2:""}},[a("div",{staticClass:"pt-2"},[t._v("\n                "+t._s(t.$ln("快速設定金額"))+"\n              ")])]),a("v-flex",{staticClass:"pt-0",attrs:{xl11:"",md10:""}},[a("span",{staticClass:"d-inline-block mr-2"},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticClass:"pr-0"},[a("v-form",{attrs:{onSubmit:"return false;"},on:{submit:function(t){}},model:{value:t.quickSettingAmount.commission_A.valid,callback:function(e){t.$set(t.quickSettingAmount.commission_A,"valid",e)},expression:"quickSettingAmount.commission_A.valid"}},[a("v-text-field",{attrs:{rules:t.quickSettingAmount.rules,label:t.$ln("返水A盤")+"("+t.$ln("足球")+")"},on:{focusout:function(e){t.changeGameSet("commission_A")}},model:{value:t.quickSettingAmount.commission_A.amount,callback:function(e){t.$set(t.quickSettingAmount.commission_A,"amount",t._n(e))},expression:"quickSettingAmount.commission_A.amount"}})],1)],1)],1)],1),t._v("\n                 \n              "),a("span",{staticClass:"d-inline-block mr-2"},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticClass:"pr-0"},[a("v-form",{attrs:{onSubmit:"return false;"},on:{submit:function(t){}},model:{value:t.quickSettingAmount.commission_B.valid,callback:function(e){t.$set(t.quickSettingAmount.commission_B,"valid",e)},expression:"quickSettingAmount.commission_B.valid"}},[a("v-text-field",{attrs:{rules:t.quickSettingAmount.rules,label:t.$ln("返水B盤")+"("+t.$ln("足球")+")"},on:{focusout:function(e){t.changeGameSet("commission_B")}},model:{value:t.quickSettingAmount.commission_B.amount,callback:function(e){t.$set(t.quickSettingAmount.commission_B,"amount",t._n(e))},expression:"quickSettingAmount.commission_B.amount"}})],1)],1)],1)],1),t._v("\n                 \n              "),a("span",{staticClass:"d-inline-block mr-2"},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticClass:"pr-0"},[a("v-form",{attrs:{onSubmit:"return false;"},on:{submit:function(t){}},model:{value:t.quickSettingAmount.commission_C.valid,callback:function(e){t.$set(t.quickSettingAmount.commission_C,"valid",e)},expression:"quickSettingAmount.commission_C.valid"}},[a("v-text-field",{attrs:{rules:t.quickSettingAmount.rules,label:t.$ln("返水C盤")+"("+t.$ln("足球")+")"},on:{focusout:function(e){t.changeGameSet("commission_C")}},model:{value:t.quickSettingAmount.commission_C.amount,callback:function(e){t.$set(t.quickSettingAmount.commission_C,"amount",t._n(e))},expression:"quickSettingAmount.commission_C.amount"}})],1)],1)],1)],1),t._v("\n                 \n              "),a("span",{staticClass:"d-inline-block mr-2"},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticClass:"pr-0"},[a("v-form",{attrs:{onSubmit:"return false;"},on:{submit:function(t){}},model:{value:t.quickSettingAmount.commission.valid,callback:function(e){t.$set(t.quickSettingAmount.commission,"valid",e)},expression:"quickSettingAmount.commission.valid"}},[a("v-text-field",{attrs:{rules:t.quickSettingAmount.rules,label:t.$ln("返水設定")},on:{focusout:function(e){t.changeGameSet("commission")}},model:{value:t.quickSettingAmount.commission.amount,callback:function(e){t.$set(t.quickSettingAmount.commission,"amount",t._n(e))},expression:"quickSettingAmount.commission.amount"}})],1)],1)],1)],1),t._v("\n                 \n              "),a("span",{staticClass:"d-inline-block mr-1"},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticClass:"pr-0"},[a("v-form",{attrs:{onSubmit:"return false;"},on:{submit:function(t){}},model:{value:t.quickSettingAmount.LCtotal.valid,callback:function(e){t.$set(t.quickSettingAmount.LCtotal,"valid",e)},expression:"quickSettingAmount.LCtotal.valid"}},[a("v-text-field",{attrs:{rules:t.quickSettingAmount.rules,label:t.$ln("單注上限(萬)")},on:{focusout:function(e){t.changeGameSet("LCtotal")}},model:{value:t.quickSettingAmount.LCtotal.amount,callback:function(e){t.$set(t.quickSettingAmount.LCtotal,"amount",t._n(e))},expression:"quickSettingAmount.LCtotal.amount"}})],1)],1)],1)],1),t._v("\n                 \n              "),a("span",{staticClass:"d-inline-block mr-1"},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticClass:"pr-0"},[a("v-form",{attrs:{onSubmit:"return false;"},on:{submit:function(t){}},model:{value:t.quickSettingAmount.teamLCtotal.valid,callback:function(e){t.$set(t.quickSettingAmount.teamLCtotal,"valid",e)},expression:"quickSettingAmount.teamLCtotal.valid"}},[a("v-text-field",{attrs:{rules:t.quickSettingAmount.rules,label:t.$ln("單場上限(萬)")},on:{focusout:function(e){t.changeGameSet("teamLCtotal")}},model:{value:t.quickSettingAmount.teamLCtotal.amount,callback:function(e){t.$set(t.quickSettingAmount.teamLCtotal,"amount",t._n(e))},expression:"quickSettingAmount.teamLCtotal.amount"}})],1)],1)],1)],1),t._v("\n                 \n              "),a("span",{staticClass:"d-inline-block mr-1"},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticClass:"pr-0"},[a("v-form",{attrs:{onSubmit:"return false;"},on:{submit:function(t){}},model:{value:t.quickSettingAmount.allLCtotal.valid,callback:function(e){t.$set(t.quickSettingAmount.allLCtotal,"valid",e)},expression:"quickSettingAmount.allLCtotal.valid"}},[a("v-text-field",{attrs:{rules:t.quickSettingAmount.rules,label:t.$ln("單邊上限(萬)")},on:{focusout:function(e){t.changeGameSet("allLCtotal")}},model:{value:t.quickSettingAmount.allLCtotal.amount,callback:function(e){t.$set(t.quickSettingAmount.allLCtotal,"amount",t._n(e))},expression:"quickSettingAmount.allLCtotal.amount"}})],1)],1)],1)],1),t._v("\n                 \n              "),a("span",{staticClass:"d-inline-block mr-1"},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticClass:"pr-0"},[a("v-select",{staticClass:"v-input-select pass-txt",attrs:{items:t.passItems.options,label:t.$ln("過關關數")},on:{change:function(e){t.changeGameSet("pass")}},scopedSlots:t._u([{key:"selection",fn:function(e){var a=e.item;return[t._v(t._s(t.$ln(a.text)))]}},{key:"item",fn:function(e){var a=e.item;return[t._v(t._s(t.$ln(a.text)))]}}]),model:{value:t.passItems.selected,callback:function(e){t.$set(t.passItems,"selected",e)},expression:"passItems.selected"}})],1)],1)],1)])],1)],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.editGameSetItems.s1.show,expression:"editGameSetItems.s1.show"}]},[a("AccountManagementEditGameSetMlb",{attrs:{reload:t.reload,"get-change-game-set-items":t.changeGameSetItems,promptGreaterUpGameSetDialogOpen:t.promptGreaterUpGameSetDialogOpen,promptLesserDownGameSetDialogOpen:t.promptLesserDownGameSetDialogOpen,promptAllLCtotalInputZeroDialogOpen:t.promptAllLCtotalInputZeroDialogOpen,"edit-level-code":5},on:{"update:reload":function(e){t.reload=e},"update:promptGreaterUpGameSetDialogOpen":function(e){t.promptGreaterUpGameSetDialogOpen=e},"update:promptLesserDownGameSetDialogOpen":function(e){t.promptLesserDownGameSetDialogOpen=e},"update:promptAllLCtotalInputZeroDialogOpen":function(e){t.promptAllLCtotalInputZeroDialogOpen=e},validStatus:t.checkValidStatus,editParams:t.checkMlbEditParams}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.editGameSetItems.s2.show,expression:"editGameSetItems.s2.show"}]},[a("AccountManagementEditGameSetNpb",{attrs:{reload:t.reload,"get-change-game-set-items":t.changeGameSetItems,promptGreaterUpGameSetDialogOpen:t.promptGreaterUpGameSetDialogOpen,promptLesserDownGameSetDialogOpen:t.promptLesserDownGameSetDialogOpen,promptAllLCtotalInputZeroDialogOpen:t.promptAllLCtotalInputZeroDialogOpen,"edit-level-code":5},on:{"update:reload":function(e){t.reload=e},"update:promptGreaterUpGameSetDialogOpen":function(e){t.promptGreaterUpGameSetDialogOpen=e},"update:promptLesserDownGameSetDialogOpen":function(e){t.promptLesserDownGameSetDialogOpen=e},"update:promptAllLCtotalInputZeroDialogOpen":function(e){t.promptAllLCtotalInputZeroDialogOpen=e},validStatus:t.checkValidStatus,editParams:t.checkNpbEditParams}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.editGameSetItems.s3.show,expression:"editGameSetItems.s3.show"}]},[a("AccountManagementEditGameSetCpb",{attrs:{reload:t.reload,"get-change-game-set-items":t.changeGameSetItems,promptGreaterUpGameSetDialogOpen:t.promptGreaterUpGameSetDialogOpen,promptLesserDownGameSetDialogOpen:t.promptLesserDownGameSetDialogOpen,promptAllLCtotalInputZeroDialogOpen:t.promptAllLCtotalInputZeroDialogOpen,"edit-level-code":5},on:{"update:reload":function(e){t.reload=e},"update:promptGreaterUpGameSetDialogOpen":function(e){t.promptGreaterUpGameSetDialogOpen=e},"update:promptLesserDownGameSetDialogOpen":function(e){t.promptLesserDownGameSetDialogOpen=e},"update:promptAllLCtotalInputZeroDialogOpen":function(e){t.promptAllLCtotalInputZeroDialogOpen=e},validStatus:t.checkValidStatus,editParams:t.checkCpbEditParams}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.editGameSetItems.s4.show,expression:"editGameSetItems.s4.show"}]},[a("AccountManagementEditGameSetKbo",{attrs:{reload:t.reload,"get-change-game-set-items":t.changeGameSetItems,promptGreaterUpGameSetDialogOpen:t.promptGreaterUpGameSetDialogOpen,promptLesserDownGameSetDialogOpen:t.promptLesserDownGameSetDialogOpen,promptAllLCtotalInputZeroDialogOpen:t.promptAllLCtotalInputZeroDialogOpen,"edit-level-code":5},on:{"update:reload":function(e){t.reload=e},"update:promptGreaterUpGameSetDialogOpen":function(e){t.promptGreaterUpGameSetDialogOpen=e},"update:promptLesserDownGameSetDialogOpen":function(e){t.promptLesserDownGameSetDialogOpen=e},"update:promptAllLCtotalInputZeroDialogOpen":function(e){t.promptAllLCtotalInputZeroDialogOpen=e},validStatus:t.checkValidStatus,editParams:t.checkKboEditParams}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.editGameSetItems.s5.show,expression:"editGameSetItems.s5.show"}]},[a("AccountManagementEditGameSetIceHockey",{attrs:{reload:t.reload,"get-change-game-set-items":t.changeGameSetItems,promptGreaterUpGameSetDialogOpen:t.promptGreaterUpGameSetDialogOpen,promptLesserDownGameSetDialogOpen:t.promptLesserDownGameSetDialogOpen,promptAllLCtotalInputZeroDialogOpen:t.promptAllLCtotalInputZeroDialogOpen,"edit-level-code":5},on:{"update:reload":function(e){t.reload=e},"update:promptGreaterUpGameSetDialogOpen":function(e){t.promptGreaterUpGameSetDialogOpen=e},"update:promptLesserDownGameSetDialogOpen":function(e){t.promptLesserDownGameSetDialogOpen=e},"update:promptAllLCtotalInputZeroDialogOpen":function(e){t.promptAllLCtotalInputZeroDialogOpen=e},validStatus:t.checkValidStatus,editParams:t.checkIceHockeyEditParams}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.editGameSetItems.s6.show,expression:"editGameSetItems.s6.show"}]},[a("AccountManagementEditGameSetBasketball",{attrs:{reload:t.reload,"get-change-game-set-items":t.changeGameSetItems,promptGreaterUpGameSetDialogOpen:t.promptGreaterUpGameSetDialogOpen,promptLesserDownGameSetDialogOpen:t.promptLesserDownGameSetDialogOpen,promptAllLCtotalInputZeroDialogOpen:t.promptAllLCtotalInputZeroDialogOpen,"edit-level-code":5},on:{"update:reload":function(e){t.reload=e},"update:promptGreaterUpGameSetDialogOpen":function(e){t.promptGreaterUpGameSetDialogOpen=e},"update:promptLesserDownGameSetDialogOpen":function(e){t.promptLesserDownGameSetDialogOpen=e},"update:promptAllLCtotalInputZeroDialogOpen":function(e){t.promptAllLCtotalInputZeroDialogOpen=e},validStatus:t.checkValidStatus,editParams:t.checkBasketballEditParams}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.editGameSetItems.s7.show,expression:"editGameSetItems.s7.show"}]},[a("AccountManagementEditGameSetLottery",{attrs:{reload:t.reload,"get-change-game-set-items":t.changeGameSetItems,promptGreaterUpGameSetDialogOpen:t.promptGreaterUpGameSetDialogOpen,promptLesserDownGameSetDialogOpen:t.promptLesserDownGameSetDialogOpen,promptAllLCtotalInputZeroDialogOpen:t.promptAllLCtotalInputZeroDialogOpen,"edit-level-code":5},on:{"update:reload":function(e){t.reload=e},"update:promptGreaterUpGameSetDialogOpen":function(e){t.promptGreaterUpGameSetDialogOpen=e},"update:promptLesserDownGameSetDialogOpen":function(e){t.promptLesserDownGameSetDialogOpen=e},"update:promptAllLCtotalInputZeroDialogOpen":function(e){t.promptAllLCtotalInputZeroDialogOpen=e},validStatus:t.checkValidStatus,editParams:t.checkLotteryEditParams}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.editGameSetItems.s8.show,expression:"editGameSetItems.s8.show"}]},[a("AccountManagementEditGameSetFootball",{attrs:{reload:t.reload,"get-change-game-set-items":t.changeGameSetItems,promptGreaterUpGameSetDialogOpen:t.promptGreaterUpGameSetDialogOpen,promptLesserDownGameSetDialogOpen:t.promptLesserDownGameSetDialogOpen,promptAllLCtotalInputZeroDialogOpen:t.promptAllLCtotalInputZeroDialogOpen,"edit-level-code":5},on:{"update:reload":function(e){t.reload=e},"update:promptGreaterUpGameSetDialogOpen":function(e){t.promptGreaterUpGameSetDialogOpen=e},"update:promptLesserDownGameSetDialogOpen":function(e){t.promptLesserDownGameSetDialogOpen=e},"update:promptAllLCtotalInputZeroDialogOpen":function(e){t.promptAllLCtotalInputZeroDialogOpen=e},validStatus:t.checkValidStatus,editParams:t.checkFootballEditParams}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.editGameSetItems.s9.show,expression:"editGameSetItems.s9.show"}]},[a("AccountManagementEditGameSetTennis",{attrs:{reload:t.reload,"get-change-game-set-items":t.changeGameSetItems,promptGreaterUpGameSetDialogOpen:t.promptGreaterUpGameSetDialogOpen,promptLesserDownGameSetDialogOpen:t.promptLesserDownGameSetDialogOpen,promptAllLCtotalInputZeroDialogOpen:t.promptAllLCtotalInputZeroDialogOpen,"edit-level-code":5},on:{"update:reload":function(e){t.reload=e},"update:promptGreaterUpGameSetDialogOpen":function(e){t.promptGreaterUpGameSetDialogOpen=e},"update:promptLesserDownGameSetDialogOpen":function(e){t.promptLesserDownGameSetDialogOpen=e},"update:promptAllLCtotalInputZeroDialogOpen":function(e){t.promptAllLCtotalInputZeroDialogOpen=e},validStatus:t.checkValidStatus,editParams:t.checkTennisEditParams}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.editGameSetItems.s10.show,expression:"editGameSetItems.s10.show"}]},[a("AccountManagementEditGameSetSoccer",{attrs:{reload:t.reload,"get-change-game-set-items":t.changeGameSetItems,promptGreaterUpGameSetDialogOpen:t.promptGreaterUpGameSetDialogOpen,promptLesserDownGameSetDialogOpen:t.promptLesserDownGameSetDialogOpen,promptAllLCtotalInputZeroDialogOpen:t.promptAllLCtotalInputZeroDialogOpen,"edit-level-code":5},on:{"update:reload":function(e){t.reload=e},"update:promptGreaterUpGameSetDialogOpen":function(e){t.promptGreaterUpGameSetDialogOpen=e},"update:promptLesserDownGameSetDialogOpen":function(e){t.promptLesserDownGameSetDialogOpen=e},"update:promptAllLCtotalInputZeroDialogOpen":function(e){t.promptAllLCtotalInputZeroDialogOpen=e},validStatus:t.checkValidStatus,editParams:t.checkSoccerEditParams}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.editGameSetItems.s11.show,expression:"editGameSetItems.s11.show"}]},[a("AccountManagementEditGameSetIndexNumber",{attrs:{reload:t.reload,"get-change-game-set-items":t.changeGameSetItems,promptGreaterUpGameSetDialogOpen:t.promptGreaterUpGameSetDialogOpen,promptLesserDownGameSetDialogOpen:t.promptLesserDownGameSetDialogOpen,promptAllLCtotalInputZeroDialogOpen:t.promptAllLCtotalInputZeroDialogOpen,"edit-level-code":5},on:{"update:reload":function(e){t.reload=e},"update:promptGreaterUpGameSetDialogOpen":function(e){t.promptGreaterUpGameSetDialogOpen=e},"update:promptLesserDownGameSetDialogOpen":function(e){t.promptLesserDownGameSetDialogOpen=e},"update:promptAllLCtotalInputZeroDialogOpen":function(e){t.promptAllLCtotalInputZeroDialogOpen=e},validStatus:t.checkValidStatus,editParams:t.checkIndexNumberEditParams}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.editGameSetItems.s12.show,expression:"editGameSetItems.s12.show"}]},[a("AccountManagementEditGameSetHorseOrDogRace",{attrs:{reload:t.reload,"get-change-game-set-items":t.changeGameSetItems,promptGreaterUpGameSetDialogOpen:t.promptGreaterUpGameSetDialogOpen,promptLesserDownGameSetDialogOpen:t.promptLesserDownGameSetDialogOpen,promptAllLCtotalInputZeroDialogOpen:t.promptAllLCtotalInputZeroDialogOpen,"edit-level-code":5},on:{"update:reload":function(e){t.reload=e},"update:promptGreaterUpGameSetDialogOpen":function(e){t.promptGreaterUpGameSetDialogOpen=e},"update:promptLesserDownGameSetDialogOpen":function(e){t.promptLesserDownGameSetDialogOpen=e},"update:promptAllLCtotalInputZeroDialogOpen":function(e){t.promptAllLCtotalInputZeroDialogOpen=e},validStatus:t.checkValidStatus,editParams:t.checkHorseOrDogRaceEditParams}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.editGameSetItems.s13.show,expression:"editGameSetItems.s13.show"}]},[a("AccountManagementEditGameSetEsport",{attrs:{reload:t.reload,"get-change-game-set-items":t.changeGameSetItems,promptGreaterUpGameSetDialogOpen:t.promptGreaterUpGameSetDialogOpen,promptLesserDownGameSetDialogOpen:t.promptLesserDownGameSetDialogOpen,promptAllLCtotalInputZeroDialogOpen:t.promptAllLCtotalInputZeroDialogOpen,"edit-level-code":5},on:{"update:reload":function(e){t.reload=e},"update:promptGreaterUpGameSetDialogOpen":function(e){t.promptGreaterUpGameSetDialogOpen=e},"update:promptLesserDownGameSetDialogOpen":function(e){t.promptLesserDownGameSetDialogOpen=e},"update:promptAllLCtotalInputZeroDialogOpen":function(e){t.promptAllLCtotalInputZeroDialogOpen=e},validStatus:t.checkValidStatus,editParams:t.checkEsportEditParams}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.editGameSetItems.s14.show,expression:"editGameSetItems.s14.show"}]},[a("AccountManagementEditGameSetOther",{attrs:{reload:t.reload,"get-change-game-set-items":t.changeGameSetItems,promptGreaterUpGameSetDialogOpen:t.promptGreaterUpGameSetDialogOpen,promptLesserDownGameSetDialogOpen:t.promptLesserDownGameSetDialogOpen,promptAllLCtotalInputZeroDialogOpen:t.promptAllLCtotalInputZeroDialogOpen,"edit-level-code":5},on:{"update:reload":function(e){t.reload=e},"update:promptGreaterUpGameSetDialogOpen":function(e){t.promptGreaterUpGameSetDialogOpen=e},"update:promptLesserDownGameSetDialogOpen":function(e){t.promptLesserDownGameSetDialogOpen=e},"update:promptAllLCtotalInputZeroDialogOpen":function(e){t.promptAllLCtotalInputZeroDialogOpen=e},validStatus:t.checkValidStatus,editParams:t.checkOtherEditParams}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.editGameSetItems.s15.show,expression:"editGameSetItems.s15.show"}]},[a("AccountManagementEditGameSetFifa",{attrs:{reload:t.reload,"get-change-game-set-items":t.changeGameSetItems,promptGreaterUpGameSetDialogOpen:t.promptGreaterUpGameSetDialogOpen,promptLesserDownGameSetDialogOpen:t.promptLesserDownGameSetDialogOpen,promptAllLCtotalInputZeroDialogOpen:t.promptAllLCtotalInputZeroDialogOpen,"edit-level-code":5},on:{"update:reload":function(e){t.reload=e},"update:promptGreaterUpGameSetDialogOpen":function(e){t.promptGreaterUpGameSetDialogOpen=e},"update:promptLesserDownGameSetDialogOpen":function(e){t.promptLesserDownGameSetDialogOpen=e},"update:promptAllLCtotalInputZeroDialogOpen":function(e){t.promptAllLCtotalInputZeroDialogOpen=e},validStatus:t.checkValidStatus,editParams:t.checkFifaEditParams}})],1)],1),a("p",{staticClass:"category d-inline-flex"},[t._v(t._s(t.$ln(t.desc)))]),a("v-card-actions",[a("v-spacer"),t.loadingStatus?a("v-btn",{attrs:{disabled:"",color:"blue darken-1",flat:""}},[t._v("\n        "+t._s(t.$ln("取消"))+"\n      ")]):a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(e){t.toBack()}}},[t._v("\n        "+t._s(t.$ln("取消"))+"\n      ")]),t.modifyingStatus?t.modifyingStatus?a("v-btn",{attrs:{loading:t.modifyingStatus,disabled:"",small:"",color:"deep-orange darken-1"}},[t._v("\n        "+t._s(t.$ln("修改"))+"\n      ")]):t._e():a("v-btn",{attrs:{small:"",color:"deep-orange darken-1"},on:{click:function(e){t.editAccount()}}},[t._v("\n        "+t._s(t.$ln("修改"))+"\n      ")])],1)],1),a("AccountManagementPromptGameSet",{attrs:{promptGreaterUpGameSetDialogOpen:t.promptGreaterUpGameSetDialogOpen,promptLesserDownGameSetDialogOpen:t.promptLesserDownGameSetDialogOpen,promptAllLCtotalInputZeroDialogOpen:t.promptAllLCtotalInputZeroDialogOpen},on:{"update:promptGreaterUpGameSetDialogOpen":function(e){t.promptGreaterUpGameSetDialogOpen=e},"update:promptLesserDownGameSetDialogOpen":function(e){t.promptLesserDownGameSetDialogOpen=e},"update:promptAllLCtotalInputZeroDialogOpen":function(e){t.promptAllLCtotalInputZeroDialogOpen=e}}})],1)}),[],!1,null,null,null);u.options.__file="Edit.vue";e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-65d9ee1c.bcfe8111.js.map