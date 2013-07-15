<?php




 include('settings.php');
 
 


 
 function get_dir($dir) {
   
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





  //css tu pre firefox
 
  $content ='
  
   <link rel="stylesheet" href="css/default.css" type="text/css" media="screen" />
   
   
  <!--[if IE]>
     <link rel="stylesheet" href="css/default_ie.css" type="text/css" media="screen" />
  <![endif]-->


   
   

  <!--[if lte IE 6]>

	<link rel="stylesheet" href="css/default_ie6.css" type="text/css" media="screen" />

  <![endif]-->
  
    
   <link rel="stylesheet" href="css/header.css" type="text/css" media="screen" />
   
  

 
  <script type="text/javascript" src="js/functions.js"></script>

  <script type="text/javascript" src="js/window.js"></script>

  <script type="text/javascript" src="js/swfobject_source.js"></script>
  
  
  
  
  <script type="text/javascript" src="js/jqDnR.js"></script> 

  <script type="text/javascript" src="js/jquery.dragToSelect.js"></script>
  
  <script type="text/javascript" src="js/ajaxupload.js"></script> ';
  


  
  
 
 $content.='
 
  <link rel="stylesheet" href="js/jquery.dragToSelect.css" type="text/css" />
 
  <link rel="stylesheet" type="text/css" href="js/css/jquery-ui/smoothness/jquery-ui.css" />

  <link rel="stylesheet" type="text/css" href="js/css/jquery.alerts.css" />

  <script type="text/javascript" language="javascript" src="js/picker.js"></script>
 
  <link rel="stylesheet" href="js/picker.css" type="text/css" />
  ';
  
  
 $content.='
  <script type="text/javascript" language="javascript" src="js/audio-player.js"></script>

  <script type="text/javascript" src="js/editor_js_new.js"></script>

  <script type="text/javascript" src="js/selectionutil.js"></script>
';

 
 
 $content.='
  <script type="text/javascript" src="js/flowplayer-3.1.4.min.js"></script>';

 $content.='<script type="text/javascript" src="js/editor_functions.js"></script>'; 
  
 $content.=' <script type="text/javascript" src="js/json2.js"></script> '; 
 


  
  
 $content.='
     
   <input id="resource_image_input" name="resource_image_input" type="hidden" val="" />
   <input id="resource_audio_input" name="resource_image_input" type="hidden" val="" />
   <input id="resource_video_input" name="resource_image_input" type="hidden" val="" />
   <input id="resource_flash_input" name="resource_image_input" type="hidden" val="" />

';
  
  

	
 
 $content.= '
 

   <div  id="nieco"></div>



 <div id="authoringToolAll">';
 

 $content.='
 
 <div><img src="'.$js_dir.'/images/editor_border_top.png" alt=""></div>';

 
 $content.='
  <div id="main_authoring_tool">';
  
  

 
  

   
  $content.='
  
  <div id="content_authoring_part">



    <div id="authoring-content">
    
      <div id="tmp_img" style="visibility:hidden; display:none;">
  
      </div>

  	<div class="authoring-panes">
	
		<div class="authoring-pane"> 
	    
	    <form>';
	  
	
				
  $content.='<div id="authoring-toolbar">
		
           <!-- EDITOR BUTTONS !--> 
  
           <div id="example2"></div>';
           
       
   $content.='<div id="authoring_buttons3" style="visibility:hidden; display:none;"><img style="cursor:pointer;" onclick="deleteDiv(); return false;" border="0" src="'.$js_dir.'/images/clear.png"/><img style="cursor:pointer;" onclick="deleteDiv(); return false;" border="0" src="'.$js_dir.'/images/del.png"/><img border="0" src="'.$js_dir.'/images/text_noactive.png" title="insert text"/><img src="'.$js_dir.'/images/image_noactive.png" /><img onclick="showBackgroundMenu(); return false;" src="'.$js_dir.'/images/image_back.png" /><img src="'.$js_dir.'/images/shape_noactive.png" /><img src="'.$js_dir.'/images/video_noactive.png" /></div>';
		   



  $content.='<div id="authoring_buttons3_clickable" style="visibility:visible;"><a style="float:left; cursor:pointer;" class="authoring_del_buttons" onclick="deleteAll(); return false;"><img src="'.$js_dir.'/images/clear.png" title="'.$lang["clear page"].'"/></a><a title="'.$lang["clear element"].'" style="float:left;" class="authoring_del_buttons" onclick="deleteDiv(); return false;"><img src="'.$js_dir.'/images/del.png"/></a><a class="" href="#" id="authoring_button4" onclick="addDiv(); return false;"><img border="0" src="'.$js_dir.'/images/text.png" title="'.$lang["insert text"].'"/></a><a href="#"><div id="authoring_button2_image"></div><a title="'.$lang["background"].'" onclick="showBackgroundMenu(); return false;" class="" href="#" id="authoring_button5"><div id="authoring_button5_image"></div></a><a class="" title="'.$lang["shapes"].'" href="#" id="authoring_button6" onclick="showShapeMenu(); return false;"><div id="authoring_button6_image"></div></a><a class="" href="#" id="authoring_button7" title="'.$lang["multimedia"].'" onclick="showVideoMenu(); return false;"><div id="authoring_button7_image"></div></a></div>';    
   //povodne na zobrazenie image galerie : showImageGalleryMenu	       

  $content.='<div id="authoring_buttons" style="visibility:visible;"><img src="'.$js_dir.'/images/bold_noactive.png" alt="" /><img src="'.$js_dir.'/images/italic_noactive.png" alt="" /><img src="'.$js_dir.'/images/underline_noactive.png" alt="" /><img src="'.$js_dir.'/images/link_noactive.png" alt="" /><img src="'.$js_dir.'/images/left_noactive.png" alt="" /><img src="'.$js_dir.'/images/center_noactive.png" alt="" /><img src="'.$js_dir.'/images/right_noactive.png" alt="" /><img src="'.$js_dir.'/images/ordlist_noactive.png" alt="" /><img src="'.$js_dir.'/images/bullist_noactive.png" alt="" /><img src="'.$js_dir.'/images/rule_noactive.png" alt="" /><img src="'.$js_dir.'/images/undo_noactive.png" alt="" /><img src="'.$js_dir.'/images/strike_noactive.png" alt="" /><img src="'.$js_dir.'/images/subscript_noactive.png" alt="" /><img src="'.$js_dir.'/images/superscript_noactive.png" alt="" /><img src="'.$js_dir.'/images/char_noactive.png" alt="" /><img src="'.$js_dir.'/images/forecol_noactive.png" alt="" /><img src="'.$js_dir.'/images/bgcol_noactive.png" alt="" /></div>';



$content.='<div id="authoring_buttons2" style="visibility:visible;"><select style="width:110px" id="font_select" disabled=""><option>Times New Roman</option></select><select style="width:53px" id="size_select" disabled=""><option>10pt</option></select><select style="width:90px;" id="select_heading" disabled=""><option>Normal</option></select></div>';




$content.='
<div id="authoring_buttons_clickable" style="visibility:hidden; display:none;"><img style="cursor:pointer;" alt="'.$lang["bold"].'" title="'.$lang["bold"].'" class="authoring_editor_button" src="'.$js_dir.'/images/bold.png" onMouseOver="selOn(this)" onMouseOut="selOff(this)" onMouseDown="selDown(this)" onMouseUp="selUp(this)" onClick="doBold()" /><img style="cursor:pointer;" title="'.$lang["italic"].'" class="authoring_editor_button" src="'.$js_dir.'/images/italic.png" onMouseOver="selOn(this)" onMouseOut="selOff(this)" onMouseDown="selDown(this)" onMouseUp="selUp(this)" onClick="doItalic()" /><img style="cursor:pointer;" title=""  title="'.$lang["underline"].'"  class="authoring_editor_button" src="'.$js_dir.'/images/underline.png" onMouseOver="selOn(this)" onMouseOut="selOff(this)" onMouseDown="selDown(this)" onMouseUp="selUp(this)" onClick="doUnderline()" /><img style="cursor:pointer;"  title="'.$lang["link"].'"  class="authoring_editor_button" src="'.$js_dir.'/images/link.png" onMouseOver="selOn(this)" onMouseOut="selOff(this)" onMouseDown="selDown(this)" onMouseUp="selUp(this)" onClick="createLink(event)" /><img style="cursor:pointer;"  title="'.$lang["align text left"].'"  class="authoring_editor_button" src="'.$js_dir.'/images/left.png" onMouseOver="selOn(this)" onMouseOut="selOff(this)" onMouseDown="selDown(this)" onMouseUp="selUp(this)" onClick="doLeft()" /><img style="cursor:pointer;"  title="'.$lang["align text center"].'"  class="authoring_editor_button" src="'.$js_dir.'/images/center.png" onMouseOver="selOn(this)" onMouseOut="selOff(this)" onMouseDown="selDown(this)" onMouseUp="selUp(this)" onClick="doCenter()" /><img style="cursor:pointer;"  title="'.$lang["align text right"].'"  class="authoring_editor_button" src="'.$js_dir.'/images/right.png" onMouseOver="selOn(this)" onMouseOut="selOff(this)" onMouseDown="selDown(this)" onMouseUp="selUp(this)" onClick="doRight()" /><img style="cursor:pointer;"  title="'.$lang["numbered list"].'"  class="authoring_editor_button" src="'.$js_dir.'/images/ordlist.png" onMouseOver="selOn(this)" onMouseOut="selOff(this)" onMouseDown="selDown(this)" onMouseUp="selUp(this)" onClick="doOrdList()" /><img style="cursor:pointer;"  title="'.$lang["bulleted list"].'"  class="authoring_editor_button" src="'.$js_dir.'/images/bullist.png" onMouseOver="selOn(this)" onMouseOut="selOff(this)" onMouseDown="selDown(this)" onMouseUp="selUp(this)" onClick="doBulList()" /><img style="cursor:pointer;" alt="Horizontal Rule" class="authoring_editor_button" src="'.$js_dir.'/images/rule.png" onMouseOver="selOn(this)" onMouseOut="selOff(this)" onMouseDown="selDown(this)" onMouseUp="selUp(this)" onClick="doRule()"  title="'.$lang["line"].'" /><img style="cursor:pointer;" class="authoring_editor_button" src="'.$js_dir.'/images/undo.png" onClick="doUndo();"  title="'.$lang["undo"].'" ><img style="cursor:pointer;" class="authoring_editor_button" src="'.$js_dir.'/images/strike.png" onClick="doStrike();"  title="'.$lang["strikethrough"].'" ><img style="cursor:pointer;" class="authoring_editor_button" src="'.$js_dir.'/images/subscript.png" onClick="doSubscript();"  title="'.$lang["subscript"].'" ><img class="authoring_editor_button" src="'.$js_dir.'/images/superscript.png" onClick="doSuperscript();"  title="'.$lang["superscript"].'" ><img style="cursor:pointer;" class="authoring_editor_button" src="'.$js_dir.'/images/char.png" onClick="showDialogCharacters();"  title="'.$lang["special char"].'" ><input class="color_text_input" value="" type="submit" id="picker1" onclick="openPicker(\'color1\',\'picker1\',\'textcolor\'); return false;"  title="'.$lang["text color"].'"  /><input class="color_back_input" value="" type="submit" id="picker2" onclick="openPicker(\'color2\',\'picker2\',\'backcolor\'); return false;"  title="'.$lang["text background"].'"  /><input name="color2" type="hidden" id="color2" size="7" maxlength="7" /><input name="color1" type="hidden" id="color1" size="7" maxlength="7" /></div>';



$content.='
<div id="authoring_buttons2_clickable" style="visibility:hidden; display:none;">';


$content.='
  <div id="fontsize_form_div"><select style="width:110px; height:22px; name="font_select" id="font_select" onChange="changeFont();"><option class="times_new_roman">Times New Roman</option><option class="serif">Serif</option><option class="courier_new">Courier New</option><option class="georgia">Georgia</option><option class="trebuchet">Trebuchet</option><option class="verdana">Verdana</option><option class="comic_sans_ms">Comic Sans Ms</option></select>';



$content.='<select name="size_select" id="size_select" style="width:53px;" onChange="changeFontSize();"><option>10pt</option><option>12pt</option><option>14pt</option><option>16pt</option><option>18pt</option><option>20pt</option><option>22pt</option><option>24pt</option><option>26pt</option><option>28pt</option><option>32pt</option><option>36pt</option><option>37pt</option><option>40pt</option><option>48pt</option><option>64pt</option><option>96pt</option><option>'.$lang["custom"].'</option></select>';


$content.='<select name="heading_select" id="heading_select" onChange="changeHeading();" style="width:90px; height:22px;"><option>Normal</option><option style="font-size:24px;" class="heading1">'.$lang["heading1"].'</option><option style="font-size:20px;" class="heading2">'.$lang["heading2"].'</option><option style="font-size:18px;" class="heading3">'.$lang["heading3"].'</option><option style="font-size:16px;" class="heading4">'.$lang["heading4"].'</option><option style="font-size:14px;" class="heading5">'.$lang["heading5"].'</option><option class="heading6" style="font-size:12px;">'.$lang["heading6"].'</option>
</select>';

$content.='</div>';

$content.='</div>';




$content.='
     
  

   <div id="align_div" style="float:left; margin-top:5px; border:none; width:300px; text-align: left; padding-left:5px; color: #d9d9d9;">
 

<a href="#" onclick="showTemplatesMenu(); return false;">TEMPLATES</a>  
 &nbsp;&nbsp;&nbsp;&nbsp;

'.$lang["align"].':
  
  <a href="#" onclick="alignLeft(); return false;">'.$lang["left"].'</a>
  <a href="#" onclick="alignRight(); return false;">'.$lang["right"].'</a>
  <a href="#" onclick="alignTop(); return false;">'.$lang["top"].'</a>
  <a href="#" onclick="alignDown(); return false;">'.$lang["down"].'</a>
  
  <a href="#" onclick="save_content(); return false;">SAVE</a>
  
  <a href="#" onclick="load_content(); return false;">LOAD</a>
  
  
  
  </div>';

  


$content.='
</div> <!-- end authoring-toolbar !-->';




 $content.='<div id="authoring-edit-area">';

 

 $content.='	
	
	<!--  EDITOR !-->
	
    <div id="container" style="overflow: hidden;">
    <ul id="main_ul" style="overflow: hidden;" onclick="main_ul_onclick()">

      <input id="course_backcolor" type="hidden" value="" />
      <input id="course_backimage" type="hidden" value="" />
  
  

       
  
      <div id="authoring_visible_part" onContextMenu="showDivContextMenu(event);">';
      
      
      
      $content.=' 
        
        <div onmousemove="" id="authoring_additional_menu" style="visibility:hidden; display:none;">
            <input type="hidden" name="selected_div" id="selected_div" value="" />
            
			
			<div id="authoring_additional_menu_header_left" style="height:42px;">
            </div>
            
			
	    <div id="authoring_additional_menu_header_right" style="height:42px;">
             <img onclick="close_additional_menu(); return false;" style="cursor:pointer;" src="'.$js_dir.'/images/background_menu_close.png" alt="" />
            </div> 
            
            <div id="authoring_additional_menu_subheader_left"></div>
            <div id="authoring_additional_menu_subheader_right"></div>
            
            <div id="authoring_additional_menu_content" >
            </div>
       
       </div>';
       
       
    $content.='
  
    
       <div id="background_menu" style="visibility:hidden; display:none;">
       </div>	
	      
       <div id="context_menu" style="visibility:hidden;">
       </div>';
       
       
   
   
   
    $content.='    
       
    
       <div id="special_characters" style="visibility:hidden; display:none; align:left; position:absolute; z-index:100000;">
          <br />
		  	
		  <table style="margin-top:-15px; ">
		  <tr>
		  
		   <td width="247">
		     <span style="color:#575b5d; font-size:18px; font-weight:bold; padding:5px;">'.$lang['select char'].':</span>
		   </td>
		   <td width="25">
		    <a onclick="closeSpecialCharacters();" href="#"><img border="0" src="js/images/background_menu_close.png" alt="" /></a>
		   
		   </td>
		  </tr>
		  </table> 
		   
		  <input id="special_char" type="hidden" value="" />
		  <br /><br />	
		  
		  <table id="special_chars">	
		  <tr>
		   <td><a href="#" onclick="insertChar(\'&hArr;\'); return false;">&hArr;</a></td>
		   <td><a href="#" onclick="insertChar(\'&OElig;\'); return false;">&OElig;</a></td>
		   <td><a href="#" onclick="insertChar(\'!\'); return false;">!</a></td>
		   <td><a href="#" onclick="insertChar(\'&quot;\'); return false;">&quot;</a></td>
		   <td><a href="#" onclick="insertChar(\'#\'); return false;">#</a></td>
		   <td><a href="#" onclick="insertChar(\'$\'); return false;">$</a></td>
		   <td><a href="#" onclick="insertChar(\'%\'); return false;">%</a></td>
		   <td><a href="#" onclick="insertChar(\'&amp;\'); return false;">&amp;</a></td>
		   <td><a href="#" onclick="insertChar(\'(\'); return false;">(</a></td>
		   <td><a href="#" onclick="insertChar(\')\'); return false;">)</a></td>
		   <td><a href="#" onclick="insertChar(\'*\'); return false;">*</a></td>

		  </tr>
		  
		  
		    <tr> 
		   <td><a href="#" onclick="insertChar(\'+\'); return false;">+</a></td>
		   <td><a href="#" onclick="insertChar(\'-\'); return false;">-</a></td>
		   <td><a href="#" onclick="insertChar(\'.\'); return false;">.</a></td>
		   <td><a href="#" onclick="insertChar(\'/\'); return false;">/</a></td>
		   <td><a href="#" onclick="insertChar(\':\'); return false;">:</a></td>
		   <td><a href="#" onclick="insertChar(\';\'); return false;">;</a></td>
		   <td><a href="#" onclick="insertChar(\'&lt;\'); return false;">&lt;</a></td>
		   <td><a href="#" onclick="insertChar(\'=\'); return false;">=</a></td>
		   <td><a href="#" onclick="insertChar(\'&gt;\'); return false;">&gt;</a></td>
		   <td><a href="#" onclick="insertChar(\'?\'); return false;">?</a></td>
		   <td><a href="#" onclick="insertChar(\'@\'); return false;">@</a></td>
		   <td><a href="#" onclick="insertChar(\'[\'); return false;">[</a></td>
		  </tr> 
		  
		  <tr> 
		   <td><a href="#" onclick="insertChar(\']\'); return false;">]</a></td>
		   <td><a href="#" onclick="insertChar(\'^\'); return false;">^</a></td>
		   <td><a href="#" onclick="insertChar(\'_\'); return false;">_</a></td>
		   <td><a href="#" onclick="insertChar(\'`\'); return false;">`</a></td>
		   <td><a href="#" onclick="insertChar(\'{\'); return false;">{</a></td>
		   <td><a href="#" onclick="insertChar(\'|\'); return false;">|</a></td>
		   <td><a href="#" onclick="insertChar(\'}\'); return false;">}</a></td>
		   <td><a href="#" onclick="insertChar(\'~\'); return false;">~</a></td>
		   <td><a href="#" onclick="insertChar(\'&euro;\'); return false;">&euro;</a></td>
		   <td><a href="#" onclick="insertChar(\'&lsquo;\'); return false;">&lsquo;</a></td>
		   <td><a href="#" onclick="insertChar(\'&rsquo;\'); return false;">&rsquo;</a></td>
		   <td><a href="#" onclick="insertChar(\'&ldquo;\'); return false;">&ldquo;</a></td>
		  </tr> 
		   
		  <tr> 
		   <td><a href="#" onclick="insertChar(\'&rdquo;\'); return false;">&rdquo;</a></td>
		   <td><a href="#" onclick="insertChar(\'&ndash;\'); return false;">&ndash;</a></td>
		   <td><a href="#" onclick="insertChar(\'&mdash;\'); return false;">&mdash;</a></td>
		   <td><a href="#" onclick="insertChar(\'&iexcl;\'); return false;">&iexcl;</a></td>
		   <td><a href="#" onclick="insertChar(\'&cent;\'); return false;">&cent;</a></td>
		   <td><a href="#" onclick="insertChar(\'&pound;\'); return false;">&pound;</a></td>
		   <td><a href="#" onclick="insertChar(\'&curren;\'); return false;">&curren;</a></td>
		   <td><a href="#" onclick="insertChar(\'&yen;\'); return false;">&yen;</a></td>
		   <td><a href="#" onclick="insertChar(\'&brvbar;\'); return false;">&brvbar;</a></td>
		   <td><a href="#" onclick="insertChar(\'&sect;\'); return false;">&sect;</a></td>
		   <td><a href="#" onclick="insertChar(\'&uml;\'); return false;">&uml;</a></td>
		   <td><a href="#" onclick="insertChar(\'&copy;\'); return false;">&copy;</a></td>
		  </tr> 
		   
		  <tr> 
		   <td><a href="#" onclick="insertChar(\'&ordf;\'); return false;">&ordf;</a></td>
		   <td><a href="#" onclick="insertChar(\'&laquo;\'); return false;">&laquo;</a></td>
		   <td><a href="#" onclick="insertChar(\'&laquo;\'); return false;">&laquo;</a></td>
		   <td><a href="#" onclick="insertChar(\'&not;\'); return false;">&not;</a></td>
		   <td><a href="#" onclick="insertChar(\'&reg;\'); return false;">&reg;</a></td>
		   <td><a href="#" onclick="insertChar(\'&macr;\'); return false;">&macr;</a></td>
		   <td><a href="#" onclick="insertChar(\'&deg;\'); return false;">&deg;</a></td>
		   <td><a href="#" onclick="insertChar(\'&plusmn;\'); return false;">&plusmn;</a></td>
		   <td><a href="#" onclick="insertChar(\'&sup2;\'); return false;">&sup2;</a></td>
		   <td><a href="#" onclick="insertChar(\'&sup3;\'); return false;">&sup3;</a></td>
		   <td><a href="#" onclick="insertChar(\'&acute;\'); return false;">&acute;</a></td>
		   <td><a href="#" onclick="insertChar(\'&micro;\'); return false;">&micro;</a></td>
		  </tr> 
		   
		  <tr> 
		   <td><a href="#" onclick="insertChar(\'&para;\'); return false;">&para;</a></td>
		   <td><a href="#" onclick="insertChar(\'&middot;\'); return false;">&middot;</a></td>
		   <td><a href="#" onclick="insertChar(\'&cedil;\'); return false;">&cedil;</a></td>
		   <td><a href="#" onclick="insertChar(\'&sup1;\'); return false;">&sup1;</a></td>
		   <td><a href="#" onclick="insertChar(\'&ordm;\'); return false;">&ordm;</a></td>
		   <td><a href="#" onclick="insertChar(\'&raquo;\'); return false;">&raquo;</a></td>
		   <td><a href="#" onclick="insertChar(\'&frac14;\'); return false;">&frac14;</a></td>
		   <td><a href="#" onclick="insertChar(\'&frac12;\'); return false;">&frac12;</a></td>
		   <td><a href="#" onclick="insertChar(\'&frac34;\'); return false;">&frac34;</a></td>
		   <td><a href="#" onclick="insertChar(\'&iquest;\'); return false;">&iquest;</a></td>
		   <td><a href="#" onclick="insertChar(\'&Agrave;\'); return false;">&Agrave;</a></td>
		   <td><a href="#" onclick="insertChar(\'&Aacute;\'); return false;">&Aacute;</a></td>
		  </tr> 
		   
		  <tr> 
		   <td><a href="#" onclick="insertChar(\'&Acirc;\'); return false;">&Acirc;</a></td>
		   <td><a href="#" onclick="insertChar(\'&Atilde;\'); return false;">&Atilde;</a></td>
		   <td><a href="#" onclick="insertChar(\'&Auml;\'); return false;">&Auml;</a></td>
		   <td><a href="#" onclick="insertChar(\'&Aring;\'); return false;">&Aring;</a></td>
		   <td><a href="#" onclick="insertChar(\'&AElig;\'); return false;">&AElig;</a></td>
		   <td><a href="#" onclick="insertChar(\'&Ccedil;\'); return false;">&Ccedil;</a></td>
		   <td><a href="#" onclick="insertChar(\'&Egrave;\'); return false;">&Egrave;</a></td>
		   <td><a href="#" onclick="insertChar(\'&Eacute;\'); return false;">&Eacute;</a></td>
		   <td><a href="#" onclick="insertChar(\'&Ecirc;\'); return false;">&Ecirc;</a></td>
		   <td><a href="#" onclick="insertChar(\'&Igrave;\'); return false;">&Igrave;</a></td>
		   <td><a href="#" onclick="insertChar(\'&Iacute;\'); return false;">&Iacute;</a></td>
		   <td><a href="#" onclick="insertChar(\'&Icirc;\'); return false;">&Icirc;</a></td>
		  </tr> 
		   
		  <tr> 
		   <td><a href="#" onclick="insertChar(\'&Iuml;\'); return false;">&Iuml;</a></td>
		   <td><a href="#" onclick="insertChar(\'&ETH;\'); return false;">&ETH;</a></td>
		   <td><a href="#" onclick="insertChar(\'&Ntilde;\'); return false;">&Ntilde;</a></td>
		   <td><a href="#" onclick="insertChar(\'&Ograve;\'); return false;">&Ograve;</a></td>
		   <td><a href="#" onclick="insertChar(\'&Oacute;\'); return false;">&Oacute;</a></td>
		   <td><a href="#" onclick="insertChar(\'&Ocirc;\'); return false;">&Ocirc;</a></td>
		   <td><a href="#" onclick="insertChar(\'&Otilde;\'); return false;">&Otilde;</a></td>
		   <td><a href="#" onclick="insertChar(\'&Ouml;\'); return false;">&Ouml;</a></td>
		   <td><a href="#" onclick="insertChar(\'&times;\'); return false;">&times;</a></td>
		   <td><a href="#" onclick="insertChar(\'&Oslash;\'); return false;">&Oslash;</a></td>
		   <td><a href="#" onclick="insertChar(\'&Ugrave;\'); return false;">&Ugrave;</a></td>
		   <td><a href="#" onclick="insertChar(\'&Uacute;\'); return false;">&Uacute;</a></td>
		  </tr> 
		  
		  <tr> 
		   <td><a href="#" onclick="insertChar(\'&Ucirc;\'); return false;">&Ucirc;</a></td>
		   <td><a href="#" onclick="insertChar(\'&Uuml;\'); return false;">&Uuml;</a></td>
		   <td><a href="#" onclick="insertChar(\'&Yacute;\'); return false;">&Yacute;</a></td>
		   <td><a href="#" onclick="insertChar(\'&THORN;\'); return false;">&THORN;</a></td>
		   <td><a href="#" onclick="insertChar(\'&szlig;\'); return false;">&szlig;</a></td>
		   <td><a href="#" onclick="insertChar(\'&agrave;\'); return false;">&agrave;</a></td>
		   <td><a href="#" onclick="insertChar(\'&acirc;\'); return false;">&acirc;</a></td>
		   <td><a href="#" onclick="insertChar(\'&aacute;\'); return false;">&aacute;</a></td>
		   <td><a href="#" onclick="insertChar(\'&atilde;\'); return false;">&atilde;</a></td>
		   <td><a href="#" onclick="insertChar(\'&auml;\'); return false;">&auml;</a></td>
		   <td><a href="#" onclick="insertChar(\'&aring;\'); return false;">&aring;</a></td>
		   <td><a href="#" onclick="insertChar(\'&aelig;\'); return false;">&aelig;</a></td>
		  </tr>
		  
		  <tr> 
		   <td><a href="#" onclick="insertChar(\'&ccedil;\'); return false;">&ccedil;</a></td>
		   <td><a href="#" onclick="insertChar(\'&egrave;\'); return false;">&egrave;</a></td>
		   <td><a href="#" onclick="insertChar(\'&eacute;\'); return false;">&eacute;</a></td>
		   <td><a href="#" onclick="insertChar(\'&ecirc;\'); return false;">&ecirc;</a></td>
		   <td><a href="#" onclick="insertChar(\'&igrave;\'); return false;">&igrave;</a></td>
		   <td><a href="#" onclick="insertChar(\'&iacute;\'); return false;">&iacute;</a></td>
		   <td><a href="#" onclick="insertChar(\'&icirc;\'); return false;">&icirc;</a></td>
		   <td><a href="#" onclick="insertChar(\'&iuml;\'); return false;">&iuml;</a></td>
		   <td><a href="#" onclick="insertChar(\'&eth;\'); return false;">&eth;</a></td>
		   <td><a href="#" onclick="insertChar(\'&ntilde;\'); return false;">&ntilde;</a></td>
		   <td><a href="#" onclick="insertChar(\'&ograve;\'); return false;">&ograve;</a></td>
		   <td><a href="#" onclick="insertChar(\'&oacute;\'); return false;">&oacute;</a></td>
		  </tr> 
		   
		  <tr>
		   <td><a href="#" onclick="insertChar(\'&ocirc;\'); return false;">&ocirc;</a></td>
		   <td><a href="#" onclick="insertChar(\'&otilde;\'); return false;">&otilde;</a></td>
		   <td><a href="#" onclick="insertChar(\'&ouml;\'); return false;">&ouml;</a></td>
		   <td><a href="#" onclick="insertChar(\'&divide;\'); return false;">&divide;</a></td>
		   <td><a href="#" onclick="insertChar(\'&oslash;\'); return false;">&oslash;</a></td>
		   <td><a href="#" onclick="insertChar(\'&ugrave;\'); return false;">&ugrave;</a></td>
		   <td><a href="#" onclick="insertChar(\'&uacute;\'); return false;">&uacute;</a></td>
		   <td><a href="#" onclick="insertChar(\'&ucirc;\'); return false;">&ucirc;</a></td>
		   <td><a href="#" onclick="insertChar(\'&uuml;\'); return false;">&uuml;</a></td>
		   <td><a href="#" onclick="insertChar(\'&yacute;\'); return false;">&yacute;</a></td>
		   <td><a href="#" onclick="insertChar(\'&thorn;\'); return false;">&thorn;</a></td>
		   <td><a href="#" onclick="insertChar(\'&yuml;\'); return false;">&yuml;</a></td>
		  </tr>
		  
		  <tr>  
		   <td><a href="#" onclick="insertChar(\'&OElig;\'); return false;">&OElig;</a></td>
		   <td><a href="#" onclick="insertChar(\'&oelig;\'); return false;">&oelig;</a></td>
		   <td><a href="#" onclick="insertChar(\'Ŵ\'); return false;">Ŵ</a></td>
		   <td><a href="#" onclick="insertChar(\'Ŷ\'); return false;">Ŷ</a></td>
		   <td><a href="#" onclick="insertChar(\'ŵ\'); return false;">ŵ</a></td>
		   <td><a href="#" onclick="insertChar(\'ŷ\'); return false;">ŷ</a></td>
		   <td><a href="#" onclick="insertChar(\'&sbquo;\'); return false;">&sbquo;</a></td>
		   <td><a href="#" onclick="insertChar(\'‛\'); return false;">‛</a></td>
		   <td><a href="#" onclick="insertChar(\'&bdquo;\'); return false;">&bdquo;</a></td>
		   <td><a href="#" onclick="insertChar(\'&hellip;\'); return false;">&hellip;</a></td>
		   <td><a href="#" onclick="insertChar(\'&trade;\'); return false;">&trade;</a></td>
		   <td><a href="#" onclick="insertChar(\'►\'); return false;">►</a></td>
		  </tr> 
		   
		  <tr> 
		   <td><a href="#" onclick="insertChar(\'&bull;\'); return false;">&bull;</a></td>
		   <td><a href="#" onclick="insertChar(\'&rarr;\'); return false;">&rarr;</a></td>
		   <td><a href="#" onclick="insertChar(\'&rArr;\'); return false;">&rArr;</a></td>
		   <td><a href="#" onclick="insertChar(\'&hArr;\'); return false;">&hArr;</a></td>
		   <td><a href="#" onclick="insertChar(\'&diams;\'); return false;">&diams;</a></td>
		   <td><a href="#" onclick="insertChar(\'&asymp;\'); return false;">&asymp;</a></td>
		  
		  </tr> 
		  
		  
		  
		  
		  </table>
		  
		  
		  
   </div>';










	   
	   
	   
    $content.='
         <div id="shape_menu" style="visibility:hidden;">';
       
       
       $shapes = get_dir('../'.$shapes_dir);
       
       foreach ($shapes as $shape) {
       	
       	$content.='<img onclick="insertShape(\''.$shapes_dir.'/'.$shape.'\'); return false;" style="cursor:pointer;" src="'.$shapes_dir.'/'.$shape.'" width="23" height="22" alt="" />';
       	
       }
       
       
    $content.='
	
	  </div>';
	  

	   
    
   $content.='</div>       

	  <iframe frameborder="0" src="clear_iframe.htm" name="iView" id="iView" scrolling="no" style="background-color:transparent; visibility: hidden; position:relative; z-index:10000; width:1px; height:1px;"></iframe>	 
 
    </ul>

     
   
   <div id="lection_content" style="overflow: hidden;">
   </div>
 

   
 </div> <!-- end container !-->';
 

 
 $content.=' 
  
 <h2 id="drag"></h2>  
 
 <div id="temp_image" style="visibility:hidden;" ></div>

 <!-- END OF EDITOR !-->
	
 </div>';



$content.='</form>';


$content.='</div>

</div>
</div>

</div>';


$content.='</div>';



$content.='<div><img src="'.$js_dir.'/images/editor_border_bottom.png" alt=""></div>';


$content.='</div>';




$tstmp = time();

$content.='
    


  <input type="hidden"  name="tstmp" id="tstmp" value="'.$tstmp.'" />
      
  <input type="hidden"  name="inserted_images" id="inserted_images" value="" />
  


  <script type="text/javascript">
	
     var time_now = new Date().getTime(); 
	        
     $("#tstmp").val(time_now);
    

     new AjaxUpload(\'#authoring_button2_image\',{action: \'scripts/uploadimage.php\',name: \'userfile\',data : {\'key1\' : "This data wont",\'key2\' : "be send because",\'key3\' : "we will verwrite it"},onSubmit : function(file , ext){if (ext && /^(jpg|png|jpeg|gif)/.test(ext)){  var bb = $("#tstmp").val();  this.setData({\'key\': \'This string will be send with the file\',  \'time_now\': bb});  } else {$(\'#example2 .text\').text(\'Error: only images are allowed\');return false;}},onComplete : function(file){   var bb = $("#tstmp").val();  addIm(bb+file);      } });	

     

    function addIm(filename) {  
           
         

           $.post("scripts/getimagesize.php", {  filename: filename}, function(data) {
                   
                  var obj = JSON.parse(data);
 


                  addImageDiv("userimages/"+filename,obj.width,obj.height);

           });
        
    }
     


   
    


  </script>';
             
  
  $content.='<input name="color4" type="hidden" id="color4" size="7" maxlength="7" value="" />';
  
  $content.='<input name="color5" type="hidden" id="color5" size="7" maxlength="7" value="" />';




 
  echo $content;

?>  