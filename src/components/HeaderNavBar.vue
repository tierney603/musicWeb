<template>
  <div class="navbar">
    <!-- pc端导航栏 -->
    <div class="pcNavbar">
      <el-row :gutter="10">
        <el-col class="hidden-sm-and-down"
          ><div class="grid-content bg-purple">
            <h1>pc</h1>
          </div></el-col
        >
      </el-row>
    </div>

    <!-- 移动端导航栏 -->
    <div class="phoneNavbar">
      <el-row :gutter="10">
        <el-col class="hidden-sm-and-up" style="margin: 0px; padding: 0"
          ><div class="grid-content bg-purple">
            <div class="phoneNavbarBox">
              <!-- 头部导航栏语音键 -->
              <span class="iconfont phoneNavbar_icon">&#xe610;</span>

              <div class="searchIptBox">
                <span class="iconfont searchIptIcon">&#xe651;</span>

                <input type="text" class="searchIpt" />
              </div>
              <!-- 头部导航栏设置键  -->
              <span class="iconfont phoneNavbar_icon" @click="setUpShow(true)"
                >&#xe660;</span
              >
            </div>
          </div></el-col
        >
      </el-row>
    </div>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/display.css";
export default {
  name: "Navbar",
  methods: {
    setUpShow(i) {
      this.$store.commit("setUpShow", i);
      console.log(this.$store.state.isPlay);
    },
  },
};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
// 手机端
.phoneNavbar {
  width: 100%;
  position: fixed;
  background-color: #fff;
  z-index: 10;
  .phoneNavbarBox {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px 0;

    .phoneNavbar_icon {
      font-size: 20px;
    }

    // 搜索框
    .searchIptBox {
      width: 70%;
      position: relative;
      // 搜索框里的小logo
      .searchIptIcon {
        position: absolute;
        left: 10px;
        top: 13px;
      }
      .searchIpt {
        width: 100%;
        margin: 5px 0px;
        line-height: 30px;
        border-radius: 20px;
        border: none;
        outline: 0;
        text-indent: 30px;
      }
    }
  }
}
.el-col {
  border-radius: 0px;
}
.bg-purple-dark {
  background-color: rgb(240, 240, 240);
}
.bg-purple {
  background-color: rgb(240, 240, 240);
}
.bg-purple-light {
  background-color: rgb(240, 240, 240);
}
.grid-content {
  border-radius: 0px;
  min-height: 36px;
}
</style>
