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
                p: ['На mossebo.market клиент может обменять Bitcoin, Ethirium, Dash и другие валюты на монету MSB и оплатить ей покупки со скидкой от 3 до 70 %. Покупка MSB доступна и за фиатные деньги.'],
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
exports.push([module.i, "\n.player-box[data-v-2a1ea1a7] {\n  position: relative;\n  padding: 5px 0;\n}\n.thumbnail[data-v-2a1ea1a7] {\n  margin: auto;\n  width: 100%;\n  max-width: 100%;\n  background-size: contain;\n  background-position: 50%;\n  background-repeat: no-repeat;\n}\n.thumbnail[data-v-2a1ea1a7]:before {\n    content: \"\";\n    display: block;\n    padding-top: 56.25%;\n}\n.play[data-v-2a1ea1a7] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -35px;\n  margin-left: -35px;\n  width: 70px;\n  height: 70px;\n  background: #FCD133;\n  color: #fff;\n  font-size: 30px;\n  padding-left: 12px;\n  padding-top: 6px;\n  border: 1px solid #FCD133;\n  border-radius: 50%;\n  z-index: 9;\n  cursor: pointer;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  opacity: .8;\n}\n.play[data-v-2a1ea1a7]:hover {\n    opacity: 1;\n}\n.video[data-v-2a1ea1a7] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n}\n", "", {"version":3,"sources":["/Users/vladstarkovsky/DEVSRV/mossebo-ico/src/js/components/youtube.vue"],"names":[],"mappings":";AAAA;EACE,mBAAmB;EACnB,eAAe;CAAE;AAEnB;EACE,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,yBAAyB;EACzB,yBAAyB;EACzB,6BAA6B;CAAE;AAC/B;IACE,YAAY;IACZ,eAAe;IACf,oBAAoB;CAAE;AAE1B;EACE,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;EACjB,0BAA0B;EAC1B,mBAAmB;EACnB,WAAW;EACX,gBAAgB;EAChB,+BAAuB;UAAvB,uBAAuB;EACvB,yBAAiB;EAAjB,iBAAiB;EACjB,YAAY;CAAE;AACd;IACE,WAAW;CAAE;AAEjB;EACE,mBAAmB;EACnB,QAAQ;EACR,SAAS;EACT,OAAO;EACP,UAAU;EACV,YAAY;EACZ,aAAa;CAAE","file":"youtube.vue","sourcesContent":[".player-box {\n  position: relative;\n  padding: 5px 0; }\n\n.thumbnail {\n  margin: auto;\n  width: 100%;\n  max-width: 100%;\n  background-size: contain;\n  background-position: 50%;\n  background-repeat: no-repeat; }\n  .thumbnail:before {\n    content: \"\";\n    display: block;\n    padding-top: 56.25%; }\n\n.play {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -35px;\n  margin-left: -35px;\n  width: 70px;\n  height: 70px;\n  background: #FCD133;\n  color: #fff;\n  font-size: 30px;\n  padding-left: 12px;\n  padding-top: 6px;\n  border: 1px solid #FCD133;\n  border-radius: 50%;\n  z-index: 9;\n  cursor: pointer;\n  box-sizing: border-box;\n  transition: 0.3s;\n  opacity: .8; }\n  .play:hover {\n    opacity: 1; }\n\n.video {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6844c7d6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/js/components/stickySlider.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"stickySlider.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7bc4f64c\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/js/components/accordion.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.faq-container[data-v-7bc4f64c] {\n  width: 100%;\n}\n.faq-question[data-v-7bc4f64c] {\n  padding: 0;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.faq-description[data-v-7bc4f64c] {\n  font-size: 18px;\n  cursor: pointer;\n  padding: 8px 0;\n}\n.faq-description span[data-v-7bc4f64c] {\n    margin-left: 35px;\n    color: #FCD133;\n    display: inline-block;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n}\n.faq-content[data-v-7bc4f64c] {\n  font-size: 14px;\n  display: block;\n  height: auto;\n  max-width: 450px;\n  max-height: 0;\n  padding-left: 2px;\n  -webkit-transform: scaleY(0);\n          transform: scaleY(0);\n  -webkit-transform-origin: top;\n          transform-origin: top;\n  -webkit-transition: max-height 0.2s, -webkit-transform 0.2s;\n  transition: max-height 0.2s, -webkit-transform 0.2s;\n  transition: max-height 0.2s, transform 0.2s;\n  transition: max-height 0.2s, transform 0.2s, -webkit-transform 0.2s;\n}\n.faq-content p[data-v-7bc4f64c] {\n    margin: 0;\n    padding: 20px 0;\n}\n.faq-question.open .faq-description span[data-v-7bc4f64c]:last-child {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.faq-question.open .faq-content[data-v-7bc4f64c] {\n  max-height: 1000px;\n  -webkit-transform: scaleY(1);\n          transform: scaleY(1);\n}\n", "", {"version":3,"sources":["/Users/vladstarkovsky/DEVSRV/mossebo-ico/src/js/components/accordion.vue"],"names":[],"mappings":";AAAA;EACE,YAAY;CAAE;AAEhB;EACE,WAAW;EACX,6BAAqB;EAArB,qBAAqB;CAAE;AAEzB;EACE,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;CAAE;AACjB;IACE,kBAAkB;IAClB,eAAe;IACf,sBAAsB;IACtB,6BAAqB;IAArB,qBAAqB;CAAE;AAE3B;EACE,gBAAgB;EAChB,eAAe;EACf,aAAa;EACb,iBAAiB;EACjB,cAAc;EACd,kBAAkB;EAClB,6BAAqB;UAArB,qBAAqB;EACrB,8BAAsB;UAAtB,sBAAsB;EACtB,4DAA4C;EAA5C,oDAA4C;EAA5C,4CAA4C;EAA5C,oEAA4C;CAAE;AAC9C;IACE,UAAU;IACV,gBAAgB;CAAE;AAEtB;EACE,iCAAyB;UAAzB,yBAAyB;CAAE;AAE7B;EACE,mBAAmB;EACnB,6BAAqB;UAArB,qBAAqB;CAAE","file":"accordion.vue","sourcesContent":[".faq-container {\n  width: 100%; }\n\n.faq-question {\n  padding: 0;\n  transition: all 0.3s; }\n\n.faq-description {\n  font-size: 18px;\n  cursor: pointer;\n  padding: 8px 0; }\n  .faq-description span {\n    margin-left: 35px;\n    color: #FCD133;\n    display: inline-block;\n    transition: all 0.3s; }\n\n.faq-content {\n  font-size: 14px;\n  display: block;\n  height: auto;\n  max-width: 450px;\n  max-height: 0;\n  padding-left: 2px;\n  transform: scaleY(0);\n  transform-origin: top;\n  transition: max-height 0.2s, transform 0.2s; }\n  .faq-content p {\n    margin: 0;\n    padding: 20px 0; }\n\n.faq-question.open .faq-description span:last-child {\n  transform: rotate(90deg); }\n\n.faq-question.open .faq-content {\n  max-height: 1000px;\n  transform: scaleY(1); }\n"],"sourceRoot":""}]);

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
              })
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

/***/ "./node_modules/vue-slider-component/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define("vue-slider-component",[],e):"object"==typeof exports?exports["vue-slider-component"]=e():t["vue-slider-component"]=e()}(this,function(){return function(t){function e(s){if(i[s])return i[s].exports;var r=i[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t,e,i){i(7);var s=i(5)(i(1),i(6),null,null);t.exports=s.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){var t="undefined"!=typeof window?window.devicePixelRatio||1:1;return function(e){return Math.round(e*t)/t}}();e.default={name:"VueSliderComponent",props:{width:{type:[Number,String],default:"auto"},height:{type:[Number,String],default:6},data:{type:Array,default:null},dotSize:{type:Number,default:16},dotWidth:{type:Number,required:!1},dotHeight:{type:Number,required:!1},min:{type:Number,default:0},max:{type:Number,default:100},interval:{type:Number,default:1},show:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},piecewise:{type:Boolean,default:!1},tooltip:{type:[String,Boolean],default:"always"},eventType:{type:String,default:"auto"},direction:{type:String,default:"horizontal"},reverse:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},clickable:{type:Boolean,default:!0},speed:{type:Number,default:.5},realTime:{type:Boolean,default:!1},stopPropagation:{type:Boolean,default:!1},value:{type:[String,Number,Array,Object],default:0},piecewiseLabel:{type:Boolean,default:!1},debug:{type:Boolean,default:!0},fixed:{type:Boolean,default:!1},processDragable:{type:Boolean,default:!1},useKeyboard:{type:Boolean,default:!1},actionsKeyboard:{type:Array,default:function(){return[function(t){return t-1},function(t){return t+1}]}},tooltipMerge:{type:Boolean,default:!0},sliderStyle:[Array,Object,Function],focusStyle:[Array,Object,Function],tooltipDir:[Array,String],formatter:[String,Function],mergeFormatter:[String,Function],piecewiseStyle:Object,piecewiseActiveStyle:Object,processStyle:Object,bgStyle:Object,tooltipStyle:[Array,Object,Function],labelStyle:Object,labelActiveStyle:Object},data:function(){return{flag:!1,keydownFlag:null,focusFlag:!1,processFlag:!1,processSign:null,size:0,fixedValue:0,focusSlider:0,currentValue:0,currentSlider:0,isComponentExists:!0,isMounted:!1}},computed:{dotWidthVal:function(){return"number"==typeof this.dotWidth?this.dotWidth:this.dotSize},dotHeightVal:function(){return"number"==typeof this.dotHeight?this.dotHeight:this.dotSize},flowDirection:function(){return"vue-slider-"+this.direction+(this.reverse?"-reverse":"")},tooltipMergedPosition:function(){if(!this.isMounted)return{};var t=this.tooltipDirection[0];if(this.$refs.dot0){if("vertical"===this.direction){var e={};return e[t]="-"+(this.dotHeightVal/2-this.width/2+9)+"px",e}var i={};return i[t]="-"+(this.dotWidthVal/2-this.height/2+9)+"px",i.left="50%",i}},tooltipDirection:function(){var t=this.tooltipDir||("vertical"===this.direction?"left":"top");return Array.isArray(t)?this.isRange?t:t[1]:this.isRange?[t,t]:t},tooltipStatus:function(){return"hover"===this.tooltip&&this.flag?"vue-slider-always":this.tooltip?"vue-slider-"+this.tooltip:""},tooltipClass:function(){return["vue-slider-tooltip-"+this.tooltipDirection,"vue-slider-tooltip"]},isDisabled:function(){return"none"===this.eventType||this.disabled},disabledClass:function(){return this.disabled?"vue-slider-disabled":""},stateClass:function(){return{"vue-slider-state-process-drag":this.processFlag,"vue-slider-state-drag":this.flag&&!this.processFlag&&!this.keydownFlag,"vue-slider-state-focus":this.focusFlag}},isRange:function(){return Array.isArray(this.value)},slider:function(){return this.isRange?[this.$refs.dot0,this.$refs.dot1]:this.$refs.dot},minimum:function(){return this.data?0:this.min},val:{get:function(){return this.data?this.isRange?[this.data[this.currentValue[0]],this.data[this.currentValue[1]]]:this.data[this.currentValue]:this.currentValue},set:function(t){if(this.data)if(this.isRange){var e=this.data.indexOf(t[0]),i=this.data.indexOf(t[1]);e>-1&&i>-1&&(this.currentValue=[e,i])}else{var s=this.data.indexOf(t);s>-1&&(this.currentValue=s)}else this.currentValue=t}},currentIndex:function(){return this.isRange?this.data?this.currentValue:[this.getIndexByValue(this.currentValue[0]),this.getIndexByValue(this.currentValue[1])]:this.getIndexByValue(this.currentValue)},indexRange:function(){return this.isRange?this.currentIndex:[0,this.currentIndex]},maximum:function(){return this.data?this.data.length-1:this.max},multiple:function(){var t=(""+this.interval).split(".")[1];return t?Math.pow(10,t.length):1},spacing:function(){return this.data?1:this.interval},total:function(){return this.data?this.data.length-1:(Math.floor((this.maximum-this.minimum)*this.multiple)%(this.interval*this.multiple)!=0&&this.printError("Prop[interval] is illegal, Please make sure that the interval can be divisible"),(this.maximum-this.minimum)/this.interval)},gap:function(){return this.size/this.total},position:function(){return this.isRange?[(this.currentValue[0]-this.minimum)/this.spacing*this.gap,(this.currentValue[1]-this.minimum)/this.spacing*this.gap]:(this.currentValue-this.minimum)/this.spacing*this.gap},limit:function(){return this.isRange?this.fixed?[[0,(this.maximum-this.fixedValue*this.spacing)/this.spacing*this.gap],[(this.minimum+this.fixedValue*this.spacing)/this.spacing*this.gap,this.size]]:[[0,this.position[1]],[this.position[0],this.size]]:[0,this.size]},valueLimit:function(){return this.isRange?this.fixed?[[this.minimum,this.maximum-this.fixedValue*this.spacing],[this.minimum+this.fixedValue*this.spacing,this.maximum]]:[[this.minimum,this.currentValue[1]],[this.currentValue[0],this.maximum]]:[this.minimum,this.maximum]},idleSlider:function(){return 0===this.currentSlider?1:0},wrapStyles:function(){return"vertical"===this.direction?{height:"number"==typeof this.height?this.height+"px":this.height,padding:this.dotHeightVal/2+"px "+this.dotWidthVal/2+"px"}:{width:"number"==typeof this.width?this.width+"px":this.width,padding:this.dotHeightVal/2+"px "+this.dotWidthVal/2+"px"}},sliderStyles:function(){return Array.isArray(this.sliderStyle)?this.isRange?this.sliderStyle:this.sliderStyle[1]:"function"==typeof this.sliderStyle?this.sliderStyle(this.val,this.currentIndex):this.isRange?[this.sliderStyle,this.sliderStyle]:this.sliderStyle},focusStyles:function(){return Array.isArray(this.focusStyle)?this.isRange?this.focusStyle:this.focusStyle[1]:"function"==typeof this.focusStyle?this.focusStyle(this.val,this.currentIndex):this.isRange?[this.focusStyle,this.focusStyle]:this.focusStyle},tooltipStyles:function(){return Array.isArray(this.tooltipStyle)?this.isRange?this.tooltipStyle:this.tooltipStyle[1]:"function"==typeof this.tooltipStyle?this.tooltipStyle(this.val,this.currentIndex):this.isRange?[this.tooltipStyle,this.tooltipStyle]:this.tooltipStyle},elemStyles:function(){return"vertical"===this.direction?{width:this.width+"px",height:"100%"}:{height:this.height+"px"}},dotStyles:function(){return"vertical"===this.direction?{width:this.dotWidthVal+"px",height:this.dotHeightVal+"px",left:-(this.dotWidthVal-this.width)/2+"px"}:{width:this.dotWidthVal+"px",height:this.dotHeightVal+"px",top:-(this.dotHeightVal-this.height)/2+"px"}},piecewiseDotStyle:function(){return"vertical"===this.direction?{width:this.width+"px",height:this.width+"px"}:{width:this.height+"px",height:this.height+"px"}},piecewiseDotWrap:function(){if(!this.piecewise&&!this.piecewiseLabel)return!1;for(var t=[],e=0;e<=this.total;e++){var i="vertical"===this.direction?{bottom:this.gap*e-this.width/2+"px",left:0}:{left:this.gap*e-this.height/2+"px",top:0},s=this.reverse?this.total-e:e,r=this.data?this.data[s]:this.spacing*s+this.min;t.push({style:i,label:this.formatter?this.formatting(r):r,inRange:s>=this.indexRange[0]&&s<=this.indexRange[1]})}return t}},watch:{value:function(t){this.flag||this.setValue(t,!0)},max:function(t){if(t<this.min)return this.printError("The maximum value can not be less than the minimum value.");var e=this.limitValue(this.val);this.setValue(e),this.refresh()},min:function(t){if(t>this.max)return this.printError("The minimum value can not be greater than the maximum value.");var e=this.limitValue(this.val);this.setValue(e),this.refresh()},show:function(t){var e=this;t&&!this.size&&this.$nextTick(function(){e.refresh()})},fixed:function(){this.computedFixedValue()}},methods:{bindEvents:function(){document.addEventListener("touchmove",this.moving,{passive:!1}),document.addEventListener("touchend",this.moveEnd,{passive:!1}),document.addEventListener("mousedown",this.blurSlider),document.addEventListener("mousemove",this.moving),document.addEventListener("mouseup",this.moveEnd),document.addEventListener("mouseleave",this.moveEnd),document.addEventListener("keydown",this.handleKeydown),document.addEventListener("keyup",this.handleKeyup),window.addEventListener("resize",this.refresh),this.isRange&&this.tooltipMerge&&(this.$refs.dot0.addEventListener("transitionend",this.handleOverlapTooltip),this.$refs.dot1.addEventListener("transitionend",this.handleOverlapTooltip))},unbindEvents:function(){document.removeEventListener("touchmove",this.moving),document.removeEventListener("touchend",this.moveEnd),document.removeEventListener("mousedown",this.blurSlider),document.removeEventListener("mousemove",this.moving),document.removeEventListener("mouseup",this.moveEnd),document.removeEventListener("mouseleave",this.moveEnd),document.removeEventListener("keydown",this.handleKeydown),document.removeEventListener("keyup",this.handleKeyup),window.removeEventListener("resize",this.refresh),this.isRange&&this.tooltipMerge&&(this.$refs.dot0.removeEventListener("transitionend",this.handleOverlapTooltip),this.$refs.dot1.removeEventListener("transitionend",this.handleOverlapTooltip))},handleKeydown:function(t){if(!this.useKeyboard||!this.focusFlag)return!1;switch(t.keyCode){case 37:case 40:t.preventDefault(),this.keydownFlag=!0,this.flag=!0,this.changeFocusSlider(this.actionsKeyboard[0]);break;case 38:case 39:t.preventDefault(),this.keydownFlag=!0,this.flag=!0,this.changeFocusSlider(this.actionsKeyboard[1])}},handleKeyup:function(){this.keydownFlag&&(this.keydownFlag=!1,this.flag=!1)},changeFocusSlider:function(t){var e=this;if(this.isRange){var i=this.currentIndex.map(function(i,s){if(s===e.focusSlider||e.fixed){var r=t(i),o=e.fixed?e.valueLimit[s]:[0,e.total];if(r<=o[1]&&r>=o[0])return r}return i});i[0]>i[1]&&(this.focusSlider=0===this.focusSlider?1:0,i=i.reverse()),this.setIndex(i)}else this.setIndex(t(this.currentIndex))},blurSlider:function(t){var e=this.isRange?this.$refs["dot"+this.focusSlider]:this.$refs.dot;if(!e||e===t.target)return!1;this.focusFlag=!1},formatting:function(t){return"string"==typeof this.formatter?this.formatter.replace(/\{value\}/,t):this.formatter(t)},mergeFormatting:function(t,e){return"string"==typeof this.mergeFormatter?this.mergeFormatter.replace(/\{(value1|value2)\}/g,function(i,s){return"value1"===s?t:e}):this.mergeFormatter(t,e)},getPos:function(t){return this.realTime&&this.getStaticData(),"vertical"===this.direction?this.reverse?t.pageY-this.offset:this.size-(t.pageY-this.offset):this.reverse?this.size-(t.clientX-this.offset):t.clientX-this.offset},processClick:function(t){this.fixed&&t.stopPropagation()},wrapClick:function(t){if(this.isDisabled||!this.clickable||this.processFlag)return!1;var e=this.getPos(t);this.isRange&&(this.currentSlider=e>(this.position[1]-this.position[0])/2+this.position[0]?1:0),this.setValueOnPos(e)},moveStart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments[2];if(this.isDisabled)return!1;if(this.stopPropagation&&t.stopPropagation(),this.isRange&&(this.currentSlider=e,i)){if(!this.processDragable)return!1;this.processFlag=!0,this.processSign={pos:this.position,start:this.getPos(t.targetTouches&&t.targetTouches[0]?t.targetTouches[0]:t)}}!i&&this.useKeyboard&&(this.focusFlag=!0,this.focusSlider=e),this.flag=!0,this.$emit("drag-start",this)},moving:function(t){if(this.stopPropagation&&t.stopPropagation(),!this.flag)return!1;t.preventDefault(),t.targetTouches&&t.targetTouches[0]&&(t=t.targetTouches[0]),this.processFlag?(this.currentSlider=0,this.setValueOnPos(this.processSign.pos[0]+this.getPos(t)-this.processSign.start,!0),this.currentSlider=1,this.setValueOnPos(this.processSign.pos[1]+this.getPos(t)-this.processSign.start,!0)):this.setValueOnPos(this.getPos(t),!0),this.isRange&&this.tooltipMerge&&this.handleOverlapTooltip()},moveEnd:function(t){var e=this;if(this.stopPropagation&&t.stopPropagation(),!this.flag)return!1;this.$emit("drag-end",this),this.lazy&&this.isDiff(this.val,this.value)&&this.syncValue(),this.flag=!1,window.setTimeout(function(){e.processFlag=!1},0),this.setPosition()},setValueOnPos:function(t,e){var i=this.isRange?this.limit[this.currentSlider]:this.limit,s=this.isRange?this.valueLimit[this.currentSlider]:this.valueLimit;if(t>=i[0]&&t<=i[1]){this.setTransform(t);var r=this.getValueByIndex(Math.round(t/this.gap));this.setCurrentValue(r,e),this.isRange&&this.fixed&&(this.setTransform(t+this.fixedValue*this.gap*(0===this.currentSlider?1:-1),!0),this.setCurrentValue(r+this.fixedValue*this.spacing*(0===this.currentSlider?1:-1),e,!0))}else t<i[0]?(this.setTransform(i[0]),this.setCurrentValue(s[0]),this.isRange&&this.fixed?(this.setTransform(this.limit[this.idleSlider][0],!0),this.setCurrentValue(this.valueLimit[this.idleSlider][0],e,!0)):this.fixed||1!==this.currentSlider||(this.focusSlider=0,this.currentSlider=0)):(this.setTransform(i[1]),this.setCurrentValue(s[1]),this.isRange&&this.fixed?(this.setTransform(this.limit[this.idleSlider][1],!0),this.setCurrentValue(this.valueLimit[this.idleSlider][1],e,!0)):this.fixed||0!==this.currentSlider||(this.focusSlider=1,this.currentSlider=1))},isDiff:function(t,e){return Object.prototype.toString.call(t)!==Object.prototype.toString.call(e)||(Array.isArray(t)&&t.length===e.length?t.some(function(t,i){return t!==e[i]}):t!==e)},setCurrentValue:function(t,e,i){var s=i?this.idleSlider:this.currentSlider;if(t<this.minimum||t>this.maximum)return!1;this.isRange?this.isDiff(this.currentValue[s],t)&&(this.currentValue.splice(s,1,t),this.lazy&&this.flag||this.syncValue()):this.isDiff(this.currentValue,t)&&(this.currentValue=t,this.lazy&&this.flag||this.syncValue()),e||this.setPosition()},getValueByIndex:function(t){return(this.spacing*this.multiple*t+this.minimum*this.multiple)/this.multiple},getIndexByValue:function(t){return Math.round((t-this.minimum)*this.multiple)/(this.spacing*this.multiple)},setIndex:function(t){if(Array.isArray(t)&&this.isRange){var e=void 0;e=this.data?[this.data[t[0]],this.data[t[1]]]:[this.getValueByIndex(t[0]),this.getValueByIndex(t[1])],this.setValue(e)}else t=this.getValueByIndex(t),this.isRange&&(this.currentSlider=t>(this.currentValue[1]-this.currentValue[0])/2+this.currentValue[0]?1:0),this.setCurrentValue(t)},setValue:function(t,e,i){var s=this;if(this.isDiff(this.val,t)){var r=this.limitValue(t);this.val=this.isRange?r.concat():r,this.computedFixedValue(),this.syncValue(e)}this.$nextTick(function(){return s.setPosition(i)})},computedFixedValue:function(){if(!this.fixed)return this.fixedValue=0,!1;this.fixedValue=this.currentIndex[1]-this.currentIndex[0]},setPosition:function(t){this.flag||this.setTransitionTime(void 0===t?this.speed:t),this.isRange?(this.setTransform(this.position[0],1===this.currentSlider),this.setTransform(this.position[1],0===this.currentSlider)):this.setTransform(this.position),this.flag||this.setTransitionTime(0)},setTransform:function(t,e){var i=e?this.idleSlider:this.currentSlider,r=s(("vertical"===this.direction?this.dotHeightVal/2-t:t-this.dotWidthVal/2)*(this.reverse?-1:1)),o="vertical"===this.direction?"translateY("+r+"px)":"translateX("+r+"px)",n=this.fixed?this.fixedValue*this.gap+"px":(0===i?this.position[1]-t:t-this.position[0])+"px",l=this.fixed?(0===i?t:t-this.fixedValue*this.gap)+"px":(0===i?t:this.position[0])+"px";this.isRange?(this.slider[i].style.transform=o,this.slider[i].style.WebkitTransform=o,this.slider[i].style.msTransform=o,"vertical"===this.direction?(this.$refs.process.style.height=n,this.$refs.process.style[this.reverse?"top":"bottom"]=l):(this.$refs.process.style.width=n,this.$refs.process.style[this.reverse?"right":"left"]=l)):(this.slider.style.transform=o,this.slider.style.WebkitTransform=o,this.slider.style.msTransform=o,"vertical"===this.direction?(this.$refs.process.style.height=t+"px",this.$refs.process.style[this.reverse?"top":"bottom"]=0):(this.$refs.process.style.width=t+"px",this.$refs.process.style[this.reverse?"right":"left"]=0))},setTransitionTime:function(t){if(t||this.$refs.process.offsetWidth,this.isRange){for(var e=0;e<this.slider.length;e++)this.slider[e].style.transitionDuration=t+"s",this.slider[e].style.WebkitTransitionDuration=t+"s";this.$refs.process.style.transitionDuration=t+"s",this.$refs.process.style.WebkitTransitionDuration=t+"s"}else this.slider.style.transitionDuration=t+"s",this.slider.style.WebkitTransitionDuration=t+"s",this.$refs.process.style.transitionDuration=t+"s",this.$refs.process.style.WebkitTransitionDuration=t+"s"},limitValue:function(t){var e=this;if(this.data)return t;var i=function(i){return i<e.min?(e.printError("The value of the slider is "+t+", the minimum value is "+e.min+", the value of this slider can not be less than the minimum value"),e.min):i>e.max?(e.printError("The value of the slider is "+t+", the maximum value is "+e.max+", the value of this slider can not be greater than the maximum value"),e.max):i};return this.isRange?t.map(function(t){return i(t)}):i(t)},syncValue:function(t){var e=this.isRange?this.val.concat():this.val;this.$emit("input",e),t||this.$emit("callback",e)},getValue:function(){return this.val},getIndex:function(){return this.currentIndex},getStaticData:function(){this.$refs.elem&&(this.size="vertical"===this.direction?this.$refs.elem.offsetHeight:this.$refs.elem.offsetWidth,this.offset="vertical"===this.direction?this.$refs.elem.getBoundingClientRect().top+window.pageYOffset||document.documentElement.scrollTop:this.$refs.elem.getBoundingClientRect().left)},refresh:function(){this.$refs.elem&&(this.getStaticData(),this.computedFixedValue(),this.setPosition())},printError:function(t){this.debug&&console.error("[VueSlider error]: "+t)},handleOverlapTooltip:function(){var t=this.tooltipDirection[0]===this.tooltipDirection[1];if(this.isRange&&t){var e=this.$refs.tooltip0,i=this.$refs.tooltip1,s=e.getBoundingClientRect().right,r=i.getBoundingClientRect().left,o=e.getBoundingClientRect().y,n=i.getBoundingClientRect().y+i.getBoundingClientRect().height,l="horizontal"===this.direction&&s>r,a="vertical"===this.direction&&n>o;l||a?this.handleDisplayMergedTooltip(!0):this.handleDisplayMergedTooltip(!1)}},handleDisplayMergedTooltip:function(t){var e=this.$refs.tooltip0,i=this.$refs.tooltip1,s=this.$refs.process.getElementsByClassName("vue-merged-tooltip")[0];t?(e.style.visibility="hidden",i.style.visibility="hidden",s.style.visibility="visible"):(e.style.visibility="visible",i.style.visibility="visible",s.style.visibility="hidden")}},mounted:function(){var t=this;if(this.isComponentExists=!0,"undefined"==typeof window||"undefined"==typeof document)return this.printError("window or document is undefined, can not be initialization.");this.$nextTick(function(){t.isComponentExists&&(t.getStaticData(),t.setValue(t.limitValue(t.value),!0,0),t.bindEvents())}),this.isMounted=!0},beforeDestroy:function(){this.isComponentExists=!1,this.unbindEvents()}}},function(t,e,i){"use strict";var s=i(0);t.exports=s},function(t,e,i){e=t.exports=i(4)(),e.push([t.i,'.vue-slider-component{position:relative;box-sizing:border-box;-ms-user-select:none;user-select:none;-webkit-user-select:none;-moz-user-select:none;-o-user-select:none}.vue-slider-component.vue-slider-disabled{opacity:.5;cursor:not-allowed}.vue-slider-component.vue-slider-has-label{margin-bottom:15px}.vue-slider-component.vue-slider-disabled .vue-slider-dot{cursor:not-allowed}.vue-slider-component .vue-slider{position:relative;display:block;border-radius:15px;background-color:#ccc}.vue-slider-component .vue-slider:after{content:"";position:absolute;left:0;top:0;width:100%;height:100%;z-index:2}.vue-slider-component .vue-slider-process{position:absolute;border-radius:15px;background-color:#3498db;transition:all 0s;z-index:1}.vue-slider-component .vue-slider-process.vue-slider-process-dragable{cursor:pointer;z-index:3}.vue-slider-component.vue-slider-horizontal .vue-slider-process{width:0;height:100%;top:0;left:0;will-change:width}.vue-slider-component.vue-slider-vertical .vue-slider-process{width:100%;height:0;bottom:0;left:0;will-change:height}.vue-slider-component.vue-slider-horizontal-reverse .vue-slider-process{width:0;height:100%;top:0;right:0}.vue-slider-component.vue-slider-vertical-reverse .vue-slider-process{width:100%;height:0;top:0;left:0}.vue-slider-component .vue-slider-dot{position:absolute;border-radius:50%;background-color:#fff;box-shadow:.5px .5px 2px 1px rgba(0,0,0,.32);transition:all 0s;will-change:transform;cursor:pointer;z-index:4}.vue-slider-component .vue-slider-dot.vue-slider-dot-focus{box-shadow:0 0 2px 1px #3498db}.vue-slider-component .vue-slider-dot.vue-slider-dot-dragging{z-index:5}.vue-slider-component.vue-slider-horizontal .vue-slider-dot{left:0}.vue-slider-component.vue-slider-vertical .vue-slider-dot{bottom:0}.vue-slider-component.vue-slider-horizontal-reverse .vue-slider-dot{right:0}.vue-slider-component.vue-slider-vertical-reverse .vue-slider-dot{top:0}.vue-slider-component .vue-slider-tooltip-wrap{display:none;position:absolute;z-index:9}.vue-slider-component .vue-slider-tooltip{display:block;font-size:14px;white-space:nowrap;padding:2px 5px;min-width:20px;text-align:center;color:#fff;border-radius:5px;border:1px solid #3498db;background-color:#3498db}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-top{top:-9px;left:50%;-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%)}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-bottom{bottom:-9px;left:50%;-webkit-transform:translate(-50%,100%);transform:translate(-50%,100%)}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-left{top:50%;left:-9px;-webkit-transform:translate(-100%,-50%);transform:translate(-100%,-50%)}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-right{top:50%;right:-9px;-webkit-transform:translate(100%,-50%);transform:translate(100%,-50%)}.vue-slider-component .vue-slider-tooltip-top .vue-merged-tooltip .vue-slider-tooltip:before,.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-top .vue-slider-tooltip:before{content:"";position:absolute;bottom:-10px;left:50%;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-top-color:inherit;-webkit-transform:translate(-50%);transform:translate(-50%)}.vue-slider-component .vue-slider-tooltip-wrap.vue-merged-tooltip{display:block;visibility:hidden}.vue-slider-component .vue-slider-tooltip-bottom .vue-merged-tooltip .vue-slider-tooltip:before,.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-bottom .vue-slider-tooltip:before{content:"";position:absolute;top:-10px;left:50%;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-bottom-color:inherit;-webkit-transform:translate(-50%);transform:translate(-50%)}.vue-slider-component .vue-slider-tooltip-left .vue-merged-tooltip .vue-slider-tooltip:before,.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-left .vue-slider-tooltip:before{content:"";position:absolute;top:50%;right:-10px;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-left-color:inherit;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.vue-slider-component .vue-slider-tooltip-right .vue-merged-tooltip .vue-slider-tooltip:before,.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-right .vue-slider-tooltip:before{content:"";position:absolute;top:50%;left:-10px;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-right-color:inherit;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.vue-slider-component .vue-slider-dot.vue-slider-hover:hover .vue-slider-tooltip-wrap{display:block}.vue-slider-component .vue-slider-dot.vue-slider-always .vue-slider-tooltip-wrap{display:block!important}.vue-slider-component .vue-slider-piecewise{position:absolute;width:100%;padding:0;margin:0;left:0;top:0;height:100%;list-style:none}.vue-slider-component .vue-slider-piecewise-item{position:absolute;width:8px;height:8px}.vue-slider-component .vue-slider-piecewise-dot{position:absolute;left:50%;top:50%;width:100%;height:100%;display:inline-block;background-color:rgba(0,0,0,.16);border-radius:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:2;transition:all .3s}.vue-slider-component .vue-slider-piecewise-item:first-child .vue-slider-piecewise-dot,.vue-slider-component .vue-slider-piecewise-item:last-child .vue-slider-piecewise-dot{visibility:hidden}.vue-slider-component.vue-slider-horizontal-reverse .vue-slider-piecewise-label,.vue-slider-component.vue-slider-horizontal .vue-slider-piecewise-label{position:absolute;display:inline-block;top:100%;left:50%;white-space:nowrap;font-size:12px;color:#333;-webkit-transform:translate(-50%,8px);transform:translate(-50%,8px);visibility:visible}.vue-slider-component.vue-slider-vertical-reverse .vue-slider-piecewise-label,.vue-slider-component.vue-slider-vertical .vue-slider-piecewise-label{position:absolute;display:inline-block;top:50%;left:100%;white-space:nowrap;font-size:12px;color:#333;-webkit-transform:translate(8px,-50%);transform:translate(8px,-50%);visibility:visible}.vue-slider-component .vue-slider-sr-only{clip:rect(1px,1px,1px,1px);height:1px;width:1px;overflow:hidden;position:absolute!important}',""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var s={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(s[o]=!0)}for(r=0;r<e.length;r++){var n=e[r];"number"==typeof n[0]&&s[n[0]]||(i&&!n[2]?n[2]=i:i&&(n[2]="("+n[2]+") and ("+i+")"),t.push(n))}},t}},function(t,e){t.exports=function(t,e,i,s){var r,o=t=t||{},n=typeof t.default;"object"!==n&&"function"!==n||(r=t,o=t.default);var l="function"==typeof o?o.options:o;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),i&&(l._scopeId=i),s){var a=Object.create(l.computed||null);Object.keys(s).forEach(function(t){var e=s[t];a[t]=function(){return e}}),l.computed=a}return{esModule:r,exports:o,options:l}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],ref:"wrap",class:["vue-slider-component",t.flowDirection,t.disabledClass,t.stateClass,{"vue-slider-has-label":t.piecewiseLabel}],style:t.wrapStyles,on:{click:t.wrapClick}},[i("div",{ref:"elem",staticClass:"vue-slider",style:[t.elemStyles,t.bgStyle],attrs:{"aria-hidden":"true"}},[t.isRange?[i("div",{key:"dot0",ref:"dot0",class:[t.tooltipStatus,"vue-slider-dot",{"vue-slider-dot-focus":t.focusFlag&&0===t.focusSlider,"vue-slider-dot-dragging":t.flag&&0===t.currentSlider}],style:[t.dotStyles,t.sliderStyles[0],t.focusFlag&&0===t.focusSlider?t.focusStyles[0]:null],on:{mousedown:function(e){t.moveStart(e,0)},touchstart:function(e){t.moveStart(e,0)}}},[i("div",{ref:"tooltip0",class:["vue-slider-tooltip-"+t.tooltipDirection[0],"vue-slider-tooltip-wrap"]},[t._t("tooltip",[i("span",{staticClass:"vue-slider-tooltip",style:t.tooltipStyles[0]},[t._v(t._s(t.formatter?t.formatting(t.val[0]):t.val[0]))])],{value:t.val[0],index:0})],2)]),t._v(" "),i("div",{key:"dot1",ref:"dot1",class:[t.tooltipStatus,"vue-slider-dot",{"vue-slider-dot-focus":t.focusFlag&&1===t.focusSlider,"vue-slider-dot-dragging":t.flag&&1===t.currentSlider}],style:[t.dotStyles,t.sliderStyles[1],t.focusFlag&&1===t.focusSlider?t.focusStyles[1]:null],on:{mousedown:function(e){t.moveStart(e,1)},touchstart:function(e){t.moveStart(e,1)}}},[i("div",{ref:"tooltip1",class:["vue-slider-tooltip-"+t.tooltipDirection[1],"vue-slider-tooltip-wrap"]},[t._t("tooltip",[i("span",{staticClass:"vue-slider-tooltip",style:t.tooltipStyles[1]},[t._v(t._s(t.formatter?t.formatting(t.val[1]):t.val[1]))])],{value:t.val[1],index:1})],2)])]:[i("div",{key:"dot",ref:"dot",class:[t.tooltipStatus,"vue-slider-dot",{"vue-slider-dot-focus":t.focusFlag&&0===t.focusSlider,"vue-slider-dot-dragging":t.flag&&0===t.currentSlider}],style:[t.dotStyles,t.sliderStyles,t.focusFlag&&0===t.focusSlider?t.focusStyles:null],on:{mousedown:t.moveStart,touchstart:t.moveStart}},[i("div",{class:["vue-slider-tooltip-"+t.tooltipDirection,"vue-slider-tooltip-wrap"]},[t._t("tooltip",[i("span",{staticClass:"vue-slider-tooltip",style:t.tooltipStyles},[t._v(t._s(t.formatter?t.formatting(t.val):t.val))])],{value:t.val})],2)])],t._v(" "),i("ul",{staticClass:"vue-slider-piecewise"},t._l(t.piecewiseDotWrap,function(e,s){return i("li",{key:s,staticClass:"vue-slider-piecewise-item",style:[t.piecewiseDotStyle,e.style]},[t._t("piecewise",[t.piecewise?i("span",{staticClass:"vue-slider-piecewise-dot",style:[t.piecewiseStyle,e.inRange?t.piecewiseActiveStyle:null]}):t._e()],{label:e.label,index:s,first:0===s,last:s===t.piecewiseDotWrap.length-1,active:e.inRange}),t._v(" "),t._t("label",[t.piecewiseLabel?i("span",{staticClass:"vue-slider-piecewise-label",style:[t.labelStyle,e.inRange?t.labelActiveStyle:null]},[t._v("\n            "+t._s(e.label)+"\n          ")]):t._e()],{label:e.label,index:s,first:0===s,last:s===t.piecewiseDotWrap.length-1,active:e.inRange})],2)})),t._v(" "),i("div",{ref:"process",class:["vue-slider-process",{"vue-slider-process-dragable":t.isRange&&t.processDragable}],style:t.processStyle,on:{click:t.processClick,mousedown:function(e){t.moveStart(e,0,!0)},touchstart:function(e){t.moveStart(e,0,!0)}}},[i("div",{ref:"mergedTooltip",staticClass:"vue-merged-tooltip",class:["vue-slider-tooltip-"+t.tooltipDirection[0],"vue-slider-tooltip-wrap"],style:t.tooltipMergedPosition},[t._t("tooltip",[i("span",{staticClass:"vue-slider-tooltip",style:t.tooltipStyles},[t._v("\n            "+t._s(t.mergeFormatter?t.mergeFormatting(t.val[0],t.val[1]):t.formatter?t.formatting(t.val[0])+" - "+t.formatting(t.val[1]):t.val[0]+" - "+t.val[1])+"\n          ")])])],2)]),t._v(" "),t.isRange||t.data?t._e():i("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticClass:"vue-slider-sr-only",attrs:{type:"range",min:t.min,max:t.max},domProps:{value:t.val},on:{__r:function(e){t.val=e.target.value}}})],2)])},staticRenderFns:[]}},function(t,e,i){var s=i(3);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(8)("743d98f5",s,!0)},function(t,e,i){function s(t){for(var e=0;e<t.length;e++){var i=t[e],s=d[i.id];if(s){s.refs++;for(var r=0;r<s.parts.length;r++)s.parts[r](i.parts[r]);for(;r<i.parts.length;r++)s.parts.push(o(i.parts[r]));s.parts.length>i.parts.length&&(s.parts.length=i.parts.length)}else{for(var n=[],r=0;r<i.parts.length;r++)n.push(o(i.parts[r]));d[i.id]={id:i.id,refs:1,parts:n}}}}function r(){var t=document.createElement("style");return t.type="text/css",h.appendChild(t),t}function o(t){var e,i,s=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(s){if(f)return v;s.parentNode.removeChild(s)}if(m){var o=p++;s=c||(c=r()),e=n.bind(null,s,o,!1),i=n.bind(null,s,o,!0)}else s=r(),e=l.bind(null,s),i=function(){s.parentNode.removeChild(s)};return e(t),function(s){if(s){if(s.css===t.css&&s.media===t.media&&s.sourceMap===t.sourceMap)return;e(t=s)}else i()}}function n(t,e,i,s){var r=i?"":s.css;if(t.styleSheet)t.styleSheet.cssText=g(e,r);else{var o=document.createTextNode(r),n=t.childNodes;n[e]&&t.removeChild(n[e]),n.length?t.insertBefore(o,n[e]):t.appendChild(o)}}function l(t,e){var i=e.css,s=e.media,r=e.sourceMap;if(s&&t.setAttribute("media",s),r&&(i+="\n/*# sourceURL="+r.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=i(9),d={},h=a&&(document.head||document.getElementsByTagName("head")[0]),c=null,p=0,f=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,i){f=i;var r=u(t,e);return s(r),function(e){for(var i=[],o=0;o<r.length;o++){var n=r[o],l=d[n.id];l.refs--,i.push(l)}e?(r=u(t,e),s(r)):r=[];for(var o=0;o<i.length;o++){var l=i[o];if(0===l.refs){for(var a=0;a<l.parts.length;a++)l.parts[a]();delete d[l.id]}}}};var g=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var i=[],s={},r=0;r<e.length;r++){var o=e[r],n=o[0],l=o[1],a=o[2],u=o[3],d={id:t+":"+r,css:l,media:a,sourceMap:u};s[n]?s[n].parts.push(d):i.push(s[n]={id:n,parts:[d]})}return i}}])});

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_youtube__ = __webpack_require__("./src/js/components/youtube.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_youtube___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_youtube__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_carousel_3d__ = __webpack_require__("./node_modules/vue-carousel-3d/dist/vue-carousel-3d.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_carousel_3d___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_carousel_3d__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_accordion__ = __webpack_require__("./src/js/components/accordion.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_accordion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_accordion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_stickySlider__ = __webpack_require__("./src/js/components/stickySlider.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_stickySlider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_stickySlider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_roadMap__ = __webpack_require__("./src/js/components/roadMap.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_roadMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_roadMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_slick_carousel__ = __webpack_require__("./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_slick_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_slick_carousel__);
/**
 * Imports
 */




/**
 * Components
 */
//import './components/heightToogle'







/**
 * APP
 */
var app = new __WEBPACK_IMPORTED_MODULE_1_vue___default.a({
    el: '#app',
    components: {
        'youtube': __WEBPACK_IMPORTED_MODULE_2__components_youtube___default.a,
        'accordion-list': __WEBPACK_IMPORTED_MODULE_4__components_accordion___default.a,
        'carousel-3d': __WEBPACK_IMPORTED_MODULE_3_vue_carousel_3d__["Carousel3d"],
        'slide': __WEBPACK_IMPORTED_MODULE_3_vue_carousel_3d__["Slide"],
        'sticky-slider': __WEBPACK_IMPORTED_MODULE_5__components_stickySlider___default.a,
        'road-map': __WEBPACK_IMPORTED_MODULE_6__components_roadMap___default.a
    },
    data: {},
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
            cssEase: 'linear'
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