<template>
  <div id="app">
    <router-view v-if="isRouterAlive" />
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
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* 主题背景 */
html {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.068) url(assets/imgs/bg.png) no-repeat;
}

/* 去除标签默认margin，padding*/
h1,h2,h3,h4,h5,h6 {
  padding: 0;
  margin: 0;
}
body,html {
  padding: 0;
  margin: 0;
}
</style>
