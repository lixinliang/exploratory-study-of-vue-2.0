import './sass/index.scss';

if (process.env.NODE_ENV !== 'production') {
    require('../_index.html');
}

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

Vue.use(Vuex);

if (process.env.NODE_ENV !== 'production') {
    window.Vue = Vue;
    console.warn(`Vue: ${ Vue.version }`);
}

if (process.env.NODE_ENV === 'production') {
    /**
     * [silent] Do not show log any more
     * @type {Boolean}
     * @see https://vuejs.org/v2/api/#silent
     */
    Vue.config.silent = true;
}

Vue.config.errorHandler = function ( err, vm ) {
    debugger;
};

import app from './modules/app.vue';
import bar from './modules/bar.vue';
import foo from './modules/foo.vue';

/**
 * A simple Vue example
 * Use `render` to render component
 */
if (false) {
    new Vue({
        el : 'app',
        render : ( createElement ) => createElement(app),
    });
}

/**
 * A simple Vue example with VueRouter
 * Use `router` to define router path
 */
Vue.use(VueRouter);
const root = new Vue({
    el : 'app',
    render : ( createElement ) => createElement(app),
    store : new Vuex.Store({
        state : {
            foo_page_counter : 0,
            bar_page_counter : 0,
        },
    }),
    router : new VueRouter({
        routes : [
            {
                path : '/bar',
                component : bar,
            },
            {
                path : '/foo',
                component : foo,
            },
        ],
    }),
});
if (process.env.NODE_ENV !== 'production') {
    window.root = root;
}
