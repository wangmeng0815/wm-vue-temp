import Vue from 'vue';
import Router from 'vue-router';
import Foo from '@/views/foo';
import Bar from '@/views/bar';
import Baz from '@/views/baz';

import List from '@/views/list';

Vue.use(Router);

const router = new Router({
    routes: [{
        path: '/foo',
        component: Foo,
        children: [{
            // 根目录下的 /baz
            path: '/baz',
            component: Baz
        }, {
            // /foo/baz
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
        path: '/list',
        component: List
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