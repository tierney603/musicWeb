
<template>
  <div class="BottomControl">
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
        <el-col class="hidden-sm-and-up"
          ><div class="grid-content bg-purple">
            <div class="minBottomControl">
              <audio controls ref="audioPlayer" @timeupdate="timeupdate">
                <source src="../assets/music/forgot.mp3" type="audio/mpeg" />
                <!-- @play="changeState(true)" @pause="changeState(false)" -->
              </audio>

              <!-- 盒子 -->
              <div class="minBottomControl" @click="isMusicPage(true)">
                <div class="isStop">
                  <span
                    @click.stop="changePlayState(true)"
                    v-show="!this.$store.state.isPlay"
                    class="iconfont"
                    >&#xe87c;</span
                  >
                  <span
                    @click.stop="changePlayState(false)"
                    v-show="this.$store.state.isPlay"
                    class="iconfont"
                    >&#xe618;</span
                  >
                </div>

                <span>forgot/titer</span>
                <!-- 进度条 -->

                <div class="block">
                  <!-- <span class="demonstration">默认</span> -->
                  <!-- <el-slider
                    v-model="timeProgress"
                    :show-tooltip="false"
                    @change="changeProgress"
                  ></el-slider> -->
                  <el-progress
                    class="isPlay"
                    type="circle"
                    :percentage="timeProgress"
                    width="40"
                    stroke-width="2"
                    color="#444"
                    status="exception"
                  ></el-progress>
                </div>
              </div>
            </div></div
        ></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/display.css";
export default {
  name: "BottomControl",
  data() {
    return {
      // 音乐进度条位置
      progressBar: 0,
      // 当前播放时间
      currentTime: 0,
      // 总时长
      duration: 190,
      //音乐进度条位置
      timeProgress: 0,
    };
  },
  methods: {
    // 是否出现音乐界面
    isMusicPage(i) {
      this.$store.commit("isMusicPage", i);
      console.log("isMusicPage");
      // console.log(this.$store.state.isMusicBox);
    },
    // 改变进度条
    changeProgress(e) {
      this.currentTime = Math.floor((e * this.duration) / 100);
      this.$refs.audioPlayer.currentTime = this.currentTime;
      // console.log(e);
      // console.log(this.currentTime);
    },
    // 时间更新函数
    timeupdate() {
      // 获取当前时间
      let time = this.$refs.audioPlayer.currentTime;
      // 总时长
      this.duration = this.$refs.audioPlayer.duration;
      //  计算进度条
      this.timeProgress = Math.floor((time / this.duration) * 100);
      this.$store.commit("updateMusicState", this.timeProgress);
    },
    // 点击播放键的回调
    changePlayState(i) {
      i ? this.playMusic(i) : this.pauseMusic(i);
    },
    // 播放音乐的函数
    playMusic(i) {
      this.$refs.audioPlayer.play();
      this.$store.state.isPlay = i;
      //   alert("播放");
    },
    // 暂停音乐的函数
    pauseMusic(i) {
      this.$refs.audioPlayer.pause();
      this.$store.state.isPlay = i;
      console.log(this.$refs.audioPlayer.currentTime);
      console.log(this.$refs.audioPlayer.duration);
      console.log(this.$refs);
      console.log(this.progressBar);

      //   alert("暂停");
    },
  },
  mounted() {},
  computed: {},
};
</script>

<style scoped lang="less">
.BottomControl {
}
// pc端
.PcBox {
}

// 移动端

.phoneBox {
  .minBottomControl {
    position: fixed;
    bottom: 40px;
    background-color: rgb(230, 230, 230);
    // 播放暂停键
    .isPlay {
      position: relative;
      bottom: 30px;
      left: calc(80vw);
    }
    .isStop {
      position: relative;
      left: 83.2vw;

      top: 18px;
      z-index: 1;
      background-color: rgb(240, 240, 240);
      width: 15px;
      color: #888;
      .iconfont {
        font-size: 18px;
      }
    }
  }
  audio {
    display: none;
  }
}

// element 响应式布局
.el-col {
  border-radius: 0px;
}

.grid-content {
  border-radius: 0px;
  min-height: 36px;
}
// element 进度条
.block {
  width: 100vw;
}
</style>
