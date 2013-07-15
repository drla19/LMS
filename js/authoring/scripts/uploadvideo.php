<?php





$uploaddir = '../uservideos/';

$uploadfile = $uploaddir . basename($_FILES['userfile']['name']);

$fname = basename($_FILES['userfile']['name']);

$fname = substr($fname, 0, strlen($fname)-4); 

//echo '<script type="text/javascript"> alert("'.$uploadfile.'");</script>';

//echo '<script type="text/javascript"> alert("'.$_POST["key"].'");</script>';


if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
	

  //video conversion
  exec('ffmpeg -i '.$uploadfile.' -y -b 800 -r 25 -f flv -vcodec flv -ab 128 -ar 44100 '.$uploaddir.'/'.$fname.'flv');
  
  //exec('ffmpeg -i '.$uploadfile.' -an -s 160x100 -ss 00:00:10 -r 1 -y '.$uploaddir.$fname.'png');
  
  exec('ffmpeg -i '.$uploadfile.' -an -s 160x100 -ss 00:00:10 -r 1 -y abc.png');
  
  
  
  
    
  unlink($uploadfile);
  
	
	
  echo '<script type="text/javascript"> 
  
   
   </script> ';

} else {

 //echo '<script type="text/javascript"> alert("error"); </script> ';
  // WARNING! DO NOT USE "FALSE" STRING AS A RESPONSE!
  // Otherwise onSubmit event will not be fired
//  echo '<script type="text/javascript"> alert("error"); </script> ';
}




?>