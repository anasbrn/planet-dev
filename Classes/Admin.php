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
    
    // public static function addArticles(){
    //     $articleName = $_POST['articleName'] ;
    //     $authorName = $_POST['authorName'] ;
    //     $date = $_POST['articleDate'] ;
    //     $content = $_POST['articleContent'] ;

    //     $connection = new Database ;
    //     $connection = $connection->connect() ;

    //     // $insert     = " INSERT INTO article( "
    // }
    
    
    public static function addCategories(){
        $categoryName = $_POST['categoryName'] ;

        $connection = new Database ;
        $connection = $connection->connect() ;

        $insert     = " INSERT INTO `category`(`categoryId`, `categoryName`) VALUES (null,'$categoryName') " ;
        $stmt       = $connection->query($insert) ;
    }

    public static function addAuthor(){
        $firstName = $_POST['authorFirstName'] ;
        $lastName = $_POST['authorLastName'] ;
        $birthday = $_POST['authorBirthday'] ;

        $connection = new Database ;
        $connection = $connection->connect() ;

        $insert     = " INSERT INTO `author`(`authorId`, `firstName`, `lastName`, `birthday`) VALUES (null, '$firstName','$lastName','$birthday') " ;
        $stmt       = $connection->query($insert) ;
    }

    public static function updateauthor(){
        $authorId     = $_POST['authorId'] ;
        $firstName     = $_POST['newAuthorFirstName'] ;
        $lastName     = $_POST['newAuthorLastName'] ;
        $birthday     = $_POST['newAuthorBirthday'] ;
        $connection     = new Database ;
        $connection     = $connection->connect() ;

        $update         = " UPDATE author SET firstName = '$firstName', lastName = '$lastName', birthday = '$birthday'  WHERE authorId = $authorId" ;
        $stmt           = $connection->query($update) ;
    }

    public static function deleteAuthor(){
        $authorId     = $_POST['authorId'] ;
        $connection     = new Database ;
        $connection     = $connection->connect() ;

        $delete         = " DELETE FROM author WHERE authorId = $authorId " ;
        $stmt           = $connection->query($delete) ;
    }
    
    public static function updateArticle(){
        $articleId     = $_POST['articleId'] ;
        $articleName     = $_POST['newArticleName'] ;
        $articleContent     = $_POST['newArticleContent'] ;
        $category     = $_POST['newArticleCategory'] ;
        $author     = $_POST['newArticleAuthor'] ;
        $date     = $_POST['newArticleDate'] ;
        $connection     = new Database ;
        $connection     = $connection->connect() ;

        $update         = " UPDATE article SET articleName = '$articleName', content = '$articleContent', datePub = '$date', authorId = '$author', categoryId = '$category'  WHERE articleId = $articleId" ;
        $stmt           = $connection->query($update) ;
    }
}



if(isset($_POST['signIn']))  Admin::login() ;
if(isset($_POST['addCategory']))  Admin::addCategories() ;
if(isset($_POST['addAuthor'])) Admin::addAuthor() ;
if(isset($_POST['updateAuthor'])) Admin::updateAuthor() ;
if(isset($_POST['deleteAuthor'])) Admin::deleteAuthor() ;
if(isset($_POST['updateArticle'])) Admin::updateArticle() ;