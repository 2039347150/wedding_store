webpackJsonp([14],{"+2J0":function(e,t,n){e.exports=n.p+"static/img/404.5ced8f1.gif"},"5sdf":function(e,t){},BDrv:function(e,t){},FA3I:function(e,t,n){"use strict";var s=n("lbHh"),o=n.n(s),a={name:"HeaderPart",methods:{toIndex:function(){"/PC/index"===this.$route.path?this.$message({type:"info",message:"尊敬的用户，您当前正在首页。",showClose:!0}):this.$router.push("/PC/index")},toPage:function(e){this.$router.push(e)},logout:function(){this.$store.state.userInfo=null,o.a.remove("isLogin")},helloUser:function(){var e=["长颈鹿嫁给了猴子，一年后长颈鹿提出离婚：我再也不要过这种上蹿下跳的日子了！猴子大怒：离就离！谁见过亲个嘴还得爬树的！","鱼说：“我时时刻刻把眼睁开是为了在你身边不舍离开。”水说：“我终日流淌不知疲倦是为了围绕你好好把你抱起。”锅说：“都他妈快熟了还这么倔。”","吃饭了吗？请接收短信。大象把大便排在路中央，一只蚂蚁正好路过，它抬头望了望那云雾缭绕的顶峰，不禁唱到：呀啦索，这就是青藏高原！","你都长大了，有些事应该让你知道了：天，是用来刮风下雨的；地，是用来长花长草的；我，是用来证明人类是多伟大的；你是用来炖粉条的。","那天你参加球赛，只见你一记凌空抽射，守门员还没反应过来，球进了！我们都为你鼓掌欢呼，你爬起来，拍拍屁股说：妈的，地太滑了！","当你拿起镜子，看着自己那圆圆的脸，高高的鼻，迷人的眼，性感的嘴，有福的耳，你会大声的感叹----猪啊！","众水族给老龙王祝寿，席间龟丞相从怀中掏出一物，看了看，又放了回去。龙王忙问：龟丞相又有何事？虾兵蟹将赶紧答道：老王八又收到短信了。"],t=Math.floor(Math.random()*e.length);this.$notify({title:"Hello world",position:"top-left",message:e[t],type:"success"})}}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{attrs:{id:"header"}},[n("div",{attrs:{id:"content"}},[n("span",[n("div",{staticClass:"inline-block pointer",on:{click:function(t){return e.toPage("/PC/index")}}},[n("i",{staticClass:"el-icon-s-home",staticStyle:{color:"#79bbff"}}),e._v(" "),n("span",{staticStyle:{"font-size":"14px"}},[e._v("江苏")])])]),e._v(" "),n("span",{staticClass:"rightLink"},[null===this.$store.state.userInfo?[n("el-link",{attrs:{underline:!1},on:{click:function(t){return e.toPage("/PC/login?isLogin=true")}}},[e._v("您好，请先登录\n        ")]),e._v(" "),n("el-link",{attrs:{type:"primary",underline:!1},on:{click:function(t){return e.toPage("/PC/login?isLogin=false")}}},[e._v("\n          免费注册\n        ")])]:[n("el-link",{attrs:{underline:!1}},[n("span",[e._v(" 尊敬的用户: ")]),e._v(" "),n("span",[e._v(e._s(this.$store.state.userInfo.name||this.$store.state.userInfo.username))])]),e._v(" "),n("el-link",{attrs:{type:"primary",underline:!1},on:{click:e.logout}},[e._v("\n          退出登录\n        ")])],e._v(" "),n("span",{staticClass:"div"},[e._v(" | ")]),e._v(" "),n("el-link",{attrs:{underline:!1},on:{click:function(t){return e.toPage("/PC/cart")}}},[e._v("\n        购物车\n      ")]),e._v(" "),n("span",{staticClass:"div"},[e._v(" | ")]),e._v(" "),n("el-link",{attrs:{underline:!1},on:{click:function(t){return e.toIndex()}}},[e._v("商城首页")]),e._v(" "),n("span",{staticClass:"div"},[e._v(" | ")]),e._v(" "),n("el-link",{attrs:{underline:!1},nativeOn:{click:function(t){return e.helloUser()}}},[e._v("开心果")]),e._v(" "),n("span",{staticClass:"div"},[e._v(" | ")]),e._v(" "),n("el-popover",{attrs:{placement:"top-start",title:"作者信息",width:"240",trigger:"hover"}},[n("div",[n("div",[e._v("@son:Z09418208")]),e._v(" "),n("div",[e._v("@sname:张灵灵")]),e._v(" "),n("div",[e._v("@email:1754082565@qq.com")])]),e._v(" "),n("el-link",{attrs:{slot:"reference",underline:!1},slot:"reference"},[e._v(" 关于")])],1)],2)])])},staticRenderFns:[]};var i=n("VU/8")(a,r,!1,function(e){n("BDrv")},"data-v-0cfa5d72",null);t.a=i.exports},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},o,!1,function(e){n("W663")},null,null).exports,r=n("/ocq"),i=n("WXjl"),l={components:{HeaderPart:n("FA3I").a,MyFooter:i.a},name:"NotFound",methods:{goPageIndex:function(){this.$router.push("/PC/index")}}},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("header-part"),e._v(" "),n("div",{staticClass:"core"},[e._m(0),e._v(" "),n("div",{staticClass:"btnArea"},[n("h1",[e._v("this is 404 page!")]),e._v(" "),n("el-button",{attrs:{type:"primary",plain:"",size:"large"},on:{click:e.goPageIndex}},[e._v("\n        返回首页\n      ")])],1)]),e._v(" "),n("my-footer")],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("img",{attrs:{src:n("+2J0"),alt:""}})])}]};var u=n("VU/8")(l,c,!1,function(e){n("bTbZ")},"data-v-676f03f5",null).exports,d=[{path:"",redirect:"home"},{path:"home",component:function(){return n.e(9).then(n.bind(null,"ahwk"))},beforeEnter:function(e,t,n){document.title="首页",n()}},{path:"cart",component:function(){return n.e(12).then(n.bind(null,"q7Gu"))},beforeEnter:function(e,t,n){document.title="购物车",n()}},{path:"category",component:function(){return n.e(6).then(n.bind(null,"RRAc"))},beforeEnter:function(e,t,n){document.title="分类",n()}},{path:"profile",component:function(){return n.e(8).then(n.bind(null,"rLGM"))},beforeEnter:function(e,t,n){document.title="我的",n()}}],g=n("lbHh"),f=n.n(g),p=[{path:"",redirect:"index"},{path:"index",component:function(){return n.e(1).then(n.bind(null,"91fX"))}},{path:"detail/:id",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"MbJy"))}},{path:"login",component:function(){return n.e(4).then(n.bind(null,"Kzqp"))}},{name:"pcSearch",path:"search",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"DMM1"))}},{path:"cart",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"o+QW"))},beforeEnter:function(e,t,n){void 0===f.a.get("isLogin")?n("/PC/login?isLogin=true"):n()}},{name:"pay",path:"pay",component:function(){return n.e(7).then(n.bind(null,"e8QE"))},beforeEnter:function(e,t,n){void 0===f.a.get("isLogin")?n("/PC/login?isLogin=true"):n()}}];s.default.use(r.a);var h=[{path:"/",beforeEnter:function(e,t,n){var s=void 0;/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)?(console.log("-----这里是移动端-----"),s="/MB"):(console.log("-----这里是电脑端-----"),s="/PC"),n(s)}},{path:"/MB",component:function(){return n.e(10).then(n.bind(null,"+7qc"))},children:d},{path:"/PC",component:function(){return n.e(11).then(n.bind(null,"7tBZ"))},children:p},{path:"/404",component:u},{path:"*",redirect:"/404"}],v=r.a.prototype.push;r.a.prototype.push=function(e){return v.call(this,e).catch(function(e){return e})};var m=new r.a({routes:h});m.afterEach(function(){document.body.scrollTop=0,document.documentElement.scrollTop=0});var _=m,C=n("NYxO"),I=n("mvHQ"),y=n.n(I),b=n("mtWM"),k=n.n(b),x={increaseCount:function(e){e.count+=5},updateUsers:function(e,t){e.users=t},login:function(e,t){this.state.userInfo=t},loadDefaultUsers:function(e){var t=localStorage.getItem("users");console.log("这里是loadDefaultUsers方法"),t?e.users=JSON.parse(t):k()({type:"get",url:"/static/data/default-users.json"}).then(function(t){console.log(t.data),localStorage.setItem("users",y()(t.data)),e.users=JSON.parse(t.data)}).catch(function(e){console.log(e)})},getUsersAndCheck:function(e,t){var n=localStorage.getItem("users");console.log("这里是getUsersAndCheck方法"),console.log("这是用户信息"),console.log(t.userInfo),n?e.users=JSON.parse(n):k()({type:"get",url:"/static/data/default-users.json"}).then(function(t){console.log(t.data),localStorage.setItem("users",y()(t.data)),e.users=JSON.parse(t.data)}).catch(function(e){console.log(e)}),n=e.users,console.log("这里是全部用户的信息"),console.log(n);var s=n.filter(function(e){return e.username===t.userInfo.username});return console.log(s),0===s.length?(t.that.$message({showClose:!0,message:"警告，用户名错误",type:"error"}),!1):s[0].password!==t.userInfo.password?(t.that.$message({showClose:!0,message:"警告，密码错误",type:"error"}),!1):(t.that.$message({showClose:!0,message:"恭喜你, 登录成功",type:"success"}),e.userInfo=s[0],console.log("----------------"),console.log("登录成功"),f.a.set("isLogin","true",{expires:7}),t.that.$router.go(-1),!0)},checkRegAndAdd:function(e,t){var n=localStorage.getItem("users");console.log("这里是checkRegAndAdd方法"),console.log("这是用户信息"),console.log(t.userInfo),n?e.users=JSON.parse(n):k()({type:"get",url:"/static/data/default-users.json"}).then(function(t){console.log(t.data),localStorage.setItem("users",y()(t.data)),e.users=JSON.parse(t.data)}).catch(function(e){console.log(e)}),n=JSON.parse(n),console.log(n);var s=n.filter(function(e){return e.username===t.userInfo.username});if(console.log(s),0!==s.length)return t.that.$message({showClose:!0,message:"警告，该用户名已被注册",type:"error"}),!1;t.that.$message({showClose:!0,message:"注册成功",type:"success"});var o={username:"root",password:"123456",name:"何玉洁",email:"s.zoq@vuyydkhus.sb",age:18,headImg:"/static/images/headImg/5.jpg",isPlus:1,carts:[]};return o.username=t.userInfo.username,o.name=t.userInfo.username,o.password=t.userInfo.password,n.push(o),console.log(n),localStorage.setItem("users",y()(n)),!0}},P={getStoreCount:function(e){return e.count},getUserInfo:function(e){return localStorage.getItem("userInfo")||null},getGoodsList:function(e){return e.goodsList}},w={searchGoods:function(e,t){t.this.$axios({type:"get",url:"/static/data/goodsDetails.json"}).then(function(e){var n=new RegExp(t.qs.toLowerCase()),s=e.data.filter(function(e){return n.test(e["标题"].toLowerCase())}),o=t.page,a=t.size;t.this.goodsList=s.slice((o-1)*a,o*a),t.this.totalNum=s.length}).catch(function(e){console.log(e)})}};s.default.use(C.a);var S={a:{state:{name:"张飞"},mutations:{updateName:function(e){e.name="关羽"}}}},$=new C.a.Store({state:{count:20,isLogin:!1,userInfo:null,users:null,goodsList:null},mutations:x,getters:P,actions:w,modules:S}),L=n("zL8q"),E=n.n(L),j=(n("tvR6"),n("ppUw")),A=n.n(j),M=n("zNUS"),N=["这款手机外形美观大方，屏幕显示很细腻，线性马达带来的音效非常棒，由一亿像素加持的相机在拍照方面非常给力，运营速度流畅无比，待机时间可以达到2-3天，满足我的工作需求了，商家服务很给力，特别周到，下次一定继续来买，感谢大家了！","颜色挺不错的，到货很快，120真心好，照相效果也很棒！ 外形外观：喜欢 拍照效果：比我手上在用的强很多 还有充电贼快！","外形外观：特别漂亮，非常喜欢 屏幕音效：音效更是没的说 非常好听 拍照效果：比我以前的手机好多了，真不愧是一亿像素！ 运行速度：运行速度对我来说更是足够 ！！ 待机时间：没有问题 ，电池容量大 其他特色：颜值特别漂亮，非常喜欢","外形外观：高大上的外观，拿在手上有份量 屏幕音效：声音很大，放歌好听 拍照效果：当然没话说，1个亿！ 运行速度：不卡顿，爸爸用足够了"," 外形外观：颜色也太好看了吧，颜色在不同光线下和不同角度下有不同的颜色，真的特别好看 屏幕音效：音效也特别好，声音很大 运行速度：打游戏也很nice，这两天一直在用这个手机玩游戏，真的体验感很好","手机外观很漂亮， 音质好， 运行速度快， 4820 毫安的大电池， 杠杠的， 待机时间长， 商家送的东西超多， 手机买给老婆用的， 老婆很喜欢， 总之， 还是很满意的 ","外形外观：好看舒服，精致 屏幕音效：效果很好，亮 拍照效果：太棒了 运行速度：流畅 待机时间：时间很好，非常满意 其他特色：功能全面"],U=["/static/images/headImg/0.jpg","/static/images/headImg/1.jpg","/static/images/headImg/2.jpg","/static/images/headImg/3.jpg","/static/images/headImg/4.jpg","/static/images/headImg/5.jpg","/static/images/headImg/6.jpg","/static/images/headImg/7.jpg"];n.n(M).a.mock("http://localhost:8080/api/comments",{"comments|8":[{name:"@cname",email:"@email","age|18-20":5,"content|1":N,"headImg|1":U,datetime:"@now(yyyy-MM-dd) @increment(1):00:00","star|4-5":5,"isVIP|0-1":0}]});s.default.use(A.a),s.default.use(E.a),s.default.prototype.$axios=k.a,s.default.config.productionTip=!1,new s.default({el:"#app",router:_,store:$,render:function(e){return e(a)},components:{App:a},template:"<App/>"}),window.addEventListener("beforeunload",function(e){f.a.remove("isLogin")})},W663:function(e,t){},WXjl:function(e,t,n){"use strict";var s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[n("el-divider"),e._v(" "),n("div",{staticClass:"box"},e._l(e.arr1,function(t,s){return n("div",{key:s,staticClass:"first-line"},[n("el-link",{staticClass:"text"},[e._v(e._s(t))]),e._v(" "),s!=e.arr1.length-1?n("el-divider",{attrs:{direction:"vertical"}}):e._e()],1)}),0),e._v(" "),n("div",{staticClass:"box"},e._l(e.arr2,function(t,s){return n("div",{key:s,staticClass:"second-line"},[n("span",{staticClass:"text"},[e._v(e._s(t))]),e._v(" "),s!=e.arr2.length-1?n("el-divider",{attrs:{direction:"vertical"}}):e._e()],1)}),0),e._v(" "),n("div",{staticClass:"box"},e._l(e.arr3,function(t,s){return n("div",{key:s,staticClass:"second-line"},[n("span",{staticClass:"text"},[e._v("\n        "+e._s(t)+"\n      ")]),e._v(" "),s!=e.arr3.length-1?n("el-divider",{attrs:{direction:"vertical"}}):e._e()],1)}),0),e._v(" "),n("div",{staticClass:"box"},e._l(e.arr4,function(t,s){return n("div",{key:s,staticClass:"second-line"},[n("span",{staticClass:"text"},[e._v(e._s(t))]),e._v(" "),s!=e.arr4.length-1?n("el-divider",{attrs:{direction:"vertical"}}):e._e()],1)}),0),e._v(" "),n("div",{staticClass:"box"},e._l(e.arr5,function(t,s){return n("div",{key:s,staticClass:"second-line"},[n("img",{attrs:{src:"/static/logo.png",alt:"",width:"12px",height:"12px"}}),e._v(" "),n("span",{staticClass:"text"},[e._v(e._s(t)+"} ")]),e._v(" "),s!=e.arr5.length-1?n("el-divider",{attrs:{direction:"vertical"}}):e._e()],1)}),0)],1)},staticRenderFns:[]};var o=n("VU/8")({name:"MyFooter",data:function(){return{arr1:["关于我们","联系我们","联系客服","合作招商","商家帮助","营销中心","手机京东","友情链接","销售联盟","京东社区","风险监测","隐私政策","京东公益","English Site","Media & IR"],arr2:["京公网安备 11000002000088号","京ICP证070359号","互联网药品信息服务资格证编号(京)-经营性-2014-0008","新出发京零 字第大120007号"],arr3:["互联网出版许可证编号新出网证(京)字150号","出版物经营许可证","网络文化经营许可证京网文[2014]2148-348号","违法和不良信息举报电话：4006561155"],arr4:["Copyright © 2004 - 2020  京东JD.com 版权所有","消费者维权热线：4006067733经营证照","(京)网械平台备字(2018)第00003号","营业执照 "],arr5:["Global Site","Сайт России","Situs Indonesia","Sitio de España","เว็บไซต์ประเทศไทย"]}}},s,!1,function(e){n("5sdf")},"data-v-44f00e4e",null);t.a=o.exports},bTbZ:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.735dbdd7ba1075e58dc9.js.map