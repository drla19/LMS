<?php


   list($width, $height, $type, $attr) = getimagesize("../userimages/".$_POST["filename"]);
   
   $json = array(
         'width' => $width,
         'height'=> $height,
         'type' => $type,
         'attr' => $attr
       );

   
   echo json_encode($json);
   
?>
