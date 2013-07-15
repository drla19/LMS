<?php

  include('settings.php');

  $content='

  <div id="videobox" style="position:absolute; left:120px; top:100px; width:445px; height:320px; z-index:1;" class="imagebox" > 

  <input id="videoboxfilename" type="hidden" value="'.substr($_GET["path"],0,strlen($_GET["path"])-4).'.flv" />


  <div id="handle" class="jqHandle-top jqDrag"></div>
  <div class="jqHandle-bottom jqDrag"></div>
  <div class="jqHandle-left jqDrag-left"></div>
  <div class="jqHandle-right jqDrag-right"></div>

   <a onmousedown="setVideoZindex(); return false;" href="'.substr($_GET["path"],0,strlen($_GET["path"])-4).'.flv" style="display:block;width:425px;height:300px; padding-left:10px; padding-top:5px;" id="player"> 
  </a>
  </div>


<script language="text/javascript"> 
   
  flowplayer("player", {src: \''.$js_dir.'/flowplayer-3.1.5.swf\', wmode: \'transparent\'}, {
  	
  });	
   
    
  
	
	
  videocounter = 1;  
    
  $(\'#videobox\').jqDrag(\'.jqDrag\');
  $(\'#videobox\').jqDrag(\'.jqDrag-left\'); 
  $(\'#videobox\').jqDrag(\'.jqDrag-right\'); 
  $(\'#videobox\').jqResize(\'.handle-nw\',\'nw\');  
  $(\'#videobox\').jqResize(\'.handle-ne\',\'ne\');  
  $(\'#videobox\').jqResize(\'.handle-se\',\'se\'); 
  $(\'#videobox\').jqResize(\'.handle-sw\',\'sw\');
  
  $(\'#videobox\').bind(\'click\', function(e){   
  	  if ((mode==\'edit\') && ($(\'#videobox .handle-nw\').css(\'visibility\') === \'hidden\')) 
	 { 
	 	
	     div_from = \'v\';	
         div_type = \'v\';
		 $(\'#videobox .handle-nw\').css(\'visibility\',\'\'); 
		 $(\'#videobox .handle-ne\').css(\'visibility\',\'\');  
		 $(\'#videobox .handle-sw\').css(\'visibility\',\'\');  
		 $(\'#videobox .handle-se\').css(\'visibility\',\'\'); 
		 $(\'#videobox .jqHandle-top\').css(\'visibility\',\'\');  
		 $(\'#videobox .jqHandle-bottom\').css(\'visibility\',\'\');   
		 $(\'#videobox .jqHandle-left\').css(\'visibility\',\'\');  
		 $(\'#videobox .jqHandle-right\').css(\'visibility\',\'\');    
		 setVideoZindex(); 
	 } 
	  else  {     }    });           
  
  
   $(\'#overvideo\').bind(\'click\', function(e){  
   	
	 if (mode==\'edit\') {	
	  saveVideoDivContent(selected_div); 
	  div_from=\'v\';  
	
	if ($(\'#videobox .jqHandle-left\').css(\'visibility\') === \'hidden\') { 
		 buttons_noactive(); 
		 $(\'#videobox .jqHandle-left\').css(\'visibility\',\'\');   
		 $(\'#videobox .jqHandle-top\').css(\'visibility\',\'\');   
		 $(\'#videobox .jqHandle-bottom\').css(\'visibility\',\'\');  
		 $(\'#videobox .jqHandle-right\').css(\'visibility\',\'\');  
		 div_type=\'v\';         
	 }  else  {     }  
	 }
	 
	  });  
  
  
</script>';



echo $content;

?>