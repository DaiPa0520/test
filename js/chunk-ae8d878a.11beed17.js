(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-ae8d878a"],{"4bbe":function(t,e,a){"use strict";a.r(e);var s={name:"Straight",mixins:[a("a929").a],data:function(){return{gname:"韓棒",path:"/manage/sport/kbo/CheckView",tabledata1:{show:!1,headers:{count_date:{text:"帳務日期",align:"center",sortable:!1},game_time:{text:"比賽時間",align:"center",sortable:!1},team:{text:"主客隊",align:"center",sortable:!1},A:{text:"讓分",align:"center",sortable:!1},BS:{text:"大小",align:"center",sortable:!1},OL:{text:"獨贏",align:"center",sortable:!1},OT:{text:"一輸二贏",align:"center",sortable:!1},SD:{text:"單雙",align:"center",sortable:!1},detail:{text:"明細",align:"center",sortable:!1}}},tabledata2:{show:!1,headers2:{count_date:{text:"帳務日期",align:"center",sortable:!1},game_time:{text:"比賽時間",align:"center",sortable:!1},team:{text:"主客隊",align:"center",sortable:!1},point_1:{text:"搶首分",align:"center",sortable:!1},point_2:{text:"搶尾分",align:"center",sortable:!1},point_high:{text:"單節最高分",align:"center",sortable:!1},detail:{text:"明細",align:"center",sortable:!1}}},gamelist:{ball:4}}}},i=a("2877"),n=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"straightBasket"},[a("v-container",{attrs:{fluid:""}},[a("v-layout",{staticClass:"p-0 my-0",attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"my-0 pb-3",attrs:{md8:"",xs12:"",tag:"h3"}},[t._v("\n        "+t._s(t.$ln(t.gname))+" - "+t._s(t.$ln("單式"))+"\n      ")]),a("CommonCounter",{attrs:{reciprocalItems:t.reciprocalItems,updateTableList:t.updateTableList},on:{"update:reciprocalItems":function(e){t.reciprocalItems=e}}})],1),a("v-layout",{staticClass:"my-0",attrs:{row:"",wrap:""}},[a("SportBallStatus",{staticClass:"selectHide",attrs:{dataSelect:t.selectItems.selected,items:t.selectItems.options,title:"開放中＋關閉中"},on:{"update:dataSelect":function(e){t.$set(t.selectItems,"selected",e)}}}),a("SportBallStatus",{attrs:{dataSelect:t.selectGameItems.selected,items:t.selectGameItems.options,title:"玩法"},on:{"update:dataSelect":function(e){t.$set(t.selectGameItems,"selected",e)}}}),a("SportBallStatus",{attrs:{dataSelect:t.selectChangeItems.selected,items:t.selectChangeItems.options,title:"拆帳"},on:{"update:dataSelect":function(e){t.$set(t.selectChangeItems,"selected",e)}}}),a("v-flex",{staticClass:"px-1",attrs:{md3:"",xs6:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("SportBallStatus",{attrs:{classType:"classType",dataSelect:t.selectRowsPerPageItems.selected,items:t.selectRowsPerPageItems.options,title:"每頁顯示"},on:{"update:dataSelect":function(e){t.$set(t.selectRowsPerPageItems,"selected",e)}}})],1)],1),a("v-flex",{staticClass:"grey--text text--darken-2 d-flex align-center",attrs:{xs4:"",md2:""}},[t._v("\n        "+t._s(t.$ln("共 %s 筆",t.pagination.totalItems))+"\n      ")])],1),t.loadingStatus?a("div",{staticClass:"text-xs-center"},[a("MaterialLoadingPage")],1):a("div",{staticClass:"pt-1"},[t.tabledata1.show?a("SportStraightTable",{attrs:{header:t.tabledata1.headers,contents:t.sportsList,path:t.path,gameType:"kbo"},on:{"update:header":function(e){t.$set(t.tabledata1,"headers",e)},"update:contents":function(e){t.sportsList=e}}}):t._e(),t.tabledata2.show?a("SportStraightTableMuti",{attrs:{header:t.tabledata2.headers2,contents:t.sportsList,path:t.path},on:{"update:header":function(e){t.$set(t.tabledata2,"headers2",e)},"update:contents":function(e){t.sportsList=e}}}):t._e(),a("div",{staticClass:"text-xs-center pt-2"},[a("v-pagination",{attrs:{length:t.pages,color:"deep-orange darken-1"},on:{input:t.loadNextPage},model:{value:t.pagination.currentPage,callback:function(e){t.$set(t.pagination,"currentPage",e)},expression:"pagination.currentPage"}})],1)],1)],1)],1)}),[],!1,null,null,null);n.options.__file="straight-kbo.vue";e["default"]=n.exports},a929:function(t,e,a){"use strict";var s=a("a34a"),i=a.n(s),n=a("2f62"),r=a("6b80");function l(t,e,a,s,i,n,r){try{var l=t[n](r),o=l.value}catch(c){return void a(c)}l.done?e(o):Promise.resolve(o).then(s,i)}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},s=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),s.forEach((function(e){c(t,e,a[e])}))}return t}function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var u,p,d={name:"SportStraight",data:function(){return{selectItems:{selected:0,options:[{text:"開放中＋關閉中",value:0},{text:"已開賽",value:1}]},reciprocalItems:{selected:180,options:[{text:"每180秒更新",value:180},{text:"每60秒更新",value:60},{text:"每5秒更新",value:5},{text:"不更新",value:""}],updateListTimer:null,currentSpeed:"",confirmSpeed:""},selectChangeItems:{selected:1,options:[{text:"100％",value:1},{text:"自己",value:0}]},selectGameItems:{selected:"N",options:[{text:"一般玩法",value:"N"},{text:"多種玩法",value:"Y"}]},selectRowsPerPageItems:{selected:15,options:[{text:"15筆",value:15},{text:"30筆",value:30},{text:"60筆",value:60}]},sportsList:{},pagination:{currentPage:1,rowsPerPage:15,totalItems:0},loadingStatus:!1,gamelist:{act:"normal",ball:"",time_interval:"today",start:0,occupy:1,count_date:"",multi:"",page:1,count:""}}},computed:o({},Object(n.c)({getSportsState:"sports/getSportsState"}),{pages:function(){return null==this.pagination.rowsPerPage||null==this.pagination.totalItems?0:Math.ceil(this.pagination.totalItems/this.pagination.rowsPerPage)}}),watch:{getSportsState:function(t){var e={};t.result.data_list.forEach((function(t){var a="".concat(t.league_name).concat(t.transType);e[a]||(e[a]=[]),e[a].push(t)})),this.sportsList=e,this.pagination.currentPage=t.result.current_page,this.pagination.totalItems=t.result.total_count},"pagination.rowsPerPage":function(t){this.pagination.currentPage=1},"selectRowsPerPageItems.selected":function(t){this.gamelist.page=1,this.pagination.currentPage=1,this.gamelist.count=t,this.loadSports()},"selectItems.selected":function(t){this.gamelist.page=1,this.pagination.currentPage=1,this.gamelist.start=t,this.loadSports()},"reciprocalItems.selected":function(t){this.updateTableList()},"reciprocalItems.currentSpeed":function(t){0===t&&this.loadSports()},"selectChangeItems.selected":function(t){this.gamelist.page=1,this.pagination.currentPage=1,this.gamelist.occupy=t,this.loadSports()},"selectGameItems.selected":function(t){this.gamelist.page=1,this.pagination.currentPage=1,"N"===t?(this.tabledata1!==undefined&&(this.tabledata1.show=!0),this.tabledata2!==undefined&&(this.tabledata2.show=!1),this.loadSports(),this.loadingStatus=!0):"Y"===t&&(this.tabledata1!==undefined&&(this.tabledata2.show=!0),this.tabledata2!==undefined&&(this.tabledata1.show=!1),this.loadSports())},getProfileState:function(t){this.gamelist.account=t.result.l_no}},mounted:function(){this.updateTableList(),"N"===this.selectGameItems.selected&&(this.tabledata1!==undefined&&(this.tabledata1.show=!0),this.tabledata2!==undefined&&(this.tabledata2.show=!1),this.loadingStatus=!0)},destroyed:function(){clearInterval(this.reciprocalItems.updateListTimer)},methods:o({},Object(n.b)({getSports:"api/getSports"}),{loadSports:(u=i.a.mark((function m(t,e){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.loadingStatus=!0,a={act:this.gamelist.act,ball:this.gamelist.ball,multi:this.selectGameItems.selected,time_interval:this.gamelist.time_interval,start:this.gamelist.start?this.gamelist.start:this.selectItems.selected,occupy:this.gamelist.occupy?this.gamelist.occupy:this.selectChangeItems.selected,count_date:this.gamelist.count_date,page:t!==undefined?t:this.pagination.currentPage,count:this.pagination.rowsPerPage=this.gamelist.count?this.gamelist.count:this.selectRowsPerPageItems.selected},e.next=5,r.a.getSports(this.$store,a);case 5:this.loadingStatus=!1;case 7:case"end":return e.stop()}}),m,this)})),p=function(){var t=this,e=arguments;return new Promise((function(a,s){var i=u.apply(t,e);function n(t){l(i,a,s,n,r,"next",t)}function r(t){l(i,a,s,n,r,"throw",t)}n(undefined)}))},function(t,e){return p.apply(this,arguments)}),loadNextPage:function(t){this.pagination.currentPage=t,this.loadSports()},startCountdown:function(t){var e=this;this.reciprocalItems.currentSpeed=t,this.reciprocalItems.updateListTimer=setInterval((function(){e.reciprocalItems.currentSpeed--,e.reciprocalItems.currentSpeed<0&&(clearInterval(e.reciprocalItems.updateListTimer),e.startCountdown(e.reciprocalItems.confirmSpeed))}),1e3)},updateTableList:function(){this.loadSports(),this.reciprocalItems.confirmSpeed=this.reciprocalItems.selected,clearInterval(this.reciprocalItems.updateListTimer),this.reciprocalItems.selected<0?this.reciprocalItems.currentSpeed="":this.startCountdown(this.reciprocalItems.confirmSpeed)}})},g=a("2877"),h=Object(g.a)(d,void 0,void 0,!1,null,null,null);h.options.__file="Straight.vue";e.a=h.exports}}]);
//# sourceMappingURL=chunk-ae8d878a.11beed17.js.map