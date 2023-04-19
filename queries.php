<?php

class Queries {
    
    private $dbh ;
    private $user = 'root' ; 
    private $pass = 'root' ;

    function startConnection(){

        try{
            $this->dbh = new PDO( 'mysql:host=localhost;dbname=portfolio', $this -> user, $this -> pass);
            // echo("Connection OK");
        }
        catch(PDOException $ex){
            echo $ex->getMessage();
            die("Connection KO");
        }
    }

    function sendMessage($new_message) {
        
        $sql = "INSERT INTO formulaire_contact (nom, entreprise, email, numero, message) VALUES (:nom, :entreprise, :email, :numero, :message)";
        $stmt = $this->dbh->prepare($sql);
        $succeed = $stmt->execute($new_message);
        return $succeed; 
    }
}

?>