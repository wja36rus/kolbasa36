<?php
if(isset($_POST["SubmitBtn"])){

    $to = "kolbasa_36@mail.ru";
    $subject = "Вам письмо с сайта";
    $SenderName = $_POST['SenderName'];
    $SenderPhone = $_POST['SnderPhone'];
    $msg="\n\n Имя: $SenerName \n\n Телефон: $SenderPhone";
    
    mail($to,$subject,$msg);
    echo "Email successfully sent.";
    }
?>