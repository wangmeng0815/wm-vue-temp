<style>
#app{
    font-family: '';
    color: red;
}
</style>

<template>
    <div>
        <div>Hello world</div>
        <router-link to='/foo'>Go to Foo</router-link>
        <router-link to='/bar'>Go to Bar</router-link>
        <router-link to='/test'>Test For Server</router-link>
        <router-view />
    </div>
</template>

<script>
import './assets/styles/reset.css';
export default {
    data(){
        return {
            test: 'this is app'
        }
    }
}
</script>
