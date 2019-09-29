<template>
  <div class="container">
    <el-row>
      <el-card shadow="hover">
        <!-- ////////////////////条件选择 -->
        <el-row style="margin-bottom: 10px;">
          <!-- 五个公用选择框（平台、系统、游戏、版本、渠道商） -->
          <common-selector :options="options" :value="value"></common-selector>
        </el-row>
        <!-- 开始结束日期选择 -->
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
          <el-col :span="1">
            <el-button type="primary" icon="el-icon-document" plain @click="exportExcel">导出Excel</el-button>
          </el-col>
        </el-row>
      </el-card>

      <el-card shadow="hover">
        <!-- 登录数据表格 -->
        <el-row>
          <el-table class="login-tbl" stripe :data="tableData" max-height="480" :default-sort = "{prop: ['name', 'date'], order: 'descending'}">
            <el-table-column prop="date" label="日期" align="center" sortable></el-table-column>
            <el-table-column label="配送信息" align="center">
              <el-table-column prop="name" label="姓名" align="center"></el-table-column>
              <el-table-column label="地址" align="center">
                <el-table-column prop="province" label="省份" align="center"></el-table-column>
                <el-table-column prop="city" label="市区" align="center"></el-table-column>
                <el-table-column prop="address" label="地址" align="center"></el-table-column>
                <el-table-column prop="zip" label="邮编" align="center"></el-table-column>
              </el-table-column>
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
            </el-table-column>
          </el-table>
        </el-row>
      </el-card>
    </el-row>
  </div>
</template>

<script>
// 引入公共选择器组件，即 系统、平台、游戏等
import commonSelector from "@/components/searchSelector/CommonSelector";
// 导入格式化时间函数
import { transTime } from "@/utils/transTime";

export default {
  components: { commonSelector },
  data() {
    return {
      loading: true,
      // 导出表格--默认数据
      DefaultData: {
        exportExcelMax: 10 // 限制导出总数
      },
      // 数据条数
      totals: 8, // 请求到数据后赋值

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
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ]
    };
  },

  methods: {
    exportExcel() {
      this.exportTable();
    },

    /**
     * excel导出
     */
    exportTable() {
      // this.DefaultData.exportExcelMax限制一下导出的总条数
      if (this.totals <= this.DefaultData.exportExcelMax) {
        this.$confirm(
          "确定要导出当前 <strong>" + this.totals + "</strong> 条数据？",
          "提示",
          {
            type: 'warning',
            dangerouslyUseHTMLString: true,
            confirmButtonText: "确定",
            cancelButtonText: "取消"
          }
        )
          .then(() => {
            // 调用导出数据方法
            this.getExpportData();
          })
          .catch(() => {});
      } else {
        // 超出最大导出数限制
        this.$confirm(
          "当前要导出的<strong>" +
            this.totals +
            "</strong>条数据，数据量过大，不能一次导出！<br/>建议分时间段导出所需数据。",
          "提示",
          {
            dangerouslyUseHTMLString: true,
            showCancelButton: false
          }
        )
          .then(() => {})
          .catch(() => {});
      }
    },

    /**
     * 对导出数据格式处理
     */
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    },

    /**
     * 导出的列表数据
     */
    getExpportData: function() {
      const loading = this.$loading({
        lock: true,
        text: "数据导出中，请稍后",
        target: document.querySelector(".login-tbl")
      });     
      // const data = {
      //   phoneNo: this.formInline.phoneNo,
      //   userName: this.formInline.userName,
      //   amount: this.formInline.amount,
      //   fee: this.formInline.fee,
      //   currentPage: this.currentPage,
      //   pageSize: this.DefaultData.exportExcelMax
      // };
      // 这里封装了axios，根据自身情况修改即可
      // this.http(this.ApiSetting.orderExport, data).then(
      // res => {
      //     // handleDataList这里可以对导出的数据根据需求做下处理
      //     const handleDataList = res.data.list;
      const handleDataList = this.tableData;
      //     for (let i in res.data.list) {
      //       handleDataList[i].amount = res.data.list[i].amount * 100;
      //       handleDataList[i].fee = res.data.list[i].fee + "%";
      //     }
      //     // if (res.data.list.length > 0) {
      require.ensure([], () => {
        /* eslint-disable */
        // 这里的径路要修改正确
        const { export_json_to_excel } = require("@/vendor/Export2Excel");
        /* eslint-enable  */
        // 导出的表头
        const tHeader = ["日期", "姓名", "省份", "市区", "地址", "邮编"];
        // 导出表头要对应的数据
        // {
        //   date: "2016-05-03",
        //   name: "王小虎",
        //   province: "上海",
        //   city: "普陀区",
        //   address: "上海市普陀区金沙江路 1518 弄",
        //   zip: 200333
        // },
        const filterVal = [
          "date",
          "name",
          "province",
          "city",
          "address",
          "zip"
        ];
        // 如果对导出的数据没有可处理的需求，把下面的handleDataList换成res.data.list即可，删掉上面相应的代码
        const data = this.formatJson(filterVal, handleDataList);
        // this.DefaultData.formatLongDate.getNow()自己写的一个获取当前时间，方便查找导出后的文件。根据需求自行可处理。
        let curTime = transTime(new Date());

        export_json_to_excel(tHeader, data, "玩家登陆数据列表-" + curTime);
        loading.close();
        this.$notify({
          message: "导出成功",
          duration: 1500,
          type: "success"
        });
      });
      // } else {
      // this.$notify({
      //   message: "数据出錯，请联系管理员",
      //   duration: 2000,
      //   type: "warning"
      // });
      // }
    }
  }
  // error => {
  //   console.log(error);
  //   loading.close();
  // }
  // );
  // }
};
</script>

<style>
</style>