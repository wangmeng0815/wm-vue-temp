<style lang='less'>
.gap{
    margin-top: 20px;
}
</style>

<template>
    <div>
        <!-- <ul>
            <li v-for="item in listData" :key="item.id">
                {{item.title}}-{{item.content}}-{{item.nums}}
            </li>
        </ul> -->
        <div>
            <span>id</span>
            <input type="number" v-model="id">
            <span>title</span>
            <input type="text" v-model="title">
            <span>content</span>
            <input type="text" v-model="content">
            <button @click="query">查询</button>
        </div>
        <div class="gap"></div>
        <ul>
            <li v-for="item in listTable" :key="item.id">
                <span>{{item.id}}-{{item.title}}-{{item.content}}</span>
                <span><button @click="remove(item)">删除</button></span>
            </li>
        </ul>
    </div>
</template>

<script>
import { safeRequest } from '../../utils';
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
    data(){
        return {
            listTable: [],
            id: '',
            title: '',
            content: ''
        }
    },
    computed: {
        ...mapState({
            listData: state => state.test.json_data
        })
    },
    created(){
        this.$store.dispatch('test/getListData')
    },
    methods: {
        remove(_item){
            const { id } = _item;
            const { query } = this;
            safeRequest({
                method: 'post',
                url: '/test/delete',
                data:{
                    id
                }
            }).then( res => {
                query();
            })
        },
        query(){
            const { id, title, content } = this;
            let _url = '/test/list?'
            if(id){
                _url += `id=${id}`;
            }
            if(title){
                _url += `title=${title}`;
            }
            if(content){
                _url += `content=${content}`; 
            }
            safeRequest({
                url: _url,
            })
            .then( res => {
                if(res.code == 0){
                    this.listTable = res.data;
                }
            });
        }
    },
    mounted(){
        
        this.query()
    }
}
</script>
