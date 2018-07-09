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
import {Carousel3d, Slide} from 'vue-carousel-3d';
import AccordionList from './components/accordion'
import stickySlider from './components/stickySlider'
import roadMap from './components/roadMap'
import slick from 'slick-carousel'

/**
 * APP
 */
let app = new Vue({
    el: '#app',
    components: {
        'youtube': Youtube,
        'accordion-list': AccordionList,
        'carousel-3d': Carousel3d,
        'slide': Slide,
        'sticky-slider': stickySlider,
        'road-map': roadMap,
    },
    data: {

    },
    methods: {
        fixedNav: function () {
            let nav = document.getElementById('js-fixed-nav')
            if(window.scrollY > 25) {
                nav.classList.add('fixed')
            }
            else {
                nav.classList.remove('fixed')
            }
            return true
        }
    },
    mounted () {
        window.addEventListener('scroll', this.fixedNav, {passive: true});
        $('.slider-fade').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.fixedNav);
    },
});

