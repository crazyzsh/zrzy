<template>
  <div class="header">
    <!-- 导航栏 -->
    <div class="dingbu">
      <div class="logo"><img src="../assets/images/common/222.png" /></div>
      <div class="title">新型基础测绘数据库</div>
    </div>
    <div class="login_container">
      <div class="login_box">
        <!-- 头像区域 -->
        <!-- <div class="avatar">
          <img src="../assets/by.jpg" alt="" />
        </div> -->
        <!-- 登入表单区域 -->
        <el-form class="login_top" :model="ruleForm" :rules="rules" ref="loginFormRef">
          <!-- 用户名 -->
          <el-form-item prop="name">
            <el-input prefix-icon="el-icon-user-solid" class="yonghu" v-model="ruleForm.name"></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="psw">
            <el-input prefix-icon="el-icon-goods" class="mima" v-model="ruleForm.psw"></el-input>
          </el-form-item>
          <!-- 按钮区域 -->
          <el-form-item class="btns">
            <el-button type="login" @click="loginForm">登入</el-button>
            <el-button type="reset" @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "zs1",
        psw: "123456",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 2,
            max: 18,
            message: "长度在 2 到 18 个字符",
            trigger: "blur",
          },
        ],
        psw: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 18,
            message: "长度在 6 到 18 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // 登入信息重置
    resetForm() {
      this.$refs.loginFormRef.resetFields();
    },
    // 登入时进行验证
    loginForm() {
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) {
          return;
        } else {
          const result = await this.$http.post("login", this.ruleForm);
          console.log(result.data.meet);
          if (result.data.meet === 250) {
            this.$message.error("User does not exist!");
          } else if (result.data.meet === 200) {
            // sessionStorage进行设置
            window.sessionStorage.setItem("token", result.data.token);
            // 验证账户以及密码无误后进行页面的跳转
            this.$router.push("/home");
            this.$message.success("Login successful!");
          } else {
            this.$message.warning("Password error!");
          }
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  /* background-color: #21a382;   */
  background-image: url(../assets/images/common/bg.png);
  height: 100%;
  background-repeat: repeat-x;
  background-size: 100% 100%;
}
.dingbu {
  width: 100%;
  height: 100px;
  background-color: #215698;
}
.title {
  width: 1000px;
  height: 100px;
  text-align: center;
  margin: 25px auto;
  font-family: "华文行楷", Times, serif;
  font-size: 50px;
  float: left;
  color: aliceblue;
}
/* .logo {
  width: 530px;
  height: 100px;
  float: left;
} */
.logo {
  width: 340px;
  height: 70px;
  float: left;
  margin-top: 15px;
}
/* .login_container {
  background-color: #21a382;
  height: 100%;

  background-repeat: repeat-x;
  background-size: 100% 100%;
} */
.login_box {
  width: 450px;
  height: 300px;
  background-color: rgba(200, 214, 200, 0.959);
  border-radius: 3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.avatar {
  height: 130px;
  width: 130px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}
img {
  width: 100%;
  height: 100%;
}
.login_top {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  /* 去掉尾部 */
  box-sizing: border-box;
}
/* 右下角对齐 */
.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
