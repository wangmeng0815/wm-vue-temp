import testApi from '../../api/test';

// initial state
const state = {
    json_data: []
}

// getters 
const getters = {}

// action
const actions = {
    // 异步逻辑都封装到 action里
    getListData({ commit }){
        testApi.getData( resp => {
            if(resp.code == 0){
                commit('setData', resp.data)
            }
        })
    }
}

const mutations = {
    // 提交mutation是更改状态的唯一方法， 并且这个过程是同步的
    setData( state, payload){
        state.json_data = payload;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions, 
    mutations
}