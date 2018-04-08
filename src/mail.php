<?php
//Принимаем постовые данные
$headerForm=$_POST['headerForm'];
$username=$_POST['username'];
$email=$_POST['email'];
$option=$_POST['opt'];
//Тут указываем на какой ящик посылать письмо
$to = "79991570874@yandex.ru";
//Далее идет тема и само сообщение
// Тема письма
$subject = "Заявка с сайта youga.sl";
// Сообщение письма
$message = "
Форма, которую заполнил клиент: ".htmlspecialchars($headerForm)."<br />
Имя пользователя: ".htmlspecialchars($username)."<br />
Email: ".htmlspecialchars($email)."<br />
option: ".htmlspecialchars($option);
// Отправляем письмо при помощи функции mail();
$headers = "From: youga.sl <igor@youga.sl>\r\nContent-type: text/html; charset=UTF-8 \r\n";
mail ($to, $subject, $message, $headers);
// Перенаправляем человека на страницу благодарности и завершаем скрипт
header('Location: thanks.html');
exit();
?>