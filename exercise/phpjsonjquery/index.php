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
    
     	<div id="timezones">timezonesdiv <div></div></div>
        <div id="execute">execute</div>
      <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
      
      <script>
	$(document).ready(function() {
		all();
	});

// 
	function all() {          
        $.ajax({
            url:'./read.php',
            dataType:'json',
            success:function(data){ $('#timezones').append('<div>'+data+'</div>');
                }
            })
    }
	</script>
</body>
</html>