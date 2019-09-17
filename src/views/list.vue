<style>

</style>

<template>
    <div>
        <ul>
            <li v-for="item in listData" :key="item.id">
                {{item.title}}-{{item.content}}-{{item.nums}}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
    data(){
        return {

        }
    },
    computed: {
        ...mapState({
            listData: state => state.test.json_data
        })
    },
    created(){
        this.$store.dispatch('test/getListData')
    }
}
</script>
