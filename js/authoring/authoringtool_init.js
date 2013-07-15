 
 /*
  * renderDiv - div, do ktoreho sa zobrazi editor
  * 
  */ 
 
 var script_file = 'scripts/editor.php';  
  
 function loadAuthoringTool(renderDiv) {
  
      $.get(script_file, {action: ""}, 
  
           function render(data) {
             
          
             
               $("#"+renderDiv).html(data);
               
	    
	        buttons_noactive();  	
	 
         
        
                $("#authoring-content .authoring-panes .authoring-pane #authoring-edit-area #container ul").dragToSelect({   
                    selectables: 'div', 
                    onHide: function () { }
                });
         
           }

      );
  
  }
  
  

  
