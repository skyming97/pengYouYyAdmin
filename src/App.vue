<template>
  <div id="app">
    <!-- 断网（网络请求超时） -->
    <div class="network-box" @click="onRefresh" v-if="!netwrokStatus">
      <h3>我没网了/(ㄒoㄒ)/~~</h3>
      <div>点我刷新哦</div>
    </div>

    <transition name="slide-fade">
      <router-view v-if="isRouterAlive" />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",

  // 把刷新方法提供出去
  provide() {
    return {
      refresh: this.refresh
    };
  },

  data() {
    return {
      isRouterAlive: true
    };
  },

  methods: {
    // 刷新
    refresh() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    },

    // 通过跳转一个空页面再返回的方式来实现刷新当前页面数据的目的
    onRefresh() {
      // this.$router.replace("/refresh");
      // 调用刷新方法
      this.refresh();
    }
  },

  computed: {
    // 网络状态
    netwrokStatus() {
      // 获取本地缓存中的网络状态
      let strNetStatus = localStorage.getItem("network");
      let netStatus = JSON.parse(strNetStatus);

      if (!strNetStatus) return true;
      return netStatus.network;
    }
  }
};
</script>

<style lang="less">
// 滚动条样式
@import "./assets/style/scrollBar.css";
// 去除默认样式
@import "./assets/style/common.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: teal;
}

/* 主题背景 */
html {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.055) url(assets/imgs/bg.png) no-repeat;
  background-size: cover;
}

/* 断网提示盒子 */
.network-box {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(8, 8, 8, 0.048);
  padding: 20px 50px;
  border-radius: 5%;
  z-index: 999;
  cursor: pointer;
}

// v-charts样式调整
// .ve-line > div > div:nth-child(1), 
// .ve-line > div > div:nth-child(1) canvas {
//   width: 100%!important;
// }

/* 切入切出动画 */
.slide-fade {
  position: absolute;
  left: 0;
  right: 0;
}
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(2, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  left: 0;
  right: 0;
  transform: translateX(50px);
  opacity: 0;
}
</style>
