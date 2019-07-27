<style>

</style>

<template>
    <div>
        <div>baz</div>
        <div>观察声明周期先后顺序</div>
    </div>
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
        console.log('baz before route enter');
        console.log('this?', this);
        next( (vm) =>{
            console.log('now this?', vm);
        })
    },
    beforeRouteLeave(to, from, next){
        console.log('baz before route leave');
        next();
    }
}
</script>

