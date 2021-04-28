<template>
  <div class="viewer">
    <vc-viewer @ready="ready">
      <!-- 加载底图 -->
      <vc-layer-imagery>
        <vc-provider-imagery-openstreetmap :url="value" ></vc-provider-imagery-openstreetmap>
      </vc-layer-imagery>
      <!-- 加载wms图层 -->
      <vc-layer-imagery ref="wms" :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <vc-provider-imagery-wms :url="url_add" :layers="layers" :parameters="parameters"></vc-provider-imagery-wms>
      </vc-layer-imagery>
    </vc-viewer>
    <!-- 工具条 -->
    <div class="demo-tool">
      <span>切换服务</span>
      <el-select v-model="value" placeholder="切换影像">
        <el-option v-for="item in options" :key="item.value" :value="item.value"   :label="item.label">
          <!-- {{ item.label }} -->
        </el-option>
      </el-select>
      <!-- {{value}} -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url_add: "http://localhost:9999/geoserver/ZJline/wms",
      layers: "ZJline:BOU_TOW_LN",
      parameters: {
        transparent: true,
        format: "image/png",
      },
      alpha: 1,
      brightness: 1,
      contrast: 1,
      options: [
        {
          value: "https://a.tile.openstreetmap.org",
          label: "openstreetmap1",
        },
        {
          value: "https://stamen-tiles.a.ssl.fastly.net/toner/",
          label: "openstreetmap2",
        },
         {
          value: "http://localhost:9999/geoserver/ZJline/wms",
          label: "add",
        },
      ],
      value:'https://a.tile.openstreetmap.org',
    };
  },
  mounted() {
    this.$refs.wms.createPromise.then(({ Cesium, viewer, cesiumObject }) => {
      viewer.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(120, 29, 666000.0),
        orientation: {
          heading: Cesium.Math.toRadians(90.0), // east, default value is 0.0 (north)
          pitch: Cesium.Math.toRadians(-90), // default value (looking down)
          roll: 0.0, // default value
        },
      });
    });
  },
  methods: {
    ready(cesiumInstance) {
      const { Cesium, viewer } = cesiumInstance;
      this.cesiumInstance = cesiumInstance;
    },
  },
};
</script>
<style scoped>
.demo-tool {
  width: 220px;
  height: 200px;
  position: absolute;
  top: 60px;
  left: 200px;
}
</style>
