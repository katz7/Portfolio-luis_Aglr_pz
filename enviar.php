<?php
$destino = 'Luis_Aglr_pz@hotmail.com';
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];

$contenido = "Nombre: ". $nombre ."\nCorreo: " . $correo . "\nMensaje: " . $mensaje;

mail($destino,"Contacto", $contenido);

echo"<script> ('correo enviado exitosamente')</script>";
echo"<script> setTimeout(\"location.href='index.html'\",1000)</script>";

?>

