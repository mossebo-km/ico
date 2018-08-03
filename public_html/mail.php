<?php
/**
 * Created by IntelliJ IDEA.
 * User: vladstarkovsky
 * Date: 20.07.2018
 * Time: 10:46
 */

$data = array(
    // input's
    'name' => isset( $_POST[ 'name' ] ) ? $_POST[ 'name' ] : 'error_name_text',
    'phone' => isset( $_POST[ 'phone' ] ) ? $_POST[ 'phone' ] : 'error_phone_number',
    'mail' => isset( $_POST[ 'mail' ] ) ? $_POST[ 'mail' ] : 'error_mail_adress',
    // url
    'http_preferer' => isset( $_COOKIE[ 'http_preferer' ] ) ? $_COOKIE[ 'http_preferer' ] : 'error_http_preferer',
    'page_url' => isset( $_SERVER['HTTP_HOST'] ) ? $_SERVER['HTTP_HOST'] : 'error_url_string',
    // utm
    'utm_source' => isset( $_COOKIE[ 'utm_source' ] ) ? $_COOKIE[ 'utm_source' ] : '',
    'utm_medium' => isset( $_COOKIE[ 'utm_medium' ] ) ? $_COOKIE[ 'utm_medium' ] : '',
    'utm_campaign' => isset( $_COOKIE[ 'utm_campaign' ] ) ? $_COOKIE[ 'utm_campaign' ] : '',
    'utm_content' => isset( $_COOKIE[ 'utm_content' ] ) ? $_COOKIE[ 'utm_content' ] : '',
    'utm_term' => isset( $_COOKIE[ 'utm_term' ] ) ? $_COOKIE[ 'utm_term' ] : ''
);


$message = ' ' . "\n\n\n" .
    'Имя: ' . $data['name'] . "\n" .
    'Телефон: ' . $data['phone'] . "\n" .
    'E-Mail: ' . $data['mail'] . "\n\n\n" .


    'Пришел с сайта: ' . $data['http_preferer'] . "\n" .
    'Страница: ' . $data['page_url'] . "\n\n\n" .

    'Ресурс: ' . $data['utm_source'] . "\n" .
    'Метка: ' . $data['utm_medium'] . "\n" .
    'Компания: ' . $data['utm_campaign'] . "\n" .
    'Значение: ' . $data['utm_content'] . "\n" .
    'Тег компании: ' . $data['utm_term'];

$to = 'vlad.starkovsky@gmail.com';


if ( $_POST['mail'] ) {
    mail($to, 'Заявка с сайта ' . date("d.m.Y H:i"), $message);
}
else {

}

header("Location: thx.php");
exit;
