<template>
  <div class="container">
    <el-row>
      <el-card shadow="hover">
        <!-- ////////////////////条件选择 -->
        <el-row style="margin-bottom: 10px;">
          <!-- 五个公用选择框（平台、系统、游戏、版本、渠道商） -->
          <common-selector
            :options="options"
            :commonSeleVals="commonSeleVals"
            v-on:commSelector-val="handleCommSele"
          ></common-selector>

          <el-col :span="4">
            <el-select v-model="valChannel" clearable placeholder="—— 全部 ——">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
        </el-row>

        <!-- /////////////////日期选择 -->
        <el-row>
          <!-- 对比日期 -->
          <el-col :span="4">
            <div class="block">
              <div class="demonstration">对比日期：</div>
              <el-date-picker
                v-model="timeValue.value"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
                @change="handleTimeSele"
                clearable
              ></el-date-picker>
            </div>
          </el-col>

          <!-- 比较日期1 -->
          <el-col :span="4">
            <div class="block">
              <div class="demonstration">比：</div>
              <el-date-picker
                v-model="timeValue.value2"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
                @change="handleTimeSele"
              ></el-date-picker>
            </div>
          </el-col>

          <!-- 比较日期2 -->
          <el-col :span="4">
            <div class="block">
              <div class="demonstration">比：</div>
              <el-date-picker
                v-model="timeValue.value3"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
                @change="handleTimeSele"
              ></el-date-picker>
            </div>
          </el-col>

          <!-- 实时数据--查询 -->
          <el-col :span="4">
            <el-button
              class="real-time-search"
              type="primary"
              icon="el-icon-search"
              plain
              @click="realTimeSearch_data"
            >搜索</el-button>
          </el-col>
        </el-row>
      </el-card>
    </el-row>

    <!-- ///////////////////统计图表 -->
    <el-row>
      <el-card shadow="hover">
        <ve-line :data="chartData" :extend="extend" width="100%" height="500px"></ve-line>
      </el-card>
    </el-row>
  </div>
</template>

<script>
// 引入公共选择器，即 系统、平台、游戏等
import commonSelector from "@/components/searchSelector/CommonSelector";
// 导入实时在线 混入文件
import online_mixin from "@/mixins/realTimeData/online";

export default {
  components: { commonSelector },
  mixins: [online_mixin]
};
</script>

<style scoped lang="less">
// /deep/ .block {
//   margin: 0 3px;
// }

.real-time-search {
  margin-top: 20px;
}
</style>