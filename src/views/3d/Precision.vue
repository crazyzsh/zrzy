<template>
  <div class="viewer">
    <vc-viewer @ready="ready" :geocoder="geocoder">
      <!-- 加载导航组件（已经进行了全局注册） -->
      <navigation></navigation>
      <!-- 加载底图 -->
      <vc-layer-imagery>
        <vc-provider-imagery-openstreetmap></vc-provider-imagery-openstreetmap>
      </vc-layer-imagery>
      <vc-primitive-tileset
        :url="url"
        @readyPromise="readyPromise"
        @initialTilesLoaded="initialTilesLoaded"
        @allTilesLoaded="allTilesLoaded"
        @loadProgress="loadProgress"
        @tileFailed="tileFailed"
        @tileLoad="tileLoad"
        @tileUnload="tileUnload"
        @tileVisible="tileVisible"
        @click="clicked"
      >
      </vc-primitive-tileset>
    </vc-viewer>
    <div class="demo-tool">
      <span>切换地址</span>
      <el-select v-model="url" placeholder="选择模型">
        <el-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label">
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        url: 'http://localhost:9999/sanwei_data/3dtiles_6074/tileset.json',
        options: [
          {
            value: 'http://localhost:9999/xianlin/tileset.json',
            label: '仙林宾馆'
          },
          {
            value: 'http://localhost:9999/sanwei_data/3dtiles_6074/tileset.json',
            label: '官方示例'
          },
          {
            value: 'http://localhost:9999/fbx/tileset.json',
            label: '精细模型'
          }
        ],
        geocoder: true,
        
      }
    },
    methods: {
      clicked (a) {
        console.log(a)
      },
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        const { Cesium, viewer } = cesiumInstance
      },
      readyPromise(tileset) {
        const { Cesium, viewer } = this.cesiumInstance
        viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(0.0, -0.5, tileset.boundingSphere.radius * 2.0))
      },
      allTilesLoaded() {
        console.log('All tiles are loaded')
      },
      initialTilesLoaded() {
        console.log('Initial tiles are loaded')
      },
      loadProgress(numberOfPendingRequests, numberOfTilesProcessing) {
        if (numberOfPendingRequests === 0 && numberOfTilesProcessing === 0) {
          console.log('Stopped loading')
          return
        }

        console.log('Loading: requests: ' + numberOfPendingRequests + ', processing: ' + numberOfTilesProcessing)
      },
      tileFailed(error) {
        console.log('An error occurred loading tile: ' + error.url)
        console.log('Error: ' + error.message)
      },
      tileLoad(tile) {
        console.log('A tile was loaded.')
      },
      tileUnload(tile) {
        console.log('A tile was unloaded from the cache.')
      },
      tileVisible(tile) {}
    }
  }
</script>
<style scope>
.demo-tool {
  width: 1000px;
  height: 200px;
  position: absolute;
  top: 60px;
  left: 200px;
}
.font{color: rgb(241, 11, 11)}
</style>