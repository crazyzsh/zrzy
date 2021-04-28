<template>
  <el-container class="home-container">
    <el-header>
      <img src="../assets/images/common/logo.png" />
      <div class="title">新型基础测绘数据库</div>
      <el-button type="info" @click="loginout">退出登入</el-button>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <el-menu background-color="#333744" text-color="#fff" active-text-color="#ffd04b" router>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>实体查询</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">图层查询1</el-menu-item>
              <el-menu-item index="1-2">geojson_data</el-menu-item>
              <el-menu-item index="1-3">矢量切片</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>实体展示</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">展示1</el-menu-item>
              <el-menu-item index="2-2">展示2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>三维数据</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">三维数据1</el-menu-item>
              <el-menu-item index="3-2">三维数据2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>量算工具</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">量算1</el-menu-item>
              <el-menu-item index="4-2">量算2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-phone"></i>
              <span>关于我们</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">单位介绍</el-menu-item>
              <el-menu-item index="5-2">成果展示</el-menu-item>
              <el-menu-item index="5-3">测试</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>后台管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="6-1">用户注册</el-menu-item>
              <el-menu-item index="6-2">用户列表</el-menu-item>
              <el-menu-item index="6-3">？？？？</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>

      </el-aside>
      <!-- 主体区域 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    loginout() {
      // 清空sesssionstorage本地存储
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped>
.el-header {
  background-color: #373d41;
  height: 50px;
}
.home-container {
  height: 100%;
}
.title {
  height: 30px;
  width: 250px;
  color: #eaedf1;
  float: left;
  margin-top: 15px;
  margin-left: 45px;
  font-size: 25px;
}
img {
  width: 60px;
  height: 60px;
  float: left;
}
.el-button {
  float: right;
  text-align: center;
  width: 100px;
  height: 40px;
  margin: 10px auto;
}

.el-aside {
  background-color: #333744;
}
/* 主体区域进行设置 */
.el-main {
  background-color: #eaedf1;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
