<template>
  <!--地图挂载容器-->
  <div id="viewDiv" style="width: 100%; height: 100%">
    <!-- <button @click="loadVT" class="tool"></button> -->
  </div>
</template>
<script>
// 在下载好esri-loader的前提下，不需要在主入口文件（main.js）中进行引入，在有需求的组件中以以下的方式引入即可
//参考https://www.cnblogs.com/FormerWhite/p/13453067.html代码
import { loadModules } from "esri-loader";
export default {
  name: "Arcgis",
  data() {
    return {
      modules: [
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/VectorTileLayer",
      ],
      view: "",
      gisConstructor: {},
      map: {},
    };
  },
  mounted() {
    loadModules(this.modules, { css: true }).then(this.loading);
  },
  methods: {
    loading(args) {
      console.log(args);
      // 这里是调用相应图层的简化方式的创建，必不可少否则会报错
      for (let k in args) {
        let name = this.modules[k].split("/").pop();
        name = name.replace(name[0], name[0].toUpperCase());
        this.gisConstructor[name] = args[k];
      }
      // 切片地图
      var mapTileLayer = new this.gisConstructor.VectorTileLayer({
        url:
          "https://tiles.arcgis.com/tiles/S990USlhfgpUmWKm/arcgis/rest/services/first_publish/VectorTileServer",
      });
      this.map = new this.gisConstructor.Map({
        layers: [mapTileLayer],
      });
      //创建view视图
      this.view = new this.gisConstructor.MapView({
        container: "viewDiv",
        map: this.map,
        center: [-118, 34],
        // zoom: 6,
        zoom: 15,
      });
      // 鼠标点击事件
      this.view.on("click", function(e) {
        var xy = [
          Math.round(e.mapPoint.longitude * 1000) / 1000,
          Math.round(e.mapPoint.latitude * 1000) / 1000,
        ]; //转换经纬度
        console.log(xy, "gg");
        let restbtn = document.getElementsByClassName("restxuandian")[0];
        console.log(restbtn);
        // restbtn.style.cursor="pointer"
      });
    },
  },
};
</script>
<style scoped>
/* .tool {
  width: 200px;
  height: 50px;
} */
</style>
