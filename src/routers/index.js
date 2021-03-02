import Vue from 'vue';
import Router from 'vue-router';
import Foo from '@/views/foo';
import Bar from '@/views/bar';
import Baz from '@/views/baz';

import Test from '@/views/test';
import List from '@/views/testPage/list';
import Add from '@/views/testPage/add';
import VuexList from '@/views/testPage/vuexList';
// import Temp from '@/views/temp.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [{
        path: '/foo',
        component: Foo,
        children: [{
            // url --> /baz
            path: '/baz',
            component: Baz,
            // component: () => import(/* webpachChunkName: "baz"*/'@/views/baz'),
        }, {
            // url --> /foo/baz
            path: 'baz',
            component: Baz,
            // component: () => import(/* webpachChunkName: "baz"*/'@/views/baz'),
            beforeEnter(to, from, next){
                console.log('baz before enter in router');
                next();
            }
        }]
    }, {
        path: '/bar/t/k',
        component: Bar
    }, {
        path: '/test',
        component: Test,
        children: [{
            path: 'list',
            component: List,
        }, {
            path: 'add',
            component: Add
        }, {
            path: 'vuexList',
            component: VuexList,
        }]
    }, {
      path: '/temp/index',
      // component: Temp,
      component: () => import(/* webpachChunkName: "temp"*/'@/views/temp.vue'),
    }]
});

router.beforeEach((to, from, next) =>{
    console.log('global before each every time');
    next();
});

router.afterEach((to, from) =>{
    console.log('global after each ');
});

router.beforeResolve( (to, from, next) =>{
    console.log('global before resolve');
    next();
})

export default router;
