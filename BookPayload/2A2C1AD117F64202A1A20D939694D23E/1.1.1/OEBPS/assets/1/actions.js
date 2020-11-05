pubcoder.projectID = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.id = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.title = "Medieval Resources";
pubcoder.page.id = 2;
pubcoder.page.title = "1";
pubcoder.page.number = 1;
pubcoder.page.alias = "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj2003_onTap_activeActionGroupIndex = -1;
var obj2003_onTap_runningActionsCount = 0;
var obj2003_onTap_loopCount = 0;
var obj2005_onTap_activeActionGroupIndex = -1;
var obj2005_onTap_runningActionsCount = 0;
var obj2005_onTap_loopCount = 0;
var obj2007_onTap_activeActionGroupIndex = -1;
var obj2007_onTap_runningActionsCount = 0;
var obj2007_onTap_loopCount = 0;
var obj2009_onTap_activeActionGroupIndex = -1;
var obj2009_onTap_runningActionsCount = 0;
var obj2009_onTap_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
 $(window).load(function(){
	window.eventObj = {};
	/*
	 * 
	 * Init SCAnimation
	 * 
	 * 
	 */
	
	/*
	 *
	 *   Init Shake
	 *
	 */
	window.addEventListener('shake', function () {
		
	}, false);
	
	/*
	 *
	 *   Init Masked Images
	 *
	 */
	 
 	/*
	 * 
	 * Init SCPhotogallery
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCQuizMulti
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCDrawer
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWPanZoom
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWMemoryGame
	 * 
	 * 
	 */
	
    
    
	if(! navigator.userAgent.match(/PubCoderHelper/i)) {
		/*
		 *
	 	 *   Action Groups
	 	 *
	 	 */
		
obj2003_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2003_onTap_activeActionGroupIndex = -1;
		$("#obj2003").trigger("obj2003_onTap_ended");
		
		return;
	}
	window.obj2003_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page4
goToPage_2014();
function goToPage_2014() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../4/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(4))},200);
	}
}





















};
obj2003_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2003_onTap_activeActionGroupIndex = -1;
		$("#obj2003").trigger("obj2003_onTap_ended");
		
		return;
	}
	window.obj2003_onTap_activeActionGroupIndex = 1;
	





















};
obj2005_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2005_onTap_activeActionGroupIndex = -1;
		$("#obj2005").trigger("obj2005_onTap_ended");
		
		return;
	}
	window.obj2005_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page3
goToPage_2012();
function goToPage_2012() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../3/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(3))},200);
	}
}





















};
obj2005_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2005_onTap_activeActionGroupIndex = -1;
		$("#obj2005").trigger("obj2005_onTap_ended");
		
		return;
	}
	window.obj2005_onTap_activeActionGroupIndex = 1;
	





















};
obj2007_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2007_onTap_activeActionGroupIndex = -1;
		$("#obj2007").trigger("obj2007_onTap_ended");
		
		return;
	}
	window.obj2007_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page2
goToPage_2011();
function goToPage_2011() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../2/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(2))},200);
	}
}





















};
obj2007_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2007_onTap_activeActionGroupIndex = -1;
		$("#obj2007").trigger("obj2007_onTap_ended");
		
		return;
	}
	window.obj2007_onTap_activeActionGroupIndex = 1;
	





















};
obj2009_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2009_onTap_activeActionGroupIndex = -1;
		$("#obj2009").trigger("obj2009_onTap_ended");
		
		return;
	}
	window.obj2009_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page5
goToPage_2013();
function goToPage_2013() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../5/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(5))},200);
	}
}





















};
obj2009_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2009_onTap_activeActionGroupIndex = -1;
		$("#obj2009").trigger("obj2009_onTap_ended");
		
		return;
	}
	window.obj2009_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		










/*
 *
 *   obj2003: Event Touch Down
 *
 */
 
$("#obj2003").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2003_onTap_activeActionGroupIndex != -1) return;
var obj2003_onTap_runningActionsCount = 0;
var obj2003_onTap_loopCount = 0;
obj2003_onTap_actionGroup0();
});







/*
 *
 *   obj2005: Event Touch Down
 *
 */
 
$("#obj2005").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2005_onTap_activeActionGroupIndex != -1) return;
var obj2005_onTap_runningActionsCount = 0;
var obj2005_onTap_loopCount = 0;
obj2005_onTap_actionGroup0();
});







/*
 *
 *   obj2007: Event Touch Down
 *
 */
 
$("#obj2007").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2007_onTap_activeActionGroupIndex != -1) return;
var obj2007_onTap_runningActionsCount = 0;
var obj2007_onTap_loopCount = 0;
obj2007_onTap_actionGroup0();
});







/*
 *
 *   obj2009: Event Touch Down
 *
 */
 
$("#obj2009").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2009_onTap_activeActionGroupIndex != -1) return;
var obj2009_onTap_runningActionsCount = 0;
var obj2009_onTap_loopCount = 0;
obj2009_onTap_actionGroup0();
});




		
		
		/*
		 *
	 	 *  Page is ready to be played
	 	 *
	 	 */
		if (askAudioPermission) {
	$("#SCAudioPermissionAllowButton").click(function () {
		$( "audio" ).each(function( index ) {
			this.play();
			this.pause();
		});
		$(window).trigger(PubCoder.Events.PagePlay);
	});
	$("#SCAudioPermissionCancelButton").click(function () {
		$(window).trigger(PubCoder.Events.PagePlay);
	});
	var remodalInst = $('[data-remodal-id=SCAudioPermissionAlert]').remodal().open();
} else {
	setTimeout(function() {
		$(window).trigger(PubCoder.Events.PagePlay);
	}, 200);
}
	 }
});
var orientationDevice = getOrientation(PubCoder.isAndroidReader);
$(window).on(PubCoder.Events.PagePlay, function() {
	
$("#obj2020").trigger('SCEventShow');
$("#obj2003").trigger('SCEventShow');
$("#obj2005").trigger('SCEventShow');
$("#obj2007").trigger('SCEventShow');
$("#obj2009").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});