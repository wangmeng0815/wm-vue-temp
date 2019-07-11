<style>

</style>

<template>
    <div>Hello World(Component)</div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    beforeCreate(){
        console.log('component child beforeCreate')
    },
    created(){
        console.log('component child created');
    },
    beforeMount(){
        console.log('component child beforeMount');
    },
    mounted(){
        console.log('component child mounted');
    },
    beforeUpdate(){
        console.log('component child beforeUpdate');
    },
    updated(){
        console.log('component child updated');
    }
}
</script>
