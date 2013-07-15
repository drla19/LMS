/*
 * jqDnR - Minimalistic Drag'n'Resize for jQuery.
 *
 * Copyright (c) 2007 Brice Burgess <bhb@iceburg.net>, http://www.iceburg.net
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * $Version: 2007.08.19 +r2
 */

/*
 * 2008.10.5 - Andrew Hughes <a.hughes@gmail.com>
 *
 *    Added full directional support (N,NE,E,SE,S,SW,W,NW)
 *    Added sizing limitations
 */


/*
 * modified by michal machovic
 * www.gingers.sk
 *
 */


(function($){   
	$.fn.jqDrag=function(h){
		return i(this,h,'d');
	};
	$.fn.jqResize=function(h,d,mw,mh){
		return i(this,h,d,mw,mh);
	};

	$.jqDnR={
		dnr:{},
		e:0,
		drag:function(v){   
						
					
	 		if(M.k == 'd') { 
	 			 E.css({left:M.X+v.pageX-M.pX,top:M.Y+v.pageY-M.pY});
	 			 
				  
				 if (drag_status=='bigbox') {
				  				  
				  
				 if (selected_video == '1') {
				 	
				    videobox_left = $("#authoring_videobox").css('left');
				    videobox_left = Number(videobox_left.substr(0,videobox_left.length-2));
					   
				    //$("#drag").html('M.X='+M.X+'  v.pageX='+v.pageX+'  -M.px='+M.pX+'  rozdiel='+selected_width_diff[ii]);
				    $("#authoring_videobox").css({left:selected_video_width_diff+M.X+v.pageX-M.pX,top:selected_video_height_diff+M.Y+v.pageY-M.pY});
				 	
				 } 
				  
				  				  
				 if (selected.length>0) 
	 			  for (ii=0; ii<selected.length; ii++) {
			
				    box_left = $("#authoring_box"+selected[ii]).css('left');
				    box_left = Number(box_left.substr(0,box_left.length-2));
					   
				    //$("#drag").html('M.X='+M.X+'  v.pageX='+v.pageX+'  -M.px='+M.pX+'  rozdiel='+selected_width_diff[ii]);
				    $("#authoring_box"+selected[ii]).css({left:selected_width_diff[ii]+M.X+v.pageX-M.pX,top:selected_height_diff[ii]+M.Y+v.pageY-M.pY});
					   
			      }
			      
			      
			      if (selected_audio.length>0) 
	 			  for (ii=0; ii<selected_audio.length; ii++) {
			
				    audiobox_left = $("#authoring_audiobox"+selected_audio[ii]).css('left');
				    audiobox_left = Number(audiobox_left.substr(0,audiobox_left.length-2));
					   
				    //$("#drag").html('M.X='+M.X+'  v.pageX='+v.pageX+'  -M.px='+M.pX+'  rozdiel='+selected_width_diff[ii]);
				    $("#authoring_audiobox"+selected_audio[ii]).css({left:selected_audio_width_diff[ii]+M.X+v.pageX-M.pX,top:selected_audio_height_diff[ii]+M.Y+v.pageY-M.pY});
					   
			      }
			      
			      
                 if (selected_images.length>0) 
			      for (ii=0; ii<selected_images.length; ii++) {
			
				    images_box_left = $("#authoring_imagebox"+selected_images[ii]).css('left');
				    images_box_left = Number(images_box_left.substr(0,images_box_left.length-2));
					   
				    //$("#drag").html('M.X='+M.X+'  v.pageX='+v.pageX+'  -M.px='+M.pX+'  rozdiel='+selected_width_diff[ii]);
				  
				 			  
				    $("#authoring_imagebox"+selected_images[ii]).css({left:selected_images_width_diff[ii]+M.X+v.pageX-M.pX,top:selected_images_height_diff[ii]+M.Y+v.pageY-M.pY});
				 }
				 
				 
				 
				 if (selected_flash.length>0) 
			      for (ii=0; ii<selected_flash.length; ii++) {
			
				    flash_box_left = $("#authoring_flashbox"+selected_flash[ii]).css('left');
				    flash_box_left = Number(flash_box_left.substr(0,flash_box_left.length-2));
					   
				    //$("#drag").html('M.X='+M.X+'  v.pageX='+v.pageX+'  -M.px='+M.pX+'  rozdiel='+selected_width_diff[ii]);
				    $("#authoring_flashbox"+selected_flash[ii]).css({left:selected_flash_width_diff[ii]+M.X+v.pageX-M.pX,top:selected_flash_height_diff[ii]+M.Y+v.pageY-M.pY});
				 }
				 
				 }
				 
				 //$("#drag").css('background','green');
				 dragging = 'yes'; 
		    }
			 		 
	 		else
			{
				
				 
				// alert(selected_div);
				// alert(div_type);
				  
				// $("iframe#iView").css('visibility','hidden');
				 
			      $(document.body).css('cursor',M.k+'-resize');
			      var x=M.X,y=M.Y,w=M.W,h=M.H;
				if (M.k=='n'||M.k=='ne'||M.k=='nw'){y=M.Y+v.pageY-M.pY;h=M.H+(M.pY-v.pageY);}
				if (M.k=='s'||M.k=='se'||M.k=='sw')h=Math.max(v.pageY-M.pY+M.H,0);
                        if (M.k=='w'||M.k=='nw'||M.k=='sw'){x=M.X+v.pageX-M.pX;w=M.W+(M.pX-v.pageX);}
				if (M.k=='e'||M.k=='ne'||M.k=='se')w=Math.max(v.pageX-M.pX+M.W,0);
				
				if (w>=M.mW) { 
					E.css({width:w,left:x});
					
				/*
					for (i=0; i<selected.length; i++) {
					   $("#box"+selected[i]).css({width:w,left:x});
						
					}
				*/	
				}	
					
				else{E.width(M.mW);if(M.k=='w'||M.k=='nw'||M.k=='sw')E.css('left',M.X+M.W-M.mW);}
				if (h>=M.mH)E.css({height:h,top:y});
				else{E.height(M.mH);if (M.k=='n'||M.k=='ne'||M.k=='nw') E.css('top',M.Y+M.H-M.mH);}
				
				 
				if (drag_status!='bigbox') { 			
				  
				  var ttyp = div_type.substr(0,1);
				  
				  if (ttyp=='t') {
  				   s_w = Number($("#authoring_box"+selected_div).css('width').substr(0,$("#authoring_box"+selected_div).css('width').length-2));
  				   s_h = Number($("#authoring_box"+selected_div).css('height').substr(0,$("#authoring_box"+selected_div).css('height').length-2));
				   
                                   
                                   
                                   
                                   
                                   //uprava velkosti text , lebo v ie neslo zmensit box okolo textu
                                   
                                   browser = navigator.appName;
				   if (browser == "Microsoft Internet Explorer") {
                                      
                                       $("#text"+selected_div).css('width',s_w);
                                       $("#text"+selected_div).css('height',s_h);  
                                        
                                   }
                                   
                                   else {
                                   
                                     $("#text"+selected_div).css('width',s_w-40);
                                     $("#text"+selected_div).css('height',s_h-20);
                                     
                                   }  
                                   
                                
                                
                               
                                
                                
                                
				   $("iframe#iView").css('width',s_w-20);     
	  			   $("iframe#iView").css('height',s_h-30);
		     	  }  
				
				 else { 		 
		
				   var ttyp = div_type.substr(0,1);   
				   
				   css_width = $("#authoring_imagebox"+selected_div).css('width');
				   css_height = $("#authoring_imagebox"+selected_div).css('height');
				   				   				   
				   s_w = Number(css_width.substr(0,css_width.length-2));
		    	           //s_h = Number(css_height.substr(0,css_height.length-2));
                                   
                                   s_h = Number(css_height.substr(0,css_height.length));
				   
				   if (ttyp=="i") {   //image
				      
                                      
                                      $("img#pic"+div_type.substr(1,div_type.length)).css('width',s_w);     
				      $("img#pic"+div_type.substr(1,div_type.length)).css('height',s_h);
				       				       
				       
                                       $("#authoring_imagebox"+selected_div).css('height',s_h);
                                       
                                       //$("#authoring_imagebox"+selected_div).css('height',s_h+10);
                                       
                                       
                                       var pic_width = $("#pic"+selected_div).css("width");
                                       var pic_height = $("#pic"+selected_div).css("height");
                                       
                                       
                                       
                                       
                                       $("#authoring_imagebox"+selected_div).css("widht",pic_width);
                                       $("#authoring_imagebox"+selected_div).css("height",pic_height);
                                       
                                       
				       
				       pp_width = $("#pic"+selected_div).css("width");
				       pp_height = $("#pic"+selected_div).css("height");
				       
				       pp_width = Math.round(pp_width.substr(0,pp_width.length-2));
				       pp_height = Math.round(pp_height.substr(0,pp_height.length-2));
				       
				       $("#counter_dimensions"+selected_div).css('visibility','visible');
				       $("#counter_dimensions"+selected_div).css('display','');
				       $("#counter_dimensions"+selected_div).html(pp_width+' x '+pp_height+' px');
				       
                                       
                                    
                                       
				       
				   }   
				   
				   
				   if (ttyp=="f") {   //flash
				       $("embed#"+div_type).css('width',s_w);     
				       $("embed#"+div_type).css('height',s_h);
				   }
				   
				  
				   if (ttyp=="a") {   //audio
				   	
				   	
				   	
				   }
				   
					
				 }	
			
					
				}
				
				
					
					if ((drag_status=='bigbox') || (div_type=='bigbox')) {
					    //zvacsovanie viacerych oznacenych obrazkov
						w = $("#authoring_bigbox").css("width").substr(0,$("#authoring_bigbox").css("width").length-2);
						h = $("#authoring_bigbox").css("height").substr(0,$("#authoring_bigbox").css("height").length-2);

                        top_b = $("#authoring_bigbox").css("top").substr(0,$("#authoring_bigbox").css("top").length-2);
                        left_b = $("#authoring_bigbox").css("left").substr(0,$("#authoring_bigbox").css("left").length-2);
                        
                        bottom_b = Number($("#authoring_bigbox").css("top").substr(0,$("#authoring_bigbox").css("top").length-2))+Number($("#authoring_bigbox").css("height").substr(0,$("#authoring_bigbox").css("height").length-2));

   										
						divide_width = w - bigbox_width;
						divide_height = h - bigbox_height;
						
											
										
						for (j=0;j<selected_images.length;j++) {
						 						  
						    $("img#pic"+selected_images[j]).css("width",Number(selected_images_orig_width[j])+Number(divide_width));
						    $("img#pic"+selected_images[j]).css("height",Number(selected_images_orig_height[j])+Number(divide_height));
						
						    $("#authoring_imagebox"+selected_images[j]).css("width",Number(selected_imagesdiv_orig_width[j])+Number(divide_width));
						    $("#authoring_imagebox"+selected_images[j]).css("height",Number(selected_imagesdiv_orig_height[j])+Number(divide_height));
						
                            top_i = $("#authoring_imagebox"+selected_images[j]).css("top").substr(0,$("#authoring_imagebox"+selected_images[j]).css("top").length-2);
                            left_i = $("#authoring_imagebox"+selected_images[j]).css("left").substr(0,$("#authoring_imagebox"+selected_images[j]).css("left").length-2);

			                bottom_i = Number(top_i)+Number($("#authoring_imagebox"+selected_images[j]).css("height").substr(0,$("#authoring_imagebox"+selected_images[j]).css("height").length-2));
			                
			                
			                new_top_i = Number(top_i) - (Number(bottom_i) - Number(bottom_b)); 
			                
			            	
							if (Number(top_i)<Number(top_b)) $("#authoring_imagebox"+selected_images[j]).css("top",top_b+"px");
							if (Number(left_i)<Number(left_b)) $("#authoring_imagebox"+selected_images[j]).css("left",left_b+"px");
						    if (Number(bottom_i)>Number(bottom_b)) $("#authoring_imagebox"+selected_images[j]).css("top",new_top_i+"px"); 
							
						
							 $("#tra").text('bottom_b='+bottom_b+'   bottom_i='+bottom_i);	
							
						}						
						
					}	
				
			}
			
			
			
	  		return false;
		},
		stop:function(){
						
			dragging = 'no';		
			//E.css('opacity',M.o);
			$(document.body).css('cursor','default');
			
			
			var ttyp = div_type.substr(0,1);
			if (ttyp == 't') {
				
				
				//$("iframe#iView").css('visibility','');
				//$("#text"+selected_div).css('visibility','hidden');
			}	
			
			
			$().unbind('mousemove',J.drag).unbind('mouseup',J.stop);
		}
	};
	var J=$.jqDnR,M=J.dnr,E=J.e,
	i=function(e,h,k,mW,mH){
		return e.each(function(){
			h=(h)?$(h,e):e;
	 		h.bind('mousedown',{e:e,k:k},function(v){
	 			
	 			
	 			var styp = div_type.substr(0,1);
	 			if (styp=="t") {   
			      
	 			  if (($("iframe#iView").css('visibility') == '') || ($("iframe#iView").css('visibility') == 'visible')) {	
	               
	               	               
	 			    var myIFrame = document.getElementById("iView");
                    var iframe_body_html = myIFrame.contentWindow.document.body.innerHTML;
                    $("#text"+selected_div).html(iframe_body_html);
                    $("#text"+selected_div).css("visibility","");
                    
					$("iframe#iView").css('visibility','hidden');
					
					browser = navigator.appName;
					if(browser == "Microsoft Internet Explorer") 
					$("iframe#iView").css('display','none');
					
					
					
                  }  
     			}
	 			
			 	var d=v.data,p={};E=d.e;
	 			// attempt utilization of dimensions plugin to fix IE issues
	 			if(E.css('position') != 'relative'){try{E.position(p);}catch(e){}}
	 			M={
					X:p.left||f('left')||0,
					Y:p.top||f('top')||0,
					W:f('width')||E[0].scrollWidth||0,
					H:f('height')||E[0].scrollHeight||0,
					pX:v.pageX,
					pY:v.pageY,
					k:d.k,
					o:E.css('opacity'),
					mW:mW||0,
					mH:mH||0
				};
				
				
				
	 			//E.css({opacity:0.3});
				$().mousemove($.jqDnR.drag).mouseup($.jqDnR.stop);
	 			return false;
	 		});
	 		
	 		
	 		
	 		
	 		h.bind('mousemove',{e:e,k:k},function(v){
			 				 			
				if (drag_status=='bigbox') {
			      min_left = $("#authoring_bigbox").css('left').substr(0,$("#authoring_bigbox").css('left').length-2);
			      
				  max_right = Number($("#authoring_bigbox").css('left').substr(0,$("#authoring_bigbox").css('left').length-2))+Number($("#authoring_bigbox").css('width').substr(0,$("#authoring_bigbox").css('width').length-2));
			      
			    
			      min_top = $("#authoring_bigbox").css('top').substr(0,$("#authoring_bigbox").css('top').length-2);
			      
			      
			      max_down = Number($("#authoring_bigbox").css('top').substr(0,$("#authoring_bigbox").css('top').length-2))+Number($("#authoring_bigbox").css('height').substr(0,$("#authoring_bigbox").css('height').length-2));
			      
			  
			  	}	
				
				
				
				if ((dragging=='yes')) {
				  
				  
				  
				  
				  
				  
				  $("iframe#iView").css('visibility','hidden');
				  
				  browser = navigator.appName;
				  
				  if(browser == "Microsoft Internet Explorer") { 
				    
				    /*
					var myIFrame = document.getElementById("iView");
                    var iframe_body_html = myIFrame.contentWindow.document.body.innerHTML;
                    $("#text"+selected_div).html(iframe_body_html);
                    $("#text"+selected_div).css('visibility','');
				    $("#text"+selected_div).css('display','');
					$("iframe#iView").css('display','none');
				    */
				  }  
				  
				  var ttyp = div_type.substr(0,1);	
							
                  if ((ttyp!='i') && (ttyp!='f') && (ttyp!='b') && (ttyp!='a') && (ttyp!='v')) {	
                  	 
				    sel_l = Number($("#authoring_box"+selected_div).css('left').substr(0,$("#authoring_box"+selected_div).css('left').length-2));
				    sel_t = Number($("#authoring_box"+selected_div).css('top').substr(0,$("#authoring_box"+selected_div).css('top').length-2));
											
			        sel_l = sel_l +10;
				    sel_t = sel_t + 10;						
	    			$("iframe#iView").css('left',sel_l);
 				    $("iframe#iView").css('top',sel_t);
				  }
				  
				  
				
					
				}
				
	 		});
	 		
	 		
	 			
		});
	},
	f=function(k){
		return parseInt(E.css(k))||false;
	};
})(jQuery);