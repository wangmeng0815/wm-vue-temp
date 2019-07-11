<style scoped>
.test{
    color: red;
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
import helloWorld from '@/components/helloWorld';
import customImage from '@/components/customImage';

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
