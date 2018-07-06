<template>
    <div>
        <div class="navigator">
            <ul class="years">
                <li :class="{ active: navigatorSlider.value == 1 }">2018</li>
                <li :class="{ active: navigatorSlider.value == 9 }">2019</li>
                <li :class="{ active: navigatorSlider.value == 16 }">2020</li>
                <li :class="{ active: navigatorSlider.value == 20 }">2021</li>
                <li :class="{ active: navigatorSlider.value == 24 }">2022</li>
                <li :class="{ active: navigatorSlider.value == 28 }">2023</li>
            </ul>
            <vue-slider
                v-bind="navigatorSlider"
                v-model="navigatorSlider.value"
            >
            </vue-slider>
        </div>
        <div class="body">
            <div class="year">{{ sliders[navigatorSlider.value-1].year }}</div>
            <div class="month">{{ sliders[navigatorSlider.value-1].month }}</div>
            <div class="text">{{ sliders[navigatorSlider.value-1].text }}</div>
        </div>
        <div class="map">
            <div class="map-box">
                <div class="map-dot"></div>
                <div class="map-image"
                     :style="'background-image: url(' + changeSlide(navigatorSlider.value-1) + ');'"
                >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import vueSlider from 'vue-slider-component';

    export default {
        name: "roadMap",
        components: {
            vueSlider
        },
        data() {
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
                        "backgroundColor": "#E6E6E6",
                    },
                    processStyle: {
                        "backgroundImage": "-webkit-linear-gradient(left, #FFB533, #FCD133)"
                    },
                    sliderStyle: [
                        {
                            "backgroundColor": "#fff",
                            "boxShadow": "0 0 13px rgba(0,0,0,.36)"
                        },
                    ],
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
                sliders: [
                    {
                        year: 2018,
                        month: 'Январь',
                        text: 'Открытие 40-й Студии Mossebo, присутствие в 7-ми странах мира',
                        image: 'assets/images/maps/1.png'
                    },
                    {
                        year: 2018,
                        month: 'Март',
                        text: 'Старт разработки интернет-магазина Mossebo.Market',
                        image: 'assets/images/maps/1.png'
                    },
                    {
                        year: 2018,
                        month: 'Апрель',
                        text: 'Релиз MVP и продолжение разработки',
                        image: 'assets/images/maps/1.png'
                    },
                    {
                        year: 2018,
                        month: 'Май',
                        text: 'Запуск интернет-магазина Mossebo Market (версия 2.0)',
                        image: 'assets/images/maps/1.png'
                    },
                    {
                        year: 2018,
                        month: 'Июнь',
                        text: 'Private Pre-Sale',
                        image: 'assets/images/maps/1.png'
                    },
                    {
                        year: 2018,
                        month: 'Июль-Август',
                        text: 'Pre-Sale',
                        image: 'assets/images/maps/1.png'
                    },
                    {
                        year: 2018,
                        month: 'Ноябрь',
                        text: 'Генерация и распределение токенов',
                        image: 'assets/images/maps/1.png'
                    },
                    {
                        year: 2018,
                        month: 'Декабрь',
                        text: 'Выход токена MSBO на биржу',
                        image: 'assets/images/maps/1.png'
                    },
                    {
                        year: 2019,
                        month: '1 квартал',
                        text: 'Составление технического задания, закупка оборудования и разработка программного обеспечения',
                        image: 'assets/images/maps/2.png'
                    },
                    {
                        year: 2019,
                        month: 'Апрель',
                        text: 'Запуск версии 3.0 интернет-магазина Mossebo.Market',
                        image: 'assets/images/maps/2.png'
                    },
                    {
                        year: 2019,
                        month: 'Апрель-Август',
                        text: 'Полномасштабное развёртывание платформы Mossebo.Market на территории России и СНГ',
                        image: 'assets/images/maps/2.png'
                    },
                    {
                        year: 2019,
                        month: 'Август',
                        text: 'Выкуп части токенов согласно программе',
                        image: 'assets/images/maps/2.png'
                    },
                    {
                        year: 2019,
                        month: 'Сентябрь',
                        text: 'Второй этап размещения токенов согласно программе',
                        image: 'assets/images/maps/2.png'
                    },
                    {
                        year: 2019,
                        month: 'Декабрь',
                        text: 'Экспансия платформы Mossebo.Market в Европу, открытие регионального центра',
                        image: 'assets/images/maps/2.png'
                    },
                    {
                        year: 2019,
                        month: 'Декабрь-Август',
                        text: 'Полномасштабное развёртывание платформы Mossebo Market на территории Европы',
                        image: 'assets/images/maps/2.png'
                    },
                    {
                        year: 2020,
                        month: 'Август',
                        text: 'Выкуп части токенов согласно программе',
                        image: 'assets/images/maps/3.png'
                    },
                    {
                        year: 2020,
                        month: 'Сентябрь',
                        text: 'Третий этап размещения токенов согласно программе',
                        image: 'assets/images/maps/3.png'
                    },
                    {
                        year: 2020,
                        month: 'Декабрь',
                        text: 'Экспансия платформы Mossebo Market в Азию, открытие регионального центра',
                        image: 'assets/images/maps/3.png'
                    },
                    {
                        year: 2020,
                        month: 'Декабрь-Август',
                        text: 'Полномасштабное развёртывание платформы Mossebo.Market на территории Азии',
                        image: 'assets/images/maps/3.png'
                    },
                    {
                        year: 2021,
                        month: 'Август',
                        text: 'Выкуп части токенов согласно программе',
                        image: 'assets/images/maps/4.png'
                    },
                    {
                        year: 2021,
                        month: 'Сентябрь',
                        text: 'Четвертый этап размещения токенов согласно программе',
                        image: 'assets/images/maps/4.png'
                    },
                    {
                        year: 2021,
                        month: 'Декабрь',
                        text: 'Экспансия платформы Mossebo.Market в Северную Америку, открытие регионального центра',
                        image: 'assets/images/maps/4.png'
                    },
                    {
                        year: 2021,
                        month: 'Декабрь-Август',
                        text: 'Полномасштабное развёртывание платформы Mossebo.Market на территории Северной Америки',
                        image: 'assets/images/maps/4.png'
                    },
                    {
                        year: 2022,
                        month: 'Август',
                        text: 'Выкуп части токенов согласно программе',
                        image: 'assets/images/maps/5.png'
                    },
                    {
                        year: 2022,
                        month: 'Сентябрь',
                        text: 'Пятый этап размещения токенов согласно программе',
                        image: 'assets/images/maps/5.png'
                    },
                    {
                        year: 2022,
                        month: 'Декабрь',
                        text: 'Экспансия платформы Mossebo Market в Южную Америку, открытие регионального центра',
                        image: 'assets/images/maps/5.png'
                    },
                    {
                        year: 2022,
                        month: 'Декабрь-Август',
                        text: 'Полномасштабное развёртывание платформы Mossebo Market на территории Южной Америки',
                        image: 'assets/images/maps/5.png'
                    },
                    {
                        year: 2023,
                        month: 'Август',
                        text: 'Выкуп части токенов согласно программе',
                        image: 'assets/images/maps/5.png'
                    },
                    {
                        year: 2023,
                        month: 'Сентябрь',
                        text: 'Шестой этап размещения токенов согласно программе',
                        image: 'assets/images/maps/5.png'
                    },
                    {
                        year: 2023,
                        month: 'Декабрь',
                        text: 'Экспансия платформы Mossebo Market в Океанию, открытие регионального центра',
                        image: 'assets/images/maps/5.png'
                    },
                ],
            }
        },
        created() {
            this.navigatorSlider.max = this.sliders.length;
        },
        methods: {
            changeSlide: function (i) {
                if(this.sliders[i].image) {
                    this.currentImagePath = this.sliders[i].image;
                }
                return this.currentImagePath;
            }
        }
    }
</script>

<style lang="scss" scoped>

    @import "../../scss/variables/colors";

    .navigator {
        width: 100%;
        .years {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: flex-start;
            li {
                font-size: 14px;
                color: $color-text-secondary;
                &:nth-child(1) {
                    width: 27%;
                }
                &:nth-child(2) {
                    width: 23.5%;
                }
                &:nth-child(3) {
                    width: 13.5%;
                }
                &:nth-child(4) {
                    width: 13.5%;
                }
                &:nth-child(5) {
                    width: 13.5%;
                }
            }
            li.active {
                color: $color-primary;
            }
        }
    }
    .body {
        .year {
            font-size: 24px;
            color: $color-primary;
            font-weight: 500;
            padding: 15px 0;
        }
        .month {
            font-size: 14px;
            color: $color-primary;
        }
        .text {
            font-size: 14px;
            padding: 15px 0;
        }
    }

</style>
