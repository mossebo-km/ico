<template>
    <div>
        <div class="row">
            <div class="col-2">
                <div class="slider__item js-scroll-slide" v-for="(slider, index) in sliderItems">
                    <div class="h2">{{ slider.h2 }}</div>
                    <p v-for="text in slider.p">
                        {{ text }}
                    </p>
                    <a href="https://mossebo.market/"
                       target="_blank"
                       class="button button-primary"
                       v-show="index == 0"
                    >Перейти</a>
                    <div class="slider__image mobile-image">
                        <div class="js-slide-image" :style="'background-image: url(' + slider.image + ');'"
                        >
                        </div>
                    </div>
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
                currentImagePath: this.$root.getContent('stickySlider.currentImagePath'),
                sliderItems: this.$root.getContent('stickySlider.sliderItems'),
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

    @import "../../scss/variables/grid";
    .slider {
        &__item {
            height: 50vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            @media(max-width: $media-point-3) {
                padding-right: 35px;
            }
            @media(max-width: $media-point-4) {
                height: auto;
                padding-right: 0;
            }
        }
        .h2 {
            max-width: 480px;
        }
        p {
            max-width: 480px;
        }
        img {
            display: block;
            width: 100%;
            height: auto;
        }
        &__image {
            position: sticky;
            top: 20%;
            height: 550px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            box-shadow: 0 0 7px rgba(0,0,0,0.15);
            max-width: 620px;
            margin-left: auto;
            margin-right: auto;
            @media(max-width: $media-point-1) {

            }
            @media(max-width: $media-point-2) {
                height: 450px;
            }
            @media(max-width: $media-point-3) {
                height: 400px;
            }
            @media(max-width: $media-point-4) {
                position: relative;
                width: 95%;
                height: 300px;
                display: block;
                margin: 35px auto;

            }
        }
    }
    .js-slide-image {
        width: 100%;
        height: 100%;
        position: relative;
        background-size: cover;
        background-position: center top;
        background-repeat: no-repeat;
        transition: 0.3s;
        @media(max-width: $media-point-2) {
            background-size: cover;
        }
    }
    .button {
        margin-top: 30px;
        width: 120px;
        text-align: center;
    }
    .mobile-image {
        display: none;
        @media(max-width: $media-point-4) {
            display: block;
        }
    }
    @media(max-width: $media-point-4) {
        .js-scroll-image {
            display: none;
        }
    }

</style>
