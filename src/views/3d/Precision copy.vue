<template>
  <div id="cesiumContainer">
    <div class="viewer">
      <vc-viewer @ready="ready">
        <button class="font" @click="load3dtiles">加载模型</button>
        <!-- 加载导航组件（已经进行了全局注册） -->
        <navigation></navigation>
        <!-- 加载底图 -->
        <vc-layer-imagery>
          <vc-provider-imagery-openstreetmap></vc-provider-imagery-openstreetmap>
        </vc-layer-imagery>
      </vc-viewer>  
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    const oScript = document.createElement("script");
    oScript.type = "text/javascript";
    oScript.src = "https://unpkg.com/cesium/Build/Cesium/Cesium.js";
    document.body.appendChild(oScript);
  },
  methods: {
    load3dtiles() {
      var viewer = new Cesium.Viewer("cesiumContainer", {
        selectionIndicator: false,
        geocoder: true,
        homeButton: false,
        sceneModePicker: false,
        baseLayerPicker: false,
        navigationHelpButton: false,
        animation: false,
        timeline: false,
        fullscreenButton: false,
        vrButton: false,
      });

      var tileset = new Cesium.Cesium3DTileset({
        // url: '../../assets/data/xl/tilesets.json',
        // url: "http://localhost:9999/xianlin/tileset.json",
        // url:"http://localhost/3dtiles_1/tileset.json",
        url: "http://localhost:9999/sanwei_data/3dtiles_6074/tileset.json",
        maximumScreenSpaceError: 2, //最大的屏幕空间误差
        maximumNumberOfLoadedTiles: 1000, //最大加载瓦片个数
      });
      tileset.readyPromise
        .then(function (tileset) {
          viewer.scene.primitives.add(tileset);
          viewer.zoomTo(
            tileset,
            new Cesium.HeadingPitchRange(
              0.0,
              -0.5,
              tileset.boundingSphere.radius * 2.0
            )
          );
        })
        .otherwise(function (error) {
          console.log(error);
        });
    },
     ready(cesiumInstance) {
      const { Cesium, viewer } = cesiumInstance;
      this.cesiumInstance = cesiumInstance;
    },
  },
};
</script>

<style scoped>
@import "https://unpkg.com/cesium/Build/Cesium/Widgets/widgets.css";
.demo-tool {
  width: 220px;
  height: 200px;
  position: absolute;
  top: 60px;
  left: 200px;
}
.font {
  color: rgb(241, 11, 11);
  height: 50px;
  width: 150px;
  background-color: chartreuse;
  position: absolute;
  top: 60px;
  left: 200px;
}
</style>
