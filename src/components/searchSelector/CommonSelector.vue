<template>
  <div>
    <el-col :span="4">
      <el-select v-model="values.value" @change="handleSelector" clearable placeholder="—— 系统 ——">
        <el-option
          v-for="item in data_options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-col>

    <el-col :span="4">
      <el-select v-model="values.value2" @change="handleSelector" clearable placeholder="—— 平台 ——">
        <el-option
          v-for="item in data_options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-col>

    <el-col :span="4">
      <el-select v-model="values.value3" @change="handleSelector" clearable placeholder="—— 游戏 ——">
        <el-option
          v-for="item in data_options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-col>

    <el-col :span="4">
      <el-select v-model="values.value4" @change="handleSelector" clearable placeholder="—— 版本 ——">
        <el-option
          v-for="item in data_options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-col>

    <el-col :span="4">
      <el-select v-model="values.value5" @change="handleSelector" clearable placeholder="—— 渠道商 ——">
        <el-option
          v-for="item in data_options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-col>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
    // commonSeleVals: Object
  },
  data() {
    return {
      // 将从props接收到的属性赋值给data
      data_options: this.$props.options,
      values: {}
    };
  },

  methods: {
    handleSelector(val) {
      console.log(val);
      // 将选择的值传递给online
      this.$emit("commSelector-val", this.values);
    }
  }
};
</script>

<style>
</style>