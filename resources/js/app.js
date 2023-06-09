/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.component('chat-layout', require('./components/ChatLayout.vue').default);
// Vue.component('chat-item', require('./components/ChatItem.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


import laravelEchoServer from '../../laravel-echo-server.json'


const app = new Vue({
    el: '#app',

    data: {
        currentUserLogin: {},
        echoCredentials: {
            appId: laravelEchoServer.clients[0].appId, //  appId in laravel-echo-server.json
            key: laravelEchoServer.clients[0].key // key in laravel-echo-server.json
        }
    },

    created() {
        // console.log({
        //     appId: laravelEchoServer.clients[0].appId, //  appId in laravel-echo-server.json
        //     key: laravelEchoServer.clients[0].key // key in laravel-echo-server.json
        // });
        this.getCurrentUserLogin()
    },

    methods: {
        async getCurrentUserLogin() {
            try {

                const response = await axios.get('/getUserLogin')
                this.currentUserLogin = response.data
            } catch (error) {
                console.log(error)
            }
        }
    },
});

