import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //状态值
  state: {
    count:0,
    name:'ruxue',
    age:18,
    sex:'man'
  },
  //修改状态
  mutations: {
    increment(state){
      state.count++
    },
    setAge(state,value){
      state.age = value
    }
  },
  actions: {
  },
  modules: {
  }
})
