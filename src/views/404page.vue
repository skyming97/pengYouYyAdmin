<template>
  <div class="box">
    <h1>404</h1>
    <p>访问的页面未找到！/(ㄒoㄒ)/~~</p>
    <img src="../assets/imgs/error-404.png" alt="404-页面未找到">
    <el-button type="primary" plain @click="handleGotoHome">回到首页</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    handleGotoHome() {
      this.$router.push("/home");
    }
  }
};
</script>

<style scoped lang="less">
.box {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  img {
      display: block;
      margin-bottom: 20px;
  }
}
</style>