<style>

</style>

<template>
    <div>
        <div>
            <label for="">编号</label>
            <input type="number" v-model="id">
        </div>
        <div>
            <label for="">标题</label>
            <input type="text" v-model="title">
        </div>
        <div>
            <label for="">内容</label>
            <input type="text" v-model="content">
        </div>
        <div>
            <button @click="add">添加</button>
        </div>
    </div>
</template>

<script>
import { safeRequest } from '../../utils';
export default {
    data(){
        return {
            id: '',
            title: '',
            content: ''
        }
    },
    mounted(){

    },
    methods: {
        add(){
            const {id, title, content } = this;
            safeRequest({
                method: 'post',
                url: '/api/test/add',
                data: {
                    id,
                    title,
                    content
                }
            }).then( resp => {
                if(resp.code == 0){
                    this.$router.push({ path: '/test/list'})
                }
            })
        }
    }
}
</script>
