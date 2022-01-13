<template>
  <div class="setUp">
    <!-- pc端 -->
    <div class="pcBox">
      <el-row :gutter="10">
        <el-col class="hidden-sm-and-down"
          ><div class="grid-content bg-purple">
            <div class="minPcBox"></div></div
        ></el-col>
      </el-row>
    </div>

    <!-- 移动端-->
    <div class="phoneBox">
      <el-row :gutter="10">
        <el-col class="hidden-sm-and-up" style="margin: 0; padding: 0"
          ><div class="grid-content bg-purple">
            <transition name="minphoneBoxTransition">
              <div class="minphoneBox" v-show="this.$store.state.isSetUp">
                <div class="nonesetUp" @click="setUpShow(false)">
                  <div class="setUpBox" @click.stop="setUpShow(true)">
                    <!-- 头像框 -->
                    <div class="avatarBox">
                      <img src="../assets/8.jpg" class="avatar" alt="" />
                      <span>tiereny</span>
                      <hr />
                    </div>
                    <!-- 模块 -->
                    <div class="setUpModule"></div>
                  </div>
                </div>
              </div>
            </transition></div
        ></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/display.css";
export default {
  name: "setUp",
  methods: {
    setUpShow(i) {
      this.$store.commit("setUpShow", i);
      console.log(this.$store.state.isPlay);
    },
  },
};
</script>

<style scoped lang="less">
// pc端
.PcBox {
}

// 移动端
.minphoneBox {
  position: fixed;
  top: 0;
  width: 102vw;
  height: 100vh;
  display: flex;
  z-index: 11;

  .setUpBox {
    width: 80vw;
    height: 100%;
    background-color: rgb(240, 240, 240);
    border-radius: 0px 10px 10px 0px;
    padding: 10px;
    .avatarBox {
      .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 10px;
      }
      span {
        position: relative;
        top: -25px;
        font-size: 20px;
      }
    }
    .setUpModule {
      width: 98%;
      height: 100px;
      margin: 5px;
      background-color: rgb(255, 255, 255);
      border-radius: 5px;
    }
  }
  .nonesetUp {
    flex-grow: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }
}

/* 设置设置也动画出现 */
.minphoneBoxTransition-enter-active {
  transition: all 0.5s ease;
}
.minphoneBoxTransition-leave-active {
  transition: all 0.1s ease;
}
.minphoneBoxTransition-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-200px);
  opacity: 0;
}

// elementui

.grid-content {
  border-radius: 0px;
  min-height: 36px;
}
</style>
