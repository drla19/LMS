<?php





$uploaddir = '../useraudios/';

$uploadfile = $uploaddir . basename($_FILES['userfile']['name']);


//echo '<script type="text/javascript"> alert("'.$uploadfile.'");</script>';

//echo '<script type="text/javascript"> alert("'.$_POST["key"].'");</script>';


if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
	
	
  echo '<script type="text/javascript"> 
   </script> ';

} else {

 //echo '<script type="text/javascript"> alert("error"); </script> ';
  // WARNING! DO NOT USE "FALSE" STRING AS A RESPONSE!
  // Otherwise onSubmit event will not be fired
//  echo '<script type="text/javascript"> alert("error"); </script> ';
}




?>