
<template>
  <div class="carousel">
    <!-- pc端-->
    <div class="pcBox">
      <el-row :gutter="10">
        <el-col class="hidden-sm-and-down"
          ><div class="grid-content bg-purple">
            <div class="PcBox"></div></div
        ></el-col>
      </el-row>
    </div>

    <!-- 移动端 -->
    <div class="phoneBox">
      <el-row :gutter="10">
        <el-col class="hidden-sm-and-up" style="margin: 0; padding: 0"
          ><div class="grid-content bg-purple">
            <div class="phoneBox">
              <div class="carouselBox">
                <el-carousel
                  :interval="5000"
                  trigger="hover"
                  arrow="never"
                  height="150px"
                >
                  <el-carousel-item v-for="item in 4" :key="item">
                    <img src="@/assets/8.jpg" alt="" />
                    <h3>{{ item }}</h3>
                  </el-carousel-item>
                </el-carousel>
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
  name: "carousel",
  data() {
    return {
      carouselImgList: [],
    };
  },
};
</script>

<style scoped lang="less">
// pc端
.PcBox {
}

// 移动端
.phoneBox {
  padding: 5px 10px;
  // 走马灯
  .el-carousel__item h3 {
    background-color: rgb(240, 240, 240);
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel {
    border-radius: 12px;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: rgb(240, 240, 240);
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: rgb(240, 240, 240);
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
