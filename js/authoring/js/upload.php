<?php

//$uploaddir = '/var/www/uploads/';

$uploaddir = 'uploads/';

$uploadfile = $uploaddir . $_POST["timestamp"]. basename($_FILES['userfile']['name']);


if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {


} else {
  // WARNING! DO NOT USE "FALSE" STRING AS A RESPONSE!
  // Otherwise onSubmit event will not be fired
//  echo '<script type="text/javascript"> alert("error"); </script> ';
}




?>