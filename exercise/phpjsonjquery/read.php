<?php
$conn = mysqli_connect("localhost", "root", 17442638);
mysqli_select_db($conn, "randomq");
$result = mysqli_query($conn, "SELECT * FROM quiz");
$row = mysqli_fetch_assoc($result))
	
echo json_encode($row);
?>