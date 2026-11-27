var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
/*------------------------------------------------------------------------
# JA Opal for Joomla 1.5 - Version 1.0 - Licence Owner JA160963
# ------------------------------------------------------------------------
# Copyright (C) 2004-2008 J.O.O.M Solutions Co., Ltd. All Rights Reserved.
# @license - Copyrighted Commercial Software
# Author: J.O.O.M Solutions Co., Ltd
# Websites:  http://www.joomlart.com -  http://www.joomlancers.com
# This file may not be redistributed in whole or significant part.
-------------------------------------------------------------------------*/

sfHover = function() {
	var sfEls = document.getElementById("ja-cssmenu").getElementsByTagName("li");
	for (var i=0; i<sfEls.length; ++i) {
		sfEls[i].onmouseover=function() {
			clearTimeout(this.timer);
			if(this.className.indexOf("sfhover") == -1)
				this.className+="sfhover";
		}
		sfEls[i].onmouseout=function() {
			this.timer = setTimeout(sfHoverOut.bind(this), 20);
		}
	}
}

function sfHoverOut() {
	clearTimeout(this.timer);
	this.className=this.className.replace(new RegExp("sfhover\\b"), "");
}

if (window.attachEvent) window.attachEvent("onload", sfHover);

}

/*
     FILE ARCHIVED ON 07:34:35 Apr 19, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:00:54 Nov 24, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.455
  load_resource: 52.731
  PetaboxLoader3.resolve: 27.553
  PetaboxLoader3.datanode: 23.695
*/