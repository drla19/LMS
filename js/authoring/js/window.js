	function _open_scroll(theURL, winName, width, height) { //v2.1
		msgWindow=window.open(theURL , winName, 'height='+height+',width='+width+',top='+((screen.availHeight - height) /2)+',left='+((screen.availWidth - width) /2) + ',status=0,resizable=1,scrollbars=1,location=0'); 
		msgWindow.focus();
		return false;
	}
	
	function _open(theURL, winName, width, height) { //v2.1
		msgWindow=window.open(theURL , winName, 'height='+height+',width='+width+',top='+((screen.availHeight - height) /2)+',left='+((screen.availWidth - width) /2) + ',status=0,resizable=1,scrollbars=0,location=0'); 
		msgWindow.focus();
		return false;
	}
	
	function _open_fixed(theURL, winName, width, height) { //v2.1
		msgWindow=window.open(theURL , winName, 'height='+height+',width='+width+',top='+((screen.availHeight - height) /2)+',left='+((screen.availWidth - width) /2) + ',status=0,resizable=0,scrollbars=0,location=0'); 
		msgWindow.focus();
		return false;
	}
	
	

	var mp3_player2_window = ''
	
	// otvori nove okno, pripadne varti otvorene okno
	function get_mp3_player_window() { //v2.1	
		var height	= 340;
		var width	= 340;
	
		if (!mp3_player2_window.closed && mp3_player2_window.location) {
			// okno je uz otvorene, vratime
			return mp3_player2_window
		} else {
			mp3_player2_window = window.open('player2/index.php' , 'mp3_player2_window_name', 'height='+height+',width='+width+',top='+((screen.availHeight - height) /2)+',left='+((screen.availWidth - width) /2) + ',status=0,resizable=0,scrollbars=0,location=0'); 
			//mp3_player2_window.focus();
			return mp3_player2_window;
		}
	}