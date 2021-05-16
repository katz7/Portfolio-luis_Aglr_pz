<?php
$destino = "djluis7trance@gmail.com";
$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$mensaje = $_post["mensaje"];

$contenido = "Nombre: ". $nombre ."\nCorreo: " . $correo . "\nMensaje: " . $mensaje;

mail($destino,"Contacto", $contenido);


?>

