<?php
    //Correo al que llegará la información
    $destinatario = 'rogero.dev@gmail.com';

    //Datos que se enviarán de acuerdo al formmulario
    $nommbre = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $mensaje = $_POST['textarea-mensaje'];

    $header = 'Enviado desde Roger Olivera - Portafolio';
  
    $contenido = 'Remitente: ' . $nombre . ' Email: ' . $email . ' Teléfono: ' . $telefono . ' MENSAJE: ' . $mensaje;
    $contenido = str_replace("\n.", "\n..", $contenido);

    mail($destinatario, $header, $contenido, $header);
    echo "<script>alert('¡Correo enviado exitosamente!');</script>";
    echo "<script> setTimeout(\"location.href='index.html'\", 800)</script>"

?>