<template>
  <div class="viewer">
    <vc-viewer @ready="ready">
       <!-- 加载导航组件（已经进行了全局注册） -->
       <navigation></navigation>
      <!-- 加载底图 -->
      <vc-layer-imagery>
        <vc-provider-imagery-openstreetmap></vc-provider-imagery-openstreetmap>
      </vc-layer-imagery>
      <!-- data="http://localhost:9999/geojson_data/bj.json" -->
      <!-- data="http://localhost:9999/geojson_data/all_topojson.json" -->
      <vc-datasource-geojson
        data="http://localhost:9999/geojson_data/bj.json"
        @ready="subReady"
        :show="show"
        :options="options"
        ref="ds"
        @click="clicked"
        :entities="entities"
      ></vc-datasource-geojson>
    </vc-viewer>
  </div>  
</template>
<script>
export default {
    data() {
      return {
        show: true,
        options: {
            // 线、面轮廓颜色
            stroke:'blue',
            // 点大小
            markerSize:5,
            // 点颜色
            markerColor:"red",
            // 面填充色(默认黄色透明)
            // fill:"#00FFFF"
            // fill:"yellow"
            // 设置透明
            // fill:"transparent"
        },
        entities: []
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance;
        // viewer.geocoder: true;
        cesiumInstance.geocoder=true;
        // var geocoder = viewer.geocoder.viewModel;
        // geocoder.searchText = "Vienna";
        // geocoder.flightDuration = 0.0;
        // geocoder.search();
        viewer.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(119.943, 31.687, 2000),
        orientation: {
          heading: Cesium.Math.toRadians(0.0), // east, default value is 0.0 (north)
          pitch: Cesium.Math.toRadians(-90), // default value (looking down)
          roll: 0.0, // default value
        },
      });
      },
      subReady(cesiumInstance) {
        cesiumInstance.viewer.zoomTo(cesiumInstance.cesiumObject)
      },
      clicked(e) {
        console.log(e)
      }
    },
}
</script>
<style scoped>

</style>