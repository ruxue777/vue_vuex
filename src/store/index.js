import Vue from 'vue'
import Vuex from 'vuex'
import list from './module/list'

Vue.use(Vuex)

export default new Vuex.Store({
  //状态值
  state: {
    count:0,
    name:'ruxue',
    age:18,
    sex:'man',
    info :'a'
  },
  getters:{
    getSex(state){
      return `【${state.sex}】`
    }
  },
  //修改状态
  mutations: {
    increment(state){
      state.count++
    },
    setAge(state,value){
      state.age = value
    },
    setInfo(state,value){
      state.info = value
    }
  },
  actions: {
    setInfo(context){
      setTimeout(()=>{
        context.commit('setInfo','异步信息')
      },1000)
    }
  },
  modules: {
    list
  }
})
