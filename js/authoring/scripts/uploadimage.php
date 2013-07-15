<?php




$uploaddir = '../userimages/';

$file = basename($_FILES['userfile']['name']);


$uploadfile = $uploaddir.$_POST["time_now"].$file;





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