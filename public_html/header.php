<?php
/**
 * Created by IntelliJ IDEA.
 * User: vladstarkovsky
 * Date: 17.07.2018
 * Time: 18:05
 */

require_once './mix.php';

// *----------------------------------------------------------------------- */
// utm
if (isset($_SERVER['HTTP_REFERER']) && !isset($_COOKIE['http_preferer'])) setcookie('http_preferer', $_SERVER['HTTP_REFERER'], time() + 500000, '/');
if (isset($_GET['utm_source']) && !isset($_COOKIE['utm_source'])) setcookie('utm_source', $_GET['utm_source'], time() + 500000, '/');
if (isset($_GET['utm_medium']) && !isset($_COOKIE['utm_medium'])) setcookie('utm_medium', $_GET['utm_medium'], time() + 500000, '/');
if (isset($_GET['utm_campaign']) && !isset($_COOKIE['utm_campaign'])) setcookie('utm_campaign', $_GET['utm_campaign'], time() + 500000, '/');
if (isset($_GET['utm_content']) && !isset($_COOKIE['utm_content'])) setcookie('utm_content', $_GET['utm_content'], time() + 500000, '/');
if (isset($_GET['utm_term']) && !isset($_COOKIE['utm_term'])) setcookie('utm_term', $_GET['utm_term'], time() + 500000, '/');
// *----------------------------------------------------------------------- */


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
