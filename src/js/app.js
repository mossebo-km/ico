
/**
 * Imports
 */

import './bootstrap'
import Vue from 'vue'

/**
 * Components
 */
//import './components/heightToogle'
import Youtube from './components/youtube'


/**
 * APP
 */
let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    components: {
        Youtube,
    },
    mounted() {
        // heightToggle('.js-ht', {
        //     bindCloseEvents: true
        // });
    }
});
