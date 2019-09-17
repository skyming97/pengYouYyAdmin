<template>
  <div class="container">
    <el-row>
      <!-- ////////////////////条件选择 -->
      <el-col :span="4">
        <el-select v-model="value" clearable placeholder="—— 系统 ——">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>

      <el-col :span="4">
        <el-select v-model="value" clearable placeholder="—— 平台 ——">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>

      <el-col :span="4">
        <el-select v-model="value" clearable placeholder="—— 游戏 ——">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>

      <el-col :span="4">
        <el-select v-model="value" clearable placeholder="—— 版本 ——">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>

      <el-col :span="4">
        <el-select v-model="value" clearable placeholder="—— 渠道商 ——">
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
          <span class="demonstration">
            <strong>对比日期：</strong>
          </span>
          <el-date-picker
            v-model="timeValue.value"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </div>
      </el-col>

      <!-- 比较日期1 -->
      <el-col :span="4">
        <div class="block">
          <span class="demonstration">
            <strong>比：</strong>
          </span>
          <el-date-picker
            v-model="timeValue.value2"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </div>
      </el-col>

      <!-- 比较日期2 -->
      <el-col :span="4">
        <div class="block">
          <span class="demonstration">
            <strong>比：</strong>
          </span>
          <el-date-picker
            v-model="timeValue.value3"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </div>
      </el-col>

      <!-- 比较日期3 -->
      <el-col :span="4">
        <div class="block">
          <span class="demonstration">
            <strong>比：</strong>
          </span>
          <el-date-picker
            v-model="timeValue.value4"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </div>
      </el-col>

      <!-- 比较日期4 -->
      <el-col :span="4">
        <div class="block">
          <span class="demonstration">
            <strong>比：</strong>
          </span>
          <el-date-picker
            v-model="timeValue.value5"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 条件选择的数据
      options: [
        {
          value: " 1",
          label: "黄金糕"
        },
        {
          value: " 2",
          label: "双皮奶"
        },
        {
          value: " 3",
          label: "蚵仔煎"
        },
        {
          value: " 4",
          label: "龙须面"
        },
        {
          value: " 5",
          label: "北京烤鸭"
        }
      ],
      value: "",

      // 选择日期的值
      timeValue: {
        value: "",
        value2: "",
        value3: "",
        value4: "",
        value5: ""
      },

      pickerOptions: {
        // 时间值列表
        timeValueLists: [],
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        // 快捷选择
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      }
    };
  },

  methods: {}
};
</script>

<style scoped>
/deep/ .block {
  margin: 0 3px;
}

/deep/ .el-row {
  margin-bottom: 10px;
}
</style>