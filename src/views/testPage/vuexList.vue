<style>

</style>

<template>
    <div>
        <div>
            <span>id</span>
            <input type="number" :value="id" @input='handleId'>
            <span>title</span>
            <input type="text" :value="title" @input='handleTitle'>
            <span>content</span>
            <input type="text" :value="content" @input='handleContent'>
            <button @click="query">查询</button>
        </div>
        <ul>
            <li v-for="item in listData" :key="item.id">
                {{item.id}}-{{item.title}}-{{item.content}}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
import vuexChild from '@/components/vuexChild';
const NS = 'test'
export default {
    data(){
        return {
           
        }
    },
    computed: {
        ...mapState(`${NS}`, {
            listData: state => state.json_data,
            id: state => state.id,
            title: state => state.title,
            content: state => state.content
        })
    },
    methods:{
        query(){
            this.$store.dispatch(`${NS}/getListData`);
        },
        handleId(e){
            this.updateId(e.target.value);
            // this.$store.commit(`${NS}/updateId`, e.target.value);
        },
        handleTitle(e){
            this.updateTitle(e.target.value)
        },
        handleContent(e){
            this.updateContent(e.target.value);
        },
        ...mapMutations({
            updateId: `${NS}/updateId`,
            updateTitle: `${NS}/updateTitle`,
            updateContent: `${NS}/updateContent`,
        }),
    },
    created(){
    },
    mounted(){
        this.query();
    }
}
</script>
