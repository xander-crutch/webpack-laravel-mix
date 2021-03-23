window.$ = window.jQuery = require('jquery');

window.axios = require('axios');

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// Подключение иконок
UIkit.use(Icons);

import Vue from 'vue';

//import FeedbackComponent from "./js/components/ExampleComponent.vue";
Vue.component('feedback-component', require('./js/components/ExampleComponent.vue').default);

const app = new Vue({
	el: '#app',
	//components: { ExampleComponent }
});