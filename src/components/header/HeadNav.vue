<template>
  <div class="nav-box">
    <el-scrollbar>
      <el-menu
        router
        :default-active="activeIndex"
        active-text-color="#008080"
        class="el-menu-demo"
        :mode="mode"
        @select="handleSelect"
        background-color="transparent"
      >
        <template v-for="list in pageLists">
          <el-submenu :index="list.id" :key="list.id" v-if="list.children.length != 0">
            <template slot="title">{{list.name}}</template>
            <el-menu-item
              v-for="(item, i) in list.children"
              :key="i"
              :index="item.path"
            >{{item.name}}</el-menu-item>
          </el-submenu>
        </template>
        <!-- 实时数据 -->
        <!-- <el-submenu index="0">
          <template slot="title">实时数据</template>
          <el-menu-item index="realtimeOnline">实时在线</el-menu-item>
          <el-menu-item index="realtimeAdd">实时新增</el-menu-item>
          <el-menu-item index="2-3">实时营收</el-menu-item>
          <el-menu-item index="2-4">实时产出</el-menu-item>
          <el-menu-item index="2-5">实时消耗</el-menu-item>
        </el-submenu>-->

        <!-- 日常数据 -->
        <!-- <el-submenu index="1">
          <template slot="title">日常数据</template>
          <el-menu-item index="/loginData">登录数据</el-menu-item>
          <el-menu-item index="3-2">消耗数据</el-menu-item>
          <el-menu-item index="3-3">充值数据</el-menu-item>
          <el-menu-item index="3-4">破产数据</el-menu-item>
          <el-menu-item index="3-5">流失数据</el-menu-item>
          <el-menu-item index="3-5">道具流水</el-menu-item>
          <el-menu-item index="3-5">银票结算</el-menu-item>
          <el-menu-item index="3-5">红包兑换</el-menu-item>
          <el-menu-item index="3-5">银票结算数据</el-menu-item>
          <el-menu-item index="3-5">聚宝盆数据</el-menu-item>
        </el-submenu>-->

        <!-- 订单管理 -->
        <!-- <el-submenu index="2">
          <template slot="title">订单管理</template>
          <el-menu-item index="/dayOrder">每日订单金额</el-menu-item>
          <el-menu-item index="2-2">订单管理</el-menu-item>
        </el-submenu>-->
      </el-menu>
    </el-scrollbar>
    <!-- 功能状态菜单 退出... -->
    <!-- <el-col :span="4">
        <el-menu class="el-menu-demo" :mode="mode" router>
          <el-menu-item index="/">
            <span>退出</span>
          </el-menu-item>
          <el-menu-item>
            <span class="el-icon-setting" @click="switchNav"></span>
          </el-menu-item>
        </el-menu>
    </el-col>-->
  </div>
</template>

<script>
export default {
  props: {
    activeIndex: String
  },

  data() {
    return {
      mode: "vertical",
      pageLists: [
        {
          id: '0',
          name: "实时数据",
          children: [
            { name: "实时数据", path: "realtimeOnline" },
            { name: "实时新增", path: "realtimeAdd" },
            { name: "实时营收", path: "2-3" },
            { name: "实时产出", path: "2-3" },
            { name: "实时消耗", path: "2-3" }
          ]
        },
        {
          id: '1',
          name: "日常数据",
          children: [
            { name: "登录数据", path: "/loginData" },
            { name: "消耗数据", path: "/realtimeAdd" },
            { name: "充值数据", path: "/2-3" },
            { name: "破产数据", path: "/2-3" },
            { name: "流失数据", path: "/2-3" },
            { name: "道具流水", path: "/2-3" },
            { name: "银票结算", path: "/2-3" },
            { name: "银票结算数据", path: "/2-3" },
            { name: "聚宝盆数据", path: "/2-3" }
          ]
        },
        {
          id: '2',
          name: "订单管理",
          children: [
            { name: "每日订单金额", path: "/dayOrder" },
            { name: "订单管理", path: "/realtimeAdd" }
          ]
        }
      ]
    };
  },

  methods: {
    handleSelect(key, keyPath) {
      this.$emit("nav-selector", key, keyPath);
    },
    // 切换导航栏样式
    switchNav() {
      this.mode = this.mode == "horizontal" ? "vertical" : "horizontal";
      // this.$emit("switch-nav", modeVH);
    }
  }
};
</script>

<style scoped>
.el-scrollbar__wrap {
  overflow-y: auto;
}
</style>