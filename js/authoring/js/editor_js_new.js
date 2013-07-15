
var dragging = 'no';

var mode = 'edit';

var counter = 0;
var imagecounter = 0;
var flashcounter = 0;
var audiocounter = 0;

var min_left;
var max_right;
var min_top;
var max_down;
var drag_status;

var selected_div;
var div_from;
var div_type = '';

var viewMode = 1; // WYSIWYG
var Editor;
var editor_change_counter = 0; //counter pre spany pre ie, aby som vedel naspat vysvietit predtym oznaceny text


function replaceChars(name) {
    
    name.replace(" ","");
    name.replace("á","a");
    
    return name;
    
}



  
  
  


function getFlashObj(movie){
   if (window.document[movie]) {
      return window.document[movie];
   }
   if (navigator.appName.indexOf("Microsoft Internet")==-1) {
      if (document.embeds && document.embeds[movie]) {
         return document.embeds[movie]; 
      }
   } else {
      return document.getElementById(movie);
   }
}


function getFlashWidth(movie) {
   var movieObj = getFlashObj(movie);
   flash_width = movieObj.TGetProperty("/", 8);
}
  


function getFlashHeight(movie) {
   var movieObj = getFlashObj(movie);
   flash_height = movieObj.TGetProperty("/", 9);
}




function selOn(ctrl)  {
//	ctrl.style.borderColor = '#000000';
	ctrl.style.backgroundColor = '#B5BED6';
	ctrl.style.cursor = 'hand';	
}
  
function selOff(ctrl)  {
 	ctrl.style.backgroundColor = '#FFF';
}
  
function selDown(ctrl)  {
	ctrl.style.backgroundColor = '#8492B5';
}
  
function selUp(ctrl)  {
    ctrl.style.backgroundColor = '#B5BED6';
}
    
function editorFocus() {
  	iView.contentWindow.focus();
}
  
function doBold()  {
	
	Editor.execCommand('bold', false, null);
	
}

function doUndo()  {
	Editor.execCommand('undo', false, null);
}

function doStrike()  {
	Editor.execCommand('StrikeThrough', false, null);
}


function doSubscript()  {
	Editor.execCommand('subscript', false, null);
}


function doSuperscript()  {
	Editor.execCommand('superscript', false, null);
}



function doItalic()  {
	Editor.execCommand('italic', false, null);
}

function doUnderline()  {
	Editor.execCommand('underline', false, null);
}
  
function doLeft()  {
    Editor.execCommand('justifyleft', false, null);
}

function doCenter()  {
    Editor.execCommand('justifycenter', false, null);
}

function doRight()  {
    Editor.execCommand('justifyright', false, null);
}

function doOrdList()  {
    Editor.execCommand('insertorderedlist', false, null);
}

function doBulList()  {
    Editor.execCommand('insertunorderedlist', false, null);
}
  
function doForeCol()  {
    var fCol = $("#color1").val();
   
    browser = navigator.appName;
           
     
    var fCol = $("#color1").val();
    if ((browser == "Netscape") || (browser == "Opera"))
    {
        if(fCol != null) {            
             document.getElementById('iView').contentDocument.execCommand('forecolor', false, fCol);
            
         }   
    }
    else if(browser == "Microsoft Internet Explorer")
    {
       if(fCol != null) {
           //	 Editor.execCommand('forecolor', false, fCol);
       }
          
    }    
   
      
}



function ShowElementInfo(iElementId) {
    if (typeof iElementId == "string" && iElementId.length > 0) {
        var element = document.getElementById(iElementId);
        
        return element;
	}
}



function doBackCol()  {

    var bCol = $("#color2").val();

    var browser = navigator.appName;

    if ((browser == "Netscape") || (browser == "Opera")) {

	  var element = document.getElementById("iView");
      var range = element.contentWindow.getSelection().getRangeAt(0);  
  
      //iframe_content = iframe_window.document.getElementsByTagName("body")[0].innerHTML;
      //iframe_document = iframe_window.document;

   	  
      var iframe_window = window.frames["iView"];
      var myIFrame = document.getElementById("iView");   
      var iframe_document = document.getElementById('iView').contentDocument
      var iframe_content = myIFrame.contentWindow.document.body.innerHTML;
     
     
	  var selected_obj = document.getElementById("iView");

      if (selected_obj.contentWindow) {
        selected_obj = selected_obj.contentWindow.window.getSelection();
      }
      else {
         selected_obj = selected_obj.contentDocument.window.getSelection();
      }
      
     
      range = selected_obj.getRangeAt(0);

      var newNode = iframe_window.document.createElement("span");
      newNode.style.backgroundColor = bCol; 
      newNode.appendChild(range.extractContents());
      range.insertNode(newNode);
      selectNode(newNode);
	  

 	
    } 
    
    else if(browser == "Microsoft Internet Explorer")
    { 

   } 	
 
}



function getRangeObject(selectionObject) {
	if (selectionObject.getRangeAt)
		return selectionObject.getRangeAt(0);
	else { // Safari!
		var range = document.createRange();
		range.setStart(selectionObject.anchorNode,selectionObject.anchorOffset);
		range.setEnd(selectionObject.focusNode,selectionObject.focusOffset);
		return range;
	}
}








function strpos (haystack, needle, offset) {
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Onno Marsman    
    // +   bugfixed by: Daniel Esteban
    // *     example 1: strpos('Kevin van Zonneveld', 'e', 5);
    // *     returns 1: 14
 
    var i = (haystack+'').indexOf(needle, (offset ? offset : 0));
    return i === -1 ? false : i;
}


function str_replace (search, replace, subject, count) {
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Gabriel Paderni
    // +   improved by: Philip Peterson
    // +   improved by: Simon Willison (http://simonwillison.net)
    // +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   bugfixed by: Anton Ongson
    // +      input by: Onno Marsman
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    tweaked by: Onno Marsman
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   input by: Oleg Eremeev
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Oleg Eremeev
    // %          note 1: The count parameter must be passed as a string in order
    // %          note 1:  to find a global variable in which the result will be given
    // *     example 1: str_replace(' ', '.', 'Kevin van Zonneveld');
    // *     returns 1: 'Kevin.van.Zonneveld'
    // *     example 2: str_replace(['{name}', 'l'], ['hello', 'm'], '{name}, lars');
    // *     returns 2: 'hemmo, mars'
 
    var i = 0, j = 0, temp = '', repl = '', sl = 0, fl = 0,
            f = [].concat(search),
            r = [].concat(replace),
            s = subject,
            ra = r instanceof Array, sa = s instanceof Array;
    s = [].concat(s);
    if (count) {
        this.window[count] = 0;
    }
 
    for (i=0, sl=s.length; i < sl; i++) {
        if (s[i] === '') {
            continue;
        }
        for (j=0, fl=f.length; j < fl; j++) {
            temp = s[i]+'';
            repl = ra ? (r[j] !== undefined ? r[j] : '') : r[0];
            s[i] = (temp).split(f[j]).join(repl);
            if (count && s[i] !== temp) {
                this.window[count] += (temp.length-s[i].length)/f[j].length;}
        }
    }
    return sa ? s : s[0];
}


function doLink()  {
    Editor.execCommand('createlink');
}
  
function doImage()  {
    var imgSrc = prompt('Enter image location', '');
    
    if(imgSrc != null)    
     Editor.execCommand('insertimage', false, imgSrc);
}
  
function doRule()  {
    Editor.execCommand('inserthorizontalrule', false, null);
}
  
function doFont(fName)  {
    if(fName != '')
      Editor.execCommand('fontname', false, fName);
}

function doHead(hType)  {
    if(hType != '')
    {
      Editor.execCommand('formatblock', false, hType);  
      doFont(selFont.options[selFont.selectedIndex].value);
    }
}
  
function doToggleView()  {  
    if(viewMode == 1)
    {
      var iHTML = Editor.body.innerHTML;
	  if(typeof(Editor.body.innerText) != "undefined"){
	    Editor.body.innerText = iHTML;
	  } else{
		Editor.body.textContent = iHTML;
	  }
      
      // Hide all controls
      tblCtrls.style.display = 'none';
      selFont.style.display = 'none';
      selSize.style.display = 'none';
      selHeading.style.display = 'none';
      editorFocus();
      
      viewMode = 2; // Code
    }
    else
    {
	  if(typeof(Editor.body.innerText) != "undefined"){
	    iText = Editor.body.innerText;
	  } else{
		iText = Editor.body.textContent;
	  }
      editor.body.innerHTML = iText;
      
      // Show all controls
      tblCtrls.style.display = '';
      selFont.style.display = '';
      selSize.style.display = '';
      selHeading.style.display = '';
      editorFocus();
      
      viewMode = 1; // WYSIWYG
    }
}
  
  
  
  
function templates() {
    
   
   
   
   
    
    
    
    
}  


function alignLeft() {
	
	if (div_type=='authoring_bigbox') {
 	 selected_width_diff = new Array();
	 for (l=0; l<selected.length; l++) {  
	   $("#authoring_box"+selected[l]).css('left',min_left);
	   selected_width_diff.push(0);		
	 }
	
	 selected_images_width_diff = new Array();
	 for (l=0; l<selected_images.length; l++) {  
	   $("#authoring_imagebox"+selected_images[l]).css('left',min_left);		
	   selected_images_width_diff.push(0);
	 }
	
     selected_flash_width_diff = new Array();		
	 for (l=0; l<selected_flash.length; l++) {  
	   $("#authoring_flashbox"+selected_flash[l]).css('left',min_left);
	   selected_flash_diff.push(0);	
	 }
	} 
}


function alignRight() {
   
  var box_w;
  var w;
   
  if (div_type=='authoring_bigbox') {   
    var left_b = $("#authoring_bigbox").css("left").substr(0,$("#authoring_bigbox").css("left").length-2);
	
	selected_width_diff = new Array();
	for (l=0; l<selected.length; l++) { 
	   box_w = $("#authoring_box"+selected[l]).css('width');
	   w = Number(box_w.substr(0,box_w.length-2))
	   $("#authoring_box"+selected[l]).css('left',max_right-w);
	   selected_width_diff.push(max_right-w-left_b);		
	}
	
	selected_images_width_diff = new Array();
	for (l=0; l<selected_images.length; l++) { 
	   box_w = $("#authoring_imagebox"+selected_images[l]).css('width');
	   w = Number(box_w.substr(0,box_w.length-2))
	   $("#authoring_imagebox"+selected_images[l]).css('left',max_right-w);
	   selected_images_width_diff.push(max_right-w-left_b);
	}
	
	selected_flash_width_diff.push(max_right-w-left_b);
	for (l=0; l<selected_flash.length; l++) { 
	   box_w = $("#authoring_flashbox"+selected_flash[l]).css('width');
	   w = Number(box_w.substr(0,box_w.length-2))
	   $("#authoring_flashbox"+selected_flash[l]).css('left',max_right-w);
	   selected_flash_width_diff.push(max_right-w-left_b);		
	} 
  }	
}

function alignTop() {
	
 if (div_type=='bigbox') {	
	top_b = $("#authoring_bigbox").css("top").substr(0,$("#authoring_bigbox").css("top").length-2);
	
	selected_height_diff = new Array();
	for (l=0; l<selected.length; l++) {  
	   $("#authoring_box"+selected[l]).css('top',min_top);
	   selected_height_diff.push(0);
	   	
	}
	
	selected_images_height_diff = new Array();
	for (l=0; l<selected_images.length; l++) {  
	   $("#authoring_imagebox"+selected_images[l]).css('top',min_top);
	   selected_images_height_diff.push(0);
	}
	
		
	selected_flash_height_diff = new Array();
	for (l=0; l<selected_flash.length; l++) {  
	   $("#authoring_flashbox"+selected_flash[l]).css('top',min_top);
	   selected_flash_height_diff.push(0);
	}
  }	
}


function alignDown() {
  if (div_type=='bigbox') {  
    top_b = $("#authoring_bigbox").css("top").substr(0,$("#authoring_bigbox").css("top").length-2);
    
    selected_height_diff = new Array();
	for (l=0; l<selected.length; l++) { 
	   box_h = $("#authoring_box"+selected[l]).css('height');
	   h = Number(box_h.substr(0,box_h.length-2))
	   $("#authoring_box"+selected[l]).css('top',max_down-h);	
	   selected_height_diff.push(max_down-h-top_b);	
	}
		
		
	selected_images_height_diff = new Array();
	for (l=0; l<selected_images.length; l++) { 
	   box_h = $("#authoring_imagebox"+selected_images[l]).css('height');
	   h = Number(box_h.substr(0,box_h.length-2))
	   $("#authoring_imagebox"+selected_images[l]).css('top',max_down-h);
	   selected_images_height_diff.push(max_down-h-top_b);		
	}
	
	selected_flash_height_diff.push(max_down-h-top_b);
	for (l=0; l<selected_flash.length; l++) { 
	   box_h = $("#authoring_flashbox"+selected_flash[l]).css('height');
	   h = Number(box_h.substr(0,box_h.length-2))
	   $("#authoring_flashbox"+selected_flash[l]).css('top',max_down-h);
	   selected_flash_height_diff.push(max_down-h-top_b);		
	}
  }
}




function in_array(item,arr) {
	inarr = false;
	for (j=0; j<arr.length; j++) {
	  if (arr[j]==item) inarr = true;
	}
	return inarr;
}



//setzindex for imageboxes - selected od top
function setVideoZindex() {

 
  var myIFrame = document.getElementById("iView");
  var iframe_body_html = myIFrame.contentWindow.document.body.innerHTML;

  if ((selected_div!='') && (div_from=='t'))  {  
    $("#text"+selected_div).html(iframe_body_html);
    $("#text"+selected_div).css('visibility','');
  }
	
  $("#context_menu").css("visibility","hidden");
  $("#shape_menu").css("visibility","hidden");
  	
  div_from = 'v';	
  div_type = 'v';
  	
	
  
  $("#authoring_bigbox").remove();
  drag_status = 'normal';

 
  for (k=1; k<=counter; k++) {
    $('#authoring_box'+k).css('z-index',k);
    $('#authoring_box'+k+' .handle-nw').css('visibility','hidden');
    $('#authoring_box'+k+' .handle-ne').css('visibility','hidden');
    $('#authoring_box'+k+' .handle-sw').css('visibility','hidden');
    $('#authoring_box'+k+' .handle-se').css('visibility','hidden');
    $('#authoring_box'+k+' .jqHandle-top').css('visibility','hidden');
    $('#authoring_box'+k+' .jqHandle-bottom').css('visibility','hidden');
    $('#authoring_box'+k+' .jqHandle-left').css('visibility','hidden');
    $('#authoring_box'+k+' .jqHandle-right').css('visibility','hidden');
  }
  

  for (k=1; k<=imagecounter; k++) {
      $('#authoring_imagebox'+k).css('z-index',k);
      $('#authoring_imagebox'+k+' .handle-nw').css('visibility','hidden');
      $('#authoring_imagebox'+k+' .handle-ne').css('visibility','hidden');
      $('#authoring_imagebox'+k+' .handle-sw').css('visibility','hidden');
      $('#authoring_imagebox'+k+' .handle-se').css('visibility','hidden');
      $('#authoring_imagebox'+k+' .jqHandle-top').css('visibility','hidden');
      $('#authoring_imagebox'+k+' .jqHandle-bottom').css('visibility','hidden');
      $('#authoring_imagebox'+k+' .jqHandle-left').css('visibility','hidden');
      $('#authoring_imagebox'+k+' .jqHandle-right').css('visibility','hidden');
  }
  
  
  $('#authoring_videobox').css('z-index','9999');
  $('#authoring_videobox .handle-nw').css('visibility','');
  $('#authoring_videobox .handle-ne').css('visibility','');
  $('#authoring_videobox .handle-sw').css('visibility','');
  $('#authoring_videobox .handle-se').css('visibility','');
  $('#authoring_videobox .jqHandle-top').css('visibility','');
  $('#authoring_videobox .jqHandle-bottom').css('visibility','');
  $('#authoring_videobox .jqHandle-left').css('visibility','');
  $('#authoring_videobox .jqHandle-right').css('visibility','');

  $("#iView").css('visibility','hidden');
  $("#iView").css('z-index','-1000');
   

  hideAudioDivs(new Array()); 
  
}




//setzindex for imageboxes - selected od top
function setAudioZindex(item_str) {
	  
  div_from = 'a';	
  	
  it = item_str.substr(1)	
  i_typ = item_str.substr(0,1);
  
  $("#authoring_bigbox").remove();
  drag_status = 'normal';
  
  $('#authoring_audiobox'+it).css('filter','alpha(opacity=70)');
  $('#authoring_audiobox'+it).css('opacity','0.7'); 
  
  
  hideFlashDivs(new Array());
  hideDivs(new Array(),'');
  hideImageDivs(new Array());
  hideVideoDiv(new Array());
    
  
  for (k=1; k<=imagecounter; k++) {
  	if (k==it) {
  	  $('#authoring_audiobox'+k).css('z-index','1000');
  	}
	
	else {  
	  $('#authoring_audiobox'+k).css('z-index',k);
      $('#authoring_audiobox'+k+' .jqHandle-top').css('visibility','hidden');
      $('#authoring_audiobox'+k+' .jqHandle-bottom').css('visibility','hidden');
      $('#authoring_audiobox'+k+' .jqHandle-left').css('visibility','hidden');
      $('#authoring_audiobox'+k+' .jqHandle-right').css('visibility','hidden');
    }  
  }
    
  
  
  	 
}
	
	


//setzindex for imageboxes - selected od top
function setImageZindex(item_str) {
	
	
  $("#context_menu").css("visibility","hidden");
  $("#shape_menu").css("visibility","hidden");
  	
  div_from = 'i';	
  	  	
  
  it = item_str.substr(1);
  i_typ = item_str.substr(0,1);
  	
  
  $("#authoring_bigbox").remove();
  drag_status = 'normal';
  
  $('#authoring_imagebox'+it).css('filter','alpha(opacity=70)');
  $('#authoring_imagebox'+it).css('opacity','0.7'); 
 

  
  for (k=1; k<=counter; k++) {
    $('#authoring_box'+k).css('z-index',k);
    $('#authoring_box'+k+' .handle-nw').css('visibility','hidden');
    $('#authoring_box'+k+' .handle-ne').css('visibility','hidden');
    $('#authoring_box'+k+' .handle-sw').css('visibility','hidden');
    $('#authoring_box'+k+' .handle-se').css('visibility','hidden');
    $('#authoring_box'+k+' .jqHandle-top').css('visibility','hidden');
    $('#authoring_box'+k+' .jqHandle-bottom').css('visibility','hidden');
    $('#authoring_box'+k+' .jqHandle-left').css('visibility','hidden');
    $('#authoring_box'+k+' .jqHandle-right').css('visibility','hidden');
    
    $('#authoring_box'+it).css('filter','alpha(opacity=70)');
    $('#authoring_box'+it).css('opacity','0.7');
  }
  
  for (k=1; k<=imagecounter; k++) {
  	if (k==it) {
  	  $('#authoring_imagebox'+k).css('z-index','1000');
  	}
	
	else {  
		
	  $('#authoring_imagebox'+k).css('z-index',k);
      $('#authoring_imagebox'+k+' .handle-nw').css('visibility','hidden');
      $('#authoring_imagebox'+k+' .handle-ne').css('visibility','hidden');
      $('#authoring_imagebox'+k+' .handle-sw').css('visibility','hidden');
      $('#authoring_imagebox'+k+' .handle-se').css('visibility','hidden');
      $('#authoring_imagebox'+k+' .jqHandle-top').css('visibility','hidden');
      $('#authoring_imagebox'+k+' .jqHandle-bottom').css('visibility','hidden');
      $('#authoring_imagebox'+k+' .jqHandle-left').css('visibility','hidden');
      $('#authoring_imagebox'+k+' .jqHandle-right').css('visibility','hidden');
    }  
  }
  
  
  hideVideoDiv();
  
  selected_div = it;

}



//setzindex for textboxes - selected on top, iframe select for text editing 
function setZindex(item_str) {
 
  $("#context_menu").css("visibility","hidden");
  $("#shape_menu").css("visibility","hidden");
 
  div_from = 't';
  
  s_item = item_str.substr(1,1)
   
  i_typ = item_str.substr(0,1);
 	   
  $("#authoring_bigbox").remove();
  
  $('#authoring_box'+s_item).css('filter','alpha(opacity=70)');
  $('#authoring_box'+s_item).css('opacity','0.7');
  
  
    
  
  drag_status = 'normal';
 
  for (k=1; k<=counter; k++) {
    if (k==s_item) {
  
	   $('#authoring_box'+k).css('z-index','1000');
    	
	   selected_div_left_str = $('#authoring_box'+k).css('left');   
	   selected_div_left = Number(selected_div_left_str.substr(0,selected_div_left_str.length-2));
	   
	   selected_div_top_str = $('#authoring_box'+k).css('top');   
	   selected_div_top = Number(selected_div_top_str.substr(0,selected_div_top_str.length-2));
	   
	   selected_div_left = selected_div_left + 10;
	   selected_div_top = selected_div_top + 10;
	   
	   selected_div_width_str = $('#authoring_box'+k).css('width');   
	   selected_div_width = Number(selected_div_width_str.substr(0,selected_div_width_str.length-2));
	   
	   selected_div_height_str = $('#authoring_box'+k).css('height');   
	   selected_div_height = Number(selected_div_height_str.substr(0,selected_div_height_str.length-2));
	   
	   selected_div_width = selected_div_width - 25;
	   selected_div_height = selected_div_height - 30;
	   
	   selected_div = k;
	   


  
	   $("iframe#iView").css('display','');
	   $("iframe#iView").css('visibility',''); 
       $("iframe#iView").css('z-index','1500');
	   
	   
	   if (div_type!='bigbox')
	   $("#text"+s_item).css('visibility','hidden');
	   
	   var myIFrame = document.getElementById("iView");
       myIFrame.contentWindow.document.body.innerHTML = $("#text"+s_item).html();
       myIFrame.contentWindow.document.body.setAttribute("style","background-color:transparent");
       myIFrame.setAttribute("allowtransparency","true");
	   	   
	   
       browser = navigator.appName;
	   
	   if(browser == "Microsoft Internet Explorer")  {
	   	 
	   	 $("iframe#iView").css('position','absolute');
	     $("iframe#iView").css('left',selected_div_left-2);
	     $("iframe#iView").css('top',selected_div_top-7);
	     $("iframe#iView").css('width',selected_div_width);
	     $("iframe#iView").css('height',selected_div_height);
	   	 	   	
	   }
	   	
	   else {	   	
	   
	     $("iframe#iView").css('position','absolute');
	     $("iframe#iView").css('left',selected_div_left);
	     $("iframe#iView").css('top',selected_div_top);
	     $("iframe#iView").css('width',selected_div_width);
	     $("iframe#iView").css('height',selected_div_height);
	   }  
   
    
    
       if (myIFrame && myIFrame.contentWindow) {  
          Editor = myIFrame.contentWindow.document;
          Editor.designMode = 'On';
        }
       else if( frames['iView'] )  {  
          frames['iView'].document.designMode='On';
          Editor = frames['iView'].document;
       }

    
  	   //buttons clickable  	   
      
	   $("#authoring_buttons_clickable").css('visibility','visible'); //visible 
       $("#authoring_buttons_clickable").css('display','inline'); //visible
       $("#authoring_buttons").css('visibility','hidden');
       $("#authoring_buttons").css('display','none');

       $("#authoring_buttons3_clickable").css('visibility','hidden');  
       $("#authoring_buttons3_clickable").css('display','none');
       $("#authoring_buttons3").css('visibility','visible');
       $("#authoring_buttons3").css('display','inline');

       $("#authoring_buttons2_clickable").css('visibility','visible');  
       $("#authoring_buttons2_clickable").css('display','inline');
       $("#fontsize_form_div").css('display','inline');
       $("#authoring_buttons2").css('visibility','hidden');
       $("#authoring_buttons2").css('display','none');



    } 	
    else {
   	
   	
 	 $('#authoring_box'+k).css('z-index',counter);
   	  $('#authoring_box'+k+' .handle-nw').css('visibility','hidden');
      $('#authoring_box'+k+' .handle-ne').css('visibility','hidden');
      $('#authoring_box'+k+' .handle-sw').css('visibility','hidden');
      $('#authoring_box'+k+' .handle-se').css('visibility','hidden');
      $('#authoring_box'+k+' .jqHandle-top').css('visibility','hidden');
      $('#authoring_box'+k+' .jqHandle-bottom').css('visibility','hidden');
      $('#authoring_box'+k+' .jqHandle-left').css('visibility','hidden');
      $('#authoring_box'+k+' .jqHandle-right').css('visibility','hidden');
     
     
      $('#authoring_box'+k).css('filter','alpha(opacity=50)');
	  $('#authoring_box'+k).css('opacity','0.5');
   	} 
  }	
  
  
 
}


   function print_r(theObj){ 
   if(theObj.constructor == Array || theObj.constructor == Object){ 
      document.write("<ul>") 
      for(var p in theObj){ 
         if(theObj[p].constructor == Array || theObj[p].constructor == Object){ 
            document.write("<li>["+p+"] => "+typeof(theObj)+"</li>"); 
            document.write("<ul>") 
            print_r(theObj[p]); 
            document.write("</ul>") 
         } else { 
            document.write("<li>["+p+"] => "+theObj[p]+"</li>"); 
         } 
      } 
      document.write("</ul>") 
   }   
} 



function changeHeading() {
   
   var sel_heading = $("#heading_select :selected").text(); 
  
  
  
	
   browser = navigator.appName;


   if ((browser == "Netscape") || (browser=="Opera")) {

	  var element = document.getElementById("iView");
      var range = element.contentWindow.getSelection().getRangeAt(0);  
  
     
      var iframe_window = window.frames["iView"];
      var myIFrame = document.getElementById("iView");
      iframe_document = document.getElementById('iView').contentDocument;
      var iframe_content = myIFrame.contentWindow.document.body.innerHTML;
     
      
      var selected_obj = document.getElementById("iView");

      if (selected_obj.contentWindow) {
        selected_obj = selected_obj.contentWindow.window.getSelection();
      }
      else {
         selected_obj = selected_obj.contentDocument.window.getSelection();
      }
      
     
      range = selected_obj.getRangeAt(0);

      if (sel_heading == "Heading 1") newNode = iframe_window.document.createElement("h1");
      if (sel_heading == "Heading 2") newNode = iframe_window.document.createElement("h2");
      if (sel_heading == "Heading 3") newNode = iframe_window.document.createElement("h3");
      if (sel_heading == "Heading 4") newNode = iframe_window.document.createElement("h4");
      if (sel_heading == "Heading 5") newNode = iframe_window.document.createElement("h5");
      if (sel_heading == "Heading 6") newNode = iframe_window.document.createElement("h6");
      
            
      
      //newNode.style.fontSize = ssize;   
      newNode.appendChild(range.extractContents());
      range.insertNode(newNode);
      selectNode(newNode);
 

   }
   
    else if(browser == "Microsoft Internet Explorer")
    {  
       var ran = Editor.selection.createRange();
       if (sel_heading == "Heading 1") ran.pasteHTML('<h1 id="myh'+editor_change_counter+'">'+ran.text+'</h1>');
       if (sel_heading == "Heading 2") ran.pasteHTML('<h2 id="myh'+editor_change_counter+'">'+ran.text+'</h2>');
       if (sel_heading == "Heading 3") ran.pasteHTML('<h3 id="myh'+editor_change_counter+'">'+ran.text+'</h3>');
       if (sel_heading == "Heading 4") ran.pasteHTML('<h4 id="myh'+editor_change_counter+'">'+ran.text+'</h4>');
       if (sel_heading == "Heading 5") ran.pasteHTML('<h5 id="myh'+editor_change_counter+'">'+ran.text+'</h5>');
       if (sel_heading == "Heading 6") ran.pasteHTML('<h6 id="myh'+editor_change_counter+'">'+ran.text+'</h6>');
       
    
	   var spanRange = ran.duplicate();
       sel = Editor.getElementById("myh"+editor_change_counter);
       spanRange.moveToElementText(sel);
       spanRange.select();
    
       editor_change_counter++;

    } 
	

	
	
}







function changeFont() {

     
   var sel_font = $("#font_select :selected").text(); 
   var ffont;
   
   
 
   if (sel_font == 'Times New RomanTimes New Roman')  ffont = 'times new roman';
   if (sel_font == 'Times New RomanSerif')  ffont = 'sans serif';
   if (sel_font == 'Times New RomanCourier New')  ffont = 'courier';
   if (sel_font == 'Times New RomanGeorgia')  ffont = 'georgia';
   if (sel_font == 'Times New RomanTrebuchet')  ffont = 'trebuchet';
   if (sel_font == 'Times New RomanVerdana')  ffont = 'verdana';
   if (sel_font == 'Times New RomanComic Sans Ms')  ffont = 'comic sans ms';

   
   browser = navigator.appName;


   if ((browser == "Netscape") || (browser == "Opera")) {

     
	  var element = document.getElementById("iView");
      var range = element.contentWindow.getSelection().getRangeAt(0);  

      var iframe_window = window.frames["iView"];
      var myIFrame = document.getElementById("iView");
      iframe_document = document.getElementById('iView').contentDocument
      var iframe_content = myIFrame.contentWindow.document.body.innerHTML;
     
      var selected_obj = document.getElementById("iView");

      if (selected_obj.contentWindow) {
        selected_obj = selected_obj.contentWindow.window.getSelection();
      }
      else {
         selected_obj = selected_obj.contentDocument.window.getSelection();
      }
      
     
      range = selected_obj.getRangeAt(0);

      newNode = iframe_window.document.createElement("span");
      newNode.style.fontFamily = ffont; 
      newNode.appendChild(range.extractContents());
      range.insertNode(newNode);
      selectNode(newNode);      
	  
	  
	  
	  
	  
	  
	  

   	  
    
    }
    
    else if(browser == "Microsoft Internet Explorer")
    { 
       Editor.execCommand("fontname", false, ffont);
    } 		
	
	
}


function createLink(e) {
	
 browser = navigator.appName;
 	
 if(e.target){ //get ATL
	
	var element = document.getElementById("iView");
    var a = element.contentWindow.getSelection().getRangeAt(0);
	var range = a;
	
	var b = range.toString();  

    var z = document.createElement("span");  
    var l2 = prompt("Enter URL:", "http://");
    
    //alert('ddd');
    
 	b = b.link(l2);
	z.innerHTML=b;
	a.deleteContents();   
	a.insertNode(z);

 }
	
	
 else { //get the ATW
        document.execCommand("CreateLink");
		
	 }
	  
	 
}
	
	
	


function selectNode(node) {
	
  var iframe_document = document.getElementById('iView').contentDocument;	
  var element = document.getElementById("iView");
  var newrange = iframe_document.createRange();
  newrange.selectNodeContents(node);   
  var sel = element.contentWindow.getSelection();
  sel.removeAllRanges();
  sel.addRange(newrange);
	
}



function changeFontSize() {
 
   
   
   var selected = $("#size_select :selected").text(); 
   var sel_font = selected.substr(4,2);
   
   
   
   var ssize;
 
   if (sel_font == '10')  ssize = '10pt';
   if (sel_font == '12')  ssize = '12pt';
   if (sel_font == '14')  ssize = '14pt';
   if (sel_font == '18')  ssize = '18pt';
   if (sel_font == '20')  ssize = '20pt';
   if (sel_font == '22')  ssize = '22pt';
   if (sel_font == '24')  ssize = '24pt';
   if (sel_font == '26')  ssize = '26pt';
   if (sel_font == '28')  ssize = '28pt';
   if (sel_font == '32')  ssize = '32pt';
   if (sel_font == '36')  ssize = '36pt';
   if (sel_font == '37')  ssize = '37pt';
   if (sel_font == '40')  ssize = '40pt';
   if (sel_font == '48')  ssize = '48pt';
   if (sel_font == '64')  ssize = '64pt';
   if (sel_font == '96')  ssize = '96pt';
   if (sel_font == 'cu')  ssize = prompt('Enter size (in points)', '')+'pt';

   
   browser = navigator.appName;


   if ((browser == "Netscape") || (browser=="Opera")) {

      var element = document.getElementById("iView");
      var range = element.contentWindow.getSelection().getRangeAt(0);  
  
     
      var iframe_window = window.frames["iView"];
      var myIFrame = document.getElementById("iView");
      iframe_document = document.getElementById('iView').contentDocument;
      var iframe_content = myIFrame.contentWindow.document.body.innerHTML;
     
      
      var selected_obj = document.getElementById("iView");

      if (selected_obj.contentWindow) {
        selected_obj = selected_obj.contentWindow.window.getSelection();
      }
      else {
         selected_obj = selected_obj.contentDocument.window.getSelection();
      }
      
     
      range = selected_obj.getRangeAt(0);

      newNode = iframe_window.document.createElement("span");
      newNode.style.fontSize = ssize;   
      newNode.appendChild(range.extractContents());
      range.insertNode(newNode);
      selectNode(newNode);
 

   }
   
    else if(browser == "Microsoft Internet Explorer")
    {  
       var ran = Editor.selection.createRange();
       ran.pasteHTML('<span style="font-size:'+ssize+';" id="myspan'+editor_change_counter+'">'+ran.text+'</span>');
    
	   var spanRange = ran.duplicate();
       sel = Editor.getElementById("myspan"+editor_change_counter);
       spanRange.moveToElementText(sel);
       spanRange.select();
    
       editor_change_counter++;

    } 		
	
}



 
function buttons_noactive() {

$("#authoring_buttons3_clickable").css('visibility','visible'); //visible  
$("#authoring_buttons3_clickable").css('display','inline'); //visible
$("#authoring_buttons3").css('visibility','hidden');
$("#authoring_buttons3").css('display','none');
       
$("#authoring_buttons").css('visibility','visible'); //visible  
$("#authoring_buttons").css('display','inline'); //visible
$("#authoring_buttons_clickable").css('visibility','hidden');
$("#authoring_buttons_clickable").css('display','none');
            
$("#authoring_buttons2").css('visibility','visible'); //visible  
$("#authoring_buttons2").css('display','inline'); //visible

$("#authoring_buttons2_clickable").css('visibility','hidden');
$("#authoring_buttons2_clickable").css('display','none');
    
    
$("#fontsize_form_div").css('display','none');

	
}


function buttons_active() {
	
  $("#authoring_buttons_clickable").css('visibility','hidden'); 
  $("#authoring_buttons_clickable").css('display','none'); 
  $("#authoring_buttons").css('visibility','hidden');
  $("#authoring_buttons").css('display','none');


  $("#authoring_buttons3_clickable").css('visibility','hidden');  
  $("#authoring_buttons3_clickable").css('display','none');
  $("#authoring_buttons3").css('visibility','hidden');
  $("#authoring_buttons3").css('display','none');
  

  $("#authoring_buttons2_clickable").css('visibility','hidden');  
  $("#authoring_buttons2_clickable").css('display','none');
  $("#authoring_buttons2").css('visibility','hidden');
  $("#authoring_buttons2").css('display','none');
	  
  $("#authoring_buttons4_clickable").css('visibility','visible');  
  $("#authoring_buttons4_clickable").css('display','inline');
  $("#authoring_buttons4_clickable").css('float','left');

	
}


function insertImage(file) {

	$('#authoring-content .authoring-panes .authoring-pane #authoring-edit-area #temp_image').html('<img id="tmp" src="../editor/uploads/'+file+'"');  
    window.setTimeout("inImage('"+file+"')",1800);
}


function insertImageBack(file) {
	
	
	
	
}


//divs multiselect
function hideDivs(data,newdiv) {



  for (i=1; i<=counter; i++) {
	
    if (in_array(i,data)==false) {	
   
      $('#authoring_box'+i+' .handle-nw').css('visibility','hidden');
      $('#authoring_box'+i+' .handle-ne').css('visibility','hidden');
      $('#authoring_box'+i+' .handle-sw').css('visibility','hidden');
      $('#authoring_box'+i+' .handle-se').css('visibility','hidden');
      $('#authoring_box'+i+' .jqHandle-top').css('visibility','hidden');
      $('#authoring_box'+i+' .jqHandle-bottom').css('visibility','hidden');
      $('#authoring_box'+i+' .jqHandle-left').css('visibility','hidden');
      $('#authoring_box'+i+' .jqHandle-right').css('visibility','hidden');
    
      $('#authoring_box'+i).css('z-index',counter);   	
	
   }		 
   else { 
      $('#authoring_box'+i).css('z-index','1000');
      $('#authoring_box'+i+' .handle-nw').css('visibility','');
      $('#authoring_box'+i+' .handle-ne').css('visibility','');
      $('#authoring_box'+i+' .handle-sw').css('visibility','');
      $('#authoring_box'+i+' .handle-se').css('visibility','');
      $('#authoring_box'+i+' .jqHandle-top').css('visibility','');
      $('#authoring_box'+i+' .jqHandle-bottom').css('visibility','');
      $('#authoring_box'+i+' .jqHandle-left').css('visibility','');
      $('#authoring_box'+i+' .jqHandle-right').css('visibility','');
   }
   
   if (drag_status == 'bigbox')  {
   	   $('#authoring_box'+i+' .handle-nw').css('visibility','hidden');
       $('#authoring_box'+i+' .handle-ne').css('visibility','hidden');
       $('#authoring_box'+i+' .handle-sw').css('visibility','hidden');
       $('#authoring_box'+i+' .handle-se').css('visibility','hidden');
       
       $('#authoring_box'+i+' .jqHandle-top').css('background','#dcdcdc');
       $('#authoring_box'+i+' .jqHandle-bottom').css('background','#dcdcdc');
       $('#authoring_box'+i+' .jqHandle-left').css('background','#dcdcdc');
       $('#authoring_box'+i+' .jqHandle-right').css('background','#dcdcdc');
   }
  }
  
  var myIFrame = document.getElementById("iView");
  var iframe_body_html = myIFrame.contentWindow.document.body.innerHTML;
    
    
    
  //editable iframe - for OPERA  
   
  if (typeof(opera) == "undefined") {
  	
  	
  }
  
  
  else { 
  
    if (opera && opera.toString()=="[object Opera]"){
    
     frames['iView'].document.designMode='On';
    }

  }

  
     
   
     

  if (newdiv=='newdiv') {
  	  
	  var myIFrame = document.getElementById("iView");
      myIFrame.contentWindow.document.body.innerHTML = '';
    
  	
  }
  
  
  var ttyp = div_type.substr(0,1);
  
  
  if (ttyp=='t') {
 
  
   
   //$("#text"+selected_div).html(iframe_body_html);
   $("#text"+selected_div).css("visibility","");
 
   $("#iView").css('visibility','hidden');
   $("#iView").css('z-index','-1000');
   
   	 

   $("#authoring_buttons_clickable").css('visibility','hidden'); //visible 
   $("#authoring_buttons_clickable").css('display','none'); //visible
   $("#authoring_buttons").css('visibility','visible');
   $("#authoring_buttons").css('display','inline');

   $("#authoring_buttons3_clickable").css('visibility','visible');  
   $("#authoring_buttons3_clickable").css('display','inline');
   $("#authoring_buttons3").css('visibility','hidden');
   $("#authoring_buttons3").css('display','none');

   $("#authoring_buttons2_clickable").css('visibility','hidden');  
   $("#vbuttons2_clickable").css('display','none');
   $("#fontsize_form_div").css('display','none');
   $("#authoring_buttons2").css('visibility','visible');
   $("#authoring_buttons2").css('display','inline');
   
   
   
   
   
   
   
   
  }
 
  
   
  
}


//imagedivs multiselect
function hideImageDivs(data) {
   
  for (i=1; i<=imagecounter; i++) {
	if (in_array(i,data)==false) {	
      $('#authoring_imagebox'+i+' .handle-nw').css('visibility','hidden');
      $('#authoring_imagebox'+i+' .handle-ne').css('visibility','hidden');
      $('#authoring_imagebox'+i+' .handle-sw').css('visibility','hidden');
      $('#authoring_imagebox'+i+' .handle-se').css('visibility','hidden');
      $('#authoring_imagebox'+i+' .jqHandle-top').css('visibility','hidden');
      $('#authoring_imagebox'+i+' .jqHandle-bottom').css('visibility','hidden');
      $('#authoring_imagebox'+i+' .jqHandle-left').css('visibility','hidden');
      $('#authoring_imagebox'+i+' .jqHandle-right').css('visibility','hidden');
    
      //$('#imagebox'+i).css('z-index',counter);   	
  }		 
   else { 
      $('#authoring_imagebox'+i).css('z-index','1000');
   	  $('#authoring_imagebox'+i+' .handle-nw').css('visibility','');
      $('#authoring_imagebox'+i+' .handle-ne').css('visibility','');
      $('#authoring_imagebox'+i+' .handle-sw').css('visibility','');
      $('#authoring_imagebox'+i+' .handle-se').css('visibility','');
      $('#authoring_imagebox'+i+' .jqHandle-top').css('visibility','');
      $('#authoring_imagebox'+i+' .jqHandle-bottom').css('visibility','');
      $('#authoring_imagebox'+i+' .jqHandle-left').css('visibility','');
      $('#authoring_imagebox'+i+' .jqHandle-right').css('visibility','');
   }

   if (drag_status == 'bigbox')  {
      $('#authoring_imagebox'+i+' .handle-nw').css('visibility','hidden');
      $('#authoring_imagebox'+i+' .handle-ne').css('visibility','hidden');
      $('#authoring_imagebox'+i+' .handle-sw').css('visibility','hidden');
      $('#authoring_imagebox'+i+' .handle-se').css('visibility','hidden');
       
      $('#authoring_imagebox'+i+' .jqHandle-top').css('background','#dcdcdc');
      $('#authoring_imagebox'+i+' .jqHandle-bottom').css('background','#dcdcdc');
      $('#authoring_imagebox'+i+' .jqHandle-left').css('background','#dcdcdc');
      $('#authoring_imagebox'+i+' .jqHandle-right').css('background','#dcdcdc');
   }   
 }
}


function hideVideoDiv() {    
	 $('#authoring_videobox').css('z-index','1');
	 $('#authoring_videobox .jqHandle-top').css('visibility','hidden');
     $('#authoring_videobox .jqHandle-bottom').css('visibility','hidden');
     $('#authoring_videobox .jqHandle-left').css('visibility','hidden');
     $('#authoring_videobox .jqHandle-right').css('visibility','hidden');
     //$('#videobox').css('z-index',counter);   	
}



//flashdivs multiselect
function hideFlashDivs(data) {
   
  for (i=1; i<=flashcounter; i++) {
   if (in_array(i,data)==false) {	
     $('#authoring_flashbox'+i+' .handle-nw').css('visibility','hidden');
     $('#authoring_flashbox'+i+' .handle-ne').css('visibility','hidden');
     $('#authoring_flashbox'+i+' .handle-sw').css('visibility','hidden');
     $('#authoring_flashbox'+i+' .handle-se').css('visibility','hidden');
     $('#authoring_flashbox'+i+' .jqHandle-top').css('visibility','hidden');
     $('#authoring_flashbox'+i+' .jqHandle-bottom').css('visibility','hidden');
     $('#authoring_flashbox'+i+' .jqHandle-left').css('visibility','hidden');
     $('#authoring_flashbox'+i+' .jqHandle-right').css('visibility','hidden');
    
     $('#authoring_flashbox'+i).css('z-index',counter);   	
   }		 
   else { 
     $('#authoring_flashbox'+i).css('z-index','1000');
   	 $('#authoring_flashbox'+i+' .handle-nw').css('visibility','');
     $('#authoring_flashbox'+i+' .handle-ne').css('visibility','');
     $('#authoring_flashbox'+i+' .handle-sw').css('visibility','');
     $('#authoring_flashbox'+i+' .handle-se').css('visibility','');
     $('#authoring_flashbox'+i+' .jqHandle-top').css('visibility','');
     $('#authoring_flashbox'+i+' .jqHandle-bottom').css('visibility','');
     $('#authoring_flashbox'+i+' .jqHandle-left').css('visibility','');
     $('#authoring_flashbox'+i+' .jqHandle-right').css('visibility','');
   }

   if (drag_status == 'bigbox')  {
	 $('#authoring_flashbox'+i+' .handle-nw').css('visibility','hidden');
     $('#authoring_flashbox'+i+' .handle-ne').css('visibility','hidden');
     $('#authoring_flashbox'+i+' .handle-sw').css('visibility','hidden');
     $('#authoring_flashbox'+i+' .handle-se').css('visibility','hidden');
       
     $('#authoring_flashbox'+i+' .jqHandle-top').css('background','#dcdcdc');
     $('#authoring_flashbox'+i+' .jqHandle-bottom').css('background','#dcdcdc');
     $('#authoring_flashbox'+i+' .jqHandle-left').css('background','#dcdcdc');
     $('#authoring_flashbox'+i+' .jqHandle-right').css('background','#dcdcdc');
   }   
  }
}




//flashdivs multiselect
function hideAudioDivs(data) {


  for (i=1; i<=audiocounter; i++) {
   if (in_array(i,data)==false) {	
     $('#authoring_audiobox'+i+' .jqHandle-top').css('visibility','hidden');
     $('#authoring_audiobox'+i+' .jqHandle-bottom').css('visibility','hidden');
     $('#authoring_audiobox'+i+' .jqHandle-left').css('visibility','hidden');
     $('#authoring_audiobox'+i+' .jqHandle-right').css('visibility','hidden');
  
     $('#audiobox'+i).css('z-index',audiocounter);   	
   }		 
   else { 
     $('#authoring_audiobox'+i).css('z-index','1000');
   	 $('#authoring_audiobox'+i+' .jqHandle-top').css('visibility','');
     $('#authoring_audiobox'+i+' .jqHandle-bottom').css('visibility','');
     $('#authoring_audiobox'+i+' .jqHandle-left').css('visibility','');
     $('#authoring_audiobox'+i+' .jqHandle-right').css('visibility','');
     
     div_type = 'a'+imagecounter;
     selected_div = i;
   }

   if (drag_status == 'bigbox')  {
	 $('#authoring_audiobox'+i+' .jqHandle-top').css('background','#dcdcdc');
     $('#authoring_audiobox'+i+' .jqHandle-bottom').css('background','#dcdcdc');
     $('#authoring_audiobox'+i+' .jqHandle-left').css('background','#dcdcdc');
     $('#authoring_audiobox'+i+' .jqHandle-right').css('background','#dcdcdc');
   }   
  }
}



//save div content from iframe, where click from one div to another  - flash
function saveFlashDivContent(s_div) {
	
	var myIFrame = document.getElementById("iView");
    var iframe_body_html = myIFrame.contentWindow.document.body.innerHTML;
 
    if ((div_from=='t')) { 
   	  $("#text"+s_div).html(iframe_body_html);
	  $("#text"+s_div).css('visibility','');
	}  
	
	$("#iView").css('visibility','hidden');
    $("#iView").css('z-index','-1000');
	
	
	
	hideDivs(new Array());
	hideImageDivs(new Array());
	hideFlashDivs(new Array());
	hideVideoDiv();
	hideAudioDivs(new Array());
}




//save div content from iframe, where click from one div to another - text
function saveDivContent(s_div,actual) {

    s_div = selected_div;

	div_type = 't'+actual;
 				
	if (s_div!=actual) {

	 // var iframe_window = window.frames["iView"];
     // var iframe_body_html = iframe_window.document.getElementsByTagName("body")[0].innerHTML;
     
	 
	  var myIFrame = document.getElementById("iView");
      var iframe_body_html = myIFrame.contentWindow.document.body.innerHTML;
      myIFrame.setAttribute("allowTransparency","true");
      
    
	  if (div_from=='t')   {	
  	   // $("#text"+s_div).html(iframe_body_html);
   	    
		  if ($("iframe#iView").css('visibility')=='visible') $("#text"+s_div).html(iframe_body_html); 
		  $("#text"+s_div).css('visibility','');
	  }
	}
	
	
	
	hideDivs(new Array());
	hideImageDivs(new Array());
	hideFlashDivs(new Array());     
	hideVideoDiv();
	hideAudioDivs(new Array());
	
	
	
}

//save div content from iframe, where click from one div to another - images
function saveImageDivContent(s_div) {
 
  var ttyp = div_type.substr(0,1);

  var myIFrame = document.getElementById("iView");
  var iframe_body_html = myIFrame.contentWindow.document.body.innerHTML;
  
  if (div_from=='t')  {  
    $("#text"+s_div).html(iframe_body_html);
    $("#text"+s_div).css('visibility','');
  }
	 
	  
  $("#iView").css('visibility','hidden');
  $("#iView").css('z-index','-1000');
    
  	hideDivs(new Array());
	hideImageDivs(new Array());
	hideFlashDivs(new Array());
	hideVideoDiv();
    hideAudioDivs(new Array());
}


//hide all selected divs, remove bigbox (multiselect)
function clearAll() {
  $("#authoring_bigbox").remove();
  selected = new Array();
  selected_images = new Array();
  selected_flash = new Array();
}


//hide iframe for editing textboxes


function hideiframe() {

    browser = navigator.appName;
	
	$("#text"+selected_div).css('visibility','');
	
	var myIFrame = document.getElementById("iView");
    var iframe_body_html = myIFrame.contentWindow.document.body.innerHTML;
           
    $("#text"+selected_div).html(iframe_body_html);
       
    $("#iView").css('visibility','hidden');
    $("#iView").css('z-index','-1000');
    
	if(browser == "Microsoft Internet Explorer") 
	$("#iView").css('display','none');

     
}


function saveCon() {

 

}



//create new textbox
function addDiv() {
  if (selected_div!=0) saveDivContent(selected_div,0);
            
  counter++;
  
  $("#div_counter").val(counter);
  
  hideDivs(new Array(counter),'newdiv');	
  hideImageDivs(new Array());
  hideFlashDivs(new Array());
  
  
  data='<div style="z-index:1000; left:200px; top:200px; width:210px; height:210px;" id="authoring_box'+counter+'" class="authoring_box"><div id="handle'+counter+'" class="jqHandle-top jqDrag"></div><div class="jqHandle-bottom jqDrag"></div><div class="jqHandle-left jqDrag-left"></div><div class="jqHandle-right jqDrag-right"></div><div class="handle-nw"></div><div class="handle-ne"></div><div class="handle-se"></div><div class="handle-sw"></div><div class="authoring_box_text" id="text'+counter+'" style="height:190px;">&nbsp;&nbsp;&nbsp;</div></div>';	
	
  
  data2="<script type='text/javascript'> $('#authoring_box"+counter+"').jqDrag('.jqDrag'); $('#authoring_box"+counter+"').jqDrag('.jqDrag-left'); $('#authoring_box"+counter+"').jqDrag('.jqDrag-right'); $('#authoring_box"+counter+"').jqResize('.handle-nw','nw');  $('#authoring_box"+counter+"').jqResize('.handle-ne','ne');  $('#authoring_box"+counter+"').jqResize('.handle-se','se'); $('#authoring_box"+counter+"').jqResize('.handle-sw','sw');      $('#authoring_box"+counter+" .jqHandle-top').bind('click', function(e){ hideiframe(); });     $('#authoring_box"+counter+" .jqHandle-bottom').bind('click', function(e){ hideiframe(); });  $('#authoring_box"+counter+" .jqHandle-left').bind('click', function(e){ hideiframe(); });  $('#authoring_box"+counter+" .jqHandle-right').bind('click', function(e){ hideiframe(); });";
  

  data3 =  data2+"$('#authoring_box"+counter+" .jqHandle-bottom').bind('click',saveCon);  $('#authoring_box"+counter+" .jqHandle-top').bind('mousedown',saveCon);  $('#authoring_box"+counter+" .jqHandle-left').bind('mousedown',saveCon);   $('#authoring_box"+counter+" .jqHandle-right').bind('mousedown',saveCon);  $('#text"+counter+"').bind('click', function(e){    if (mode=='edit') saveDivContent(selected_div,"+counter+");  if ((mode=='edit') && ($('#authoring_box"+counter+" .handle-nw').css('visibility') === 'hidden')) { $('#authoring_box"+counter+" .handle-nw').css('visibility',''); $('#authoring_box"+counter+" .handle-ne').css('visibility','');  $('#authoring_box"+counter+" .handle-sw').css('visibility','');  $('#authoring_box"+counter+" .handle-se').css('visibility',''); $('#authoring_box"+counter+" .jqHandle-top').css('visibility','');  $('#authoring_box"+counter+" .jqHandle-bottom').css('visibility','');   $('#authoring_box"+counter+" .jqHandle-left').css('visibility','');  $('#authoring_box"+counter+" .jqHandle-right').css('visibility','');    setZindex('t"+counter+"');   div_from='t';   }  else  {     }    });";
  
  data4 = data3 + "$('#authoring_box"+counter+" ').bind('contextmenu',function(e)  { if (mode=='edit') showDivContextMenu("+counter+");  }  ); <\/script>" 
    
  $("#container #lection_content").append(data);	
  $("#container #lection_content").append(data4);


    
  //alert(data);
  //alert(data4);
  
  
  
  
  browser = navigator.appName;
  
  if (browser == 'Opera') {
  
    if (myIFrame && myIFrame.contentWindow) {  
      Editor = myIFrame.contentWindow.document;
      Editor.designMode = 'On';
    }
    else if( frames['iView'] )  {  
      frames['iView'].document.designMode='On';
      Editor = frames['iView'].document;
    }

  }


  element = document.getElementById("authoring_box"+counter);
  element.oncontextmenu = function() {
	return false;
  }	
	
	
	
  var iframe_window = window.frames["iView"];
  var myIFrame = document.getElementById("iView");
  iframe_document = document.getElementById('iView').contentDocument;
  myIFrame.contentWindow.document.body.innerHTML.innerHTML = "";
  myIFrame.contentWindow.document.body.setAttribute("style","background-color:transparent");
  myIFrame.setAttribute("allowTransparency","true");
  
  $("iframe#iView").css('position','absolute');
  $("iframe#iView").css('left','210px');
  $("iframe#iView").css('top','210px');
  $("iframe#iView").css('width','185px');
  $("iframe#iView").css('height','185px');
  $("iframe#iView").css('visibility',''); 
  $("iframe#iView").css('z-index','1500');
  
  
  
  
  
  //Editor = iView.document;
  //Editor = iframe_window.document;
  //iframe_document.designmode = 'On';
 // Editor.designMode = 'On';
  
  
  var iframe_window = window.frames["iView"];
  var myIFrame = document.getElementById("iView");   

  
  browser = navigator.appName;	
  
  if(browser == "Netscape") {
 
    Editor = myIFrame.contentWindow.document; 
    Editor.designMode = 'On';
    Editor.body.contentEditable = 'true';
    
  }   

 
  
  $("#authoring_buttons_clickable").css('visibility','visible'); //visible 
  $("#authoring_buttons_clickable").css('display','inline'); //visible
  $("#authoring_buttons").css('visibility','hidden');
  $("#authoring_buttons").css('display','none');

  $("#authoring_buttons3_clickable").css('visibility','hidden');  
  $("#authoring_buttons3_clickable").css('display','none');
  $("#authoring_buttons3").css('visibility','visible');
  $("#authoring_buttons3").css('display','inline');

  $("#authoring_buttons2_clickable").css('visibility','visible');  
  $("#authoring_buttons2_clickable").css('display','inline');
  $("#fontsize_form_div").css('display','inline');
  $("#authoring_buttons2").css('visibility','hidden');
  $("#authoring_buttons2").css('display','none');
  
  
  
 
  
  div_from = 't';	
  div_type = 't'+counter;
  selected_div = counter;	
  
  //clearAll();	
	
}	



//create new imagebox
function addImageDiv(filename, width, height) {

  imagecounter++;
    
  $("#image_counter").val(imagecounter);  

  width = width + 5;
  height = height + 5;
  
  data='<div style="position: absolute;  left: 200px;   top: 200px;  width: '+width+'px;  height: '+height+'px; z-index:1000" id="authoring_imagebox'+imagecounter+'" class="authoring_imagebox"><input type="hidden" name="authoring_imageboxfile'+imagecounter+'" id="authoring_imageboxfile'+imagecounter+'" value="'+filename+'" /><div id="handle'+imagecounter+'" class="jqHandle-top jqDrag"></div><div class="jqHandle-bottom jqDrag"></div><div class="jqHandle-left jqDrag-left"></div><div class="jqHandle-right jqDrag-right"></div><div class="handle-nw"></div><div class="handle-ne"></div><div class="handle-se"></div><div class="handle-sw"></div><div class="authoring_imagebox_content" id="image_con'+imagecounter+'"><img class="pngfix" id="pic'+imagecounter+'" src="'+filename+'" alt="" /></div>';
    
  data = data + '<div style="position:absolute; left:0px; top:-20px; backgound-color: grey;" id="counter_dimensions'+imagecounter+'"></div></div>';	
	
	
	
  data2="<script type='text/javascript'> $('#authoring_imagebox"+imagecounter+"').jqDrag('.jqDrag'); $('#authoring_imagebox"+imagecounter+"').jqDrag('.jqDrag-left'); $('#authoring_imagebox"+imagecounter+"').jqDrag('.jqDrag-right'); $('#authoring_imagebox"+imagecounter+"').jqResize('.handle-nw','nw');  $('#authoring_imagebox"+imagecounter+"').jqResize('.handle-ne','ne');  $('#authoring_imagebox"+imagecounter+"').jqResize('.handle-se','se'); $('#authoring_imagebox"+imagecounter+"').jqResize('.handle-sw','sw');";
  
  
  data3 = data2+"$('#authoring_imagebox"+imagecounter+"').bind('click', function(e){  hide_counter_dimensions(); div_type = 'i"+imagecounter+"';    if ($('#authoring_imagebox"+imagecounter+" .handle-nw').css('visibility') === 'hidden') { buttons_noactive(); saveImageDivContent(selected_div);$('#authoring_imagebox"+imagecounter+" .handle-nw').css('visibility',''); $('#authoring_imagebox"+imagecounter+" .handle-ne').css('visibility','');  $('#authoring_imagebox"+imagecounter+" .handle-sw').css('visibility','');  $('#authoring_imagebox"+imagecounter+" .handle-se').css('visibility',''); $('#authoring_imagebox"+imagecounter+" .jqHandle-top').css('visibility','');  $('#authoring_imagebox"+imagecounter+" .jqHandle-bottom').css('visibility','');   $('#authoring_imagebox"+imagecounter+" .jqHandle-left').css('visibility','');  $('#authoring_imagebox"+imagecounter+" .jqHandle-right').css('visibility','');    setImageZindex('i"+imagecounter+"');  div_from='i';    }  else  {     }    }); <\/script>";  
  
    	
  $("#container #lection_content").append(data);	
  $("#container #lection_content").append(data3);
  
  $('#authoring_imagebox'+imagecounter).css('filter','alpha(opacity=50)');
  $('#authoring_imagebox'+imagecounter).css('opacity','0.5'); 

  div_type = 'i'+imagecounter;
  selected_div = imagecounter;
  buttons_noactive(); 	
  clearAll();	 
  
  
  $("#additional_menu").css("visible","false");
  $("#additional_menu").css("display","none");
    
   
  var ie6 = navigator.userAgent.toLowerCase().indexOf("msie 6") != -1;
   	    
  if (ie6) showItems();  
    
  addToInsertedImages(filename);
    
  
}	



function hide_counter_dimensions() {
	
	for (l=1; l<=imagecounter; l++) {
		
	   	$("#counter_dimensions"+l).css("visibility","hidden");
	   	$("#counter_dimensions"+l).css("display","none");
		
	}
	
}

 


//create new temp flashbox
function addFlashDiv(filename, width, height) {

  flash_data ='<div id="temp_flash" style="visibility:hidden; "><object id="detectme" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0"><param name="movie" value="../editor/uploads/'+filename+'"><param name="quality" value="high"><param name="allowscriptaccess" value="samedomain"><embed src="../../js/editor/uploads/'+filename+'" name="detectme" swliveconnect="true" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash"></embed></object></div>';
  
  
  $("#container #lection_content").append(flash_data);
  window.setTimeout('addFlashDiv_new("'+filename+'")',400);

}


//create new flashbox
function addFlashDiv_new(filename) {

  flashcounter++;

  $("#flash_counter").val(flashcounter);
 
  getFlashWidth('detectme');
  getFlashHeight('detectme');

  flash_div_width = Number(flash_width) + 20;
  flash_div_height = Number(flash_height) + 20;
  
  flash_div_width = Math.round(flash_div_width);
  flash_div_height = Math.round(flash_div_height);
 
 
 
 
  $("#temp_flash").remove();

 data='<div style="position: absolute;  left: 200px;   top: 200px;  width: '+flash_div_width+'px;  height: '+flash_div_height+'px; z-index:1000" id="authoring_flashbox'+flashcounter+'" class="authoring_imagebox"><input type="hidden" name="authoring_flashboxfile'+flashcounter+'" id="authoring_flashboxfile'+flashcounter+'" value="'+filename+'" /><div id="handle'+flashcounter+'" class="jqHandle-top jqDrag"></div><div class="jqHandle-bottom jqDrag"></div><div class="jqHandle-left jqDrag-left"></div><div class="jqHandle-right jqDrag-right"></div><div class="authoring_flashbox_content" id="flash_con'+flashcounter+'"><object type="application/x-shockwave-flash" data="../../js/editor/uploads/'+filename+'"  width="'+flash_width+'" height="'+flash_height+'"><param name="movie" value="../../js/editor/uploads/'+filename+'" /><param name="wmode" value="transparent" /></object><div id="overflash'+flashcounter+'" style="filter:alpha(opacity=1); opacity:0.1;background-color:white; position:absolute; top:5px; left:5px; width:'+Number(flash_div_width-10)+'px; height:'+Number(flash_div_height-10)+'px;"></div></div></div>';

		
  data2="<script type='text/javascript'> $('#authoring_flashbox"+flashcounter+"').jqDrag('.jqDrag'); $('#authoring_flashbox"+flashcounter+"').jqDrag('.jqDrag-left'); $('#authoring_flashbox"+flashcounter+"').jqDrag('.jqDrag-right'); $('#authoring_flashbox"+flashcounter+"').jqResize('.handle-nw','nw');  $('#authoring_flashbox"+flashcounter+"').jqResize('.handle-ne','ne');  $('#authoring_flashbox"+flashcounter+"').jqResize('.handle-se','se'); $('#authoring_flashbox"+flashcounter+"').jqResize('.handle-sw','sw');";
  
  data3 = data2+"$('#authoring_flashbox"+flashcounter+"').bind('click', function(e){  if ($('#authoring_flashbox"+flashcounter+" .handle-nw').css('visibility') === 'hidden') { $('#authoring_flashbox"+flashcounter+" .handle-nw').css('visibility',''); $('#authoring_flashbox"+flashcounter+" .handle-ne').css('visibility','');  $('#authoring_flashbox"+flashcounter+" .handle-sw').css('visibility','');  $('#authoring_flashbox"+flashcounter+" .handle-se').css('visibility',''); $('#authoring_flashbox"+flashcounter+" .jqHandle-top').css('visibility','');  $('#authoring_flashbox"+flashcounter+" .jqHandle-bottom').css('visibility','');   $('#authoring_flashbox"+flashcounter+" .jqHandle-left').css('visibility','');  $('#authoring_flashbox"+flashcounter+" .jqHandle-right').css('visibility','');    setImageZindex("+flashcounter+");  }  else  {     }    });           <\/script>";
  
  
  $("#container #lection_content").append(data);	
  $("#container #lection_content").append(data3);  

  data4="<script type='text/javascript'>$('#overflash"+flashcounter+"').bind('click', function(e){  saveFlashDivContent(selected_div); div_from='f';  if ($('#authoring_flashbox"+flashcounter+" .jqHandle-left').css('visibility') === 'hidden'){   buttons_noactive(); $('#authoring_flashbox"+flashcounter+" .jqHandle-left').css('visibility','');   $('#authoring_flashbox"+flashcounter+" .jqHandle-top').css('visibility','');   $('#authoring_flashbox"+flashcounter+" .jqHandle-bottom').css('visibility','');  $('#authoring_flashbox"+flashcounter+" .jqHandle-right').css('visibility','');  div_type='f"+flashcounter+"';  }  else  {     }   }); <\/script> ";  
     
  
  $("#container #lection_content").append(data4);


  div_type = 'f'+flashcounter;
  selected_div = flashcounter;
  buttons_noactive(); 
  clearAll();
}







//create new textbox
function addAudioDiv(filename) {
  
  if (selected_div!=0) saveDivContent(selected_div,0);
      
  audiocounter++;
  
  $("#audio_counter").val(audiocounter);
  

  hideDivs(new Array(),'');	
  hideImageDivs(new Array());
  hideFlashDivs(new Array());
  hideAudioDivs(new Array(audiocounter));

  data='<div style="z-index:1000; left:200px; top:200px; width:180px;   height:40px;" id="authoring_audiobox'+audiocounter+'" class="authoring_box"><div id="handle'+audiocounter+'" class="jqHandle-top jqDrag"></div><div class="jqHandle-bottom jqDrag"></div><div class="jqHandle-left jqDrag-left"></div><div class="jqHandle-right jqDrag-right"></div><object type="application/x-shockwave-flash" data="js/player.swf" id="audioplayer'+audiocounter+'" height="24" width="175">  <param name="movie" value="js/player.swf"><param name="FlashVars" value="playerID=audioplayer'+audiocounter+'&soundFile='+filename+'"><param name="quality" value="high"><param name="menu" value="false"><param name="wmode" value="transparent"></object><input type="hidden" id="audiofilename'+audiocounter+'" value="'+filename+'" /></div>';	
	
	data2 = data + "<script type='text/javascript'> $('#authoring_audiobox"+audiocounter+"').jqDrag('.jqDrag'); $('#authoring_audiobox"+audiocounter+"').jqDrag('.jqDrag-left'); $('#authoring_audiobox"+audiocounter+"').jqDrag('.jqDrag-right');";
  
  data4 = data2 + "$('#authoring_audiobox"+audiocounter+"').bind('mousedown', function(e){  div_from='a';  if ($('#authoring_audiobox"+audiocounter+" .jqHandle-left').css('visibility') === 'hidden'){   buttons_noactive(); $('#authoring_audiobox"+audiocounter+" .jqHandle-left').css('visibility','');   $('#authoring_audiobox"+audiocounter+" .jqHandle-top').css('visibility','');   $('#authoring_audiobox"+audiocounter+" .jqHandle-bottom').css('visibility','');  $('#authoring_audiobox"+audiocounter+" .jqHandle-right').css('visibility','');  div_type='a"+audiocounter+"';   setAudioZindex('a"+audiocounter+"'); }  else  {     }   }); <\/script> ";
  

  $("#container #lection_content").append(data4);	
	

  div_from = 'a';	
  div_type = 'a'+audiocounter;
  selected_div = audiocounter;

  clearAll();	
  
  $("#additional_menu_content").html("");
  $("#additional_menu").css("visibility","hidden");
  $("#additional_menu").css("display","none"); 
  
    
  status = 'authoring';
  $("#status").val('authoring');
  
  
  var ie6 = navigator.userAgent.toLowerCase().indexOf("msie 6") != -1;
   	    
  if (ie6) showItems();
  
  
}	




