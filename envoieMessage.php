<?php

$new_message = [
    'nom' => $_POST['nom'],
    'entreprise' => $_POST['entreprise'],
    'email' => $_POST['email'],
    'numero' => $_POST['numero'],
    'message' => $_POST['message']
];

require ('queries.php');
$messageQueries = new Queries() ;
$messageQueries -> startConnection();
$succeed =$messageQueries -> sendMessage($new_message); 

if ($succeed == true){
    header('Location:index.html?alert=created');
} else header('Location:index.html?alert=error');

?>