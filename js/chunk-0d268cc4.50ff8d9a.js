(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0d268cc4"],{a3fe:function(t,e,a){"use strict";a.r(e);var s={name:"",mixins:[a("f1a2").a],data:function(){return{gname:"指數",path:"/manage/sport/index/CheckView",detailType:"2,4",detailGame:"",tabledata1:{show:!1,headers:{count_date:{text:"帳務日期",align:"center",sortable:!1},game_time:{text:"時間",align:"center",sortable:!1},stock:{text:"股市名稱",align:"center",sortable:!1},BS:{text:"大小",align:"center",sortable:!1},SD:{text:"單雙",align:"center",sortable:!1},detail:{text:"明細",align:"center",sortable:!1}}},gamelist:{act:"normal",ball:11,time_interval:"history",start:1,occupy:"",count_date:"",page:"",count:""}}}},n=a("2877"),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"historyBasket"},[a("v-container",{attrs:{fluid:""}},[a("h3",{staticClass:"my-0 pb-3"},[t._v(t._s(t.$ln(t.gname))+" - "+t._s(t.$ln("歷史比賽")))]),a("v-layout",{staticClass:"my-0",attrs:{row:"",wrap:""}},[a("SportBallStatus",{staticClass:"selectHide",attrs:{dataSelect:t.selectItems.selected,items:t.selectItems.options,setLanguage:!1,title:"日期"},on:{"update:dataSelect":function(e){t.$set(t.selectItems,"selected",e)}}}),a("SportBallStatus",{attrs:{dataSelect:t.selectChangeItems.selected,items:t.selectChangeItems.options,title:"拆帳"},on:{"update:dataSelect":function(e){t.$set(t.selectChangeItems,"selected",e)}}}),a("v-flex",{staticClass:"px-1",attrs:{md3:"",xs6:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("SportBallStatus",{attrs:{classType:"classType",dataSelect:t.selectRowsPerPageItems.selected,items:t.selectRowsPerPageItems.options,title:"每頁顯示"},on:{"update:dataSelect":function(e){t.$set(t.selectRowsPerPageItems,"selected",e)}}})],1)],1),a("v-flex",{staticClass:"grey--text text--darken-2 d-flex align-center",attrs:{xs4:"",md2:""}},[t._v("\n        "+t._s(t.$ln("共 %s 筆",t.pagination.totalItems))+"\n      ")])],1),t.loadingStatus?a("div",{staticClass:"text-xs-center"},[a("MaterialLoadingPage")],1):a("div",{staticClass:"pt-1"},[t.tabledata1.show?a("SportHistoryTable",{attrs:{header:t.tabledata1.headers,contents:t.sportsList,path:t.path,detailType:t.detailType,detailGame:t.detailGame,gameType:"index"},on:{"update:header":function(e){t.$set(t.tabledata1,"headers",e)},"update:contents":function(e){t.sportsList=e}}}):t._e(),a("div",{staticClass:"text-xs-center pt-2"},[a("v-pagination",{attrs:{length:t.pages,color:"deep-orange darken-1"},on:{input:t.loadNextPage},model:{value:t.pagination.currentPage,callback:function(e){t.$set(t.pagination,"currentPage",e)},expression:"pagination.currentPage"}})],1)],1)],1)],1)}),[],!1,null,null,null);i.options.__file="history-index.vue";e["default"]=i.exports},f1a2:function(t,e,a){"use strict";var s=a("a34a"),n=a.n(s),i=a("2f62"),l=a("6b80");function o(t,e,a,s,n,i,l){try{var o=t[i](l),r=o.value}catch(c){return void a(c)}o.done?e(r):Promise.resolve(r).then(s,n)}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},s=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),s.forEach((function(e){c(t,e,a[e])}))}return t}function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var u,g,d={name:"SportHistory",data:function(){return{selectItems:{selected:0,options:[]},selectChangeItems:{selected:1,options:[{text:"100％",value:1},{text:"自己",value:0}]},selectRowsPerPageItems:{selected:15,options:[{text:"15筆",value:15},{text:"30筆",value:30},{text:"60筆",value:60}]},selectGameItems:{selected:"N",options:[{text:"一般玩法",value:"N"},{text:"多種玩法",value:"Y"}]},sportsList:{},pagination:{currentPage:1,rowsPerPage:15,totalItems:0},loadingStatus:!1,gamelist:{act:"normal",ball:"",time_interval:"history",start:1,occupy:1,count_date:"",multi:"",page:1,count:""}}},computed:r({},Object(i.c)({getSportsState:"sports/getSportsState"}),{pages:function(){return null==this.pagination.rowsPerPage||null==this.pagination.totalItems?0:Math.ceil(this.pagination.totalItems/this.pagination.rowsPerPage)}}),watch:{"$store.state.lang":function(t){this.createSelectDateMenu(this.selectItems.selected)},getSportsState:function(t){var e={};t.result.data_list.forEach((function(t){var a="".concat(t.league_name).concat(t.transType);e[a]||(e[a]=[]),e[a].push(t)})),this.sportsList=e,this.pagination.currentPage=t.result.current_page,this.pagination.totalItems=t.result.total_count},"pagination.rowsPerPage":function(t){this.pagination.currentPage=1},"selectRowsPerPageItems.selected":function(t){this.gamelist.page=1,this.pagination.currentPage=1,this.pagination.rowsPerPage=t,this.loadSports()},"selectItems.selected":function(t){this.gamelist.page=1,this.pagination.currentPage=1,this.pagination.rowsPerPage=t,this.loadSports()},"selectTimeItems.selected":function(t){this.pagination.rowsPerPage=t,this.loadSports()},"selectChangeItems.selected":function(t){this.gamelist.page=1,this.pagination.currentPage=1,this.gamelist.occupy=t,this.loadSports()},"selectGameItems.selected":function(t){this.gamelist.page=1,this.pagination.currentPage=1,"N"===t?(this.tabledata1!==undefined&&(this.tabledata1.show=!0),this.tabledata2!==undefined&&(this.tabledata2.show=!1),this.loadSports()):"Y"===t&&(this.tabledata1!==undefined&&(this.tabledata2.show=!0),this.tabledata2!==undefined&&(this.tabledata1.show=!1),this.loadSports())},getProfileState:function(t){this.gamelist.account=t.result.l_no}},mounted:function(){this.createSelectDateMenu(),"N"===this.selectGameItems.selected&&(this.tabledata1!==undefined&&(this.tabledata1.show=!0),this.tabledata2!==undefined&&(this.tabledata2.show=!1))},methods:r({},Object(i.b)({getSports:"api/getSports"}),{loadSports:(u=n.a.mark((function m(t,e){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.loadingStatus=!0,a={act:this.gamelist.act,ball:this.gamelist.ball,time_interval:this.gamelist.time_interval,start:this.gamelist.start,multi:this.selectGameItems.selected,occupy:this.gamelist.occupy?this.gamelist.occupy:this.selectChangeItems.selected,count_date:this.selectItems.selected,page:t!==undefined?t:this.pagination.currentPage,count:this.pagination.rowsPerPage=this.gamelist.count?this.gamelist.count:this.selectRowsPerPageItems.selected},e.next=5,l.a.getSports(this.$store,a);case 5:this.loadingStatus=!1;case 7:case"end":return e.stop()}}),m,this)})),g=function(){var t=this,e=arguments;return new Promise((function(a,s){var n=u.apply(t,e);function i(t){o(n,a,s,i,l,"next",t)}function l(t){o(n,a,s,i,l,"throw",t)}i(undefined)}))},function(t,e){return g.apply(this,arguments)}),loadNextPage:function(t){this.pagination.currentPage=t,this.loadSports()},createSelectDateMenu:function(t){var e=[this.$ln("星期日"),this.$ln("星期一"),this.$ln("星期二"),this.$ln("星期三"),this.$ln("星期四"),this.$ln("星期五"),this.$ln("星期六")],a=[],s=new Date;s.setDate(s.getDate()+1);for(var n=0;n<8;n++)a.push({text:this.$ln("%s月%s日 %s",s.getMonth()+1,s.getDate(),e[s.getDay()]),value:"".concat(s.getFullYear(),"-").concat(s.getMonth()+1<10?"0":"").concat(s.getMonth()+1,"-").concat(s.getDate()<10?"0":"").concat(s.getDate())}),s.setDate(s.getDate()-1);this.selectItems.selected=t||a[1].value,this.selectItems.options=a}})},p=a("2877"),h=Object(p.a)(d,void 0,void 0,!1,null,null,null);h.options.__file="History.vue";e.a=h.exports}}]);
//# sourceMappingURL=chunk-0d268cc4.50ff8d9a.js.map