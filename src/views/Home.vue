<template>
  <div class="home">
    <!-- 顶部导航栏 -->
    <head-nav :activeIndex="activeIndex" v-on:nav-selector="handleSelect"></head-nav>

    <!-- 面包屑导航 -->
    <bread-crumb :keyPath="keyPath"></bread-crumb>

    <router-view />
  </div>
</template>

<script>
// 顶部导航栏
import headNav from "@/components/header/HeadNav";
// 面包屑导航
import breadCrumb from "@/components/header/BreadCrumb";

export default {
  components: { breadCrumb, headNav },

  data() {
    return {
      // 导航当前激活项
      activeIndex: "realtimeOnline",
      // 导航路径名
      keyPath: ''
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.keyPath = keyPath[1]
    }
  }
};
</script>

<style scoped>
/* 欢迎文本 */
/deep/ h1.welcome-txt {
  text-shadow: 5px 5px 15px rgba(75, 75, 75, 0.2);
  background: linear-gradient(
    left,
    rgb(250, 255, 113),
    rgba(43,215,211)
  );
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
}

/* /deep/ html {
  background: rgb(131, 131, 131) url(/img/bg.8400fc0d.png) no-repeat;
} */
</style>>
