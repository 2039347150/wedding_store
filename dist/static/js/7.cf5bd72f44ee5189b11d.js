webpackJsonp([7],{"XYK+":function(t,a){},bqEV:function(t,a){},s6Jx:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"card"},[this._t("content")],2)},staticRenderFns:[]};var i={name:"Home",components:{MyCard:s("VU/8")({name:"MyCard",props:["title","rightText"]},n,!1,function(t){s("XYK+")},"data-v-3bec13de",null).exports},data:function(){return{searchValue:"",goodsList:[]}},methods:{getMainImg:function(t,a){return(t[a]["轮播图"]||"").split("/\r\n")[0]},load:function(){var t=this;this.$axios({type:"get",url:"/static/data/goodsDetails.json"}).then(function(a){for(var s=a.data.slice(0,10),n=[],i=0;i<s.length;i+=2)n.push([s[i],s[i+1]]);t.goodsList=n}).catch(function(t){console.log(t)})},toPage:function(t){this.$router.push(t)}},beforeMount:function(){this.load()}},e={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"home"},[s("header",[s("van-nav-bar",{attrs:{title:"wedding-store"},scopedSlots:t._u([{key:"left",fn:function(){return[s("van-icon",{attrs:{name:"wap-nav",size:"18"},on:{click:function(a){return t.toPage("/MB/category")}}})]},proxy:!0},{key:"title",fn:function(){return[s("van-search",{attrs:{placeholder:"请输入搜索关键词",shape:"round"},model:{value:t.searchValue,callback:function(a){t.searchValue=a},expression:"searchValue"}})]},proxy:!0},{key:"right",fn:function(){return[s("span",{on:{click:function(a){return t.toPage("/MB/login")}}},[t._v(" 登录 ")])]},proxy:!0}])})],1),t._v(" "),s("div",{staticClass:"content",attrs:{width:"90%"}},[s("div",{staticClass:"carousel"},[s("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:6e3,"indicator-color":"white"}},[s("van-swipe-item",[s("van-image",{attrs:{width:"100%",fit:"contain",src:"/static/lunbo/lunbo-mb0.jpg"}})],1),t._v(" "),s("van-swipe-item",[s("van-image",{attrs:{width:"100%",fit:"contain",src:"/static/lunbo/lunbo-mb1.jpg"}})],1)],1)],1)]),t._v(" "),s("div",{staticClass:"nav"},[s("my-card",{scopedSlots:t._u([{key:"content",fn:function(){return[s("van-swipe",{attrs:{"indicator-color":"#ccc"}},[s("van-swipe-item",[s("div",{staticClass:"box inline-block"},t._l(10,function(t,a){return s("span",{key:a,staticClass:"img-box"},[s("van-image",{attrs:{width:"4rem",height:"4rem",src:"/static/images/mb-mul-carousel/carousel-"+a+".webp"}})],1)}),0)]),t._v(" "),s("van-swipe-item",[s("div",{staticClass:"box inline-block"},t._l(10,function(t,a){return s("span",{key:a,staticClass:"img-box"},[s("van-image",{attrs:{width:"4rem",height:"4rem",src:"/static/images/mb-mul-carousel/carousel-"+(10+a)+".webp"}})],1)}),0)])],1)]},proxy:!0}])})],1),t._v(" "),s("div",{staticClass:"goods"},[t._m(0),t._v(" "),s("content",t._l(t.goodsList,function(a,n){return s("div",{key:n,staticClass:"box"},[s("span",{staticClass:"inline-block innerBox",on:{click:function(s){return t.toPage({name:"detail",params:{id:a[0].sku,goodsDetail:a[0]}})}}},[s("img",{attrs:{width:"150",height:"150",alt:"图片",src:t.getMainImg(a,0)}}),t._v(" "),s("div",{staticClass:"bottom"},[s("div",{staticClass:"title van-multi-ellipsis--l2"},[t._v("\n              "+t._s(a[0]["标题"])+"\n            ")]),t._v(" "),s("div",{staticClass:"value"},[s("span",{staticStyle:{padding:"0.6rem 0 0",color:"#fa2c19"}},[s("span",[t._v("¥")]),t._v("\n                "+t._s(a[0]["价格"])+"\n              ")]),t._v(" "),s("span",{staticClass:"inline-block view"},[t._v(" 看相似 ")])])])]),t._v(" "),s("span",{staticClass:"inline-block innerBox",on:{click:function(s){return t.toPage({name:"detail",params:{id:a[1].sku,goodsDetail:a[1]}})}}},[s("img",{attrs:{width:"150",height:"150",src:t.getMainImg(a,1),alt:""}}),t._v(" "),s("div",{staticClass:"bottom"},[s("div",{staticClass:"title van-multi-ellipsis--l2"},[t._v("\n              "+t._s(a[1]["标题"])+"\n            ")]),t._v(" "),s("div",{staticClass:"value"},[s("span",{staticStyle:{padding:"0.6rem 0 0",color:"#fa2c19"}},[s("span",[t._v("¥")]),t._v("\n                "+t._s(a[1]["价格"])+"\n              ")]),t._v(" "),s("span",{staticClass:"inline-block view"},[t._v(" 看相似 ")])])])])])}),0)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("header",[a("h2",[this._v("猜你喜欢")])])}]};var o=s("VU/8")(i,e,!1,function(t){s("bqEV")},"data-v-ba9e29c8",null);a.default=o.exports}});
//# sourceMappingURL=7.cf5bd72f44ee5189b11d.js.map