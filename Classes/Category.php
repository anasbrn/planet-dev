<?php

include_once 'Database.php' ;

class Category{
    public static function getCategories(){
        $connection = new Database ;
        $connection = $connection->connect() ;

        $getCategories = " SELECT * FROM category" ;
        $stmt       = $connection->query($getCategories) ;
        $data       = $stmt->fetchAll() ;

        $getData    = json_encode($data) ;

        echo $getData ;
        // return $data ;
    }

    public static function updateCategory(){
        $categoryId     = $_POST['categoryId'] ;
        $categoryName   = $_POST['newCategoryName'] ;
        $connection     = new Database ;
        $connection     = $connection->connect() ;

        $update         = " UPDATE category SET categoryName = '$categoryName' WHERE categoryId = $categoryId" ;
        $stmt           = $connection->query($update) ;
    }

    public static function deleteCategory(){
        $categoryId     = $_POST['categoryIdDelete'] ;
        $connection     = new Database ;
        $connection     = $connection->connect() ;

        $delete         = " DELETE FROM category WHERE categoryId = $categoryId " ;
        $stmt           = $connection->query($delete) ;
    }
}


if(isset($_POST['editCategory'])) Category::updateCategory() ;
if(isset($_POST['deleteCategory'])) Category::deleteCategory() ;

if(isset($_POST['getCategory'])) Category::getCategories() ;