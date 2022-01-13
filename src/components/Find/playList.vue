
<template>
  <div class="playList">
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
        <el-col class="hidden-sm-and-up">
          <div class="grid-content bg-purple">
            <div class="phoneBox">
              <div class="playListBox">
                <div class="items" v-for="i in 6" :key="i">
                  <img src="@/assets/8.jpg" alt="" class="item_img" />
                  <br />
                  <span class="item_font">每日推荐</span>
                </div>
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
  name: "playList",
};
</script>

<style scoped lang="less">
.playList {
  width: 100vw;
  overflow: hidden;
}
// pc端
.PcBox {
}

// 移动端

.phoneBox {
  height: 170px;
  overflow-y: hidden;
  overflow-x: scroll;

  width: 150%;
  .playListBox {
    .items {
      width: 12%;
      height: 100px;
      float: left;
      margin: 5px;
      .item_img {
        width: 100%;
        height: 100%;
      }
      .item_font {
      }
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
