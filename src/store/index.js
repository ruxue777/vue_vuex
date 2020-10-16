import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //状态值
  state: {
    count:0
  },
  //修改状态
  mutations: {
    increment(state){
      state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})
