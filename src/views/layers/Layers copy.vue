<template>
  <div class="viewer">
    <vc-viewer @ready="ready">
      <!-- 加载底图 -->
      <vc-layer-imagery>
        <vc-provider-imagery-openstreetmap :url="url_ditu" ></vc-provider-imagery-openstreetmap>
      </vc-layer-imagery>
      <!-- 加载wms图层 -->
      <vc-layer-imagery ref="wms" :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <!-- layers绑定的属性是<el-option>标签中value绑定的属性值 -->
        <vc-provider-imagery-wms :url="url_add" :layers="counts" :parameters="parameters"></vc-provider-imagery-wms>
      </vc-layer-imagery>
    </vc-viewer>
    <!-- 工具条 -->
    <div class="demo-tool">
      <span class="font">在此切换服务</span>
      <!-- <el-select v-model="value" placeholder="切换影像" >
        <el-option v-for="item in options" :key="item.value" :value="item.value"  :label="item.label" >
        </el-option>
      </el-select> -->
      <el-select v-model="value" multiple placeholder="请选择">
        <el-option v-for="item,i in options" :key="item.value" :label="item.label" :value="item.value" @click="count(item,i)">
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 底图加载的是openstreetmap
      url_ditu:"https://a.tile.openstreetmap.org",
      // 发布的wms服务的入口地址
      url_add: "http://localhost:9999/geoserver/zrzy/wms",
      // 图层名与发布的图层名要一致
      layers: "",
      parameters: {
        transparent: true,
        format: "image/png",
      },
      alpha: 1,
      brightness: 1,
      contrast: 1,
      options: [
        {
          value: "zrzy:jmd_fangwu_a",
          label: "jmd_fangwu_a",
        },
        {
          value: "zrzy:jmd_fangwu_a_yuanluo",
          label: "jmd_fangwu_a_yuanluo",
        },
         {
          value: "zrzy:jmd_fushu_a",
          label: "jmd_fushu_a",
        },
        {
          value: "zrzy:jmd_fushu_p",
          label: "jmd_fushu_p",
        },{
          value: "zrzy:jt_csjt_l",
          label: "jt_csjt_l",
        },{
          value: "zrzy:jt_fushu_a",
          label: "jt_fushu_a",
        },
        {
          value: "zrzy:poi_linshi",
          label: "poi_linshi",
        },{
          value: "zrzy:sx_gouqu_a",
          label: "sx_gouqu_a",
        },{
          value: "zrzy:sx_hupo_a",
          label: "sx_hupo_a",
        },{
          value: "zrzy:zb_csld_a",
          label: "zb_csld_a",
        },{
          // value: "'zrzy:zb_csld_a'+','+'zrzy:jmd_fangwu_a'+','+'zrzy:poi_linshi'",
          value:"zrzy:jmd_fangwu_a,zrzy:jmd_fangwu_a_yuanluo,zrzy:jmd_fushu_a,zrzy:jmd_fushu_p,zrzy:jt_csjt_l,zrzy:jt_fushu_a,zrzy:poi_linshi,zrzy:sx_gouqu_a,zrzy:sx_hupo_a,zrzy:zb_csld_a",
          label: "all",
        },
        // {zrzy:jmd_fangwu_a,zrzy:poi_linshi}
      ],
      // value:'https://stamen-tiles.a.ssl.fastly.net/toner/',
      value:[],
      counts:''
    };
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
  methods: {
    ready(cesiumInstance) {
      const { Cesium, viewer } = cesiumInstance;
      this.cesiumInstance = cesiumInstance;
    },
    count(item){
      flag=this.value.length();
      count='';
      counts='';
      for(i=0;i<flag;i++){
        count=count+this.value[i]+',';
        console.log(item,i)
      }
      counts=count.substr(0,count.length-1);
      console.log(item,i)
  }
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
.font{color: rgb(241, 11, 11)}
</style>
