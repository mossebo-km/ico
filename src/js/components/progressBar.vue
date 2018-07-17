<template>
    <div class="progress-bar-box">
        <div class="progress-bar js-progress-bar">
            <div class="progress-bar__current">
                <div class="progress-bar__line"
                     :style="{ width: width + 'px' }"
                >
                </div>
            </div>
            <div class="progress-bar__1"></div>
            <div class="progress-bar__2"></div>
            <div class="progress-bar__3"></div>
        </div>
        <div class="row">
            <div class="col-3">0 $</div>
            <div class="col-3" v-show="current > 0">
                {{ current.toLocaleString() }} $
            </div>
            <div class="col-3">
                {{ max.toLocaleString() }} $
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "progressBar",
        props: {
            current: Number,
            max: Number
        },
        data() {
            return {
                width: Number
            }
        },
        methods: {
            getWidth() {
                let percent = 100 * this.current / this.max;
                let progressEl = this.$el.getElementsByClassName('js-progress-bar');
                let progressWidth = progressEl[0].clientWidth;
                return progressWidth * percent / 100
            }
        },
        mounted() {
            this.width = this.getWidth();
        }
    }
</script>

<style lang="scss" scoped>

    @import "../../scss/variables/colors";

    $progress-height: 23px;

    .progress-bar {
        box-sizing: border-box;
        height: $progress-height;
        width: 100%;
        position: relative;
        border-radius: 30px;
        border: none;
        box-shadow: 0 1px 5px rgba(0,0,0,0.15);
        background: $color-background;
        &-box {
            max-width: 550px;
            margin: 35px 0;
            .row {
                .col-3 {
                    padding-top: 15px;
                    width: 33%;
                    &:nth-child(1) {
                        text-align: left;
                    }
                    &:nth-child(2) {
                        text-align: center;
                    }
                    &:nth-child(3) {
                        text-align: right;
                        color: $color-primary;
                    }
                }
            }
        }
        &__current {
            position: relative;
            top: 0;
            left: 0;
            float: left;
            height: $progress-height;
            border-radius: 30px;
            padding-left: 11px;
            padding-right: 11px;
            background: #fee500;
            background: -moz-linear-gradient(left, #fee500 0%, #ffb533 100%);
            background: -webkit-linear-gradient(left, #fee500 0%,#ffb533 100%);
            background: linear-gradient(to right, #fee500 0%,#ffb533 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fee500', endColorstr='#ffb533',GradientType=1 );
            z-index: 9;
        }
        &__1 {
            position: relative;
            float: left;
            width: $progress-height;
            height: $progress-height;
            background: #fff;
            border-radius: 30px;
            box-shadow: 8px 0 0 #ffb533;
            z-index: 3;
            left: -15px;
            opacity: 0;
            animation: progress-bar-animation1 3s infinite;
        }
        &__2 {
            position: relative;
            float: left;
            width: $progress-height;
            height: $progress-height;
            background: #fff;
            border-radius: 30px;
            box-shadow: 8px 0 0 #ffb533;
            z-index: 2;
            left: -22px;
            opacity: 0;
            animation: progress-bar-animation2 3s infinite;
        }
        &__3 {
            position: relative;
            float: left;
            width: $progress-height;
            height: $progress-height;
            background: #fff;
            border-radius: 30px;
            box-shadow: 8px 0 0 #ffb533;
            z-index: 1;
            left: -30px;
            opacity: 0;
            animation: progress-bar-animation3 3s infinite;
        }
    }

</style>
