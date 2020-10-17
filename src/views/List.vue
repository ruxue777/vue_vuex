<template>
    <div class="list">
        <h3>{{$store.state.list.name}}</h3>
        <h3>{{$store.state.name}}</h3>
        <button @click="setName">获取+</button>
    </div>
</template>

<script>
export default {
    methods:{
        setName(){
            this.$store.dispatch('setName')
        }
    }
}
</script>

<style>

</style>