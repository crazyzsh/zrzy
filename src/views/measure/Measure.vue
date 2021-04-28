 <template>
 <div class="viewer">
    <vc-viewer @ready="ready" scene3DOnly>
      <navigation></navigation>
       <!-- 加载底图 -->
      <vc-layer-imagery ref="wms">
        <vc-provider-imagery-openstreetmap :url="url" ></vc-provider-imagery-openstreetmap>
      </vc-layer-imagery>
      <!-- 距离量算 -->
      <vc-measure-distance
        :clampToGround="clampToGround"
        ref="measureDistance"
        @activeEvt="activeEvt"
        @measureEvt="measureEvt"
        @movingEvt="movingEvt"
        :removeLastPosition="removeLastPosition"
      ></vc-measure-distance>
      <!-- 面积量算 -->
      <vc-measure-area
        ref="measureArea"
        @activeEvt="activeEvt"
        @measureEvt="measureEvt"
        @movingEvt="movingEvt"
        :clampToGround="clampToGround"
        :removeLastPosition="removeLastPosition"
      ></vc-measure-area>
      <!-- 高度量算 -->
      <vc-measure-height
        ref="measureHeight"
        @activeEvt="activeEvt"
        @measureEvt="measureEvt"
        @movingEvt="movingEvt"
      ></vc-measure-height>
    </vc-viewer>
    <div class="demo-tool">
      <el-button class="md-raised md-accent" @click="toggle('measureDistance')">{{ distanceMeasuring ? '停止' : '距离' }}</el-button>
      <el-button class="md-raised md-accent" @click="toggle('measureArea')">{{ areaMeasuring ? '停止' : '面积' }}</el-button>
      <el-button class="md-raised md-accent" @click="toggle('measureHeight')">{{ heightMeasuring ? '停止' : '高度' }}</el-button>
      <el-button class="md-raised md-accent" @click="clear">清除</el-button>
      <span class="font">贴地</span>
      <el-switch v-model="clampToGround"></el-switch>
      <span class="font">移除最后一个点</span>
      <el-switch v-model="removeLastPosition"></el-switch>
    </div>
  </div>
</template>

<script>
// import Navigation from '../mini/Navigation.vue'
  export default {
    data() {
      return {

        distanceMeasuring: false,
        areaMeasuring: false,
        heightMeasuring: false,
        clampToGround: false,
        removeLastPosition: true,
        url:"https://a.tile.openstreetmap.org"
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        var scene = viewer.scene
        scene.debugShowFramesPerSecond = true
        this.cesiumInstance = cesiumInstance
        viewer.scene.globe.depthTestAgainstTerrain = true
      },
      toggle(type) {
        this.$refs[type].measuring = !this.$refs[type].measuring
      },
      clear() {
        this.$refs.measureDistance.clear()
        this.$refs.measureArea.clear()
        this.$refs.measureHeight.clear()
      },
      activeEvt(_) {
        this[_.type] = _.isActive
      },
      measureEvt(result) {
        console.log(result)
      },
      movingEvt(position) {
        console.log(position)
      },
      readyPromise(tileset) {
        const { viewer } = this.cesiumInstance
        viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(0.0, -0.5, tileset.boundingSphere.radius * 2.0))
      }
    },
     mounted() {
      this.$refs.wms.createPromise.then(({ Cesium, viewer, cesiumObject }) => {
        viewer.camera.setView({
          destination: Cesium.Cartesian3.fromDegrees(119.943, 31.687, 2000),
          orientation: {
            heading: Cesium.Math.toRadians(0.0), // east, default value is 0.0 (north)
            pitch: Cesium.Math.toRadians(-90), // default value (looking down)
            roll: 0.0, // default value
          },
        });
    });
  },
  }
</script>
<style  scoped>
.demo-tool {
  width: 800px;
  height: 200px;
  position: absolute;
  top: 60px;
  left: 200px;
}
.font{color: rgb(241, 11, 11)}
</style>