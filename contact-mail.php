<?php

// Si le formulaire a été soumis
if (isset($_POST["message"])) {
    $message = "Ce message vous a été envoyé via le formulaire de contact de votre site 
    nom : " . $_POST["nom"] . " 
    entreprise : " . $_POST["entreprise"] . " 
    email : " . $_POST["email"] . " 
    numero : " . $_POST["numero"] . " 
    message : " . $_POST["message"];

mail("oriane.tourneroche@gmail.com", "Nouveau message dans la base de donnée", $message, "Reply-to:" . $_POST["email"]);
header('Location:index.html');
}


?>