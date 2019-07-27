<style>

</style>

<template>
    <div>
        <router-link to='/foo/baz'>Go to Baz by child</router-link>
        <router-link to='/baz'>Go to Baz by root</router-link>
        <router-view />
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    beforeCreate(){
        console.log('foo beforeCreate');
    },
    created(){
        console.log('foo created');
    },
    beforeMount(){
        console.log('foo beforeMount');
    },
    mounted(){
        console.log('foo mounted');
    },
    // beforeRouteEnter(to, from, next){
    //     console.log('foo before router enter');
    //     console.log('this?', this);
    //     next( (vm) =>{
    //         console.log('now this?', vm);
    //     })
    // },
    // beforeRouteUpdate(to, from, next){
    //     console.log('foo before router update');
    //     console.log('this?', this);
    //     next();
    // }
}
</script>
