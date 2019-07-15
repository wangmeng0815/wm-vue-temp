import Vue from 'vue';
import Vuex from 'vuex';
import test from './modules/test';
// import mutations from './mutations';
// import actions from './actions';
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const mutations = {
    setState(state, payload){
        return {
            ...state,
            ...payload
        }
    }
}

export default new Vuex.Store({
    modules: {
        test,
    },
    mutations,
    // strict: debug,
    // plugins: debug ? [createLogger()] : []
})