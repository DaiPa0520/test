(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1490b3a4"],{"3aee":function(t,e,a){"use strict";var n=a("2f62");function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){s(t,e,a[e])}))}return t}function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var l={data:function(){return{showNoData:"目前無任何資料",headers:[{text:"單號",value:"number",sortable:!1,align:"center"},{text:"會員",value:"member",sortable:!1,align:"center"},{text:"內容",value:"detail",sortable:!1,align:"center"},{text:"金額",value:"amount",sortable:!1,align:"center"}],BillList:[],pagination:{currentPage:1,rowsPerPage:10,totalItems:0,totalVisible:10},loadingStatus:!1,gamelist:{act:"allup",game_serial_number:"",type:"",bet_team:"",posting:"",ball:0,page:1,count:1}}},computed:i({},Object(n.c)({getBillListState:"sports/getBillListState"}),{pages:function(){return null==this.pagination.rowsPerPage||null==this.pagination.totalItems?0:Math.ceil(this.pagination.totalItems/this.pagination.rowsPerPage)}}),watch:{getBillListState:function(t){this.BillList=t.result.data_list,this.pagination.totalItems=t.result.total_count},"pagination.rowsPerPage":function(t){this.pagination.currentPage=1,this.loadBillList()}},mounted:function(){this.gamelist.type=this.$route.query.type,this.loadBillList()},methods:i({},Object(n.b)({getBillList:"api/getBillList"}),{loadBillList:function(t,e){var a=this;this.loadingStatus=!0;var n={act:this.gamelist.act,game_serial_number:this.$route.query.gameSN,type:this.$route.query.type,bet_team:this.$route.query.bet_team,posting:this.$route.query.Posting,ball:this.gamelist.ball,page:t!==undefined?t:this.pagination.currentPage,count:e!==undefined?e:this.pagination.rowsPerPage};this.getBillList(n).then((function(t){200===t.status&&(a.loadingStatus=!1)}))["catch"]((function(t){}))},loadNextPage:function(t){this.pagination.currentPage=t,this.getBillList()},closeWin:function(){window.close()}})},o=a("2877"),r=Object(o.a)(l,void 0,void 0,!1,null,null,null);r.options.__file="Amount.vue";e.a=r.exports},"7bec":function(t,e,a){"use strict";a.r(e);a("2f62");var n={name:"Amount",mixins:[a("3aee").a],data:function(){return{gamelist:{ball:4}}}},i=a("2877"),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"straightBasket"},[a("v-container",{attrs:{fluid:""}},[a("SelectSelectLanguage",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]}),a("div",{staticClass:"pt-1"},[t._v("\n      "+t._s(t.$ln("複合過關"))+"-"+t._s(t.$ln(t.$route.query.gameType+"注單下注狀況"))+" "+t._s(t.$ln("目前共有 %s 筆資料",t.pagination.totalItems))+"\n      "),a("v-btn",{attrs:{small:"",color:"grey"},on:{click:function(e){t.closeWin()}}},[t._v(t._s(t.$ln("關閉視窗")))]),a("v-data-table",{staticClass:"elevation-1 mt-2",attrs:{headers:t.headers,items:t.BillList,"no-data-text":t.$ln("目前無資料"),pagination:t.pagination,dark:!1,"default-sort":!0,"hide-actions":""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"headerCell",fn:function(e){var n=e.header;return[a("span",{domProps:{textContent:t._s(t.$ln(n.text))}})]}},{key:"items",fn:function(e){return[a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.sn))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.m_id))]),a("td",{staticClass:"text-xs-center"},[a("div",{domProps:{innerHTML:t._s(e.item.matter)}}),t._v(t._s(e.item.all_count)+" "+t._s(e.item.m_date)),a("br"),t._v(t._s(e.item.ip))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.gold)),a("br"),1===e.item.end?a("span",{"class":[{"red--text":parseFloat(e.item.result_gold)<0},{"green--text":parseFloat(e.item.result_gold)>0}]},[t._v(t._s(e.item.result_gold))]):t._e()])]}}])}),t.pages>0?a("div",{staticClass:"text-xs-center pt-2"},[a("v-pagination",{attrs:{length:t.pages,"total-visible":t.pagination.totalVisible,color:"deep-orange darken-1"},on:{input:t.loadNextPage},model:{value:t.pagination.currentPage,callback:function(e){t.$set(t.pagination,"currentPage",e)},expression:"pagination.currentPage"}})],1):t._e()],1)],1)],1)}),[],!1,null,null,null);s.options.__file="AmountKbo.vue";e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-1490b3a4.076e75a0.js.map