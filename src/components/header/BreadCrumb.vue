<template>
  <div class="bread-box">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in $route.meta.title" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  props: { keyPath: String }
};
</script>

<style scoped>
.bread-box {
  padding: 0 0 8px 10px;
}
</style>