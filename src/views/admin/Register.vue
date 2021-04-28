<template>
  <!-- 类名可以随便取 -->
  <div class="app">
    <h1>新建分类</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="用户名">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="model.mima"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return { model: {} };
  },
  methods: {
    async save() {
      // console.log("saving successfully!");
      // const res= await
      // const res= await this.$http.post("/categories", this.model);
      this.$axios({
        method: "post",
        url: "/categories",
        data: {
          name: this.model.name,
          password: this.model.mima,
        },
      }).then((res) => {
        console.log(res.data);
      });

      this.$router.push("/6-2");
      this.$message({
        type: "success",
        message: "保存成功",
      });
      // this.$message.success("Login successful!");
    },
  },
};
</script>
