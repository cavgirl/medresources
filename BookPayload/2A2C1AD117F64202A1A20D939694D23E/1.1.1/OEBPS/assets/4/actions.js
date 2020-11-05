pubcoder.projectID = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.id = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.title = "Medieval Resources";
pubcoder.page.id = 1501;
pubcoder.page.title = "4";
pubcoder.page.number = 4;
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
var obj1802_onShow_activeActionGroupIndex = -1;
var obj1802_onShow_runningActionsCount = 0;
var obj1802_onShow_loopCount = 0;
var obj1790_onShow_activeActionGroupIndex = -1;
var obj1790_onShow_runningActionsCount = 0;
var obj1790_onShow_loopCount = 0;
var obj1778_onShow_activeActionGroupIndex = -1;
var obj1778_onShow_runningActionsCount = 0;
var obj1778_onShow_loopCount = 0;
var obj1766_onShow_activeActionGroupIndex = -1;
var obj1766_onShow_runningActionsCount = 0;
var obj1766_onShow_loopCount = 0;
var obj1754_onShow_activeActionGroupIndex = -1;
var obj1754_onShow_runningActionsCount = 0;
var obj1754_onShow_loopCount = 0;
var obj1742_onShow_activeActionGroupIndex = -1;
var obj1742_onShow_runningActionsCount = 0;
var obj1742_onShow_loopCount = 0;
var obj1731_onShow_activeActionGroupIndex = -1;
var obj1731_onShow_runningActionsCount = 0;
var obj1731_onShow_loopCount = 0;
var obj1838_onShow_activeActionGroupIndex = -1;
var obj1838_onShow_runningActionsCount = 0;
var obj1838_onShow_loopCount = 0;
var obj1691_onDrag_activeActionGroupIndex = -1;
var obj1691_onDrag_runningActionsCount = 0;
var obj1691_onDrag_loopCount = 0;
var obj1691_onTouchDown_activeActionGroupIndex = -1;
var obj1691_onTouchDown_runningActionsCount = 0;
var obj1691_onTouchDown_loopCount = 0;
var obj1691_SCActionDragDrop240_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1691_SCActionDragDrop240_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1691_SCActionDragDrop240_droppedOutsideTargetActions_loopCount = 0;
var obj1691_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1691_droppedInsideTargetActions_runningActionsCount = 0;
var obj1691_droppedInsideTargetActions_loopCount = 0;
var obj1679_onDrag_activeActionGroupIndex = -1;
var obj1679_onDrag_runningActionsCount = 0;
var obj1679_onDrag_loopCount = 0;
var obj1679_onTouchDown_activeActionGroupIndex = -1;
var obj1679_onTouchDown_runningActionsCount = 0;
var obj1679_onTouchDown_loopCount = 0;
var obj1679_SCActionDragDrop226_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1679_SCActionDragDrop226_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1679_SCActionDragDrop226_droppedOutsideTargetActions_loopCount = 0;
var obj1679_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1679_droppedInsideTargetActions_runningActionsCount = 0;
var obj1679_droppedInsideTargetActions_loopCount = 0;
var obj1667_onDrag_activeActionGroupIndex = -1;
var obj1667_onDrag_runningActionsCount = 0;
var obj1667_onDrag_loopCount = 0;
var obj1667_onTouchDown_activeActionGroupIndex = -1;
var obj1667_onTouchDown_runningActionsCount = 0;
var obj1667_onTouchDown_loopCount = 0;
var obj1667_SCActionDragDrop212_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1667_SCActionDragDrop212_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1667_SCActionDragDrop212_droppedOutsideTargetActions_loopCount = 0;
var obj1667_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1667_droppedInsideTargetActions_runningActionsCount = 0;
var obj1667_droppedInsideTargetActions_loopCount = 0;
var obj1655_onDrag_activeActionGroupIndex = -1;
var obj1655_onDrag_runningActionsCount = 0;
var obj1655_onDrag_loopCount = 0;
var obj1655_onTouchDown_activeActionGroupIndex = -1;
var obj1655_onTouchDown_runningActionsCount = 0;
var obj1655_onTouchDown_loopCount = 0;
var obj1655_SCActionDragDrop198_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1655_SCActionDragDrop198_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1655_SCActionDragDrop198_droppedOutsideTargetActions_loopCount = 0;
var obj1655_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1655_droppedInsideTargetActions_runningActionsCount = 0;
var obj1655_droppedInsideTargetActions_loopCount = 0;
var obj1643_onDrag_activeActionGroupIndex = -1;
var obj1643_onDrag_runningActionsCount = 0;
var obj1643_onDrag_loopCount = 0;
var obj1643_onTouchDown_activeActionGroupIndex = -1;
var obj1643_onTouchDown_runningActionsCount = 0;
var obj1643_onTouchDown_loopCount = 0;
var obj1643_SCActionDragDrop184_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1643_SCActionDragDrop184_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1643_SCActionDragDrop184_droppedOutsideTargetActions_loopCount = 0;
var obj1643_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1643_droppedInsideTargetActions_runningActionsCount = 0;
var obj1643_droppedInsideTargetActions_loopCount = 0;
var obj1631_onDrag_activeActionGroupIndex = -1;
var obj1631_onDrag_runningActionsCount = 0;
var obj1631_onDrag_loopCount = 0;
var obj1631_onTouchDown_activeActionGroupIndex = -1;
var obj1631_onTouchDown_runningActionsCount = 0;
var obj1631_onTouchDown_loopCount = 0;
var obj1631_SCActionDragDrop170_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1631_SCActionDragDrop170_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1631_SCActionDragDrop170_droppedOutsideTargetActions_loopCount = 0;
var obj1631_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1631_droppedInsideTargetActions_runningActionsCount = 0;
var obj1631_droppedInsideTargetActions_loopCount = 0;
var obj1620_onDrag_activeActionGroupIndex = -1;
var obj1620_onDrag_runningActionsCount = 0;
var obj1620_onDrag_loopCount = 0;
var obj1620_onTouchDown_activeActionGroupIndex = -1;
var obj1620_onTouchDown_runningActionsCount = 0;
var obj1620_onTouchDown_loopCount = 0;
var obj1620_SCActionDragDrop157_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1620_SCActionDragDrop157_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1620_SCActionDragDrop157_droppedOutsideTargetActions_loopCount = 0;
var obj1620_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1620_droppedInsideTargetActions_runningActionsCount = 0;
var obj1620_droppedInsideTargetActions_loopCount = 0;
var obj1608_onDrag_activeActionGroupIndex = -1;
var obj1608_onDrag_runningActionsCount = 0;
var obj1608_onDrag_loopCount = 0;
var obj1608_onTouchDown_activeActionGroupIndex = -1;
var obj1608_onTouchDown_runningActionsCount = 0;
var obj1608_onTouchDown_loopCount = 0;
var obj1608_SCActionDragDrop143_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1608_SCActionDragDrop143_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1608_SCActionDragDrop143_droppedOutsideTargetActions_loopCount = 0;
var obj1608_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1608_droppedInsideTargetActions_runningActionsCount = 0;
var obj1608_droppedInsideTargetActions_loopCount = 0;
var obj1892_onTap_activeActionGroupIndex = -1;
var obj1892_onTap_runningActionsCount = 0;
var obj1892_onTap_loopCount = 0;
var obj1895_onShow_activeActionGroupIndex = -1;
var obj1895_onShow_runningActionsCount = 0;
var obj1895_onShow_loopCount = 0;
var obj1921_onTap_activeActionGroupIndex = -1;
var obj1921_onTap_runningActionsCount = 0;
var obj1921_onTap_loopCount = 0;
var obj1940_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj1940_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj1940_SCEventCounterReachedTargetValue_loopCount = 0;
var obj3343_onTap_activeActionGroupIndex = -1;
var obj3343_onTap_runningActionsCount = 0;
var obj3343_onTap_loopCount = 0;
var obj2049_onTap_activeActionGroupIndex = -1;
var obj2049_onTap_runningActionsCount = 0;
var obj2049_onTap_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj1940_counterValue = 0;
var obj1940_counterTargetValue = 8;
var obj1940_counterCanExceedTargetValue = false;
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
		
obj1802_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1802_onShow_activeActionGroupIndex = -1;
		$("#obj1802").trigger("obj1802_onShow_ended");
		
		return;
	}
	window.obj1802_onShow_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1870 
show_1875();
function show_1875() {
	var element = "#obj1870";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1802_onShow_runningActionsCount = obj1802_onShow_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1802_onShow_runningActionsCount = window.obj1802_onShow_runningActionsCount - 1;
if (window.obj1802_onShow_runningActionsCount == 0) {
	obj1802_onShow_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1802_onShow_runningActionsCount = window.obj1802_onShow_runningActionsCount - 1;
if (window.obj1802_onShow_runningActionsCount == 0) {
	obj1802_onShow_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1802_onShow_runningActionsCount = window.obj1802_onShow_runningActionsCount - 1;
if (window.obj1802_onShow_runningActionsCount == 0) {
	obj1802_onShow_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1802_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1802_onShow_activeActionGroupIndex = -1;
		$("#obj1802").trigger("obj1802_onShow_ended");
		
		return;
	}
	window.obj1802_onShow_activeActionGroupIndex = 1;
	





















};
obj1790_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1790_onShow_activeActionGroupIndex = -1;
		$("#obj1790").trigger("obj1790_onShow_ended");
		
		return;
	}
	window.obj1790_onShow_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1862 
show_1877();
function show_1877() {
	var element = "#obj1862";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1790_onShow_runningActionsCount = obj1790_onShow_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1790_onShow_runningActionsCount = window.obj1790_onShow_runningActionsCount - 1;
if (window.obj1790_onShow_runningActionsCount == 0) {
	obj1790_onShow_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1790_onShow_runningActionsCount = window.obj1790_onShow_runningActionsCount - 1;
if (window.obj1790_onShow_runningActionsCount == 0) {
	obj1790_onShow_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1790_onShow_runningActionsCount = window.obj1790_onShow_runningActionsCount - 1;
if (window.obj1790_onShow_runningActionsCount == 0) {
	obj1790_onShow_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1790_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1790_onShow_activeActionGroupIndex = -1;
		$("#obj1790").trigger("obj1790_onShow_ended");
		
		return;
	}
	window.obj1790_onShow_activeActionGroupIndex = 1;
	





















};
obj1778_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1778_onShow_activeActionGroupIndex = -1;
		$("#obj1778").trigger("obj1778_onShow_ended");
		
		return;
	}
	window.obj1778_onShow_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1872 
show_1879();
function show_1879() {
	var element = "#obj1872";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1778_onShow_runningActionsCount = obj1778_onShow_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1778_onShow_runningActionsCount = window.obj1778_onShow_runningActionsCount - 1;
if (window.obj1778_onShow_runningActionsCount == 0) {
	obj1778_onShow_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1778_onShow_runningActionsCount = window.obj1778_onShow_runningActionsCount - 1;
if (window.obj1778_onShow_runningActionsCount == 0) {
	obj1778_onShow_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1778_onShow_runningActionsCount = window.obj1778_onShow_runningActionsCount - 1;
if (window.obj1778_onShow_runningActionsCount == 0) {
	obj1778_onShow_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1778_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1778_onShow_activeActionGroupIndex = -1;
		$("#obj1778").trigger("obj1778_onShow_ended");
		
		return;
	}
	window.obj1778_onShow_activeActionGroupIndex = 1;
	





















};
obj1766_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1766_onShow_activeActionGroupIndex = -1;
		$("#obj1766").trigger("obj1766_onShow_ended");
		
		return;
	}
	window.obj1766_onShow_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1864 
show_1881();
function show_1881() {
	var element = "#obj1864";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1766_onShow_runningActionsCount = obj1766_onShow_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1766_onShow_runningActionsCount = window.obj1766_onShow_runningActionsCount - 1;
if (window.obj1766_onShow_runningActionsCount == 0) {
	obj1766_onShow_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1766_onShow_runningActionsCount = window.obj1766_onShow_runningActionsCount - 1;
if (window.obj1766_onShow_runningActionsCount == 0) {
	obj1766_onShow_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1766_onShow_runningActionsCount = window.obj1766_onShow_runningActionsCount - 1;
if (window.obj1766_onShow_runningActionsCount == 0) {
	obj1766_onShow_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1766_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1766_onShow_activeActionGroupIndex = -1;
		$("#obj1766").trigger("obj1766_onShow_ended");
		
		return;
	}
	window.obj1766_onShow_activeActionGroupIndex = 1;
	





















};
obj1754_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1754_onShow_activeActionGroupIndex = -1;
		$("#obj1754").trigger("obj1754_onShow_ended");
		
		return;
	}
	window.obj1754_onShow_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1858 
show_1883();
function show_1883() {
	var element = "#obj1858";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1754_onShow_runningActionsCount = obj1754_onShow_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1754_onShow_runningActionsCount = window.obj1754_onShow_runningActionsCount - 1;
if (window.obj1754_onShow_runningActionsCount == 0) {
	obj1754_onShow_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1754_onShow_runningActionsCount = window.obj1754_onShow_runningActionsCount - 1;
if (window.obj1754_onShow_runningActionsCount == 0) {
	obj1754_onShow_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1754_onShow_runningActionsCount = window.obj1754_onShow_runningActionsCount - 1;
if (window.obj1754_onShow_runningActionsCount == 0) {
	obj1754_onShow_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1754_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1754_onShow_activeActionGroupIndex = -1;
		$("#obj1754").trigger("obj1754_onShow_ended");
		
		return;
	}
	window.obj1754_onShow_activeActionGroupIndex = 1;
	





















};
obj1742_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1742_onShow_activeActionGroupIndex = -1;
		$("#obj1742").trigger("obj1742_onShow_ended");
		
		return;
	}
	window.obj1742_onShow_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1866 
show_1885();
function show_1885() {
	var element = "#obj1866";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1742_onShow_runningActionsCount = obj1742_onShow_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1742_onShow_runningActionsCount = window.obj1742_onShow_runningActionsCount - 1;
if (window.obj1742_onShow_runningActionsCount == 0) {
	obj1742_onShow_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1742_onShow_runningActionsCount = window.obj1742_onShow_runningActionsCount - 1;
if (window.obj1742_onShow_runningActionsCount == 0) {
	obj1742_onShow_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1742_onShow_runningActionsCount = window.obj1742_onShow_runningActionsCount - 1;
if (window.obj1742_onShow_runningActionsCount == 0) {
	obj1742_onShow_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1742_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1742_onShow_activeActionGroupIndex = -1;
		$("#obj1742").trigger("obj1742_onShow_ended");
		
		return;
	}
	window.obj1742_onShow_activeActionGroupIndex = 1;
	





















};
obj1731_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1731_onShow_activeActionGroupIndex = -1;
		$("#obj1731").trigger("obj1731_onShow_ended");
		
		return;
	}
	window.obj1731_onShow_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1860 
show_1887();
function show_1887() {
	var element = "#obj1860";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1731_onShow_runningActionsCount = obj1731_onShow_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1731_onShow_runningActionsCount = window.obj1731_onShow_runningActionsCount - 1;
if (window.obj1731_onShow_runningActionsCount == 0) {
	obj1731_onShow_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1731_onShow_runningActionsCount = window.obj1731_onShow_runningActionsCount - 1;
if (window.obj1731_onShow_runningActionsCount == 0) {
	obj1731_onShow_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1731_onShow_runningActionsCount = window.obj1731_onShow_runningActionsCount - 1;
if (window.obj1731_onShow_runningActionsCount == 0) {
	obj1731_onShow_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1731_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1731_onShow_activeActionGroupIndex = -1;
		$("#obj1731").trigger("obj1731_onShow_ended");
		
		return;
	}
	window.obj1731_onShow_activeActionGroupIndex = 1;
	





















};
obj1838_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1838_onShow_activeActionGroupIndex = -1;
		$("#obj1838").trigger("obj1838_onShow_ended");
		
		return;
	}
	window.obj1838_onShow_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1868 
show_1889();
function show_1889() {
	var element = "#obj1868";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1838_onShow_runningActionsCount = obj1838_onShow_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1838_onShow_runningActionsCount = window.obj1838_onShow_runningActionsCount - 1;
if (window.obj1838_onShow_runningActionsCount == 0) {
	obj1838_onShow_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1838_onShow_runningActionsCount = window.obj1838_onShow_runningActionsCount - 1;
if (window.obj1838_onShow_runningActionsCount == 0) {
	obj1838_onShow_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1838_onShow_runningActionsCount = window.obj1838_onShow_runningActionsCount - 1;
if (window.obj1838_onShow_runningActionsCount == 0) {
	obj1838_onShow_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1838_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1838_onShow_activeActionGroupIndex = -1;
		$("#obj1838").trigger("obj1838_onShow_ended");
		
		return;
	}
	window.obj1838_onShow_activeActionGroupIndex = 1;
	





















};
obj1691_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1691_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1691").trigger("obj1691_onTouchDown_ended");
		
		return;
	}
	window.obj1691_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1702();
function runjs_1702() {
	window.obj1691_onTouchDown_runningActionsCount = obj1691_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1691"));
	setTimeout(function() {
		window.obj1691_onTouchDown_runningActionsCount = window.obj1691_onTouchDown_runningActionsCount - 1;
if (window.obj1691_onTouchDown_runningActionsCount == 0) {
	obj1691_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj1691_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1691_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1691").trigger("obj1691_onTouchDown_ended");
		
		return;
	}
	window.obj1691_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1691");
//	action: dragDrop
//	target: obj1691 
dragDrop_1694();
function dragDrop_1694() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1691_onTouchDown_runningActionsCount = obj1691_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1691');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	if (window.touchUpEvent == "touchend") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (window.touchUpEvent == "touchend") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
    $(this).bind(window.touchUpEvent,function(e){
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
    	window.obj1691_onTouchDown_runningActionsCount = window.obj1691_onTouchDown_runningActionsCount - 1;
if (window.obj1691_onTouchDown_runningActionsCount == 0) {
	obj1691_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1709");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1694 = false;
    	var dropped_id_1694;
    	var eventType;
    	if (window.touchUpEvent == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_1694 = true;
					dropped_id_1694 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1694) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1691").trigger('SCActionDragDrop240_droppedOutsideTargetActions');
		}
    });
}











};
obj1691_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1691_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1691").trigger("obj1691_onTouchDown_ended");
		
		return;
	}
	window.obj1691_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj1691_SCActionDragDrop240_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1691_SCActionDragDrop240_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1691").trigger("obj1691_SCActionDragDrop240_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1691_SCActionDragDrop240_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1691 
show_1700();
function show_1700() {
	var element = "#obj1691";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1691_SCActionDragDrop240_droppedOutsideTargetActions_runningActionsCount = obj1691_SCActionDragDrop240_droppedOutsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1691_SCActionDragDrop240_droppedOutsideTargetActions_runningActionsCount = window.obj1691_SCActionDragDrop240_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1691_SCActionDragDrop240_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1691_SCActionDragDrop240_droppedOutsideTargetActions_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1691_SCActionDragDrop240_droppedOutsideTargetActions_runningActionsCount = window.obj1691_SCActionDragDrop240_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1691_SCActionDragDrop240_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1691_SCActionDragDrop240_droppedOutsideTargetActions_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj1691_SCActionDragDrop240_droppedOutsideTargetActions_runningActionsCount = window.obj1691_SCActionDragDrop240_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1691_SCActionDragDrop240_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1691_SCActionDragDrop240_droppedOutsideTargetActions_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1691_SCActionDragDrop240_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1691_SCActionDragDrop240_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1691").trigger("obj1691_SCActionDragDrop240_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1691_SCActionDragDrop240_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj1691_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1691_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1691").trigger("obj1691_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1691_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1696();
function runjs_1696() {
	window.obj1691_droppedInsideTargetActions_runningActionsCount = obj1691_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1691"));
	setTimeout(function() {
		window.obj1691_droppedInsideTargetActions_runningActionsCount = window.obj1691_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1691_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1691_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj1691_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1691_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1691").trigger("obj1691_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1691_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1802 
show_1697();
function show_1697() {
	var element = "#obj1802";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1691_droppedInsideTargetActions_runningActionsCount = obj1691_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1691_droppedInsideTargetActions_runningActionsCount = window.obj1691_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1691_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1691_droppedInsideTargetActions_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1691_droppedInsideTargetActions_runningActionsCount = window.obj1691_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1691_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1691_droppedInsideTargetActions_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1691_droppedInsideTargetActions_runningActionsCount = window.obj1691_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1691_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1691_droppedInsideTargetActions_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1691_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1691_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1691").trigger("obj1691_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1691_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj1691 
hide_1857();
function hide_1857() {
	var element = "#obj1691";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1691_droppedInsideTargetActions_runningActionsCount = obj1691_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1691_droppedInsideTargetActions_runningActionsCount = window.obj1691_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1691_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1691_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1857(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1691_droppedInsideTargetActions_runningActionsCount = window.obj1691_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1691_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1691_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj1691_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1691_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1691").trigger("obj1691_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1691_droppedInsideTargetActions_activeActionGroupIndex = 3;
	
















//	action: increment counter
//	target: obj1940 
incrementCounter_1698();
function incrementCounter_1698() {
	window.obj1691_droppedInsideTargetActions_runningActionsCount = obj1691_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj1940_counterValue;
	obj1940_counterValue = obj1940_counterValue + 1;
	if (! obj1940_counterCanExceedTargetValue && obj1940_counterValue > obj1940_counterTargetValue) {
		obj1940_counterValue = obj1940_counterTargetValue;
	}
	if (oldValue != obj1940_counterValue) {
		$("#obj1940").trigger('SCEventCounterValueChange');
		$("#obj1940").trigger('SCEventCounterIncrease');
		if (obj1940_counterValue == obj1940_counterTargetValue)
			$("#obj1940").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj1691_droppedInsideTargetActions_runningActionsCount = window.obj1691_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1691_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1691_droppedInsideTargetActions_actionGroup4();
} }, 1);
}





};
obj1691_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1691_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1691").trigger("obj1691_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1691_droppedInsideTargetActions_activeActionGroupIndex = 4;
	





















};
obj1679_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1679_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1679").trigger("obj1679_onTouchDown_ended");
		
		return;
	}
	window.obj1679_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1690();
function runjs_1690() {
	window.obj1679_onTouchDown_runningActionsCount = obj1679_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1679"));
	setTimeout(function() {
		window.obj1679_onTouchDown_runningActionsCount = window.obj1679_onTouchDown_runningActionsCount - 1;
if (window.obj1679_onTouchDown_runningActionsCount == 0) {
	obj1679_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj1679_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1679_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1679").trigger("obj1679_onTouchDown_ended");
		
		return;
	}
	window.obj1679_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1679");
//	action: dragDrop
//	target: obj1679 
dragDrop_1682();
function dragDrop_1682() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1679_onTouchDown_runningActionsCount = obj1679_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1679');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	if (window.touchUpEvent == "touchend") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (window.touchUpEvent == "touchend") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
    $(this).bind(window.touchUpEvent,function(e){
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
    	window.obj1679_onTouchDown_runningActionsCount = window.obj1679_onTouchDown_runningActionsCount - 1;
if (window.obj1679_onTouchDown_runningActionsCount == 0) {
	obj1679_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1705");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1682 = false;
    	var dropped_id_1682;
    	var eventType;
    	if (window.touchUpEvent == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_1682 = true;
					dropped_id_1682 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1682) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1679").trigger('SCActionDragDrop226_droppedOutsideTargetActions');
		}
    });
}











};
obj1679_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1679_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1679").trigger("obj1679_onTouchDown_ended");
		
		return;
	}
	window.obj1679_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj1679_SCActionDragDrop226_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1679_SCActionDragDrop226_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1679").trigger("obj1679_SCActionDragDrop226_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1679_SCActionDragDrop226_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1679 
show_1688();
function show_1688() {
	var element = "#obj1679";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1679_SCActionDragDrop226_droppedOutsideTargetActions_runningActionsCount = obj1679_SCActionDragDrop226_droppedOutsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1679_SCActionDragDrop226_droppedOutsideTargetActions_runningActionsCount = window.obj1679_SCActionDragDrop226_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1679_SCActionDragDrop226_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1679_SCActionDragDrop226_droppedOutsideTargetActions_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1679_SCActionDragDrop226_droppedOutsideTargetActions_runningActionsCount = window.obj1679_SCActionDragDrop226_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1679_SCActionDragDrop226_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1679_SCActionDragDrop226_droppedOutsideTargetActions_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj1679_SCActionDragDrop226_droppedOutsideTargetActions_runningActionsCount = window.obj1679_SCActionDragDrop226_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1679_SCActionDragDrop226_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1679_SCActionDragDrop226_droppedOutsideTargetActions_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1679_SCActionDragDrop226_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1679_SCActionDragDrop226_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1679").trigger("obj1679_SCActionDragDrop226_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1679_SCActionDragDrop226_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj1679_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1679_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1679").trigger("obj1679_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1679_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1684();
function runjs_1684() {
	window.obj1679_droppedInsideTargetActions_runningActionsCount = obj1679_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1679"));
	setTimeout(function() {
		window.obj1679_droppedInsideTargetActions_runningActionsCount = window.obj1679_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1679_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1679_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj1679_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1679_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1679").trigger("obj1679_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1679_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1790 
show_1685();
function show_1685() {
	var element = "#obj1790";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1679_droppedInsideTargetActions_runningActionsCount = obj1679_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1679_droppedInsideTargetActions_runningActionsCount = window.obj1679_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1679_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1679_droppedInsideTargetActions_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1679_droppedInsideTargetActions_runningActionsCount = window.obj1679_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1679_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1679_droppedInsideTargetActions_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1679_droppedInsideTargetActions_runningActionsCount = window.obj1679_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1679_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1679_droppedInsideTargetActions_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1679_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1679_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1679").trigger("obj1679_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1679_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj1679 
hide_1856();
function hide_1856() {
	var element = "#obj1679";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1679_droppedInsideTargetActions_runningActionsCount = obj1679_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1679_droppedInsideTargetActions_runningActionsCount = window.obj1679_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1679_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1679_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1856(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1679_droppedInsideTargetActions_runningActionsCount = window.obj1679_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1679_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1679_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj1679_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1679_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1679").trigger("obj1679_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1679_droppedInsideTargetActions_activeActionGroupIndex = 3;
	
















//	action: increment counter
//	target: obj1940 
incrementCounter_1686();
function incrementCounter_1686() {
	window.obj1679_droppedInsideTargetActions_runningActionsCount = obj1679_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj1940_counterValue;
	obj1940_counterValue = obj1940_counterValue + 1;
	if (! obj1940_counterCanExceedTargetValue && obj1940_counterValue > obj1940_counterTargetValue) {
		obj1940_counterValue = obj1940_counterTargetValue;
	}
	if (oldValue != obj1940_counterValue) {
		$("#obj1940").trigger('SCEventCounterValueChange');
		$("#obj1940").trigger('SCEventCounterIncrease');
		if (obj1940_counterValue == obj1940_counterTargetValue)
			$("#obj1940").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj1679_droppedInsideTargetActions_runningActionsCount = window.obj1679_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1679_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1679_droppedInsideTargetActions_actionGroup4();
} }, 1);
}





};
obj1679_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1679_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1679").trigger("obj1679_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1679_droppedInsideTargetActions_activeActionGroupIndex = 4;
	





















};
obj1667_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1667_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1667").trigger("obj1667_onTouchDown_ended");
		
		return;
	}
	window.obj1667_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1678();
function runjs_1678() {
	window.obj1667_onTouchDown_runningActionsCount = obj1667_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1667"));
	setTimeout(function() {
		window.obj1667_onTouchDown_runningActionsCount = window.obj1667_onTouchDown_runningActionsCount - 1;
if (window.obj1667_onTouchDown_runningActionsCount == 0) {
	obj1667_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj1667_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1667_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1667").trigger("obj1667_onTouchDown_ended");
		
		return;
	}
	window.obj1667_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1667");
//	action: dragDrop
//	target: obj1667 
dragDrop_1670();
function dragDrop_1670() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1667_onTouchDown_runningActionsCount = obj1667_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1667');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	if (window.touchUpEvent == "touchend") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (window.touchUpEvent == "touchend") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
    $(this).bind(window.touchUpEvent,function(e){
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
    	window.obj1667_onTouchDown_runningActionsCount = window.obj1667_onTouchDown_runningActionsCount - 1;
if (window.obj1667_onTouchDown_runningActionsCount == 0) {
	obj1667_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1711");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1670 = false;
    	var dropped_id_1670;
    	var eventType;
    	if (window.touchUpEvent == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_1670 = true;
					dropped_id_1670 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1670) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1667").trigger('SCActionDragDrop212_droppedOutsideTargetActions');
		}
    });
}











};
obj1667_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1667_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1667").trigger("obj1667_onTouchDown_ended");
		
		return;
	}
	window.obj1667_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj1667_SCActionDragDrop212_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1667_SCActionDragDrop212_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1667").trigger("obj1667_SCActionDragDrop212_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1667_SCActionDragDrop212_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1667 
show_1676();
function show_1676() {
	var element = "#obj1667";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1667_SCActionDragDrop212_droppedOutsideTargetActions_runningActionsCount = obj1667_SCActionDragDrop212_droppedOutsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1667_SCActionDragDrop212_droppedOutsideTargetActions_runningActionsCount = window.obj1667_SCActionDragDrop212_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1667_SCActionDragDrop212_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1667_SCActionDragDrop212_droppedOutsideTargetActions_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1667_SCActionDragDrop212_droppedOutsideTargetActions_runningActionsCount = window.obj1667_SCActionDragDrop212_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1667_SCActionDragDrop212_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1667_SCActionDragDrop212_droppedOutsideTargetActions_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj1667_SCActionDragDrop212_droppedOutsideTargetActions_runningActionsCount = window.obj1667_SCActionDragDrop212_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1667_SCActionDragDrop212_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1667_SCActionDragDrop212_droppedOutsideTargetActions_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1667_SCActionDragDrop212_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1667_SCActionDragDrop212_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1667").trigger("obj1667_SCActionDragDrop212_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1667_SCActionDragDrop212_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj1667_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1667_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1667").trigger("obj1667_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1667_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1672();
function runjs_1672() {
	window.obj1667_droppedInsideTargetActions_runningActionsCount = obj1667_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1667"));
	setTimeout(function() {
		window.obj1667_droppedInsideTargetActions_runningActionsCount = window.obj1667_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1667_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1667_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj1667_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1667_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1667").trigger("obj1667_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1667_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1778 
show_1673();
function show_1673() {
	var element = "#obj1778";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1667_droppedInsideTargetActions_runningActionsCount = obj1667_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1667_droppedInsideTargetActions_runningActionsCount = window.obj1667_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1667_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1667_droppedInsideTargetActions_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1667_droppedInsideTargetActions_runningActionsCount = window.obj1667_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1667_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1667_droppedInsideTargetActions_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1667_droppedInsideTargetActions_runningActionsCount = window.obj1667_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1667_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1667_droppedInsideTargetActions_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1667_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1667_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1667").trigger("obj1667_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1667_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj1667 
hide_1855();
function hide_1855() {
	var element = "#obj1667";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1667_droppedInsideTargetActions_runningActionsCount = obj1667_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1667_droppedInsideTargetActions_runningActionsCount = window.obj1667_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1667_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1667_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1855(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1667_droppedInsideTargetActions_runningActionsCount = window.obj1667_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1667_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1667_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj1667_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1667_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1667").trigger("obj1667_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1667_droppedInsideTargetActions_activeActionGroupIndex = 3;
	
















//	action: increment counter
//	target: obj1940 
incrementCounter_1674();
function incrementCounter_1674() {
	window.obj1667_droppedInsideTargetActions_runningActionsCount = obj1667_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj1940_counterValue;
	obj1940_counterValue = obj1940_counterValue + 1;
	if (! obj1940_counterCanExceedTargetValue && obj1940_counterValue > obj1940_counterTargetValue) {
		obj1940_counterValue = obj1940_counterTargetValue;
	}
	if (oldValue != obj1940_counterValue) {
		$("#obj1940").trigger('SCEventCounterValueChange');
		$("#obj1940").trigger('SCEventCounterIncrease');
		if (obj1940_counterValue == obj1940_counterTargetValue)
			$("#obj1940").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj1667_droppedInsideTargetActions_runningActionsCount = window.obj1667_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1667_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1667_droppedInsideTargetActions_actionGroup4();
} }, 1);
}





};
obj1667_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1667_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1667").trigger("obj1667_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1667_droppedInsideTargetActions_activeActionGroupIndex = 4;
	





















};
obj1655_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1655_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1655").trigger("obj1655_onTouchDown_ended");
		
		return;
	}
	window.obj1655_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1666();
function runjs_1666() {
	window.obj1655_onTouchDown_runningActionsCount = obj1655_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1655"));
	setTimeout(function() {
		window.obj1655_onTouchDown_runningActionsCount = window.obj1655_onTouchDown_runningActionsCount - 1;
if (window.obj1655_onTouchDown_runningActionsCount == 0) {
	obj1655_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj1655_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1655_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1655").trigger("obj1655_onTouchDown_ended");
		
		return;
	}
	window.obj1655_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1655");
//	action: dragDrop
//	target: obj1655 
dragDrop_1658();
function dragDrop_1658() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1655_onTouchDown_runningActionsCount = obj1655_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1655');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	if (window.touchUpEvent == "touchend") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (window.touchUpEvent == "touchend") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
    $(this).bind(window.touchUpEvent,function(e){
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
    	window.obj1655_onTouchDown_runningActionsCount = window.obj1655_onTouchDown_runningActionsCount - 1;
if (window.obj1655_onTouchDown_runningActionsCount == 0) {
	obj1655_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1707");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1658 = false;
    	var dropped_id_1658;
    	var eventType;
    	if (window.touchUpEvent == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_1658 = true;
					dropped_id_1658 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1658) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1655").trigger('SCActionDragDrop198_droppedOutsideTargetActions');
		}
    });
}











};
obj1655_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1655_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1655").trigger("obj1655_onTouchDown_ended");
		
		return;
	}
	window.obj1655_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj1655_SCActionDragDrop198_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1655_SCActionDragDrop198_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1655").trigger("obj1655_SCActionDragDrop198_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1655_SCActionDragDrop198_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1655 
show_1664();
function show_1664() {
	var element = "#obj1655";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1655_SCActionDragDrop198_droppedOutsideTargetActions_runningActionsCount = obj1655_SCActionDragDrop198_droppedOutsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1655_SCActionDragDrop198_droppedOutsideTargetActions_runningActionsCount = window.obj1655_SCActionDragDrop198_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1655_SCActionDragDrop198_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1655_SCActionDragDrop198_droppedOutsideTargetActions_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1655_SCActionDragDrop198_droppedOutsideTargetActions_runningActionsCount = window.obj1655_SCActionDragDrop198_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1655_SCActionDragDrop198_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1655_SCActionDragDrop198_droppedOutsideTargetActions_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj1655_SCActionDragDrop198_droppedOutsideTargetActions_runningActionsCount = window.obj1655_SCActionDragDrop198_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1655_SCActionDragDrop198_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1655_SCActionDragDrop198_droppedOutsideTargetActions_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1655_SCActionDragDrop198_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1655_SCActionDragDrop198_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1655").trigger("obj1655_SCActionDragDrop198_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1655_SCActionDragDrop198_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj1655_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1655_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1655").trigger("obj1655_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1655_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1766 
show_1661();
function show_1661() {
	var element = "#obj1766";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1655_droppedInsideTargetActions_runningActionsCount = obj1655_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1655_droppedInsideTargetActions_runningActionsCount = window.obj1655_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1655_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1655_droppedInsideTargetActions_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1655_droppedInsideTargetActions_runningActionsCount = window.obj1655_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1655_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1655_droppedInsideTargetActions_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1655_droppedInsideTargetActions_runningActionsCount = window.obj1655_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1655_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1655_droppedInsideTargetActions_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}













//	action: Run JavaScript
runjs_1660();
function runjs_1660() {
	window.obj1655_droppedInsideTargetActions_runningActionsCount = obj1655_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1655"));
	setTimeout(function() {
		window.obj1655_droppedInsideTargetActions_runningActionsCount = window.obj1655_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1655_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1655_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj1655_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1655_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1655").trigger("obj1655_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1655_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj1655 
hide_1854();
function hide_1854() {
	var element = "#obj1655";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1655_droppedInsideTargetActions_runningActionsCount = obj1655_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1655_droppedInsideTargetActions_runningActionsCount = window.obj1655_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1655_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1655_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1854(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1655_droppedInsideTargetActions_runningActionsCount = window.obj1655_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1655_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1655_droppedInsideTargetActions_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj1655_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1655_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1655").trigger("obj1655_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1655_droppedInsideTargetActions_activeActionGroupIndex = 2;
	
















//	action: increment counter
//	target: obj1940 
incrementCounter_1662();
function incrementCounter_1662() {
	window.obj1655_droppedInsideTargetActions_runningActionsCount = obj1655_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj1940_counterValue;
	obj1940_counterValue = obj1940_counterValue + 1;
	if (! obj1940_counterCanExceedTargetValue && obj1940_counterValue > obj1940_counterTargetValue) {
		obj1940_counterValue = obj1940_counterTargetValue;
	}
	if (oldValue != obj1940_counterValue) {
		$("#obj1940").trigger('SCEventCounterValueChange');
		$("#obj1940").trigger('SCEventCounterIncrease');
		if (obj1940_counterValue == obj1940_counterTargetValue)
			$("#obj1940").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj1655_droppedInsideTargetActions_runningActionsCount = window.obj1655_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1655_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1655_droppedInsideTargetActions_actionGroup3();
} }, 1);
}





};
obj1655_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1655_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1655").trigger("obj1655_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1655_droppedInsideTargetActions_activeActionGroupIndex = 3;
	





















};
obj1643_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1643_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1643").trigger("obj1643_onTouchDown_ended");
		
		return;
	}
	window.obj1643_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1654();
function runjs_1654() {
	window.obj1643_onTouchDown_runningActionsCount = obj1643_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1643"));
	setTimeout(function() {
		window.obj1643_onTouchDown_runningActionsCount = window.obj1643_onTouchDown_runningActionsCount - 1;
if (window.obj1643_onTouchDown_runningActionsCount == 0) {
	obj1643_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj1643_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1643_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1643").trigger("obj1643_onTouchDown_ended");
		
		return;
	}
	window.obj1643_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1643");
//	action: dragDrop
//	target: obj1643 
dragDrop_1646();
function dragDrop_1646() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1643_onTouchDown_runningActionsCount = obj1643_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1643');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	if (window.touchUpEvent == "touchend") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (window.touchUpEvent == "touchend") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
    $(this).bind(window.touchUpEvent,function(e){
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
    	window.obj1643_onTouchDown_runningActionsCount = window.obj1643_onTouchDown_runningActionsCount - 1;
if (window.obj1643_onTouchDown_runningActionsCount == 0) {
	obj1643_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1703");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1646 = false;
    	var dropped_id_1646;
    	var eventType;
    	if (window.touchUpEvent == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_1646 = true;
					dropped_id_1646 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1646) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1643").trigger('SCActionDragDrop184_droppedOutsideTargetActions');
		}
    });
}











};
obj1643_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1643_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1643").trigger("obj1643_onTouchDown_ended");
		
		return;
	}
	window.obj1643_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj1643_SCActionDragDrop184_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1643_SCActionDragDrop184_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1643").trigger("obj1643_SCActionDragDrop184_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1643_SCActionDragDrop184_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1643 
show_1652();
function show_1652() {
	var element = "#obj1643";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1643_SCActionDragDrop184_droppedOutsideTargetActions_runningActionsCount = obj1643_SCActionDragDrop184_droppedOutsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1643_SCActionDragDrop184_droppedOutsideTargetActions_runningActionsCount = window.obj1643_SCActionDragDrop184_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1643_SCActionDragDrop184_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1643_SCActionDragDrop184_droppedOutsideTargetActions_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1643_SCActionDragDrop184_droppedOutsideTargetActions_runningActionsCount = window.obj1643_SCActionDragDrop184_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1643_SCActionDragDrop184_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1643_SCActionDragDrop184_droppedOutsideTargetActions_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj1643_SCActionDragDrop184_droppedOutsideTargetActions_runningActionsCount = window.obj1643_SCActionDragDrop184_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1643_SCActionDragDrop184_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1643_SCActionDragDrop184_droppedOutsideTargetActions_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1643_SCActionDragDrop184_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1643_SCActionDragDrop184_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1643").trigger("obj1643_SCActionDragDrop184_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1643_SCActionDragDrop184_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj1643_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1643_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1643").trigger("obj1643_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1643_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1648();
function runjs_1648() {
	window.obj1643_droppedInsideTargetActions_runningActionsCount = obj1643_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1643"));
	setTimeout(function() {
		window.obj1643_droppedInsideTargetActions_runningActionsCount = window.obj1643_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1643_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1643_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj1643_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1643_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1643").trigger("obj1643_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1643_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1754 
show_1649();
function show_1649() {
	var element = "#obj1754";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1643_droppedInsideTargetActions_runningActionsCount = obj1643_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1643_droppedInsideTargetActions_runningActionsCount = window.obj1643_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1643_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1643_droppedInsideTargetActions_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1643_droppedInsideTargetActions_runningActionsCount = window.obj1643_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1643_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1643_droppedInsideTargetActions_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1643_droppedInsideTargetActions_runningActionsCount = window.obj1643_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1643_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1643_droppedInsideTargetActions_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1643_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1643_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1643").trigger("obj1643_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1643_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj1643 
hide_1853();
function hide_1853() {
	var element = "#obj1643";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1643_droppedInsideTargetActions_runningActionsCount = obj1643_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1643_droppedInsideTargetActions_runningActionsCount = window.obj1643_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1643_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1643_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1853(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1643_droppedInsideTargetActions_runningActionsCount = window.obj1643_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1643_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1643_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj1643_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1643_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1643").trigger("obj1643_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1643_droppedInsideTargetActions_activeActionGroupIndex = 3;
	
















//	action: increment counter
//	target: obj1940 
incrementCounter_1650();
function incrementCounter_1650() {
	window.obj1643_droppedInsideTargetActions_runningActionsCount = obj1643_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj1940_counterValue;
	obj1940_counterValue = obj1940_counterValue + 1;
	if (! obj1940_counterCanExceedTargetValue && obj1940_counterValue > obj1940_counterTargetValue) {
		obj1940_counterValue = obj1940_counterTargetValue;
	}
	if (oldValue != obj1940_counterValue) {
		$("#obj1940").trigger('SCEventCounterValueChange');
		$("#obj1940").trigger('SCEventCounterIncrease');
		if (obj1940_counterValue == obj1940_counterTargetValue)
			$("#obj1940").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj1643_droppedInsideTargetActions_runningActionsCount = window.obj1643_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1643_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1643_droppedInsideTargetActions_actionGroup4();
} }, 1);
}





};
obj1643_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1643_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1643").trigger("obj1643_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1643_droppedInsideTargetActions_activeActionGroupIndex = 4;
	





















};
obj1631_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1631_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1631").trigger("obj1631_onTouchDown_ended");
		
		return;
	}
	window.obj1631_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1642();
function runjs_1642() {
	window.obj1631_onTouchDown_runningActionsCount = obj1631_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1631"));
	setTimeout(function() {
		window.obj1631_onTouchDown_runningActionsCount = window.obj1631_onTouchDown_runningActionsCount - 1;
if (window.obj1631_onTouchDown_runningActionsCount == 0) {
	obj1631_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj1631_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1631_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1631").trigger("obj1631_onTouchDown_ended");
		
		return;
	}
	window.obj1631_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1631");
//	action: dragDrop
//	target: obj1631 
dragDrop_1634();
function dragDrop_1634() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1631_onTouchDown_runningActionsCount = obj1631_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1631');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	if (window.touchUpEvent == "touchend") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (window.touchUpEvent == "touchend") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
    $(this).bind(window.touchUpEvent,function(e){
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
    	window.obj1631_onTouchDown_runningActionsCount = window.obj1631_onTouchDown_runningActionsCount - 1;
if (window.obj1631_onTouchDown_runningActionsCount == 0) {
	obj1631_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1717");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1634 = false;
    	var dropped_id_1634;
    	var eventType;
    	if (window.touchUpEvent == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_1634 = true;
					dropped_id_1634 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1634) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1631").trigger('SCActionDragDrop170_droppedOutsideTargetActions');
		}
    });
}











};
obj1631_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1631_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1631").trigger("obj1631_onTouchDown_ended");
		
		return;
	}
	window.obj1631_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj1631_SCActionDragDrop170_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1631_SCActionDragDrop170_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1631").trigger("obj1631_SCActionDragDrop170_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1631_SCActionDragDrop170_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1631 
show_1640();
function show_1640() {
	var element = "#obj1631";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1631_SCActionDragDrop170_droppedOutsideTargetActions_runningActionsCount = obj1631_SCActionDragDrop170_droppedOutsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1631_SCActionDragDrop170_droppedOutsideTargetActions_runningActionsCount = window.obj1631_SCActionDragDrop170_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1631_SCActionDragDrop170_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1631_SCActionDragDrop170_droppedOutsideTargetActions_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1631_SCActionDragDrop170_droppedOutsideTargetActions_runningActionsCount = window.obj1631_SCActionDragDrop170_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1631_SCActionDragDrop170_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1631_SCActionDragDrop170_droppedOutsideTargetActions_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj1631_SCActionDragDrop170_droppedOutsideTargetActions_runningActionsCount = window.obj1631_SCActionDragDrop170_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1631_SCActionDragDrop170_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1631_SCActionDragDrop170_droppedOutsideTargetActions_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1631_SCActionDragDrop170_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1631_SCActionDragDrop170_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1631").trigger("obj1631_SCActionDragDrop170_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1631_SCActionDragDrop170_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj1631_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1631_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1631").trigger("obj1631_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1631_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1636();
function runjs_1636() {
	window.obj1631_droppedInsideTargetActions_runningActionsCount = obj1631_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1631"));
	setTimeout(function() {
		window.obj1631_droppedInsideTargetActions_runningActionsCount = window.obj1631_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1631_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1631_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj1631_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1631_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1631").trigger("obj1631_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1631_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1742 
show_1637();
function show_1637() {
	var element = "#obj1742";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1631_droppedInsideTargetActions_runningActionsCount = obj1631_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1631_droppedInsideTargetActions_runningActionsCount = window.obj1631_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1631_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1631_droppedInsideTargetActions_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1631_droppedInsideTargetActions_runningActionsCount = window.obj1631_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1631_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1631_droppedInsideTargetActions_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1631_droppedInsideTargetActions_runningActionsCount = window.obj1631_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1631_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1631_droppedInsideTargetActions_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1631_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1631_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1631").trigger("obj1631_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1631_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj1631 
hide_1852();
function hide_1852() {
	var element = "#obj1631";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1631_droppedInsideTargetActions_runningActionsCount = obj1631_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1631_droppedInsideTargetActions_runningActionsCount = window.obj1631_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1631_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1631_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1852(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1631_droppedInsideTargetActions_runningActionsCount = window.obj1631_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1631_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1631_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj1631_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1631_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1631").trigger("obj1631_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1631_droppedInsideTargetActions_activeActionGroupIndex = 3;
	
















//	action: increment counter
//	target: obj1940 
incrementCounter_1638();
function incrementCounter_1638() {
	window.obj1631_droppedInsideTargetActions_runningActionsCount = obj1631_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj1940_counterValue;
	obj1940_counterValue = obj1940_counterValue + 1;
	if (! obj1940_counterCanExceedTargetValue && obj1940_counterValue > obj1940_counterTargetValue) {
		obj1940_counterValue = obj1940_counterTargetValue;
	}
	if (oldValue != obj1940_counterValue) {
		$("#obj1940").trigger('SCEventCounterValueChange');
		$("#obj1940").trigger('SCEventCounterIncrease');
		if (obj1940_counterValue == obj1940_counterTargetValue)
			$("#obj1940").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj1631_droppedInsideTargetActions_runningActionsCount = window.obj1631_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1631_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1631_droppedInsideTargetActions_actionGroup4();
} }, 1);
}





};
obj1631_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1631_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1631").trigger("obj1631_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1631_droppedInsideTargetActions_activeActionGroupIndex = 4;
	





















};
obj1620_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1620_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1620").trigger("obj1620_onTouchDown_ended");
		
		return;
	}
	window.obj1620_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1630();
function runjs_1630() {
	window.obj1620_onTouchDown_runningActionsCount = obj1620_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1620"));
	setTimeout(function() {
		window.obj1620_onTouchDown_runningActionsCount = window.obj1620_onTouchDown_runningActionsCount - 1;
if (window.obj1620_onTouchDown_runningActionsCount == 0) {
	obj1620_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj1620_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1620_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1620").trigger("obj1620_onTouchDown_ended");
		
		return;
	}
	window.obj1620_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1620");
//	action: dragDrop
//	target: obj1620 
dragDrop_1623();
function dragDrop_1623() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1620_onTouchDown_runningActionsCount = obj1620_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1620');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	if (window.touchUpEvent == "touchend") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (window.touchUpEvent == "touchend") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
    $(this).bind(window.touchUpEvent,function(e){
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
    	window.obj1620_onTouchDown_runningActionsCount = window.obj1620_onTouchDown_runningActionsCount - 1;
if (window.obj1620_onTouchDown_runningActionsCount == 0) {
	obj1620_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1715");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1623 = false;
    	var dropped_id_1623;
    	var eventType;
    	if (window.touchUpEvent == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_1623 = true;
					dropped_id_1623 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1623) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1620").trigger('SCActionDragDrop157_droppedOutsideTargetActions');
		}
    });
}











};
obj1620_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1620_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1620").trigger("obj1620_onTouchDown_ended");
		
		return;
	}
	window.obj1620_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj1620_SCActionDragDrop157_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1620_SCActionDragDrop157_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1620").trigger("obj1620_SCActionDragDrop157_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1620_SCActionDragDrop157_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	





















};
obj1620_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1620_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1620").trigger("obj1620_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1620_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1625();
function runjs_1625() {
	window.obj1620_droppedInsideTargetActions_runningActionsCount = obj1620_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1620"));
	setTimeout(function() {
		window.obj1620_droppedInsideTargetActions_runningActionsCount = window.obj1620_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1620_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1620_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj1620_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1620_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1620").trigger("obj1620_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1620_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1731 
show_1626();
function show_1626() {
	var element = "#obj1731";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1620_droppedInsideTargetActions_runningActionsCount = obj1620_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1620_droppedInsideTargetActions_runningActionsCount = window.obj1620_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1620_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1620_droppedInsideTargetActions_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1620_droppedInsideTargetActions_runningActionsCount = window.obj1620_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1620_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1620_droppedInsideTargetActions_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1620_droppedInsideTargetActions_runningActionsCount = window.obj1620_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1620_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1620_droppedInsideTargetActions_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1620_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1620_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1620").trigger("obj1620_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1620_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj1620 
hide_1851();
function hide_1851() {
	var element = "#obj1620";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1620_droppedInsideTargetActions_runningActionsCount = obj1620_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1620_droppedInsideTargetActions_runningActionsCount = window.obj1620_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1620_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1620_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1851(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1620_droppedInsideTargetActions_runningActionsCount = window.obj1620_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1620_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1620_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj1620_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1620_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1620").trigger("obj1620_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1620_droppedInsideTargetActions_activeActionGroupIndex = 3;
	
















//	action: increment counter
//	target: obj1940 
incrementCounter_1627();
function incrementCounter_1627() {
	window.obj1620_droppedInsideTargetActions_runningActionsCount = obj1620_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj1940_counterValue;
	obj1940_counterValue = obj1940_counterValue + 1;
	if (! obj1940_counterCanExceedTargetValue && obj1940_counterValue > obj1940_counterTargetValue) {
		obj1940_counterValue = obj1940_counterTargetValue;
	}
	if (oldValue != obj1940_counterValue) {
		$("#obj1940").trigger('SCEventCounterValueChange');
		$("#obj1940").trigger('SCEventCounterIncrease');
		if (obj1940_counterValue == obj1940_counterTargetValue)
			$("#obj1940").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj1620_droppedInsideTargetActions_runningActionsCount = window.obj1620_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1620_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1620_droppedInsideTargetActions_actionGroup4();
} }, 1);
}





};
obj1620_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1620_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1620").trigger("obj1620_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1620_droppedInsideTargetActions_activeActionGroupIndex = 4;
	





















};
obj1608_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1608_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1608").trigger("obj1608_onTouchDown_ended");
		
		return;
	}
	window.obj1608_onTouchDown_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1619();
function runjs_1619() {
	window.obj1608_onTouchDown_runningActionsCount = obj1608_onTouchDown_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1608"));
	setTimeout(function() {
		window.obj1608_onTouchDown_runningActionsCount = window.obj1608_onTouchDown_runningActionsCount - 1;
if (window.obj1608_onTouchDown_runningActionsCount == 0) {
	obj1608_onTouchDown_actionGroup1();
}
	}, 1);
}






};
obj1608_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1608_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1608").trigger("obj1608_onTouchDown_ended");
		
		return;
	}
	window.obj1608_onTouchDown_activeActionGroupIndex = 1;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1608");
//	action: dragDrop
//	target: obj1608 
dragDrop_1611();
function dragDrop_1611() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1608_onTouchDown_runningActionsCount = obj1608_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1608');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	if (window.touchUpEvent == "touchend") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (window.touchUpEvent == "touchend") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
    $(this).bind(window.touchUpEvent,function(e){
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
    	window.obj1608_onTouchDown_runningActionsCount = window.obj1608_onTouchDown_runningActionsCount - 1;
if (window.obj1608_onTouchDown_runningActionsCount == 0) {
	obj1608_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1713");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1611 = false;
    	var dropped_id_1611;
    	var eventType;
    	if (window.touchUpEvent == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_1611 = true;
					dropped_id_1611 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1611) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1608").trigger('SCActionDragDrop143_droppedOutsideTargetActions');
		}
    });
}











};
obj1608_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1608_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1608").trigger("obj1608_onTouchDown_ended");
		
		return;
	}
	window.obj1608_onTouchDown_activeActionGroupIndex = 2;
	





















};
obj1608_SCActionDragDrop143_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1608_SCActionDragDrop143_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1608").trigger("obj1608_SCActionDragDrop143_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1608_SCActionDragDrop143_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1608 
show_1617();
function show_1617() {
	var element = "#obj1608";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1608_SCActionDragDrop143_droppedOutsideTargetActions_runningActionsCount = obj1608_SCActionDragDrop143_droppedOutsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1608_SCActionDragDrop143_droppedOutsideTargetActions_runningActionsCount = window.obj1608_SCActionDragDrop143_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1608_SCActionDragDrop143_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1608_SCActionDragDrop143_droppedOutsideTargetActions_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1608_SCActionDragDrop143_droppedOutsideTargetActions_runningActionsCount = window.obj1608_SCActionDragDrop143_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1608_SCActionDragDrop143_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1608_SCActionDragDrop143_droppedOutsideTargetActions_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj1608_SCActionDragDrop143_droppedOutsideTargetActions_runningActionsCount = window.obj1608_SCActionDragDrop143_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1608_SCActionDragDrop143_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1608_SCActionDragDrop143_droppedOutsideTargetActions_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1608_SCActionDragDrop143_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1608_SCActionDragDrop143_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1608").trigger("obj1608_SCActionDragDrop143_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1608_SCActionDragDrop143_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj1608_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1608_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1608").trigger("obj1608_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1608_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1613();
function runjs_1613() {
	window.obj1608_droppedInsideTargetActions_runningActionsCount = obj1608_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1608"));
	setTimeout(function() {
		window.obj1608_droppedInsideTargetActions_runningActionsCount = window.obj1608_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1608_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1608_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj1608_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1608_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1608").trigger("obj1608_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1608_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1838 
show_1614();
function show_1614() {
	var element = "#obj1838";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1608_droppedInsideTargetActions_runningActionsCount = obj1608_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1608_droppedInsideTargetActions_runningActionsCount = window.obj1608_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1608_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1608_droppedInsideTargetActions_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1608_droppedInsideTargetActions_runningActionsCount = window.obj1608_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1608_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1608_droppedInsideTargetActions_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1608_droppedInsideTargetActions_runningActionsCount = window.obj1608_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1608_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1608_droppedInsideTargetActions_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1608_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1608_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1608").trigger("obj1608_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1608_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj1608 
hide_1850();
function hide_1850() {
	var element = "#obj1608";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1608_droppedInsideTargetActions_runningActionsCount = obj1608_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1608_droppedInsideTargetActions_runningActionsCount = window.obj1608_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1608_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1608_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1850(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1608_droppedInsideTargetActions_runningActionsCount = window.obj1608_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1608_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1608_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj1608_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1608_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1608").trigger("obj1608_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1608_droppedInsideTargetActions_activeActionGroupIndex = 3;
	
















//	action: increment counter
//	target: obj1940 
incrementCounter_1615();
function incrementCounter_1615() {
	window.obj1608_droppedInsideTargetActions_runningActionsCount = obj1608_droppedInsideTargetActions_runningActionsCount + 1;

	var oldValue = obj1940_counterValue;
	obj1940_counterValue = obj1940_counterValue + 1;
	if (! obj1940_counterCanExceedTargetValue && obj1940_counterValue > obj1940_counterTargetValue) {
		obj1940_counterValue = obj1940_counterTargetValue;
	}
	if (oldValue != obj1940_counterValue) {
		$("#obj1940").trigger('SCEventCounterValueChange');
		$("#obj1940").trigger('SCEventCounterIncrease');
		if (obj1940_counterValue == obj1940_counterTargetValue)
			$("#obj1940").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj1608_droppedInsideTargetActions_runningActionsCount = window.obj1608_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1608_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1608_droppedInsideTargetActions_actionGroup4();
} }, 1);
}





};
obj1608_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1608_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1608").trigger("obj1608_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1608_droppedInsideTargetActions_activeActionGroupIndex = 4;
	





















};
obj1892_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1892_onTap_activeActionGroupIndex = -1;
		$("#obj1892").trigger("obj1892_onTap_ended");
		
		return;
	}
	window.obj1892_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1895 
hide_1902();
function hide_1902() {
	var element = "#obj1895";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1892_onTap_runningActionsCount = obj1892_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1892_onTap_runningActionsCount = window.obj1892_onTap_runningActionsCount - 1;
if (window.obj1892_onTap_runningActionsCount == 0) {
	obj1892_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1902(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1892_onTap_runningActionsCount = window.obj1892_onTap_runningActionsCount - 1;
if (window.obj1892_onTap_runningActionsCount == 0) {
	obj1892_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1892 
hide_1903();
function hide_1903() {
	var element = "#obj1892";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1892_onTap_runningActionsCount = obj1892_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1892_onTap_runningActionsCount = window.obj1892_onTap_runningActionsCount - 1;
if (window.obj1892_onTap_runningActionsCount == 0) {
	obj1892_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1903(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1892_onTap_runningActionsCount = window.obj1892_onTap_runningActionsCount - 1;
if (window.obj1892_onTap_runningActionsCount == 0) {
	obj1892_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}














//	action: Run JavaScript
runjs_1975();
function runjs_1975() {
	window.obj1892_onTap_runningActionsCount = obj1892_onTap_runningActionsCount + 1;

	PubCoder.sendPageObjectToBack($("#obj1892"));
	setTimeout(function() {
		window.obj1892_onTap_runningActionsCount = window.obj1892_onTap_runningActionsCount - 1;
if (window.obj1892_onTap_runningActionsCount == 0) {
	obj1892_onTap_actionGroup1();
}
	}, 1);
}






};
obj1892_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1892_onTap_activeActionGroupIndex = -1;
		$("#obj1892").trigger("obj1892_onTap_ended");
		
		return;
	}
	window.obj1892_onTap_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj1890 
move_1904();
function move_1904() {
	window.obj1892_onTap_runningActionsCount = obj1892_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj1890");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=670";
	var moveY = "+=5";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1892_onTap_runningActionsCount = window.obj1892_onTap_runningActionsCount - 1;
if (window.obj1892_onTap_runningActionsCount == 0) {
	obj1892_onTap_actionGroup2();
}
		}, 1);
	});
}



















};
obj1892_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1892_onTap_activeActionGroupIndex = -1;
		$("#obj1892").trigger("obj1892_onTap_ended");
		
		return;
	}
	window.obj1892_onTap_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_1906();
function runjs_1906() {
	window.obj1892_onTap_runningActionsCount = obj1892_onTap_runningActionsCount + 1;

	PubCoder.sendPageObjectBackward($("#obj1890"));
	setTimeout(function() {
		window.obj1892_onTap_runningActionsCount = window.obj1892_onTap_runningActionsCount - 1;
if (window.obj1892_onTap_runningActionsCount == 0) {
	obj1892_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1907();
function runjs_1907() {
	window.obj1892_onTap_runningActionsCount = obj1892_onTap_runningActionsCount + 1;

	PubCoder.sendPageObjectBackward($("#obj1890"));
	setTimeout(function() {
		window.obj1892_onTap_runningActionsCount = window.obj1892_onTap_runningActionsCount - 1;
if (window.obj1892_onTap_runningActionsCount == 0) {
	obj1892_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1908();
function runjs_1908() {
	window.obj1892_onTap_runningActionsCount = obj1892_onTap_runningActionsCount + 1;

	PubCoder.sendPageObjectBackward($("#obj1890"));
	setTimeout(function() {
		window.obj1892_onTap_runningActionsCount = window.obj1892_onTap_runningActionsCount - 1;
if (window.obj1892_onTap_runningActionsCount == 0) {
	obj1892_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1909();
function runjs_1909() {
	window.obj1892_onTap_runningActionsCount = obj1892_onTap_runningActionsCount + 1;

	PubCoder.sendPageObjectBackward($("#obj1890"));
	setTimeout(function() {
		window.obj1892_onTap_runningActionsCount = window.obj1892_onTap_runningActionsCount - 1;
if (window.obj1892_onTap_runningActionsCount == 0) {
	obj1892_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1910();
function runjs_1910() {
	window.obj1892_onTap_runningActionsCount = obj1892_onTap_runningActionsCount + 1;

	PubCoder.sendPageObjectBackward($("#obj1890"));
	setTimeout(function() {
		window.obj1892_onTap_runningActionsCount = window.obj1892_onTap_runningActionsCount - 1;
if (window.obj1892_onTap_runningActionsCount == 0) {
	obj1892_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1911();
function runjs_1911() {
	window.obj1892_onTap_runningActionsCount = obj1892_onTap_runningActionsCount + 1;

	PubCoder.sendPageObjectBackward($("#obj1890"));
	setTimeout(function() {
		window.obj1892_onTap_runningActionsCount = window.obj1892_onTap_runningActionsCount - 1;
if (window.obj1892_onTap_runningActionsCount == 0) {
	obj1892_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1912();
function runjs_1912() {
	window.obj1892_onTap_runningActionsCount = obj1892_onTap_runningActionsCount + 1;

	PubCoder.sendPageObjectBackward($("#obj1890"));
	setTimeout(function() {
		window.obj1892_onTap_runningActionsCount = window.obj1892_onTap_runningActionsCount - 1;
if (window.obj1892_onTap_runningActionsCount == 0) {
	obj1892_onTap_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1913();
function runjs_1913() {
	window.obj1892_onTap_runningActionsCount = obj1892_onTap_runningActionsCount + 1;

	PubCoder.sendPageObjectBackward($("#obj1890"));
	setTimeout(function() {
		window.obj1892_onTap_runningActionsCount = window.obj1892_onTap_runningActionsCount - 1;
if (window.obj1892_onTap_runningActionsCount == 0) {
	obj1892_onTap_actionGroup3();
}
	}, 1);
}






};
obj1892_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1892_onTap_activeActionGroupIndex = -1;
		$("#obj1892").trigger("obj1892_onTap_ended");
		
		return;
	}
	window.obj1892_onTap_activeActionGroupIndex = 3;
	

//	action: show 
//	target: obj1921 
show_1927();
function show_1927() {
	var element = "#obj1921";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1892_onTap_runningActionsCount = obj1892_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1892_onTap_runningActionsCount = window.obj1892_onTap_runningActionsCount - 1;
if (window.obj1892_onTap_runningActionsCount == 0) {
	obj1892_onTap_actionGroup4();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1892_onTap_runningActionsCount = window.obj1892_onTap_runningActionsCount - 1;
if (window.obj1892_onTap_runningActionsCount == 0) {
	obj1892_onTap_actionGroup4();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1892_onTap_runningActionsCount = window.obj1892_onTap_runningActionsCount - 1;
if (window.obj1892_onTap_runningActionsCount == 0) {
	obj1892_onTap_actionGroup4();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1915 
show_1920();
function show_1920() {
	var element = "#obj1915";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1892_onTap_runningActionsCount = obj1892_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1892_onTap_runningActionsCount = window.obj1892_onTap_runningActionsCount - 1;
if (window.obj1892_onTap_runningActionsCount == 0) {
	obj1892_onTap_actionGroup4();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1892_onTap_runningActionsCount = window.obj1892_onTap_runningActionsCount - 1;
if (window.obj1892_onTap_runningActionsCount == 0) {
	obj1892_onTap_actionGroup4();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1892_onTap_runningActionsCount = window.obj1892_onTap_runningActionsCount - 1;
if (window.obj1892_onTap_runningActionsCount == 0) {
	obj1892_onTap_actionGroup4();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1892_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1892_onTap_activeActionGroupIndex = -1;
		$("#obj1892").trigger("obj1892_onTap_ended");
		
		return;
	}
	window.obj1892_onTap_activeActionGroupIndex = 4;
	





















};
obj1895_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1895_onShow_activeActionGroupIndex = -1;
		$("#obj1895").trigger("obj1895_onShow_ended");
		
		return;
	}
	window.obj1895_onShow_activeActionGroupIndex = 0;
	








//	action: wait
wait_1898();
function wait_1898() {
	window.obj1895_onShow_runningActionsCount = obj1895_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1895_onShow_runningActionsCount = window.obj1895_onShow_runningActionsCount - 1;
if (window.obj1895_onShow_runningActionsCount == 0) {
	obj1895_onShow_actionGroup1();
}
	}, 3000);
}












};
obj1895_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1895_onShow_activeActionGroupIndex = -1;
		$("#obj1895").trigger("obj1895_onShow_ended");
		
		return;
	}
	window.obj1895_onShow_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1892 
show_1901();
function show_1901() {
	var element = "#obj1892";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1895_onShow_runningActionsCount = obj1895_onShow_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 2000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1895_onShow_runningActionsCount = window.obj1895_onShow_runningActionsCount - 1;
if (window.obj1895_onShow_runningActionsCount == 0) {
	obj1895_onShow_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1895_onShow_runningActionsCount = window.obj1895_onShow_runningActionsCount - 1;
if (window.obj1895_onShow_runningActionsCount == 0) {
	obj1895_onShow_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(2000, function() {
	// 		setTimeout(function() {
	// 			window.obj1895_onShow_runningActionsCount = window.obj1895_onShow_runningActionsCount - 1;
if (window.obj1895_onShow_runningActionsCount == 0) {
	obj1895_onShow_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1895_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1895_onShow_activeActionGroupIndex = -1;
		$("#obj1895").trigger("obj1895_onShow_ended");
		
		return;
	}
	window.obj1895_onShow_activeActionGroupIndex = 2;
	





















};
obj1921_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1921_onTap_activeActionGroupIndex = -1;
		$("#obj1921").trigger("obj1921_onTap_ended");
		
		return;
	}
	window.obj1921_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1890 
hide_1923();
function hide_1923() {
	var element = "#obj1890";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1921_onTap_runningActionsCount = obj1921_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1921_onTap_runningActionsCount = window.obj1921_onTap_runningActionsCount - 1;
if (window.obj1921_onTap_runningActionsCount == 0) {
	obj1921_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1923(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1921_onTap_runningActionsCount = window.obj1921_onTap_runningActionsCount - 1;
if (window.obj1921_onTap_runningActionsCount == 0) {
	obj1921_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1915 
hide_1924();
function hide_1924() {
	var element = "#obj1915";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1921_onTap_runningActionsCount = obj1921_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1921_onTap_runningActionsCount = window.obj1921_onTap_runningActionsCount - 1;
if (window.obj1921_onTap_runningActionsCount == 0) {
	obj1921_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1924(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1921_onTap_runningActionsCount = window.obj1921_onTap_runningActionsCount - 1;
if (window.obj1921_onTap_runningActionsCount == 0) {
	obj1921_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj1921_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1921_onTap_activeActionGroupIndex = -1;
		$("#obj1921").trigger("obj1921_onTap_ended");
		
		return;
	}
	window.obj1921_onTap_activeActionGroupIndex = 1;
	








//	action: wait
wait_1925();
function wait_1925() {
	window.obj1921_onTap_runningActionsCount = obj1921_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1921_onTap_runningActionsCount = window.obj1921_onTap_runningActionsCount - 1;
if (window.obj1921_onTap_runningActionsCount == 0) {
	obj1921_onTap_actionGroup2();
}
	}, 3000);
}












};
obj1921_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1921_onTap_activeActionGroupIndex = -1;
		$("#obj1921").trigger("obj1921_onTap_ended");
		
		return;
	}
	window.obj1921_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	target: obj1890 
show_1926();
function show_1926() {
	var element = "#obj1890";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1921_onTap_runningActionsCount = obj1921_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1921_onTap_runningActionsCount = window.obj1921_onTap_runningActionsCount - 1;
if (window.obj1921_onTap_runningActionsCount == 0) {
	obj1921_onTap_actionGroup3();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1921_onTap_runningActionsCount = window.obj1921_onTap_runningActionsCount - 1;
if (window.obj1921_onTap_runningActionsCount == 0) {
	obj1921_onTap_actionGroup3();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1921_onTap_runningActionsCount = window.obj1921_onTap_runningActionsCount - 1;
if (window.obj1921_onTap_runningActionsCount == 0) {
	obj1921_onTap_actionGroup3();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1915 
show_1955();
function show_1955() {
	var element = "#obj1915";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1921_onTap_runningActionsCount = obj1921_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1921_onTap_runningActionsCount = window.obj1921_onTap_runningActionsCount - 1;
if (window.obj1921_onTap_runningActionsCount == 0) {
	obj1921_onTap_actionGroup3();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1921_onTap_runningActionsCount = window.obj1921_onTap_runningActionsCount - 1;
if (window.obj1921_onTap_runningActionsCount == 0) {
	obj1921_onTap_actionGroup3();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1921_onTap_runningActionsCount = window.obj1921_onTap_runningActionsCount - 1;
if (window.obj1921_onTap_runningActionsCount == 0) {
	obj1921_onTap_actionGroup3();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1921_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1921_onTap_activeActionGroupIndex = -1;
		$("#obj1921").trigger("obj1921_onTap_ended");
		
		return;
	}
	window.obj1921_onTap_activeActionGroupIndex = 3;
	





















};
obj1940_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1940_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj1940").trigger("obj1940_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj1940_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1915 
hide_1945();
function hide_1945() {
	var element = "#obj1915";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = obj1940_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1945(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj1942 
show_1946();
function show_1946() {
	var element = "#obj1942";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = obj1940_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1940_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1940_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj1940").trigger("obj1940_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj1940_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	








//	action: wait
wait_1947();
function wait_1947() {
	window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = obj1940_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup2();
}
	}, 3000);
}












};
obj1940_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1940_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj1940").trigger("obj1940_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj1940_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj1942 
hide_1948();
function hide_1948() {
	var element = "#obj1942";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = obj1940_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup3();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1948(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup3();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1921 
hide_1949();
function hide_1949() {
	var element = "#obj1921";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = obj1940_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup3();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1949(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup3();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1890 
hide_1950();
function hide_1950() {
	var element = "#obj1890";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = obj1940_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup3();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1950(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup3();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj1940_SCEventCounterReachedTargetValue_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1940_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj1940").trigger("obj1940_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj1940_SCEventCounterReachedTargetValue_activeActionGroupIndex = 3;
	

//	action: show 
//	target: obj1961 
show_1967();
function show_1967() {
	var element = "#obj1961";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = obj1940_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup4();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup4();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(300, function() {
	// 		setTimeout(function() {
	// 			window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup4();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1928 
show_1951();
function show_1951() {
	var element = "#obj1928";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = obj1940_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup4();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup4();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup4();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1940_SCEventCounterReachedTargetValue_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1940_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj1940").trigger("obj1940_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj1940_SCEventCounterReachedTargetValue_activeActionGroupIndex = 4;
	

//	action: show 
//	target: obj1959 
show_1968();
function show_1968() {
	var element = "#obj1959";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = obj1940_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup5();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup5();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(300, function() {
	// 		setTimeout(function() {
	// 			window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup5();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1930 
show_1952();
function show_1952() {
	var element = "#obj1930";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = obj1940_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup5();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup5();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup5();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1940_SCEventCounterReachedTargetValue_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1940_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj1940").trigger("obj1940_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj1940_SCEventCounterReachedTargetValue_activeActionGroupIndex = 5;
	

//	action: show 
//	target: obj1963 
show_1969();
function show_1969() {
	var element = "#obj1963";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = obj1940_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup6();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup6();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(300, function() {
	// 		setTimeout(function() {
	// 			window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup6();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1934 
show_1954();
function show_1954() {
	var element = "#obj1934";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = obj1940_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup6();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup6();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup6();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1940_SCEventCounterReachedTargetValue_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1940_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj1940").trigger("obj1940_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj1940_SCEventCounterReachedTargetValue_activeActionGroupIndex = 6;
	

//	action: show 
//	target: obj1965 
show_1970();
function show_1970() {
	var element = "#obj1965";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = obj1940_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup7();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup7();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(300, function() {
	// 		setTimeout(function() {
	// 			window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup7();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1932 
show_1953();
function show_1953() {
	var element = "#obj1932";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = obj1940_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup7();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup7();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1940_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1940_SCEventCounterReachedTargetValue_actionGroup7();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1940_SCEventCounterReachedTargetValue_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1940_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj1940").trigger("obj1940_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj1940_SCEventCounterReachedTargetValue_activeActionGroupIndex = 7;
	





















};
obj3343_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3343_onTap_activeActionGroupIndex = -1;
		$("#obj3343").trigger("obj3343_onTap_ended");
		
		return;
	}
	window.obj3343_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj3343 
hide_3345();
function hide_3345() {
	var element = "#obj3343";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3343_onTap_runningActionsCount = obj3343_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj3343_onTap_runningActionsCount = window.obj3343_onTap_runningActionsCount - 1;
if (window.obj3343_onTap_runningActionsCount == 0) {
	obj3343_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_3345(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj3343_onTap_runningActionsCount = window.obj3343_onTap_runningActionsCount - 1;
if (window.obj3343_onTap_runningActionsCount == 0) {
	obj3343_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj3341 
hide_3346();
function hide_3346() {
	var element = "#obj3341";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3343_onTap_runningActionsCount = obj3343_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj3343_onTap_runningActionsCount = window.obj3343_onTap_runningActionsCount - 1;
if (window.obj3343_onTap_runningActionsCount == 0) {
	obj3343_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_3346(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj3343_onTap_runningActionsCount = window.obj3343_onTap_runningActionsCount - 1;
if (window.obj3343_onTap_runningActionsCount == 0) {
	obj3343_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj3384 
hide_3348();
function hide_3348() {
	var element = "#obj3384";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3343_onTap_runningActionsCount = obj3343_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOutDown";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj3343_onTap_runningActionsCount = window.obj3343_onTap_runningActionsCount - 1;
if (window.obj3343_onTap_runningActionsCount == 0) {
	obj3343_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_3348(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj3343_onTap_runningActionsCount = window.obj3343_onTap_runningActionsCount - 1;
if (window.obj3343_onTap_runningActionsCount == 0) {
	obj3343_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj3343_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3343_onTap_activeActionGroupIndex = -1;
		$("#obj3343").trigger("obj3343_onTap_ended");
		
		return;
	}
	window.obj3343_onTap_activeActionGroupIndex = 1;
	





















};
obj2049_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2049_onTap_activeActionGroupIndex = -1;
		$("#obj2049").trigger("obj2049_onTap_ended");
		
		return;
	}
	window.obj2049_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page1
goToPage_2051();
function goToPage_2051() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../1/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(1))},200);
	}
}





















};
obj2049_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2049_onTap_activeActionGroupIndex = -1;
		$("#obj2049").trigger("obj2049_onTap_ended");
		
		return;
	}
	window.obj2049_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



































































/*
 *
 *   obj1802: Event Show
 *
 */
 
$("#obj1802").bind('SCEventShow', function(event) {
	if (window.obj1802_onShow_activeActionGroupIndex != -1) return;
var obj1802_onShow_runningActionsCount = 0;
var obj1802_onShow_loopCount = 0;
obj1802_onShow_actionGroup0();
});







/*
 *
 *   obj1790: Event Show
 *
 */
 
$("#obj1790").bind('SCEventShow', function(event) {
	if (window.obj1790_onShow_activeActionGroupIndex != -1) return;
var obj1790_onShow_runningActionsCount = 0;
var obj1790_onShow_loopCount = 0;
obj1790_onShow_actionGroup0();
});







/*
 *
 *   obj1778: Event Show
 *
 */
 
$("#obj1778").bind('SCEventShow', function(event) {
	if (window.obj1778_onShow_activeActionGroupIndex != -1) return;
var obj1778_onShow_runningActionsCount = 0;
var obj1778_onShow_loopCount = 0;
obj1778_onShow_actionGroup0();
});







/*
 *
 *   obj1766: Event Show
 *
 */
 
$("#obj1766").bind('SCEventShow', function(event) {
	if (window.obj1766_onShow_activeActionGroupIndex != -1) return;
var obj1766_onShow_runningActionsCount = 0;
var obj1766_onShow_loopCount = 0;
obj1766_onShow_actionGroup0();
});







/*
 *
 *   obj1754: Event Show
 *
 */
 
$("#obj1754").bind('SCEventShow', function(event) {
	if (window.obj1754_onShow_activeActionGroupIndex != -1) return;
var obj1754_onShow_runningActionsCount = 0;
var obj1754_onShow_loopCount = 0;
obj1754_onShow_actionGroup0();
});







/*
 *
 *   obj1742: Event Show
 *
 */
 
$("#obj1742").bind('SCEventShow', function(event) {
	if (window.obj1742_onShow_activeActionGroupIndex != -1) return;
var obj1742_onShow_runningActionsCount = 0;
var obj1742_onShow_loopCount = 0;
obj1742_onShow_actionGroup0();
});







/*
 *
 *   obj1731: Event Show
 *
 */
 
$("#obj1731").bind('SCEventShow', function(event) {
	if (window.obj1731_onShow_activeActionGroupIndex != -1) return;
var obj1731_onShow_runningActionsCount = 0;
var obj1731_onShow_loopCount = 0;
obj1731_onShow_actionGroup0();
});







/*
 *
 *   obj1838: Event Show
 *
 */
 
$("#obj1838").bind('SCEventShow', function(event) {
	if (window.obj1838_onShow_activeActionGroupIndex != -1) return;
var obj1838_onShow_runningActionsCount = 0;
var obj1838_onShow_loopCount = 0;
obj1838_onShow_actionGroup0();
});






















































































































/*
 *
 *   obj1691: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1691");
	var winTarget = document.getElementById("obj1691");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1691").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1691_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1691_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1691_onTouchDown_activeActionGroupIndex != -1) return;
var obj1691_onTouchDown_runningActionsCount = 0;
var obj1691_onTouchDown_loopCount = 0;
obj1691_onTouchDown_actionGroup0();
});


/*
 *
 *   obj1691: Event SCActionDragDrop240_droppedOutsideTargetActions
 *
 */
$("#obj1691").bind("SCActionDragDrop240_droppedOutsideTargetActions", function(event) {
	if (window.obj1691_SCActionDragDrop240_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1691_SCActionDragDrop240_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1691_SCActionDragDrop240_droppedOutsideTargetActions_loopCount = 0;
obj1691_SCActionDragDrop240_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1691: Event droppedInsideTargetActions
 *
 */
$("#obj1691").bind("droppedInsideTargetActions", function(event) {
	if (window.obj1691_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj1691_droppedInsideTargetActions_runningActionsCount = 0;
var obj1691_droppedInsideTargetActions_loopCount = 0;
obj1691_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj1679: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1679");
	var winTarget = document.getElementById("obj1679");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1679").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1679_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1679_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1679_onTouchDown_activeActionGroupIndex != -1) return;
var obj1679_onTouchDown_runningActionsCount = 0;
var obj1679_onTouchDown_loopCount = 0;
obj1679_onTouchDown_actionGroup0();
});


/*
 *
 *   obj1679: Event SCActionDragDrop226_droppedOutsideTargetActions
 *
 */
$("#obj1679").bind("SCActionDragDrop226_droppedOutsideTargetActions", function(event) {
	if (window.obj1679_SCActionDragDrop226_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1679_SCActionDragDrop226_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1679_SCActionDragDrop226_droppedOutsideTargetActions_loopCount = 0;
obj1679_SCActionDragDrop226_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1679: Event droppedInsideTargetActions
 *
 */
$("#obj1679").one("droppedInsideTargetActions", function(event) {
	if (window.obj1679_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj1679_droppedInsideTargetActions_runningActionsCount = 0;
var obj1679_droppedInsideTargetActions_loopCount = 0;
obj1679_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj1667: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1667");
	var winTarget = document.getElementById("obj1667");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1667").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1667_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1667_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1667_onTouchDown_activeActionGroupIndex != -1) return;
var obj1667_onTouchDown_runningActionsCount = 0;
var obj1667_onTouchDown_loopCount = 0;
obj1667_onTouchDown_actionGroup0();
});


/*
 *
 *   obj1667: Event SCActionDragDrop212_droppedOutsideTargetActions
 *
 */
$("#obj1667").bind("SCActionDragDrop212_droppedOutsideTargetActions", function(event) {
	if (window.obj1667_SCActionDragDrop212_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1667_SCActionDragDrop212_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1667_SCActionDragDrop212_droppedOutsideTargetActions_loopCount = 0;
obj1667_SCActionDragDrop212_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1667: Event droppedInsideTargetActions
 *
 */
$("#obj1667").one("droppedInsideTargetActions", function(event) {
	if (window.obj1667_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj1667_droppedInsideTargetActions_runningActionsCount = 0;
var obj1667_droppedInsideTargetActions_loopCount = 0;
obj1667_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj1655: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1655");
	var winTarget = document.getElementById("obj1655");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1655").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1655_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1655_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1655_onTouchDown_activeActionGroupIndex != -1) return;
var obj1655_onTouchDown_runningActionsCount = 0;
var obj1655_onTouchDown_loopCount = 0;
obj1655_onTouchDown_actionGroup0();
});


/*
 *
 *   obj1655: Event SCActionDragDrop198_droppedOutsideTargetActions
 *
 */
$("#obj1655").bind("SCActionDragDrop198_droppedOutsideTargetActions", function(event) {
	if (window.obj1655_SCActionDragDrop198_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1655_SCActionDragDrop198_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1655_SCActionDragDrop198_droppedOutsideTargetActions_loopCount = 0;
obj1655_SCActionDragDrop198_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1655: Event droppedInsideTargetActions
 *
 */
$("#obj1655").one("droppedInsideTargetActions", function(event) {
	if (window.obj1655_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj1655_droppedInsideTargetActions_runningActionsCount = 0;
var obj1655_droppedInsideTargetActions_loopCount = 0;
obj1655_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj1643: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1643");
	var winTarget = document.getElementById("obj1643");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1643").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1643_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1643_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1643_onTouchDown_activeActionGroupIndex != -1) return;
var obj1643_onTouchDown_runningActionsCount = 0;
var obj1643_onTouchDown_loopCount = 0;
obj1643_onTouchDown_actionGroup0();
});


/*
 *
 *   obj1643: Event SCActionDragDrop184_droppedOutsideTargetActions
 *
 */
$("#obj1643").bind("SCActionDragDrop184_droppedOutsideTargetActions", function(event) {
	if (window.obj1643_SCActionDragDrop184_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1643_SCActionDragDrop184_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1643_SCActionDragDrop184_droppedOutsideTargetActions_loopCount = 0;
obj1643_SCActionDragDrop184_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1643: Event droppedInsideTargetActions
 *
 */
$("#obj1643").one("droppedInsideTargetActions", function(event) {
	if (window.obj1643_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj1643_droppedInsideTargetActions_runningActionsCount = 0;
var obj1643_droppedInsideTargetActions_loopCount = 0;
obj1643_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj1631: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1631");
	var winTarget = document.getElementById("obj1631");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1631").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1631_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1631_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1631_onTouchDown_activeActionGroupIndex != -1) return;
var obj1631_onTouchDown_runningActionsCount = 0;
var obj1631_onTouchDown_loopCount = 0;
obj1631_onTouchDown_actionGroup0();
});


/*
 *
 *   obj1631: Event SCActionDragDrop170_droppedOutsideTargetActions
 *
 */
$("#obj1631").bind("SCActionDragDrop170_droppedOutsideTargetActions", function(event) {
	if (window.obj1631_SCActionDragDrop170_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1631_SCActionDragDrop170_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1631_SCActionDragDrop170_droppedOutsideTargetActions_loopCount = 0;
obj1631_SCActionDragDrop170_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1631: Event droppedInsideTargetActions
 *
 */
$("#obj1631").one("droppedInsideTargetActions", function(event) {
	if (window.obj1631_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj1631_droppedInsideTargetActions_runningActionsCount = 0;
var obj1631_droppedInsideTargetActions_loopCount = 0;
obj1631_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj1620: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1620");
	var winTarget = document.getElementById("obj1620");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1620").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1620_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1620_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1620_onTouchDown_activeActionGroupIndex != -1) return;
var obj1620_onTouchDown_runningActionsCount = 0;
var obj1620_onTouchDown_loopCount = 0;
obj1620_onTouchDown_actionGroup0();
});


/*
 *
 *   obj1620: Event SCActionDragDrop157_droppedOutsideTargetActions
 *
 */
$("#obj1620").bind("SCActionDragDrop157_droppedOutsideTargetActions", function(event) {
	if (window.obj1620_SCActionDragDrop157_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1620_SCActionDragDrop157_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1620_SCActionDragDrop157_droppedOutsideTargetActions_loopCount = 0;
obj1620_SCActionDragDrop157_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1620: Event droppedInsideTargetActions
 *
 */
$("#obj1620").one("droppedInsideTargetActions", function(event) {
	if (window.obj1620_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj1620_droppedInsideTargetActions_runningActionsCount = 0;
var obj1620_droppedInsideTargetActions_loopCount = 0;
obj1620_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj1608: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1608");
	var winTarget = document.getElementById("obj1608");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1608").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1608_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1608_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1608_onTouchDown_activeActionGroupIndex != -1) return;
var obj1608_onTouchDown_runningActionsCount = 0;
var obj1608_onTouchDown_loopCount = 0;
obj1608_onTouchDown_actionGroup0();
});


/*
 *
 *   obj1608: Event SCActionDragDrop143_droppedOutsideTargetActions
 *
 */
$("#obj1608").bind("SCActionDragDrop143_droppedOutsideTargetActions", function(event) {
	if (window.obj1608_SCActionDragDrop143_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1608_SCActionDragDrop143_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1608_SCActionDragDrop143_droppedOutsideTargetActions_loopCount = 0;
obj1608_SCActionDragDrop143_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1608: Event droppedInsideTargetActions
 *
 */
$("#obj1608").one("droppedInsideTargetActions", function(event) {
	if (window.obj1608_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj1608_droppedInsideTargetActions_runningActionsCount = 0;
var obj1608_droppedInsideTargetActions_loopCount = 0;
obj1608_droppedInsideTargetActions_actionGroup0();
});










/*
 *
 *   obj1892: Event Touch Down
 *
 */
 
$("#obj1892").one(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1892_onTap_activeActionGroupIndex != -1) return;
var obj1892_onTap_runningActionsCount = 0;
var obj1892_onTap_loopCount = 0;
obj1892_onTap_actionGroup0();
});








/*
 *
 *   obj1895: Event Show
 *
 */
 
$("#obj1895").bind('SCEventShow', function(event) {
	if (window.obj1895_onShow_activeActionGroupIndex != -1) return;
var obj1895_onShow_runningActionsCount = 0;
var obj1895_onShow_loopCount = 0;
obj1895_onShow_actionGroup0();
});












/*
 *
 *   obj1921: Event Touch Down
 *
 */
 
$("#obj1921").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1921_onTap_activeActionGroupIndex != -1) return;
var obj1921_onTap_runningActionsCount = 0;
var obj1921_onTap_loopCount = 0;
obj1921_onTap_actionGroup0();
});










/*
 *
 *   obj1940: Event SCEventCounterReachedTargetValue
 *
 */
$("#obj1940").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj1940_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) return;
var obj1940_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj1940_SCEventCounterReachedTargetValue_loopCount = 0;
obj1940_SCEventCounterReachedTargetValue_actionGroup0();
});
























/*
 *
 *   obj3343: Event Touch Down
 *
 */
 
$("#obj3343").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3343_onTap_activeActionGroupIndex != -1) return;
var obj3343_onTap_runningActionsCount = 0;
var obj3343_onTap_loopCount = 0;
obj3343_onTap_actionGroup0();
});







/*
 *
 *   obj2049: Event Touch Down
 *
 */
 
$("#obj2049").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2049_onTap_activeActionGroupIndex != -1) return;
var obj2049_onTap_runningActionsCount = 0;
var obj2049_onTap_loopCount = 0;
obj2049_onTap_actionGroup0();
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
	
$("#obj1503").trigger('SCEventShow');
$("#obj1717").trigger('SCEventShow');
$("#obj1715").trigger('SCEventShow');
$("#obj1713").trigger('SCEventShow');
$("#obj1711").trigger('SCEventShow');
$("#obj1709").trigger('SCEventShow');
$("#obj1707").trigger('SCEventShow');
$("#obj1705").trigger('SCEventShow');
$("#obj1703").trigger('SCEventShow');
$("#obj1691").trigger('SCEventShow');
$("#obj1679").trigger('SCEventShow');
$("#obj1667").trigger('SCEventShow');
$("#obj1655").trigger('SCEventShow');
$("#obj1643").trigger('SCEventShow');
$("#obj1631").trigger('SCEventShow');
$("#obj1620").trigger('SCEventShow');
$("#obj1608").trigger('SCEventShow');
$("#obj1890").trigger('SCEventShow');
$("#obj1895").trigger('SCEventShow');
$("#obj3341").trigger('SCEventShow');
$("#obj3384").trigger('SCEventShow');
$("#obj3343").trigger('SCEventShow');
$("#obj2049").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});