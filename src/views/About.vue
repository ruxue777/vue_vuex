<template>
  <div class="about">
    <h1>This is an about page 共享：{{$store.state.count}}</h1>
    <button @click="increment">共享+</button>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  methods:{
    increment(){
      this.$store.commit('increment')
    }
  }
}
</script>
