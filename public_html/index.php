
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
                <a href="" class="js-ht">
                    <svg class="symbol-icon symbol-logo">
                        <use xlink:href="/assets/images/icons.svg#symbol-logo"></use>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</header>





<footer class="footer">

</footer>


<script src="<?php echo mix('assets/js/manifest.js') ?>" defer></script>
<script src="<?php echo mix('assets/js/vendor.js') ?>" defer></script>
<script src="<?php echo mix('assets/js/app.js') ?>" defer></script>

</body>
</html>
