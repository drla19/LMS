<?php


    if ($_POST["id"] == "1") {
        
       echo '
           
           <div style="z-index:1000; left:200px; top:200px; width:410px; height:110px;" id="authoring_box1" class="authoring_box">
           <div id="handle1" class="jqHandle-top jqDrag" style="visibility:hidden;"></div>
           <div class="jqHandle-bottom jqDrag" style="visibility:hidden;"></div>
           <div class="jqHandle-left jqDrag-left" style="visibility:hidden;"></div>
           <div class="jqHandle-right jqDrag-right" style="visibility:hidden;"></div>
           <div class="handle-nw"  style="visibility:hidden;"></div>
           <div class="handle-ne" style="visibility:hidden;"></div>
           <div class="handle-se" style="visibility:hidden;"></div>
           <div class="handle-sw" style="visibility:hidden;"></div>
           <div class="authoring_box_text" id="text1" style="height:190px;"><span style="font-size: 36pt;">Click to add text</span></div>
           </div>


           <script type=\'text/javascript\'> $(\'#authoring_box1\').jqDrag(\'.jqDrag\'); $(\'#authoring_box1\').jqDrag(\'.jqDrag-left\'); $(\'#authoring_box1\').jqDrag(\'.jqDrag-right\'); $(\'#authoring_box1\').jqResize(\'.handle-nw\',\'nw\');  $(\'#authoring_box1\').jqResize(\'.handle-ne\',\'ne\');  $(\'#authoring_box1\').jqResize(\'.handle-se\',\'se\'); $(\'#authoring_box1\').jqResize(\'.handle-sw\',\'sw\');  
           
            $(\'#authoring_box1 .jqHandle-top\').bind(\'click\', function(e){ hideiframe(); });     $(\'#authoring_box1 .jqHandle-bottom\').bind(\'click\', function(e){ hideiframe(); });  $(\'#authoring_box1 .jqHandle-left\').bind(\'click\', function(e){ hideiframe(); });  $(\'#authoring_box1 .jqHandle-right\').bind(\'click\', function(e){ hideiframe(); });$(\'#authoring_box1 .jqHandle-bottom\').bind(\'click\',saveCon);  $(\'#authoring_box1 .jqHandle-top\').bind(\'mousedown\',saveCon);  $(\'#authoring_box1 .jqHandle-left\').bind(\'mousedown\',saveCon);   $(\'#authoring_box1 .jqHandle-right\').bind(\'mousedown\',saveCon);  $(\'#text1\').bind(\'click\', function(e){    if (mode==\'edit\') saveDivContent(selected_div,1); 
             if ((mode==\'edit\') && ($(\'#authoring_box1 .handle-nw\').css(\'visibility\') === \'hidden\')) { $(\'#authoring_box1 .handle-nw\').css(\'visibility\',\'\'); $(\'#authoring_box1 .handle-ne\').css(\'visibility\',\'\');  $(\'#authoring_box1 .handle-sw\').css(\'visibility\',\'\');  $(\'#authoring_box1 .handle-se\').css(\'visibility\',\'\'); $(\'#authoring_box1 .jqHandle-top\').css(\'visibility\',\'\');  $(\'#authoring_box1 .jqHandle-bottom\').css(\'visibility\',\'\');   $(\'#authoring_box1 .jqHandle-left\').css(\'visibility\',\'\');  $(\'#authoring_box1 .jqHandle-right\').css(\'visibility\',\'\');    setZindex(\'t1\');   div_from=\'t\';   }  else  {     }    });
                
           $(\'#authoring_box1 \').bind(\'contextmenu\',function(e)  { if (mode==\'edit\') showDivContextMenu(1);  }  ); </script>

              
                  <div style="z-index:1000; left:250px; top:300px; width:510px; height:110px;" id="authoring_box2" class="authoring_box">
              <div id="handle2" class="jqHandle-top jqDrag" style="visibility:hidden;"></div>
              <div class="jqHandle-bottom jqDrag" style="visibility:hidden;"></div>
              <div class="jqHandle-left jqDrag-left" style="visibility:hidden;"></div>
              <div class="jqHandle-right jqDrag-right" style="visibility:hidden;"></div>
              <div class="handle-nw" style="visibility:hidden;"></div>
              <div class="handle-ne" style="visibility:hidden;"></div>
              <div class="handle-se" style="visibility:hidden;"></div>
              <div class="handle-sw" style="visibility:hidden;"></div>
              <div class="authoring_box_text" id="text2" style="height:190px;"> Click to add text</div></div>

              <script type=\'text/javascript\'> 
                 $(\'#authoring_box2\').jqDrag(\'.jqDrag\'); 
                 $(\'#authoring_box2\').jqDrag(\'.jqDrag-left\'); 
                 $(\'#authoring_box2\').jqDrag(\'.jqDrag-right\');
                 $(\'#authoring_box2\').jqResize(\'.handle-nw\',\'nw\'); 
                 $(\'#authoring_box2\').jqResize(\'.handle-ne\',\'ne\'); 
                 $(\'#authoring_box2\').jqResize(\'.handle-se\',\'se\'); 
                 $(\'#authoring_box2\').jqResize(\'.handle-sw\',\'sw\');  
             
                 $(\'#authoring_box2 .jqHandle-top\').bind(\'click\', function(e){ hideiframe(); });     
                   $(\'#authoring_box2 .jqHandle-bottom\').bind(\'click\', function(e){ hideiframe(); });  $(\'#authoring_box2 .jqHandle-left\').bind(\'click\', function(e){ hideiframe(); });  $(\'#authoring_box2 .jqHandle-right\').bind(\'click\', function(e){ hideiframe(); });$(\'#authoring_box2 .jqHandle-bottom\').bind(\'click\',saveCon);  $(\'#authoring_box2 .jqHandle-top\').bind(\'mousedown\',saveCon);  $(\'#authoring_box2 .jqHandle-left\').bind(\'mousedown\',saveCon);   $(\'#authoring_box2 .jqHandle-right\').bind(\'mousedown\',saveCon);  $(\'#text2\').bind(\'click\', function(e){    if (mode==\'edit\') saveDivContent(selected_div,2);  if ((mode==\'edit\') && ($(\'#authoring_box2 .handle-nw\').css(\'visibility\') === \'hidden\')) { $(\'#authoring_box2 .handle-nw\').css(\'visibility\',\'\'); $(\'#authoring_box2 .handle-ne\').css(\'visibility\',\'\');  $(\'#authoring_box2 .handle-sw\').css(\'visibility\',\'\');  $(\'#authoring_box2 .handle-se\').css(\'visibility\',\'\'); $(\'#authoring_box2 .jqHandle-top\').css(\'visibility\',\'\');  $(\'#authoring_box2 .jqHandle-bottom\').css(\'visibility\',\'\');   $(\'#authoring_box2 .jqHandle-left\').css(\'visibility\',\'\');  $(\'#authoring_box2 .jqHandle-right\').css(\'visibility\',\'\');    setZindex(\'t2\');   div_from=\'t\';   }  else  {     }    });
                
                 $(\'#authoring_box2 \').bind(\'contextmenu\',function(e)  { if (mode==\'edit\') showDivContextMenu(2);  }  ); </script>
           


         ';
        
    }

    
    
    
     if ($_POST["id"] == "2") {
        
       echo '
           
           <div style="z-index:1000; left:65px; top:50px; width:410px; height:110px;" id="authoring_box1" class="authoring_box">
           <div id="handle1" class="jqHandle-top jqDrag" style="visibility:hidden;"></div>
           <div class="jqHandle-bottom jqDrag" style="visibility:hidden;"></div>
           <div class="jqHandle-left jqDrag-left" style="visibility:hidden;"></div>
           <div class="jqHandle-right jqDrag-right" style="visibility:hidden;"></div>
           <div class="handle-nw"  style="visibility:hidden;"></div>
           <div class="handle-ne" style="visibility:hidden;"></div>
           <div class="handle-se" style="visibility:hidden;"></div>
           <div class="handle-sw" style="visibility:hidden;"></div>
           <div class="authoring_box_text" id="text1" style="height:190px;"><span style="font-size: 36pt;">Click to add text</span></div>
           </div>


           <script type=\'text/javascript\'> $(\'#authoring_box1\').jqDrag(\'.jqDrag\'); $(\'#authoring_box1\').jqDrag(\'.jqDrag-left\'); $(\'#authoring_box1\').jqDrag(\'.jqDrag-right\'); $(\'#authoring_box1\').jqResize(\'.handle-nw\',\'nw\');  $(\'#authoring_box1\').jqResize(\'.handle-ne\',\'ne\');  $(\'#authoring_box1\').jqResize(\'.handle-se\',\'se\'); $(\'#authoring_box1\').jqResize(\'.handle-sw\',\'sw\');  
           
            $(\'#authoring_box1 .jqHandle-top\').bind(\'click\', function(e){ hideiframe(); });     $(\'#authoring_box1 .jqHandle-bottom\').bind(\'click\', function(e){ hideiframe(); });  $(\'#authoring_box1 .jqHandle-left\').bind(\'click\', function(e){ hideiframe(); });  $(\'#authoring_box1 .jqHandle-right\').bind(\'click\', function(e){ hideiframe(); });$(\'#authoring_box1 .jqHandle-bottom\').bind(\'click\',saveCon);  $(\'#authoring_box1 .jqHandle-top\').bind(\'mousedown\',saveCon);  $(\'#authoring_box1 .jqHandle-left\').bind(\'mousedown\',saveCon);   $(\'#authoring_box1 .jqHandle-right\').bind(\'mousedown\',saveCon);  $(\'#text1\').bind(\'click\', function(e){    if (mode==\'edit\') saveDivContent(selected_div,1); 
             if ((mode==\'edit\') && ($(\'#authoring_box1 .handle-nw\').css(\'visibility\') === \'hidden\')) { $(\'#authoring_box1 .handle-nw\').css(\'visibility\',\'\'); $(\'#authoring_box1 .handle-ne\').css(\'visibility\',\'\');  $(\'#authoring_box1 .handle-sw\').css(\'visibility\',\'\');  $(\'#authoring_box1 .handle-se\').css(\'visibility\',\'\'); $(\'#authoring_box1 .jqHandle-top\').css(\'visibility\',\'\');  $(\'#authoring_box1 .jqHandle-bottom\').css(\'visibility\',\'\');   $(\'#authoring_box1 .jqHandle-left\').css(\'visibility\',\'\');  $(\'#authoring_box1 .jqHandle-right\').css(\'visibility\',\'\');    setZindex(\'t1\');   div_from=\'t\';   }  else  {     }    });
                
           $(\'#authoring_box1 \').bind(\'contextmenu\',function(e)  { if (mode==\'edit\') showDivContextMenu(1);  }  ); </script>

              
                  <div style="z-index:1000; left:65px; top:150px; width:510px; height:310px;" id="authoring_box2" class="authoring_box">
              <div id="handle2" class="jqHandle-top jqDrag" style="visibility:hidden;"></div>
              <div class="jqHandle-bottom jqDrag" style="visibility:hidden;"></div>
              <div class="jqHandle-left jqDrag-left" style="visibility:hidden;"></div>
              <div class="jqHandle-right jqDrag-right" style="visibility:hidden;"></div>
              <div class="handle-nw" style="visibility:hidden;"></div>
              <div class="handle-ne" style="visibility:hidden;"></div>
              <div class="handle-se" style="visibility:hidden;"></div>
              <div class="handle-sw" style="visibility:hidden;"></div>
              <div class="authoring_box_text" id="text2" style="height:190px;"> Click to add text</div></div>

              <script type=\'text/javascript\'> 
                 $(\'#authoring_box2\').jqDrag(\'.jqDrag\'); 
                 $(\'#authoring_box2\').jqDrag(\'.jqDrag-left\'); 
                 $(\'#authoring_box2\').jqDrag(\'.jqDrag-right\');
                 $(\'#authoring_box2\').jqResize(\'.handle-nw\',\'nw\'); 
                 $(\'#authoring_box2\').jqResize(\'.handle-ne\',\'ne\'); 
                 $(\'#authoring_box2\').jqResize(\'.handle-se\',\'se\'); 
                 $(\'#authoring_box2\').jqResize(\'.handle-sw\',\'sw\');  
             
                 $(\'#authoring_box2 .jqHandle-top\').bind(\'click\', function(e){ hideiframe(); });     
                   $(\'#authoring_box2 .jqHandle-bottom\').bind(\'click\', function(e){ hideiframe(); });  $(\'#authoring_box2 .jqHandle-left\').bind(\'click\', function(e){ hideiframe(); });  $(\'#authoring_box2 .jqHandle-right\').bind(\'click\', function(e){ hideiframe(); });$(\'#authoring_box2 .jqHandle-bottom\').bind(\'click\',saveCon);  $(\'#authoring_box2 .jqHandle-top\').bind(\'mousedown\',saveCon);  $(\'#authoring_box2 .jqHandle-left\').bind(\'mousedown\',saveCon);   $(\'#authoring_box2 .jqHandle-right\').bind(\'mousedown\',saveCon);  $(\'#text2\').bind(\'click\', function(e){    if (mode==\'edit\') saveDivContent(selected_div,2);  if ((mode==\'edit\') && ($(\'#authoring_box2 .handle-nw\').css(\'visibility\') === \'hidden\')) { $(\'#authoring_box2 .handle-nw\').css(\'visibility\',\'\'); $(\'#authoring_box2 .handle-ne\').css(\'visibility\',\'\');  $(\'#authoring_box2 .handle-sw\').css(\'visibility\',\'\');  $(\'#authoring_box2 .handle-se\').css(\'visibility\',\'\'); $(\'#authoring_box2 .jqHandle-top\').css(\'visibility\',\'\');  $(\'#authoring_box2 .jqHandle-bottom\').css(\'visibility\',\'\');   $(\'#authoring_box2 .jqHandle-left\').css(\'visibility\',\'\');  $(\'#authoring_box2 .jqHandle-right\').css(\'visibility\',\'\');    setZindex(\'t2\');   div_from=\'t\';   }  else  {     }    });
                
                 $(\'#authoring_box2 \').bind(\'contextmenu\',function(e)  { if (mode==\'edit\') showDivContextMenu(2);  }  ); </script>
           


         ';
        
    }

    
    
    
    
    
    
    if ($_POST["id"] == "3") {
        
           echo '
           
           <div style="z-index:1000; left:65px; top:50px; width:500px; height:100px;" id="authoring_box1" class="authoring_box">
              <div id="handle1" class="jqHandle-top jqDrag" style="visibility:hidden;"></div>
              <div class="jqHandle-bottom jqDrag" style="visibility:hidden;"></div>
              <div class="jqHandle-left jqDrag-left" style="visibility:hidden;"></div>
              <div class="jqHandle-right jqDrag-right" style="visibility:hidden;"></div>
              <div class="handle-nw" style="visibility:hidden;"></div>
              <div class="handle-ne" style="visibility:hidden;"></div>
              <div class="handle-se" style="visibility:hidden;"></div>
              <div class="handle-sw" style="visibility:hidden;"></div>
              <div class="authoring_box_text" id="text1" style="height:190px;"><span style="font-size: 36pt;">Click to add text</span></div></div>

              <script type=\'text/javascript\'> 
                 $(\'#authoring_box1\').jqDrag(\'.jqDrag\'); 
                 $(\'#authoring_box1\').jqDrag(\'.jqDrag-left\'); 
                 $(\'#authoring_box1\').jqDrag(\'.jqDrag-right\');
                 $(\'#authoring_box1\').jqResize(\'.handle-nw\',\'nw\'); 
                 $(\'#authoring_box1\').jqResize(\'.handle-ne\',\'ne\'); 
                 $(\'#authoring_box1\').jqResize(\'.handle-se\',\'se\'); 
                 $(\'#authoring_box1\').jqResize(\'.handle-sw\',\'sw\');  
             
                 $(\'#authoring_box1 .jqHandle-top\').bind(\'click\', function(e){ hideiframe(); });     
                   $(\'#authoring_box1 .jqHandle-bottom\').bind(\'click\', function(e){ hideiframe(); });  $(\'#authoring_box1 .jqHandle-left\').bind(\'click\', function(e){ hideiframe(); });  $(\'#authoring_box1 .jqHandle-right\').bind(\'click\', function(e){ hideiframe(); });$(\'#authoring_box1 .jqHandle-bottom\').bind(\'click\',saveCon);  $(\'#authoring_box1 .jqHandle-top\').bind(\'mousedown\',saveCon);  $(\'#authoring_box1 .jqHandle-left\').bind(\'mousedown\',saveCon);   $(\'#authoring_box1 .jqHandle-right\').bind(\'mousedown\',saveCon);  $(\'#text1\').bind(\'click\', function(e){    if (mode==\'edit\') saveDivContent(selected_div,1);  if ((mode==\'edit\') && ($(\'#authoring_box1 .handle-nw\').css(\'visibility\') === \'hidden\')) { $(\'#authoring_box1 .handle-nw\').css(\'visibility\',\'\'); $(\'#authoring_box1 .handle-ne\').css(\'visibility\',\'\');  $(\'#authoring_box1 .handle-sw\').css(\'visibility\',\'\');  $(\'#authoring_box1 .handle-se\').css(\'visibility\',\'\'); $(\'#authoring_box1 .jqHandle-top\').css(\'visibility\',\'\');  $(\'#authoring_box1 .jqHandle-bottom\').css(\'visibility\',\'\');   $(\'#authoring_box1 .jqHandle-left\').css(\'visibility\',\'\');  $(\'#authoring_box1 .jqHandle-right\').css(\'visibility\',\'\');    setZindex(\'t1\');   div_from=\'t\';   }  else  {     }    });
                
                 $(\'#authoring_box1 \').bind(\'contextmenu\',function(e)  { if (mode==\'edit\') showDivContextMenu(1);  }  ); </script>
           

              
               <div style="z-index:1000; left:400px; top:150px; width:300px; height:250px;" id="authoring_box2" class="authoring_box">
              <div id="handle2" class="jqHandle-top jqDrag" style="visibility:hidden;"></div>
              <div class="jqHandle-bottom jqDrag" style="visibility:hidden;"></div>
              <div class="jqHandle-left jqDrag-left" style="visibility:hidden;"></div>
              <div class="jqHandle-right jqDrag-right" style="visibility:hidden;"></div>
              <div class="handle-nw" style="visibility:hidden;"></div>
              <div class="handle-ne" style="visibility:hidden;"></div>
              <div class="handle-se" style="visibility:hidden;"></div>
              <div class="handle-sw" style="visibility:hidden;"></div>
              <div class="authoring_box_text" id="text2" style="height:190px;"> Click to add text</div></div>

              <script type=\'text/javascript\'> 
                 $(\'#authoring_box2\').jqDrag(\'.jqDrag\'); 
                 $(\'#authoring_box2\').jqDrag(\'.jqDrag-left\'); 
                 $(\'#authoring_box2\').jqDrag(\'.jqDrag-right\');
                 $(\'#authoring_box2\').jqResize(\'.handle-nw\',\'nw\'); 
                 $(\'#authoring_box2\').jqResize(\'.handle-ne\',\'ne\'); 
                 $(\'#authoring_box2\').jqResize(\'.handle-se\',\'se\'); 
                 $(\'#authoring_box2\').jqResize(\'.handle-sw\',\'sw\');  
             
                 $(\'#authoring_box2 .jqHandle-top\').bind(\'click\', function(e){ hideiframe(); });     
                   $(\'#authoring_box2 .jqHandle-bottom\').bind(\'click\', function(e){ hideiframe(); });  $(\'#authoring_box2 .jqHandle-left\').bind(\'click\', function(e){ hideiframe(); });  $(\'#authoring_box2 .jqHandle-right\').bind(\'click\', function(e){ hideiframe(); });$(\'#authoring_box2 .jqHandle-bottom\').bind(\'click\',saveCon);  $(\'#authoring_box2 .jqHandle-top\').bind(\'mousedown\',saveCon);  $(\'#authoring_box2 .jqHandle-left\').bind(\'mousedown\',saveCon);   $(\'#authoring_box2 .jqHandle-right\').bind(\'mousedown\',saveCon);  $(\'#text2\').bind(\'click\', function(e){    if (mode==\'edit\') saveDivContent(selected_div,2);  if ((mode==\'edit\') && ($(\'#authoring_box2 .handle-nw\').css(\'visibility\') === \'hidden\')) { $(\'#authoring_box2 .handle-nw\').css(\'visibility\',\'\'); $(\'#authoring_box2 .handle-ne\').css(\'visibility\',\'\');  $(\'#authoring_box2 .handle-sw\').css(\'visibility\',\'\');  $(\'#authoring_box2 .handle-se\').css(\'visibility\',\'\'); $(\'#authoring_box2 .jqHandle-top\').css(\'visibility\',\'\');  $(\'#authoring_box2 .jqHandle-bottom\').css(\'visibility\',\'\');   $(\'#authoring_box2 .jqHandle-left\').css(\'visibility\',\'\');  $(\'#authoring_box2 .jqHandle-right\').css(\'visibility\',\'\');    setZindex(\'t2\');   div_from=\'t\';   }  else  {     }    });
                
                 $(\'#authoring_box2 \').bind(\'contextmenu\',function(e)  { if (mode==\'edit\') showDivContextMenu(2);  }  ); </script>
           

         

                  

             <div style="z-index:1000; left:65px; top:150px; width:300px; height:250px;" id="authoring_box3" class="authoring_box">
              <div id="handle3" class="jqHandle-top jqDrag" style="visibility:hidden;"></div>
              <div class="jqHandle-bottom jqDrag" style="visibility:hidden;"></div>
              <div class="jqHandle-left jqDrag-left" style="visibility:hidden;"></div>
              <div class="jqHandle-right jqDrag-right" style="visibility:hidden;"></div>
              <div class="handle-nw" style="visibility:hidden;"></div>
              <div class="handle-ne" style="visibility:hidden;"></div>
              <div class="handle-se" style="visibility:hidden;"></div>
              <div class="handle-sw" style="visibility:hidden;"></div>
              <div class="authoring_box_text" id="text3" style="height:190px;"> Click to add text</div></div>

              <script type=\'text/javascript\'> 
                 $(\'#authoring_box3\').jqDrag(\'.jqDrag\'); 
                 $(\'#authoring_box3\').jqDrag(\'.jqDrag-left\'); 
                 $(\'#authoring_box3\').jqDrag(\'.jqDrag-right\');
                 $(\'#authoring_box3\').jqResize(\'.handle-nw\',\'nw\'); 
                 $(\'#authoring_box3\').jqResize(\'.handle-ne\',\'ne\'); 
                 $(\'#authoring_box3\').jqResize(\'.handle-se\',\'se\'); 
                 $(\'#authoring_box3\').jqResize(\'.handle-sw\',\'sw\');  
             
                 $(\'#authoring_box3 .jqHandle-top\').bind(\'click\', function(e){ hideiframe(); });     
                   $(\'#authoring_box3 .jqHandle-bottom\').bind(\'click\', function(e){ hideiframe(); });  $(\'#authoring_box3 .jqHandle-left\').bind(\'click\', function(e){ hideiframe(); });  $(\'#authoring_box3 .jqHandle-right\').bind(\'click\', function(e){ hideiframe(); });$(\'#authoring_box3 .jqHandle-bottom\').bind(\'click\',saveCon);  $(\'#authoring_box3 .jqHandle-top\').bind(\'mousedown\',saveCon);  $(\'#authoring_box3 .jqHandle-left\').bind(\'mousedown\',saveCon);   $(\'#authoring_box3 .jqHandle-right\').bind(\'mousedown\',saveCon);  $(\'#text3\').bind(\'click\', function(e){    if (mode==\'edit\') saveDivContent(selected_div,3);  if ((mode==\'edit\') && ($(\'#authoring_box3 .handle-nw\').css(\'visibility\') === \'hidden\')) { $(\'#authoring_box3 .handle-nw\').css(\'visibility\',\'\'); $(\'#authoring_box3 .handle-ne\').css(\'visibility\',\'\');  $(\'#authoring_box3 .handle-sw\').css(\'visibility\',\'\');  $(\'#authoring_box3 .handle-se\').css(\'visibility\',\'\'); $(\'#authoring_box3 .jqHandle-top\').css(\'visibility\',\'\');  $(\'#authoring_box3 .jqHandle-bottom\').css(\'visibility\',\'\');   $(\'#authoring_box3 .jqHandle-left\').css(\'visibility\',\'\');  $(\'#authoring_box3 .jqHandle-right\').css(\'visibility\',\'\');    setZindex(\'t3\');   div_from=\'t\';   }  else  {     }    });
                
                 $(\'#authoring_box3 \').bind(\'contextmenu\',function(e)  { if (mode==\'edit\') showDivContextMenu(3);  }  ); </script>
           

 

          
        
         ';
        
        
    }



    
    
    
    
    
       
    if ($_POST["id"] == "4") {
        
           echo '
           
           <div style="z-index:1000; left:65px; top:400px; width:500px; height:100px;" id="authoring_box1" class="authoring_box">
              <div id="handle1" class="jqHandle-top jqDrag" style="visibility:hidden;"></div>
              <div class="jqHandle-bottom jqDrag" style="visibility:hidden;"></div>
              <div class="jqHandle-left jqDrag-left" style="visibility:hidden;"></div>
              <div class="jqHandle-right jqDrag-right" style="visibility:hidden;"></div>
              <div class="handle-nw" style="visibility:hidden;"></div>
              <div class="handle-ne" style="visibility:hidden;"></div>
              <div class="handle-se" style="visibility:hidden;"></div>
              <div class="handle-sw" style="visibility:hidden;"></div>
              <div class="authoring_box_text" id="text1" style="height:190px;"><span style="font-size: 36pt;">Click to add text</span></div></div>

              <script type=\'text/javascript\'> 
                 $(\'#authoring_box1\').jqDrag(\'.jqDrag\'); 
                 $(\'#authoring_box1\').jqDrag(\'.jqDrag-left\'); 
                 $(\'#authoring_box1\').jqDrag(\'.jqDrag-right\');
                 $(\'#authoring_box1\').jqResize(\'.handle-nw\',\'nw\'); 
                 $(\'#authoring_box1\').jqResize(\'.handle-ne\',\'ne\'); 
                 $(\'#authoring_box1\').jqResize(\'.handle-se\',\'se\'); 
                 $(\'#authoring_box1\').jqResize(\'.handle-sw\',\'sw\');  
             
                 $(\'#authoring_box1 .jqHandle-top\').bind(\'click\', function(e){ hideiframe(); });     
                   $(\'#authoring_box1 .jqHandle-bottom\').bind(\'click\', function(e){ hideiframe(); });  $(\'#authoring_box1 .jqHandle-left\').bind(\'click\', function(e){ hideiframe(); });  $(\'#authoring_box1 .jqHandle-right\').bind(\'click\', function(e){ hideiframe(); });$(\'#authoring_box1 .jqHandle-bottom\').bind(\'click\',saveCon);  $(\'#authoring_box1 .jqHandle-top\').bind(\'mousedown\',saveCon);  $(\'#authoring_box1 .jqHandle-left\').bind(\'mousedown\',saveCon);   $(\'#authoring_box1 .jqHandle-right\').bind(\'mousedown\',saveCon);  $(\'#text1\').bind(\'click\', function(e){    if (mode==\'edit\') saveDivContent(selected_div,1);  if ((mode==\'edit\') && ($(\'#authoring_box1 .handle-nw\').css(\'visibility\') === \'hidden\')) { $(\'#authoring_box1 .handle-nw\').css(\'visibility\',\'\'); $(\'#authoring_box1 .handle-ne\').css(\'visibility\',\'\');  $(\'#authoring_box1 .handle-sw\').css(\'visibility\',\'\');  $(\'#authoring_box1 .handle-se\').css(\'visibility\',\'\'); $(\'#authoring_box1 .jqHandle-top\').css(\'visibility\',\'\');  $(\'#authoring_box1 .jqHandle-bottom\').css(\'visibility\',\'\');   $(\'#authoring_box1 .jqHandle-left\').css(\'visibility\',\'\');  $(\'#authoring_box1 .jqHandle-right\').css(\'visibility\',\'\');    setZindex(\'t1\');   div_from=\'t\';   }  else  {     }    });
                
                 $(\'#authoring_box1 \').bind(\'contextmenu\',function(e)  { if (mode==\'edit\') showDivContextMenu(1);  }  ); </script>

         ';
        
    }

    
    
    
    
      if ($_POST["id"] == "5") {
        
           echo '
           
           

         ';
        
    }

?>
