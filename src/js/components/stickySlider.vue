<template>
    <div>
        <div class="row">
            <div class="col-md-2">
                <div class="slider__item js-scroll-slide" v-for="(slider, index) in sliderItems">
                    <div class="h2">{{ slider.h2 }}</div>
                    <p v-for="text in slider.p">
                        {{ text }}
                    </p>
                </div>
            </div>
            <div class="col-2">
                <div class="slider__image js-scroll-image">
                    <div class="js-slide-image"
                         :style="'background-image: url(' + currentImagePath + ');'"
                    >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "stickySlider",
        data () {
            return {
                currentImagePath: '',
                sliderItems: [
                    {
                        h2: 'Рабочий прототип mossebo.market',
                        p: [
                            'Mossebo.market – действующий интернет-магазин мебели, декора и товаров для дома с 11 000 поставщиками по всему миру.',
                            'Через платформу mossebo.market ежедневно комплектуется не менее 175 проектов и делается от 2 500 мелких покупок.'
                        ],
                        image: 'assets/images/slider/1.png'
                    },
                    {
                        h2: 'Криптокошелек',
                        p: [
                            'На mossebo.market клиент может обменять Bitcoin, Ethirium, Dash и другие валюты на монету MSB и оплатить ей покупки со скидкой от 3 до 70 %. Покупка MSB доступна и за фиатные деньги.',
                        ],
                        image: 'assets/images/slider/2.png'
                    },
                    {
                        h2: 'Кабинет компаний для b2b расчетов',
                        p: [
                            'Каждому производителю доступны расчеты между поставщиками в MSB с безопасной сделкой, передачей документов и статистикой заказов.',
                        ],
                        image: 'assets/images/slider/3.png'
                    },
                    {
                        h2: 'Оплата товаров в MSB',
                        p: [
                            'Каждый товар mossebo.market можно купить за фиатные или криптоденьги в 2 клика'
                        ],
                        image: 'assets/images/slider/4.png'
                    },
                    {
                        h2: 'Начать продавать на mossebo.market может любой производитель',
                        p: [
                            'Загрузить товары на маркетплейс и принимать криптоплатежи может любой производитель, прошедший проверку качества mossebo.market'
                        ],
                        image: 'assets/images/slider/5.png'
                    },
                ],
            };
        },
        methods: {
            onScroll() {
                let scrolledImage = document.getElementsByClassName('js-scroll-image')
                let scrolledImageCoordinates = scrolledImage[0].getBoundingClientRect()
                let slides = document.getElementsByClassName('js-scroll-slide')

                for (let i = 0; i < slides.length; i++) {
                    let slide = slides[i]

                    let slideCoordinates = slide.getBoundingClientRect()

                    if (slideCoordinates.y <= scrolledImageCoordinates.y) {
                        if (slide.clientHeight / 2 + slideCoordinates.y > scrolledImageCoordinates.y) {

                            this.currentImagePath = this.sliderItems[i].image;
                            break
                        }
                    }
                }
            }
        },
        mounted () {
            window.addEventListener('scroll', this.onScroll, {passive: true});
        },
        beforeDestroy () {
            window.removeEventListener('scroll', this.onScroll);
        }
    }

</script>

<style lang="scss" scoped>

    .js-slide-image {
        width: 100%;
        height: 100%;
        position: relative;
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
        transition: 0.3s;
    }

</style>
