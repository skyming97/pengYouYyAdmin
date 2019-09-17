<template>
  <div class="nav-box">
    <el-row>
      <el-col :span="20">
        <el-menu
          router
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <!-- 实时数据 -->
          <el-submenu index="1">
            <template slot="title">实时数据</template>
            <el-menu-item index="realtimeOnline">实时在线</el-menu-item>
            <el-menu-item index="realtimeAdd">实时新增</el-menu-item>
            <el-menu-item index="2-3">实时营收</el-menu-item>
            <el-menu-item index="2-4">实时产出</el-menu-item>
            <el-menu-item index="2-5">实时消耗</el-menu-item>
          </el-submenu>

          <!-- 日常数据 -->
          <el-submenu index="2">
            <template slot="title">日常数据</template>
            <el-menu-item index="/home">登录数据</el-menu-item>
            <el-menu-item index="3-2">消耗数据</el-menu-item>
            <el-menu-item index="3-3">充值数据</el-menu-item>
            <el-menu-item index="3-4">破产数据</el-menu-item>
            <el-menu-item index="3-5">流失数据</el-menu-item>
            <el-menu-item index="3-5">道具流水</el-menu-item>
            <el-menu-item index="3-5">银票结算</el-menu-item>
            <el-menu-item index="3-5">红包兑换</el-menu-item>
            <el-menu-item index="3-5">银票结算数据</el-menu-item>
            <el-menu-item index="3-5">聚宝盆数据</el-menu-item>
          </el-submenu>

          <!-- 订单管理 -->
          <el-submenu index="3">
            <template slot="title">订单管理</template>
            <el-menu-item index="/">每日订单金额</el-menu-item>
            <el-menu-item index="2-2">订单管理</el-menu-item>
          </el-submenu>
        </el-menu>

        <!-- 功能状态菜单 退出... -->
      </el-col>
      <el-col :span="4">
        <el-menu class="el-menu-demo" mode="horizontal">
          <el-menu-item>
            <span>退出</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    activeIndex: String
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$emit("nav-selector", key, keyPath);
    }
  }
};
</script>

<style scoped>
</style>