(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1f7404e6"],{"452d":function(e,t,a){"use strict";a.r(t);var s={name:"SoccerGoals",mixins:[a("761e").a],data:function(){return{gname:"足球",goalsListAll:{show:!0,showNoData:"目前無資料",headers:[{text:"全場",colspan:0,show:!0,align:"center",sortable:!1}],headers2:[],List:[]},dataList:[],game_time:"",occupy:"",count_date:"",main_team:"",visit_team:"",league_name:"",transType:"",posting:"",game_serial_number:"",game_type:""}}},i=(a("c730"),a("2877")),n=Object(i.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"straightBasket"},[a("v-container",{attrs:{fluid:"","grid-list-xl":""}},[a("SelectSelectLanguage",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]}),a("v-layout",{staticClass:"p-0 my-0",attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"my-0 pb-3",attrs:{md6:"",xs12:"",tag:"h3"}},[e._v("\n        "+e._s(e.$ln(e.gname))+"-"+e._s(e.$ln("歷史比賽入球數"))+"\n      ")])],1),a("div",[e._v("\n      "+e._s(e.$ln("帳務時間"))+"："+e._s(e.count_date)+" "+e._s(e.$ln("球隊"))+"："+e._s(e.main_team)+"(H)VS "+e._s(e.visit_team)+"\n    ")]),e._v("\n    "+e._s(e.league_name)+"-"+e._s(e.transType)+"\n\n    "),a("div",{staticClass:"pt-1"},[a("div",{staticClass:"rwdTable no-rwd-table"},[a("div",{staticClass:"v-table__overflow"},[a("table",{staticClass:"v-datatable v-table theme--light goals"},[a("thead",[a("tr",e._l(e.goalsListAll.headers,(function(t,s){return a("th",{key:s,attrs:{colspan:t.colspan}},[e._v(e._s(t.text))])})),0),e.goalsListAll.List.length>0?a("tr",e._l(e.goalsListAll.headers2,(function(t,s){return a("th",{key:s},[e._v(e._s(t.handicap))])})),0):e._e()]),e.goalsListAll.List.length>0?a("tbody",[a("tr",e._l(e.goalsListAll.List,(function(t,s){return a("td",{key:s,"class":"N"===t["switch"]?"grey lighten-3":""},[e._v("\n                    "+e._s(t.compensate)+"  \n                    "),a("router-link",{attrs:{to:{path:"/manage/sport/soccer/CheckView",query:{type:16,Posting:e.$route.query.Posting,ball:10,act:"normal",game:"A",gameSN:e.$route.query.gameSN,game_type:e.$route.query.game_type,handicap:t.handicap}},target:"_blank"}},[e._v(e._s(t.count?t.count:0)+"\n                    ")]),e._v("/"+e._s(t.gold?t.gold:0)+"\n                ")],1)})),0)]):a("tbody",[a("tr",[a("td",{attrs:{colspan:e.goalsListAll.headers[0].colspan,align:"center"}},[e._v(e._s(e.$ln(e.goalsListAll.showNoData)))])])])])])])])],1)],1)}),[],!1,null,"bbf7f1d2",null);n.options.__file="GoalsHistory.vue";t["default"]=n.exports},"757a":function(e,t,a){},"761e":function(e,t,a){"use strict";var s=a("a34a"),i=a.n(s),n=(a("2f62"),a("1157"),a("ed08"),a("6b80"));function r(e,t,a,s,i,n,r){try{var l=e[n](r),o=l.value}catch(c){return void a(c)}l.done?t(o):Promise.resolve(o).then(s,i)}var l,o,c={name:"SoccerGoals",data:function(){return{gname:"足球",goalsListAll:{show:!0,showNoData:"目前無資料",headers:[{text:"全場",colspan:0,show:!0,align:"center",sortable:!1}],headers2:[],List:[]},selectChangeItems:{selected:1,options:[{text:"100％",value:1},{text:"自己",value:0}]},reciprocalItems:{selected:"",options:[{text:"每180秒更新",value:180},{text:"每60秒更新",value:60},{text:"每5秒更新",value:5},{text:"不更新",value:""}],updateListTimer:null,currentSpeed:"",confirmSpeed:""},dataList:[],game_time:"",occupy:"",count_date:"",main_team:"",visit_team:"",league_name:"",transType:"",posting:"",game_serial_number:"",game_type:""}},computed:{},watch:{"reciprocalItems.selected":function(e){this.updateTableList()},"reciprocalItems.currentSpeed":function(e){0===e&&this.getPlayTypeDetail(this.selectChangeItems.selected)},"selectChangeItems.selected":function(e){this.getPlayTypeDetail(e)},"selectTimeItems.selected":function(e){clearInterval(this.interval),this.selectedTimer=e,0===e?this.intervalTimer=0:0!==e&&5!==e&&60!==e&&180!==e||(this.intervalTimer=0,this.setIntervalTime())}},mounted:function(){this.getPlayTypeDetail()},methods:{getPlayTypeDetail:(l=i.a.mark((function p(e){var t,a;return i.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return this.loadingStatus=!0,t={occupy:e!==undefined?e:this.$route.query.occupy,posting:this.$route.query.Posting,game_serial_number:this.$route.query.gameSN,game_type:this.$route.query.game_type,play_type:"goal"},s.next=5,n.a.getPlayTypeDetail(t);case 5:if(a=s.sent){s.next=8;break}return s.abrupt("return");case 8:this.main_team=a.main_team,this.visit_team=a.visit_team,this.count_date=a.count_date,this.game_time=a.game_time,this.league_name=a.league_name,this.transType=a.transType,this.goalsListAll.List=a.dataList,this.goalsListAll.headers2=a.dataList,this.goalsListAll.headers[0].colspan=a.dataList.length,this.goalsListAll.headers[0].text=a.transType;case 18:case"end":return s.stop()}}),p,this)})),o=function(){var e=this,t=arguments;return new Promise((function(a,s){var i=l.apply(e,t);function n(e){r(i,a,s,n,o,"next",e)}function o(e){r(i,a,s,n,o,"throw",e)}n(undefined)}))},function(e){return o.apply(this,arguments)}),startCountdown:function(e){var t=this;this.reciprocalItems.currentSpeed=e,this.reciprocalItems.updateListTimer=setInterval((function(){t.reciprocalItems.currentSpeed--,t.reciprocalItems.currentSpeed<0&&(clearInterval(t.reciprocalItems.updateListTimer),t.startCountdown(t.reciprocalItems.confirmSpeed))}),1e3)},updateTableList:function(){this.getPlayTypeDetail(this.selectChangeItems.selected),this.reciprocalItems.confirmSpeed=this.reciprocalItems.selected,clearInterval(this.reciprocalItems.updateListTimer),this.reciprocalItems.selected<0?this.reciprocalItems.currentSpeed="":this.startCountdown(this.reciprocalItems.confirmSpeed)}}},u=a("2877"),m=Object(u.a)(c,void 0,void 0,!1,null,null,null);m.options.__file="Goals.vue";t.a=m.exports},c730:function(e,t,a){"use strict";var s=a("757a");a.n(s).a}}]);
//# sourceMappingURL=chunk-1f7404e6.527a73c5.js.map