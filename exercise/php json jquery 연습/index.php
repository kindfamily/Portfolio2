<?php
$conn = mysqli_connect("localhost", "root", 17442638);
mysqli_select_db($conn, "randomq");
$result = mysqli_query($conn, "SELECT * FROM quiz");
?>
<!DOCTYPE html>
<html>
<head>
     <meta charset="utf-8">
  <link rel="stylesheet" type="text/css" href="http://localhost/style.css">
    <style>
        div{
            border: 1px solid black;
        }
    </style>
</head>
<body id="target">
   
    <?php
    while( $row = mysqli_fetch_assoc($result)){
      echo '<div>'.$row['id'].'</div><div>'.$row['title'].'</div>';
    }
    ?>
</body>
</html>