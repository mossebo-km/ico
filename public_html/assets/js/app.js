webpackJsonp([1],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/accordion.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'accordion-list',
    data: function data() {
        return {
            contents: {
                type: Array,
                default: [{
                    title: 'How are you?',
                    msg: 'I am fine thank you.'
                }]
            }
        };
    },

    methods: {
        toggle: function toggle(num) {
            if (this.$el.children[num].classList.contains('open')) {
                this.$el.children[num].classList.remove('open');
            } else {
                var prevFaqQuestion = this.$el.querySelectorAll('.open');
                if (prevFaqQuestion.length !== 0) {
                    prevFaqQuestion[0].classList.remove('open');
                }
                this.$el.children[num].classList.add('open');
            }
        }
    },
    mounted: function mounted() {
        this.contents = window.faqList;
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/progressBar.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "progressBar",
    props: {
        current: Number,
        max: Number
    },
    data: function data() {
        return {
            width: Number
        };
    },

    methods: {
        getWidth: function getWidth() {
            var percent = 100 * this.current / this.max;
            var progressEl = this.$el.getElementsByClassName('js-progress-bar');
            var progressWidth = progressEl[0].clientWidth;
            return progressWidth * percent / 100;
        }
    },
    mounted: function mounted() {
        this.width = this.getWidth();
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/roadMap.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_slider_component__ = __webpack_require__("./node_modules/vue-slider-component/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_slider_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_slider_component__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: "roadMap",
    components: {
        vueSlider: __WEBPACK_IMPORTED_MODULE_0_vue_slider_component___default.a
    },
    data: function data() {
        return {
            currentImagePath: 'assets/images/maps/1.png',
            navigatorSlider: {
                value: 6,
                height: 8,
                dotSize: 20,
                min: 1,
                max: 31,
                interval: 1,
                disabled: false,
                show: true,
                speed: 0.3,
                reverse: false,
                lazy: true,
                tooltip: false,
                piecewise: true,
                bgStyle: {
                    "backgroundColor": "#E6E6E6"
                },
                processStyle: {
                    "backgroundImage": "-webkit-linear-gradient(left, #FFB533, #FCD133)"
                },
                sliderStyle: [{
                    "backgroundColor": "#fff",
                    "boxShadow": "0 0 13px rgba(0,0,0,.36)"
                }],
                piecewiseStyle: {
                    "backgroundColor": "#fff",
                    "visibility": "visible",
                    "width": "6px",
                    "height": "6px"
                },
                piecewiseActiveStyle: {
                    "backgroundColor": "#fff"
                }
            },
            sliders: [{
                year: 2018,
                month: 'Январь',
                text: 'Открытие 40-й Студии Mossebo, присутствие в 7-ми странах мира',
                image: 'assets/images/maps/1.png'
            }, {
                year: 2018,
                month: 'Март',
                text: 'Старт разработки интернет-магазина Mossebo.Market',
                image: 'assets/images/maps/1.png'
            }, {
                year: 2018,
                month: 'Апрель',
                text: 'Релиз MVP и продолжение разработки',
                image: 'assets/images/maps/1.png'
            }, {
                year: 2018,
                month: 'Май',
                text: 'Запуск интернет-магазина Mossebo Market (версия 2.0)',
                image: 'assets/images/maps/1.png'
            }, {
                year: 2018,
                month: 'Июнь',
                text: 'Private Pre-Sale',
                image: 'assets/images/maps/1.png'
            }, {
                year: 2018,
                month: 'Июль-Август',
                text: 'Pre-Sale',
                image: 'assets/images/maps/1.png'
            }, {
                year: 2018,
                month: 'Ноябрь',
                text: 'Генерация и распределение токенов',
                image: 'assets/images/maps/1.png'
            }, {
                year: 2018,
                month: 'Декабрь',
                text: 'Выход токена MSBO на биржу',
                image: 'assets/images/maps/1.png'
            }, {
                year: 2019,
                month: '1 квартал',
                text: 'Составление технического задания, закупка оборудования и разработка программного обеспечения',
                image: 'assets/images/maps/2.png'
            }, {
                year: 2019,
                month: 'Апрель',
                text: 'Запуск версии 3.0 интернет-магазина Mossebo.Market',
                image: 'assets/images/maps/2.png'
            }, {
                year: 2019,
                month: 'Апрель-Август',
                text: 'Полномасштабное развёртывание платформы Mossebo.Market на территории России и СНГ',
                image: 'assets/images/maps/2.png'
            }, {
                year: 2019,
                month: 'Август',
                text: 'Выкуп части токенов согласно программе',
                image: 'assets/images/maps/2.png'
            }, {
                year: 2019,
                month: 'Сентябрь',
                text: 'Второй этап размещения токенов согласно программе',
                image: 'assets/images/maps/2.png'
            }, {
                year: 2019,
                month: 'Декабрь',
                text: 'Экспансия платформы Mossebo.Market в Европу, открытие регионального центра',
                image: 'assets/images/maps/2.png'
            }, {
                year: 2019,
                month: 'Декабрь-Август',
                text: 'Полномасштабное развёртывание платформы Mossebo Market на территории Европы',
                image: 'assets/images/maps/2.png'
            }, {
                year: 2020,
                month: 'Август',
                text: 'Выкуп части токенов согласно программе',
                image: 'assets/images/maps/3.png'
            }, {
                year: 2020,
                month: 'Сентябрь',
                text: 'Третий этап размещения токенов согласно программе',
                image: 'assets/images/maps/3.png'
            }, {
                year: 2020,
                month: 'Декабрь',
                text: 'Экспансия платформы Mossebo Market в Азию, открытие регионального центра',
                image: 'assets/images/maps/3.png'
            }, {
                year: 2020,
                month: 'Декабрь-Август',
                text: 'Полномасштабное развёртывание платформы Mossebo.Market на территории Азии',
                image: 'assets/images/maps/3.png'
            }, {
                year: 2021,
                month: 'Август',
                text: 'Выкуп части токенов согласно программе',
                image: 'assets/images/maps/4.png'
            }, {
                year: 2021,
                month: 'Сентябрь',
                text: 'Четвертый этап размещения токенов согласно программе',
                image: 'assets/images/maps/4.png'
            }, {
                year: 2021,
                month: 'Декабрь',
                text: 'Экспансия платформы Mossebo.Market в Северную Америку, открытие регионального центра',
                image: 'assets/images/maps/4.png'
            }, {
                year: 2021,
                month: 'Декабрь-Август',
                text: 'Полномасштабное развёртывание платформы Mossebo.Market на территории Северной Америки',
                image: 'assets/images/maps/4.png'
            }, {
                year: 2022,
                month: 'Август',
                text: 'Выкуп части токенов согласно программе',
                image: 'assets/images/maps/5.png'
            }, {
                year: 2022,
                month: 'Сентябрь',
                text: 'Пятый этап размещения токенов согласно программе',
                image: 'assets/images/maps/5.png'
            }, {
                year: 2022,
                month: 'Декабрь',
                text: 'Экспансия платформы Mossebo Market в Южную Америку, открытие регионального центра',
                image: 'assets/images/maps/5.png'
            }, {
                year: 2022,
                month: 'Декабрь-Август',
                text: 'Полномасштабное развёртывание платформы Mossebo Market на территории Южной Америки',
                image: 'assets/images/maps/5.png'
            }, {
                year: 2023,
                month: 'Август',
                text: 'Выкуп части токенов согласно программе',
                image: 'assets/images/maps/6.png'
            }, {
                year: 2023,
                month: 'Сентябрь',
                text: 'Шестой этап размещения токенов согласно программе',
                image: 'assets/images/maps/6.png'
            }, {
                year: 2023,
                month: 'Декабрь',
                text: 'Экспансия платформы Mossebo Market в Океанию, открытие регионального центра',
                image: 'assets/images/maps/6.png'
            }]
        };
    },
    created: function created() {
        this.navigatorSlider.max = this.sliders.length;
    },

    methods: {
        changeSlide: function changeSlide(i) {
            if (this.sliders[i].image) {
                this.currentImagePath = this.sliders[i].image;
            }
            return this.currentImagePath;
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/stickySlider.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "stickySlider",
    data: function data() {
        return {
            currentImagePath: '',
            sliderItems: [{
                h2: 'Рабочий прототип mossebo.market',
                p: ['Mossebo.market – действующий интернет-магазин мебели, декора и товаров для дома с 11 000 поставщиками по всему миру.', 'Через платформу mossebo.market ежедневно комплектуется не менее 175 проектов и делается от 2 500 мелких покупок.'],
                image: 'assets/images/slider/1.png'
            }, {
                h2: 'Криптокошелек',
                p: ['На mossebo.market клиент может обменять Bitcoin, Ethirium, Dash и другие валюты на монету MSB и оплатить ей покупки со скидкой от 3 до 70 %.'],
                image: 'assets/images/slider/2.png'
            }, {
                h2: 'Кабинет компаний для b2b расчетов',
                p: ['Каждому производителю доступны расчеты между поставщиками в MSB с безопасной сделкой, передачей документов и статистикой заказов.'],
                image: 'assets/images/slider/3.png'
            }, {
                h2: 'Оплата товаров в MSB',
                p: ['Каждый товар mossebo.market можно купить за фиатные или криптоденьги в 2 клика'],
                image: 'assets/images/slider/4.png'
            }, {
                h2: 'Начать продавать на mossebo.market может любой производитель',
                p: ['Загрузить товары на маркетплейс и принимать криптоплатежи может любой производитель, прошедший проверку качества mossebo.market'],
                image: 'assets/images/slider/5.png'
            }]
        };
    },

    methods: {
        onScroll: function onScroll() {
            var scrolledImage = document.getElementsByClassName('js-scroll-image');
            var scrolledImageCoordinates = scrolledImage[0].getBoundingClientRect();
            var slides = document.getElementsByClassName('js-scroll-slide');

            for (var i = 0; i < slides.length; i++) {
                var slide = slides[i];

                var slideCoordinates = slide.getBoundingClientRect();

                if (slideCoordinates.y <= scrolledImageCoordinates.y) {
                    if (slide.clientHeight / 2 + slideCoordinates.y > scrolledImageCoordinates.y) {

                        this.currentImagePath = this.sliderItems[i].image;
                        break;
                    }
                }
            }
        }
    },
    mounted: function mounted() {
        window.addEventListener('scroll', this.onScroll, { passive: true });
    },
    beforeDestroy: function beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll);
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/youtube.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "youtube",
    props: {
        videoId: String,
        videoThumb: String
    },
    data: function data() {
        return {
            activeButton: true,
            activeVideo: false,
            videoUrl: null
        };
    },

    methods: {
        video: function video(code) {
            return '//www.youtube.com/embed/' + code + '?enablejsapi=1&rel=0&playsinline=1&autoplay=1&showinfo=0&autohide=1&modestbranding=1';
        },
        showVideo: function showVideo(e) {
            e.preventDefault();
            this.activeButton = false;
            this.activeVideo = true;
            this.videoUrl = this.video(this.videoId);
        }
    },
    mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2a1ea1a7\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/js/components/youtube.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.player-box[data-v-2a1ea1a7] {\n  position: relative;\n  padding: 0;\n  margin: 5px 0;\n}\n.thumbnail[data-v-2a1ea1a7] {\n  margin: auto;\n  width: 100%;\n  max-width: 100%;\n  background-size: contain;\n  background-position: 50%;\n  background-repeat: no-repeat;\n}\n.thumbnail[data-v-2a1ea1a7]:before {\n    content: \"\";\n    display: block;\n    padding-top: 56.25%;\n}\n.play[data-v-2a1ea1a7] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -35px;\n  margin-left: -35px;\n  width: 70px;\n  height: 70px;\n  background: #FCD133;\n  color: #fff;\n  font-size: 30px;\n  padding-left: 12px;\n  padding-top: 6px;\n  border: 1px solid #FCD133;\n  border-radius: 50%;\n  z-index: 9;\n  cursor: pointer;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  opacity: .8;\n}\n.play[data-v-2a1ea1a7]:hover {\n    opacity: 1;\n}\n.video[data-v-2a1ea1a7] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n}\n", "", {"version":3,"sources":["/Users/vladstarkovsky/DEVSRV/mossebo-ico/src/js/components/youtube.vue"],"names":[],"mappings":";AAAA;EACE,mBAAmB;EACnB,WAAW;EACX,cAAc;CAAE;AAElB;EACE,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,yBAAyB;EACzB,yBAAyB;EACzB,6BAA6B;CAAE;AAC/B;IACE,YAAY;IACZ,eAAe;IACf,oBAAoB;CAAE;AAE1B;EACE,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;EACjB,0BAA0B;EAC1B,mBAAmB;EACnB,WAAW;EACX,gBAAgB;EAChB,+BAAuB;UAAvB,uBAAuB;EACvB,yBAAiB;EAAjB,iBAAiB;EACjB,YAAY;CAAE;AACd;IACE,WAAW;CAAE;AAEjB;EACE,mBAAmB;EACnB,QAAQ;EACR,SAAS;EACT,OAAO;EACP,UAAU;EACV,YAAY;EACZ,aAAa;CAAE","file":"youtube.vue","sourcesContent":[".player-box {\n  position: relative;\n  padding: 0;\n  margin: 5px 0; }\n\n.thumbnail {\n  margin: auto;\n  width: 100%;\n  max-width: 100%;\n  background-size: contain;\n  background-position: 50%;\n  background-repeat: no-repeat; }\n  .thumbnail:before {\n    content: \"\";\n    display: block;\n    padding-top: 56.25%; }\n\n.play {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -35px;\n  margin-left: -35px;\n  width: 70px;\n  height: 70px;\n  background: #FCD133;\n  color: #fff;\n  font-size: 30px;\n  padding-left: 12px;\n  padding-top: 6px;\n  border: 1px solid #FCD133;\n  border-radius: 50%;\n  z-index: 9;\n  cursor: pointer;\n  box-sizing: border-box;\n  transition: 0.3s;\n  opacity: .8; }\n  .play:hover {\n    opacity: 1; }\n\n.video {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6844c7d6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/js/components/stickySlider.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.button[data-v-6844c7d6] {\n  margin-top: 30px;\n  width: 120px;\n  text-align: center;\n}\n", "", {"version":3,"sources":["/Users/vladstarkovsky/DEVSRV/mossebo-ico/src/js/components/stickySlider.vue"],"names":[],"mappings":";AAAA;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;CAAE","file":"stickySlider.vue","sourcesContent":[".button {\n  margin-top: 30px;\n  width: 120px;\n  text-align: center; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7bc4f64c\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/js/components/accordion.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.faq-container[data-v-7bc4f64c] {\n  width: 100%;\n}\n.faq-question[data-v-7bc4f64c] {\n  padding: 0;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.faq-description[data-v-7bc4f64c] {\n  font-size: 18px;\n  cursor: pointer;\n  padding: 8px 0;\n}\n.faq-description span[data-v-7bc4f64c] {\n    margin-left: 35px;\n    color: #FCD133;\n    display: inline-block;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n}\n.faq-content[data-v-7bc4f64c] {\n  font-size: 14px;\n  display: block;\n  height: auto;\n  max-width: 450px;\n  max-height: 0;\n  padding-left: 2px;\n  -webkit-transform: scaleY(0);\n          transform: scaleY(0);\n  -webkit-transform-origin: top;\n          transform-origin: top;\n  -webkit-transition: max-height 0.2s, -webkit-transform 0.2s;\n  transition: max-height 0.2s, -webkit-transform 0.2s;\n  transition: max-height 0.2s, transform 0.2s;\n  transition: max-height 0.2s, transform 0.2s, -webkit-transform 0.2s;\n}\n.faq-content p[data-v-7bc4f64c] {\n    margin: 0;\n    padding: 10px 0 25px;\n}\n.faq-question.open .faq-description span[data-v-7bc4f64c]:last-child {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.faq-question.open .faq-content[data-v-7bc4f64c] {\n  max-height: 1000px;\n  -webkit-transform: scaleY(1);\n          transform: scaleY(1);\n}\n", "", {"version":3,"sources":["/Users/vladstarkovsky/DEVSRV/mossebo-ico/src/js/components/accordion.vue"],"names":[],"mappings":";AAAA;EACE,YAAY;CAAE;AAEhB;EACE,WAAW;EACX,6BAAqB;EAArB,qBAAqB;CAAE;AAEzB;EACE,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;CAAE;AACjB;IACE,kBAAkB;IAClB,eAAe;IACf,sBAAsB;IACtB,6BAAqB;IAArB,qBAAqB;CAAE;AAE3B;EACE,gBAAgB;EAChB,eAAe;EACf,aAAa;EACb,iBAAiB;EACjB,cAAc;EACd,kBAAkB;EAClB,6BAAqB;UAArB,qBAAqB;EACrB,8BAAsB;UAAtB,sBAAsB;EACtB,4DAA4C;EAA5C,oDAA4C;EAA5C,4CAA4C;EAA5C,oEAA4C;CAAE;AAC9C;IACE,UAAU;IACV,qBAAqB;CAAE;AAE3B;EACE,iCAAyB;UAAzB,yBAAyB;CAAE;AAE7B;EACE,mBAAmB;EACnB,6BAAqB;UAArB,qBAAqB;CAAE","file":"accordion.vue","sourcesContent":[".faq-container {\n  width: 100%; }\n\n.faq-question {\n  padding: 0;\n  transition: all 0.3s; }\n\n.faq-description {\n  font-size: 18px;\n  cursor: pointer;\n  padding: 8px 0; }\n  .faq-description span {\n    margin-left: 35px;\n    color: #FCD133;\n    display: inline-block;\n    transition: all 0.3s; }\n\n.faq-content {\n  font-size: 14px;\n  display: block;\n  height: auto;\n  max-width: 450px;\n  max-height: 0;\n  padding-left: 2px;\n  transform: scaleY(0);\n  transform-origin: top;\n  transition: max-height 0.2s, transform 0.2s; }\n  .faq-content p {\n    margin: 0;\n    padding: 10px 0 25px; }\n\n.faq-question.open .faq-description span:last-child {\n  transform: rotate(90deg); }\n\n.faq-question.open .faq-content {\n  max-height: 1000px;\n  transform: scaleY(1); }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8141a7c0\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/js/components/roadMap.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.navigator[data-v-8141a7c0] {\n  width: 100%;\n}\n.navigator .years[data-v-8141a7c0] {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n}\n.navigator .years li[data-v-8141a7c0] {\n      font-size: 14px;\n      color: #9B9B9B;\n}\n.navigator .years li[data-v-8141a7c0]:nth-child(1) {\n        width: 27%;\n}\n.navigator .years li[data-v-8141a7c0]:nth-child(2) {\n        width: 23.5%;\n}\n.navigator .years li[data-v-8141a7c0]:nth-child(3) {\n        width: 13.5%;\n}\n.navigator .years li[data-v-8141a7c0]:nth-child(4) {\n        width: 13.5%;\n}\n.navigator .years li[data-v-8141a7c0]:nth-child(5) {\n        width: 13.5%;\n}\n.navigator .years li.active[data-v-8141a7c0] {\n      color: #FCD133;\n}\n.body .year[data-v-8141a7c0] {\n  font-size: 24px;\n  color: #FCD133;\n  font-weight: 500;\n  padding: 15px 0;\n}\n.body .month[data-v-8141a7c0] {\n  font-size: 14px;\n  color: #FCD133;\n}\n.body .text[data-v-8141a7c0] {\n  font-size: 14px;\n  padding: 15px 0;\n}\n", "", {"version":3,"sources":["/Users/vladstarkovsky/DEVSRV/mossebo-ico/src/js/components/roadMap.vue"],"names":[],"mappings":";AAAA;EACE,YAAY;CAAE;AACd;IACE,iBAAiB;IACjB,WAAW;IACX,UAAU;IACV,qBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,wBAA4B;QAA5B,qBAA4B;YAA5B,4BAA4B;CAAE;AAC9B;MACE,gBAAgB;MAChB,eAAe;CAAE;AACjB;QACE,WAAW;CAAE;AACf;QACE,aAAa;CAAE;AACjB;QACE,aAAa;CAAE;AACjB;QACE,aAAa;CAAE;AACjB;QACE,aAAa;CAAE;AACnB;MACE,eAAe;CAAE;AAEvB;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,gBAAgB;CAAE;AAEpB;EACE,gBAAgB;EAChB,eAAe;CAAE;AAEnB;EACE,gBAAgB;EAChB,gBAAgB;CAAE","file":"roadMap.vue","sourcesContent":[".navigator {\n  width: 100%; }\n  .navigator .years {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    justify-content: flex-start; }\n    .navigator .years li {\n      font-size: 14px;\n      color: #9B9B9B; }\n      .navigator .years li:nth-child(1) {\n        width: 27%; }\n      .navigator .years li:nth-child(2) {\n        width: 23.5%; }\n      .navigator .years li:nth-child(3) {\n        width: 13.5%; }\n      .navigator .years li:nth-child(4) {\n        width: 13.5%; }\n      .navigator .years li:nth-child(5) {\n        width: 13.5%; }\n    .navigator .years li.active {\n      color: #FCD133; }\n\n.body .year {\n  font-size: 24px;\n  color: #FCD133;\n  font-weight: 500;\n  padding: 15px 0; }\n\n.body .month {\n  font-size: 14px;\n  color: #FCD133; }\n\n.body .text {\n  font-size: 14px;\n  padding: 15px 0; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a72e44ac\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/js/components/progressBar.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.progress-bar[data-v-a72e44ac] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: 23px;\n  width: 100%;\n  position: relative;\n  border-radius: 30px;\n  border: none;\n  -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);\n          box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);\n  background: #fff;\n}\n.progress-bar-box[data-v-a72e44ac] {\n    max-width: 550px;\n    margin: 35px 0;\n}\n.progress-bar-box .row .col-3[data-v-a72e44ac] {\n      padding-top: 15px;\n}\n.progress-bar-box .row .col-3[data-v-a72e44ac]:nth-child(1) {\n        text-align: left;\n}\n.progress-bar-box .row .col-3[data-v-a72e44ac]:nth-child(2) {\n        text-align: center;\n}\n.progress-bar-box .row .col-3[data-v-a72e44ac]:nth-child(3) {\n        text-align: right;\n        color: #FCD133;\n}\n.progress-bar__current[data-v-a72e44ac] {\n    position: relative;\n    top: 0;\n    left: 0;\n    float: left;\n    height: 23px;\n    border-radius: 30px;\n    padding-left: 11px;\n    padding-right: 11px;\n    background: #fee500;\n    background: -webkit-gradient(linear, left top, right top, from(#fee500), to(#ffb533));\n    background: linear-gradient(to right, #fee500 0%, #ffb533 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fee500', endColorstr='#ffb533',GradientType=1 );\n    z-index: 9;\n}\n.progress-bar__1[data-v-a72e44ac] {\n    position: relative;\n    float: left;\n    width: 23px;\n    height: 23px;\n    background: #fff;\n    border-radius: 30px;\n    -webkit-box-shadow: 8px 0 0 #ffb533;\n            box-shadow: 8px 0 0 #ffb533;\n    z-index: 3;\n    left: -15px;\n    opacity: 0;\n    -webkit-animation: progress-bar-animation1 3s infinite;\n            animation: progress-bar-animation1 3s infinite;\n}\n.progress-bar__2[data-v-a72e44ac] {\n    position: relative;\n    float: left;\n    width: 23px;\n    height: 23px;\n    background: #fff;\n    border-radius: 30px;\n    -webkit-box-shadow: 8px 0 0 #ffb533;\n            box-shadow: 8px 0 0 #ffb533;\n    z-index: 2;\n    left: -22px;\n    opacity: 0;\n    -webkit-animation: progress-bar-animation2 3s infinite;\n            animation: progress-bar-animation2 3s infinite;\n}\n.progress-bar__3[data-v-a72e44ac] {\n    position: relative;\n    float: left;\n    width: 23px;\n    height: 23px;\n    background: #fff;\n    border-radius: 30px;\n    -webkit-box-shadow: 8px 0 0 #ffb533;\n            box-shadow: 8px 0 0 #ffb533;\n    z-index: 1;\n    left: -30px;\n    opacity: 0;\n    -webkit-animation: progress-bar-animation3 3s infinite;\n            animation: progress-bar-animation3 3s infinite;\n}\n", "", {"version":3,"sources":["/Users/vladstarkovsky/DEVSRV/mossebo-ico/src/js/components/progressBar.vue"],"names":[],"mappings":";AAAA;EACE,+BAAuB;UAAvB,uBAAuB;EACvB,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,oBAAoB;EACpB,aAAa;EACb,kDAA0C;UAA1C,0CAA0C;EAC1C,iBAAiB;CAAE;AACnB;IACE,iBAAiB;IACjB,eAAe;CAAE;AACjB;MACE,kBAAkB;CAAE;AACpB;QACE,iBAAiB;CAAE;AACrB;QACE,mBAAmB;CAAE;AACvB;QACE,kBAAkB;QAClB,eAAe;CAAE;AACvB;IACE,mBAAmB;IACnB,OAAO;IACP,QAAQ;IACR,YAAY;IACZ,aAAa;IACb,oBAAoB;IACpB,mBAAmB;IACnB,oBAAoB;IACpB,oBAAoB;IAGpB,sFAAgE;IAAhE,gEAAgE;IAChE,oHAAoH;IACpH,WAAW;CAAE;AACf;IACE,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,oBAAoB;IACpB,oCAA4B;YAA5B,4BAA4B;IAC5B,WAAW;IACX,YAAY;IACZ,WAAW;IACX,uDAA+C;YAA/C,+CAA+C;CAAE;AACnD;IACE,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,oBAAoB;IACpB,oCAA4B;YAA5B,4BAA4B;IAC5B,WAAW;IACX,YAAY;IACZ,WAAW;IACX,uDAA+C;YAA/C,+CAA+C;CAAE;AACnD;IACE,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,oBAAoB;IACpB,oCAA4B;YAA5B,4BAA4B;IAC5B,WAAW;IACX,YAAY;IACZ,WAAW;IACX,uDAA+C;YAA/C,+CAA+C;CAAE","file":"progressBar.vue","sourcesContent":[".progress-bar {\n  box-sizing: border-box;\n  height: 23px;\n  width: 100%;\n  position: relative;\n  border-radius: 30px;\n  border: none;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);\n  background: #fff; }\n  .progress-bar-box {\n    max-width: 550px;\n    margin: 35px 0; }\n    .progress-bar-box .row .col-3 {\n      padding-top: 15px; }\n      .progress-bar-box .row .col-3:nth-child(1) {\n        text-align: left; }\n      .progress-bar-box .row .col-3:nth-child(2) {\n        text-align: center; }\n      .progress-bar-box .row .col-3:nth-child(3) {\n        text-align: right;\n        color: #FCD133; }\n  .progress-bar__current {\n    position: relative;\n    top: 0;\n    left: 0;\n    float: left;\n    height: 23px;\n    border-radius: 30px;\n    padding-left: 11px;\n    padding-right: 11px;\n    background: #fee500;\n    background: -moz-linear-gradient(left, #fee500 0%, #ffb533 100%);\n    background: -webkit-linear-gradient(left, #fee500 0%, #ffb533 100%);\n    background: linear-gradient(to right, #fee500 0%, #ffb533 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fee500', endColorstr='#ffb533',GradientType=1 );\n    z-index: 9; }\n  .progress-bar__1 {\n    position: relative;\n    float: left;\n    width: 23px;\n    height: 23px;\n    background: #fff;\n    border-radius: 30px;\n    box-shadow: 8px 0 0 #ffb533;\n    z-index: 3;\n    left: -15px;\n    opacity: 0;\n    animation: progress-bar-animation1 3s infinite; }\n  .progress-bar__2 {\n    position: relative;\n    float: left;\n    width: 23px;\n    height: 23px;\n    background: #fff;\n    border-radius: 30px;\n    box-shadow: 8px 0 0 #ffb533;\n    z-index: 2;\n    left: -22px;\n    opacity: 0;\n    animation: progress-bar-animation2 3s infinite; }\n  .progress-bar__3 {\n    position: relative;\n    float: left;\n    width: 23px;\n    height: 23px;\n    background: #fff;\n    border-radius: 30px;\n    box-shadow: 8px 0 0 #ffb533;\n    z-index: 1;\n    left: -30px;\n    opacity: 0;\n    animation: progress-bar-animation3 3s infinite; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/component-normalizer.js":
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2a1ea1a7\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/youtube.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "player-box" }, [
    _c(
      "div",
      {
        staticClass: "thumbnail",
        style: { backgroundImage: "url(" + _vm.videoThumb + ")" }
      },
      [
        _c(
          "button",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.activeButton,
                expression: "activeButton"
              }
            ],
            staticClass: "play",
            on: { click: _vm.showVideo }
          },
          [_vm._v("\n            ▶\n        ")]
        ),
        _vm._v(" "),
        _c("iframe", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.activeVideo,
              expression: "activeVideo"
            }
          ],
          staticClass: "video",
          attrs: {
            width: "560",
            height: "315",
            src: _vm.videoUrl,
            frameborder: "0",
            allow: "autoplay; encrypted-media",
            allowfullscreen: ""
          }
        })
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2a1ea1a7", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6844c7d6\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/stickySlider.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-2" },
        _vm._l(_vm.sliderItems, function(slider, index) {
          return _c(
            "div",
            { staticClass: "slider__item js-scroll-slide" },
            [
              _c("div", { staticClass: "h2" }, [_vm._v(_vm._s(slider.h2))]),
              _vm._v(" "),
              _vm._l(slider.p, function(text) {
                return _c("p", [
                  _vm._v(
                    "\n                    " +
                      _vm._s(text) +
                      "\n                "
                  )
                ])
              }),
              _vm._v(" "),
              _c(
                "a",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: index == 0,
                      expression: "index == 0"
                    }
                  ],
                  staticClass: "button button-primary",
                  attrs: { href: "https://mossebo.market/", target: "_blank" }
                },
                [_vm._v("Перейти")]
              )
            ],
            2
          )
        })
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-2" }, [
        _c("div", { staticClass: "slider__image js-scroll-image" }, [
          _c("div", {
            staticClass: "js-slide-image",
            style: "background-image: url(" + _vm.currentImagePath + ");"
          })
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6844c7d6", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7bc4f64c\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/accordion.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "faq-container" },
    _vm._l(_vm.contents, function(item, index) {
      return _c(
        "div",
        {
          staticClass: "faq-question",
          on: {
            click: function($event) {
              _vm.toggle(index)
            }
          }
        },
        [
          _c("div", { staticClass: "faq-description" }, [
            _vm._v(_vm._s(item.title)),
            _c("span", [_vm._v("▸")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "faq-content" }, [
            _c("p", [_vm._v(_vm._s(item.msg))])
          ])
        ]
      )
    })
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7bc4f64c", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-8141a7c0\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/roadMap.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "navigator" },
      [
        _c("ul", { staticClass: "years" }, [
          _c("li", { class: { active: _vm.navigatorSlider.value == 1 } }, [
            _vm._v("2018")
          ]),
          _vm._v(" "),
          _c("li", { class: { active: _vm.navigatorSlider.value == 9 } }, [
            _vm._v("2019")
          ]),
          _vm._v(" "),
          _c("li", { class: { active: _vm.navigatorSlider.value == 16 } }, [
            _vm._v("2020")
          ]),
          _vm._v(" "),
          _c("li", { class: { active: _vm.navigatorSlider.value == 20 } }, [
            _vm._v("2021")
          ]),
          _vm._v(" "),
          _c("li", { class: { active: _vm.navigatorSlider.value == 24 } }, [
            _vm._v("2022")
          ]),
          _vm._v(" "),
          _c("li", { class: { active: _vm.navigatorSlider.value == 28 } }, [
            _vm._v("2023")
          ])
        ]),
        _vm._v(" "),
        _c(
          "vue-slider",
          _vm._b(
            {
              model: {
                value: _vm.navigatorSlider.value,
                callback: function($$v) {
                  _vm.$set(_vm.navigatorSlider, "value", $$v)
                },
                expression: "navigatorSlider.value"
              }
            },
            "vue-slider",
            _vm.navigatorSlider,
            false
          )
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "body" }, [
      _c("div", { staticClass: "year" }, [
        _vm._v(_vm._s(_vm.sliders[_vm.navigatorSlider.value - 1].year))
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "month" }, [
        _vm._v(_vm._s(_vm.sliders[_vm.navigatorSlider.value - 1].month))
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "text" }, [
        _vm._v(_vm._s(_vm.sliders[_vm.navigatorSlider.value - 1].text))
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "map" }, [
      _c("div", { staticClass: "map-box" }, [
        _c("div", { staticClass: "map-dot" }),
        _vm._v(" "),
        _c("div", {
          staticClass: "map-image",
          style:
            "background-image: url(" +
            _vm.changeSlide(_vm.navigatorSlider.value - 1) +
            ");"
        })
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8141a7c0", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-a72e44ac\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/progressBar.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "progress-bar-box" }, [
    _c("div", { staticClass: "progress-bar js-progress-bar" }, [
      _c("div", { staticClass: "progress-bar__current" }, [
        _c("div", {
          staticClass: "progress-bar__line",
          style: { width: _vm.width + "px" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "progress-bar__1" }),
      _vm._v(" "),
      _c("div", { staticClass: "progress-bar__2" }),
      _vm._v(" "),
      _c("div", { staticClass: "progress-bar__3" })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-3" }, [_vm._v("0 $")]),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.current > 0,
              expression: "current > 0"
            }
          ],
          staticClass: "col-3"
        },
        [
          _vm._v(
            "\n            " +
              _vm._s(_vm.current.toLocaleString()) +
              " $\n        "
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-3" }, [
        _vm._v(
          "\n            " + _vm._s(_vm.max.toLocaleString()) + " $\n        "
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-a72e44ac", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2a1ea1a7\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/js/components/youtube.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2a1ea1a7\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/js/components/youtube.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("6263023e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2a1ea1a7\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./youtube.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2a1ea1a7\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./youtube.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6844c7d6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/js/components/stickySlider.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6844c7d6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/js/components/stickySlider.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("2a5213ac", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6844c7d6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./stickySlider.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6844c7d6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./stickySlider.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7bc4f64c\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/js/components/accordion.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7bc4f64c\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/js/components/accordion.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("2551f0ce", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7bc4f64c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./accordion.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7bc4f64c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./accordion.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8141a7c0\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/js/components/roadMap.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8141a7c0\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/js/components/roadMap.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("013e29e3", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8141a7c0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./roadMap.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8141a7c0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./roadMap.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a72e44ac\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/js/components/progressBar.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a72e44ac\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/js/components/progressBar.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("1a820a85", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a72e44ac\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./progressBar.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a72e44ac\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./progressBar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__("./node_modules/vue-style-loader/lib/listToStyles.js")

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./src/js/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bootstrap__ = __webpack_require__("./src/js/bootstrap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__("./node_modules/chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_SmoothScroll__ = __webpack_require__("./src/js/components/SmoothScroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_youtube__ = __webpack_require__("./src/js/components/youtube.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_youtube___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_youtube__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_carousel_3d__ = __webpack_require__("./node_modules/vue-carousel-3d/dist/vue-carousel-3d.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_carousel_3d___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vue_carousel_3d__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_accordion__ = __webpack_require__("./src/js/components/accordion.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_accordion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_accordion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_stickySlider__ = __webpack_require__("./src/js/components/stickySlider.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_stickySlider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_stickySlider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_roadMap__ = __webpack_require__("./src/js/components/roadMap.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_roadMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_roadMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_progressBar__ = __webpack_require__("./src/js/components/progressBar.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_progressBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_progressBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_slick_carousel__ = __webpack_require__("./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_slick_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_slick_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hchs_vue_charts__ = __webpack_require__("./node_modules/hchs-vue-charts/dist/vue-charts.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hchs_vue_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_hchs_vue_charts__);
/**
 * Imports
 */





/**
 * Components
 */
//import './components/heightToogle';










__WEBPACK_IMPORTED_MODULE_1_vue___default.a.use(VueCharts);

/**
 * APP
 */
var app = new __WEBPACK_IMPORTED_MODULE_1_vue___default.a({
    el: '#app',
    components: {
        'youtube': __WEBPACK_IMPORTED_MODULE_4__components_youtube___default.a,
        'accordion-list': __WEBPACK_IMPORTED_MODULE_6__components_accordion___default.a,
        'carousel-3d': __WEBPACK_IMPORTED_MODULE_5_vue_carousel_3d__["Carousel3d"],
        'slide': __WEBPACK_IMPORTED_MODULE_5_vue_carousel_3d__["Slide"],
        'sticky-slider': __WEBPACK_IMPORTED_MODULE_7__components_stickySlider___default.a,
        'road-map': __WEBPACK_IMPORTED_MODULE_8__components_roadMap___default.a,
        'progress-bar': __WEBPACK_IMPORTED_MODULE_9__components_progressBar___default.a
    },
    data: {
        economyLabels: ["2012", "2013", "2014", "2015", "2016", "2017"],
        economyOption: {
            legend: {
                display: false
            }
        },
        economyData: [{
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
            spanGaps: false
        }, {
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
            spanGaps: false
        }, {
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
            spanGaps: false
        }, {
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
            spanGaps: false
        }, {
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
            spanGaps: false
        }]
    },
    methods: {
        fixedNav: function fixedNav() {
            var nav = document.getElementById('js-fixed-nav');
            if (window.scrollY > 25) {
                nav.classList.add('fixed');
            } else {
                nav.classList.remove('fixed');
            }
            return true;
        }
    },
    mounted: function mounted() {
        window.addEventListener('scroll', this.fixedNav, { passive: true });
        $('.slider-fade').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 2000
        });

        ;[].forEach.call(document.querySelectorAll('.js-smooth-scroll'), function (el) {
            el.addEventListener('click', function (e) {
                e.preventDefault();

                new __WEBPACK_IMPORTED_MODULE_3__components_SmoothScroll__["a" /* default */](el.getAttribute('href'));
            });
        });
    },
    beforeDestroy: function beforeDestroy() {
        window.removeEventListener('scroll', this.fixedNav);
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/bootstrap.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {
window._ = __webpack_require__("./node_modules/lodash/lodash.js");
__webpack_require__("./node_modules/babel-polyfill/lib/index.js");

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.$ = __webpack_provided_window_dot_jQuery = __webpack_require__("./node_modules/jquery/dist/jquery.js");
} catch (e) {}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/components/SmoothScroll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Анимированный скролл.

var eventsList = ['keydown', 'wheel', 'mousewheel', 'MozMousePixelScroll', 'touchstart'];

var SmoothScroll = function () {
    function SmoothScroll(elem, duration, callback) {
        _classCallCheck(this, SmoothScroll);

        this.startFrom = window.pageYOffset;
        this.scrollHeight = SmoothScroll.findEndPoint(elem) - this.startFrom;
        this.duration = duration || SmoothScroll.calculateDuration(this.scrollHeight);

        this.callback = callback;

        this.inProcess = true;
        this.animate();
    }

    _createClass(SmoothScroll, [{
        key: 'animate',
        value: function animate() {
            var self = this;

            this.bindEvents();

            var start = performance.now();

            requestAnimationFrame(function animate(time) {
                var timePassed = Math.min(time - start, self.duration);
                var scrollTo = Math.round(self.scrollHeight * timePassed / self.duration);

                window.scrollTo(0, self.startFrom + scrollTo);

                if (self.inProcess && timePassed < self.duration) {
                    requestAnimationFrame(animate);
                } else {
                    self.stop();
                }
            });
        }
    }, {
        key: 'stop',
        value: function stop() {
            if (this.inProcess) {
                this.inProcess = false;
                this.unbindEvents();

                if (typeof this.callback === 'function') {
                    this.callback();
                    this.callback = undefined;
                }
            }
        }
    }, {
        key: 'bindEvents',
        value: function bindEvents() {
            var _this = this;

            this.stopProxy = function () {
                _this.stop();
            };

            eventsList.forEach(function (eventName) {
                document.addEventListener(eventName, _this.stopProxy, { passive: true });
            });
        }
    }, {
        key: 'unbindEvents',
        value: function unbindEvents() {
            var _this2 = this;

            eventsList.forEach(function (eventName) {
                document.removeEventListener(eventName, _this2.stopProxy);
            });

            this.stopProxy = undefined;
        }
    }], [{
        key: 'findEndPoint',
        value: function findEndPoint(elem) {
            if (typeof elem === 'string') {
                elem = document.querySelector(elem);
            }

            if (elem instanceof Element) {
                return elem.offsetTop;
            }

            if (Number(parseFloat(elem)) === elem) {
                return elem;
            }

            throw new Error('Невозможно определить точку назначения.');
        }
    }, {
        key: 'calculateDuration',
        value: function calculateDuration(height) {
            var duration = Math.abs(parseInt(height / 5));
            duration = Math.max(100, duration);
            duration = Math.min(1500, duration);

            return duration;
        }
    }]);

    return SmoothScroll;
}();

/* harmony default export */ __webpack_exports__["a"] = (SmoothScroll);

/***/ }),

/***/ "./src/js/components/accordion.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7bc4f64c\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/js/components/accordion.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/accordion.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7bc4f64c\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/accordion.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7bc4f64c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/js/components/accordion.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7bc4f64c", Component.options)
  } else {
    hotAPI.reload("data-v-7bc4f64c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./src/js/components/progressBar.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a72e44ac\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/js/components/progressBar.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/progressBar.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-a72e44ac\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/progressBar.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a72e44ac"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/js/components/progressBar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a72e44ac", Component.options)
  } else {
    hotAPI.reload("data-v-a72e44ac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./src/js/components/roadMap.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8141a7c0\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/js/components/roadMap.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/roadMap.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-8141a7c0\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/roadMap.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8141a7c0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/js/components/roadMap.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8141a7c0", Component.options)
  } else {
    hotAPI.reload("data-v-8141a7c0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./src/js/components/stickySlider.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6844c7d6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/js/components/stickySlider.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/stickySlider.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6844c7d6\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/stickySlider.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6844c7d6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/js/components/stickySlider.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6844c7d6", Component.options)
  } else {
    hotAPI.reload("data-v-6844c7d6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./src/js/components/youtube.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2a1ea1a7\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/js/components/youtube.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/youtube.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2a1ea1a7\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/youtube.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2a1ea1a7"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/js/components/youtube.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2a1ea1a7", Component.options)
  } else {
    hotAPI.reload("data-v-2a1ea1a7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./src/scss/app.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./src/js/app.js");
module.exports = __webpack_require__("./src/scss/app.scss");


/***/ })

},[0]);
//# sourceMappingURL=app.js.map