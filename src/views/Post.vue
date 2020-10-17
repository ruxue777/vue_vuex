<template>
  <div class="post">
      <h3>{{$store.state.info}}</h3>
      <button @click="setInfo">获取+</button>
  </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        setInfo(){
            this.$store.dispatch('setInfo')
        }
    }
}
</script>

<style>

</style>