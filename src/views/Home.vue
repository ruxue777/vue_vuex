<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>共享：{{$store.state.count}}</p>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
