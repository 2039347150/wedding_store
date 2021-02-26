<template>
  <footer class="footer">
    <div class="footer-title">
      <div class="footer-item">
        <el-row>
          <el-col span="8">
            <h1>FREE SHIPPING</h1>
            <p>ON ORDER OVER RS999</p>
          </el-col>
          <el-col span="8">
            <h1>ORDER RETURN</h1>
            <p>RETURN WITHIN 14DAYS</p>
          </el-col>
          <el-col span="8">
            <h1>COD</h1>
            <p>CASH ON DELIVERY</p>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- <el-divider></el-divider> -->
    <div class="box">
      <el-row>
        <el-col span="5">
          <div class="first-line"><span>About Us</span></div>
          <div class="second-line" v-for="(item, index) in arr1" :key="index">
            <span class="text">{{ item }}</span>        
          </div>
        </el-col>
        <el-col span="5">
          <div class="first-line"><span>Customer service</span></div>
          <div class="second-line" v-for="(item, index) in arr2" :key="index">
            <span class="text">{{ item }}</span>
          </div>
        </el-col>
        <el-col span="5">
          <div class="first-line"><span>Your account</span></div>
          <div class="second-line" v-for="(item, index) in arr3" :key="index">
            <span class="text">{{ item }}</span>
          </div>
        </el-col>
        <el-col span="5">
          <div class="first-line"><span>Categories</span></div>
          <div class="second-line" v-for="(item, index) in arr4" :key="index">
            <span class="text">{{ item }}</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="box" style="line-height:50px;">Copyright © 2015 Wedding Store All rights reserved</div>
  </footer>
</template>
 
<script>
export default {
  name: 'MyFooter',
  data() {
    return {
      arr1: [
        'Who We Are',
        'Contact Us',
        'Our Sites',
        'In The News',
        'Team',
        'Carrers',
      ],
      arr2: [
        'FAQ',
        'Shipping',
        'Cancellation',
        'Returns',
        'Bulk Orders',
        'Buying Guides',
      ],
      arr3: [
        'Your Account',
        'Personal Information',
        'Addresses',
        'Discount',
        'Track your order',
      ],
      arr4: [
        'Wedding',
        'Jewellerys',
        'Shoes',
        'Flowers',
        'Cakes',
        '...More',
      ],
    };
  },
};
</script>

<style scoped>
.footer {
  background: #fff;
  /* border:1px solid red; */
}
.footer-title{
  /* border:1px solid blue; */
  /* min-height:200px; */
  padding:45px 0px;
  margin-bottom:20px;
  /* background:#eee; */
}
.footer-item{
  width:1200px;
  margin:0 auto;
  text-align:center;
}
.footer-item .el-col{
  border-right:3px solid rgb(218, 215, 215);
}
.footer-item .el-col:last-child{
  border:none;
}
.box .el-col{
  width:280px;
  font-size:14px;
  line-height:25px;
  margin:0px 10px;
}
.footer-item h1{
  color:black;
  line-height:60px;
}
.footer-item p{
  color:#d36630;
  font-size:20px;
}
.footer .box {
  width:1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border:1px solid green; */
  margin:0 auto;
}

.footer .first-line {
  color: #666;
  font-size: 18px;
  padding:3px 0px;
  margin-bottom:5px;
  border-bottom:1px solid rgb(201, 199, 199);
}

.footer {
  color: #999;
  font-size: 13px;
  padding-bottom: 18px;
}
.footer span:hover{
  color:rgb(38, 101, 238);
  cursor: pointer;
}
</style>