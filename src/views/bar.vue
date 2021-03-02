<style scoped>
.test{
    color: red;
    border-radius: 10px;
    display: flex;
}
</style>

<template>
    <div>
        <div class="test">this is bar（parent）</div>
        <helloWorld />
        <customImage />
    </div>
</template>

<script>
// import helloWorld from '@/components/helloWorld';
import customImage from '@/components/customImage';
const helloWorld = () => import(/* webpackChunkName: "helloWorld" */'@/components/helloWorld');
export default {
    components: {
        helloWorld,
        customImage
    },
    data(){
        return {

        }
    }
}
</script>
