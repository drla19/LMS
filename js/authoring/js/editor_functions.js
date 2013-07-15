
  
    var selected = '';
    
    var selected_images = '';
  
    var selected_div;
	  
    var textdivs = new Array(); 
    
    var mode = "edit";
	
	var status;
	
	var current_lang = "";

    var lang_mycourse = "";
    
	var lang_authoring = "";
    
    var temp_text;
    
    //var script_file = 'courses_standalone.php';
    
    var themes_dir = 'themes';
    
    var userimages_dir = 'userimages';
    
    //var lang = 'sk'

	
	var counter = 0;
	
	var imagecounter = 0;
	
	var flashcounter = 0;
	
	var videocounter = 0;
	
	var audiocounter = 0;
	
	var image_counter;
	
	
	
	
	
	

	function trim(str) {
        return str.replace(/^\s+|\s+$/g,"");
    }
    
    
	
    
	
	

///////////////////////////////////////////////////////////

    function load_content() {
    	
    	var temp_content_html;
    	
    	temp_content_html = ' <div style="z-index: 100; left: 200px; top: 200px; width: 210px; height: 210px; opacity: 1;" id="authoring_box1" class="authoring_box"><div style="visibility: hidden;" id="handle1" class="jqHandle-top jqDrag"></div><div style="visibility: hidden;" class="jqHandle-bottom jqDrag"></div><div style="visibility: hidden;" class="jqHandle-left jqDrag-left"></div><div style="visibility: hidden;" class="jqHandle-right jqDrag-right"></div><div style="visibility: hidden;" class="handle-nw"></div><div style="visibility: hidden;" class="handle-ne"></div><div style="visibility: hidden;" class="handle-se"></div><div style="visibility: hidden;" class="handle-sw"></div><div class="box_text" id="text1" style="height: 190px;">zzu zuuzuzj<br></div></div><input type="hidden" name="counter_value" id="counter" value="1"><input type="hidden" name="image_counter_value" id="image_counter" value="0"><input type="hidden" name="container_back_image_value" id="container_back_image_value" value="url(http://localhost/smartlms_standalone/themes/namet2_back.jpg)" /><input type="hidden" name="container_back_color_value" id="container_back_color_value" value="rgb(255, 255, 255)" />';
    	
    	$("#lection_content").html(temp_content_html);
    	
    	
    	//alert($("#lection_content").html());
    	
    	var container_back_color_value = $("#container_back_color_value").val();
    	
    	var container_back_image_value = $("#container_back_image_value").val();
    	
    	var counter_value = $("#counter_value");
    	
    	var image_counter_value = $("#image_counter_value");
    	
        	
    	
    	if (container_back_image_value!='') 
    	
    	  $("#container").css("background-image",container_back_image_value);
    	  
    	
		if (container_back_color_value!='') 
    	
    	  $("#container").css("background-color",container_back_color_value);  
    	
    	
    	
		temp_content_js = '';
		
		temp_content_js = temp_content_js + '<script type=\'text/javascript\'>';
		
		
		for (i=1; i<=counter_value; i++) {
			
			temp_content_js = temp_content_js + '$(\'#authoring_box'+i+'\').jqDrag(\'.jqDrag\'); $(\'#authoring_box'+i+'\').jqDrag(\'.jqDrag-left\'); $(\'#authoring_box'+i+'\').jqDrag(\'.jqDrag-right\'); $(\'#authoring_box'+i+'\').jqResize(\'.handle-nw\',\'nw\');  $(\'#authoring_box'+i+'\').jqResize(\'.handle-ne\',\'ne\');  $(\'#authoring_box'+i+'\').jqResize(\'.handle-se\',\'se\'); $(\'#authoring_box'+i+'\').jqResize(\'.handle-sw\',\'sw\');      $(\'#authoring_box'+i+' .jqHandle-top\').bind(\'click\', function(e){ hideiframe(); });     $(\'#authoring_box'+i+' .jqHandle-bottom\').bind(\'click\', function(e){ hideiframe(); });  $(\'#authoring_box'+i+' .jqHandle-left\').bind(\'click\', function(e){ hideiframe(); });  $(\'#authoring_box'+i+' .jqHandle-right\').bind(\'click\', function(e){ hideiframe(); });$(\'#authoring_box'+i+' .jqHandle-bottom\').bind(\'click\',saveCon);  $(\'#authoring_box'+i+' .jqHandle-top\').bind(\'mousedown\',saveCon);  $(\'#authoring_box'+i+' .jqHandle-left\').bind(\'mousedown\',saveCon);   $(\'#authoring_box'+i+' .jqHandle-right\').bind(\'mousedown\',saveCon);  $(\'#text'+i+'\').bind(\'click\', function(e){    if (mode==\'edit\') saveDivContent(selected_div,1);  if ((mode==\'edit\') && ($(\'#authoring_box'+i+' .handle-nw\').css(\'visibility\') === \'hidden\')) { $(\'#authoring_box'+i+' .handle-nw\').css(\'visibility\',\'\'); $(\'#authoring_box'+i+' .handle-ne\').css(\'visibility\',\'\');  $(\'#authoring_box'+i+' .handle-sw\').css(\'visibility\',\'\');  $(\'#authoring_box'+i+' .handle-se\').css(\'visibility\',\'\'); $(\'#authoring_box'+i+' .jqHandle-top\').css(\'visibility\',\'\');  $(\'#authoring_box1 .jqHandle-bottom\').css(\'visibility\',\'\');   $(\'#authoring_box'+i+' .jqHandle-left\').css(\'visibility\',\'\');  $(\'#authoring_box'+i+' .jqHandle-right\').css(\'visibility\',\'\');    setZindex(\'t'+i+'\');   div_from=\'t\';   }  else  {     }    }); $(\'#authoring_box'+i+'\').bind(\'contextmenu\',function(e)  { if (mode==\'edit\') showDivContextMenu('+i+');  }  );';
			
			
			
		}
		
		
		temp_content_js = temp_content_js + '</script>';
		
		
		$("#lection_content").append(temp_content_js);
		
		
		
		
	
    	
    	
  	    selected_div = 1;	
  	    
		counter = 1;  
		  
           	
  	
    	
    }






    function save_content() {
    	
    	var content_html;
    	
    	content_html = $("#lection_content").html();
    	    	
    	    	
    	container_back_image = $("#container").css("background-image");
		container_back_color = $("#container").css("background-color");    	
    	    	
    	 
		    	    	    	
    	    	
    	 //divcounter, imagecounter, containerbackground   	
    	counter_html = '<input type="hidden" name="counter_value" id="counter" value="'+counter+'"><input type="hidden" name="image_counter_value" id="image_counter" value="'+imagecounter+'"><input type="hidden" name="container_back_image_value" id="container_back_image_value" value=\''+container_back_image+'\' /><input type="hidden" name="container_back_color_value" id="container_back_color_value" value="'+container_back_color+'" />';
                        
    	content_html = content_html + counter_html;
    	
    	alert(content_html);    	
    	
    	
    }



    
    
    function reloaditems(k,l,s) {
    	
    	$.get(script_file, {action: "getlectionitems", id_kurz: k, id_lekcia: l, id_strana: s, mode: mode , lang:lang}, 
		function pp(l) {
		  	$("#lection_items").html(l);
		  	
		  		a = $("#audio").val();
		    	if (a=='') {
		    		  $("#audio_player").css("visibility","hidden");
		              $("#player_r").css("visibility","hidden");
		        }
				
				else {
				      $("#audio_player").css("visibility","");
		              $("#player_r").css("visibility","");
				}   
		}
		  
	 );
    	
    	
    }
    
    
    function selectLayout(id) {  

        var i=0;
                
        for (i=1;i<=5;i++) {
    	   $("#dialog-newlection #lay"+i+"lection").css("border","1px solid #FFF");
    	}
    	$("#dialog-newlection #lay"+id+"lection").css("border","1px solid #46547b"); 
    	
      	
    
    	
    	
    }


   function selectLayoutPage(id) {
  
        for (i=1;i<=5;i++) {
    	   $("#dialog-newpage #lay"+i+"page").css("border","1px solid #FFF");
    	}
    	$("#dialog-newpage #lay"+id+"page").css("border","1px solid #46547b");
		
    }



 function saveEditorKurz() {
	


	sel_quiz = $("#quiz_questions_selected").val();

	
	if (($("#iView").css('visibility'))=="visible") {
		var myIFrame = document.getElementById("iView");
        var iframe_body_html = myIFrame.contentWindow.document.body.innerHTML;
     	
    	$("#iView").css('visibility','hidden');
        $("#iView").css('z-index','-1000');
        $("#text"+selected_div).html(iframe_body_html);
        $("#text"+selected_div).css('visibility','');
	} 
	
	
	for (i=0;i<counter;i++) {
	   $('#authoring_box'+counter+' .jqHandle-top').css('visibility','hidden');
           $('#authoring_box'+counter+' .jqHandle-bottom').css('visibility','hidden');
           $('#authoring_box'+counter+' .jqHandle-left').css('visibility','hidden');
           $('#authoring_box'+counter+' .jqHandle-right').css('visibility','hidden');	 
	   $("#authoring_box"+counter+" .handle-nw").css("visibility","hidden");
	   $("#authoring_box"+counter+" .handle-ne").css("visibility","hidden");
	   $("#authoring_box"+counter+" .handle-se").css("visibility","hidden");
	   $("#authoring_box"+counter+" .handle-sw").css("visibility","hidden");
	}
	
	for (i=0;i<imagecounter;i++) {
	   $('#authoring_imagebox'+imagecounter+' .jqHandle-top').css('visibility','hidden');
           $('#authoring_imagebox'+imagecounter+' .jqHandle-bottom').css('visibility','hidden');
           $('#authoring_imagebox'+imagecounter+' .jqHandle-left').css('visibility','hidden');
           $('#authoring_imagebox'+imagecounter+' .jqHandle-right').css('visibility','hidden');	 
	   $("#authoring_imagebox"+imagecounter+" .handle-nw").css("visibility","hidden");
	   $("#authoring_imagebox"+imagecounter+" .handle-ne").css("visibility","hidden");
	   $("#authoring_imagebox"+imagecounter+" .handle-se").css("visibility","hidden");
	   $("#authoring_imagebox"+imagecounter+" .handle-sw").css("visibility","hidden");
	}
	
	
	for (i=0;i<flashcounter;i++) {
	   $('#authoring_flashbox'+flashcounter+' .jqHandle-top').css('visibility','hidden');
           $('#authoring_flashbox'+flashcounter+' .jqHandle-bottom').css('visibility','hidden');
           $('#authoring_flashbox'+flashcounter+' .jqHandle-left').css('visibility','hidden');
           $('#authoring_flashbox'+flashcounter+' .jqHandle-right').css('visibility','hidden');	 
	}
	
	for (i=0;i<audiocounter;i++) {
	   $('#authoring_audiobox'+audiocounter+' .jqHandle-top').css('visibility','hidden');
           $('#authoring_audiobox'+audiocounter+' .jqHandle-bottom').css('visibility','hidden');
           $('#authoring_audiobox'+audiocounter+' .jqHandle-left').css('visibility','hidden');
           $('#authoring_audiobox'+audiocounter+' .jqHandle-right').css('visibility','hidden');	 
	}
	
	

//	var sValue = $("#container #lection_content").html();
	

	
	var js_content = '';
	
	audio = $("#audio").val();
	backc = $("#backcolor").val();
	backi = $("#backimage").val();
	backp = $("#backpos").val();
	backr = $("#backrepeat").val();
   	
   	


	js_content = '<input id="backcolor" type="hidden" value="'+backc+'"><input id="backimage" type="hidden" value="'+backi+'" ><input id="div_counter" value="'+counter+'" type="hidden"><input id="image_counter" value="'+imagecounter+'" type="hidden"><input id="flash_counter" value="'+flashcounter+'" type="hidden"><input id="video_counter" value="'+videocounter+'" type="hidden"><input id="audio_counter" value="'+audiocounter+'" type="hidden"><input id="backpos" value="'+backp+'" type="hidden"><input id="backrepeat" value="'+backr+'" type="hidden">';
	
	
	
	
	
	
	
	
	
   for (i=1;i<=audiocounter;i++) {
	
	data='<div style="left:'+$("#authoring_audiobox"+i).css("left")+'; top:'+$("#authoring_audiobox"+i).css("top")+'; width:'+$("#authoring_audiobox"+i).css("width")+';   height:'+$("#audiobox"+i).css("height")+';" id="authoring_audiobox'+i+'" class="authoring_box"><div id="handle'+i+'" class="jqHandle-top jqDrag" style="visibility:hidden;"></div><div class="jqHandle-bottom jqDrag" style="visibility:hidden;"></div><div class="jqHandle-left jqDrag-left" style="visibility:hidden;"></div><div class="jqHandle-right jqDrag-right" style="visibility:hidden;"></div><object type="application/x-shockwave-flash" data="../../js/editor/player.swf" id="audioplayer'+i+'" height="24" width="175">  <param name="movie" value="../../js/editor/player.swf"><param name="FlashVars" value="playerID=audioplayer1&soundFile=../../js/editor/uploads/'+$("#audiofilename"+i).val()+'"><param name="quality" value="high"><param name="menu" value="false"><param name="wmode" value="transparent"></object><input type="hidden" id="audiofilename'+i+'" value="'+$("#audiofilename"+i).val()+'" /></div>';	
	
	data2 = data + "<script type='text/javascript'> $('#authoring_audiobox"+i+"').jqDrag('.jqDrag'); $('#authoring_audiobox"+i+"').jqDrag('.jqDrag-left'); $('#authoring_audiobox"+i+"').jqDrag('.jqDrag-right');";
  
    data4 = data2 + "$('#authoring_audiobox"+i+"').bind('mousedown', function(e){  div_from='a';  if ($('#authoring_audiobox"+i+" .jqHandle-left').css('visibility') === 'hidden'){   buttons_noactive(); $('#authoring_audiobox"+i+" .jqHandle-left').css('visibility','');   $('#authoring_audiobox"+i+" .jqHandle-top').css('visibility','');   $('#authoring_audiobox"+i+" .jqHandle-bottom').css('visibility','');  $('#authoring_audiobox"+i+" .jqHandle-right').css('visibility','');  div_type='a"+i+"';   setAudioZindex('a"+i+"'); }  else  {     }   }); <\/script> ";
	
	js_content = js_content+data4; 
  }	
	
    	  



  
  for (i=1;i<=videocounter;i++) {
  	
      data = '<div id="authoring_videobox" style="position:absolute; left:'+$("#authoring_videobox").css("left")+'; top:'+$("#authoring_videobox").css("top")+'; width:'+$("#authoring_videobox").css("width")+'; height:'+$("#authoring_videobox").css("height")+'; z-index:1;" class="authoring_imagebox" ><input id="authoring_videoboxfilename" type="hidden" value="'+$("#authoring_videoboxfilename").val()+'" /><div id="handle" class="jqHandle-top jqDrag" style="visibility:hidden;"></div><div class="jqHandle-bottom jqDrag" style="visibility:hidden;"></div><div class="jqHandle-left jqDrag-left" style="visibility:hidden;"></div><div class="jqHandle-right jqDrag-right" style="visibility:hidden;"></div><a onmousedown="setVideoZindex(); return false;" href="http://smartlms.gingersdownload.sk/js/editor/uploads/'+$("#authoring_videoboxfilename").val()+'" style="display:block;width:'+$("#authoring_videobox a").css("width")+';height:'+$("#authoring_videobox a").css("height")+'; padding-left:10px; padding-top:5px;" id="player"></a></div><script language="text/javascript">flowplayer("player", {src: "../js/editor/flowplayer-3.1.5.swf", wmode: "transparent"}, {}); videocounter = 1; $("#authoring_videobox").jqDrag(".jqDrag");  $("#authoring_videobox").jqDrag(".jqDrag-left"); $("#authoring_videobox").jqDrag(".jqDrag-right"); $("#authoring_videobox").jqResize(".handle-nw","nw");  $("#authoring_videobox").jqResize(".handle-ne","ne"); $("#authoring_videobox").jqResize(".handle-se","se");  $("#authoring_videobox").jqResize(".handle-sw","sw"); $("#authoring_videobox").bind("click", function(e){ if ((mode=="edit") && ($("#authoring_videobox .handle-nw").css("visibility") === "hidden")) { div_from = "v";  div_type = "v";  $("#authoring_videobox .handle-nw").css("visibility",""); $("#authoring_videobox .handle-ne").css("visibility","");  $("#authoring_videobox .handle-sw").css("visibility","");  $("#authoring_videobox .handle-se").css("visibility",""); $("#authoring_videobox .jqHandle-top").css("visibility","");   $("#authoring_videobox .jqHandle-bottom").css("visibility","");  $("#authoring_videobox .jqHandle-left").css("visibility",""); $("#authoring_videobox .jqHandle-right").css("visibility",""); setVideoZindex(); }  else  { }  });  $("#overvideo").bind("click", function(e){  if (mode=="edit") { saveVideoDivContent(selected_div); div_from="v";  if ($("#authoring_videobox .jqHandle-left").css("visibility") === "hidden") {buttons_noactive();  $("#authoring_videobox .jqHandle-left").css("visibility","");  $("#authoring_videobox .jqHandle-top").css("visibility","");  $("#authoring_videobox .jqHandle-bottom").css("visibility","");  $("#authoring_videobox .jqHandle-right").css("visibility","");  div_type="v";  }  else  {     }  } });  <\/script>';

   js_content = js_content+data; 

  }

    



 
  for (i=1;i<=counter;i++) {
  	
  	 bc_temp = $("#authoring_box"+i).css("background-color");
  	 if (bc_temp!='transparent') bc = bc_temp;
  	 else bc = '';
  	 
  	 bi_temp = $("#authoring_box"+i).css("background-image");
  	 if (bi_temp!='') {
  	 	  bi = bi_temp; 
  	 } 	  
  	 else bi = '';
	   
	 br_temp = $("#authoring_box"+i).css("background-repeat");
  	 if (br_temp!='') br = br_temp;
  	 else br = '';  
  	 
  	 bp_temp = $("#authoring_box"+i).css("background-position");
  	 if (bp_temp!='') bp = bp_temp;
  	 else bp = '';
	   
     

     data="<div style='background-color:"+bc+"; background-position:"+bp+"; background-image:"+bi+"; background-repeat:"+br+"; left:"+$('#authoring_box'+i).css('left')+"; top:"+$('#authoring_box'+i).css('top')+"; width:"+$('#authoring_box'+i).css('width')+"; height:"+$('#authoring_box'+i).css('height')+";' id='authoring_box"+i+"' class='authoring_box'><div id='handle"+i+"' class='jqHandle-top jqDrag' style='visibility:hidden;'></div><div class='jqHandle-bottom jqDrag' style='visibility:hidden;'></div><div class='jqHandle-left jqDrag-left' style='visibility:hidden;'></div><div class='jqHandle-right jqDrag-right' style='visibility:hidden;'></div><div class='handle-nw' style='visibility:hidden;'></div><div class='handle-ne' style='visibility:hidden;'></div><div class='handle-se' style='visibility:hidden;'></div><div class='handle-sw' style='visibility:hidden;'></div><div class='authoring_box_text' id='text"+i+"'>"+$('#text'+i).html()+"</div></div>";	

  
  
     data2="<script type='text/javascript'> $('#authoring_box"+i+"').jqDrag('.jqDrag'); $('#authoring_box"+i+"').jqDrag('.jqDrag-left'); $('#authoring_box"+i+"').jqDrag('.jqDrag-right'); $('#authoring_box"+i+"').jqResize('.handle-nw','nw');  $('#authoring_box"+i+"').jqResize('.handle-ne','ne');  $('#authoring_box"+i+"').jqResize('.handle-se','se'); $('#authoring_box"+i+"').jqResize('.handle-sw','sw');  $('#authoring_box"+i+" .jqHandle-top').bind('click', function(e){ hideiframe(); });     $('#authoring_box"+i+" .jqHandle-bottom').bind('click', function(e){ hideiframe(); });  $('#authoring_box"+i+" .jqHandle-left').bind('click', function(e){ hideiframe(); });  $('#authoring_box"+i+" .jqHandle-right').bind('click', function(e){ hideiframe(); });";
  
     data3 = "$('#authoring_box"+i+" .jqHandle-bottom').bind('click',saveCon);  $('#authoring_box"+i+" .jqHandle-top').bind('mousedown',saveCon);  $('#authoring_box"+i+" .jqHandle-left').bind('mousedown',saveCon);   $('#authoring_box"+i+" .jqHandle-right').bind('mousedown',saveCon);  $('#text"+i+"').bind('click', function(e){   if (mode=='edit') saveDivContent(selected_div,"+i+");  if ((mode=='edit') && ($('#authoring_box"+i+" .handle-nw').css('visibility') === 'hidden')) { $('#authoring_box"+i+" .handle-nw').css('visibility',''); $('#authoring_box"+i+" .handle-ne').css('visibility','');  $('#authoring_box"+i+" .handle-sw').css('visibility','');  $('#authoring_box"+i+" .handle-se').css('visibility',''); $('#authoring_box"+i+" .jqHandle-top').css('visibility','');  $('#authoring_box"+i+" .jqHandle-bottom').css('visibility','');   $('#authoring_box"+i+" .jqHandle-left').css('visibility','');  $('#authoring_box"+i+" .jqHandle-right').css('visibility','');    setZindex('t"+i+"');   div_from='t';   }  else  {     }    });";
  
     data4 = "$('#authoring_box"+i+" ').bind('contextmenu',function(e)  { if (mode=='edit') showDivContextMenu("+i+");  }  ); <\/script>"
	 
	 js_content = js_content+data+data2+data3+data4;  

  }

    

  for (i=1;i<=imagecounter;i++) {
  	
  	 data='<div style="position: absolute;  left: '+$("#authoring_imagebox"+i).css("left")+';   top: '+$("#authoring_imagebox"+i).css("top")+';  width: '+$("#authoring_imagebox"+i).css("width")+';  height: '+$("#authoring_imagebox"+i).css("height")+';" id="authoring_imagebox'+i+'" class="authoring_imagebox"><input type="hidden" name="authoring_imageboxfile'+i+'" id="authoring_imageboxfile'+i+'" value="'+$("#authoring_imageboxfile"+i).val()+'" /><div id="handle'+i+'" class="jqHandle-top jqDrag" style="visibility:hidden"></div><div class="jqHandle-bottom jqDrag"  style="visibility:hidden"></div><div class="jqHandle-left jqDrag-left"  style="visibility:hidden"></div><div class="jqHandle-right jqDrag-right"  style="visibility:hidden"></div><div class="handle-nw" style="visibility:hidden"></div><div class="handle-ne" style="visibility:hidden"></div><div class="handle-se" style="visibility:hidden"></div><div class="handle-sw" style="visibility:hidden"></div><div class="authoring_imagebox_content" id="image_con'+i+'"><img id="pic'+i+'" src="../js/editor/uploads/'+$("#authoring_imageboxfile"+i).val()+'" alt="" /></div></div>';	
	
	
  data2="<script type='text/javascript'> $('#authoring_imagebox"+i+"').jqDrag('.jqDrag'); $('#authoring_imagebox"+i+"').jqDrag('.jqDrag-left'); $('#authoring_imagebox"+i+"').jqDrag('.jqDrag-right'); $('#authoring_imagebox"+i+"').jqResize('.handle-nw','nw');  $('#authoring_imagebox"+i+"').jqResize('.handle-ne','ne');  $('#authoring_imagebox"+i+"').jqResize('.handle-se','se'); $('#authoring_imagebox"+i+"').jqResize('.handle-sw','sw');";
  
  
  data3 = "$('#authoring_imagebox"+i+"').bind('click', function(e){   div_type = 'i"+i+"';    if ($('#authoring_imagebox"+i+" .handle-nw').css('visibility') === 'hidden') { buttons_noactive(); saveImageDivContent(selected_div);$('#authoring_imagebox"+i+" .handle-nw').css('visibility',''); $('#authoring_imagebox"+i+" .handle-ne').css('visibility','');  $('#authoring_imagebox"+i+" .handle-sw').css('visibility','');  $('#authoring_imagebox"+i+" .handle-se').css('visibility',''); $('#authoring_imagebox"+i+" .jqHandle-top').css('visibility','');  $('#authoring_imagebox"+i+" .jqHandle-bottom').css('visibility','');   $('#authoring_imagebox"+i+" .jqHandle-left').css('visibility','');  $('#authoring_imagebox"+i+" .jqHandle-right').css('visibility','');    setImageZindex('i"+i+"');  div_from='i';    }  else  {     }    }); <\/script>";  
    
   js_content = js_content+data+data2+data3;  
  	
}

 
 
 
  for (i=1;i<=flashcounter;i++) {
  	  	
    data='<div style="position: absolute;  left: '+$("#authoring_flashbox"+i).css("left")+';   top: '+$("#authoring_flashbox"+i).css("top")+';  width: '+$("#authoring_flashbox"+i).css("width")+';  height: '+$("#authoring_flashbox"+i).css("height")+'; z-index:1000" id="authoring_flashbox'+i+'" class="authoring_imagebox"><input type="hidden" name="authoring_flashboxfile'+i+'" id="authoring_flashboxfile'+i+'" value="'+$("#authoring_flashboxfile"+i).val()+'" /><div id="handle'+i+'" class="jqHandle-top jqDrag" style="visibility:hidden;"></div><div class="jqHandle-bottom jqDrag" style="visibility:hidden;"></div><div class="jqHandle-left jqDrag-left" style="visibility:hidden;"></div><div class="jqHandle-right jqDrag-right" style="visibility:hidden;"></div><div class="authoring_flashbox_content" id="flash_con'+i+'"><object type="application/x-shockwave-flash" data="../../js/editor/uploads/'+$("#authoring_flashboxfile"+i).val()+'"  width="'+$("#authoring_flashbox"+i).css("width")+'" height="'+$("#authoring_flashbox"+i).css("height")+'"><param name="movie" value="../../js/editor/uploads/'+$("#authoring_flashboxfile"+i).val()+'" /><param name="wmode" value="transparent" /></object><div id="overflash'+i+'" style="filter:alpha(opacity=1); opacity:0.1;background-color:white; position:absolute; top:5px; left:5px; width:'+$("#authoring_flashbox"+i).css("width")+'; height:'+$("#authoring_flashbox"+i).css("height")+';"></div></div></div>';

		
    data2="<script type='text/javascript'> $('#authoring_flashbox"+i+"').jqDrag('.jqDrag'); $('#authoring_flashbox"+i+"').jqDrag('.jqDrag-left'); $('#authoring_flashbox"+i+"').jqDrag('.jqDrag-right'); $('#authoring_flashbox"+i+"').jqResize('.handle-nw','nw');  $('#authoring_flashbox"+i+"').jqResize('.handle-ne','ne');  $('#authoring_flashbox"+i+"').jqResize('.handle-se','se'); $('#authoring_flashbox"+i+"').jqResize('.handle-sw','sw');";
  
    data3 = "$('#authoring_flashbox"+i+"').bind('click', function(e){  if ($('#authoring_flashbox"+i+" .handle-nw').css('visibility') === 'hidden') { $('#authoring_flashbox"+i+" .handle-nw').css('visibility',''); $('#authoring_flashbox"+i+" .handle-ne').css('visibility','');  $('#authoring_flashbox"+i+" .handle-sw').css('visibility','');  $('#authoring_flashbox"+i+" .handle-se').css('visibility',''); $('#authoring_flashbox"+i+" .jqHandle-top').css('visibility','');  $('#authoring_flashbox"+i+" .jqHandle-bottom').css('visibility','');   $('#authoring_flashbox"+i+" .jqHandle-left').css('visibility','');  $('#authoring_flashbox"+i+" .jqHandle-right').css('visibility','');    setImageZindex("+i+");  }  else  {     }    });           <\/script>";
  
    data4="<script type='text/javascript'>$('#overflash"+i+"').bind('click', function(e){  saveFlashDivContent(selected_div); div_from='f';  if ($('#authoring_flashbox"+i+" .jqHandle-left').css('visibility') === 'hidden'){   buttons_noactive(); $('#authoring_flashbox"+i+" .jqHandle-left').css('visibility','');   $('#authoring_flashbox"+i+" .jqHandle-top').css('visibility','');   $('#authoring_flashbox"+i+" .jqHandle-bottom').css('visibility','');  $('#authoring_flashbox"+i+" .jqHandle-right').css('visibility','');  div_type='f"+i+"';  }  else  {     }   }); <\/script> ";
    
    
  js_content = js_content+data+data2+data3+data4;   
  	
}
 
 
 
   sValue = js_content;


 

	//sValue = sValue + js_content;	
	
    

	var _istr = $("#authoring-edit-idstranka").attr("value");
	var _ik = $("#authoring-edit-idkurz").attr("value");
	var _n = $("#authoring-edit-name").attr("value");
	var _s = $("#authoring-edit-state").attr("value");
	var _p = $("#authoring-edit-poradie").attr("value");
	


	$.post(script_file, {action: "saveeditorlection", id_kurz: _ik, id_stranka: _istr, name: _n, state: _s, obsah: sValue, poradie: _p, div_counter: counter, image_counter: imagecounter, flash_counter: flashcounter, sel_quiz:sel_quiz}, function (p) {
		if (p == "") { 
			$("#authoring-lection-name").attr("value", _n);
			$("#authoring-lection-content").attr("value", sValue);
			$("#authoring-lection-state").html(_s);
			$("#authoring-lection-state-text").html($("#authoring-edit-state option[value='" + _s + "']").html());
			
		}
		
		
	});


}

















   
     
    backc = $("#backcolor").val();
	if ((backc!='') && (backc!=null)) $("#container").css("background-color",backc);
	
	
	
	
	backp = $("#backimage").val();
	if ((backp!='') && (backp!=null)) {
		bp = "url(../../js/editor/uploads/"+backp+")";
		$("#container").css("background-image",bp);
		
		backpos = $("#backpos").val();
		$("#container").css("background-position",backpos);
		
		backrepeat = $("#backrepeat").val();
		$("#container").css("background-repeat",backrepeat);
				
		
	}	
		

    
    

   
   
   
   	


var dragging;
var flash_width;
var flash_height;
var bigbox_width;
var bigbox_height;

buttons_active();

   

    function deleteAll() {
    	
    	for (i=1; i<=audiocounter; i++) $("#authoring_audiobox"+i).remove();
    		
		for (i=1; i<=counter; i++) $("#authoring_box"+i).remove();
    		
        for (i=1; i<=videocounter; i++) $("#authoring_videobox"+i).remove();
		
		for (i=1; i<=imagecounter; i++)  $("#authoring_imagebox"+i).remove();
    	
		audiocounter = 0;
		counter = 0;
		videocounter = 0;
		imagecounter = 0;	
       
	    //remove bigbox
	    $("#authoring_bigbox").remove();
        drag_status = 'normal';   	
	    
		$("selected_div").val('0');
		selected_div = 0;   	
	       	
	    $("#authoring_bigbox").remove();
        drag_status = 'normal';
		   	
    	
    }
    

    
    
    function deleteDiv() {
     	     	
        //if	(($("#handle"+selected_div).css('visibility')=="visible") || ($("#handle"+selected_div).css('visibility')=="")) {
      
	
	  if (selected.length>0) {
        	for (m=1; m<=selected.length; m++) {
        		 $("#authoring_box"+m).remove();
				 selected[m] = '';      		
        	}
              counter = 0;
              $("#authoring_bigbox").remove();
              drag_status = 'normal';   	
	    
	      $("selected_div").val('0');
	      selected_div = 0;   
            
           } 
        
        
        
         if (selected_images.length>0) {
        	for (m=1; m<=selected_images.length; m++) {
        		 $("#authoring_imagebox"+m).remove();
				 selected_images[m] = '';       		
        	}
            imagecounter = 0;
            $("#authoring_bigbox").remove();
            drag_status = 'normal';   	
	    
		    $("selected_div").val('0');
		    selected_div = 0;   
            
          //  selected_images.clear();
            
        }
        
 
         
		del_typ = div_type.substr(0,1);
		del_counter = div_type.substr(1);
		
		if (del_typ == 'v') {
			$("#authoring_videobox").remove();	
			videocounter = videocounter - 1;
			buttons_noactive();
	    }
		
		
		if (del_typ == 'a') {
			
			$("#authoring_audiobox"+del_counter).remove();			
			if (del_counter==audiocounter)
			audiocounter = audiocounter - 1;
			buttons_noactive();		
		}
		
				
		if (del_typ == 'i') {
			
                        var imageName = $("img#pic"+del_counter).attr("src");
                        
                        removeFromInsertedImage(imageName);
                        
			$("#authoring_imagebox"+del_counter).remove();			
			if (del_counter==imagecounter)
			imagecounter = imagecounter - 1;
			buttons_noactive();		
		}
		
		
		if (del_typ == 'f') {
			
			
			$("#authoring_flashbox"+del_counter).remove();
			if (del_counter==flashcounter)
			flashcounter = flashcounter - 1;
			buttons_noactive();					
		}
		
		if (del_typ == 't') {
			$("#authoring_box"+del_counter).remove();	
			if (del_counter==counter)
			counter = counter - 1;
			
			var myIFrame = document.getElementById("iView");
            myIFrame.contentWindow.document.body.innerHTML = '';
			buttons_noactive();				
		}
		
		
		
		
		
	 // }	
     } 

 
    

     	
      
      
           
       
      
      //deletekey
     $(document).keydown(function(e) {


 
 
      //viac imageboxov
      if ((e.which=="46") && (selected_images.length>0)) {
	     for (ii=0; ii<selected_images.length; ii++) {
	     	$("#authoring_imagebox"+selected_images[ii]).remove();			
			imagecounter = imagecounter - 1;
	     }
         buttons_active();
		 $("#authoring_bigbox").remove();
      }
      
      
      
      //viac flashboxov
	  if ((e.which=="46") && (selected_flash.length>0)) {
	     for (ii=0; ii<selected_flash.length; ii++) {
	     	$("#authoring_flashbox"+selected_flash[ii]).remove();			
			flashcounter = flashcounter - 1;
	     }
         buttons_active();
		 $("#authoring_bigbox").remove();
      }
      
      
      
       //viac textboxov
      if ((e.which=="46") && (selected.length>0)) {
	     for (ii=0; ii<selected.length; ii++) {
	     	$("#authoring_box"+selected[ii]).remove();			
			counter = counter - 1;
	     }
         buttons_active();
		 $("#authoring_bigbox").remove();
      }
      
      
 
      if ((e.which=="46") && (($("#handle"+selected_div).css('visibility')=="visible") || ($("#handle"+selected_div).css('visibility')==""))) {
         
		del_typ = div_type.substr(0,1);
		del_counter = div_type.substr(1);
			
		if (del_typ == 'i') {
			
			
			idf = $("#authoring_imageboxfile"+selected_div).val();
			$.post("courses.php", {action: "deletefile", id: idf}, function(l) {});
						
			$("#authoring_imagebox"+del_counter).remove();			
			if (del_counter==imagecounter)
			imagecounter = imagecounter - 1;
			buttons_active();		
		}
		
		
		if (del_typ == 'f') {
			
			idf = $("#authoring_flashboxfile"+selected_div).val();
			$.post("courses.php", {action: "deletefile", id: idf}, function(l) {});
			
			$("#authoring_flashbox"+del_counter).remove();
			if (del_counter==flashcounter)
			flashcounter = flashcounter - 1;
			buttons_active();					
		}
		
		if (del_typ == 't') {
			$("#authoring_box"+del_counter).remove();	
			if (del_counter==counter)
			counter = counter - 1;
			
			var myIFrame = document.getElementById("iView");
            myIFrame.contentWindow.document.body.innerHTML = '';
			buttons_active();				
		}
		
	
		}
     });
     
     
     

   



  


   function showVideoMenu() {
   	    
   	    
		var ie6 = navigator.userAgent.toLowerCase().indexOf("msie 6") != -1;
   	    
   	    if (ie6) hideItems();  
				   
		
   	    
   	    status = 'multimedia';
   	    $("#status").val('multimedia');
		hideDivs(new Array());   
        saveEditorKurz();
   	    div_from = '';
   	    
   	    $.get("scripts/getfiles.php",{ cmd: "video"}, fillBackContent);
   	   
   	    $("#additional_menu_header_left").html("Multimedia");
   	    
   	    $("#additional_menu_subheader_left").html('<a onclick="showVideoFiles();" href="#">Video</a> | <a onclick="showAudioFiles();" href="#">Audio</a>');   	    
   	    $("#additional_menu_subheader_right").html('<div id="uploadVideoButton" style="cursor:pointer"><img src="js/images/uploadfile.png"></a>');
   	    
   	 
   	    //$("#additional_menu_subheader_right").html('');
   	       	    
   	       	    
   	       	    
   	    $("#additional_menu_content").append('<script type="text/javascript">new AjaxUpload(\'#uploadVideoButton\',{action: \'scripts/uploadvideo.php\',name: \'userfile\',data : {\'key1\' : "This data wont",\'key2\' : "be send because",\'key3\' : "we will verwrite it"},onSubmit : function(file , ext){if (ext && /^(avi|mpg|mpeg)/.test(ext)){this.setData({\'key\': \'This string will be send with the file\'});  } else {$(\'#example2 .text\').text(\'Error: only images are allowed\');return false;}},onComplete : function(file){ $.get("scripts/getfiles.php",{ cmd: "video"}, reloadVideos() ); } }); </script>');      	
	 
   	    
   	    
   	       	    
   }
   
   
   function hideItems() {
   	
   	   id = 0;
   	    
   	    for (i=0;i<counter;i++) {
	    	
	    	id = i+1;
	    	
	    	$("#authoring_box"+id).css("visible","hidden");
	    	$("#authoring_box"+id).css("display","none");
	    	
	    }
	    
	    
	    id = 0;
   	    
   	    for (i=0;i<imagecounter;i++) {
	    	
	    	id = i+1;
	    	
	    	$("#authoring_imagebox"+id).css("visible","hidden");
	    	$("#authoring_imagebox"+id).css("display","none");
	    	
	    }
	    
	    
	    
	    id = 0;
   	    
   	    for (i=0;i<videocounter;i++) {
	    	
	    	id = i+1;
	    	
	    	$("#authoring_videobox"+id).css("visible","hidden");
	    	$("#authoring_videobox"+id).css("display","none");
	    	
	    }
	    
	    
	    id = 0;
   	    
   	    for (i=0;i<audiocounter;i++) {
	    	
	    	id = i+1;
	    	
	    	$("#authoring_audiobox"+id).css("visible","hidden");
	    	$("#authoring_audiobox"+id).css("display","none");
	    	
	    }
	    
	    
	    id = 0;
   	    
   	    for (i=0;i<flashcounter;i++) {
	    	
	    	id = i+1;
	    	
	    	$("#authoring_flashbox"+id).css("visible","hidden");
	    	$("#authoring_flashbox"+id).css("display","none");
	    	
	    }
	    
   	
   	
   }
   
   
   function showItems() {
   	
   	    id = 0;
   	    
   	    for (i=0;i<counter;i++) {
	    	
	    	id = i+1;
	    	
	    	$("#authoring_box"+id).css("visible","");
	    	$("#authoring_box"+id).css("display","block");
	    	
	    }
	    
	    
	    id = 0;
   	    
   	    for (i=0;i<imagecounter;i++) {
	    	
	    	id = i+1;
	    	
	    	$("#authoring_imagebox"+id).css("visible","");
	    	$("#authoring_imagebox"+id).css("display","block");
	    	
	    }
	    
	    
	    
	    id = 0;
   	    
   	    for (i=0;i<videocounter;i++) {
	    	
	    	id = i+1;
	    	
	    	$("#authoring_videobox"+id).css("visible","");
	    	$("#authoring_videobox"+id).css("display","block");
	    	
	    }
	    
	    
	    id = 0;
   	    
   	    for (i=0;i<audiocounter;i++) {
	    	
	    	id = i+1;
	    	
	    	$("#authoring_audiobox"+id).css("visible","");
	    	$("#authoring_audiobox"+id).css("display","block");
	    	
	    }
	    
	    
	    id = 0;
   	    
   	    for (i=0;i<flashcounter;i++) {
	    	
	    	id = i+1;
	    	
	    	$("#authoring_flashbox"+id).css("visible","");
	    	$("#authoring_flashbox"+id).css("display","block");
	    	
	    }
	    
	    
	    
	    
	    
	    
	    
	    
	    
   	
   }
   
   
   
   
   function showImageGalleryMenu() {
   
   	    
   	    
    
		
		  
   	    
   	    ie6 = navigator.userAgent.toLowerCase().indexOf("msie 6") != -1;
   	    
   	    if (ie6) hideItems();
	   
		
   		    
        status = 'insertimage';  //aby som vedel ci idem vlozito obrazok ako objekt, alebo sa to tyka pozadia slidu
   	    $("#status").val('insertimage');
        div_from = '';
   	    
		selected_div = '0';
		$("#selected_div").val(selected_div);
		
		
		$.get("scripts/getfiles.php",{ cmd: "image"}, fillBackContent);
		
	    //$("#additional_menu_header_left").html('Galeria');
	    
	    $("#additional_menu_header_left").html(lang['gallery']);
	    
	    
	    
	    $("#additional_menu_subheader_left").html('');
	    
	    
		$("#additional_menu_subheader_right").html('<div id="uploadImageButton" style="cursor:pointer"><img src="js/images/uploadfile.png"></a>');
		
		
		
		

		
	    
	    
   }
   
   
   
   
   
   function showTemplatesMenu() {
       
          status = 'editbackground';  //aby som vedel ci idem vlozito obrazok ako objekt, alebo sa to tyka pozadia slidu
          
          var p = '<a href="#" onclick="selectTemplate(1); return false;"><img src="js/images/layout1.png" alt="" /></a><a href="#" onclick="selectTemplate(2); return false;"><img src="js/images/layout2.png" alt="" /></a><a href="#" onclick="selectTemplate(3); return false;"><img src="js/images/layout3.png" alt="" /></a><a href="#" onclick="selectTemplate(4); return false;"><img src="js/images/layout4.png" alt="" /></a><a href="#" onclick="selectTemplate(5); return false;"><img src="js/images/layout5.png" alt="" /></a>';
                 
          fillBackContent(p);
          
          
   }
   
  
   
   function selectTemplate(id) {
       
       $.post("scripts/gettemplate.php",{ id:id }, applyTemplate);
       
       if (id == 1) {
           
          counter = 2;
          
          $("#div_counter").val("2");
           
       }
       
       
       if (id == 2) {
           
          counter = 2;
          
          $("#div_counter").val("2");
           
       }
       
       
         if (id == 3) {
           
          counter = 3;
          
          $("#div_counter").val("3");
           
       }
       
       
       
         if (id == 4) {
           
          counter = 1;
          
          $("#div_counter").val("1");
           
       }
       
        if (id == 5)  {
            
            counter = 0;
            
            $("#div_counter").val("0");
        }
            
            
       
       
       
       div_type = 't'+counter;
       
       selected_div = counter;	
       
   }
   
   
   
   function applyTemplate(data) {
       
       
       selected_div = '';
       
       $("#container #lection_content").html(data);
       
       div_from = 't';	
       
       $("#authoring_additional_menu").css("visibility","hidden");
       
       $("#authoring_additional_menu").css("display","none");
       
   }
   
   

   
   
   function showBackgroundMenu() {  
   	   	
   	    ie6 = navigator.userAgent.toLowerCase().indexOf("msie 6") != -1;
   	    
   	    if (ie6) hideItems();
   	   
   	    var myIFrame = document.getElementById("iView");
            
            var iframe_body_html = myIFrame.contentWindow.document.body.innerHTML;
   	   
   	    $("#text"+selected_div).html(iframe_body_html);  
   	   
   	    temp_text = $("#text"+selected_div).html(); 
   	       	       	   
   	    $("#selected_div").val(selected_div);
   	
   	    status = 'editbackground';  //aby som vedel ci idem vlozito obrazok ako objekt, alebo sa to tyka pozadia slidu
   	    
            $("#status").val('editbackground');
	  
   	    div_from = '';
   	   
           if ((selected_div=='null') || (selected_div=='undefined') || (selected_div=='')) selected_div = '0';
   	  	 
	    if (selected_div === undefined) selected_div = 0;   
	 	   
	    $("#additional_menu").css("overflow","hidden");   
	 	   
   	    $.get("scripts/background.php", { selected_div: selected_div, themes_dir: themes_dir, userimages_dir: userimages_dir}, fillBackContent);
   	    
   	    $("#additional_menu_header_left").html(lang['background']);
   	    
   	    $("#additional_menu_subheader_right").html('');
   	    
   	    
   	    if (selected_div == 0)
		   
		   $("#additional_menu_subheader_left").html("<a onclick='showBackThemeMenu(); return false;' href='#'>"+lang['theme']+"</a>&nbsp;|&nbsp;<a onclick='showBackColorMenu(); return false;' href='#'>"+lang['color']+"</a>&nbsp;|&nbsp;<a onclick='showBackImageMenu(); return false;' href='#'>"+lang['image']+"</a>");
		   
		else  
		   
		   $("#additional_menu_subheader_left").html("<a onclick='showBackColorMenu(); return false;' href='#'>"+lang['color']+"</a>&nbsp;|&nbsp;<a onclick='showBackImageMenu(); return false;' href='#'>"+lang['image']+"</a>");
		  
		  
		  	  
		  
	      $("#additional_menu").css("overflow-y","scroll");
	    
	      $("#additional_menu").css("overflow-x","hidden");
	    
	      $("#backthememenu").css("visibility","hidden");
		$("#backthememenu").css("display","none");
		
		$("#backcolormenu").css("visibility","visible");
		$("#backcolormenu").css("display","block");
		
		$("#backimagemenu").css("visibility","hidden");
		$("#backimagemenu").css("display","none");
		
		
                
                
		
   }
   
 
 
 
   function fillBackContent(p) {
   	 
   	  ie6 = navigator.userAgent.toLowerCase().indexOf("msie 6") != -1;
   	    
   	  if (ie6) hideItems();
   	    	 
	  $("#authoring_additional_menu_content").html(p);
   	     	  
   	  $("#authoring_additional_menu").css("visibility","visible");
	  $("#authoring_additional_menu").css("display","block");  
	  $("#authoring_additional_menu").css("z-index","99999");
	  $("#authoring_additional_menu").css("display","none");
	  
	  $("#authoring_additional_menu").fadeIn(350);

	  
   }
 
 
 
   function showShapeMenu() {
   	
   	  
   	  ie6 = navigator.userAgent.toLowerCase().indexOf("msie 6") != -1;
   	    
   	  if (ie6) hideItems();
	   
	  
   		    
          status = 'insertshape';  //aby som vedel ci idem vlozito obrazok ako objekt, alebo sa to tyka pozadia slidu
   	  $("#status").val('insertshape');
          div_from = ''; 
   	    
	  selected_div = '0';
	  $("#selected_div").val(selected_div);	
		
	  $.get("scripts/getfiles.php",{ cmd: "shape"}, fillBackContent);
		
	  $("#authoring_additional_menu_header_left").html('Utvary');
	    
	  $("#authoring_additional_menu_subheader_left").html('');
	  
	  $("#authoring_additional_menu_subheader_right").html('');
	  
   	  
   }
   
   
   function insertShape(file) {
   	  
      $("#content_authoring_part #tmp_img").html('<img class="pngfix" src="'+file+'" alt="" />');

      window.setTimeout("inImage('"+file+"')",600);  //1800
      
      clearAll();
      
      $("#authoring_additional_menu").css("visibility","hidden");
      
   }	    
     
   
   
   
   function addVideo(path) {

    	$.get("scripts/video.php",{ cmd: "video", path: path},  function d(data) {       
    		
    	     $("#container #lection_content").append(data);
		     div_from = 'v';	
             div_type = 'v';
             videocounter = 1;
             
             $("#additional_menu_content").html("");
   	         $("#additional_menu").css("visibility","hidden");
	         $("#additional_menu").css("display","none");         
    		    		
    	});
    	
	}
	

   
   
   
   function inInImage(filename) {
 
   	  $("#content_authoring_part #tmp_img").html('<img class="pngfix" src="'+filename+'" alt="" />');
   	  
   	  inImage(filename);
   	
   }
 
 

 
 
   function inImage (filename) {  

     
     tmp_width = $('#content_authoring_part #tmp_img').width();
     tmp_height = $('#content_authoring_part #tmp_img').height();
       
     tmp_width = tmp_width + 10;
     tmp_height = tmp_height + 10;  
       
     
     
        var aa = $("#tmp_img").width();
     
      alert(aa);
     
    
   //  $('#authoring-content .authoring-panes .authoring-pane #authoring-edit-area #temp_image').html('');  
     
     ie6 = navigator.userAgent.toLowerCase().indexOf("msie 6") != -1;
   	    
     if (ie6) showItems();
   	 
     status = 'authoring';
   	 
     $("#status").val('authoring');
     
     addImageDiv(filename,tmp_width,tmp_height);
        
   }
   
   
   function inImageBack(filename) {
   	  $("#container").css("background-image","url('../js/editor/uploads/"+filename+"');");
       	
   }
   

   function deleteAudio() {
   	  $("#audio_player").html('');
   	  $("#audio").val('');
   	  saveEditorKurz();
   	
   }
   
   
   function close_additional_menu() {
   	
   	  ie6 = navigator.userAgent.toLowerCase().indexOf("msie 6") != -1;
   	    
   	 if (ie6) showItems();
   	    	      	
   	 $("#authoring_additional_menu_content").html("");
   	 $("#authoring_additional_menu").css("visibility","hidden");
	 $("#authoring_additional_menu").css("display","none");
	 
	 status = 'authoring';
	 	 
	 if (ie6) {
	 	
	    for (i=0;i<counter;i++) {
	    	
	    	id = i+1;
	    	
	    	$("#authoring_box"+id).css("visible","");
	    	$("#authoring_box"+id).css("display","block");
	    	
	    }
	 	
	 	
	 } 
	 
	   
	 
   }	
   
   
   

    
  mode = 'edit';

/*
  $(function () {
  
  	$("ul.tabs").tabs("div.authoring-panes > div.authoring-pane");

  });
*/


  var dragging;
  
  var flash_width;
  
  var flash_height;
  
  var bigbox_width;
  
  var bigbox_height;


  $(document).ready(function(e){
    
        $("#container ul").bind("click", function(e){
   
        
   
	    if (e.target!==this) {  
	    	
			//$("iframe#iView").css('display','none');
	        $("iframe#iView").css('visibility','hidden'); 
			    
		 }
         else {

	       $("iframe#iView").css('visibility','hidden'); 
            
        	
           for (i=1; i<=counter; i++) {
             $('#authoring_box'+i+' .handle-nw').css('visibility','hidden');
             $('#authoring_box'+i+' .handle-ne').css('visibility','hidden');
             $('#authoring_box'+i+' .handle-sw').css('visibility','hidden');
             $('#authoring_box'+i+' .handle-se').css('visibility','hidden');
             $('#authoring_box'+i+' .jqHandle-top').css('visibility','hidden');
             $('#authoring_box'+i+' .jqHandle-bottom').css('visibility','hidden');
             $('#authoring_box'+i+' .jqHandle-left').css('visibility','hidden');
             $('#authoring_box'+i+' .jqHandle-right').css('visibility','hidden');	 
             
             $("#text"+i).css('visibility','');
             
           }
                 
		   
		   for (i=1; i<=imagecounter; i++) {
             $('#authoring_imagebox'+i+' .handle-nw').css('visibility','hidden');
             $('#authoring_imagebox'+i+' .handle-ne').css('visibility','hidden');
             $('#authoring_imagebox'+i+' .handle-sw').css('visibility','hidden');
             $('#authoring_imagebox'+i+' .handle-se').css('visibility','hidden');
             $('#authoring_imagebox'+i+' .jqHandle-top').css('visibility','hidden');
             $('#authoring_imagebox'+i+' .jqHandle-bottom').css('visibility','hidden');
             $('#authoring_imagebox'+i+' .jqHandle-left').css('visibility','hidden');
             $('#authoring_imagebox'+i+' .jqHandle-right').css('visibility','hidden');			
		   }
		   
		   for (i=1; i<=flashcounter; i++) {  
             $('#authoring_flashbox'+i+' .jqHandle-top').css('visibility','hidden');
             $('#authoring_flashbox'+i+' .jqHandle-bottom').css('visibility','hidden');
             $('#authoring_flashbox'+i+' .jqHandle-left').css('visibility','hidden');
             $('#authoring_flashbox'+i+' .jqHandle-right').css('visibility','hidden');			
		   }
		   
		  
		   
		   for (i=1; i<=audiocounter; i++) {  
             $('#authoring_audiobox'+i+' .jqHandle-top').css('visibility','hidden');
             $('#authoring_audiobox'+i+' .jqHandle-bottom').css('visibility','hidden');
             $('#authoring_audiobox'+i+' .jqHandle-left').css('visibility','hidden');
             $('#authoring_audiobox'+i+' .jqHandle-right').css('visibility','hidden');			
		   }
		   
		   
       	 }
         

         //
         //nove       
         var myIFrame = document.getElementById("iView");
         var iframe_body_html = myIFrame.contentWindow.document.body.innerHTML
         if ((div_from=='t')  && ($("iframe#iView").css('visibility')=='visible')) $("#text"+selected_div).html(iframe_body_html);
         $("#text"+selected_div).css("visibility","");
         
         //
         
         $("#authoring_bigbox").remove();
         
		
		 if (status!='editbackground') { 
		
		   selected_div = 0;
           $("#selected_div").val('0');
         }  
         
           
         
		 if ((status!='insertimage') && (status!='editbackground')) {
	       status = 'authoring';
           $("#status").val('authoring');
         }
      
	     
         
         
         

    });
   
 });


   

   

   function point_it(event){
 	 pos_x = event.offsetX?(event.offsetX):event.pageX-document.getElementById("pointer_div").offsetLeft;
	 pos_y = event.offsetY?(event.offsetY):event.pageY-document.getElementById("pointer_div").offsetTop;
 	 alert(pos_x+' '+pos_y);
   }


  
   function main_ul_onclick() {
   	
   	
   	
           $("#context_menu").css("visibility","hidden");
           $("#context_menu").css("display","none");
           
           hideFlashDivs(new Array());
           hideDivs(new Array(),'');
           hideImageDivs(new Array());
           hideVideoDiv(new Array());
           

           
           
           selected = new Array();
           selected_images = new Array();
           selected_flash = new Array();  
   
          
        
          
         if (div_type!='') { 
           var ttyp = div_type.substr(0,1);
           if ((selected_div!=0) && (ttyp!='i')) {

             var myIFrame = document.getElementById("iView");
             var iframe_body_html = myIFrame.contentWindow.document.body.innerHTML;
          
             if (div_from=='t') {
		
                   $("#text"+selected_div).html(iframe_body_html);
                           //alert(iframe_body_html);
             }  

             $("#iView").css('visibility','hidden');
             $("#iView").css('z-index','-1000');
           
           
             if (status!='editbackground') {           
              selected_div = 0;
              div_from='';
             } 
		   
             myIFrame.contentWindow.document.body.innerHTML = '';
             
             div_from = '';
           }  
           
         }  
         
         $("#authoring_bigbox").remove();

   	
   	        //posledny element z ktoreho klikneme na plochu musi mat najvyssi z-index
         if (div_from == 't') $("#authoring_box"+selected_div).css("z-index","100");
       
         if (div_from == 'i') $("#authoring_imagebox"+selected_div).css("z-index","100");
       
         if (div_from == 'v') $("#authoring_videobox"+selected_div).css("z-index","100");
         
         
         for (k=0; k<image_counter; k++) {
                   
             $("#counter_dimensions"+k).css("visibility","hidden");
         
             $("#counter_dimensions"+k).css("display","none");
            
         }   
   	
   }

 
 
   function showDialogCharacters() { 
       
                $("#authoring_box"+selected_div).css("visibility","hidden");
                $("#text"+selected_div).css("visibility","hidden");
                $("#iView").css("visibility","hidden");
   
		$("#special_characters").css("visibility","visible");
		$("#special_characters").css("display","block");
		$("#special_characters").css("z-index","1001");
		
		$("#special_characters").css("position","absolute");
		$("#special_characters").css("top","50px");
		
		$("#special_characters").fadeIn(350);
 
   }
 
 
   
   function insertChar(schar) {
   		
      var iframe_window = window.frames["iView"];
       var myIFrame = document.getElementById("iView");   
       iframe_document = document.getElementById('iView').contentDocument
       var con = myIFrame.contentWindow.document.body.innerHTML;
    
       con = con + schar;
    
       var myIFrame = document.getElementById("iView");
       myIFrame.contentWindow.document.body.innerHTML = con;	
		   	
	   $("#special_characters").css("visibility","hidden");
	   $("#special_characters").css("display","none");
	   $("#special_characters").css("z-index","-10");	

           $("#authoring_box"+selected_div).css("visibility","");
           $("#text"+selected_div).css("visibility","");
           $("#iView").css("visibility","");
           	
   }
   
   
   function closeSpecialCharacters() {
   	
   	   $("#special_characters").css("visibility","hidden");
	   $("#special_characters").css("display","none");
	   $("#special_characters").css("z-index","-10");
   	
   }
   


   var nazov_suboru = 'nazov';
	    
   var time_now = new Date().getTime(); 
	    
   $("#tstmp").val(time_now);



  
      
      
      
   function addToInsertedImages(filename) {
       
       var inserted_images = $("#inserted_images").val();
              
       var myArray = inserted_images.split(','); 
       
       var inarray = false;       
       
       for (i=0; i<myArray.length; i++) {             
                         
            if (myArray[i]==filename) inarray = true; 
           
       }
              
       if (inarray == false) {
           
           if (myArray.length == 0) inserted_images = filename;
           
           else inserted_images = inserted_images + ',' + filename;
       }
              
       $("#inserted_images").val(inserted_images);     
                 
   }



   
   function removeFromInsertedImage(filename) {
       
               
       var inserted_images = $("#inserted_images").val();
              
       var myArray = inserted_images.split(','); 
       
       var newString = '';
       
       var inarray = false;       
       
       for (i=0; i<myArray.length; i++) {             
                         
            if (myArray[i]!=filename) newString = newString + myArray[i];
            
       }
              
              
       $("#inserted_images").val(newString);     
       
   }
