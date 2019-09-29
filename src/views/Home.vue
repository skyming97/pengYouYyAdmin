<template>
  <div class="home">
    <el-container>
      <!------------------------------------------start 头部 ----------------------------------->
      <el-header v-if="showHeaderAside">
        <!-- 头像   编辑 -->
        <div class="user-avatar" @click="handlerEditAvatar">
          <el-avatar shape="square" size="small" :src="showAvaImg"></el-avatar>
          <span class="avatar-uname">
            <strong>{{avatarForm.uName}}</strong> 您好！
          </span>
        </div>
        <!-- 头像  编辑的会话框 -->
        <el-dialog class="edit-uinfo-dialog" title="修改个人信息" :visible.sync="avatarDialogVisible">
          <el-form :model="avatarForm" :rules="avatarRules" ref="avatarForm">
            <el-form-item label="用户名" prop="uName" :label-width="formLabelWidth">
              <el-input v-model="avatarForm.uName" autocomplete="true"></el-input>
            </el-form-item>
            <el-form-item label="现密码" prop="psw" :label-width="formLabelWidth">
              <el-input type="password" v-model="avatarForm.psw" autocomplete="true"></el-input>
            </el-form-item>
            <el-form-item class="new-psw" label="新密码" prop="newPsw" :label-width="formLabelWidth">
              <el-input
                type="password"
                v-model="avatarForm.newPsw"
                autocomplete="true"
                @input="handlerNewPswIpt"
              ></el-input>
              <!-- 密码安全等级提示 -->
              <div class="safe-tip-box">
                <span v-if="avatarForm.levelPsw == 'weak'">弱</span>
                <span v-else-if="avatarForm.levelPsw == 'middle'" class="mid">中</span>
                <span v-else-if="avatarForm.levelPsw == 'strong'" class="stro">强</span>
                <span v-else class="stro-pro">安全到突破天际了</span>
              </div>
            </el-form-item>
            <el-form-item label="确认新密码" prop="reNewPsw" :label-width="formLabelWidth">
              <el-input type="password" v-model="avatarForm.reNewPsw" autocomplete="true"></el-input>
            </el-form-item>
            <!-- 头像 上传 -->
            <el-form-item label="上传/修改头像" :label-width="formLabelWidth">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="avatarForm.imageUrl" :src="avatarForm.imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="hanlerGiveup">取 消</el-button>
            <el-button type="primary" @click="handlerConfirm">确 定</el-button>
          </div>
        </el-dialog>

        <h2>朋游运营后台</h2>
        <div class="console">
          <!-- 退出系统 -->
          <el-tooltip class="item" effect="dark" content="退出" placement="bottom">
            <div class="exit el-icon-back" @click="openConfirmOfExit"></div>
          </el-tooltip>
          <!-- 切换系统 -->
          <el-dropdown>
            <div class="option el-icon-s-operation"></div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-plus">系统A</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus">系统B</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus-outline">系统C</el-dropdown-item>
              <el-dropdown-item icon="el-icon-check">系统D</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-check">系统E</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <!-- ------------------------------------------end 头部------------------------------ -->
      <!-- 显示/隐藏顶部header按钮 -->
      <div class="btn-showHide">
        <el-tooltip class="item" effect="dark" content="显示/隐藏 UI" placement="bottom">
          <div class="collapse el-icon-magic-stick" @click="showHeaderAside = !showHeaderAside"></div>
        </el-tooltip>
      </div>

      <el-container>
        <transition name="collapse">
          <!-- 侧边 -->
          <el-aside width="100px;" v-if="showHeaderAside">
            <!-- 导航栏 -->
            <head-nav :activeIndex="activeIndex" v-on:nav-selector="handleSelect"></head-nav>
          </el-aside>
        </transition>

        <!-- 主体内容 -->
        <el-main>
          <!-- 面包屑导航 -->
          <bread-crumb></bread-crumb>

          <transition name="slide-fade">
            <router-view />
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// 顶部导航栏
import headNav from "@/components/header/HeadNav";
// 面包屑导航
import breadCrumb from "@/components/header/BreadCrumb";

import { getData, setData } from "@/utils/localStorage.js";

window.onresize = function() {
  window.onload();
};

export default {
  components: { breadCrumb, headNav },

  data() {
    return {
      // 是否显示顶部header
      showHeaderAside: true,
      // 导航当前激活项
      activeIndex: "",
      // 导航路径名
      keyPath: "",
      // 头像会话框的显示隐藏
      avatarDialogVisible: false,
      formLabelWidth: "100px",
      // 左上角展示的头像
      showAvaImg:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      // 头像会话框表单信息
      avatarForm: {
        uName: "", // 用户名
        psw: "", // 现密码
        newPsw: "", // 新密码
        levelPsw: "weak", // 密码强弱等级
        reNewPsw: "", // 确认新密码
        imageUrl: "" // 头像预览路径
      },
      // 头像会话框验证规则
      avatarRules: {
        uName: [
          { required: true, message: "用户名尚未输入哦！", trigger: "blur" },
          { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" }
        ],
        psw: [
          { required: true, message: "现密码尚未输入哦！", trigger: "blur" },
          { min: 6, max: 20, message: "长度在 5 到 20 个字符", trigger: "blur" }
        ],
        newPsw: [
          { min: 6, max: 20, message: "长度在 5 到 20 个字符", trigger: "blur" }
        ],
        reNewPsw: [
          { min: 6, max: 20, message: "长度在 5 到 20 个字符", trigger: "blur" }
        ]
      }
    };
  },

  methods: {
    // 将点击的菜单项赋值给 激活项activeIndex
    handleSelect(key, keyPath) {
      this.activeIndex = key;
      this.keyPath = keyPath[1];
    },

    // 打开退出确认框
    openConfirmOfExit() {
      this.$confirm("此举将退出系统, 是否继续?", "温馨提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // 退出系统
          this.$router.push("/");
          this.$notify({
            type: "success",
            message: "退出成功!"
          });
        })
        .catch(() => {});
      //       const exitRes = await this.$confirm('此举将退出系统, 是否继续?', '温馨提示', {
      //   confirmButtonText: '确定',
      //   cancelButtonText: '取消',
      //   type: 'warning'
      // })
      // if (exitRes != 'confirm') return
      // this.$notify.success("退出成功！")
    },

    // 打开编辑个人资料会话框
    handlerEditAvatar() {
      // 设置用户名
      let uname = getData("uinfo");
      this.avatarForm.uName = uname;
      // this.avatarForm.psw =
      this.avatarDialogVisible = true;
    },

    // 头像上传成功
    handleAvatarSuccess(res, file) {
      this.avatarForm.imageUrl = URL.createObjectURL(file.raw);
    },
    // 头像上传前
    beforeAvatarUpload(file) {
      console.log(file);
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$notify.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$notify.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },

    // 点击头像会话框确定
    handlerConfirm() {
      // 触发验证规则
      this.$refs["avatarForm"].validate(valid => {
        if (!valid) return false;

        // 如果选取了照片则更新头像
        if (this.avatarForm.imageUrl)
          this.showAvaImg = this.avatarForm.imageUrl;
        if (this.avatarForm.newPsw != this.avatarForm.reNewPsw)
          return this.$notify.warning("两次输入密码不一致！");
        this.avatarDialogVisible = false;
        this.$notify.success("修改成功！");
      });
    },
    // 点击头像会话框取消
    hanlerGiveup(uName) {
      this.avatarDialogVisible = false;

      this.$refs["avatarForm"].resetFields();
      // 将用户信息表单置空
      let avaForm = this.avatarForm;
      for (const key in avaForm) {
        avaForm[key] = "";
      }
      console.log(uName);

      this.avatarForm.uName = getData("uinfo");
      // this.avatarForm.uName = "";
      // this.avatarForm.psw = "";
      // this.avatarForm.newPsw = "";
      // this.avatarForm.reNewPsw = "";
      // this.avatarForm.imageUrl = "";
    },

    // 检测输入新密码提示安全等级
    handlerNewPswIpt(val) {
      if (val.length <= 5) {
        this.avatarForm.levelPsw = "weak";
      } else if (val.length <= 10) {
        this.avatarForm.levelPsw = "middle";
      } else if (val.length <= 15) {
        this.avatarForm.levelPsw = "strong";
      } else {
        this.avatarForm.levelPsw = "strongpro";
      }
    }
  },

  created() {
    // 设置侧边栏的高度
    this.$nextTick(() => {
      window.onload();
    });

    // 设置用户名
    let uname = getData("uinfo");
    this.avatarForm.uName = uname;
  }
};

window.onload = function() {
  var htH = document.querySelector("html").offsetHeight,
    heaH = document.querySelector(".el-header").offsetHeight,
    con = document.querySelector(".home > .el-container .el-container"),
    targetH = htH - heaH;
  con.style.height = targetH + "px";
};
</script>

<style scoped lang="less">
/* 欢迎文本 */
/deep/ h1.welcome-txt {
  text-shadow: 5px 5px 15px rgba(75, 75, 75, 0.2);
  background: linear-gradient(left, rgb(250, 255, 113), rgba(43, 215, 211));
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  font-size: 36px;
}

// ----------------- elementui样式调整------------------------------
// container样式
// /deep/ .el-container {
//   height: 100%;
// }
// 侧边栏样式
/deep/ .el-aside {
  text-align-last: left;
  background-color: #ffffffb6;
  /* box-shadow: 2px 2px 2px rgba(75, 75, 75, 0.2); */
  // height: 100%;
  .el-submenu__icon-arrow {
    right: 5px;
  }
}

// main样式
// /deep/ .el-main {
// }

// 顶部样式
/deep/ .el-header {
  height: 50px !important;
  line-height: 50px;
  background: rgba(255, 255, 255, 0.219);
  box-shadow: 2px 2px 5px rgba(75, 75, 75, 0.2);
  .user-avatar {
    float: left;
    display: flex;
    align-items: center;
    height: 50px;
    margin-left: 5%;
    cursor: pointer;
    .avatar-uname {
      margin-left: 10px;
    }
  }
  // 编辑用户个人信息会话框
  .edit-uinfo-dialog {
    .new-psw {
      position: relative;

      .safe-tip-box {
        position: absolute;
        right: 3%;
        top: 50%;
        transform: translateY(-50%);
        span {
          display: inline-block;
          padding: 0 10px;
          line-height: 20px;
          font-size: 12px;
          color: #fff;
          border-radius: 3px;
          background-color: #ed4014;
        }
        span.mid {
          background-color: #ff9900;
        }
        span.stro {
          background-color: #19be6b;
        }
        span.stro-pro {
          background-color: #722ed1;
        }
      }
    }
  }
  h2 {
    display: inline-block;
    height: 50px;
  }
  div.console {
    font-size: 22px;
    float: right;
    height: 100%;
    margin-right: 35px;
    div.exit,
    div.option,
    div.collapse {
      display: inline-block;
      padding: 0 10px;
      cursor: pointer;
      color: teal;
      font-size: 22px;
    }
  }
  // elementUI avator uploader 样式
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: teal;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}

// 显示/隐藏 按钮
.btn-showHide {
  position: fixed;
  font-size: 22px;
  right: 25px;
  top: 13px;
  z-index: 999;
  cursor: pointer;
}

// 卡片样式
/deep/ .el-card {
  background-color: #ffffffb6 !important;
  margin-bottom: 10px;
  /deep/ .el-card__body {
    padding: 10px;
  }
}

/* 日期选择器样式 */
/deep/ .el-date-editor.el-input {
  width: 200px;
}
// ----------------- elementui样式调整------------------------------

// 顶部header展开/收起 动画
.collapse-enter-active {
  transition: all 0.3s ease;
}
.collapse-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.collapse-enter, .collapse-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-10px);
  opacity: 0;
}

/* 切入切出 动画 */
.slide-fade {
  position: absolute;
  left: 0;
  right: 0;
}
.slide-fade-enter-active {
  transition: all 0.6s ease;
}
.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(2, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  left: 0;
  right: 0;
  transform: translateY(50px);
  opacity: 0;
}
</style>
