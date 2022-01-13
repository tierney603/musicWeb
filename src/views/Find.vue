
<template>
  <div class="Find">
    <carousel></carousel>
    <findModule></findModule>
    <playList></playList>
  </div>
</template>

<script>
import carousel from "@/components/Find/carousel.vue";
import findModule from "@/components/Find/findModule.vue";
import playList from "@/components/Find/playList.vue";

export default {
  name: "Find",
  components: {
    carousel,
    findModule,
    playList,
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="less">
.Find {
  position: relative;
  top: 50px;
}
// pc端
.PcBox {
}

// 移动端
.phoneBox {
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
