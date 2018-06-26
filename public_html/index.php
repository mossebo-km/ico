
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

    <header class="header">
        <div class="container">
            <div class="row align-items-center">
                <div class="logo-item">
                    <a href="#" class="logo">
                        <svg class="symbol-icon symbol-logo">
                            <use xlink:href="/assets/images/icons.svg#symbol-logo"></use>
                        </svg>
                    </a>
                </div>
                <div class="menu-item">
                    <ul class="nav">
                        <li class="nav__item">
                            <a href="#">Whitepaper</a>
                        </li>
                        <li class="nav__item">
                            <a href="#">RoadMap</a>
                        </li>
                        <li class="nav__item">
                            <a href="#">Моssebo.market</a>
                        </li>
                    </ul>
                </div>
                <div class="link-item">
                    <a href="#" class="button button-primary">Стать инвестором</a>
                </div>
                <div class="lang-item">
                    <a href="" class="lang-item__flag symbol-flag-ru"></a>
                    <a href="" class="lang-item__flag symbol-flag-en"></a>
                    <a href="" class="lang-item__flag symbol-flag-jp"></a>
                    <a href="" class="lang-item__flag symbol-flag-zh"></a>
                    <a href="" class="lang-item__flag symbol-flag-es"></a>
                </div>
            </div>
        </div>
    </header>


    <div class="container">
        <div class="row">
            <div class="col-2">
                <div class="h1">Криптомаркетплейс для b2b и b2c</div>
                <p>Международная компания Mossebo расширяет проект mossebo.market для крипторынка</p>
                <strong>Принять участие в проекте</strong>
                <div class="subscribe">
                    <form class="subscribe__form">
                        <input
                            type="text"
                            placeholder="Введите ваш E-mail"
                            class="subscribe__input"
                        >
                        <button class="subscribe__button">

                        </button>
                    </form>
                    <a href="#" target="_blank" class="subscribe__icon">
                        <img src="/assets/images/icon/wechat.png" alt="">
                    </a>
                    <a href="#" target="_blank" class="subscribe__icon">
                        <img src="/assets/images/icon/fb.png" alt="">
                    </a>
                    <a href="#" target="_blank" class="subscribe__icon">
                        <img src="/assets/images/icon/tg.png" alt="">
                    </a>
                </div>
            </div>
            <div class="col-2">
                <youtube
                    video-id="SuSW65jBqBQ"
                    video-thumb="//previews.123rf.com/images/iunewind/iunewind1607/iunewind160700019/60844889-minimal-camera-screen-16x9-full-hd-or-4k-video-grid-recording-rec-led-icon-vector-background.jpg"
                >
                </youtube>
            </div>
        </div>
    </div>


    <div class="container we-best">
        <div class="row align-items-center">
            <div class="col-3">
                <div class="we-best__item">
                    <div class="we-best__icon">
                        <img src="/assets/images/we-best/1.png" alt="">
                    </div>
                    <div class="we-best__subtitle">Защита авторских прав</div>
                </div>
            </div>
            <div class="col-3">
                <div class="we-best__item">
                    <p>Поставщики mossebo.market<br>
                        оплачивают контракты друг с другом<br>
                        на единой криптоплатформе</p>
                </div>
            </div>
            <div class="col-3">
                <div class="we-best__item">
                    <div class="we-best__icon">
                        <img src="/assets/images/we-best/2.png" alt="">
                    </div>
                    <div class="we-best__subtitle">Инвестиции в токены производителей</div>
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
                <youtube
                    video-id="SuSW65jBqBQ"
                    video-thumb="//previews.123rf.com/images/iunewind/iunewind1607/iunewind160700019/60844889-minimal-camera-screen-16x9-full-hd-or-4k-video-grid-recording-rec-led-icon-vector-background.jpg"
                >
                </youtube>
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
    </div>


    <div class="container whitepaper">
        <div class="whitepaper__title">
            <div class="h2">Whitepaper</div>
        </div>
        <div class="download">
            <a href="#" class="download__item">
                <span class="download__button">
                        <svg class="symbol-icon symbol-arrow-down">
                            <use xlink:href="/assets/images/icons.svg#symbol-arrow-down"></use>
                        </svg>
                </span>
                English
            </a>
            <a href="#" class="download__item">
                <span class="download__button">
                        <svg class="symbol-icon symbol-arrow-down">
                            <use xlink:href="/assets/images/icons.svg#symbol-arrow-down"></use>
                        </svg>
                </span>
                Español
            </a>
            <a href="#" class="download__item">
                <span class="download__button">
                        <svg class="symbol-icon symbol-arrow-down">
                            <use xlink:href="/assets/images/icons.svg#symbol-arrow-down"></use>
                        </svg>
                </span>
                Русский
            </a>
            <a href="#" class="download__item">
                <span class="download__button">
                        <svg class="symbol-icon symbol-arrow-down">
                            <use xlink:href="/assets/images/icons.svg#symbol-arrow-down"></use>
                        </svg>
                </span>
                中国
            </a>
            <a href="#" class="download__item">
                <span class="download__button">
                        <svg class="symbol-icon symbol-arrow-down">
                            <use xlink:href="/assets/images/icons.svg#symbol-arrow-down"></use>
                        </svg>
                </span>
                日本
            </a>
        </div>
        <div class="row">
            <div class="col-2">




            </div>
            <div class="col-2">
                <youtube
                    video-id="SuSW65jBqBQ"
                    video-thumb="//previews.123rf.com/images/iunewind/iunewind1607/iunewind160700019/60844889-minimal-camera-screen-16x9-full-hd-or-4k-video-grid-recording-rec-led-icon-vector-background.jpg"
                >
                </youtube>
            </div>
        </div>
    </div>



    <footer class="footer">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-4">
                    <a href="#" class="logo">
                        <svg class="symbol-icon symbol-logo">
                            <use xlink:href="/assets/images/icons.svg#symbol-logo"></use>
                        </svg>
                    </a>
                </div>
                <div class="col-4">
        
                </div>
                <div class="col-4">

                </div>
                <div class="col-4">

                </div>
            </div>
        </div>
    </footer>


</div>

<script src="<?php echo mix('assets/js/manifest.js') ?>" defer></script>
<script src="<?php echo mix('assets/js/vendor.js') ?>" defer></script>
<script src="<?php echo mix('assets/js/app.js') ?>" defer></script>

</body>
</html>
