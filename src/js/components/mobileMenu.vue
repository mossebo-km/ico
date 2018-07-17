<template>
    <div class="mobile-menu">
        <div class="mobile-menu-button" id="js-mobnav-button">
            <div class="mobile-menu-button__el"></div>
            <div class="mobile-menu-button__el"></div>
            <div class="mobile-menu-button__el"></div>
        </div>
        <div class="mobile-menu-box" id="js-mobnav-menu">
            <div class="mobile-menu-list">
                <div class="menu-item">
                    <ul class="nav">
                        <li class="nav__item">
                            <a href="#whitepaper" class="js-smooth-scroll">Whitepaper</a>
                        </li>
                        <li class="nav__item">
                            <a href="#roadmap" class="js-smooth-scroll">RoadMap</a>
                        </li>
                        <li class="nav__item">
                            <a href="https://mossebo.market/" target="_blank">Mossebo.Market</a>
                        </li>
                    </ul>
                </div>

                <div class="lang-item">
                    <div class="lang-item__box">
                        <a href="" class="lang-item__flag symbol-flag-ru"></a>
                        Русский
                    </div>
                    <div class="lang-item__box">
                        <a href="" class="lang-item__flag symbol-flag-en"
                           js-tooltip="Другие языковые версии станут доступны 1 августа"></a>
                        English
                    </div>
                    <div class="lang-item__box">
                        <a href="" class="lang-item__flag symbol-flag-jp"
                           js-tooltip="Другие языковые версии станут доступны 1 августа"></a>
                        中国
                    </div>
                    <div class="lang-item__box">
                        <a href="" class="lang-item__flag symbol-flag-zh"
                           js-tooltip="Другие языковые версии станут доступны 1 августа"></a>

                        日本
                    </div>
                    <div class="lang-item__box">
                        <a href="" class="lang-item__flag symbol-flag-es"
                           js-tooltip="Другие языковые версии станут доступны 1 августа"></a>
                        Español
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mobileMenu",
        data() {
            return {
                button: null,
                menu: null,
            }
        },
        methods: {
            toogleMenu() {
                this.button.classList.toggle('is-active');
                this.menu.classList.toggle('is-active');
            }
        },
        mounted () {
            this.button = this.$el.querySelector('#js-mobnav-button');
            this.menu = this.$el.querySelector('#js-mobnav-menu');

            this.button.addEventListener('click', this.toogleMenu, {passive: true});
            this.menu.addEventListener('click', this.toogleMenu, {passive: true});
        },
        beforeDestroy () {
            this.button.removeEventListener('click', this.toogleMenu);
        }
    }
</script>

<style lang="scss" scoped>

    @import "../../scss/variables/colors";

    .mobile-menu {
        &-button {
            position: relative;
            width: 35px;
            height: 25px;
            padding: 5px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            cursor: pointer;
            &__el {
                position: relative;
                height: 3px;
                width: 100%;
                background: $color-primary;
                transition: 0.3s;
            }
            &.is-active {
                .mobile-menu-button__el {
                    &:nth-child(1) {
                        top: calc(50% - 2px);
                        transform: rotate(45deg);
                    }
                    &:nth-child(2) {
                        opacity: 0;
                    }
                    &:nth-child(3) {
                        top: calc(-50% + 1px);
                        transform: rotate(-45deg);
                    }
                }
            }
        }
        &-box {
            width: 300px;
            background: $color-background;
            padding: 30px 30px 30px;
            margin-top: 18px;
            box-sizing: border-box;
            position: absolute;
            z-index: 1;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);
            display: none;
            &.is-active {
                display: block;
            }
        }
        .logo-item {
            display: block;
            margin-bottom: 30px;
        }
        .menu-item {
            display: block;
            margin-bottom: 30px;
            .nav {
                &__item {
                    display: block;
                    width: 100%;
                    padding: 10px 0;
                    a {
                        padding: 15px 0;
                    }
                }
            }
        }
        .lang-item {
            display: block;
            &__flag {
                display: inline-block;
                vertical-align: middle;
                margin-right: 10px;
            }
            &__box {
                font-size: 14px;
                padding: 10px 0;
            }
        }
    }

</style>
