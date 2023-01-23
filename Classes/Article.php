<?php

include_once 'Database.php' ;

class Article{
    public static function getArticles(){
        $connection = new Database ;
        $connection = $connection->connect() ;

        $getArticles    = "SELECT article.articleName as articleName, article.content as content, article.datePub as datePub, author.firstName as firstName, author.lastName as lastName, category.categoryName as category  FROM `article` JOIN author ON article.authorId = author.authorId JOIN category ON article.categoryId = category.categoryId" ;
        $stmt           = $connection->query($getArticles) ;
        $data           = $stmt->fetchAll() ;

        return $data ;
    }
}