(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d229295"],{dbef:function(t,e,n){"use strict";n.r(e);var a=n("a34a"),s=n.n(a),i=n("2f62"),l=n("7b47");function o(t,e,n,a,s,i,l){try{var o=t[i](l),r=o.value}catch(c){return void n(c)}o.done?e(r):Promise.resolve(r).then(a,s)}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c,u,h={name:"Announcement",data:function(){return{selectItems:{selected:"",options:[]},showNoData:"",headers:[{text:"時間",align:"center",sortable:!1},{text:"類別",align:"center",sortable:!1,select:!0},{text:"內容",align:"center",sortable:!1}],announcementList:[],mapType:{1:"美棒",2:"日棒",3:"台棒",4:"韓棒",5:"冰球",6:"籃球",7:"彩球",8:"美足",9:"網球",10:"足球",11:"指數",12:"賽馬",13:"電競",14:"其他",15:"系統"},pagination:{currentPage:1,rowsPerPage:10,totalItems:0},loadingStatus:!1,gamelist:{locate:1,site_number:"",ball:"",page:"",count:""}}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){r(t,e,n[e])}))}return t}({},Object(i.c)({getAnnouncementState:"sports/getAnnouncementState"}),{pages:function(){return null==this.pagination.rowsPerPage||null==this.pagination.totalItems?0:Math.ceil(this.pagination.totalItems/this.pagination.rowsPerPage)}}),watch:{"$store.state.lang":function(t){this.initLanguage()},"selectItems.selected":function(t){this.gamelist.ball=t,this.loadAnnouncement()},"pagination.rowsPerPage":function(t){this.pagination.currentPage=1,this.loadAnnouncement()}},mounted:function(){this.initLanguage(),this.loadAnnouncement()},methods:{loadAnnouncement:(c=s.a.mark((function d(t,e){var n,a;return s.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return this.loadingStatus=!0,n={locate:this.gamelist.locate,ball:this.gamelist.ball,page:t!==undefined?t:this.pagination.currentPage,count:e!==undefined?e:this.pagination.rowsPerPage},s.next=4,l.a.getAnnouncement(n);case 4:a=s.sent,this.announcementList=a.data_list,this.pagination.currentPage=parseInt(a.current_page),this.pagination.totalItems=parseInt(a.total_count),this.headers.contents=a.list,this.loadingStatus=!1;case 10:case"end":return s.stop()}}),d,this)})),u=function(){var t=this,e=arguments;return new Promise((function(n,a){var s=c.apply(t,e);function i(t){o(s,n,a,i,l,"next",t)}function l(t){o(s,n,a,i,l,"throw",t)}i(undefined)}))},function(t,e){return u.apply(this,arguments)}),selectBallItems:function(t){this.selectItems.selected=t,this.gamelist.ball=t,this.loadAnnouncement(1,this.pagination.rowsPerPage)},loadNextPage:function(t){this.pagination.currentPage=t,this.loadAnnouncement()},initLanguage:function(){this.selectItems.options=[{text:this.$ln("全部"),value:""},{text:this.$ln("系統"),value:15},{text:this.$ln("美棒"),value:1},{text:this.$ln("日棒"),value:2},{text:this.$ln("台棒"),value:3},{text:this.$ln("韓棒"),value:4},{text:this.$ln("冰球"),value:5},{text:this.$ln("籃球"),value:6},{text:this.$ln("彩球"),value:7},{text:this.$ln("美足"),value:8},{text:this.$ln("網球"),value:9},{text:this.$ln("足球"),value:10},{text:this.$ln("指數"),value:11},{text:this.$ln("賽馬"),value:12},{text:this.$ln("電競"),value:13},{text:this.$ln("其他"),value:14}],this.showNoData=this.$ln("目前無資料")},playBallType:function(t){if(t){var e=t.split(","),n="";for(var a in e)n+=this.$ln(this.mapType[e[a]])+"、";return n.slice(0,-1)}return t}}},g=n("2877"),p=Object(g.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"announcement"},[n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{sm9:"",xs6:"",tag:"h3"}},[t._v(t._s(t.$ln("公告")))]),n("v-flex",{attrs:{sm3:"",xs6:""}},[n("v-select",{staticClass:"mt-0",attrs:{items:t.selectItems.options},model:{value:t.selectItems.selected,callback:function(e){t.$set(t.selectItems,"selected",e)},expression:"selectItems.selected"}})],1)],1),t.loadingStatus?n("div",{staticClass:"text-xs-center"},[n("MaterialLoadingPage")],1):[n("v-data-table",{attrs:{headers:t.headers,items:t.announcementList,pagination:t.pagination,"no-data-text":t.showNoData,"hide-actions":""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"headerCell",fn:function(e){var a=e.header;return[n("span",{staticClass:"column",domProps:{textContent:t._s(t.$ln(a.text))}})]}},{key:"items",fn:function(e){return[n("td",{staticStyle:{width:"80px"}},[t._v(t._s(e.item.date))]),n("td",{staticClass:"text-xs-center",staticStyle:{width:"100px"}},[t._v(t._s(t.playBallType(e.item.ball)))]),n("td",{staticClass:"text-xs-left",staticStyle:{"word-break":"break-all"}},[t._v(t._s(e.item.desc))])]}}])}),t.pages>0?n("div",{staticClass:"text-xs-center pt-2"},[n("v-pagination",{attrs:{length:t.pages,color:"deep-orange darken-1"},on:{input:t.loadNextPage},model:{value:t.pagination.currentPage,callback:function(e){t.$set(t.pagination,"currentPage",e)},expression:"pagination.currentPage"}})],1):t._e()]],2)],1)}),[],!1,null,null,null);p.options.__file="index.vue";e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d229295.0af594e2.js.map