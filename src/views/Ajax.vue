<template>
  <div class="ajax">
      <h3>name:{{name}}</h3>
      <button @click="getName">获取+</button>
  </div>
</template>

<script>
import {get} from '@/http/request'
export default {
    data(){
        return {
            name:''
        }
    },
    methods:{
        getName(){
           get('/data.json').then(res=>{
               console.log(res);
           })

            //非跨域
            // axios.get('https://cdn.liyanhui.com/data.json').then(res=>{
            //     this.name = res.data[0].username
            // })
        }
    }
}
</script>

<style>

</style>