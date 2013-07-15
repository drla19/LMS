/***
@title:
Drag to Select

@version:
1.1

@author:
Andreas Lagerkvist

@date:
2009-04-06

@url:
http://andreaslagerkvist.com/jquery/drag-to-select/

@license:
http://creativecommons.org/licenses/by/3.0/

@copyright:
2008 Andreas Lagerkvist (andreaslagerkvist.com)

@requires:
jquery, jquery.dragToSelect.css

@does:
Use this plug-in to allow your users to select certain elements by dragging a "select box". Works very similar to how you can drag-n-select files and folders in most OS:es.

@howto:
$('#my-files').dragToSelect(selectables: 'li'); would make every li in the #my-files-element selectable by dragging. The li:s will recieve a "selected"-class when they are within range of the select box when user drops.

Make sure a parent-element of the selectables has position: relative as well as overflow: auto or scroll.

@exampleHTML:
<ul>
	<li><img src="http://exscale.se/__files/3d/lamp-and-mates/lamp-and-mates-01_small.jpg" alt="Lamp and Mates" /></li>
	<li><img src="http://exscale.se/__files/3d/stugan-winter_small.jpg" alt="The Cottage - Winter time" /></li>
	<li><img src="http://exscale.se/__files/3d/ps2_small.jpg" alt="PS2" /></li>
</ul>

@exampleJS:
$('#jquery-drag-to-select-example').dragToSelect({
	selectables: 'li', 
	onHide: function () {
		alert($('#jquery-drag-to-select-example li.selected').length + ' selected');
	}
});
***/



/*
 * modified by michal machovic
 * www.gingers.sk
 *
 */


jQuery.fn.dragToSelect = function (conf) {
	var c = typeof(conf) == 'object' ? conf : {};

	// Config
	var config = jQuery.extend({
		className:		'jquery-drag-to-select', 
		activeClass:	'active', 
		disabledClass:	'disabled', 
		selectedClass:	'selected', 
		moving_mouse:   'false',
		scrollTH:		10, 
		percentCovered:	25, 
		selectables:	false, 
		autoScroll:		false, 
		selectOnMove:	false, 
		onShow:			function () {return true;}, 
		onHide:			function () {return true;}, 
		onRefresh:		function () {return true;}
	}, c);

	var realParent	= jQuery(this);
	var parent		= realParent;
 




	do { 	//alert(parent.toSource());
		if (/auto|scroll|hidden/.test(parent.css('overflow'))) {
			break;
		}
		parent = parent.parent();
		

	} while (parent[0].parentNode);
	
	

	

	// Does user want to disable dragToSelect
	if (conf == 'disable') {
		parent.addClass(config.disabledClass);
		return this;
	}
	else if (conf == 'enable') {
		parent.removeClass(config.disabledClass);
		return this;
	}

	var parentOffset	= parent.offset();
	var parentDim		= {
		left:	parentOffset.left, 
		top:	parentOffset.top, 
		width:	parent.width(), 
		height:	parent.height()
	};

	// Current origin of select box
	var selectBoxOrigin = {
		left:	0, 
		top:	0
	};

	// Create select box
	var selectBox = jQuery('<div/>')
						.appendTo(parent)
						.attr('id', config.className)
						.css('position', 'absolute');

	// Shows the select box
	var showSelectBox = function (e) {
		if (parent.is('.' + config.disabledClass)) {
			return;
		}

		selectBoxOrigin.left	= e.pageX - parentDim.left + parent[0].scrollLeft;
		selectBoxOrigin.top		= e.pageY - parentDim.top + parent[0].scrollTop;

		var css = {
			left:		selectBoxOrigin.left + 'px', 
			top:		selectBoxOrigin.top + 'px', 
			width:		'1px', 
			height:		'1px'
		};
		selectBox.addClass(config.activeClass).css(css);

		config.onShow();
	};

	// Refreshes the select box dimensions and possibly position
	var refreshSelectBox = function (e) {
		if (!selectBox.is('.' + config.activeClass) || parent.is('.' + config.disabledClass)) {
			return;
		}


		var left		= e.pageX - parentDim.left + parent[0].scrollLeft;
		var top			= e.pageY - parentDim.top + parent[0].scrollTop;
		var newLeft		= left;
		var newTop		= top;
		var newWidth	= selectBoxOrigin.left - newLeft;
		var newHeight	= selectBoxOrigin.top - newTop;

		if (left > selectBoxOrigin.left) {
			newLeft		= selectBoxOrigin.left;
			newWidth	= left - selectBoxOrigin.left;
		}

		if (top > selectBoxOrigin.top) {
			newTop		= selectBoxOrigin.top;
			newHeight	= top - selectBoxOrigin.top;
		}

		var css = {
			left:	newLeft + 'px', 
			top:	newTop + 'px', 
			width:	newWidth + 'px', 
			height:	newHeight + 'px'
		};
		selectBox.css(css);

		config.onRefresh();
	};

	// Hides the select box
	var hideSelectBox = function (e) {
		if (!selectBox.is('.' + config.activeClass) || parent.is('.' + config.disabledClass)) {
			return;
		}
		if (config.onHide(selectBox) !== false) {
			selectBox.removeClass(config.activeClass);
		}
	};

	// Scrolls parent if needed
	var scrollPerhaps = function (e) {
		if (!selectBox.is('.' + config.activeClass) || parent.is('.' + config.disabledClass)) {
			return;
		}

		// Scroll down
		if ((e.pageY + config.scrollTH) > (parentDim.top + parentDim.height)) {
			parent[0].scrollTop += config.scrollTH;
		}
		// Scroll up
		if ((e.pageY - config.scrollTH) < parentDim.top) {
			parent[0].scrollTop -= config.scrollTH;
		}
		// Scroll right
		if ((e.pageX + config.scrollTH) > (parentDim.left + parentDim.width)) {
			parent[0].scrollLeft += config.scrollTH;
		}
		// Scroll left
		if ((e.pageX - config.scrollTH) < parentDim.left) {
			parent[0].scrollLeft -= config.scrollTH;
		}
	};

	// Selects all the elements in the select box's range
	var selectElementsInRange = function () {
		
		
/*			
		if (!selectBox.is('.' + config.activeClass) || parent.is('.' + config.disabledClass)) {
			return;
		}
*/
   
   
 
   

        var select_left;
        var select_width;
        var select_top;
        var select_height;

        ie6 = navigator.userAgent.toLowerCase().indexOf("msie 6") != -1;
   	    
   	    if (ie6) {
   	    
           var myIFrame = document.getElementById("iView");
           var iframe_body_html = myIFrame.contentWindow.document.body.innerHTML;
       		     
		}     
		


   

        select_left = document.getElementById("jquery-drag-to-select").offsetLeft;
        select_top = document.getElementById("jquery-drag-to-select").offsetTop;
        select_width_s = $("#jquery-drag-to-select").css('width');
        select_height_s = $("#jquery-drag-to-select").css('height');
        
        select_right = Number(select_width_s.substr(0,select_width_s.length-2))+select_left;
        select_down = Number(select_height_s.substr(0,select_height_s.length-2))+select_top;

        selected = new Array();
        selected_width_diff = new Array();
        selected_height_diff = new Array();

        for (i=1;i<=counter;i++) {
        	
          if ((document.getElementById("authoring_box"+i)!=null)) 
          {
		
			if (document.getElementById("authoring_box"+i)!=null) {
        	
        	div_left = document.getElementById("authoring_box"+i).offsetLeft;
        	div_top = document.getElementById("authoring_box"+i).offsetTop;
        	
			div_width = $("#authoring_box"+i).css('width');
        	div_height = $("#authoring_box"+i).css('height');
        	
			div_right = Number(div_width.substr(0,div_width.length-2))+div_left;
			div_down = Number(div_height.substr(0,div_height.length-2))+div_top;
        	
			if (((select_left < div_right) && (select_right > div_right) && (select_down > div_top) && (select_top < div_top)) ||   
			    ((select_left < div_left) && (select_right > div_left) && (select_down > div_top) && (select_top < div_top)) ||
			    ((select_left < div_left) && (select_right > div_left) && (select_down > div_down) && (select_top < div_down)) ||
			    ((select_left < div_right) && (select_right > div_right) && (select_down > div_down) && (select_top < div_down)) || 
			    
			    ((select_left > div_left) && (select_right < div_right) && (select_down > div_top) && (select_top < div_top)) ||
			    ((select_left < div_left) && (select_right > div_left) && (select_down < div_down) && (select_top > div_top)) ||
			    ((select_left > div_left) && (select_right < div_right) && (select_down > div_down) && (select_top < div_down)) ||
			    ((select_left < div_right) && (select_right > div_right) && (select_down < div_down) && (select_top > div_top))) {
        	  
        	      if (selected.length==0) {
        	     	min_left = div_left;
        	     	max_right = div_right;
        	     	min_top = div_top;
       	     	    max_down = div_down;
       	     	  }
					   
        	      else {
        	      	
        	      	if (div_left<min_left) min_left = div_left;
        	      	if (div_right>max_right) max_right = div_right;
        	      	if (div_top<min_top) min_top = div_top;
        	      	if (div_down>max_down) max_down = div_down;
        	      	
        	      } 
        	   
			      selected.push(i);
			     }
              }
           } 
        }
        
        
        
        selected_video = '0';
       
        vvv = document.getElementById("authoring_videobox"); 
          
		if (vvv!=null) {
			
		div_videobox_left = document.getElementById("authoring_videobox").offsetLeft;
        div_videobox_top = document.getElementById("authoring_videobox").offsetTop;
        	
		div_videobox_width = $("#authoring_videobox").css('width');
        div_videobox_height = $("#authoring_videobox").css('height');
        	
       	div_videobox_right = Number(div_videobox_width.substr(0,div_videobox_width.length-2))+div_videobox_left;
		div_videobox_down = Number(div_videobox_height.substr(0,div_videobox_height.length-2))+div_videobox_top;
        	
        	
		if (((select_left < div_videobox_right) && (select_right > div_videobox_right) && (select_down > div_videobox_top) && (select_top < div_videobox_top)) ||   
			    ((select_left < div_videobox_left) && (select_right > div_videobox_left) && (select_down > div_videobox_top) && (select_top < div_videobox_top)) ||
			    ((select_left < div_videobox_left) && (select_right > div_videobox_left) && (select_down > div_videobox_down) && (select_top < div_videobox_down)) ||
			    ((select_left < div_videobox_right) && (select_right > div_videobox_right) && (select_down > div_videobox_down) && (select_top < div_videobox_down)) || 
			    
			    ((select_left > div_videobox_left) && (select_right < div_videobox_right) && (select_down > div_videobox_top) && (select_top < div_videobox_top)) ||
			    ((select_left < div_videobox_left) && (select_right > div_videobox_left) && (select_down < div_videobox_down) && (select_top > div_videobox_top)) ||
			    ((select_left > div_videobox_left) && (select_right < div_videobox_right) && (select_down > div_videobox_down) && (select_top < div_videobox_down)) ||
			    ((select_left < div_videobox_right) && (select_right > div_videobox_right) && (select_down < div_videobox_down) && (select_top > div_videobox_top))) {
        	  
        	  
        	      if ((selected.length==0) && (selected_video=='0')) {
        	     	
					min_left = div_videobox_left;    
        	     	max_right = div_videobox_right;
        	     	min_top = div_videobox_top;
       	     	    max_down = div_videobox_down;
       	     	    
       	     	  }
					   
        	      else {
        	      	
        	      	if (div_videobox_left<min_left) min_left = div_videobox_left;
        	      	if (div_videobox_right>max_right) max_right = div_videobox_right;
        	      	if (div_videobox_top<min_top) min_top = div_videobox_top;
        	      	if (div_videobox_down>max_down) max_down = div_videobox_down;
        	      	
        	      } 
        	   
			      selected_video = '1';
			   }
			     
		}	     
			     
			     
       
        selected_audio = new Array();
        selected_audio_width_diff = new Array();
        selected_audio_height_diff = new Array();

        for (i=1;i<=audiocounter;i++) {

         if ((document.getElementById("authoring_audiobox"+i)!=null)) 
          {
           	
        	div_audio_left = document.getElementById("authoring_audiobox"+i).offsetLeft;
        	div_audio_top = document.getElementById("authoring_audiobox"+i).offsetTop;
        	
			div_audio_width = $("#authoring_audiobox"+i).css('width');
        	div_audio_height = $("#authoring_audiobox"+i).css('height');
        	
       		div_audio_right = Number(div_audio_width.substr(0,div_audio_width.length-2))+div_audio_left;
			div_audio_down = Number(div_audio_height.substr(0,div_audio_height.length-2))+div_audio_top;
        	
			if (((select_left < div_audio_right) && (select_right > div_audio_right) && (select_down > div_audio_top) && (select_top < div_audio_top)) ||   
			    ((select_left < div_audio_left) && (select_right > div_audio_left) && (select_down > div_audio_top) && (select_top < div_audio_top)) ||
			    ((select_left < div_audio_left) && (select_right > div_audio_left) && (select_down > div_audio_down) && (select_top < div_audio_down)) ||
			    ((select_left < div_audio_right) && (select_right > div_audio_right) && (select_down > div_audio_down) && (select_top < div_audio_down)) || 
			    
			    ((select_left > div_audio_left) && (select_right < div_audio_right) && (select_down > div_audio_top) && (select_top < div_audio_top)) ||
			    ((select_left < div_audio_left) && (select_right > div_audio_left) && (select_down < div_audio_down) && (select_top > div_audio_top)) ||
			    ((select_left > div_audio_left) && (select_right < div_audio_right) && (select_down > div_audio_down) && (select_top < div_audio_down)) ||
			    ((select_left < div_audio_right) && (select_right > div_audio_right) && (select_down < div_audio_down) && (select_top > div_audio_top))) {
        	  
        	      if ((selected.length==0) && (selected_video=='0') && (selected_audio.length==0)) {
        	     	min_left = div_audio_left;    
        	     	max_right = div_audio_right;
        	     	min_top = div_audio_top;
       	     	    max_down = div_audio_down;
       	     	  }
					   
        	      else {
        	      	
        	      	if (div_audio_left<min_left) min_left = div_audio_left;
        	      	if (div_audio_right>max_right) max_right = div_audio_right;
        	      	if (div_audio_top<min_top) min_top = div_audio_top;
        	      	if (div_audio_down>max_down) max_down = div_audio_down;
        	      	
        	      } 
        	   
			      selected_audio.push(i);
			     }
         }
         
         }
        
        
        selected_images = new Array();
        selected_images_width_diff = new Array();
        selected_images_height_diff = new Array();

        for (i=1;i<=imagecounter;i++) {
        	
          if ((document.getElementById("authoring_imagebox"+i)!=null)) {
          	
          	
        	div_images_left = document.getElementById("authoring_imagebox"+i).offsetLeft;
        	div_images_top = document.getElementById("authoring_imagebox"+i).offsetTop;
        	
			div_images_width = $("#authoring_imagebox"+i).css('width');
        	div_images_height = $("#authoring_imagebox"+i).css('height');
        	
       		div_images_right = Number(div_images_width.substr(0,div_images_width.length-2))+div_images_left;
			div_images_down = Number(div_images_height.substr(0,div_images_height.length-2))+div_images_top;
        	
			if (((select_left < div_images_right) && (select_right > div_images_right) && (select_down > div_images_top) && (select_top < div_images_top)) ||   
			    ((select_left < div_images_left) && (select_right > div_images_left) && (select_down > div_images_top) && (select_top < div_images_top)) ||
			    ((select_left < div_images_left) && (select_right > div_images_left) && (select_down > div_images_down) && (select_top < div_images_down)) ||
			    ((select_left < div_images_right) && (select_right > div_images_right) && (select_down > div_images_down) && (select_top < div_images_down)) || 
			    
			    ((select_left > div_images_left) && (select_right < div_images_right) && (select_down > div_images_top) && (select_top < div_images_top)) ||
			    ((select_left < div_images_left) && (select_right > div_images_left) && (select_down < div_images_down) && (select_top > div_images_top)) ||
			    ((select_left > div_images_left) && (select_right < div_images_right) && (select_down > div_images_down) && (select_top < div_images_down)) ||
			    ((select_left < div_images_right) && (select_right > div_images_right) && (select_down < div_images_down) && (select_top > div_images_top))) {
        	  
        	      if ((selected.length==0) && (selected_images.length==0) && (selected_video=='0') && (selected_audio.length==0)) {
        	     	min_left = div_images_left;    
        	     	max_right = div_images_right;
        	     	min_top = div_images_top;
       	     	    max_down = div_images_down;
       	     	  }
					   
        	      else {
        	      	
        	      	if (div_images_left<min_left) min_left = div_images_left;
        	      	if (div_images_right>max_right) max_right = div_images_right;
        	      	if (div_images_top<min_top) min_top = div_images_top;
        	      	if (div_images_down>max_down) max_down = div_images_down;
        	      	
        	      } 
        	   
			      selected_images.push(i);
			   }
            }
        }
        
          
  
        selected_flash = new Array();
        selected_flash_width_diff = new Array();
        selected_flash_height_diff = new Array();
        
        for (i=1;i<=flashcounter;i++) {
        
		  if ((document.getElementById("authoring_flashbox"+i)!=null)) 
          {
			
        	div_flash_left = document.getElementById("authoring_flashbox"+i).offsetLeft;
        	div_flash_top = document.getElementById("authoring_flashbox"+i).offsetTop;
        	
			div_flash_width = $("#authoring_flashbox"+i).css('width');
        	div_flash_height = $("#authoring_flashbox"+i).css('height');
        	
			div_flash_right = Number(div_flash_width.substr(0,div_flash_width.length-2))+div_flash_left;
			div_flash_down = Number(div_flash_height.substr(0,div_flash_height.length-2))+div_flash_top;
        	
			if (((select_left < div_flash_right) && (select_right > div_flash_right) && (select_down > div_flash_top) && (select_top < div_flash_top)) ||   
			    ((select_left < div_flash_left) && (select_right > div_flash_left) && (select_down > div_flash_top) && (select_top < div_flash_top)) ||
			    ((select_left < div_flash_left) && (select_right > div_flash_left) && (select_down > div_flash_down) && (select_top < div_flash_down)) ||
			    ((select_left < div_flash_right) && (select_right > div_flash_right) && (select_down > div_flash_down) && (select_top < div_flash_down)) || 
			    
			    ((select_left > div_flash_left) && (select_right < div_flash_right) && (select_down > div_flash_top) && (select_top < div_flash_top)) ||
			    ((select_left < div_flash_left) && (select_right > div_flash_left) && (select_down < div_flash_down) && (select_top > div_flash_top)) ||
			    ((select_left > div_flash_left) && (select_right < div_flash_right) && (select_down > div_flash_down) && (select_top < div_flash_down)) ||
			    ((select_left < div_flash_right) && (select_right > div_flash_right) && (select_down < div_flash_down) && (select_top > div_flash_top))) {
        	  
        	      if ((selected.length==0) && (selected_images.length==0) && (selected_flash.length==0) && (selected_video=='0') && (selected_audio.length==0)) {
        	     	min_left = div_flash_left;
        	     	max_right = div_flash_right;
        	     	min_top = div_flash_top;
       	     	    max_down = div_flash_down;
       	     	  }
					   
        	      else {
        	      	
        	      	if (div_flash_left<min_left) min_left = div_flash_left;
        	      	if (div_flash_right>max_right) max_right = div_flash_right;
        	      	if (div_flash_top<min_top) min_top = div_flash_top;
        	      	if (div_flash_down>max_down) max_down = div_flash_down;
        	      	
        	      } 
        	   
			      selected_flash.push(i);
		       }
            }
        }
  
      
        
        for (j=0; j<selected.length; j++) {
        	
			div_left = document.getElementById("authoring_box"+selected[j]).offsetLeft;
        	div_top = document.getElementById("authoring_box"+selected[j]).offsetTop;
        	
	        selected_width_diff.push(div_left-min_left);
		    selected_height_diff.push(div_top-min_top);
        }
        
        
         for (j=0; j<selected_audio.length; j++) {
        	
			div_audio_left = document.getElementById("authoring_audiobox"+selected_audio[j]).offsetLeft;
        	div_audio_top = document.getElementById("authoring_audiobox"+selected_audio[j]).offsetTop;
        	
	        selected_audio_width_diff.push(div_audio_left-min_left);
		    selected_audio_height_diff.push(div_audio_top-min_top);
        }
        
        
		
		vvv = document.getElementById("authoring_videobox"); 
          
		if (vvv!=null) {
		  div_video_left = document.getElementById("authoring_videobox").offsetLeft;
       	  div_video_top = document.getElementById("authoring_videobox").offsetTop;
        	
          selected_video_width_diff = div_video_left-min_left;
	      selected_video_height_diff = div_video_top-min_top;
		}    
		    
        
        
        selected_images_orig_width = new Array();
        selected_images_orig_height = new Array();
        selected_imagesdiv_orig_width = new Array();
        selected_imagesdiv_orig_height = new Array();
        
        
        
        for (j=0; j<selected_images.length; j++) {
        	
			div_images_left = document.getElementById("authoring_imagebox"+selected_images[j]).offsetLeft;
        	div_images_top = document.getElementById("authoring_imagebox"+selected_images[j]).offsetTop;
        	
        	
        	// pre zvacsovanie/zmensovanie viacerych oznacenych
            selected_images_orig_width[j] = $("img#pic"+selected_images[j]).css('width').substr(0,$("img#pic"+selected_images[j]).css('width').length-2);
            selected_images_orig_height[j] = $("img#pic"+selected_images[j]).css('height').substr(0,$("img#pic"+selected_images[j]).css('height').length-2);
		    selected_imagesdiv_orig_width[j] = $("#authoring_imagebox"+selected_images[j]).css('width').substr(0,$("#authoring_imagebox"+selected_images[j]).css('width').length-2); 
		   
		    selected_imagesdiv_orig_height[j] = $("#authoring_imagebox"+selected_images[j]).css('height').substr(0,$("#authoring_imagebox"+selected_images[j]).css('height').length-2); 
	    	 //pre posuvanie viacerych oznacenych
	        selected_images_width_diff.push(div_images_left-min_left);
		    selected_images_height_diff.push(div_images_top-min_top);
        }
        
             
        for (j=0; j<selected_flash.length; j++) {
        	
			div_flash_left = document.getElementById("authoring_flashbox"+selected_flash[j]).offsetLeft;
        	div_flash_top = document.getElementById("authoring_flashbox"+selected_flash[j]).offsetTop;
        	
	        selected_flash_width_diff.push(div_flash_left-min_left);
		    selected_flash_height_diff.push(div_flash_top-min_top);
        }
          
          
          
       
       //posledny element z ktoreho klikneme na plochu musi mat najvyssi z-index
       if (div_from == 't') $("#authoring_box"+selected_div).css("z-index","100");
       
       if (div_from == 'i') $("#authoring_imagebox"+selected_div).css("z-index","100");
       
       if (div_from == 'v') $("#authoring_videobox"+selected_div).css("z-index","100");
        
        $("#counter_dimensions"+selected_div).css("visibility","hidden");
         
        $("#counter_dimensions"+selected_div).css("display","none");
       
        
   
   
   
   
   
    
       //nove       
       var myIFrame = document.getElementById("iView");
       var iframe_body_html = myIFrame.contentWindow.document.body.innerHTML;
       
       if (((div_from=='t') || (div_from==''))  && ($("iframe#iView").css('visibility')=='visible')) $("#text"+selected_div).html(iframe_body_html);
       $("#text"+selected_div).css("visibility","");
       
       
      
	   
	   $("#context_menu").css("visibility","hidden");
       $("#context_menu").css("display","none");
       
       $("#shape_menu").css("visibility","hidden");
     
	   
	   //remove bigbox
	   $("#authoring_bigbox").remove();
       drag_status = 'normal';
       
       

       for (i=1; i<=counter; i++) {
       	  $('#authoring_box'+i).css('filter','alpha(opacity=100)');
	      $('#authoring_box'+i).css('opacity','1');
	      
	      obsah = $("#text"+i).html();   
	      obsah = obsah.replace(/&nbsp;/,'');   
		  obsah = obsah.replace(/<br>/,'');
		  if (obsah=='') $("#text"+i).html(lang['click to add content']);	 
						 
       }
	   
	   for (i=1; i<=imagecounter; i++) {
       	  $('#authoring_imagebox'+i).css('filter','alpha(opacity=100)');
	      $('#authoring_imagebox'+i).css('opacity','1');
       }	
       
       for (i=1; i<=flashcounter; i++) {
       	  $('#authoring_flashbox'+i).css('filter','alpha(opacity=80)');
	      $('#authoring_flashbox'+i).css('opacity','0.8');
       }
       
       for (i=1; i<=audiocounter; i++) {
       	  $('#authoring_audiobox'+i).css('filter','alpha(opacity=80)');
	      $('#authoring_audiobox'+i).css('opacity','0.8');
       }
       
       
       
       /*
       $("#buttons3_clickable").css('visibility','visible'); //visible  
       $("#buttons3_clickable").css('display','inline'); //visible
       $("#buttons3").css('visibility','hidden');
       $("#buttons3").css('display','none');
       
       $("#buttons").css('visibility','visible'); //visible  
       $("#buttons").css('display','inline'); //visible
       $("#buttons_clickable").css('visibility','hidden');
       $("#buttons_clickable").css('display','none');
            
       $("#buttons2").css('visibility','visible'); //visible  
       $("#buttons2").css('display','inline'); //visible
       $("#buttons2_clickable").css('visibility','hidden');
       $("#buttons2_clickable").css('display','none');
       $("#fontsize_form_div").css('display','none');
       */
       buttons_noactive();
          
             
       $('#authoring_videobox .handle-nw').css('visibility','hidden');
       $('#authoring_videobox .handle-ne').css('visibility','hidden');
       $('#authoring_videobox .handle-sw').css('visibility','hidden');
       $('#authoring_videobox .handle-se').css('visibility','hidden');
       $('#authoring_videobox .jqHandle-top').css('visibility','hidden');
       $('#authoring_videobox .jqHandle-bottom').css('visibility','hidden');
       $('#authoring_videobox .jqHandle-left').css('visibility','hidden');
       $('#authoring_videobox .jqHandle-right').css('visibility','hidden');      
             
       for (i=1; i<=counter; i++) {
	
         if (in_array(i,selected)==false) {	
   
          $('#authoring_box'+i+' .handle-nw').css('visibility','hidden');
          $('#authoring_box'+i+' .handle-ne').css('visibility','hidden');
          $('#authoring_box'+i+' .handle-sw').css('visibility','hidden');
          $('#authoring_box'+i+' .handle-se').css('visibility','hidden');
          $('#authoring_box'+i+' .jqHandle-top').css('visibility','hidden');
          $('#authoring_box'+i+' .jqHandle-bottom').css('visibility','hidden');
          $('#authoring_box'+i+' .jqHandle-left').css('visibility','hidden');
          $('#authoring_box'+i+' .jqHandle-right').css('visibility','hidden');
          //$('#box'+i).css('z-index',counter);   	
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
          selected_div = i;
          
          /////////////////TUTO///////////////////
          
          
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
  
      
        if (selected_video == '1') {
          $('#authoring_videobox').css('z-index','1000');
   	      $('#authoring_videobox .handle-nw').css('visibility','');
          $('#authoring_videobox .handle-ne').css('visibility','');
          $('#authoring_videobox .handle-sw').css('visibility','');
          $('#authoring_videobox .handle-se').css('visibility','');
          $('#authoring_videobox .jqHandle-top').css('visibility','');
          $('#authoring_videobox .jqHandle-bottom').css('visibility','');
          $('#authoring_videobox .jqHandle-left').css('visibility','');
          $('#authoring_videobox .jqHandle-right').css('visibility','');	
        }
     
      
      
      
      
        hideImageDivs(selected_images);
        hideFlashDivs(selected_flash);
        hideAudioDivs(selected_audio);
        
        

        some_select = false;
        if (((selected.length>1) || (selected_images.length>1) || (selected_flash.length>1) || (selected_video=="1") || (selected_audio.length>1)) ||
		      ((selected.length==1) && (selected_images.length==1)) ||
		      ((selected.length==1) && (selected_flash.length==1)) ||
		      ((selected.length==1) && (selected_audio.length==1)) ||
		      ((selected.length==1) && (selected_video=="1")) ||
		      
		      ((selected_images.length==1) && (selected.length==1)) ||
		      ((selected_images.length==1) && (selected_flash.length==1)) ||
		      ((selected_images.length==1) && (selected_audio.length==1)) ||
		      ((selected_images.length==1) && (selected_video=="1")) ||
		      
		      ((selected_video=="1") && (selected.length==1)) ||
		      ((selected_video=="1") && (selected_images.length==1)) ||
		      ((selected_video=="1") && (selected_flash.length==1)) ||
		      ((selected_video=="1") && (selected_video=="1")) ||
		      
		      ((selected_audio.length==1) && (selected_images.length==1)) ||
		      ((selected_audio.length==1) && (selected_flash.length==1)) ||
		      ((selected_audio.length==1) && (selected.length==1)) ||
		      ((selected_audio.length==1) && (selected_video=="1")) 
		      
			  
			  )
		
		 some_select = true;
         
         
         
         
          	  
				
		
  	  
  	    
        
         
         
         
         
         ///
         
         
   	   $("iframe#iView").css('visibility','hidden');
	  
	   browser = navigator.appName;
	   
	   if(browser == "Microsoft Internet Explorer") {
	  
	   
	   }
      
	  
	  
	  
	    
        if (moving_mouse && some_select) {
          $("#iView").css('top','-1000px');	  

	       big_div='<div style="opacity:0.3; filter:alpha(opacity=30); position:absolute; left:'+min_left+'px; top:'+min_top+'px; width:'+(max_right-min_left)+'px; height:'+(max_down-min_top)+'px; z-index:10000" id="authoring_bigbox" class="authoring_box_bigbox"><div class="jqHandle-top jqDrag"></div><div class="jqHandle-bottom jqDrag"></div><div class="jqHandle-left jqDrag-left"></div><div class="jqHandle-right jqDrag-right"></div><div class="handle-nw"></div><div class="handle-ne"></div><div class="handle-se"></div><div class="handle-sw"></div><div class="text">&nbsp;&nbsp;&nbsp;</div></div>';
          
          big_div2="<script type='text/javascript'> $('#authoring_bigbox').jqDrag('.jqDrag'); $('#authoring_bigbox').jqDrag('.jqDrag-left'); $('#authoring_bigbox').jqDrag('.jqDrag-right'); $('#authoring_bigbox').jqResize('.handle-nw','nw');  $('#authoring_bigbox').jqResize('.handle-ne','ne');  $('#authoring_bigbox').jqResize('.handle-se','se'); $('#authoring_bigbox').jqResize('.handle-sw','sw');</script>";
       
          $("#container #lection_content").append(big_div);
 		  $("#container #lection_content").append(big_div2);
 		  
   	 
 	      bigbox_width = max_right - min_left;
		  bigbox_height =  max_down-min_top;
		 
   		  var styp = div_type.substr(0,1);
		  if (styp=='t') {
		    var myIFrame = document.getElementById("iView"); 
            var iframe_body_html = myIFrame.contentWindow.document.body.innerHTML;
            $("#text"+selected_div).html(iframe_body_html);
            $("#text"+selected_div).css("visibility","");
          }  
		  
          div_type = 'bigbox';
          drag_status = 'bigbox';
        
        
          hideDivs(selected);
          hideImageDivs(selected_images);
          hideFlashDivs(selected_flash);
     
      
		}  	


    
    
		var selectables		= realParent.find(config.selectables);
		var selectBoxOffset	= selectBox.offset();
		var selectBoxDim	= {
			left:	selectBoxOffset.left, 
			top:	selectBoxOffset.top, 
			width:	selectBox.width(), 
			height:	selectBox.height()
		};

		selectables.each(function (i) {
			var el			= $(this);
			var elOffset	= el.offset();
			var elDim		= {
				left:	elOffset.left, 
				top:	elOffset.top, 
				width:	el.width(), 
				height:	el.height()
			};

			if (percentCovered(selectBoxDim, elDim) > config.percentCovered) {
				el.addClass(config.selectedClass);
			}
			else {
				el.removeClass(config.selectedClass);
			}
		});
		
	};






	// Returns the amount (in %) that dim1 covers dim2
	var percentCovered = function (dim1, dim2) {
		// The whole thing is covering the whole other thing
		if (
			(dim1.left <= dim2.left) && 
			(dim1.top <= dim2.top) && 
			((dim1.left + dim1.width) >= (dim2.left + dim2.width)) && 
			((dim1.top + dim1.height) > (dim2.top + dim2.height))
		) {
			return 100;
		}
		// Only parts may be covered, calculate percentage
		else {
			dim1.right		= dim1.left + dim1.width;
			dim1.bottom		= dim1.top + dim1.height;
			dim2.right		= dim2.left + dim2.width;
			dim2.bottom		= dim2.top + dim2.height;

			var l = Math.max(dim1.left, dim2.left);
			var r = Math.min(dim1.right, dim2.right);
			var t = Math.max(dim1.top, dim2.top);
			var b = Math.min(dim1.bottom, dim2.bottom);

			if (b >= t && r >= l) {
			/*	$('<div/>').appendTo(document.body).css({
					background:	'red', 
					position:	'absolute',
					left:		l + 'px', 
					top:		t + 'px', 
					width:		(r - l) + 'px', 
					height:		(b - t) + 'px', 
					zIndex:		100
				}); */

				var percent = (((r - l) * (b - t)) / (dim2.width * dim2.height)) * 100;

			//	alert(percent + '% covered')

				return percent;
			}
		}
		// Nothing covered, return 0
		return 0;
	};
	
	
	
	

	// Do the right stuff then return this
	selectBox
		.mousemove(function (e) {
			
			  refreshSelectBox(e);

			  if (config.selectables && config.selectOnMove) {			
 				if (status=='authoring')
				 selectElementsInRange();
			  }

			  if (config.autoScroll) {
				scrollPerhaps(e);
			  }

			  e.preventDefault();
			 
		    	
			
		})
		.mouseup(function(e) {
			if (config.selectables) {			
				if (status=='authoring')
				selectElementsInRange();
			}

			hideSelectBox(e);

			e.preventDefault();
		});

	if (jQuery.fn.disableTextSelect) {
		parent.disableTextSelect();
	}

	parent
		.mousedown(function (e) {
			
		//	alert(parent.toSource());
			// Make sure user isn't clicking scrollbar (or disallow clicks far to the right actually)
			
          
          
          
          
		  
		  
		  if ((status!='insertimage') && (status!='editbackground') && (status!='multimedia') && (status!='shapemenu'))  			
		  status = 'authoring';
			
		  if ((mode!='play') && (e.which==1) && (status=='authoring')) {	
		
			if ((e.pageX + 20) > jQuery(document.body).width()) {
				return;
			}
            moving_mouse = false;
            
			showSelectBox(e);

			e.preventDefault();
		  }	
			
		})
		.mousemove(function (e) {  
			
			moving_mouse = true;
			refreshSelectBox(e);

			if (config.selectables && config.selectOnMove) {			
				
				if (status == 'authoring')
				selectElementsInRange();
			}

			if (config.autoScroll) {
				scrollPerhaps(e);
			}

			e.preventDefault();
		})
		.mouseup(function (e) {
			
			
			
			if (config.selectables) {			
			   if (moving_mouse) {
			   	
			   	
			   	// if (status=='authoring') selectElementsInRange();
			   }	
			}

			hideSelectBox(e);

			e.preventDefault();
		});

	// Be nice
	return this;
};
