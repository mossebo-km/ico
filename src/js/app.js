/**
 * Imports
 */

import './bootstrap'
import Vue from 'vue'
import ChartJS from 'chart.js'

/**
 * Components
 */
 
//import './components/heightToogle';
import SmoothScroll from './components/SmoothScroll';
import Youtube from './components/youtube';
import {Carousel3d, Slide} from 'vue-carousel-3d';
import AccordionList from './components/accordion';
import stickySlider from './components/stickySlider';
import mobileMenu from './components/mobileMenu';
import roadMap from './components/roadMap';
import progressBar from './components/progressBar';
import channelLink from './components/channelLink';
import slick from 'slick-carousel';
import 'hchs-vue-charts';
import tooltip from './components/tooltip';

Vue.use(VueCharts);

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
        'progress-bar': progressBar,
        'mobile-menu': mobileMenu,
        'channel-link': channelLink
    },
    data: {
        economyLabels: ["2012", "2013", "2014", "2015", "2016", "2017"],
        economyOption: {
            legend: {
                display: false,
            }
        },
        economyData: [
            {
                label: "Азиатско-Тихоокеанский регион",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "#FF7F00",
                borderColor: "#FF7F00",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                borderWidth: 4,
                pointBorderColor: "#FF7F00",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 2,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "#FF7F00",
                pointHoverBorderColor: "#FF7F00",
                pointHoverBorderWidth: 2,
                pointRadius: 3,
                pointHitRadius: 10,
                data: [300, 397, 550, 650, 750, 1052],
                spanGaps: false,
            },
            {
                label: "Северная Америка",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "#FDD43E",
                borderColor: "#FDD43E",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                borderWidth: 4,
                pointBorderColor: "#FDD43E",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 2,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "#FDD43E",
                pointHoverBorderColor: "#FDD43E",
                pointHoverBorderWidth: 2,
                pointRadius: 3,
                pointHitRadius: 10,
                data: [380, 450, 500, 550, 600, 680],
                spanGaps: false,
            },
            {
                label: "Западная Европа",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "#6ACA2F",
                borderColor: "#6ACA2F",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                borderWidth: 4,
                pointBorderColor: "#6ACA2F",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 2,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "#6ACA2F",
                pointHoverBorderColor: "#6ACA2F",
                pointHoverBorderWidth: 2,
                pointRadius: 3,
                pointHitRadius: 10,
                data: [280, 310, 360, 380, 410, 430],
                spanGaps: false,
            },
            {
                label: "Латинская Америка",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "#4FCCFF",
                borderColor: "#4FCCFF",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                borderWidth: 4,
                pointBorderColor: "#4FCCFF",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 2,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "#4FCCFF",
                pointHoverBorderColor: "#4FCCFF",
                pointHoverBorderWidth: 2,
                pointRadius: 3,
                pointHitRadius: 10,
                data: [45, 48, 56, 63, 68, 74],
                spanGaps: false,
            },
            {
                label: "Африка и Ближний Восток",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "#4D7BF3",
                borderColor: "#4D7BF3",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                borderWidth: 4,
                pointBorderColor: "#4D7BF3",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 2,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "#4D7BF3",
                pointHoverBorderColor: "#4D7BF3",
                pointHoverBorderWidth: 2,
                pointRadius: 3,
                pointHitRadius: 10,
                data: [23, 27, 34, 40, 45, 51],
                spanGaps: false,
            },
        ],
    },
    methods: {
        fixedNav: function () {
            let nav = document.getElementById('js-fixed-nav')
            if (window.scrollY > 25) {
                nav.classList.add('fixed')
            }
            else {
                nav.classList.remove('fixed')
            }
            return true
        },
        getContent: function (key) {
            return _.get(window.mossebo, key);
        },
        switchTeamSlider: function () {
            ;[].forEach.call(document.querySelectorAll('.js-team-slider') , el => {
                if(window.innerWidth < 770) {
                    el.classList.add('slider-team');
                }
            })
        }
    },
    created() {
        this.switchTeamSlider();
    },
    mounted() {
        window.addEventListener('scroll', this.fixedNav, {passive: true});

        $('.slider-fade').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 2000,
        });

        $('.slider-team').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 600,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 5000,
        });

        ;[].forEach.call(document.querySelectorAll('.js-smooth-scroll') , el => {
            el.addEventListener('click', e => {
                e.preventDefault()

                new SmoothScroll(el.getAttribute('href'))
            })
        })
        tooltip();
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.fixedNav);
    },
});


// if (location.protocol != 'https:')
// {
//     location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
// }

