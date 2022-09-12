import 'alpinejs'
import 'animate.css'
window.$ = window.jQuery = require('jquery');

window.axios = require('axios');
/* if you want to add wikit to the project https://uikit.com/ uncomment the lines below */
/*import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);*/

// Jquery code
require("./js/plugins");

import Vue from 'vue';

//import ExampleComponent from "./js/components/ExampleComponent.vue";
Vue.component('example-component', require('./js/components/ExampleComponent.vue').default);

const app = new Vue({
	el: '#app',
	//components: { ExampleComponent }
});
