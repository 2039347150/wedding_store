<template>
  <div id="app">
    <div class="content">
      <el-row type="flex" align="middle" class="row">
        <el-col :span="8">
          <div @click="toBack()" class="pointer" style="font-size:32px;color:black;font-family:FZShuTi;text-align:center;">
            <!-- <img src="/static/logo.png" alt="" width="80px" height="80px" /> -->
            Wedding Store
          </div>
        </el-col>
        <el-col :span="16">
          <!-- 搜索框第一行 -->
          <el-row>
            <el-col :span="12" :push="1">
              <el-row>
                <el-col>
                  <div style="margin-top: 4px" @keyup.enter="search()">
                    <el-autocomplete
                      v-model="searchData"
                      :fetch-suggestions="querySearch"
                      placeholder="请输入内容"
                      :trigger-on-focus="true"
                      @select="handleSelect"
                      style="display: block"
                    >
                      <el-button
                        slot="append"
                        icon="el-icon-search"
                        @click="search()"
                      ></el-button>
                    </el-autocomplete>
                  </div>
                </el-col>
              </el-row>
              <!-- <el-row
                :gutter="0"
                type="flex"
                justify="space-between"
                style="margin-top: 4px"
              >
                <el-col>
                  <el-link :underline="false">手机降价</el-link>
                </el-col>
                <el-col>
                  <el-link :underline="false">电脑数码</el-link>
                </el-col>
                <el-col>
                  <el-link :underline="false">电脑促销</el-link>
                </el-col>
                <el-col>
                  <el-link :underline="false">运动大牌</el-link>
                </el-col>
                <el-col>
                  <el-link :underline="false">潮流服装</el-link>
                </el-col>
                <el-col>
                  <el-link :underline="false">居家暖冬</el-link>
                </el-col>
                <el-col>
                  <el-link :underline="false">大雪节气</el-link>
                </el-col>
                <el-col>
                  <el-link :underline="false">家装纸品</el-link>
                </el-col>
              </el-row> -->
            </el-col>
            <!-- 购物车 -->
            <el-col :span="4" :push="2" style="margin-top: 4px">
              <router-link to="/PC/cart">
                <el-badge :value="getCartsLength" :max="99" class="item">
                  <el-button icon="el-icon-shopping-cart-full" size="medium">
                    我的购物车</el-button
                  >
                </el-badge>
              </router-link>
            </el-col>
            <!-- /购物车 -->
          </el-row>
          <!-- /搜索栏第一行 -->
        </el-col>
      </el-row>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'Search',
  data() {
    return {
      searchData: '',
      restaurants: [],
    };
  },
  computed: {
    getCartsLength() {
      if (this.$store.state.userInfo === null) {
        return 0;
      } else {
        return this.$store.state.userInfo.carts.length || 0;
      }
    },
  },
  methods: {
    querySearch(queryString, cb) {
      let restaurants = this.restaurants;
      let results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        let patt = new RegExp(queryString.toLowerCase());
        // console.log (patt);
        // console.log (queryString.toLowerCase());
        return patt.test(restaurant.value.toLowerCase());
      };
    },
    loadAll() {
      return [
        { value: '钻戒' },
        { value: '捧花' },
        { value: '婚服' },
        { value: '四件套' },
        { value: '喜糖' },
        { value: '三金' },
        { value: '婚鞋' },
        { value: '蛋糕' },
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
    search() {
      this.$router.push(`/PC/search?q=${this.searchData}&page=1&size=10`);
    },
    toBack() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
};
</script>

<style scoped>
#app {
  background-color: #fff;
  height: 100px;
  box-shadow: 0 4px 4px #ccc;
}

.content {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}

.row {
  height: 100%;
}

.searchList {
  position: relative;
  top: 38px;
}

.searchList .el-link {
  font-size: 16px;
}
</style>