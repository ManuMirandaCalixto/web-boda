<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';

$name_id = $_POST["id_invitado"];
$info = $_POST["info_invitado"];
$name = $_POST["name"];
$email = $_POST["email"];
$tel = $_POST["tel"];
$alergias = $_POST["alergias"];
$menu = $_POST["menu"];
$bus = $_POST["bus"];
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

    $subject_dest = "¡La boda de MariManu!"; // Mensaje de titulo del correo al destinatario
    $subject_marimanu = "Formulario de $name"; // Mensaje de titulo del correo marimanu

    $address_to_dest = $email; // Direccion de correo del destinatario
    $address_to_marimanu = 'labodademarimanu@gmail.com'; // Direccion de correo marimanu

    $from_name_dest = 'Dest';
    $from_name_marimanu = 'Marimanu';

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

    $phpmailer_dest->FromName = 'Manu y Mayka'; // Nombre del correo marimanu reflejado en el correo destinatario
    $phpmailer_marimanu->FromName = 'MariManu'; // Nombre del correo marimanu reflejado en el correo marimanu

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

    $body_dest = '
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!-- <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"> -->
      <title>Agradecimientos</title>
      <style>
        body {
          font-family: "Arial", sans-serif;
          background-color: #3c1fdb;
          color: #333;
          margin: 0;
          padding: 0;
        }
    
        .container {
          max-width: 600px;
          margin: 30px auto;
          /* background-image: url(C:\Users\Manuel\Desktop\BODA\marimanu\git\web-boda\img\galeria5.jpg); */
          background-color: #9b5e4f;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
    
        h1 {
          color: #D4AF37;
        }
    
        p {
          line-height: 1.6;
          color: #fff;
        }
    
        .footer {
          border-top: 1px solid #D4AF37;
          margin-top: 20px;
          font-size: 0.8em;
          padding-top: 10px;
          font-size: 0.8em;
        }

        .p-f {
          color:#fff;
        }
        
        .correo {
          color: #D4AF37;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>¡Muchas gracias por apuntarte!</h1>
        <p>Hola {{name}},</p>
        <p>has decidido acompañarnos en esta aventura y tendremos en cuenta tus preferencias.</p>
        <p>¡¡Te esperamos!!</p>

        <div class="footer">
            <p class="p-f"><br> Manu y Mayka<br> <a class="correo" href="mailto:labodademarimanu@gmail.com">labodademarimanu@gmail.com</a></p>
            <p> &hearts; </p>
        </div>

      </div>
    </body>
    </html>
    '; // Mensaje en el correo del destinatario
    $body_dest = str_replace("{{name}}", $name, $body_dest);
    $body_marimanu = "
    Formulario enviado:

    Id: $name_id
    Nombre: $name
    Información: $info
    Correo: $email
    Teléfono: $tel
    Alergias: $alergias
    Menu: $menu
    Bus: $bus
    Mensaje: $message

    MariManu.
    "; // Mensaje en el correo marimanu

    $phpmailer_dest->Body = $body_dest;
    $phpmailer_marimanu->Body = $body_marimanu; // CAMBIAR EL $BODY_DEST POR $BODY_MARIMANU

    $phpmailer_dest->isHTML(True);
    $phpmailer_marimanu->isHTML(False); // CAMBIAR A FALSE

    if ($email && $email != $address_to_marimanu && $email != "mirandacalixtomanuel@gmail.com" && $email != "maykabizarre@gmail.com" && $email != "antoniocarmen@ghotmail.com")
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