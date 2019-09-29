<template>
  <div class="login">
    <div class="login-container">
      <div class="avatar-box">
        <div class="avatar-img"></div>
      </div>
      <h1 class="login-txt">朋游运营后台——登录</h1>
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
import api from "@/api/index.js";
import axios from "axios";

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
      this.$refs["loginForm"].validate(async valid => {
        if (!valid) return false;

        // 请求登录测试接口
        api.article
          .easyMock()
          .then(res => {
            this.$notify.success("登录成功！");
            // 将用户信息保存到缓存;
            localStorage.setItem("uinfo", JSON.stringify(loginForm.usname));
            // 跳转到欢迎页
            this.$router.push("/home");
          })
          .catch(err => {
            console.log(err);
          });
      });
    },

    // 获取用户信息
    getUserForm() {
      this.$nextTick(() => {
        console.log(111);
        return this.loginForm.uname;
      });
    }
  }
};
</script>

<style scoped lang="less">
/deep/ .login-txt {
  color: teal;
}

/* 登录框 */
.login-container {
  position: relative;
  width: 28%;
  padding: 5% 5% 3% 0;
  margin: 17% auto 0;
  border-radius: 2%;
  background-color: #ffffffb6;
  h1 {
    padding-left: 13%;
  }
  /deep/ .el-form.demo-loginForm {
    margin-top: 5%;
  }
  .avatar-box {
    position: absolute;
    left: 50%;
    top: -15%;
    transform: translate(-50%, 0);
    width: 20%;
    height: 30%;
    padding: 2%;
    background-color: #ffffff71;
    border-radius: 50%;
    box-shadow: 0px 7px 12px rgba(243, 247, 137, 0.555);
    .avatar-img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: url("https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png");
      background-size: cover;
      box-shadow: 5px 5px 15px #ffffff71;
    }
  }
}

/* 登录按钮 */
.btn-login {
  float: right;
}
</style>