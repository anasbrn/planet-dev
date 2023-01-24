<?php

include_once 'Database.php' ;

class Author{
    public static function getAuthors(){
        $connection = new Database ;
        $connection = $connection->connect() ;

        $getAuthors = " SELECT * FROM author " ;
        $stmt       = $connection->query($getAuthors) ;
        $data       = $stmt->fetchAll() ;

        $getData = json_encode($data) ;
        echo $getData ;
    }
}

if(isset($_POST['getAuthor'])) Author::getAuthors() ;