<?php

    
    include('settings.php');
    
    
    
    function get_imagedir($dir) {
   
      if ($handle = opendir($dir)) {
    
      $f = array();
    
      while (false !== ($file = readdir($handle))) {
    
        $att = substr($file, strlen($file)-3);
        
        $att = strtolower($att);
        
        	    
         if ((($att == 'jpg') || ($att == 'peg') || ($att == 'png') || ($att == 'bmp') || ($att == 'gif'))
     
             &&     
    
    	      ($file != "." && $file != ".." && substr($file,0,1)!='_')) {
	       	
	         	$f[] = $file;
    
    	 }
     
	    }
	  }
	
	  closedir($handle);
	
	  return $f;
	  
	}
	
	
	
	function get_audiodir($dir) {

      if ($handle = opendir($dir)) {
    
      $f = array();
    
      while (false !== ($file = readdir($handle))) {
    
        $att = substr($file, strlen($file)-3);
        
        $att = strtolower($att);
        
        	    
         if (($att == 'mp3')
     
             &&     
    
    	      ($file != "." && $file != ".." && substr($file,0,1)!='_')) {
	       	
	         	$f[] = $file;
    
    	 }
     
	    }
	  }
	
	  closedir($handle);
	
	  return $f;
	  
	}
	
	
	
    function get_videodir($dir) {
   
      if ($handle = opendir($dir)) {
    
      $f = array();
    
      while (false !== ($file = readdir($handle))) {
    
        $att = substr($file, strlen($file)-3);
        
        $att = strtolower($att);
        
        	    
         if (($att == 'flv')
     
             &&     
    
    	      ($file != "." && $file != ".." && substr($file,0,1)!='_') && (strpos($file,'.')!=0)) {
	       	
	         	$f[] = $file;
    
    	 }
     
	    }
	  }
	
	  closedir($handle);
	
	  return $f;
	  
	}
	
	
	
	
	function get_shapesdir($dir) {

      if ($handle = opendir($dir)) {
    
      $f = array();
    
      while (false !== ($file = readdir($handle))) {
    
        $att = substr($file, strlen($file)-3);
        
        $att = strtolower($att);
        
        	    
         if (($att == 'png')
     
             &&     
    
    	      ($file != "." && $file != ".." && substr($file,0,1)!='_')) {
	       	
	         	$f[] = $file;
    
    	 }
     
	    }
	  }
	
	  closedir($handle);
	
	  return $f;
	  
	}
	
	
		
	
	
	$content = '';
	
	
	$content.='
	   
	   <script type="text/javascript">
	   
	      
	      function deleteImageItem(ff) {
	      	
	      	 $.get("scripts/deletefile.php",{ path: ff}, reloadImages);
	      	
	      }
	   
	      function reloadImages() {
	      	
	      	$.get("scripts/getfiles.php",{ cmd: "image"}, fillBackContent);  
	      }
	      
	   
	   
	     function deleteAudioItem(ff) {
	      	
	      	 $.get("scripts/deletefile.php",{ path: ff}, reloadAudios);
	      	
	      }
	   
	      function reloadAudios() {
	      	
	      	$.get("scripts/getfiles.php",{ cmd: "audio"}, fillBackContent);  
	      }
	   
	   
	   
	     
	      function deleteVideoItem(ff) {
	      	
	      	 $.get("scripts/deletefile.php",{ path: ff}, reloadVideos);
	      	
	      }
	   
	      function reloadVideos() {
	      	
	      	$.get("scripts/getfiles.php",{ cmd: "video"}, fillBackContent);  
	      }
	     
	    
	   
	   
	      function showVideoFiles() {
	      	
	      	
	      	 $("#additional_menu_subheader_right").html(\'<div id="uploadVideoButton" style="cursor:pointer"><img src="js/images/uploadfile.png"></a>\');
	      	 
	      	 $("#videoFiles").css("visibility","visible");
	      	 
			 $("#videoFiles").css("display","block");
			 
			 $("#audioFiles").css("visibility","hidden");
	      	 
			 $("#audioFiles").css("display","none");
			 

			  
			  new AjaxUpload(\'#uploadVideoButton\',{action: \'scripts/uploadvideo.php\',name: \'userfile\',data : {\'key1\' : "This data wont",\'key2\' : "be send because",\'key3\' : "we will verwrite it"},onSubmit : function(file , ext){if (ext && /^(avi|mpg|mpeg)/.test(ext)){this.setData({\'key\': \'This string will be send with the file\'});  } else {$(\'#example2 .text\').text(\'Error: only images are allowed\');return false;}},onComplete : function(file){ $.get("scripts/getfiles.php",{ cmd: "video"}, fillBackContent ); } });
	      	
	      	
	      
	      }
	   
	   
	   
	      function showAudioFiles() {
	      	
	      	 $("#additional_menu_subheader_right").html(\'<div id="uploadAudioButton" style="cursor:pointer"><img src="js/images/uploadfile.png"></a>\');
	      	
	      	 $("#audioFiles").css("visibility","visible");
	      	 
			 $("#audioFiles").css("display","block");
			 
			 $("#videoFiles").css("visibility","hidden");
	      	 
			 $("#videoFiles").css("display","none");
			 
			 
			 new AjaxUpload(\'#uploadAudioButton\',{action: \'scripts/uploadaudio.php\',name: \'userfile\',data : {\'key1\' : "This data wont",\'key2\' : "be send because",\'key3\' : "we will verwrite it"},onSubmit : function(file , ext){if (ext && /^(mp3)/.test(ext)){this.setData({\'key\': \'This string will be send with the file\'});  } else {$(\'#example2 .text\').text(\'Error: only images are allowed\');return false;}},onComplete : function(file){ ; $.get("scripts/getfiles.php",{ cmd: "audio"}, fillBackContent); } });	
	      		      	
	      	
	      }
	   
	   
	      
	   
	   
	   
	   </script>
	
	
	
	';
	
	
	
	$cmd = $_GET["cmd"];
	
	if ($cmd == 'audio') $dir = '../'.$useraudios_dir;
	
	if ($cmd == 'image') $dir = '../'.$userimages_dir;
    
    if ($cmd == 'video') $dir = '../'.$uservideos_dir;
    
    if ($cmd == 'shape') $dir = '../'.$shapes_dir;
    
    
    
    if ($cmd == 'video') {
    
	    
    	//$content.='<div id="additional_menu_subheader"><a onclick="showVideoFiles();" href="#">Video</a> | <a onclick="showAudioFiles();" href="#">Audio</a></div>';
	
	}
	
	//else $content.='<h1>Galéria</h1>';
	
	
	
	
	$content.='<div id="videoFiles">';
	
	
    $dir_cut = substr($dir,3);	
	
	
	if ($cmd == 'image')  $files = get_imagedir($dir);
	
	if ($cmd == 'video')  $files = get_videodir($dir);
	
	if ($cmd == 'audio')  $files = get_audiodir($dir);
		
    if ($cmd == 'shape')  $files = get_shapesdir($dir);


		

	for ($i=0; $i<count($files); $i++) {
	
	  if (count($files)>0) {
	    
		if ($cmd == 'image')
		
		  $content.='<div class="img_item"><a onclick="inInImage(\''.$dir_cut.'/'.$files[$i].'\')" href="#"><img src="'.$dir_cut.'/'.$files[$i].'" alt="" /><br /><a onclick="deleteImageItem(\''.$dir_cut.'/'.$files[$i].'\')" href="#"><img class="delete_sign" border="0" src="js/images/delete_sign.png"></a>'.$files[$i].'</a></div>';
		  
		if (($cmd == 'video')) 
		 	
		  
		  /*
		  $content.='<div class="img_item"><a onclick="addVideo(\''.$dir_cut.'/'.$files[$i].'\')" href="#"><img src="'.$dir_cut.'/'.substr($files[$i],0,strlen($files[$i])-4).'.png" alt="" /><br />'.substr($files[$i],0,strlen($files[$i])-4).'</a></div>';	
		  */
		  
		  $content.='<div class="img_item"><a onclick="deleteVideoItem(\''.$dir_cut.'/'.$files[$i].'\')" href="#"><img class="delete_sign" border="0" src="js/images/delete_sign.png"></a><a onclick="addVideo(\''.$dir_cut.'/'.$files[$i].'\')" href="#">'.substr($files[$i],0,strlen($files[$i])-4).'</a></div>';
		  
		  
		if ($cmd == 'shape') 
		  
		  $content.='<div class="img_item"><a onclick="insertShape(\''.$dir_cut.'/'.$files[$i].'\')" href="#"><img src="'.$dir_cut.'/'.$files[$i].'" alt="" /><br />'.$files[$i].'</a></div>';
		  
		}
		
	}
	
	$content.='</div>';
	
	
	if ($cmd == 'audio')
	
	   $content.='<div id="audioFiles" style="">';
	
    else
		$content.='<div id="audioFiles" style="visibility:hidden; display;none;">';
    	
     	
    	
	
    $dir = '../'.$useraudios_dir;
	
	
	$dir_cut = substr($dir,3);	
		
	$files = get_audiodir($dir);
	
	
		
	for ($i=0; $i<count($files); $i++) {
	

		 	
		  $content.='<div class="img_item"><a onclick="addAudioDiv(\''.$dir_cut.'/'.$files[$i].'\')" href="#"><img src="'.$js_dir.'/images/mp3_icon.jpg" alt="" /><br /><a onclick="deleteAudioItem(\''.$dir_cut.'/'.$files[$i].'\')" href="#"><img class="delete_sign" border="0" src="js/images/delete_sign.png"></a>'.$files[$i].'</a></div>';	
		  
		
	}
	
	
	
	
	$content.='</div>';

	
	if ($cmd == 'image') 
	
    	$content.='<script type="text/javascript">
	
	
	     new AjaxUpload(\'#uploadImageButton\',{action: \'scripts/uploadimage.php\',name: \'userfile\',data : {\'key1\' : "This data wont",\'key2\' : "be send because",\'key3\' : "we will verwrite it"},onSubmit : function(file , ext){if (ext && /^(jpg|png|jpeg|gif)/.test(ext)){this.setData({\'key\': \'This string will be send with the file\'});  } else {$(\'#example2 .text\').text(\'Error: only images are allowed\');return false;}},onComplete : function(file){ $.get("scripts/getfiles.php",{ cmd: "image"}, fillBackContent); } });	
	
    	</script>';
    	
    	
    	
    
	
     if ($cmd == 'video') 
	
    	$content.='<script type="text/javascript">
	
	

	
    	</script>';
			
		
	

	
	
	echo $content;
	
	
	

  



?>