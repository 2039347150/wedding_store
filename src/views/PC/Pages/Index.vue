<template>
  <div>
    <header-part />
    <search />
    <div class="content desc">
      <el-row>
        <el-col span="6">
          <h1>
            Welcome to our site
          </h1>
        </el-col>
        <el-col span="18">
          <h3>Proin ornare massa eu enim pretium efficitur.</h3>
          <p>
            Etiam fermentum consectetur nulla, sit amet dapibus orci sollicitudin vel. Nulla consequat turpis in molestie fermentum. In ornare, 
            tellus non interdum ultricies, elit ex lobortis ex, aliquet accumsan arcu tortor in leo. Nullam molestie elit enim. Donec ac aliquam quam,
             ac iaculis diam. Donec finibus scelerisque erat, non convallis felis commodo ac.
          </p>
        </el-col>
      </el-row>
    </div>
    <div class="content card">
      <!-- <category></category> -->
      <rotation />
      <!-- <erect-rotation /> -->
      <!-- <serve /> -->
      <recommend />
      <sec-kill />
    </div>
    <my-footer />
  </div>
</template>
 
<script>
import HeaderPart from '@/views/PC/header/HeaderPart';
import Search from '@/views/PC/search/Search';
// import Category from '@/views/PC/category/Category';
import Rotation from '@/views/PC/rotation/Rotation';
// import ErectRotation from '@/views/PC/erectRotation/ErectRotation.vue';
// import Serve from '@/views/PC/serve/Serve';
import SecKill from '@/views/PC/secKill/SecKill.vue';
import Recommend from '@/views/PC/recommend/Recommend.vue';
import MyFooter from '@/views/PC/footer/MyFooter.vue';

export default {
  name: 'Index',
  components: {
    HeaderPart,
    Search,
    // Category,
    Rotation,
    // ErectRotation,
    // Serve,
    SecKill,
    Recommend,
    MyFooter,
  },
  beforeCreate() {
    // 加载默认值
    this.$store.commit('loadDefaultUsers');
  },
};
</script>

<style scoped>
.content {
  width: 1200px;
  margin: 10px auto;
  /* border:1px solid red; */
}
.desc{
  padding:40px 0px;
  height:100px;
}
.desc h1{
  color:#00a0dc;
  font-family:'Times New Roman', Times, serif;
  font-size:32px;
  padding:0px 20px;
}
.desc h3{
  color:rgb(71, 71, 71);
}
.desc p{
  line-height: 30px;
  color:rgb(136, 136, 136);
}
</style>