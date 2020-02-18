(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{242:function(t,e,n){var content=n(314);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("ef6dd4ea",content,!0,{sourceMap:!1})},313:function(t,e,n){"use strict";var r=n(242);n.n(r).a},314:function(t,e,n){(e=n(12)(!1)).push([t.i,".item a[data-v-1f158ed7]{text-decoration:none}",""]),t.exports=e},337:function(t,e,n){"use strict";n.r(e);n(16),n(10),n(5),n(7),n(4),n(64);var r=n(20),o=n(1),c=n(237),l=n.n(c),m=n(62);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var h={name:"Search",data:function(){return{isLoading:!1,items:[],search:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(m.b)({key:"key"}),{movies:{get:function(){return this.$store.state.movies},set:function(t){return this.$store.commit("setMovies",t)}},page:{get:function(){return this.$store.state.page},set:function(t){return this.$store.commit("setPage",t)}},totalPages:{get:function(){return this.$store.state.totalPages},set:function(t){return this.$store.commit("setTotalPages",t)}},spinner:{get:function(){return this.$store.state.spinner},set:function(t){return this.$store.commit("setSpinner",t)}}}),watch:{search:function(t){this.searchDebounced(t)}},methods:{searchDebounced:function(t){var e=this;clearTimeout(this._timerId),this._timerId=setTimeout((function(){e.getSearchData(t)}),500)},getSearchData:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://api.themoviedb.org/3/search/movie?api_key=".concat(e.key,"&query=").concat(t),o="https://api.themoviedb.org/3/discover/movie?api_key=".concat(e.key,"&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=").concat(e.page),e.spinner=!0,n.next=5,l()({url:t?r:o,method:"GET",responseType:"json",headers:{"content-type":"application/x-www-form-urlencoded"}}).then((function(t){if(200===t.status){var n=t.data,r=n.page,o=n.total_pages,c=n.results;e.items=c,e.movies=c,e.page=r,e.totalPages=o}})).catch((function(t){console.log(t)})).finally((function(){e.spinner=!1}));case 5:case"end":return n.stop()}}),n)})))()}}},v=n(24),d=n(31),y=n.n(d),w=n(336),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-autocomplete",{attrs:{items:t.items,loading:t.isLoading,"search-input":t.search,clearable:"","hide-details":"","item-text":"title","item-value":"id",label:"What are you looking for?",solo:""},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e}}})}),[],!1,null,"7ee12c67",null),O=component.exports;y()(component,{VAutocomplete:w.a});var P={name:"Poster",props:{item:Object},data:function(){return{show:!1}},methods:{getImgUrl:function(t){return"https://image.tmdb.org/t/p/w500/".concat(t)},truncate:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:120;return t.substring(0,e-3)+"..."}}},j=(n(313),n(332)),x=n(220),_=n(219),$=n(256),k=n(91),D=n(333),V=n(253),S=n(339),T=n(340),C=n(334),E=Object(v.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[n("v-card",{staticClass:"item mx-auto",attrs:{elevation:r?8:2}},[n("nuxt-link",{attrs:{to:"/"+t.item.id}},[n("v-img",{staticClass:"white--text align-end",attrs:{"max-height":"300",src:t.getImgUrl(t.item.poster_path)}})],1),n("nuxt-link",{attrs:{to:"/"+t.item.id}},[n("v-card-title",{staticClass:"pb-0",domProps:{innerHTML:t._s(t.item.title)}})],1),n("v-card-text",{staticClass:"py-3"},[n("v-row",{staticClass:"mx-0",attrs:{justify:"space-between",align:"center"}},[n("div",{staticClass:"d-flex"},[n("v-rating",{attrs:{value:t.item.vote_average/2,length:"5",color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),n("div",{staticClass:"grey--text ml-4"},[t._v(t._s(t.item.vote_average)+" ("+t._s(t.item.vote_count)+")")])],1),n("div",[n("v-btn",{attrs:{icon:""},on:{click:function(e){t.show=!t.show}}},[n("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1)])],1),n("v-expand-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[n("v-divider"),n("v-card-text",{staticClass:"text--primary"},[n("div",{domProps:{innerHTML:t._s(t.truncate(t.item.overview))}})])],1)])],1)]}}])})}),[],!1,null,"1f158ed7",null),I=E.exports;y()(E,{VBtn:j.a,VCard:x.a,VCardText:_.a,VCardTitle:_.b,VDivider:$.a,VExpandTransition:k.a,VHover:D.a,VIcon:V.a,VImg:S.a,VRating:T.a,VRow:C.a});var R={name:"Pagination",computed:{page:{get:function(){return this.$store.state.page},set:function(t){return this.$store.commit("setPage",t)}},totalPages:{get:function(){return this.$store.state.totalPages},set:function(t){return this.$store.commit("setTotalPages",t)}}}},M=n(335),G=Object(v.a)(R,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-pagination",{attrs:{length:t.totalPages,"total-visible":7,color:"secondary"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})}),[],!1,null,"38094efa",null),L=G.exports;function U(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}y()(G,{VPagination:M.a});var H={name:"Index",data:function(){return{}},components:{Search:O,Poster:I,Pagination:L},watch:{page:function(){this.getData()}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?U(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):U(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(m.b)({key:"key"}),{movies:{get:function(){return this.$store.state.movies},set:function(t){return this.$store.commit("setMovies",t)}},page:{get:function(){return this.$store.state.page},set:function(t){return this.$store.commit("setPage",t)}},totalPages:{get:function(){return this.$store.state.totalPages},set:function(t){return this.$store.commit("setTotalPages",t)}},spinner:{get:function(){return this.$store.state.spinner},set:function(t){return this.$store.commit("setSpinner",t)}}}),methods:{getData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/discover/movie?api_key=".concat(t.key,"&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=").concat(t.page),t.spinner=!0,e.next=4,l()({url:n,method:"GET",responseType:"json",headers:{"content-type":"application/x-www-form-urlencoded"}}).then((function(e){if(200===e.status){var n=e.data,r=n.page,o=n.total_pages,c=n.results;t.movies=c,t.page=r,t.totalPages=o}})).catch((function(t){console.log(t)})).finally((function(){t.spinner=!1}));case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.getData()}},J=n(227),N=n(230),z=Object(v.a)(H,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{attrs:{fluid:""}},[e("v-container",[e("v-row",[e("v-col",[e("Search")],1)],1),e("v-row",{attrs:{wrap:"","justify-center":""}},this._l(this.movies,(function(t,n){return e("v-col",{key:n,attrs:{md:"3",sm:"4"}},[e("Poster",{attrs:{item:t}})],1)})),1),e("v-row",{directives:[{name:"show",rawName:"v-show",value:this.totalPages>1,expression:"totalPages > 1"}]},[e("v-col",[e("Pagination")],1)],1)],1)],1)}),[],!1,null,null,null);e.default=z.exports;y()(z,{VCol:J.a,VContainer:N.a,VRow:C.a})}}]);