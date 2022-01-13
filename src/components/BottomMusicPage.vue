<template>
  <div class="BottomMusicBox">
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
            <transition name="isMusicPage">
              <div
                class="minphoneBox"
                v-show="this.$store.state.isMusicPage"
                ref="MusicPage"
              >
                <!-- 关闭键 -->
                <span class="iconfont close" @click="closeMusicPage(false)"
                  >&#xe87c;</span
                >
                <div class="box"></div>
                <!-- 播放暂停键 -->
                <div class="isStop">
                  <span
                    @click="changePlayState(true)"
                    v-show="!this.$store.state.isPlay"
                    class="iconfont"
                    >&#xe87c;</span
                  >
                  <span
                    @click="changePlayState(false)"
                    v-show="this.$store.state.isPlay"
                    class="iconfont"
                    >&#xe618;</span
                  >
                </div>
              </div>
            </transition>
          </div></el-col
        >
      </el-row>
    </div>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/display.css";
export default {
  name: "BottomMusicBox",
  data() {
    return {};
  },
  methods: {
    // 关闭音乐界面
    closeMusicPage(i) {
      this.$store.commit("isMusicPage", i);
      console.log(this.$store.state.isMusicPage);
      console.log(this.$refs.MusicPage);
    },
    // 点击播放键的回调
    changePlayState(i) {
      i ? this.playMusic(i) : this.pauseMusic(i);
      console.log(i);
    },
    // 播放音乐的函数
    playMusic() {
      this.$store.com;
    },

    // 暂停音乐的函数
    pauseMusic() {},
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
  width: 100vw;
  height: 100%;
  // background-color: rgba(207, 207, 207, 0.97);
  background-color: #fff;
  z-index: 12;
  .box {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  //   关闭
  .close {
    font-size: 30px;
  }
  // 播放暂停键
  .isPlay {
    position: relative;
    bottom: 75px;
    left: calc(50vw - 20px);
  }
  .isStop {
    position: relative;
    left: calc(50vw - 8px);
    top: 12px;
    z-index: 1;
    background-color: rgb(240, 240, 240);
    width: 15px;
    color: #888;
    // display: none;
    .iconfont {
      font-size: 18px;
    }
  }
}

.el-col {
  border-radius: 0px;
}

.grid-content {
  border-radius: 0px;
  min-height: 36px;
}

// vue动画

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.isMusicPage-enter-active {
  transition: all 0.5s;
}
.isMusicPage-leave-active {
  transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
}
.isMusicPage-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(500px);
  opacity: 0;
}
</style>
