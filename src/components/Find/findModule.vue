
<template>
  <div class="findModule">
    <!-- pc端 -->
    <div class="pcBox">
      <el-row :gutter="10">
        <el-col class="hidden-sm-and-down"
          ><div class="grid-content bg-purple">
            <div class="PcBox"></div></div
        ></el-col>
      </el-row>
    </div>

    <!-- 移动端-->
    <div class="phoneBox">
      <el-row :gutter="10">
        <el-col class="hidden-sm-and-up" style="margin: 0; padding: 0"
          ><div class="grid-content bg-purple">
            <div class="phoneBox">
              <div class="items" v-for="(i, index) in findModule" :key="index">
                <!-- <img src="@/assets/logo.png" alt="" class="item_icon" /> -->
                <span class="iconfont">{{ i.iconfont }}</span>
                <br />
                <span class="item_font">{{ i.title }}</span>
              </div>
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
  name: "findModule",
  data() {
    return {
      findModule: [
        { iconfont: "\ue73d", title: "每日推荐" },
        { iconfont: "\ue603", title: "私人FM" },
        { iconfont: "\uea0f", title: "歌单" },
        { iconfont: "\ue66e", title: "排行榜" },
        { iconfont: "\ue6e2", title: "直播" },
        { iconfont: "\uea0f", title: "专辑" },
        { iconfont: "\ue6b5", title: "游戏专区" },
      ],
    };
  },
};
</script>

<style scoped lang="less">
.findModule {
  width: 100vw;
  // background-color: rgb(71, 71, 71);
}
// pc端
.PcBox {
}

// 移动端
.phoneBox {
  width: auto;
  overflow-y: scroll;
  width: 130%;
  background-color: #fff;
  .items {
    position: relative;
    top: 10px;
    width: 10%;
    float: left;
    margin: 10px 1%;
    text-align: center;
    line-height: 30px;
    .item_font {
      font-size: 15px;
    }
    .iconfont {
      background-color: rgb(255, 206, 206);
      padding: 10px;
      border-radius: 50%;
      font-size: 25px;
      color: rgb(255, 47, 47);
    }
  }
}

.el-col {
  border-radius: 0px;
}
.bg-purple-dark {
  // background: #99a9bf;
}
.bg-purple {
  // background: #d3dce6;
}
.bg-purple-light {
  // background: #e5e9f2;
}
.grid-content {
  border-radius: 0px;
  min-height: 36px;
}
</style>
