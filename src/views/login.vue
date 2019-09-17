<template>
  <div class="login">
    <div class="login-container">
      <h2 class="login-txt">朋游运营后台</h2>
      <!-- 登录表单 -->
      <el-form
        :model="loginForm"
        :rules="loginRules"
        ref="loginForm"
        label-width="100px"
        class="demo-loginForm"
      >
        <el-form-item label="用户名" prop="usname">
          <el-input v-model="loginForm.usname" @keydown.enter.native="login(loginForm)"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="psw">
          <el-input
            type="password"
            v-model="loginForm.psw"
            @keydown.enter.native="login(loginForm)"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="btn-login" type="primary" @click="login(loginForm)">立即登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { Message } from "element-ui";

export default {
  // 注入刷新方法
  inject: ["refresh"],

  data() {
    return {
      // 用户表单信息
      loginForm: {
        usname: "", // 用户名
        psw: "" // 密码
      },
      // 用户表单验证规则
      loginRules: {
        usname: [
          { required: true, message: "用户名尚未输入哦！", trigger: "blur" },
          { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" }
        ],
        psw: [
          { required: true, message: "密码尚未输入哦！", trigger: "blur" },
          { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" }
        ]
      }
    };
  },

  methods: {
    //   登录
    login(loginForm) {
      this.$refs["loginForm"].validate(valid => {
        if (!valid) return false;
        // this.$message({
        //   message: "恭喜你，登录成功",
        //   type: "success"
        // });
        // Message("登录成功");
        console.log(this);

        this.$notify.success("登录成功！");
        // 跳转到欢迎页
        this.$router.push("/home");
      });
    }
  }
};
</script>

<style scoped>

/deep/ .login-txt {
  color: teal;
}

/* 登录框 */
.login-container {
  width: 380px;
  height: 285px;
  margin: 280px auto 0;
}

/* 登录按钮 */
.btn-login {
  float: right;
}
</style>