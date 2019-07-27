<template>
    <ul>
        <li v-for="item in listData" :key="item.id">
            <span>{{item.id}}-{{item.title}}-{{item.content}}</span>
            <span><button @click="remove(item)">删除</button></span>
        </li>
    </ul>
</template>

<script>
import { safeRequest } from '@/utils';
import bus from '@/utils/eventBus';

export default {
    props: {
        listData: {
            type: Array,
            default: []
        }
    },
    data(){
        return {
        }
    },
    methods: {
        remove(_item){
            const { id } = _item;
            safeRequest({
                method: 'post',
                url: '/test/delete',
                data:{
                    id
                }
            }).then( res => {
                if(res.code === 0) {
                    bus.$emit('query', res);
                }
            })
        },
    },
    beforeCreate(){
        console.log('child beforeCreate')
    },
    created(){
        console.log('child created')
    },
    beforeMount(){
        console.log('child beforeMount')
    },
    mounted(){
        console.log('child mounted')
    },
    beforeUpdate(){
        console.log('child beforeUpdate');
    },
    updated(){
        console.log('child updated')
    }
}
</script>

<style>

</style>

