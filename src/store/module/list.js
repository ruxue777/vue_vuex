export default {
    state :{
        name :'no name'
    },

    getters :{
        getSex(state){
            return `【${state.sex}】`
          }
    },

    mutations: {
        setName(state,value){
            state.name = value
        }
    },
    
    actions: {
        setName(context){
          setTimeout(()=>{
            context.commit('setName','wan')
          },1000)
        }
    }
}