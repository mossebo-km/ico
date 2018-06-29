
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
import { Carousel3d, Slide } from 'vue-carousel-3d';
import AccordionList from './components/accordion'

/**
 * APP
 */
let app = new Vue({
    el: '#app',
    data: {
    },
    components: {
        'youtube': Youtube,
        'accordion-list': AccordionList,
        'carousel-3d': Carousel3d,
        'slide': Slide
    },
    mounted() {
        // heightToggle('.js-ht', {
        //     bindCloseEvents: true
        // });
    }
});
