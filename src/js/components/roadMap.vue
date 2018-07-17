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
                currentImagePath: this.$root.getContent('roadMap.currentImagePath'),
                navigatorSlider: this.$root.getContent('roadMap.navigatorSlider'),
                sliders: this.$root.getContent('roadMap.sliders'),
            }
        },
        methods: {
            changeSlide: function (i) {
                if(this.sliders[i].image) {
                    this.currentImagePath = this.sliders[i].image;
                }
                return this.currentImagePath;
            }
        },
        created() {
            this.navigatorSlider.max = this.sliders.length;
        },
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
