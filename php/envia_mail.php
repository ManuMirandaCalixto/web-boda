<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';

$name_id = $_POST["id_invitado"];
$name = $_POST["name"];
$tel = $_POST["tel"];
$email = $_POST["email"];
$alergias = $_POST["alergias"];
$message = $_POST["message"];

if (!$name AND !$tel AND !$alergias AND !$message)
{
    return False;
}
else
{
    //include "class.phpmailer.php";
    //include "class.smtp.php";

    $email_user =  'labodademarimanu@gmail.com';
    $email_password = 'xyezoplpanknutbu';

    $subject_dest = "¡Formulario enviado con éxito!";
    $subject_marimanu = "Formulario de $name";

    $address_to_dest = $email;
    $address_to_marimanu = 'labodademarimanu@gmail.com';

    $from_name_dest = '¡Hola!';
    $from_name_marimanu = 'boda';

    $phpmailer_dest = new PHPMailer();
    $phpmailer_marimanu = new PHPMailer();

    $phpmailer_dest->Username = $email_user;
    $phpmailer_dest->Password = $email_password;
    $phpmailer_dest->SMTPSecure = 'ssl'; // tls // ssl
    $phpmailer_dest->Host = 'smtp.gmail.com';
    $phpmailer_dest->Port = 465; // 587 // 465
    $phpmailer_dest->CharSet = 'UTF-8';
    $phpmailer_dest->Encoding = 'base64';
    $phpmailer_dest->IsSMTP();
    $phpmailer_dest->SMTPAuth = true;
    $phpmailer_dest->setFrom($phpmailer_dest->Username,$from_name_dest);

    $phpmailer_marimanu->Username = $email_user;
    $phpmailer_marimanu->Password = $email_password;
    $phpmailer_marimanu->SMTPSecure = 'ssl'; // tls // ssl
    $phpmailer_marimanu->Host = 'smtp.gmail.com';
    $phpmailer_marimanu->Port = 465; // 587 // 465
    $phpmailer_marimanu->CharSet = 'UTF-8';
    $phpmailer_marimanu->Encoding = 'base64';
    $phpmailer_marimanu->IsSMTP();
    $phpmailer_marimanu->SMTPAuth = true;
    $phpmailer_marimanu->setFrom($phpmailer_marimanu->Username,$from_name_marimanu);

    $phpmailer_dest->addAddress($address_to_dest);
    $phpmailer_marimanu->addAddress($address_to_marimanu);

    $phpmailer_dest->FromName = '¡Hola!';
    $phpmailer_marimanu->FromName = 'Envío Formulario';

    $phpmailer_dest->Subject = $subject_dest;
    $phpmailer_marimanu->Subject = $subject_marimanu;

    if (!$tel)
    {
        $tel = 'No Compartido';
    }
    if (!$email)
    {
        $email = 'No Compartido';
    }
    if (!$alergias)
    {
        $alergias = 'No Compartida';
    }
    if (!$message)
    {
        $message = 'No Compartido';
    }

    $body_dest = "papa";
    $body_marimanu = "Formulario enviado: \n\n Id: $name_id \n Nombre: $name \n Correo: $email \n Teléfono: $tel \n Alergias: $alergias \n Mensaje: $message \n\n MariManu.";

    $phpmailer_dest->Body = $body_dest;
    $phpmailer_marimanu->Body = $body_marimanu;

    $phpmailer_dest->isHTML(True);
    $phpmailer_marimanu->isHTML(False);

    if ($email)
    {
        $phpmailer_dest->send();
    }

    $phpmailer_marimanu->send();

    $jsonFilePath = "../json/database.json";
    $jsonData = file_get_contents($jsonFilePath);
    $database = json_decode($jsonData, true);

    $database[$name_id]["Confirmacion"] = 1;

    $jsonData = json_encode($database, JSON_PRETTY_PRINT);
    file_put_contents($jsonFilePath, $jsonData);


    header("Location: ../return.html");
}

?>