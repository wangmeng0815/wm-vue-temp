import testApi from '../../api/test';

/**
 * 存储数据的状态
 * initial state
 */
const state = {
    json_data: [],
    id: '',
    title: '',
    content: ''
}

/**
 * 获取vuex数据(state)的统一接口
 * getters 
 */
const getters = {}

/**
 * 存vuex数据(state)的统一接口
 * mutations
 */
const mutations = {
    // 提交mutation是更改状态的唯一方法， 并且这个过程是同步的
    updateId(state, payload){
        state.id = payload;
    },
    updateTitle(state, payload){
        state.title = payload;
    },
    updateContent(state, payload){
        state.content = payload;
    },
    setListData(state, payload){
        state.json_data = payload;
    },
}

/**
 * vuex内的异步操作接口
 * action
 */
const actions = {
    // 异步逻辑都封装到 action里
    getListData({state, commit}){
        const { id, title, content } = state;
        testApi.getData({ id, title, content }, resp => {
            if(resp.code == 0){
                commit('setListData', resp.data)
            }
        })
    },
    add({ commit, state }){

    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions, 
    mutations
}