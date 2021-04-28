<template>
  <el-carousel :interval="2000" type="card" height="500px">
        <el-carousel-item>
            <img src="../assets/images/welcomeimg/one.png" class="carouselimg" />
        </el-carousel-item>
        <el-carousel-item>
            <img src="../assets/images/welcomeimg/two.png" class="carouselimg" />
        </el-carousel-item>
        <el-carousel-item>
            <img src="../assets/images/welcomeimg/three.png" class="carouselimg" />
        </el-carousel-item>
        <el-carousel-item>
            <img src="../assets/images/welcomeimg/four.png" class="carouselimg" />
        </el-carousel-item>
        <el-carousel-item>
            <img src="../assets/images/welcomeimg/five.png" class="carouselimg" />
        </el-carousel-item>
        <el-carousel-item>
            <img src="../assets/images/welcomeimg/six.png" class="carouselimg" />
        </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
    data() {
      return {
       
      }
    }
  }
</script>
<style  scoped>
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  /* 控制图片能100%随着浏览器的改变自动适应窗口 */
  img{width:100%;height:100%}
</style>