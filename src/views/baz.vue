<style>

</style>

<template>
    <div>baz</div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    beforeCreate(){
        console.log('baz beforeCreate')
    },
    created(){
        console.log('baz created');
    },
    beforeMount(){
        console.log('baz beforeMount');
    },
    mounted(){
        console.log('baz mounted');
    },
    beforeRouteEnter(to, from, next){
        console.log('baz before router enter');
        console.log('this?', this);
        next( (vm) =>{
            console.log('now this?', vm);
        })
    },
    beforeRouteLeave(to, from, next){
        console.log('baz before router leave');
        next();
    }
}
</script>

