<style>

</style>

<template>
    <div>
        <div>
            组件内调用vuex 
        </div>
        <div>
            <span>id -> </span>
            <label for="">{{id}}</label>
            <span>title -> </span>
            <label for="">{{title}}</label>
            <span>content -> </span>
            <label for="">{{content}}</label>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
const NS = 'test';
export default {
    data(){
        return {
            
        }
    },
    computed: {
        ...mapState(`${NS}`, {
            listData: state => state.json_data,
            id: state => state.queryForm.id,
            title: state => state.queryForm.title,
            content: state => state.queryForm.content
        })
    }
}
</script>
