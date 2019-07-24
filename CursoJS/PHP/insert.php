<?php

$name = $_POST["name"];
$age = $_POST["age"];

require("Connection.php");
$sql = "INSERT INTO User(Name, Age) VALUES ('$name', '$age')";
mysqli_query($connection,$sql);
echo 1;
?> 