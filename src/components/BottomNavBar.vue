
<template>
  <div class="BottomNavBar">
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
            <!-- 进度条 -->
            <transition name="MusicPage-fade"> </transition>

            <BottomMusicBox></BottomMusicBox>

            <div class="minBox">
              <div class="bottomNavbar">
                <div
                  class="tabs_item"
                  v-for="(i, index) in BottomNavbarList"
                  :key="index"
                >
                  <router-link :to="i.to">
                    <span class="iconfont">{{ i.iconfont }}</span>
                    <div class="tabs_font">{{ i.title }}</div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/display.css";
import BottomMusicBox from "./BottomMusicBox.vue";

export default {
  name: "BottomNavBar",
  components: {
    BottomMusicBox,
  },
  data() {
    return {
      BottomNavbarList: [
        { title: "发现", iconfont: "\ue60b", to: "/find" },
        { title: "播客", iconfont: "\ue693", to: "/podcast" },
        { title: "我的", iconfont: "\ue615", to: "/mind" },
        { title: "关注", iconfont: "\ue609", to: "/attention" },
        { title: "云村", iconfont: "\ue627", to: "/coludVillaged" },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped lang="less">
// pc端
.PcBox {
}

// 移动端
.phoneBox {
  .minBox {
    width: 100vw;

    position: fixed;
    bottom: 0;

    .bottomNavbar {
      width: 100%;
      height: 70px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      z-index: 10;
      background-color: rgb(230, 230, 230);

      .tabs_item {
        .tabs_font {
          color: white;
          font-size: 12px;
          text-align: center;
          color: #777777;
        }
        .iconfont {
          font-size: 30px;
          color: #777777;
        }
        img {
          width: 40px;
          height: 40px;
        }
      }
      .tabs_circle {
        width: 25%;
        height: 30px;
        background-color: #999;
        position: absolute;
        bottom: 70px;
        left: 0;
        border-radius: 30px 30px 0px 0px;
        transition: left 0.5s;
      }
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
</style>
