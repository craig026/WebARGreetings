<?php
$servername = "localhost";
$username = "id11852045_user";
$password = "123qwe";
$dbname = "id11852045_testdb";

//Make Connection
$conn = new mysqli($servername, $username, $password, $dbname);

//Check Connection
if($conn->connect_error){
  die("Connection Failed. ". $conn->connect_error);
}
echo "Connected successfully";

$greeting = isset($_POST['modelTitle']);
$filename = isset($_FILES["inpFile"]["name"]);
$target_dir = "https://craig026.000webhostapp.com/uploads/";
$target_file = $target_dir . basename($_FILES["inpFile"]["name"]);
$recipientname = isset($_POST['inpName']);
$senderemail = isset($_POST['inpEmail']);

//Select file type
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

//Valid file extensions
$extensions_arr = array("jpg","jpeg","png","gif");

//Check extension
if(in_array($imageFileType,$extensions_arr)){

//Insert record
$query = "INSERT INTO ar_greetings (3d_model, photo, recipient_name, sender_email) VALUES ('".$greeting."', '".$filename."', '".$recipientname."', '".$senderemail."')";
mysqli_query($conn,$query);

//Check for any errors
if($conn->query($query) === TRUE) {
  echo "Details have been uploaded!";
} else {
  echo "Error: " . $query . "<br>" . $conn->error;
}

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$conn->close();

  //Upload file
  //move_uploaded_file($_FILES['inpFile']['tmp_name'],$target_dir.$filename);
}

?>
