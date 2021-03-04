<template>
  <div class="comment">
    <el-divider>用户评论</el-divider>
    <div v-for="(item, index) in comments" :key="index">
      <el-card shadow="hover">
        <div class="box">
          <div class="head">
            <div class="img">
              <el-avatar :src="item.headImg"></el-avatar>
              <span>{{ item.name }}</span>
            </div>
            <div>
              <el-tag type="primary" size="small" v-if="item.isVIP">PLUS会员</el-tag>
              <el-tag type="info" size="small" v-if="!item.isVIP">普通会员</el-tag>
            </div>
          </div>
          <div class="right">
            <div class="stars">
              <el-rate :value="item.star" disabled show-text text-color="#ff9900" > </el-rate>
              <div class="time">{{item.datetime}}</div>
            </div>
            <div class="content">{{item.content}}</div>
          </div>
        </div>
      </el-card>
      <el-divider></el-divider>
    </div>
  </div>
</template>
 
<script>
// import mock from 'mockjs'
export default {
  name: 'Comments',
  props:['goodsType'],
  data() {
    return {
      clothComments: [],
      shoeComments:[],
      ringComments:[],
      flowerComments:[],
      bedComments:[],
      candyComments:[],
      necklaceComments:[],
      comments:[],
    };
  },
  methods:{
    getType(){
      if(this.goodsType=='婚鞋'){
        this.comments=this.shoeComments
      }else if(this.goodsType=='捧花'){
        this.comments=this.flowerComments
      }else if(this.goodsType=='钻戒'){
        this.comments=this.ringComments
      }else if(this.goodsType=='四件套'){
        this.comments=this.bedComments
      }else if(this.goodsType=='三金'){
        this.comments=this.necklaceComments
      }else if(this.goodsType=='喜糖'){
        this.comments=this.candyComments
      }else{
        this.comments=this.clothComments
      }
    },
  },
  created() {
    this.$axios({
      type: 'get',
      url: 'http://localhost:8080/api/clothComment',
    })
      .then((res) => {
        this.clothComments = res.data.comments;
        this.getType()
      })
      .catch(function (error) {
        console.log(error);
      });

    this.$axios({
      type: 'get',
      url: 'http://localhost:8080/api/shoeComment',
    })
      .then((res) => {
        this.shoeComments = res.data.comments;
        this.getType()
      })
      .catch(function (error) {
        console.log(error);
      });

    this.$axios({
      type: 'get',
      url: 'http://localhost:8080/api/ringComment',
    })
      .then((res) => {
        this.ringComments = res.data.comments;
        this.getType()
      })
      .catch(function (error) {
        console.log(error);
      });

    this.$axios({
      type: 'get',
      url: 'http://localhost:8080/api/flowerComment',
    })
      .then((res) => {
        this.flowerComments = res.data.comments;
        this.getType()
      })
      .catch(function (error) {
        console.log(error);
      });

    this.$axios({
      type: 'get',
      url: 'http://localhost:8080/api/candyComment',
    })
      .then((res) => {
        this.candyComments = res.data.comments;
        this.getType()
      })
      .catch(function (error) {
        console.log(error);
      });

    this.$axios({
      type: 'get',
      url: 'http://localhost:8080/api/bedComment',
    })
      .then((res) => {
        this.bedComments = res.data.comments;
        this.getType()
      })
      .catch(function (error) {
        console.log(error);
      });

    this.$axios({
      type: 'get',
      url: 'http://localhost:8080/api/necklaceComment',
    })
      .then((res) => {
        this.necklaceComments = res.data.comments;
        this.getType()
      })
      .catch(function (error) {
        console.log(error);
      });

  },
};
</script>

<style scoped>
.comment{
  width:900px;
}
.head .img {
  display: flex;
  align-items: center;
}

.head .img > * {
  margin: 4px 4px;
}

.head {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.comment .box {
  display: flex;
}

.content{
  width: 600px;
}

.right{
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.right .stars{
  display: flex;
  justify-content: space-between;
}

.right .stars .time{
  font-size: 14px;
  color: #666;
  margin-right: 10px;
}
</style>