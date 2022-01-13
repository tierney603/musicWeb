import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 是否播放音乐
    isPlay: false,
    // 进度条
    progressBar: 0,
    // 当前播放时长
    currentTime: 0,
    // 是否打开设置界面
    isSetUp: false,
    // 音乐页面
    isMusicPage: false
  },
  mutations: {
    // 是否出现音乐界面
    isMusicPage(state, i) {
      state.isMusicPage = i
    },
    // 接收音乐状态
    updateMusicState(state, progressBar) {
      state.progressBar = progressBar

    },
    // 进度条
    updateCurrentTime(state, currentTime) {
      state.currentTime = currentTime;
      console.log(currentTime)
    },
    // 设置setup是否出现
    setUpShow(state, isShow) {
      state.isSetUp = isShow;
      console.log(state, isShow)
    },

  },
  actions: {
  },
  modules: {
  }
})
