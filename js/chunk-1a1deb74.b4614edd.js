(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1a1deb74"],{"065a":function(t,e,s){"use strict";s("2f62");var a=s("1157"),i=s.n(a),l={name:"CheckView",components:{LoadingPage:s("11dd")["default"]},data:function(){return{showNoData:"目前無任何資料",tabItems:{},reciprocalItems:{selected:"",options:[{text:"每10秒更新",value:10},{text:"每30秒更新",value:30},{text:"不更新",value:""}],updateListTimer:null,currentSpeed:"",confirmSpeed:""},selectListItems:{},selectRowsPerPageItems:{},selectChangeItems:{},selectChangeItems2:{},headers:[],BillList:[],gameTime:"",pagination:{currentPage:1,rowsPerPage:15,totalItems:0,totalVisible:10},loadingStatus:!1,gamelist:{}}},computed:{pages:function(){return null==this.pagination.rowsPerPage||null==this.pagination.totalItems?0:Math.ceil(this.pagination.totalItems/this.pagination.rowsPerPage)}},watch:{getBillListState:function(t){},"pagination.rowsPerPage":function(t){this.pagination.currentPage=1},"reciprocalItems.selected":function(t){this.updateTableList()},"reciprocalItems.currentSpeed":function(t){0===t&&this.loadBillList()},"selectRowsPerPageItems.selected":function(t){},"selectChangeItems.selected":function(t){},"selectChangeItems2.selected":function(t){},"selectListItems.selected":function(t){},getProfileState:function(t){}},mounted:function(){var t=this;setTimeout((function(){t.unsetVWindowHeight()}),500)},destroyed:function(){clearInterval(this.reciprocalItems.updateListTimer)},methods:{loadBillList:function(t,e){},loadNextPage:function(t){this.pagination.currentPage=t,this.loadBillList()},startCountdown:function(t){var e=this;this.reciprocalItems.currentSpeed=t,this.reciprocalItems.updateListTimer=setInterval((function(){e.reciprocalItems.currentSpeed--,e.reciprocalItems.currentSpeed<0&&(clearInterval(e.reciprocalItems.updateListTimer),e.startCountdown(e.reciprocalItems.confirmSpeed))}),1e3)},updateTableList:function(){this.loadBillList(),this.reciprocalItems.confirmSpeed=this.reciprocalItems.selected,clearInterval(this.reciprocalItems.updateListTimer),this.reciprocalItems.selected<0?this.reciprocalItems.currentSpeed="":this.startCountdown(this.reciprocalItems.confirmSpeed)},closeWin:function(){},unsetVWindowHeight:function(){i()(".v-window > .v-window__container--is-active").prop("style","height: unset;")}}},n=s("2877"),o=Object(n.a)(l,void 0,void 0,!1,null,null,null);o.options.__file="CheckView.vue";e.a=o.exports},"4f41":function(t,e,s){"use strict";s.r(e);var a=s("2f62"),i=(s("1157"),s("11dd"));function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},a=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(s).filter((function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable})))),a.forEach((function(e){n(t,e,s[e])}))}return t}function n(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var o={name:"NpbCheckView",mixins:[s("065a").a],components:{LoadingPage:i["default"]},data:function(){return{gname:"日棒",showNoData:"目前無任何資料",tabItems:{id:["注單明細"],active:""},selectListItems:{selected:"Y",options:[{text:"只顯示有效注單",value:"Y"},{text:"只顯示已刪除注單",value:"D"}]},selectRowsPerPageItems:{selected:15,options:[{text:"15筆",value:15},{text:"30筆",value:30},{text:"60筆",value:60}]},selectChangeItems:{show:!0,selected:"",options:[{text:"全部",value:"1,2,3,4,5"},{text:"讓分",value:"1"},{text:"大小",value:"2"},{text:"獨贏",value:"3"},{text:"單雙",value:"4"},{text:"一輸二贏",value:"5"}]},selectChangeItems2:{show:!0,selected:"",options:[{text:"全部",value:"10,11,13"},{text:"搶首分",value:"10"},{text:"搶尾分",value:"11"},{text:"單節最高分",value:"13"}]},headers:[{text:"帳務日期",align:"center",sortable:!1},{text:"投注時間/開賽時間",align:"center",sortable:!1},{text:"單號",align:"center",sortable:!1},{text:"會員",align:"center",sortable:!1},{text:"類別",align:"center",sortable:!1},{text:"型態",align:"center",sortable:!1},{text:"裝置",align:"center",sortable:!1},{text:"內容",align:"center",sortable:!1},{text:"金額",align:"center",sortable:!1},{text:"輸贏結果",align:"center",sortable:!1},{text:"返水",value:"refund",align:"center",sortable:!1},{text:"會員結果",align:"center",sortable:!1}],BillList:[],gameTime:"",loadingStatus:!1,gamelist:{act:"normal",game_serial_number:"",bet_team:"",posting:"",type:"",game_type:"",status:"",ball:2,page:1,count:""}}},computed:l({},Object(a.c)({getBillListState:"sports/getBillListState"})),watch:{getBillListState:function(t){this.BillList=t.result.data_list,this.pagination.totalItems=t.result.total_count,this.BillList.contents=t.result.list},"selectRowsPerPageItems.selected":function(t){this.pagination.rowsPerPage=t,this.loadBillList()},"selectChangeItems.selected":function(t,e){this.gamelist.type=t,""!==e&&this.loadBillList()},"selectChangeItems2.selected":function(t,e){this.gamelist.type=t,this.loadBillList()},"selectListItems.selected":function(t){this.gamelist.status=t,""!==from&&this.loadBillList()},getProfileState:function(t){this.gamelist.account=t.result.l_no}},mounted:function(){this.gameTime=this.$route.query.item,this.gamelist.type=this.$route.query.type,this.game=this.$route.query.game,this.selectChangeItems.selected=this.$route.query.type,this.selectChangeItems2.selected=this.$route.query.type,"B"===this.game?(this.selectChangeItems.show=!1,this.selectChangeItems2.show=!0,this.loadingStatus=!0):"A"===this.game&&(this.selectChangeItems.show=!0,this.selectChangeItems2.show=!1),this.loadBillList()},methods:l({},Object(a.b)({getBillList:"api/getBillList"}),{loadBillList:function(t,e){var s=this;this.loadingStatus=!0;var a={act:this.gamelist.act,game_serial_number:this.$route.query.gameSN,type:this.gamelist.type,game_type:this.$route.query.game_type,bet_team:this.$route.query.bet_team,posting:this.$route.query.Posting,ball:this.gamelist.ball,status:this.selectListItems.selected,page:t!==undefined?t:this.pagination.currentPage,count:this.pagination.rowsPerPage=this.gamelist.count?this.gamelist.count:this.selectRowsPerPageItems.selected};this.getBillList(a).then((function(t){200===t.status&&(s.loadingStatus=!1)}))["catch"]((function(t){}))},closeWin:function(){window.close()}})},c=s("2877"),r=Object(c.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"straightBasket"},[s("v-container",{attrs:{fluid:""}},[s("SelectSelectLanguage",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]}),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"mt-0",attrs:{xs8:"",tag:"h3"}},[t._v("\n        "+t._s(t.$ln(t.gname))+"-"+t._s(t.$ln("注單明細"))+"\n      ")]),s("v-flex",{staticClass:"text-xs-right",attrs:{xs4:""}},[s("v-btn",{staticClass:"grey",attrs:{small:""},on:{click:function(e){t.closeWin()}}},[t._v("\n          "+t._s(t.$ln("關閉視窗"))+"\n        ")])],1)],1),s("v-tabs",{attrs:{"slider-color":"yellow"},model:{value:t.tabItems.active,callback:function(e){t.$set(t.tabItems,"active",e)},expression:"tabItems.active"}},[t._l(t.tabItems.id,(function(e,a){return s("v-tab",{key:a,attrs:{ripple:""}},[t._v("\n        "+t._s(t.$ln(e))+"\n      ")])})),t._l(t.tabItems.id,(function(e,a){return s("v-tab-item",{key:a},[s("v-layout",{attrs:{row:"",wrap:""}},[s("SportBallStatus",{directives:[{name:"show",rawName:"v-show",value:t.selectChangeItems.show,expression:"selectChangeItems.show"}],attrs:{classType:"classCheckView",dataSelect:t.selectChangeItems.selected,items:t.selectChangeItems.options,title:"玩法"},on:{"update:dataSelect":function(e){t.$set(t.selectChangeItems,"selected",e)}}}),s("SportBallStatus",{directives:[{name:"show",rawName:"v-show",value:t.selectChangeItems2.show,expression:"selectChangeItems2.show"}],attrs:{classType:"classCheckView",dataSelect:t.selectChangeItems2.selected,items:t.selectChangeItems2.options,title:"玩法"},on:{"update:dataSelect":function(e){t.$set(t.selectChangeItems2,"selected",e)}}}),s("SportBallStatus",{staticClass:"selectHide",attrs:{classType:"list",dataSelect:t.selectListItems.selected,items:t.selectListItems.options,title:"注單顯示"},on:{"update:dataSelect":function(e){t.$set(t.selectListItems,"selected",e)}}}),s("CommonCounter",{attrs:{reciprocalItems:t.reciprocalItems,updateTableList:t.updateTableList},on:{"update:reciprocalItems":function(e){t.reciprocalItems=e}}}),s("v-flex",{staticClass:"px-1",attrs:{xs12:"",md3:""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("SportBallStatus",{attrs:{classType:"classType",dataSelect:t.selectRowsPerPageItems.selected,items:t.selectRowsPerPageItems.options,title:"每頁顯示"},on:{"update:dataSelect":function(e){t.$set(t.selectRowsPerPageItems,"selected",e)}}}),s("v-flex",{staticClass:"grey--text text--darken-2 d-flex align-center",attrs:{xs4:"",md2:""}},[t._v("\n                "+t._s(t.$ln("共 %s 筆",t.pagination.totalItems))+"\n              ")])],1)],1)],1),t.loadingStatus?s("div",{staticClass:"text-xs-center"},[s("LoadingPage")],1):s("div",{staticClass:"pt-1"},[s("SportDetailTable",{attrs:{header:t.headers,contents:t.BillList,gameTime:t.gameTime},on:{"update:header":function(e){t.headers=e},"update:contents":function(e){t.BillList=e}}}),t.pages>0?s("div",{staticClass:"text-xs-center pt-2"},[s("v-pagination",{attrs:{length:t.pages,"total-visible":t.pagination.totalVisible,color:"deep-orange darken-1"},on:{input:t.loadNextPage},model:{value:t.pagination.currentPage,callback:function(e){t.$set(t.pagination,"currentPage",e)},expression:"pagination.currentPage"}})],1):t._e()],1)],1)}))],2)],1)],1)}),[],!1,null,null,null);r.options.__file="CheckView.vue";e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-1a1deb74.b4614edd.js.map