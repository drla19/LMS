<?php

 include('settings.php'); 
  

 
 function getdir($d) {
 	 
	if ($handle = opendir("../$d")) {  
	  	
 	$files = array();
    
	while (false !== ($file = readdir($handle))) {
    
        $att = substr($file, strlen($file)-3);
        
        $att = strtolower($att);
        
        
         if ((($att == 'jpg') || ($att == 'peg') || ($att == 'png') || ($att == 'bmp') || ($att == 'gif'))
     
             &&     
    
    	      ($file != "." && $file != ".." && substr($file,0,1)!='_')) {
	       	
	         	$files[] = $file;
    	 }
    
	}
	
	return $files;
	
	}
 	
 }




 $content = '

   <script type="text/javascript">
    
    var last;
    var dd = new Array();
    var icounter;
    var len;
    
    
    
    function selectLayoutBack(option) {
       	  
       im = $("#selected_t").val();
       
       bp = "url('.$_GET["userimages_dir"].'/"+im+")";
		
	   sd = $("#selected_div").val();
	   
	   if (sd == 0) {
		 
         $("#container").css("background-image",bp);
       	           
	     if (option == 1) $("#container").css("background-position","center"); 	
	   
	     if (option == 2) $("#container").css("background-position","top left");
	   
	     if (option == 3) $("#container").css("background-position","top right");
	   
	     if (option == 4) $("#container").css("background-position","bottom left");
	   
	     if (option == 5) $("#container").css("background-position","bottom right");
	   
	     if (option == 6) $("#container").css("background-position","");
	   
	     if (option == 6) $("#container").css("background-repeat","repeat");
	   
	     else $("#container").css("background-repeat","no-repeat");
	   
	   
	   } else {
	   	
	     $("#box"+sd).css("background-image",bp);
	   	 
	     if (option == 1) $("#box"+sd).css("background-position","center"); 	
	   
	     if (option == 2) $("#box"+sd).css("background-position","top left");
	   
	     if (option == 3) $("#box"+sd).css("background-position","top right");
	   
	     if (option == 4) $("#box"+sd).css("background-position","bottom left");
	   
	     if (option == 5) $("#box"+sd).css("background-position","bottom right");
	   
	     if (option == 6) $("#box"+sd).css("background-position","");
	   
	     if (option == 6) $("#box"+sd).css("background-repeat","repeat");
	      
	     else $("#box"+sd).css("background-repeat","no-repeat");
	   	
	   	
	   }
	   
	   	   
	   
	   $("#dialog-backposition").css("visibility","hidden");
	   
	   $("#dialog-backposition").css("display","none");
	   
	   $("#additional_menu").css("visibility","hidden");
	   
	   $("#additional_menu").css("display","none");
	   
	   status = "authoring";
	   
	   $("#status").val("authoring");
	   
	   clearAll();
	   
    }
    
    
    

    
    function checkTransparent() {
	 	
        sd = $("#selected_div").val();
        
        if (sd!=0) { 
        	
			$("#box"+sd).css("background-color","");
			
			$("#box"+sd).css("background-image","");
						
	    }		
	    
	    $("#dialog-backposition").css("visibility","hidden");
	   
	    $("#dialog-backposition").css("display","none");
	   
	    $("#additional_menu").css("visibility","hidden");
	   
	    $("#additional_menu").css("display","none");
	   
	    clearAll();
        
	 }
	 
   	    
  	function showBackThemeMenu() {
		$("#backthememenu").css("visibility","");
		$("#backthememenu").css("display","block");
		
		$("#backcolormenu").css("visibility","hidden");
		$("#backcolormenu").css("display","none");
		
		$("#backimagemenu").css("visibility","hidden");
		$("#backimagemenu").css("display","none");
		
		$("#additional_menu_subheader_right").html(\'\');
		
	
	}
	
	
	function showBackColorMenu() {
		$("#backthememenu").css("visibility","hidden");
		$("#backthememenu").css("display","none");
		
		$("#backcolormenu").css("visibility","");
		$("#backcolormenu").css("display","block");
		
		$("#backimagemenu").css("visibility","hidden");
		$("#backimagemenu").css("display","none");
		
	 	$("#additional_menu_subheader_right").html(\'\');
	}
	
	
	function showBackImageMenu() {
		$("#backthememenu").css("visibility","hidden");
		$("#backthememenu").css("display","none");
		
		$("#backcolormenu").css("visibility","hidden");
		$("#backcolormenu").css("display","none");
		
		$("#backimagemenu").css("visibility","");
		$("#backimagemenu").css("display","block");  
		
		
		
	    
		$("#additional_menu_subheader_right").html(\'<div id="uploadImageBackButton" name="uploadImageBackButton" style="cursor:pointer"><img src="js/images/uploadfile.png"></a>\');
		
		
		 new AjaxUpload(\'#uploadImageBackButton\',{action: \'scripts/uploadimage.php\',name: \'userfile\',data : {\'key1\' : "This data wont",\'key2\' : "be send because",\'key3\' : "we will verwrite it"},onSubmit : function(file , ext){if (ext && /^(jpg|png|bmp|jpeg|gif)/.test(ext)){this.setData({\'key\': \'This string will be send with the file\'});  } else {$(\'#example2 .text\').text(\'Error: only images are allowed\');return false;}},onComplete : function(file){ reloadBackImages(); } });	
		 
		 
		
	}



     
     function reloadBackImages() {
     
	 
     	$.get("scripts/getbackgroundfiles.php",{ cmd: "imageback"}, fillBackContent);
     	
     	
     }
	   
	  


   
    
   	function selectTheme(id) {
   		   		   		
   		$("#selected_t").val(id);
   	}
   	
   	
   	function selectUserImage(id) {
   		   		   		
   		$("#selected_t").val(id);
   		
   	}
   	
   	
   	
   	
  	function apply(what, box_id,id) {
     
     if (id == 0) id = $("#selected_t").val();
     
     if (what == \'color\') id = $("#picker4").css("background-color");
    
     icounter = 1;
	 all = 0;
	 
	 
	 box_id = $("#selected_div").val();
	 
	 //zmena celeho slidu
	 if (box_id==0) {
		  	
	  	if (what==\'theme\') {
		     bp = "url('.$_GET["themes_dir"].'/"+id+")";
	
	
		     $("#container").css("background-image",bp); 	
		     $("#container").css("background-color",\'\');
		     $("#backpicture").val(id);
		     $("#backcolor").val(\'\');
		} 
			   
		if (what==\'color\') {
		     $("#container").css("background-color",id); 	
		     $("input#backcolor").val(id);
		     		     
		}
		
		if (what==\'image\') {
						 
			 $("#dialog-backposition").css("visibility","visible");
			 $("#dialog-backposition").css("display","block");
			 
			 $("#selected_t").val(id);
			
		}
			   
	  	
	  	
	  
    } else {
	  	
	    val_c = $("#color4").val();	 	
	 
	  	if (what==\'color\') {
		     
			 if (val_c == \'transparent\')
			 
			 $("#box"+box_id).css("background-color",""); 
			 
			 else
			 
			 $("#box"+box_id).css("background-color",id); 	
		     
			 $("input#backcolor").val(id);
		     		     
		}
		
		
		if (what == \'image\') {
			
			
			 $("#dialog-backposition").css("visibility","visible");
			 $("#dialog-backposition").css("display","block");
			 
			 $("#selected_t").val(id);
			
			
		}
		
		
			   
	  		  	
	    //$("#additional_menu").css("visibility","hidden");
	    //$("#additional_menu").css("display","none");
	  	
	   }
    
   	
   	}
   	
   	
   	
   
   
    function deleteImageBackItem(ff) {
	      	
     	 $.get("scripts/deletefile.php",{ path: ff}, reloadImagesBack);
	      	
    }
	   
    function reloadImagesBack() {
	      	
      	//$.get("scripts/getfiles.php",{ cmd: "image"}, fillBackContent);  
      	
      	$.get("scripts/getbackgroundfiles.php",{ cmd: "imageback"}, fillBackContent);

    }

';



$content.='</script>';

 
 
 

$content.='<div>';


 $content.='<div id="backthememenu" style="';

 if ($_GET["selected_div"]!=0) $content.='visibility: hidden; display: none;';
 
 if ((isset($cmd)) && ($cmd == 'imageback')) $content.='visibility: hidden; display: none;';
 
  
 $themes = getdir($_GET['themes_dir']);
 
 $content.=' ">';
 
 
 $content.='  
   
 <div style="float:left;">
  <input id="selected_t" type="hidden" value="" />';


 for ($i=0; $i<count($themes); $i++) {
 	
 	$content.='<div style="margin-right: 5px; float: left;">';
 	
 	$content.='<a onclick="apply(\'theme\',\'0\',\''.$themes[$i].'\'); return false;" href="#"><img width="200" src="themes/'.$themes[$i].'" alt="" /></a><br />';
 	$content.='</div>';
 	
 }

 
 $content.='
 </div>
 



 <br /><br />
 


  <a onclick="openPicker(\'color4\',\'picker4\',\'backcolor\'); return false;" href="#">
    <img src="js/images/selectcolor.png" alt= "" />
  </a>
  
  <div id="picker4" style="background-color:#FFF;" onclick="openPicker(\'color4\',\'picker4\',\'background_menu_color\'); return false;"></div>
 ';
 
 
 
 $content.=' 
 
</div>


<div id="backcolormenu" style="';

if ($_GET["selected_div"]!=0) {
	
}

else $content.='visbility:hidden; display:none;';

$content.='">

 
 <input id="selected_t" type="hidden" value="1" />
 
  
  <a onclick="openPicker(\'color5\',\'picker5\',\'backcolor\'); return false;" href="#">
    <img src="js/images/selectcolor.png" alt= "" />
  </a>


  <div id="picker5" style="background-color:#FFF;" onclick="openPicker(\'color5\',\'picker5\',\'background_menu_color\'); return false;"></div>

  <br />';
  
  if ($_GET["selected_div"]!=0)
  
  //$content.= '<input type="checkbox" name="transparent" id="transparent" onclick="checkTransparent();" /> Transparentný';
  
  $content.='<br />';
  
  $content.=' 

   </div>


  <div id="backimagemenu" style="';
  
  if (!(isset($cmd))) $cmd = '';
  
  
  if ($cmd != 'imageback') 
  
    $content.='visbility:hidden; display:none; ">';

  
  $userimages = getdir($_GET['userimages_dir']);
  
  
  $content.=' 
   <div style="width:740px;  float:left;"> 
  <input id="selected_t" type="hidden" value="" />';

 
 $content.='
 </div>
 
</div>';
  
  

$content.='</div>';





$content.='
<div id="temp_back_content" style="visibility:hidden; display:none;">
</div></div>';



$content.='
 <div id="dialog-backposition" title="Pozícia obrázku v pozadí" style="visibility:hidden; text-align:left; position:absolute; left:200px; top:50px; background-color:#fff;">
	<form action="">
		<fieldset>
		   Vyber pozíciu obrázku:	
		   <input id="layout_back" type="hidden" value="" />
			<table cellpadding=10>
			 <tr>
			  <td>
			  <div id="lay1back"><img id="layout1" style="cursor:pointer;" onclick="selectLayoutBack(1);" src="'.$js_dir.'/images/backlayout1.png" alt="" /></div>
			  </td>
		    	
			  <td>  
			<div id="lay2back"><img id="layout2" style="cursor:pointer;" onclick="selectLayoutBack(2);" src="'.$js_dir.'/images/backlayout2.png" alt="" /></div>
			  </td>
			</tr>  
			
			<tr>
			 <td>
			<div id="lay3back"><img id="layout3" style="cursor:pointer;" onclick="selectLayoutBack(3);" src="'.$js_dir.'/images/backlayout3.png" alt="" /></div>
			</td>
		   
		    <td>
		   	<div id="lay4back"><img id="layout4" style="cursor:pointer;" onclick="selectLayoutBack(4);" src="'.$js_dir.'/images/backlayout4.png" alt="" /></div>
		   	 </td>
		   	</tr>
			    
		    <tr>
			<td>	
			<div id="lay5back"><img id="layout5" style="cursor:pointer;" onclick="selectLayoutBack(5);" src="'.$js_dir.'/images/backlayout5.png" alt="" /></div>
			</td>
	       
		    <td>	
			<div id="lay6back"><img id="layout5" style="cursor:pointer;" onclick="selectLayoutBack(6);" src="'.$js_dir.'/images/backlayout6.png" alt="" /></div>
			</td>
			
			
		    </tr>	
			</table>
			
			
			
		</fieldset>
	</form>
</div>';






echo $content;


?>