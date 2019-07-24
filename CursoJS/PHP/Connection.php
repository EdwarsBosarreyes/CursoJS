<?php 
$host = "localhost";
$user = "root";
$pass = "root";
$db = "Users";

$connection = mysqli_connect($host,$user,$pass,$db);
mysqli_set_charset($connection, "utf8");

?>