<template>
  <div>
    <vc-navigation :options="options"></vc-navigation>
    <div class="demo-tool">
        <span>罗盘部件</span>
        <el-switch v-model="options.enableCompass"></el-switch>
        <span>缩放部件</span>
        <el-switch v-model="options.enableZoomControl"></el-switch>
        <span>罗盘外环是否可用</span>
        <el-switch v-model="options.enableCompassOuterRing"></el-switch>
        <span>比例尺部件</span>
        <el-switch v-model="options.enableDistanceLegend"></el-switch>
        <span>位置信息部件</span>
        <el-switch v-model="options.enableLocationBar"></el-switch>
    </div>  
  </div>
</template>
<script>
export default {
  data() {
    return {
      timeline: true,
        options: {
          enableCompass: true,
          enableZoomControl: true,
          enableDistanceLegend: true,
          enableLocationBar: true,
          enableCompassOuterRing: true,
          enablePrintView: true,
          enableMyLocation: {
            // 使用高德api定位
            amap: {
              key: '42d22e6ed83f077bc28b7864718726de'
            }
          }
        }
    };
  },
}
</script>
<style scoped>
@import "../../../node_modules/vue-cesium/lib/vc-navigation.css";
.demo-tool {
  display: none;
}
</style>
