<?php

class Database{
    public $serverName = "localhost" ;
    public $serverUsername = "root" ;
    public $serverPassword = "" ;
    public $databaseName = "planet-dev";
    public $connection = null;

     function connect(){
        try{
            $this->connection = new PDO("mysql:host=$this->serverName;dbname=$this->databaseName", $this->serverUsername, $this->serverPassword) ;
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION) ;

            return $this->connection ;
        }

        catch (PDOException $e){
            echo $e ;
        }
    }
}