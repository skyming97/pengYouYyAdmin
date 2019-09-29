// 接口统一访问入口
import api from "@/api/index.js";

const onlineData = {
  data() {
    // v-charts相关 -- 对已配置好的内部属性进行单独的设置
    // this.extend = {
    //   series: {
    //     label: {
    //       normal: {
    //         show: false
    //       }
    //     }
    //   }
    // };
    // v-charts y轴配置
    this.chartSettings = {
      yAxisType: ['normal'],
      yAxisName: ['访问人数(人)']
    }
    return {
      // v-charts数据源
      chartData: {},

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
      // 条件选择器的接收值value
      commonSeleVals: {
        value: "",
        value2: "",
        value3: "",
        value4: "",
        value5: ""
      },
      valChannel: "",

      // 选择日期的值
      timeValue: {
        value: "",
        value2: "",
        value3: "",
        value4: "",
        value5: ""
      },

      // 时间选择器配置项
      pickerOptions: {
        // 时间值列表
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

  methods: {
    // 点击搜索
    realTimeSearch_data() {
      console.log(111);
    },

    // 接收CommonSelector传递的选择器选择的值
    handleCommSele(val) {
      console.log(val);
    },

    // 时间选择器处理函数
    handleTimeSele(time) {
      if (!time) return;
      let timeVals = this.timeValue;
      let timeValArr = [];
      let isDuplicate = false;

      // 将对象转换成数组
      for (const k in timeVals) {
        if (timeVals[k]) timeValArr.push(timeVals[k]);
      }
      // 遍历数组，如果有重复项则打开开关isDulpicate
      for (var i = 0; i < timeValArr.length; i++) {
        for (var j = 0; j < i; j++) {
          console.log(timeValArr[i], timeValArr[j]);

          isDuplicate =
            timeValArr[j].getTime() == timeValArr[i].getTime() ? true : false;
          if (isDuplicate) break;
        }
      }
      if (isDuplicate)
        this.$notify.warning({
          title: "提示",
          message: "您选择的日期有重复！"
        });
    }
  },

  created() {
    // 请求实时在线测试接口
    api.realTime.online().then(res => {
      console.log(res.chartData)
        this.chartData = res.chartData
    })
  },


}
export default onlineData