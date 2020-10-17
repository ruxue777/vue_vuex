<template>
  <div class="preson">
      <ul>
          <li>name:{{name}}</li>
          <li>sex:{{sex}} || {{getSex}}</li>
          <li>age:{{age}}</li>
      </ul>
      <input type="text" @input="setAge" :value="age"> {{test}}
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex';
export default {
    //数组方法
    //computed : mapState(['name','sex','age']),

    //对象方法
    computed : {
        test(){
            return 'test'
        },
        ...mapGetters(['getSex']),
        ...mapState({
            name: state => state.name,
            sex : 'sex',
            age(state){
                return state.age
            }
        })
    },
    methods:{
        setAge(e){
            this.$store.commit('setAge',e.target.value)
        }
    }
    // computed:{
    //     name(){
    //         return this.$store.state.name
    //     },
    //     sex(){
    //         return this.$store.state.sex
    //     },
    //     age:{
    //         get(){
    //             return this.$store.state.age
    //         },
    //         set(value){
    //             this.$store.commit('setAge',value)
    //         }
    //     }
    // }
}
</script>

<style>

</style>