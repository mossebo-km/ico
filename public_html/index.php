<?php
require_once './mix.php';
?>

<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="stylesheet" href="<?php echo mix('assets/css/app.css') ?>">

    <title>Mossebo.ICO</title>
</head>
<body>
<div id="app">
    <a id="top"></a>
    <header class="header">
        <div class="fixed-nav" id="js-fixed-nav">
            <div class="container">
                <div class="row align-items-center">
                    <div class="mobile-nav">
                        <mobile-menu></mobile-menu>
                    </div>
                    <div class="logo-item">
                        <a href="#top" class="logo js-smooth-scroll">
                            <svg class="symbol-icon symbol-logo">
                                <use xlink:href="assets/images/icons.svg#symbol-logo"></use>
                            </svg>
                        </a>
                    </div>
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
                    <div class="link-item">
                        <a href="#top" class="button button-primary js-smooth-scroll">Стать инвестором</a>
                    </div>
                    <div class="lang-item">
                        <a href="" class="lang-item__flag symbol-flag-ru"></a>
                        <a href="" class="lang-item__flag symbol-flag-en"
                           js-tooltip="Другие языковые версии станут доступны 1 августа"></a>
                        <a href="" class="lang-item__flag symbol-flag-jp"
                           js-tooltip="Другие языковые версии станут доступны 1 августа"></a>
                        <a href="" class="lang-item__flag symbol-flag-zh"
                           js-tooltip="Другие языковые версии станут доступны 1 августа"></a>
                        <a href="" class="lang-item__flag symbol-flag-es"
                           js-tooltip="Другие языковые версии станут доступны 1 августа"></a>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div class="utp-main">
        <div class="container">
            <div class="circle-primary-box">
                <div class="circle-primary circle-primary__1">
                    <div class="circle-primary circle-primary__2">
                        <div class="circle-primary circle-primary__3"></div>
                    </div>
                </div>
            </div>

            <div class="row align-items-center">
                <div class="col-2">
                    <div class="utp-main__content">
                        <div class="h1">Криптомаркетплейс для b2b и b2c</div>
                        <p>Международная компания Mossebo расширяет проект mossebo.market для крипторынка</p>
                        <strong>Принять участие в проекте</strong>
                    </div>
                    <div class="subscribe">
                        <form class="subscribe__form">
                            <input
                                type="text"
                                placeholder="Введите ваш E-mail"
                                class="subscribe__input"
                            >
                            <button class="subscribe__button">
                                <svg class="symbol-icon symbol-arrow-right">
                                    <use xlink:href="assets/images/icons.svg#symbol-arrow-right"></use>
                                </svg>
                            </button>
                        </form>
                        <a href="http://t.me/mosseboio_bot" target="_blank" class="subscribe__icon">
                            <svg class="symbol-icon direct-tg">
                                <use xlink:href="assets/images/icons.svg#direct-tg"></use>
                            </svg>
                        </a>
                        <a href="https://www.messenger.com/t/mossebo.market" target="_blank" class="subscribe__icon">
                            <svg class="symbol-icon direct-fb">
                                <use xlink:href="assets/images/icons.svg#direct-fb"></use>
                            </svg>
                        </a>
                        <a href="#" target="_blank" class="subscribe__icon">
                            <svg class="symbol-icon direct-wechat">
                                <use xlink:href="assets/images/icons.svg#direct-wechat"></use>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="col-2">
                    <youtube
                        video-id="zPmsBF8L760"
                        video-thumb="assets/images/video_prewiev.jpg"
                    >
                    </youtube>
                </div>
            </div>
        </div>
    </div>

    <div class="container we-best">
        <div class="row align-items-center">
            <div class="col-3">
                <div class="we-best__item">
                    <div class="we-best__head">
                        <div class="we-best__icon"
                             style="background-image: url(assets/images/we-best/1.png);"
                        >
                        </div>
                        <div class="we-best__subtitle">Защита авторских прав потребителей</div>
                    </div>
                    <div class="we-best__body">
                        Блокчейн платформа автоматически следит за лицензионными выплатами авторам
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="we-best__item">
                    <div class="we-best__head">
                        <div class="we-best__icon" style="background-image: url(assets/images/we-best/2.png);"
                        >
                        </div>
                        <div class="we-best__subtitle">B2B и B2C крипторасчеты</div>
                    </div>
                    <div class="we-best__body">
                        Поставщики mossebo.market оплачивают контракты друг с другом
                        на единой криптоплатформе
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="we-best__item">
                    <div class="we-best__head">
                        <div class="we-best__icon" style="background-image: url(assets/images/we-best/3.png);"
                        >
                        </div>
                        <div class="we-best__subtitle">Инвестиции в токены производителей</div>
                    </div>
                    <div class="we-best__body">
                        Пользователи платформы могут инвестировать в производителей реального сектора экономики
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container about">
        <div class="about__title">
            <div class="h2">Лидер в сфере дизайна интерьера и крупнейший маркетплейс товаров для дома</div>
        </div>
        <div class="row align-items-center">
            <div class="col-2 about__slider">
                <div class="slider-fade">
                    <div class="slider-fade__image"
                         style="background-image: url(assets/images/photos/6.jpg);">
                    </div>
                    <div class="slider-fade__image"
                         style="background-image: url(assets/images/photos/2.jpg);">
                    </div>
                    <div class="slider-fade__image"
                         style="background-image: url(assets/images/photos/1.jpg);">
                    </div>
                    <div class="slider-fade__image"
                         style="background-image: url(assets/images/photos/3.jpg);">
                    </div>
                    <div class="slider-fade__image"
                         style="background-image: url(assets/images/photos/4.jpg);">
                    </div>
                    <div class="slider-fade__image"
                         style="background-image: url(assets/images/photos/5.jpg);">
                    </div>
                    <div class="slider-fade__image"
                         style="background-image: url(assets/images/photos/7.jpg);">
                    </div>
                    <div class="slider-fade__image"
                         style="background-image: url(assets/images/photos/8.jpg);">
                    </div>
                    <div class="slider-fade__image"
                         style="background-image: url(assets/images/photos/9.jpg);">
                    </div>
                    <div class="slider-fade__image"
                         style="background-image: url(assets/images/photos/10.jpg);">
                    </div>
                </div>
            </div>
            <div class="col-2 about__description">
                <div class="h3">
                    Mossebo – лидер рынка дизайна интерьера
                    с 40 студиями в 7 странах
                </div>
                <p>Дизайнеры Mossebo создают сотни проектов интерьера в месяц
                    и комплектует их мебелью и предметами декора через площадку mossebo.market.</p>
                <p>Mossebo собрала в единую базу 11 000 производителей мебели
                    и декора со всего мира.</p>
            </div>
        </div>
        <div class="d-p-4">
            <div class="h2">Лидер в сфере дизайна интерьера и крупнейший маркетплейс товаров для дома</div>
            <p>Mossebo – лидер рынка дизайна интерьера
                с 40 студиями в 7 странах</p>
            <p>Дизайнеры Mossebo создают сотни проектов интерьера в месяц
                и комплектует их мебелью и предметами декора через площадку mossebo.market.</p>
            <p>Mossebo собрала в единую базу 11 000 производителей мебели
                и декора со всего мира.</p>
        </div>
        <a id="whitepaper"></a>
    </div>

    <div class="container whitepaper">
        <div class="whitepaper__title">
            <div class="h2">Whitepaper</div>
        </div>
        <div class="download">
            <a href="#" class="download__item"
               js-tooltip="Другие языковые версии станут доступны 1 августа">
                <span class="download__button">
                        <svg class="symbol-icon symbol-arrow-down">
                            <use xlink:href="assets/images/icons.svg#symbol-arrow-down"></use>
                        </svg>
                </span>
                English
            </a>
            <a href="#" class="download__item"
               js-tooltip="Другие языковые версии станут доступны 1 августа">
                <span class="download__button">
                        <svg class="symbol-icon symbol-arrow-down">
                            <use xlink:href="assets/images/icons.svg#symbol-arrow-down"></use>
                        </svg>
                </span>
                Español
            </a>
            <a href="#" class="download__item"
               js-tooltip="Для получения Witepaper заполните форму ниже">
                <span class="download__button">
                        <svg class="symbol-icon symbol-arrow-down">
                            <use xlink:href="assets/images/icons.svg#symbol-arrow-down"></use>
                        </svg>
                </span>
                Русский
            </a>
            <a href="#" class="download__item"
               js-tooltip="Другие языковые версии станут доступны 1 августа">
                <span class="download__button">
                        <svg class="symbol-icon symbol-arrow-down">
                            <use xlink:href="assets/images/icons.svg#symbol-arrow-down"></use>
                        </svg>
                </span>
                中国
            </a>
            <a href="#" class="download__item"
               js-tooltip="Другие языковые версии станут доступны 1 августа">
                <span class="download__button">
                        <svg class="symbol-icon symbol-arrow-down">
                            <use xlink:href="assets/images/icons.svg#symbol-arrow-down"></use>
                        </svg>
                </span>
                日本
            </a>
        </div>
        <div class="row">
            <div class="col-2 faq">
                <accordion-list></accordion-list>
            </div>
            <div class="col-2">
                <youtube
                    video-id="SuSW65jBqBQ"
                    video-thumb="assets/images/video-whitepaper.png"
                    style="display: none;"
                >
                </youtube>

                <div class="subscribe">
                    <div class="h3">Получи WhitePaper Mossebo.Market<br> и персональную консультацию о проекте</div>
                    <form class="subscribe__form">
                        <input
                            type="text"
                            placeholder="Введите ваш E-mail"
                            class="subscribe__input"
                        >
                        <button class="subscribe__button">
                            <svg class="symbol-icon symbol-arrow-right">
                                <use xlink:href="assets/images/icons.svg#symbol-arrow-right"></use>
                            </svg>
                        </button>
                    </form>
                    <a href="http://t.me/mosseboio_bot" target="_blank" class="subscribe__icon">
                        <svg class="symbol-icon direct-tg">
                            <use xlink:href="assets/images/icons.svg#direct-tg"></use>
                        </svg>
                    </a>
                    <a href="https://www.messenger.com/t/mossebo.market" target="_blank" class="subscribe__icon">
                        <svg class="symbol-icon direct-fb">
                            <use xlink:href="assets/images/icons.svg#direct-fb"></use>
                        </svg>
                    </a>
                    <a href="#" target="_blank" class="subscribe__icon">
                        <svg class="symbol-icon direct-wechat">
                            <use xlink:href="assets/images/icons.svg#direct-wechat"></use>
                        </svg>
                    </a>
                </div>

            </div>
        </div>
    </div>


    <div class="slider">
        <div class="container">
            <sticky-slider></sticky-slider>
        </div>
    </div>


    <div class="target">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-2">
                    <div class="circle-third-box circle-third-left">
                        <div class="circle-item circle-item-1">
                            <div class="circle-item__icon">
                                <svg class="symbol-icon symbol-target-1">
                                    <use xlink:href="assets/images/icons.svg#symbol-target-1"></use>
                                </svg>
                            </div>
                            <div class="circle-item__text">Скидки</div>
                        </div>
                        <div class="circle-item circle-item-2">
                            <div class="circle-item__icon">
                                <svg class="symbol-icon symbol-target-2">
                                    <use xlink:href="assets/images/icons.svg#symbol-target-2"></use>
                                </svg>
                            </div>
                            <div class="circle-item__text">Доставка</div>
                        </div>
                        <div class="circle-item circle-item-3">
                            <div class="circle-item__icon">
                                <svg class="symbol-icon symbol-target-3">
                                    <use xlink:href="assets/images/icons.svg#symbol-target-3"></use>
                                </svg>
                            </div>
                            <div class="circle-item__text">Безопасная сделка</div>
                        </div>
                        <div class="circle-third circle-third__1">
                            <div class="circle-third circle-third__2">
                                <div class="circle-third circle-third__3"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <div class="h2">Mossebo.Market упростит покупку товаров для дома</div>
                    <p>Оплата любой криптовалютой и доставка товаров по всему миру.</p>
                    <p>Скидка каждому клиенту при оплате криптовалютой от 3% до 70%.</p>
                    <p>Блокчейн технология гарантирует доступную цену и защищает ее от махинаций со стороны
                        продавцов.</p>
                </div>
                <div class="col-2">
                    <div class="h2">Mossebo.Market поможет производителям товаров для дома</div>
                    <p>Производители, поставщики материалов, логистические службы оплачивают счета друг друга на единой
                        b2b криптоплатформе.</p>
                    <p>Доступ к открытой статистике по спросу на товар в разных регионах мира.</p>
                    <p>Возможность сбора инвестиций для роста компании напрямую
                        от клиентов.</p>
                </div>
                <div class="col-2">
                    <div class="circle-third-box circle-third-right">
                        <div class="circle-item circle-item-1">
                            <div class="circle-item__icon">
                                <svg class="symbol-icon symbol-target-4">
                                    <use xlink:href="assets/images/icons.svg#symbol-target-4"></use>
                                </svg>
                            </div>
                            <div class="circle-item__text">Мгновенный платеж</div>
                        </div>
                        <div class="circle-item circle-item-2">
                            <div class="circle-item__icon">
                                <svg class="symbol-icon symbol-target-5">
                                    <use xlink:href="assets/images/icons.svg#symbol-target-5"></use>
                                </svg>
                            </div>
                            <div class="circle-item__text">Безопасность данных</div>
                        </div>
                        <div class="circle-item circle-item-3">
                            <div class="circle-item__icon">
                                <svg class="symbol-icon symbol-target-6">
                                    <use xlink:href="assets/images/icons.svg#symbol-target-6"></use>
                                </svg>
                            </div>
                            <div class="circle-item__text">В любой стране</div>
                        </div>
                        <div class="circle-third circle-third__1">
                            <div class="circle-third circle-third__2">
                                <div class="circle-third circle-third__3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="start-sell">
        <div class="container">
            <div class="row align-items-center">
                <div class="start-sell__body">
                    <div class="h2">Закрытая продажа токенов МSB уже началась</div>
                    <div class="h-sub">Особые условия для первых инвесторов, гарантия выкупа токенов, прямое общение с
                        командой проекта
                    </div>
                    <strong>Собранные средства</strong>

                    <progress-bar
                        :current="0"
                        :max="750000"
                    >
                    </progress-bar>

                    <a href="" class="button button-primary">Подробнее</a>
                </div>
                <div class="start-sell__logo">
                    <img src="assets/images/msb_logo.png" alt="">
                </div>
            </div>
        </div>
    </div>

    <div class="target">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-2">
                    <div class="circle-third-box circle-third-left">
                        <div class="circle-item circle-item-1">
                            <div class="circle-item__icon">
                                <svg class="symbol-icon symbol-target-7">
                                    <use xlink:href="assets/images/icons.svg#symbol-target-7"></use>
                                </svg>
                            </div>
                            <div class="circle-item__text">Передача прав</div>
                        </div>
                        <div class="circle-item circle-item-2">
                            <div class="circle-item__icon">
                                <svg class="symbol-icon symbol-target-8">
                                    <use xlink:href="assets/images/icons.svg#symbol-target-8"></use>
                                </svg>
                            </div>
                            <div class="circle-item__text">Поиск идей</div>
                        </div>
                        <div class="circle-item circle-item-3">
                            <div class="circle-item__icon">
                                <svg class="symbol-icon symbol-target-9">
                                    <use xlink:href="assets/images/icons.svg#symbol-target-9"></use>
                                </svg>
                            </div>
                            <div class="circle-item__text">Лицензированные выплаты</div>
                        </div>
                        <div class="circle-third circle-third__1">
                            <div class="circle-third circle-third__2">
                                <div class="circle-third circle-third__3"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <div class="h2">Mossebo.Market защитит авторские права всех дизайнеров</div>
                    <p>Удобная площадка для продажи идей и моделей. </p>
                    <p>Передавайте полное или частичное права производителям.</p>
                    <p>Получайте лицензионные отчисления с кажой продажи.</p>
                </div>
                <div class="col-2">
                    <div class="h2">Mossebo.Market защищает окружающую среду и развивает малый и средний бизнес</div>
                    <p>Статистика и данные от блокчейн платформы позволят экономить ресурсы при производстве и
                        транспортировки товаров.</p>
                    <p>Честные компании получают доступ к бесплатной рекламе и инвестициям для роста бизнеса.</p>
                    <p>Стремление к доступным ценам делает обустройство дома доступным всем. </p>
                </div>
                <div class="col-2">
                    <div class="circle-third-box circle-third-right">
                        <div class="circle-item circle-item-1">
                            <div class="circle-item__icon">
                                <svg class="symbol-icon symbol-target-10">
                                    <use xlink:href="assets/images/icons.svg#symbol-target-10"></use>
                                </svg>
                            </div>
                            <div class="circle-item__text">Инвестиции в производителей</div>
                        </div>
                        <div class="circle-item circle-item-2">
                            <div class="circle-item__icon">
                                <svg class="symbol-icon symbol-target-11">
                                    <use xlink:href="assets/images/icons.svg#symbol-target-11"></use>
                                </svg>
                            </div>
                            <div class="circle-item__text">Сохранение ресурсов</div>
                        </div>
                        <div class="circle-item circle-item-3">
                            <div class="circle-item__icon">
                                <svg class="symbol-icon symbol-target-12">
                                    <use xlink:href="assets/images/icons.svg#symbol-target-12"></use>
                                </svg>
                            </div>
                            <div class="circle-item__text">Прозрачная цена</div>
                        </div>
                        <div class="circle-third circle-third__1">
                            <div class="circle-third circle-third__2">
                                <div class="circle-third circle-third__3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="economy">
        <div class="container">
            <div class="h2">Основа роста Mossebo.Market</div>
            <div class="h-sub">Общий рост мировой электронной коммерции</div>

            <div class="row align-items-center">
                <div class="col-2">
                    <chartjs-line
                        :labels="economyLabels"
                        :datasets="economyData"
                        :option="economyOption"
                    >
                    </chartjs-line>
                </div>
                <div class="col-2">
                    <div class="circle-secondary-box">
                        <div class="circle-secondary circle-secondary__1">
                            <div class="circle-secondary circle-secondary__2">
                                <div class="circle-secondary circle-secondary__3"></div>
                            </div>
                        </div>
                    </div>
                    <ul class="economy__list">
                        <li><span></span> Азиатско-Тихоокеанский регион</li>
                        <li><span></span> Северная Америка</li>
                        <li><span></span> Западная Европа</li>
                        <li><span></span> Латинская Америка</li>
                        <li><span></span> Африка и Ближний Восток</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="currency-division">
        <div class="container">
            <div class="h2">Порядок размещения токенов</div>
            <div class="h-sub">В первом раунде размещения эмитируются 20% токенов МSB.
                80% зарезервированы для выхода платформы в новые регионы.
            </div>
            <div class="row align-items-center">
                <div class="col-2">
                    <img src="assets/images/currency.png" alt="" class="currency-division__diagram">
                </div>
                <div class="col-2">
                    <div class="circle-secondary-box">
                        <div class="circle-secondary circle-secondary__1">
                            <div class="circle-secondary circle-secondary__2">
                                <div class="circle-secondary circle-secondary__3"></div>
                            </div>
                        </div>
                    </div>
                    <ul class="currency-division__list">
                        <li><span>50.00 %</span> ICO</li>
                        <li><span>25.00 %</span> Команда</li>
                        <li><span>10.00 %</span> Бонусы для инвесторов</li>
                        <li><span>8.25 %</span> Советники</li>
                        <li><span>3.75 %</span> Pre-Sale</li>
                        <li><span>2.50 %</span> Баунти</li>
                        <li><span>0.50 %</span> Private Pre-Sale</li>
                    </ul>
                </div>
            </div>
        </div>
        <a id="roadmap"></a>
    </div>

    <div class="roadmap">
        <div class="container">
            <div class="h2">Roadmap</div>
            <road-map></road-map>
        </div>
    </div>

    <div class="work-timeline">
        <div class="container">
            <div class="h2">Мы не стартуем с нуля</div>
            <div class="h-sub">Платформа mossebo.market уже функционирует и органически растет</div>

            <div class="row status-1 js-team-slider">
                <div class="col-4">
                    <div class="work-timeline__item">
                        <div class="work-timeline__name">
                            MVP Интернет-маркетплейс
                            с полным функционалом
                            для пользователя
                        </div>
                        <div class="work-timeline__icon">
                            Сделано
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="work-timeline__item">
                        <div class="work-timeline__name">
                            Скидочная программа
                        </div>
                        <div class="work-timeline__icon">
                            Сделано
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="work-timeline__item">
                        <div class="work-timeline__name">
                            Платежная система
                        </div>
                        <div class="work-timeline__icon">
                            Сделано
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="work-timeline__item">
                        <div class="work-timeline__name">
                            Личные кабинеты
                            пользователей
                        </div>
                        <div class="work-timeline__icon">
                            Сделано
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="work-timeline__item">
                        <div class="work-timeline__name">
                            Авторизация из
                            социальных сетей
                        </div>
                        <div class="work-timeline__icon">
                            Сделано
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="work-timeline__item">
                        <div class="work-timeline__name">
                            Инфраструктура с учетом
                            роста платформы
                        </div>
                        <div class="work-timeline__icon">
                            Сделано
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="work-timeline__item">
                        <div class="work-timeline__name">
                            Административная панель
                        </div>
                        <div class="work-timeline__icon">
                            Сделано
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="work-timeline__item">
                        <div class="work-timeline__name">
                            Дизайн модулей для
                            внедрения криптоплатежей
                        </div>
                        <div class="work-timeline__icon">
                            Сделано
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-2">
                    <div class="row status-2 js-team-slider">
                        <div class="col-2">
                            <div class="work-timeline__item">
                                <div class="work-timeline__name">
                                    Оплата криптовалютой
                                </div>
                                <div class="work-timeline__icon">
                                    В процессе
                                </div>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="work-timeline__item">
                                <div class="work-timeline__name">
                                    MVP Система статистики
                                    реального спроса
                                </div>
                                <div class="work-timeline__icon">
                                    В процессе
                                </div>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="work-timeline__item">
                                <div class="work-timeline__name">
                                    Автоматическая выгрузка товаров для новых компаний
                                </div>
                                <div class="work-timeline__icon">
                                    В процессе
                                </div>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="work-timeline__item">
                                <div class="work-timeline__name">
                                    Безопасность платежей 2.0
                                </div>
                                <div class="work-timeline__icon">
                                    В процессе
                                </div>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="work-timeline__item">
                                <div class="work-timeline__name">
                                    Бонусная система при
                                    оплате криптовалютой
                                </div>
                                <div class="work-timeline__icon">
                                    В процессе
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <div class="row status-3 js-team-slider">
                        <div class="col-2">
                            <div class="work-timeline__item">
                                <div class="work-timeline__name">
                                    Криптозащита авторских прав
                                </div>
                                <div class="work-timeline__icon">
                                    В плане
                                </div>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="work-timeline__item">
                                <div class="work-timeline__name">
                                    Партнерская платформа
                                    и рефереальная программа
                                </div>
                                <div class="work-timeline__icon">
                                    В плане
                                </div>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="work-timeline__item">
                                <div class="work-timeline__name">
                                    Платформа b2b платежей
                                </div>
                                <div class="work-timeline__icon">
                                    В плане
                                </div>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="work-timeline__item">
                                <div class="work-timeline__name">
                                    MVP Глубокая безопасная
                                    сделка
                                </div>
                                <div class="work-timeline__icon">
                                    В плане
                                </div>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="work-timeline__item">
                                <div class="work-timeline__name">
                                    MVP Платформа инвестирования
                                    в производителей
                                </div>
                                <div class="work-timeline__icon">
                                    В плане
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container team-members">
        <div class="h2">Основатели Mossebo</div>

        <div class="row">
            <div class="col-3">
                <div class="team-members__item">
                    <div class="team-members__avatar avatar-owner"
                         style="background-image: url(assets/images/members/1.jpg);"
                    >
                    </div>
                    <div class="team-members__socials">
                        <a href="https://www.facebook.com/tur.vladislav" class="team-members__link">
                            <svg class="symbol-icon social-embed-fb">
                                <use xlink:href="assets/images/icons.svg#social-embed-fb"></use>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/%D0%B2%D0%BB%D0%B0%D0%B4%D0%B8%D1%81%D0%BB%D0%B0%D0%B2-%D1%82%D1%83%D1%80%D0%B6%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-97bb36b3/" class="team-members__link">
                            <svg class="symbol-icon social-embed-in">
                                <use xlink:href="assets/images/icons.svg#social-embed-in"></use>
                            </svg>
                        </a>
                    </div>
                    <div class="team-members__name">
                        <b>Владислав Туржанский</b> <br> сооснователь компании Mossebo
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="team-members__item">
                    <div class="team-members__avatar avatar-owner"
                         style="background-image: url(assets/images/members/2.jpg);"
                    >
                    </div>
                    <div class="team-members__socials">
                        <a href="https://www.facebook.com/profile.php?id=100011679093183" class="team-members__link">
                            <svg class="symbol-icon social-embed-fb">
                                <use xlink:href="assets/images/icons.svg#social-embed-fb"></use>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/%D1%8E%D1%80%D0%B8%D0%B9-%D0%B5%D1%80%D0%B5%D0%BC%D0%B8%D0%BD-8316a6125/" class="team-members__link">
                            <svg class="symbol-icon social-embed-in">
                                <use xlink:href="assets/images/icons.svg#social-embed-in"></use>
                            </svg>
                        </a>
                    </div>
                    <div class="team-members__name">
                        <b>Юрий Еремин</b> <br> сооснователь компании Mossebo
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="team-members__item">
                    <div class="team-members__avatar avatar-owner"
                         style="background-image: url(assets/images/members/3.jpg);"
                    >
                    </div>
                    <div class="team-members__socials">
                        <a href="https://www.facebook.com/profile.php?id=100009275238285" class="team-members__link">
                            <svg class="symbol-icon social-embed-fb">
                                <use xlink:href="assets/images/icons.svg#social-embed-fb"></use>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/%D0%BC%D0%B0%D1%80%D0%BA-%D0%B5%D1%80%D0%B5%D0%BC%D0%B8%D0%BD-15417b108/" class="team-members__link">
                            <svg class="symbol-icon social-embed-in">
                                <use xlink:href="assets/images/icons.svg#social-embed-in"></use>
                            </svg>
                        </a>
                    </div>
                    <div class="team-members__name">
                        <b>Марк Еремин</b> <br> сооснователь компании Mossebo
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div class="container team-members" style="display: none;">
        <div class="h2">Аdvisers</div>

        <div class="row">
            <div class="col-3">
                <div class="team-members__item">
                    <div class="team-members__avatar avatar-advisers"
                         style="background-image: url();"
                    >
                    </div>
                    <div class="team-members__socials">
                        <a href="#" class="team-members__link">
                            <svg class="symbol-icon social-embed-fb">
                                <use xlink:href="assets/images/icons.svg#social-embed-fb"></use>
                            </svg>
                        </a>
                        <a href="#" class="team-members__link">
                            <svg class="symbol-icon social-embed-in">
                                <use xlink:href="assets/images/icons.svg#social-embed-in"></use>
                            </svg>
                        </a>
                    </div>
                    <div class="team-members__name">
                        Владислав Туржанский <br> сооснователь компании Mossebo
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="team-members__item">
                    <div class="team-members__avatar avatar-advisers"
                         style="background-image: url();"
                    >
                    </div>
                    <div class="team-members__socials">
                        <a href="#" class="team-members__link">
                            <svg class="symbol-icon social-embed-fb">
                                <use xlink:href="assets/images/icons.svg#social-embed-fb"></use>
                            </svg>
                        </a>
                        <a href="#" class="team-members__link">
                            <svg class="symbol-icon social-embed-in">
                                <use xlink:href="assets/images/icons.svg#social-embed-in"></use>
                            </svg>
                        </a>
                    </div>
                    <div class="team-members__name">
                        Юрий Еремин <br> сооснователь компании Mossebo
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="team-members__item">
                    <div class="team-members__avatar avatar-advisers"
                         style="background-image: url();"
                    >
                    </div>
                    <div class="team-members__socials">
                        <a href="#" class="team-members__link">
                            <svg class="symbol-icon social-embed-fb">
                                <use xlink:href="assets/images/icons.svg#social-embed-fb"></use>
                            </svg>
                        </a>
                        <a href="#" class="team-members__link">
                            <svg class="symbol-icon social-embed-in">
                                <use xlink:href="assets/images/icons.svg#social-embed-in"></use>
                            </svg>
                        </a>
                    </div>
                    <div class="team-members__name">
                        Марк Еремин <br> сооснователь компании Mossebo
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div class="container team-members">
        <div class="h2">Команда проекта</div>

        <div class="row js-team-slider">
            <div class="col-3">
                <div class="team-members__item">
                    <div class="team-members__avatar avatar-team"
                         style="background-image: url(assets/images/members/artur.jpg);"
                    >
                    </div>
                    <div class="team-members__socials">
                        <a href="#" class="team-members__link">
                            <svg class="symbol-icon social-embed-fb">
                                <use xlink:href="assets/images/icons.svg#social-embed-fb"></use>
                            </svg>
                        </a>
                        <a href="#" class="team-members__link">
                            <svg class="symbol-icon social-embed-in">
                                <use xlink:href="assets/images/icons.svg#social-embed-in"></use>
                            </svg>
                        </a>
                    </div>
                    <div class="team-members__name">
                        <b>Артур Омельяненко</b><br> Blockсhain Evangelist
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="team-members__item">
                    <div class="team-members__avatar avatar-team"
                         style="background-image: url(assets/images/members/yuriy.jpg);"
                    >
                    </div>
                    <div class="team-members__socials">
                        <a href="#" class="team-members__link">
                            <svg class="symbol-icon social-embed-fb">
                                <use xlink:href="assets/images/icons.svg#social-embed-fb"></use>
                            </svg>
                        </a>
                        <a href="#" class="team-members__link">
                            <svg class="symbol-icon social-embed-in">
                                <use xlink:href="assets/images/icons.svg#social-embed-in"></use>
                            </svg>
                        </a>
                    </div>
                    <div class="team-members__name">
                        <b>Юрий Бондарь</b> <br> CSA
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="team-members__item">
                    <div class="team-members__avatar avatar-team"
                         style="background-image: url(assets/images/members/vlad.jpg);"
                    >
                    </div>
                    <div class="team-members__socials">
                        <a href="#" class="team-members__link">
                            <svg class="symbol-icon social-embed-fb">
                                <use xlink:href="assets/images/icons.svg#social-embed-fb"></use>
                            </svg>
                        </a>
                        <a href="#" class="team-members__link">
                            <svg class="symbol-icon social-embed-in">
                                <use xlink:href="assets/images/icons.svg#social-embed-in"></use>
                            </svg>
                        </a>
                    </div>
                    <div class="team-members__name">
                        <b>Владислав Старковский</b> <br> CIO
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="team-members__item">
                    <div class="team-members__avatar avatar-team"
                         style="background-image: url(assets/images/members/ekaterina.jpg);"
                    >
                    </div>
                    <div class="team-members__socials">
                        <a href="#" class="team-members__link">
                            <svg class="symbol-icon social-embed-fb">
                                <use xlink:href="assets/images/icons.svg#social-embed-fb"></use>
                            </svg>
                        </a>
                        <a href="#" class="team-members__link">
                            <svg class="symbol-icon social-embed-in">
                                <use xlink:href="assets/images/icons.svg#social-embed-in"></use>
                            </svg>
                        </a>
                    </div>
                    <div class="team-members__name">
                        <b>Екатерина Феклистова</b> <br> CLO
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="team-members__item">
                    <div class="team-members__avatar avatar-team"
                         style="background-image: url(assets/images/members/alexey.jpg);"
                    >
                    </div>
                    <div class="team-members__socials">
                        <a href="#" class="team-members__link">
                            <svg class="symbol-icon social-embed-fb">
                                <use xlink:href="assets/images/icons.svg#social-embed-fb"></use>
                            </svg>
                        </a>
                        <a href="#" class="team-members__link">
                            <svg class="symbol-icon social-embed-in">
                                <use xlink:href="assets/images/icons.svg#social-embed-in"></use>
                            </svg>
                        </a>
                    </div>
                    <div class="team-members__name">
                        <b>Алексей Степанюк</b> <br> Head of Marketing
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="team-members__item">
                    <div class="team-members__avatar avatar-team"
                         style="background-image: url(assets/images/members/pavel.jpg);"
                    >
                    </div>
                    <div class="team-members__socials">
                        <a href="#" class="team-members__link">
                            <svg class="symbol-icon social-embed-fb">
                                <use xlink:href="assets/images/icons.svg#social-embed-fb"></use>
                            </svg>
                        </a>
                        <a href="#" class="team-members__link">
                            <svg class="symbol-icon social-embed-in">
                                <use xlink:href="assets/images/icons.svg#social-embed-in"></use>
                            </svg>
                        </a>
                    </div>
                    <div class="team-members__name">
                        <b>Павел Вокуев</b> <br> Public Relations Specialist
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="team-members__item">
                    <div class="team-members__avatar avatar-team"
                         style="background-image: url(assets/images/members/gosha.jpg);"
                    >
                    </div>
                    <div class="team-members__socials">
                        <a href="#" class="team-members__link">
                            <svg class="symbol-icon social-embed-fb">
                                <use xlink:href="assets/images/icons.svg#social-embed-fb"></use>
                            </svg>
                        </a>
                        <a href="#" class="team-members__link">
                            <svg class="symbol-icon social-embed-in">
                                <use xlink:href="assets/images/icons.svg#social-embed-in"></use>
                            </svg>
                        </a>
                    </div>
                    <div class="team-members__name">
                        <b>Георгий Белов</b> <br> Director of Product Advertising
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="team-members__item">
                    <div class="team-members__avatar avatar-team"
                         style="background-image: url(assets/images/members/tatyana.jpg);"
                    >
                    </div>
                    <div class="team-members__socials">
                        <a href="#" class="team-members__link">
                            <svg class="symbol-icon social-embed-fb">
                                <use xlink:href="assets/images/icons.svg#social-embed-fb"></use>
                            </svg>
                        </a>
                        <a href="#" class="team-members__link">
                            <svg class="symbol-icon social-embed-in">
                                <use xlink:href="assets/images/icons.svg#social-embed-in"></use>
                            </svg>
                        </a>
                    </div>
                    <div class="team-members__name">
                        <b>Татьяна Гамаюнова</b> <br> CAO
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="team-members__item">
                    <div class="team-members__avatar avatar-team"
                         style="background-image: url(assets/images/members/polina.jpg);"
                    >
                    </div>
                    <div class="team-members__socials">
                        <a href="#" class="team-members__link">
                            <svg class="symbol-icon social-embed-fb">
                                <use xlink:href="assets/images/icons.svg#social-embed-fb"></use>
                            </svg>
                        </a>
                        <a href="#" class="team-members__link">
                            <svg class="symbol-icon social-embed-in">
                                <use xlink:href="assets/images/icons.svg#social-embed-in"></use>
                            </svg>
                        </a>
                    </div>
                    <div class="team-members__name">
                        <b>Полина Карпенко</b> <br> Head of Product Design
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="team-members__item">
                    <div class="team-members__avatar avatar-team"
                         style="background-image: url(assets/images/members/yula.jpg);"
                    >
                    </div>
                    <div class="team-members__socials">
                        <a href="#" class="team-members__link">
                            <svg class="symbol-icon social-embed-fb">
                                <use xlink:href="assets/images/icons.svg#social-embed-fb"></use>
                            </svg>
                        </a>
                        <a href="#" class="team-members__link">
                            <svg class="symbol-icon social-embed-in">
                                <use xlink:href="assets/images/icons.svg#social-embed-in"></use>
                            </svg>
                        </a>
                    </div>
                    <div class="team-members__name">
                        <b>Юлия Бобкова</b> <br> Head of Product Content
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="media-project">
        <div class="container">
            <div class="h2">Медиа-проекты Mossebo</div>
            <div class="h-sub">Моssebo.Market получает до 15 000 000 человек дополнительного охвата от наших проектов на
                Youtube и Instagram
            </div>
        </div>
        <div id="productionmedia">
            <carousel-3d
                :controls-visible="true"
                :controls-prev-html="'&#10092;'"
                :controls-next-html="'&#10093;'"
                :perspective="35"
                :space="400"
                :display="3"
                :border="0"
                :autoplay="true"
                :autoplay-timeout="6000"
                :autoplay-hover-pause="true"
                width="680px"
                height="700px"
            >
                <slide :index="0">
                    <div class="slide-block"></div>
                    <img src="assets/images/media-1.jpg" class="slide-image">
                </slide>
                <slide :index="1">
                    <div class="slide-block"></div>
                    <img src="assets/images/media-2.jpg" class="slide-image">
                </slide>
                <slide :index="2">
                    <div class="slide-block"></div>
                    <img src="assets/images/media-3.jpg" class="slide-image">
                </slide>
            </carousel-3d>
        </div>
        <div class="channel-link">
            <channel-link></channel-link>
        </div>
    </div>

    <div class="inst-person">
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <img src="assets/images/inst_y.png" alt="">
                    <a href="https://www.instagram.com/yuriereminv/"
                       class="button button-primary"
                       target="_blank"
                    >
                        Перейти в профиль
                    </a>
                </div>
                <div class="col-3">
                    <img src="assets/images/inst_v.png" alt="">
                    <a href="https://www.instagram.com/turjanskii/"
                       class="button button-primary"
                       target="_blank"
                    >
                        Перейти в профиль</a>
                </div>
                <div class="col-3">
                    <img src="assets/images/inst_m.png" alt="">
                    <a href="https://www.instagram.com/markeremin/"
                       class="button button-primary"
                       target="_blank"
                    >
                        Перейти в профиль</a>
                </div>
            </div>
        </div>
    </div>

    <div class="start-sell">
        <div class="container">
            <div class="row align-items-center">
                <div class="start-sell__body">
                    <div class="h2">Закрытая продажа токенов МSB уже началась</div>
                    <div class="h-sub">Самый выгодный курс и гарантия выкупа монет для инвесторов первого этапа</div>
                    <strong>Принять участие в проекте</strong>
                    <div class="subscribe">
                        <form class="subscribe__form">
                            <input
                                type="text"
                                placeholder="Введите ваш E-mail"
                                class="subscribe__input"
                            >
                            <button class="subscribe__button">
                                <svg class="symbol-icon symbol-arrow-right">
                                    <use xlink:href="assets/images/icons.svg#symbol-arrow-right"></use>
                                </svg>
                            </button>
                        </form>
                        <a href="http://t.me/mosseboio_bot" target="_blank" class="subscribe__icon">
                            <svg class="symbol-icon direct-tg">
                                <use xlink:href="assets/images/icons.svg#direct-tg"></use>
                            </svg>
                        </a>
                        <a href="https://www.messenger.com/t/mossebo.market" target="_blank" class="subscribe__icon">
                            <svg class="symbol-icon direct-fb">
                                <use xlink:href="assets/images/icons.svg#direct-fb"></use>
                            </svg>
                        </a>
                        <a href="" target="_blank" class="subscribe__icon">
                            <svg class="symbol-icon direct-wechat">
                                <use xlink:href="assets/images/icons.svg#direct-wechat"></use>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="start-sell__logo">
                    <img src="assets/images/msb_logo.png" alt="">
                </div>
            </div>
        </div>
    </div>

    <footer class="footer">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-4">
                    <a href="#" class="logo">
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
                msg: 'Команда проекта собрала и оценила как открытую, так и внутреннюю статистику продаж и методы взаимодействия производителей в сфере дизайна интерьера в 7 странах.',
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
