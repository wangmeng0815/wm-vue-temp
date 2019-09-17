import Vue from 'vue';
import Router from 'vue-router';
import Foo from '@/views/foo';
import Bar from '@/views/bar';
import Baz from '@/views/baz';

import Test from '@/views/test';
import List from '@/views/testPage/list';
import Add from '@/views/testPage/add';
import VuexList from '@/views/testPage/vuexList';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [{
        path: '/foo',
        component: Foo,
        children: [{
            // url --> /baz
            path: '/baz',
            component: Baz
        }, {
            // url --> /foo/baz
            path: 'baz',
            component: Baz,
            beforeEnter(to, from, next){
                console.log('baz before enter in router');
                next();
            }
        }]
    }, {
        path: '/bar',
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
