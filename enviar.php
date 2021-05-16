<?php
$destino = "Luis_Aglr_Pz@hotmail.com";
$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$mensaje = $_post["mensaje"];

$contenido = "Nombre: ". $nombre ."\nCorreo: " . $correo . "\nMensaje: " . $mensaje;

mail($destino,"Contacto", $contenido);


?>

