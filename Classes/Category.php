<?php

include_once 'Database.php' ;

class Category{
    public static function getCategories(){
        $connection = new Database ;
        $connection = $connection->connect() ;

        $getCategories = " SELECT * FROM category" ;
        $stmt       = $connection->query($getCategories) ;
        $data       = $stmt->fetchAll() ;

        return $data ;
    }

    public static function updateCategory(){
        $categoryId     = $_POST['categoryId'] ;
        $categoryName   = $_POST['newCategoryName'] ;
        $connection     = new Database ;
        $connection     = $connection->connect() ;

        $update         = " UPDATE category SET categoryName = '$categoryName' WHERE categoryId = $categoryId" ;
        $stmt           = $connection->query($update) ;

        // header('location: ../dashboard/admin/sidebar.php') ;
    }
}


if(isset($_POST['editCategory'])) Category::updateCategory() ;