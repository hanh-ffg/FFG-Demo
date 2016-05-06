$(document).ready(function(){
	$('.download').click(function(event){
		var sBrowser = getBrowser();
		var clicked = event.target.name;
		var href = clicked.href;
		var fileName = href.subString(href.lastIndexOf("/"), href.indexOf("\."));
		if(sBrowser == "IE" || sBrowser =="Safari") {
			SaveToDisk(href, fileName)
		}
	})
})

function getBrowser() {
	var sBrowser, sUsrAg = navigator.userAgent;

	if(sUsrAg.indexOf("Chrome") > -1) {
	    sBrowser = "Chrome";
	} else if (sUsrAg.indexOf("Safari") > -1) {
	    sBrowser = "Safari";
	} else if (sUsrAg.indexOf("Opera") > -1) {
	    sBrowser = "Opera";
	} else if (sUsrAg.indexOf("Firefox") > -1) {
	    sBrowser = "Firefox";
	} else if (sUsrAg.indexOf("MSIE") > -1) {
	    sBrowser = "IE";
	}

	return sBrowser;
}

function SaveToDisk(fileURL, fileName) {
    // for non-IE
    if (!window.ActiveXObject) {
        var save = document.createElement('a');
        save.href = fileURL;
        save.target = '_blank';
        save.download = fileName || 'unknown';

        var evt = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': false
        });
        save.dispatchEvent(evt);

        (window.URL || window.webkitURL).revokeObjectURL(save.href);
    }

    // for IE < 11
    else if ( !! window.ActiveXObject && document.execCommand)     {
        var _window = window.open(fileURL, '_blank');
        _window.document.close();
        _window.document.execCommand('SaveAs', true, fileName || fileURL)
        _window.close();
    }
}