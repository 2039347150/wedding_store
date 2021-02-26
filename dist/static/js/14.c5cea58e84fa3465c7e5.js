webpackJsonp([14],{O9j3:function(t,s){},e8QE:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("mvHQ"),n=e.n(a),i=e("WXjl"),r=e("FA3I"),v={components:{MyFooter:i.a,HeaderPart:r.a},name:"Pay",des:"用户支付页面",data:function(){return{time:5,radio:0,data:this.$route.params.data,address:[{province:"江苏省",city:"苏州市",subCity:"常熟市",town:"虞山镇",DetailAddress:"阜湖路45号",name:"夏东海",phone:"18852937269"},{province:"江苏省",city:"苏州市",subCity:"常熟市",town:"虞山镇",DetailAddress:"阜湖路50号",name:"赵东来",phone:"18852939969"},{province:"英国",city:"伦敦",subCity:"",town:"",DetailAddress:"贝克街221B",name:"福尔摩斯",phone:"13952939969"}]}},created:function(){console.log(this.$route)},methods:{getCalc:function(t){return(t["价格"]*t.num).toFixed(2)},getMainImg:function(t){return t["轮播图"].split("/\r\n")[0]},getTotal:function(){var t=0;return this.data.forEach(function(s){t+=s["价格"]*s.num}),t.toFixed(2)},getAddress:function(){var t=this.address[this.radio];return t.province+" "+t.city+" "+t.subCity+" "+t.town+" "+t.DetailAddress},submitPay:function(){var t=this,s="总计："+this.getTotal()+" , 是否继续支付？";this.$confirm(s,"支付提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"primary",center:!0}).then(function(){var s=JSON.parse(localStorage.getItem("users")),e=t.$store.state.userInfo,a=s.filter(function(t){return t.username===e.username})[0];console.log(a);var i=void 0;a.carts=a.carts.filter(function(s){return i=0,t.data.forEach(function(t){t.sku===s.sku&&(i=1)}),0===i}),t.$store.state.userInfo=a;var r=s.find(function(t){return t.username==e.username});console.log("该用户对应的索引是"+s.indexOf(r)),s.splice(s.indexOf(r),1,a),localStorage.setItem("users",n()(s)),t.$store.commit("updateUsers",s),t.data=[],t.$message({type:"success",message:"支付成功，感谢您对本商场的支持！"}),t.$router.push("/PC/index")}).catch(function(){t.$message({type:"info",message:"已取消支付"})})}}},o={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("header-part"),t._v(" "),e("div",{staticClass:"pay"},[e("div",{staticClass:"addresses"},[e("el-card",{attrs:{shadow:"never"}},[e("div",{attrs:{slot:"header"},slot:"header"},[t._v("确认收货地址")]),t._v(" "),e("div",[e("el-radio-group",{model:{value:t.radio,callback:function(s){t.radio=s},expression:"radio"}},t._l(t.address,function(s,a){return e("div",{key:a,staticClass:"selectItem"},[e("el-radio",{attrs:{label:a}},[e("span",[t._v(t._s(s.province))]),t._v(" "),e("span",[t._v(t._s(s.city))]),t._v(" "),e("span",[t._v(t._s(s.subCity))]),t._v(" "),e("span",[t._v(t._s(s.town))]),t._v(" "),e("span",[t._v(t._s(s.DetailAddress))]),t._v(" "),e("span",[t._v(" ("+t._s(s.name)+" 收) ")]),t._v(" "),e("span",[t._v("\n                  "+t._s(s.phone)+"\n                ")])])],1)}),0)],1)])],1),t._v(" "),e("div",{staticClass:"goods"},[e("el-card",{attrs:{shadow:"never"}},[e("div",{attrs:{slot:"header"},slot:"header"},[t._v("确认订单信息")]),t._v(" "),e("div",t._l(t.data,function(s,a){return e("div",{key:a,staticClass:"goodsItem"},[e("el-card",{attrs:{shadow:"hover"}},[e("div",{staticStyle:{position:"relative",top:"0",left:"0"}},[e("div",{staticClass:"main"},[e("div",{staticClass:"name"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:t.getMainImg(s),alt:"商品主图",width:"120px",height:"120px"}})]),t._v(" "),e("div",{staticClass:"title"},[t._v(t._s(s["标题"]))])]),t._v(" "),e("div",{staticClass:"value"},[e("div",[t._v("单价")]),t._v(" "),e("div",[e("span",[t._v("¥")]),t._v("\n                      "+t._s(s["价格"])+"\n                    ")])]),t._v(" "),e("div",{staticClass:"num"},[e("div",[t._v("数量")]),t._v(" "),e("div",[t._v("\n                      "+t._s(s.num)+"\n                    ")])]),t._v(" "),e("div",{staticClass:"calc"},[e("div",[t._v("小计")]),t._v(" "),e("div",[e("span",[t._v("¥")]),t._v("\n                      "+t._s(t.getCalc(s))+"\n                    ")])])]),t._v(" "),e("div",{staticClass:"transport"},[e("div",[t._v("运输方式: 普通快递（运费免邮）")]),t._v(" "),e("div",[t._v("运费险：卖家赠送，退换货可赔")])])])])],1)}),0),t._v(" "),e("el-divider"),t._v(" "),e("div",{staticClass:"bottom"},[t._v("\n          收银台 | 结账\n          "),e("div",{staticClass:"core"},[e("el-card",{attrs:{shadow:"never"}},[e("div",[e("span",[t._v("总计：")]),t._v(" "),e("span",[t._v("¥")]),t._v(" "),e("span",[t._v("\n                  "+t._s(t.getTotal())+"\n                ")])]),t._v(" "),e("div",[e("span",[t._v("寄送至：")]),t._v(" "),e("span",[t._v("\n                  "+t._s(t.getAddress())+"\n                ")])]),t._v(" "),e("div",[e("span",[t._v("收件人：")]),t._v(" "),e("span",[t._v(t._s(t.address[t.radio].name)+" ")]),t._v(" "),e("span",[t._v(t._s(t.address[t.radio].phone))])])]),t._v(" "),e("div",{staticClass:"submitBtn"},[e("el-button",{attrs:{type:"primary"},on:{click:function(s){return t.submitPay()}}},[t._v("\n                提交订单\n              ")])],1)],1)])],1)],1)]),t._v(" "),e("my-footer")],1)},staticRenderFns:[]};var d=e("VU/8")(v,o,!1,function(t){e("O9j3")},"data-v-5d36e57c",null);s.default=d.exports}});
//# sourceMappingURL=14.c5cea58e84fa3465c7e5.js.map