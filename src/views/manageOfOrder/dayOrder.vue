<template>
  <div class="container">
    <el-row>
      <!-- 开始结束日期选择 -->
      <el-card shadow="hover">
        <el-row>
          <el-col :span="10">
            <span class="demonstration" style="margin-right: 10px;">选择开始结束日期</span>
            <el-date-picker
              v-model="value2"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" icon="el-icon-search" plain>搜索</el-button>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" icon="el-icon-document" plain>导出Excel</el-button>
          </el-col>
        </el-row>
      </el-card>

      <!-- 每日订单金额数据表格 -->
      <el-row>
        <el-card shadow="hover">
          <el-table stripe :data="tableData" style :default-sort = "{prop: ['name', 'date'], order: 'descending'}">
            <el-table-column prop="name" label="用户ID" align="center" sortable></el-table-column>
            <el-table-column prop="date" label="充值日期" align="center" width="150" sortable></el-table-column>
            <el-table-column prop="province" label="金额（元）" align="center"></el-table-column>
            <el-table-column prop="city" label="支付类型" align="center"></el-table-column>
            <el-table-column prop="address" label="游戏ID" align="center"></el-table-column>
            <el-table-column label="操作" align="center">
              <el-row>
                <el-col :span="12">
                  <el-button type="primary" icon="el-icon-edit-outline" plain>编辑</el-button>
                </el-col>
                <el-col :span="12">
                  <el-button type="danger" icon="el-icon-delete" plain>删除</el-button>
                </el-col>
              </el-row>
            </el-table-column>
          </el-table>
        </el-card>
      </el-row>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 日期选择器的数据
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value2: "",

      // 登录数据表格数据源
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "699",
          city: "支付宝",
          address: "1368754"
        },
        {
          date: "2016-05-02",
          name: "刘小龙",
          province: "699",
          city: "支付宝",
          address: "1368754"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "699",
          city: "支付宝",
          address: "1368754"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "699",
          city: "支付宝",
          address: "1368754"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "699",
          city: "支付宝",
          address: "1368754"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "699",
          city: "支付宝",
          address: "1368754"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "699",
          city: "支付宝",
          address: "1368754"
        }
      ]
    };
  }
};
</script>

<style>
</style>