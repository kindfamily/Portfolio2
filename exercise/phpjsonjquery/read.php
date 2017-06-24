<?php
$conn = mysqli_connect("localhost", "root", 17442638);
mysqli_select_db($conn, "randomq");
$result = mysqli_query($conn, "SELECT * FROM quiz");

 while( $row = mysqli_fetch_assoc($result)){
     echo '<h1>'.json_encode($row['id']).'</h1>'.json_encode($row['title']).'<h1>'.json_encode($row['description']).'</h1>'.'\n';
 }


?>