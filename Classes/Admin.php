<?php

include_once 'Database.php' ;

session_start() ;

class Admin{
    private $firstName ;
    private $lastName ;
    private $email ;
    private $password ;

    // public function __construct($firstName, $lastName, $email, $password)
    // {
        
    // }

    public function getFirstName(){
        return $this->firstName ;
    }

    public function setFirstName($firstName){
        $this->firstName = $firstName ;
    }

    public function getLastName(){
        return $this->lastName ;
    }

    public function setlastName($lastname){
        $this->lastName = $lastname  ;
    }

    public function getEmail(){
        return $this->email ;
    }

    public function setEmail($email){
        $this->email = $email ;
    }

    public static function login(){
        $email      = $_POST['email'] ;
        $password   = $_POST['password'] ;
    
        $connection = new Database ;
        $connection = $connection->connect() ;
        $sql = " SELECT * FROM admin WHERE email = '$email' AND adminPassword = '$password' " ;
        $stmt = $connection->query($sql) ;
        if($stmt->rowCount() > 0){
            $data = $stmt->fetch() ;
            $_SESSION['email'] = $data['email'] ;
            header('location: ../dashboard/admin/sidebar.php') ;
           
        }
    
        else echo 'Invalid account' ;
    }
    
    public static function addArticles(){
        $articleName = $_POST['articleName'] ;
        $authorName = $_POST['authorName'] ;
        $date = $_POST['articleDate'] ;
        $content = $_POST['articleContent'] ;

        $connection = new Database ;
        $connection = $connection->connect() ;

        // $insert     = " INSERT INTO article( "
    }
    
}



if(isset($_POST['signIn']))  Admin::login() ;