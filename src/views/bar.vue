<style scoped>
.test{
    color: red;
}
</style>

<template>
    <div>
        <div class="test">this is bar（parent）</div>
        <helloWorld />
    </div>
</template>

<script>
import helloWorld from '@/components/helloWorld';

export default {
    components: {
        helloWorld,
    },
    data(){
        return {

        }
    }
}
</script>
