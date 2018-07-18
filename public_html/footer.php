<?php
/**
 * Created by IntelliJ IDEA.
 * User: vladstarkovsky
 * Date: 17.07.2018
 * Time: 18:06
 */
?>


<footer class="footer">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-4">
                <a href="#top" class="logo">
                    <svg class="symbol-icon symbol-logo">
                        <use xlink:href="assets/images/icons.svg#symbol-logo"></use>
                    </svg>
                </a>
                <div class="copy">Copyright © 2018 MOSSEBO</div>
            </div>
            <div class="col-4">
                <ul class="footer__nav">
                    <li>
                        <a href="#whitepaper" class="js-smooth-scroll">Whitepaper</a>
                    </li>
                    <li>
                        <a href="#roadmap" class="js-smooth-scroll">Roadmap</a>
                    </li>
                    <li>
                        <a href="https://mossebo.market/" target="_blank">Mossebo.Market</a>
                    </li>
                    <li>
                        <a href="https://mossebo.studio/" target="_blank">Mossebo.Studio</a>
                    </li>
                </ul>
            </div>
            <div class="col-4">
                <p style="display: none;">Санкт-Петербург Обводного канала наб., 118а, литера Х</p>
                <p style="display: none;">8 (800) 707-83-47</p>
                <p>start@mossebo.io</p>
            </div>
            <div class="col-4">
                <div class="social-links">
                    <a href="https://www.instagram.com/remont.design/" class="social-links__item" target="_blank">
                        <svg class="symbol-icon social-in">
                            <use xlink:href="assets/images/icons.svg#social-in"></use>
                        </svg>
                    </a>
                    <a href="https://vk.com/design_mossebo" class="social-links__item" target="_blank">
                        <svg class="symbol-icon social-vk">
                            <use xlink:href="assets/images/icons.svg#social-vk"></use>
                        </svg>
                    </a>
                    <a href="https://www.facebook.com/mossebodesign/" class="social-links__item" target="_blank">
                        <svg class="symbol-icon social-fb">
                            <use xlink:href="assets/images/icons.svg#social-fb"></use>
                        </svg>
                    </a>
                    <a href="https://www.youtube.com/channel/UCmoIMunKnQwi0ui_G9W0Wmw"
                       class="social-links__item d-none d-sm-inline-block d-md-inline-block d-lg-inline-block d-xl-inline-block"
                       target="_blank">
                        <svg class="symbol-icon social-you">
                            <use xlink:href="assets/images/icons.svg#social-you"></use>
                        </svg>
                    </a>
                </div>
                <ul class="footer__nav">
                    <li>
                        <a href="#">Публичная оферта</a>
                    </li>
                    <li>
                        <a href="#">Политика конфиденциальности</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>
</div>

<script>
    window.mossebo = {
        faqList: [
            {
                title: 'Анализ рынка',
                msg: 'Команда проекта собрала и оценила как открытую, так и внутреннюю статистику продаж и методы взаимодействия производителей в сфере дизайна интерьера в 5 странах.',
            },
            {
                title: 'Опыт компании Mossebo',
                msg: 'Мы представили выжимку из 5 лет роста компании Mossebo на конкурентном рынке и  принципы работы нашего холдинга.',
            },
            {
                title: 'План проекта',
                msg: 'Проект рассчитан на бурный рост и экспансию в каждый регион, и все этапы роста смоделированы опытной командой Mossebo.',
            },
            {
                title: 'Технические детали проекта',
                msg: 'Раскрываем вопросы безопасности платежей и инвестирования в проект, а также применение blockchain технологии для разных частей платформы mossebo.market',
            },
            {
                title: 'Правила Private Presale',
                msg: 'Особые правила Private Presale и pre-ICO с гарантиями выкупа токенов у инвесторов.',
            },
        ],
        stickySlider: {
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
                        'На mossebo.market клиент может обменять Bitcoin, Ethirium, Dash и другие валюты на монету MSB и оплатить ей покупки со скидкой от 3 до 70 %.',
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
        },
        roadMap: {
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
                    month: 'Август',
                    text: 'Private Pre-Sale',
                    image: 'assets/images/maps/1.png'
                },
                {
                    year: 2018,
                    month: 'Сентябрь-Октябрь',
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
                    image: 'assets/images/maps/6.png'
                },
                {
                    year: 2023,
                    month: 'Сентябрь',
                    text: 'Шестой этап размещения токенов согласно программе',
                    image: 'assets/images/maps/6.png'
                },
                {
                    year: 2023,
                    month: 'Декабрь',
                    text: 'Экспансия платформы Mossebo Market в Океанию, открытие регионального центра',
                    image: 'assets/images/maps/6.png'
                },
            ],
        },
        channelLink: {
            links: {
                0: 'https://www.youtube.com/channel/UCmoIMunKnQwi0ui_G9W0Wmw',
                1: 'https://www.youtube.com/channel/UCmYjYyeZDuFb9hOgEUNYJuQ',
                2: 'https://www.youtube.com/channel/UCX4d_WGl2y04iATm6DtXAWg',
            },
            title: 'Перейти на канал'
        }
    }
</script>

<script src="<?php echo mix('assets/js/manifest.js') ?>" defer></script>
<script src="<?php echo mix('assets/js/vendor.js') ?>" defer></script>
<script src="<?php echo mix('assets/js/app.js') ?>" defer></script>


<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter49592680 = new Ya.Metrika2({
                    id:49592680,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/tag.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks2");
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/49592680" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->


</body>
</html>
