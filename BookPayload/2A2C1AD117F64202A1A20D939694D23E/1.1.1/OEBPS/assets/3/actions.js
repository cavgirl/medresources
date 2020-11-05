pubcoder.projectID = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.id = "9706FB5C04CD460A85938C3898CAD20C";
pubcoder.project.title = "Medieval Resources";
pubcoder.page.id = 2467;
pubcoder.page.title = "3";
pubcoder.page.number = 3;
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
var obj2514_onShow_activeActionGroupIndex = -1;
var obj2514_onShow_runningActionsCount = 0;
var obj2514_onShow_loopCount = 0;
var obj2510_onShow_activeActionGroupIndex = -1;
var obj2510_onShow_runningActionsCount = 0;
var obj2510_onShow_loopCount = 0;
var obj2506_onShow_activeActionGroupIndex = -1;
var obj2506_onShow_runningActionsCount = 0;
var obj2506_onShow_loopCount = 0;
var obj2525_onShow_activeActionGroupIndex = -1;
var obj2525_onShow_runningActionsCount = 0;
var obj2525_onShow_loopCount = 0;
var obj2530_onShow_activeActionGroupIndex = -1;
var obj2530_onShow_runningActionsCount = 0;
var obj2530_onShow_loopCount = 0;
var obj2559_onShow_activeActionGroupIndex = -1;
var obj2559_onShow_runningActionsCount = 0;
var obj2559_onShow_loopCount = 0;
var obj2563_onShow_activeActionGroupIndex = -1;
var obj2563_onShow_runningActionsCount = 0;
var obj2563_onShow_loopCount = 0;
var obj2518_onDrag_activeActionGroupIndex = -1;
var obj2518_onDrag_runningActionsCount = 0;
var obj2518_onDrag_loopCount = 0;
var obj2518_onTouchDown_activeActionGroupIndex = -1;
var obj2518_onTouchDown_runningActionsCount = 0;
var obj2518_onTouchDown_loopCount = 0;
var obj2518_SCActionDragDrop352_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj2518_SCActionDragDrop352_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2518_SCActionDragDrop352_droppedOutsideTargetActions_loopCount = 0;
var obj2613_onDrag_activeActionGroupIndex = -1;
var obj2613_onDrag_runningActionsCount = 0;
var obj2613_onDrag_loopCount = 0;
var obj2613_onTouchDown_activeActionGroupIndex = -1;
var obj2613_onTouchDown_runningActionsCount = 0;
var obj2613_onTouchDown_loopCount = 0;
var obj2613_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj2613_droppedInsideTargetActions_runningActionsCount = 0;
var obj2613_droppedInsideTargetActions_loopCount = 0;
var obj2488_onDrag_activeActionGroupIndex = -1;
var obj2488_onDrag_runningActionsCount = 0;
var obj2488_onDrag_loopCount = 0;
var obj2488_onTouchDown_activeActionGroupIndex = -1;
var obj2488_onTouchDown_runningActionsCount = 0;
var obj2488_onTouchDown_loopCount = 0;
var obj2488_SCActionDragDrop2372_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj2488_SCActionDragDrop2372_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2488_SCActionDragDrop2372_droppedOutsideTargetActions_loopCount = 0;
var obj2488_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj2488_droppedInsideTargetActions_runningActionsCount = 0;
var obj2488_droppedInsideTargetActions_loopCount = 0;
var obj2605_onDrag_activeActionGroupIndex = -1;
var obj2605_onDrag_runningActionsCount = 0;
var obj2605_onDrag_loopCount = 0;
var obj2605_onTouchDown_activeActionGroupIndex = -1;
var obj2605_onTouchDown_runningActionsCount = 0;
var obj2605_onTouchDown_loopCount = 0;
var obj2605_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj2605_droppedInsideTargetActions_runningActionsCount = 0;
var obj2605_droppedInsideTargetActions_loopCount = 0;
var obj2597_onDrag_activeActionGroupIndex = -1;
var obj2597_onDrag_runningActionsCount = 0;
var obj2597_onDrag_loopCount = 0;
var obj2597_onTouchDown_activeActionGroupIndex = -1;
var obj2597_onTouchDown_runningActionsCount = 0;
var obj2597_onTouchDown_loopCount = 0;
var obj2597_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj2597_droppedInsideTargetActions_runningActionsCount = 0;
var obj2597_droppedInsideTargetActions_loopCount = 0;
var obj2589_onDrag_activeActionGroupIndex = -1;
var obj2589_onDrag_runningActionsCount = 0;
var obj2589_onDrag_loopCount = 0;
var obj2589_onTouchDown_activeActionGroupIndex = -1;
var obj2589_onTouchDown_runningActionsCount = 0;
var obj2589_onTouchDown_loopCount = 0;
var obj2589_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj2589_droppedInsideTargetActions_runningActionsCount = 0;
var obj2589_droppedInsideTargetActions_loopCount = 0;
var obj2628_onDrag_activeActionGroupIndex = -1;
var obj2628_onDrag_runningActionsCount = 0;
var obj2628_onDrag_loopCount = 0;
var obj2628_onTouchDown_activeActionGroupIndex = -1;
var obj2628_onTouchDown_runningActionsCount = 0;
var obj2628_onTouchDown_loopCount = 0;
var obj2628_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj2628_droppedInsideTargetActions_runningActionsCount = 0;
var obj2628_droppedInsideTargetActions_loopCount = 0;
var obj2636_onDrag_activeActionGroupIndex = -1;
var obj2636_onDrag_runningActionsCount = 0;
var obj2636_onDrag_loopCount = 0;
var obj2636_onTouchDown_activeActionGroupIndex = -1;
var obj2636_onTouchDown_runningActionsCount = 0;
var obj2636_onTouchDown_loopCount = 0;
var obj2636_SCActionDragDrop2372_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj2636_SCActionDragDrop2372_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2636_SCActionDragDrop2372_droppedOutsideTargetActions_loopCount = 0;
var obj2636_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj2636_droppedInsideTargetActions_runningActionsCount = 0;
var obj2636_droppedInsideTargetActions_loopCount = 0;
var obj2662_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj2662_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj2662_SCEventCounterReachedTargetValue_loopCount = 0;
var obj2735_onDrag_activeActionGroupIndex = -1;
var obj2735_onDrag_runningActionsCount = 0;
var obj2735_onDrag_loopCount = 0;
var obj2735_onTouchDown_activeActionGroupIndex = -1;
var obj2735_onTouchDown_runningActionsCount = 0;
var obj2735_onTouchDown_loopCount = 0;
var obj2735_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj2735_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2735_SCActionDragDrop380_droppedOutsideTargetActions_loopCount = 0;
var obj2726_onDrag_activeActionGroupIndex = -1;
var obj2726_onDrag_runningActionsCount = 0;
var obj2726_onDrag_loopCount = 0;
var obj2726_onTouchDown_activeActionGroupIndex = -1;
var obj2726_onTouchDown_runningActionsCount = 0;
var obj2726_onTouchDown_loopCount = 0;
var obj2726_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj2726_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2726_SCActionDragDrop380_droppedOutsideTargetActions_loopCount = 0;
var obj2719_onDrag_activeActionGroupIndex = -1;
var obj2719_onDrag_runningActionsCount = 0;
var obj2719_onDrag_loopCount = 0;
var obj2719_onTouchDown_activeActionGroupIndex = -1;
var obj2719_onTouchDown_runningActionsCount = 0;
var obj2719_onTouchDown_loopCount = 0;
var obj2719_SCActionDragDrop373_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj2719_SCActionDragDrop373_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2719_SCActionDragDrop373_droppedOutsideTargetActions_loopCount = 0;
var obj2712_onDrag_activeActionGroupIndex = -1;
var obj2712_onDrag_runningActionsCount = 0;
var obj2712_onDrag_loopCount = 0;
var obj2712_onTouchDown_activeActionGroupIndex = -1;
var obj2712_onTouchDown_runningActionsCount = 0;
var obj2712_onTouchDown_loopCount = 0;
var obj2712_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj2712_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2712_SCActionDragDrop380_droppedOutsideTargetActions_loopCount = 0;
var obj2705_onDrag_activeActionGroupIndex = -1;
var obj2705_onDrag_runningActionsCount = 0;
var obj2705_onDrag_loopCount = 0;
var obj2705_onTouchDown_activeActionGroupIndex = -1;
var obj2705_onTouchDown_runningActionsCount = 0;
var obj2705_onTouchDown_loopCount = 0;
var obj2705_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj2705_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2705_SCActionDragDrop380_droppedOutsideTargetActions_loopCount = 0;
var obj2698_onDrag_activeActionGroupIndex = -1;
var obj2698_onDrag_runningActionsCount = 0;
var obj2698_onDrag_loopCount = 0;
var obj2698_onTouchDown_activeActionGroupIndex = -1;
var obj2698_onTouchDown_runningActionsCount = 0;
var obj2698_onTouchDown_loopCount = 0;
var obj2698_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj2698_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2698_SCActionDragDrop380_droppedOutsideTargetActions_loopCount = 0;
var obj2691_onDrag_activeActionGroupIndex = -1;
var obj2691_onDrag_runningActionsCount = 0;
var obj2691_onDrag_loopCount = 0;
var obj2691_onTouchDown_activeActionGroupIndex = -1;
var obj2691_onTouchDown_runningActionsCount = 0;
var obj2691_onTouchDown_loopCount = 0;
var obj2691_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj2691_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2691_SCActionDragDrop380_droppedOutsideTargetActions_loopCount = 0;
var obj2742_onDrag_activeActionGroupIndex = -1;
var obj2742_onDrag_runningActionsCount = 0;
var obj2742_onDrag_loopCount = 0;
var obj2742_onTouchDown_activeActionGroupIndex = -1;
var obj2742_onTouchDown_runningActionsCount = 0;
var obj2742_onTouchDown_loopCount = 0;
var obj2742_SCActionDragDrop359_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj2742_SCActionDragDrop359_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2742_SCActionDragDrop359_droppedOutsideTargetActions_loopCount = 0;
var obj2749_onDrag_activeActionGroupIndex = -1;
var obj2749_onDrag_runningActionsCount = 0;
var obj2749_onDrag_loopCount = 0;
var obj2749_onTouchDown_activeActionGroupIndex = -1;
var obj2749_onTouchDown_runningActionsCount = 0;
var obj2749_onTouchDown_loopCount = 0;
var obj2749_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj2749_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2749_SCActionDragDrop380_droppedOutsideTargetActions_loopCount = 0;
var obj3294_onTap_activeActionGroupIndex = -1;
var obj3294_onTap_runningActionsCount = 0;
var obj3294_onTap_loopCount = 0;
var obj3534_SCEventRun_activeActionGroupIndex = -1;
var obj3534_SCEventRun_runningActionsCount = 0;
var obj3534_SCEventRun_loopCount = 0;
var obj2049_onTap_activeActionGroupIndex = -1;
var obj2049_onTap_runningActionsCount = 0;
var obj2049_onTap_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj2662_counterValue = 0;
var obj2662_counterTargetValue = 7;
var obj2662_counterCanExceedTargetValue = false;
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
		
obj2514_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2514_onShow_activeActionGroupIndex = -1;
		$("#obj2514").trigger("obj2514_onShow_ended");
		
		return;
	}
	window.obj2514_onShow_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj2662 
incrementCounter_2517();
function incrementCounter_2517() {
	window.obj2514_onShow_runningActionsCount = obj2514_onShow_runningActionsCount + 1;

	var oldValue = obj2662_counterValue;
	obj2662_counterValue = obj2662_counterValue + 1;
	if (! obj2662_counterCanExceedTargetValue && obj2662_counterValue > obj2662_counterTargetValue) {
		obj2662_counterValue = obj2662_counterTargetValue;
	}
	if (oldValue != obj2662_counterValue) {
		$("#obj2662").trigger('SCEventCounterValueChange');
		$("#obj2662").trigger('SCEventCounterIncrease');
		if (obj2662_counterValue == obj2662_counterTargetValue)
			$("#obj2662").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj2514_onShow_runningActionsCount = window.obj2514_onShow_runningActionsCount - 1;
if (window.obj2514_onShow_runningActionsCount == 0) {
	obj2514_onShow_actionGroup1();
} }, 1);
}





};
obj2514_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2514_onShow_activeActionGroupIndex = -1;
		$("#obj2514").trigger("obj2514_onShow_ended");
		
		return;
	}
	window.obj2514_onShow_activeActionGroupIndex = 1;
	





















};
obj2510_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2510_onShow_activeActionGroupIndex = -1;
		$("#obj2510").trigger("obj2510_onShow_ended");
		
		return;
	}
	window.obj2510_onShow_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj2662 
incrementCounter_2513();
function incrementCounter_2513() {
	window.obj2510_onShow_runningActionsCount = obj2510_onShow_runningActionsCount + 1;

	var oldValue = obj2662_counterValue;
	obj2662_counterValue = obj2662_counterValue + 1;
	if (! obj2662_counterCanExceedTargetValue && obj2662_counterValue > obj2662_counterTargetValue) {
		obj2662_counterValue = obj2662_counterTargetValue;
	}
	if (oldValue != obj2662_counterValue) {
		$("#obj2662").trigger('SCEventCounterValueChange');
		$("#obj2662").trigger('SCEventCounterIncrease');
		if (obj2662_counterValue == obj2662_counterTargetValue)
			$("#obj2662").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj2510_onShow_runningActionsCount = window.obj2510_onShow_runningActionsCount - 1;
if (window.obj2510_onShow_runningActionsCount == 0) {
	obj2510_onShow_actionGroup1();
} }, 1);
}





};
obj2510_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2510_onShow_activeActionGroupIndex = -1;
		$("#obj2510").trigger("obj2510_onShow_ended");
		
		return;
	}
	window.obj2510_onShow_activeActionGroupIndex = 1;
	





















};
obj2506_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2506_onShow_activeActionGroupIndex = -1;
		$("#obj2506").trigger("obj2506_onShow_ended");
		
		return;
	}
	window.obj2506_onShow_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj2662 
incrementCounter_2509();
function incrementCounter_2509() {
	window.obj2506_onShow_runningActionsCount = obj2506_onShow_runningActionsCount + 1;

	var oldValue = obj2662_counterValue;
	obj2662_counterValue = obj2662_counterValue + 1;
	if (! obj2662_counterCanExceedTargetValue && obj2662_counterValue > obj2662_counterTargetValue) {
		obj2662_counterValue = obj2662_counterTargetValue;
	}
	if (oldValue != obj2662_counterValue) {
		$("#obj2662").trigger('SCEventCounterValueChange');
		$("#obj2662").trigger('SCEventCounterIncrease');
		if (obj2662_counterValue == obj2662_counterTargetValue)
			$("#obj2662").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj2506_onShow_runningActionsCount = window.obj2506_onShow_runningActionsCount - 1;
if (window.obj2506_onShow_runningActionsCount == 0) {
	obj2506_onShow_actionGroup1();
} }, 1);
}





};
obj2506_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2506_onShow_activeActionGroupIndex = -1;
		$("#obj2506").trigger("obj2506_onShow_ended");
		
		return;
	}
	window.obj2506_onShow_activeActionGroupIndex = 1;
	





















};
obj2525_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2525_onShow_activeActionGroupIndex = -1;
		$("#obj2525").trigger("obj2525_onShow_ended");
		
		return;
	}
	window.obj2525_onShow_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj2662 
incrementCounter_2528();
function incrementCounter_2528() {
	window.obj2525_onShow_runningActionsCount = obj2525_onShow_runningActionsCount + 1;

	var oldValue = obj2662_counterValue;
	obj2662_counterValue = obj2662_counterValue + 1;
	if (! obj2662_counterCanExceedTargetValue && obj2662_counterValue > obj2662_counterTargetValue) {
		obj2662_counterValue = obj2662_counterTargetValue;
	}
	if (oldValue != obj2662_counterValue) {
		$("#obj2662").trigger('SCEventCounterValueChange');
		$("#obj2662").trigger('SCEventCounterIncrease');
		if (obj2662_counterValue == obj2662_counterTargetValue)
			$("#obj2662").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj2525_onShow_runningActionsCount = window.obj2525_onShow_runningActionsCount - 1;
if (window.obj2525_onShow_runningActionsCount == 0) {
	obj2525_onShow_actionGroup1();
} }, 1);
}





};
obj2525_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2525_onShow_activeActionGroupIndex = -1;
		$("#obj2525").trigger("obj2525_onShow_ended");
		
		return;
	}
	window.obj2525_onShow_activeActionGroupIndex = 1;
	





















};
obj2530_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2530_onShow_activeActionGroupIndex = -1;
		$("#obj2530").trigger("obj2530_onShow_ended");
		
		return;
	}
	window.obj2530_onShow_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj2662 
incrementCounter_2669();
function incrementCounter_2669() {
	window.obj2530_onShow_runningActionsCount = obj2530_onShow_runningActionsCount + 1;

	var oldValue = obj2662_counterValue;
	obj2662_counterValue = obj2662_counterValue + 1;
	if (! obj2662_counterCanExceedTargetValue && obj2662_counterValue > obj2662_counterTargetValue) {
		obj2662_counterValue = obj2662_counterTargetValue;
	}
	if (oldValue != obj2662_counterValue) {
		$("#obj2662").trigger('SCEventCounterValueChange');
		$("#obj2662").trigger('SCEventCounterIncrease');
		if (obj2662_counterValue == obj2662_counterTargetValue)
			$("#obj2662").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj2530_onShow_runningActionsCount = window.obj2530_onShow_runningActionsCount - 1;
if (window.obj2530_onShow_runningActionsCount == 0) {
	obj2530_onShow_actionGroup1();
} }, 1);
}





};
obj2530_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2530_onShow_activeActionGroupIndex = -1;
		$("#obj2530").trigger("obj2530_onShow_ended");
		
		return;
	}
	window.obj2530_onShow_activeActionGroupIndex = 1;
	





















};
obj2559_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2559_onShow_activeActionGroupIndex = -1;
		$("#obj2559").trigger("obj2559_onShow_ended");
		
		return;
	}
	window.obj2559_onShow_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj2662 
incrementCounter_2671();
function incrementCounter_2671() {
	window.obj2559_onShow_runningActionsCount = obj2559_onShow_runningActionsCount + 1;

	var oldValue = obj2662_counterValue;
	obj2662_counterValue = obj2662_counterValue + 1;
	if (! obj2662_counterCanExceedTargetValue && obj2662_counterValue > obj2662_counterTargetValue) {
		obj2662_counterValue = obj2662_counterTargetValue;
	}
	if (oldValue != obj2662_counterValue) {
		$("#obj2662").trigger('SCEventCounterValueChange');
		$("#obj2662").trigger('SCEventCounterIncrease');
		if (obj2662_counterValue == obj2662_counterTargetValue)
			$("#obj2662").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj2559_onShow_runningActionsCount = window.obj2559_onShow_runningActionsCount - 1;
if (window.obj2559_onShow_runningActionsCount == 0) {
	obj2559_onShow_actionGroup1();
} }, 1);
}





};
obj2559_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2559_onShow_activeActionGroupIndex = -1;
		$("#obj2559").trigger("obj2559_onShow_ended");
		
		return;
	}
	window.obj2559_onShow_activeActionGroupIndex = 1;
	





















};
obj2563_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2563_onShow_activeActionGroupIndex = -1;
		$("#obj2563").trigger("obj2563_onShow_ended");
		
		return;
	}
	window.obj2563_onShow_activeActionGroupIndex = 0;
	
















//	action: increment counter
//	target: obj2662 
incrementCounter_2674();
function incrementCounter_2674() {
	window.obj2563_onShow_runningActionsCount = obj2563_onShow_runningActionsCount + 1;

	var oldValue = obj2662_counterValue;
	obj2662_counterValue = obj2662_counterValue + 1;
	if (! obj2662_counterCanExceedTargetValue && obj2662_counterValue > obj2662_counterTargetValue) {
		obj2662_counterValue = obj2662_counterTargetValue;
	}
	if (oldValue != obj2662_counterValue) {
		$("#obj2662").trigger('SCEventCounterValueChange');
		$("#obj2662").trigger('SCEventCounterIncrease');
		if (obj2662_counterValue == obj2662_counterTargetValue)
			$("#obj2662").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj2563_onShow_runningActionsCount = window.obj2563_onShow_runningActionsCount - 1;
if (window.obj2563_onShow_runningActionsCount == 0) {
	obj2563_onShow_actionGroup1();
} }, 1);
}





};
obj2563_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2563_onShow_activeActionGroupIndex = -1;
		$("#obj2563").trigger("obj2563_onShow_ended");
		
		return;
	}
	window.obj2563_onShow_activeActionGroupIndex = 1;
	





















};
obj2518_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2518_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2518").trigger("obj2518_onTouchDown_ended");
		
		return;
	}
	window.obj2518_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2518");
//	action: dragDrop
//	target: obj2518 
dragDrop_2521();
function dragDrop_2521() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2518_onTouchDown_runningActionsCount = obj2518_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2518');
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
    	window.obj2518_onTouchDown_runningActionsCount = window.obj2518_onTouchDown_runningActionsCount - 1;
if (window.obj2518_onTouchDown_runningActionsCount == 0) {
	obj2518_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2521 = false;
    	var dropped_id_2521;
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
					dropped_2521 = true;
					dropped_id_2521 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2521) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj2518").trigger('SCActionDragDrop352_droppedOutsideTargetActions');
		}
    });
}











};
obj2518_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2518_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2518").trigger("obj2518_onTouchDown_ended");
		
		return;
	}
	window.obj2518_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj2518_SCActionDragDrop352_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2518_SCActionDragDrop352_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2518").trigger("obj2518_SCActionDragDrop352_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2518_SCActionDragDrop352_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj2518 
rotate_2523();
function rotate_2523() {
	window.obj2518_SCActionDragDrop352_droppedOutsideTargetActions_runningActionsCount = obj2518_SCActionDragDrop352_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj2518";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2518';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '360';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2523_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2523_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2523_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2523_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2523_completed() {
	setTimeout(function() {
		window.obj2518_SCActionDragDrop352_droppedOutsideTargetActions_runningActionsCount = window.obj2518_SCActionDragDrop352_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2518_SCActionDragDrop352_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2518_SCActionDragDrop352_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj2518_SCActionDragDrop352_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2518_SCActionDragDrop352_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2518").trigger("obj2518_SCActionDragDrop352_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2518_SCActionDragDrop352_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj2518 
hide_2524();
function hide_2524() {
	var element = "#obj2518";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2518_SCActionDragDrop352_droppedOutsideTargetActions_runningActionsCount = obj2518_SCActionDragDrop352_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj2518_SCActionDragDrop352_droppedOutsideTargetActions_runningActionsCount = window.obj2518_SCActionDragDrop352_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2518_SCActionDragDrop352_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2518_SCActionDragDrop352_droppedOutsideTargetActions_actionGroup2();
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
		setTimeout(hide_2524(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj2518_SCActionDragDrop352_droppedOutsideTargetActions_runningActionsCount = window.obj2518_SCActionDragDrop352_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2518_SCActionDragDrop352_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2518_SCActionDragDrop352_droppedOutsideTargetActions_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj2518_SCActionDragDrop352_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2518_SCActionDragDrop352_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2518").trigger("obj2518_SCActionDragDrop352_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2518_SCActionDragDrop352_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj2613_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2613_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2613").trigger("obj2613_onTouchDown_ended");
		
		return;
	}
	window.obj2613_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2613");
//	action: dragDrop
//	target: obj2613 
dragDrop_2616();
function dragDrop_2616() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2613_onTouchDown_runningActionsCount = obj2613_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2613');
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
    	window.obj2613_onTouchDown_runningActionsCount = window.obj2613_onTouchDown_runningActionsCount - 1;
if (window.obj2613_onTouchDown_runningActionsCount == 0) {
	obj2613_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj2575");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2616 = false;
    	var dropped_id_2616;
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
					dropped_2616 = true;
					dropped_id_2616 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2616) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    });
}











};
obj2613_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2613_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2613").trigger("obj2613_onTouchDown_ended");
		
		return;
	}
	window.obj2613_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj2613_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2613_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2613").trigger("obj2613_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj2613_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj2613 
hide_2619();
function hide_2619() {
	var element = "#obj2613";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2613_droppedInsideTargetActions_runningActionsCount = obj2613_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj2613_droppedInsideTargetActions_runningActionsCount = window.obj2613_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2613_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2613_droppedInsideTargetActions_actionGroup1();
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
		setTimeout(hide_2619(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj2613_droppedInsideTargetActions_runningActionsCount = window.obj2613_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2613_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2613_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}














//	action: Run JavaScript
runjs_2618();
function runjs_2618() {
	window.obj2613_droppedInsideTargetActions_runningActionsCount = obj2613_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj2575"));
	setTimeout(function() {
		window.obj2613_droppedInsideTargetActions_runningActionsCount = window.obj2613_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2613_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2613_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj2613_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2613_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2613").trigger("obj2613_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj2613_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj2506 
show_2620();
function show_2620() {
	var element = "#obj2506";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj2613_droppedInsideTargetActions_runningActionsCount = obj2613_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj2613_droppedInsideTargetActions_runningActionsCount = window.obj2613_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2613_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2613_droppedInsideTargetActions_actionGroup2();
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
		window.obj2613_droppedInsideTargetActions_runningActionsCount = window.obj2613_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2613_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2613_droppedInsideTargetActions_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj2613_droppedInsideTargetActions_runningActionsCount = window.obj2613_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2613_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2613_droppedInsideTargetActions_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj2613_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2613_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2613").trigger("obj2613_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj2613_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj2488_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2488_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2488").trigger("obj2488_onTouchDown_ended");
		
		return;
	}
	window.obj2488_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2488");
//	action: dragDrop
//	target: obj2488 
dragDrop_2491();
function dragDrop_2491() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2488_onTouchDown_runningActionsCount = obj2488_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2488');
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
    	window.obj2488_onTouchDown_runningActionsCount = window.obj2488_onTouchDown_runningActionsCount - 1;
if (window.obj2488_onTouchDown_runningActionsCount == 0) {
	obj2488_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj2569");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2491 = false;
    	var dropped_id_2491;
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
					dropped_2491 = true;
					dropped_id_2491 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2491) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj2488").trigger('SCActionDragDrop2372_droppedOutsideTargetActions');
		}
    });
}











};
obj2488_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2488_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2488").trigger("obj2488_onTouchDown_ended");
		
		return;
	}
	window.obj2488_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj2488_SCActionDragDrop2372_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2488_SCActionDragDrop2372_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2488").trigger("obj2488_SCActionDragDrop2372_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2488_SCActionDragDrop2372_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj2488 
show_2497();
function show_2497() {
	var element = "#obj2488";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj2488_SCActionDragDrop2372_droppedOutsideTargetActions_runningActionsCount = obj2488_SCActionDragDrop2372_droppedOutsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj2488_SCActionDragDrop2372_droppedOutsideTargetActions_runningActionsCount = window.obj2488_SCActionDragDrop2372_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2488_SCActionDragDrop2372_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2488_SCActionDragDrop2372_droppedOutsideTargetActions_actionGroup1();
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
		window.obj2488_SCActionDragDrop2372_droppedOutsideTargetActions_runningActionsCount = window.obj2488_SCActionDragDrop2372_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2488_SCActionDragDrop2372_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2488_SCActionDragDrop2372_droppedOutsideTargetActions_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj2488_SCActionDragDrop2372_droppedOutsideTargetActions_runningActionsCount = window.obj2488_SCActionDragDrop2372_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2488_SCActionDragDrop2372_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2488_SCActionDragDrop2372_droppedOutsideTargetActions_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj2488_SCActionDragDrop2372_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2488_SCActionDragDrop2372_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2488").trigger("obj2488_SCActionDragDrop2372_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2488_SCActionDragDrop2372_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj2488_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2488_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2488").trigger("obj2488_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj2488_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj2488 
hide_2494();
function hide_2494() {
	var element = "#obj2488";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2488_droppedInsideTargetActions_runningActionsCount = obj2488_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj2488_droppedInsideTargetActions_runningActionsCount = window.obj2488_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2488_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2488_droppedInsideTargetActions_actionGroup1();
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
		setTimeout(hide_2494(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj2488_droppedInsideTargetActions_runningActionsCount = window.obj2488_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2488_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2488_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}














//	action: Run JavaScript
runjs_2493();
function runjs_2493() {
	window.obj2488_droppedInsideTargetActions_runningActionsCount = obj2488_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj2569"));
	setTimeout(function() {
		window.obj2488_droppedInsideTargetActions_runningActionsCount = window.obj2488_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2488_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2488_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj2488_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2488_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2488").trigger("obj2488_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj2488_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj2530 
show_2495();
function show_2495() {
	var element = "#obj2530";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj2488_droppedInsideTargetActions_runningActionsCount = obj2488_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj2488_droppedInsideTargetActions_runningActionsCount = window.obj2488_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2488_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2488_droppedInsideTargetActions_actionGroup2();
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
		window.obj2488_droppedInsideTargetActions_runningActionsCount = window.obj2488_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2488_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2488_droppedInsideTargetActions_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj2488_droppedInsideTargetActions_runningActionsCount = window.obj2488_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2488_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2488_droppedInsideTargetActions_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj2488_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2488_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2488").trigger("obj2488_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj2488_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj2605_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2605_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2605").trigger("obj2605_onTouchDown_ended");
		
		return;
	}
	window.obj2605_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2605");
//	action: dragDrop
//	target: obj2605 
dragDrop_2608();
function dragDrop_2608() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2605_onTouchDown_runningActionsCount = obj2605_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2605');
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
    	window.obj2605_onTouchDown_runningActionsCount = window.obj2605_onTouchDown_runningActionsCount - 1;
if (window.obj2605_onTouchDown_runningActionsCount == 0) {
	obj2605_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj2567");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2608 = false;
    	var dropped_id_2608;
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
					dropped_2608 = true;
					dropped_id_2608 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2608) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    });
}











};
obj2605_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2605_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2605").trigger("obj2605_onTouchDown_ended");
		
		return;
	}
	window.obj2605_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj2605_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2605_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2605").trigger("obj2605_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj2605_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj2605 
hide_2611();
function hide_2611() {
	var element = "#obj2605";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2605_droppedInsideTargetActions_runningActionsCount = obj2605_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj2605_droppedInsideTargetActions_runningActionsCount = window.obj2605_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2605_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2605_droppedInsideTargetActions_actionGroup1();
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
		setTimeout(hide_2611(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj2605_droppedInsideTargetActions_runningActionsCount = window.obj2605_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2605_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2605_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}














//	action: Run JavaScript
runjs_2610();
function runjs_2610() {
	window.obj2605_droppedInsideTargetActions_runningActionsCount = obj2605_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj2567"));
	setTimeout(function() {
		window.obj2605_droppedInsideTargetActions_runningActionsCount = window.obj2605_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2605_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2605_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj2605_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2605_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2605").trigger("obj2605_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj2605_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj2514 
show_2612();
function show_2612() {
	var element = "#obj2514";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj2605_droppedInsideTargetActions_runningActionsCount = obj2605_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj2605_droppedInsideTargetActions_runningActionsCount = window.obj2605_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2605_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2605_droppedInsideTargetActions_actionGroup2();
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
		window.obj2605_droppedInsideTargetActions_runningActionsCount = window.obj2605_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2605_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2605_droppedInsideTargetActions_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj2605_droppedInsideTargetActions_runningActionsCount = window.obj2605_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2605_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2605_droppedInsideTargetActions_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj2605_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2605_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2605").trigger("obj2605_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj2605_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj2597_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2597_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2597").trigger("obj2597_onTouchDown_ended");
		
		return;
	}
	window.obj2597_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2597");
//	action: dragDrop
//	target: obj2597 
dragDrop_2600();
function dragDrop_2600() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2597_onTouchDown_runningActionsCount = obj2597_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2597');
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
    	window.obj2597_onTouchDown_runningActionsCount = window.obj2597_onTouchDown_runningActionsCount - 1;
if (window.obj2597_onTouchDown_runningActionsCount == 0) {
	obj2597_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj2571");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2600 = false;
    	var dropped_id_2600;
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
					dropped_2600 = true;
					dropped_id_2600 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2600) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    });
}











};
obj2597_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2597_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2597").trigger("obj2597_onTouchDown_ended");
		
		return;
	}
	window.obj2597_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj2597_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2597_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2597").trigger("obj2597_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj2597_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj2597 
hide_2603();
function hide_2603() {
	var element = "#obj2597";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2597_droppedInsideTargetActions_runningActionsCount = obj2597_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj2597_droppedInsideTargetActions_runningActionsCount = window.obj2597_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2597_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2597_droppedInsideTargetActions_actionGroup1();
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
		setTimeout(hide_2603(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj2597_droppedInsideTargetActions_runningActionsCount = window.obj2597_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2597_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2597_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}














//	action: Run JavaScript
runjs_2602();
function runjs_2602() {
	window.obj2597_droppedInsideTargetActions_runningActionsCount = obj2597_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj2571"));
	setTimeout(function() {
		window.obj2597_droppedInsideTargetActions_runningActionsCount = window.obj2597_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2597_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2597_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj2597_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2597_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2597").trigger("obj2597_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj2597_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj2510 
show_2604();
function show_2604() {
	var element = "#obj2510";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj2597_droppedInsideTargetActions_runningActionsCount = obj2597_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj2597_droppedInsideTargetActions_runningActionsCount = window.obj2597_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2597_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2597_droppedInsideTargetActions_actionGroup2();
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
		window.obj2597_droppedInsideTargetActions_runningActionsCount = window.obj2597_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2597_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2597_droppedInsideTargetActions_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj2597_droppedInsideTargetActions_runningActionsCount = window.obj2597_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2597_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2597_droppedInsideTargetActions_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj2597_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2597_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2597").trigger("obj2597_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj2597_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj2589_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2589_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2589").trigger("obj2589_onTouchDown_ended");
		
		return;
	}
	window.obj2589_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2589");
//	action: dragDrop
//	target: obj2589 
dragDrop_2592();
function dragDrop_2592() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2589_onTouchDown_runningActionsCount = obj2589_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2589');
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
    	window.obj2589_onTouchDown_runningActionsCount = window.obj2589_onTouchDown_runningActionsCount - 1;
if (window.obj2589_onTouchDown_runningActionsCount == 0) {
	obj2589_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj2573");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2592 = false;
    	var dropped_id_2592;
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
					dropped_2592 = true;
					dropped_id_2592 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2592) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    });
}











};
obj2589_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2589_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2589").trigger("obj2589_onTouchDown_ended");
		
		return;
	}
	window.obj2589_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj2589_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2589_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2589").trigger("obj2589_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj2589_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj2589 
hide_2595();
function hide_2595() {
	var element = "#obj2589";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2589_droppedInsideTargetActions_runningActionsCount = obj2589_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj2589_droppedInsideTargetActions_runningActionsCount = window.obj2589_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2589_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2589_droppedInsideTargetActions_actionGroup1();
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
		setTimeout(hide_2595(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj2589_droppedInsideTargetActions_runningActionsCount = window.obj2589_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2589_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2589_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}














//	action: Run JavaScript
runjs_2594();
function runjs_2594() {
	window.obj2589_droppedInsideTargetActions_runningActionsCount = obj2589_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj2573"));
	setTimeout(function() {
		window.obj2589_droppedInsideTargetActions_runningActionsCount = window.obj2589_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2589_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2589_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj2589_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2589_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2589").trigger("obj2589_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj2589_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj2525 
show_2596();
function show_2596() {
	var element = "#obj2525";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj2589_droppedInsideTargetActions_runningActionsCount = obj2589_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj2589_droppedInsideTargetActions_runningActionsCount = window.obj2589_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2589_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2589_droppedInsideTargetActions_actionGroup2();
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
		window.obj2589_droppedInsideTargetActions_runningActionsCount = window.obj2589_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2589_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2589_droppedInsideTargetActions_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj2589_droppedInsideTargetActions_runningActionsCount = window.obj2589_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2589_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2589_droppedInsideTargetActions_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj2589_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2589_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2589").trigger("obj2589_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj2589_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj2628_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2628_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2628").trigger("obj2628_onTouchDown_ended");
		
		return;
	}
	window.obj2628_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2628");
//	action: dragDrop
//	target: obj2628 
dragDrop_2631();
function dragDrop_2631() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2628_onTouchDown_runningActionsCount = obj2628_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2628');
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
    	window.obj2628_onTouchDown_runningActionsCount = window.obj2628_onTouchDown_runningActionsCount - 1;
if (window.obj2628_onTouchDown_runningActionsCount == 0) {
	obj2628_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj2565");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2631 = false;
    	var dropped_id_2631;
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
					dropped_2631 = true;
					dropped_id_2631 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2631) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    });
}











};
obj2628_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2628_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2628").trigger("obj2628_onTouchDown_ended");
		
		return;
	}
	window.obj2628_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj2628_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2628_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2628").trigger("obj2628_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj2628_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj2628 
hide_2634();
function hide_2634() {
	var element = "#obj2628";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2628_droppedInsideTargetActions_runningActionsCount = obj2628_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj2628_droppedInsideTargetActions_runningActionsCount = window.obj2628_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2628_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2628_droppedInsideTargetActions_actionGroup1();
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
		setTimeout(hide_2634(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj2628_droppedInsideTargetActions_runningActionsCount = window.obj2628_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2628_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2628_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}














//	action: Run JavaScript
runjs_2633();
function runjs_2633() {
	window.obj2628_droppedInsideTargetActions_runningActionsCount = obj2628_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj2565"));
	setTimeout(function() {
		window.obj2628_droppedInsideTargetActions_runningActionsCount = window.obj2628_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2628_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2628_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj2628_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2628_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2628").trigger("obj2628_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj2628_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj2559 
show_2635();
function show_2635() {
	var element = "#obj2559";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj2628_droppedInsideTargetActions_runningActionsCount = obj2628_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj2628_droppedInsideTargetActions_runningActionsCount = window.obj2628_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2628_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2628_droppedInsideTargetActions_actionGroup2();
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
		window.obj2628_droppedInsideTargetActions_runningActionsCount = window.obj2628_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2628_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2628_droppedInsideTargetActions_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj2628_droppedInsideTargetActions_runningActionsCount = window.obj2628_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2628_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2628_droppedInsideTargetActions_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj2628_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2628_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2628").trigger("obj2628_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj2628_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj2636_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2636_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2636").trigger("obj2636_onTouchDown_ended");
		
		return;
	}
	window.obj2636_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2636");
//	action: dragDrop
//	target: obj2636 
dragDrop_2639();
function dragDrop_2639() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2636_onTouchDown_runningActionsCount = obj2636_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2636');
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
    	window.obj2636_onTouchDown_runningActionsCount = window.obj2636_onTouchDown_runningActionsCount - 1;
if (window.obj2636_onTouchDown_runningActionsCount == 0) {
	obj2636_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj2577");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2639 = false;
    	var dropped_id_2639;
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
					dropped_2639 = true;
					dropped_id_2639 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2639) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj2636").trigger('SCActionDragDrop2372_droppedOutsideTargetActions');
		}
    });
}











};
obj2636_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2636_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2636").trigger("obj2636_onTouchDown_ended");
		
		return;
	}
	window.obj2636_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj2636_SCActionDragDrop2372_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2636_SCActionDragDrop2372_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2636").trigger("obj2636_SCActionDragDrop2372_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2636_SCActionDragDrop2372_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj2636 
show_2645();
function show_2645() {
	var element = "#obj2636";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj2636_SCActionDragDrop2372_droppedOutsideTargetActions_runningActionsCount = obj2636_SCActionDragDrop2372_droppedOutsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj2636_SCActionDragDrop2372_droppedOutsideTargetActions_runningActionsCount = window.obj2636_SCActionDragDrop2372_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2636_SCActionDragDrop2372_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2636_SCActionDragDrop2372_droppedOutsideTargetActions_actionGroup1();
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
		window.obj2636_SCActionDragDrop2372_droppedOutsideTargetActions_runningActionsCount = window.obj2636_SCActionDragDrop2372_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2636_SCActionDragDrop2372_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2636_SCActionDragDrop2372_droppedOutsideTargetActions_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj2636_SCActionDragDrop2372_droppedOutsideTargetActions_runningActionsCount = window.obj2636_SCActionDragDrop2372_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2636_SCActionDragDrop2372_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2636_SCActionDragDrop2372_droppedOutsideTargetActions_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj2636_SCActionDragDrop2372_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2636_SCActionDragDrop2372_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2636").trigger("obj2636_SCActionDragDrop2372_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2636_SCActionDragDrop2372_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj2636_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2636_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2636").trigger("obj2636_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj2636_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj2636 
hide_2642();
function hide_2642() {
	var element = "#obj2636";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2636_droppedInsideTargetActions_runningActionsCount = obj2636_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj2636_droppedInsideTargetActions_runningActionsCount = window.obj2636_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2636_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2636_droppedInsideTargetActions_actionGroup1();
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
		setTimeout(hide_2642(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj2636_droppedInsideTargetActions_runningActionsCount = window.obj2636_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2636_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2636_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}














//	action: Run JavaScript
runjs_2641();
function runjs_2641() {
	window.obj2636_droppedInsideTargetActions_runningActionsCount = obj2636_droppedInsideTargetActions_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj2577"));
	setTimeout(function() {
		window.obj2636_droppedInsideTargetActions_runningActionsCount = window.obj2636_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2636_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2636_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}






};
obj2636_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2636_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2636").trigger("obj2636_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj2636_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj2563 
show_2643();
function show_2643() {
	var element = "#obj2563";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj2636_droppedInsideTargetActions_runningActionsCount = obj2636_droppedInsideTargetActions_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj2636_droppedInsideTargetActions_runningActionsCount = window.obj2636_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2636_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2636_droppedInsideTargetActions_actionGroup2();
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
		window.obj2636_droppedInsideTargetActions_runningActionsCount = window.obj2636_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2636_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2636_droppedInsideTargetActions_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj2636_droppedInsideTargetActions_runningActionsCount = window.obj2636_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2636_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2636_droppedInsideTargetActions_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj2636_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2636_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2636").trigger("obj2636_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj2636_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj2662_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2662_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj2662").trigger("obj2662_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj2662_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj2468 
hide_2666();
function hide_2666() {
	var element = "#obj2468";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2662_SCEventCounterReachedTargetValue_runningActionsCount = obj2662_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj2662_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2662_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2662_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2662_SCEventCounterReachedTargetValue_actionGroup1();
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
		setTimeout(hide_2666(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj2662_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2662_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2662_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2662_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj2664 
show_2667();
function show_2667() {
	var element = "#obj2664";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj2662_SCEventCounterReachedTargetValue_runningActionsCount = obj2662_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj2662_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2662_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2662_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2662_SCEventCounterReachedTargetValue_actionGroup1();
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
		window.obj2662_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2662_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2662_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2662_SCEventCounterReachedTargetValue_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj2662_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2662_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2662_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2662_SCEventCounterReachedTargetValue_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj2662_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2662_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj2662").trigger("obj2662_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj2662_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	





















};
obj2735_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2735_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2735").trigger("obj2735_onTouchDown_ended");
		
		return;
	}
	window.obj2735_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2735");
//	action: dragDrop
//	target: obj2735 
dragDrop_2738();
function dragDrop_2738() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2735_onTouchDown_runningActionsCount = obj2735_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2735');
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
    	window.obj2735_onTouchDown_runningActionsCount = window.obj2735_onTouchDown_runningActionsCount - 1;
if (window.obj2735_onTouchDown_runningActionsCount == 0) {
	obj2735_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2738 = false;
    	var dropped_id_2738;
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
					dropped_2738 = true;
					dropped_id_2738 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2738) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj2735").trigger('SCActionDragDrop380_droppedOutsideTargetActions');
		}
    });
}











};
obj2735_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2735_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2735").trigger("obj2735_onTouchDown_ended");
		
		return;
	}
	window.obj2735_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj2735_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2735_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2735").trigger("obj2735_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2735_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj2735 
rotate_2740();
function rotate_2740() {
	window.obj2735_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = obj2735_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj2735";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2735';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '360';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2740_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2740_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2740_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2740_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2740_completed() {
	setTimeout(function() {
		window.obj2735_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj2735_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2735_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2735_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj2735_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2735_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2735").trigger("obj2735_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2735_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj2735 
hide_2741();
function hide_2741() {
	var element = "#obj2735";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2735_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = obj2735_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj2735_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj2735_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2735_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2735_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2();
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
		setTimeout(hide_2741(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj2735_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj2735_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2735_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2735_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj2735_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2735_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2735").trigger("obj2735_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2735_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj2726_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2726_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2726").trigger("obj2726_onTouchDown_ended");
		
		return;
	}
	window.obj2726_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2726");
//	action: dragDrop
//	target: obj2726 
dragDrop_2804();
function dragDrop_2804() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2726_onTouchDown_runningActionsCount = obj2726_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2726');
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
    	window.obj2726_onTouchDown_runningActionsCount = window.obj2726_onTouchDown_runningActionsCount - 1;
if (window.obj2726_onTouchDown_runningActionsCount == 0) {
	obj2726_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2804 = false;
    	var dropped_id_2804;
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
					dropped_2804 = true;
					dropped_id_2804 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2804) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj2726").trigger('SCActionDragDrop380_droppedOutsideTargetActions');
		}
    });
}











};
obj2726_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2726_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2726").trigger("obj2726_onTouchDown_ended");
		
		return;
	}
	window.obj2726_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj2726_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2726_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2726").trigger("obj2726_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2726_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj2726 
rotate_2806();
function rotate_2806() {
	window.obj2726_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = obj2726_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj2726";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2726';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '360';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2806_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2806_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2806_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2806_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2806_completed() {
	setTimeout(function() {
		window.obj2726_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj2726_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2726_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2726_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj2726_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2726_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2726").trigger("obj2726_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2726_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj2726 
hide_2807();
function hide_2807() {
	var element = "#obj2726";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2726_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = obj2726_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj2726_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj2726_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2726_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2726_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2();
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
		setTimeout(hide_2807(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj2726_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj2726_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2726_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2726_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj2726_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2726_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2726").trigger("obj2726_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2726_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj2719_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2719_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2719").trigger("obj2719_onTouchDown_ended");
		
		return;
	}
	window.obj2719_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2719");
//	action: dragDrop
//	target: obj2719 
dragDrop_2722();
function dragDrop_2722() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2719_onTouchDown_runningActionsCount = obj2719_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2719');
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
    	window.obj2719_onTouchDown_runningActionsCount = window.obj2719_onTouchDown_runningActionsCount - 1;
if (window.obj2719_onTouchDown_runningActionsCount == 0) {
	obj2719_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2722 = false;
    	var dropped_id_2722;
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
					dropped_2722 = true;
					dropped_id_2722 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2722) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj2719").trigger('SCActionDragDrop373_droppedOutsideTargetActions');
		}
    });
}











};
obj2719_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2719_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2719").trigger("obj2719_onTouchDown_ended");
		
		return;
	}
	window.obj2719_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj2719_SCActionDragDrop373_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2719_SCActionDragDrop373_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2719").trigger("obj2719_SCActionDragDrop373_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2719_SCActionDragDrop373_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj2719 
rotate_2724();
function rotate_2724() {
	window.obj2719_SCActionDragDrop373_droppedOutsideTargetActions_runningActionsCount = obj2719_SCActionDragDrop373_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj2719";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2719';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '360';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2724_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2724_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2724_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2724_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2724_completed() {
	setTimeout(function() {
		window.obj2719_SCActionDragDrop373_droppedOutsideTargetActions_runningActionsCount = window.obj2719_SCActionDragDrop373_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2719_SCActionDragDrop373_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2719_SCActionDragDrop373_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj2719_SCActionDragDrop373_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2719_SCActionDragDrop373_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2719").trigger("obj2719_SCActionDragDrop373_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2719_SCActionDragDrop373_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj2719 
hide_2725();
function hide_2725() {
	var element = "#obj2719";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2719_SCActionDragDrop373_droppedOutsideTargetActions_runningActionsCount = obj2719_SCActionDragDrop373_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj2719_SCActionDragDrop373_droppedOutsideTargetActions_runningActionsCount = window.obj2719_SCActionDragDrop373_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2719_SCActionDragDrop373_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2719_SCActionDragDrop373_droppedOutsideTargetActions_actionGroup2();
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
		setTimeout(hide_2725(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj2719_SCActionDragDrop373_droppedOutsideTargetActions_runningActionsCount = window.obj2719_SCActionDragDrop373_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2719_SCActionDragDrop373_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2719_SCActionDragDrop373_droppedOutsideTargetActions_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj2719_SCActionDragDrop373_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2719_SCActionDragDrop373_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2719").trigger("obj2719_SCActionDragDrop373_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2719_SCActionDragDrop373_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj2712_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2712_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2712").trigger("obj2712_onTouchDown_ended");
		
		return;
	}
	window.obj2712_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2712");
//	action: dragDrop
//	target: obj2712 
dragDrop_2761();
function dragDrop_2761() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2712_onTouchDown_runningActionsCount = obj2712_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2712');
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
    	window.obj2712_onTouchDown_runningActionsCount = window.obj2712_onTouchDown_runningActionsCount - 1;
if (window.obj2712_onTouchDown_runningActionsCount == 0) {
	obj2712_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2761 = false;
    	var dropped_id_2761;
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
					dropped_2761 = true;
					dropped_id_2761 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2761) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj2712").trigger('SCActionDragDrop380_droppedOutsideTargetActions');
		}
    });
}











};
obj2712_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2712_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2712").trigger("obj2712_onTouchDown_ended");
		
		return;
	}
	window.obj2712_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj2712_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2712_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2712").trigger("obj2712_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2712_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj2712 
rotate_2763();
function rotate_2763() {
	window.obj2712_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = obj2712_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj2712";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2712';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '360';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2763_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2763_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2763_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2763_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2763_completed() {
	setTimeout(function() {
		window.obj2712_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj2712_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2712_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2712_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj2712_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2712_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2712").trigger("obj2712_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2712_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj2712 
hide_2764();
function hide_2764() {
	var element = "#obj2712";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2712_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = obj2712_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj2712_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj2712_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2712_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2712_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2();
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
		setTimeout(hide_2764(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj2712_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj2712_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2712_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2712_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj2712_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2712_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2712").trigger("obj2712_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2712_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj2705_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2705_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2705").trigger("obj2705_onTouchDown_ended");
		
		return;
	}
	window.obj2705_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2705");
//	action: dragDrop
//	target: obj2705 
dragDrop_2708();
function dragDrop_2708() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2705_onTouchDown_runningActionsCount = obj2705_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2705');
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
    	window.obj2705_onTouchDown_runningActionsCount = window.obj2705_onTouchDown_runningActionsCount - 1;
if (window.obj2705_onTouchDown_runningActionsCount == 0) {
	obj2705_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2708 = false;
    	var dropped_id_2708;
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
					dropped_2708 = true;
					dropped_id_2708 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2708) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj2705").trigger('SCActionDragDrop380_droppedOutsideTargetActions');
		}
    });
}











};
obj2705_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2705_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2705").trigger("obj2705_onTouchDown_ended");
		
		return;
	}
	window.obj2705_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj2705_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2705_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2705").trigger("obj2705_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2705_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj2705 
rotate_2710();
function rotate_2710() {
	window.obj2705_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = obj2705_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj2705";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2705';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '360';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2710_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2710_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2710_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2710_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2710_completed() {
	setTimeout(function() {
		window.obj2705_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj2705_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2705_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2705_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj2705_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2705_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2705").trigger("obj2705_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2705_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj2705 
hide_2711();
function hide_2711() {
	var element = "#obj2705";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2705_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = obj2705_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj2705_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj2705_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2705_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2705_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2();
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
		setTimeout(hide_2711(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj2705_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj2705_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2705_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2705_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj2705_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2705_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2705").trigger("obj2705_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2705_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj2698_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2698_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2698").trigger("obj2698_onTouchDown_ended");
		
		return;
	}
	window.obj2698_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2698");
//	action: dragDrop
//	target: obj2698 
dragDrop_2701();
function dragDrop_2701() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2698_onTouchDown_runningActionsCount = obj2698_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2698');
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
    	window.obj2698_onTouchDown_runningActionsCount = window.obj2698_onTouchDown_runningActionsCount - 1;
if (window.obj2698_onTouchDown_runningActionsCount == 0) {
	obj2698_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2701 = false;
    	var dropped_id_2701;
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
					dropped_2701 = true;
					dropped_id_2701 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2701) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj2698").trigger('SCActionDragDrop380_droppedOutsideTargetActions');
		}
    });
}











};
obj2698_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2698_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2698").trigger("obj2698_onTouchDown_ended");
		
		return;
	}
	window.obj2698_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj2698_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2698_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2698").trigger("obj2698_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2698_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj2698 
rotate_2703();
function rotate_2703() {
	window.obj2698_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = obj2698_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj2698";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2698';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '360';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2703_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2703_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2703_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2703_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2703_completed() {
	setTimeout(function() {
		window.obj2698_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj2698_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2698_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2698_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj2698_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2698_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2698").trigger("obj2698_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2698_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj2698 
hide_2704();
function hide_2704() {
	var element = "#obj2698";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2698_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = obj2698_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj2698_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj2698_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2698_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2698_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2();
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
		setTimeout(hide_2704(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj2698_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj2698_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2698_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2698_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj2698_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2698_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2698").trigger("obj2698_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2698_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj2691_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2691_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2691").trigger("obj2691_onTouchDown_ended");
		
		return;
	}
	window.obj2691_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2691");
//	action: dragDrop
//	target: obj2691 
dragDrop_2694();
function dragDrop_2694() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2691_onTouchDown_runningActionsCount = obj2691_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2691');
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
    	window.obj2691_onTouchDown_runningActionsCount = window.obj2691_onTouchDown_runningActionsCount - 1;
if (window.obj2691_onTouchDown_runningActionsCount == 0) {
	obj2691_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2694 = false;
    	var dropped_id_2694;
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
					dropped_2694 = true;
					dropped_id_2694 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2694) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj2691").trigger('SCActionDragDrop380_droppedOutsideTargetActions');
		}
    });
}











};
obj2691_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2691_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2691").trigger("obj2691_onTouchDown_ended");
		
		return;
	}
	window.obj2691_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj2691_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2691_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2691").trigger("obj2691_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2691_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj2691 
rotate_2696();
function rotate_2696() {
	window.obj2691_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = obj2691_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj2691";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2691';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '360';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2696_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2696_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2696_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2696_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2696_completed() {
	setTimeout(function() {
		window.obj2691_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj2691_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2691_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2691_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj2691_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2691_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2691").trigger("obj2691_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2691_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj2691 
hide_2697();
function hide_2697() {
	var element = "#obj2691";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2691_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = obj2691_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj2691_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj2691_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2691_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2691_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2();
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
		setTimeout(hide_2697(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj2691_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj2691_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2691_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2691_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj2691_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2691_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2691").trigger("obj2691_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2691_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj2742_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2742_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2742").trigger("obj2742_onTouchDown_ended");
		
		return;
	}
	window.obj2742_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2742");
//	action: dragDrop
//	target: obj2742 
dragDrop_2745();
function dragDrop_2745() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2742_onTouchDown_runningActionsCount = obj2742_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2742');
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
    	window.obj2742_onTouchDown_runningActionsCount = window.obj2742_onTouchDown_runningActionsCount - 1;
if (window.obj2742_onTouchDown_runningActionsCount == 0) {
	obj2742_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2745 = false;
    	var dropped_id_2745;
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
					dropped_2745 = true;
					dropped_id_2745 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2745) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj2742").trigger('SCActionDragDrop359_droppedOutsideTargetActions');
		}
    });
}











};
obj2742_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2742_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2742").trigger("obj2742_onTouchDown_ended");
		
		return;
	}
	window.obj2742_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj2742_SCActionDragDrop359_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2742_SCActionDragDrop359_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2742").trigger("obj2742_SCActionDragDrop359_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2742_SCActionDragDrop359_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj2742 
rotate_2747();
function rotate_2747() {
	window.obj2742_SCActionDragDrop359_droppedOutsideTargetActions_runningActionsCount = obj2742_SCActionDragDrop359_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj2742";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2742';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '360';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2747_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2747_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2747_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2747_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2747_completed() {
	setTimeout(function() {
		window.obj2742_SCActionDragDrop359_droppedOutsideTargetActions_runningActionsCount = window.obj2742_SCActionDragDrop359_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2742_SCActionDragDrop359_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2742_SCActionDragDrop359_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj2742_SCActionDragDrop359_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2742_SCActionDragDrop359_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2742").trigger("obj2742_SCActionDragDrop359_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2742_SCActionDragDrop359_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj2742 
hide_2748();
function hide_2748() {
	var element = "#obj2742";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2742_SCActionDragDrop359_droppedOutsideTargetActions_runningActionsCount = obj2742_SCActionDragDrop359_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj2742_SCActionDragDrop359_droppedOutsideTargetActions_runningActionsCount = window.obj2742_SCActionDragDrop359_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2742_SCActionDragDrop359_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2742_SCActionDragDrop359_droppedOutsideTargetActions_actionGroup2();
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
		setTimeout(hide_2748(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj2742_SCActionDragDrop359_droppedOutsideTargetActions_runningActionsCount = window.obj2742_SCActionDragDrop359_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2742_SCActionDragDrop359_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2742_SCActionDragDrop359_droppedOutsideTargetActions_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj2742_SCActionDragDrop359_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2742_SCActionDragDrop359_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2742").trigger("obj2742_SCActionDragDrop359_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2742_SCActionDragDrop359_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj2749_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2749_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2749").trigger("obj2749_onTouchDown_ended");
		
		return;
	}
	window.obj2749_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2749");
//	action: dragDrop
//	target: obj2749 
dragDrop_2757();
function dragDrop_2757() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2749_onTouchDown_runningActionsCount = obj2749_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2749');
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
    	window.obj2749_onTouchDown_runningActionsCount = window.obj2749_onTouchDown_runningActionsCount - 1;
if (window.obj2749_onTouchDown_runningActionsCount == 0) {
	obj2749_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2757 = false;
    	var dropped_id_2757;
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
					dropped_2757 = true;
					dropped_id_2757 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2757) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj2749").trigger('SCActionDragDrop380_droppedOutsideTargetActions');
		}
    });
}











};
obj2749_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2749_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2749").trigger("obj2749_onTouchDown_ended");
		
		return;
	}
	window.obj2749_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj2749_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2749_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2749").trigger("obj2749_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2749_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj2749 
rotate_2759();
function rotate_2759() {
	window.obj2749_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = obj2749_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var targetObjectId = "#obj2749";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2749';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '360';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2759_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2759_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2759_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2759_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2759_completed() {
	setTimeout(function() {
		window.obj2749_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj2749_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2749_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2749_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj2749_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2749_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2749").trigger("obj2749_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2749_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj2749 
hide_2760();
function hide_2760() {
	var element = "#obj2749";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2749_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = obj2749_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj2749_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj2749_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2749_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2749_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2();
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
		setTimeout(hide_2760(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj2749_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = window.obj2749_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2749_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2749_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj2749_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2749_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2749").trigger("obj2749_SCActionDragDrop380_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj2749_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj3294_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3294_onTap_activeActionGroupIndex = -1;
		$("#obj3294").trigger("obj3294_onTap_ended");
		
		return;
	}
	window.obj3294_onTap_activeActionGroupIndex = 0;
	


















//	action: run action list container
//	target: obj3534 
runActionList_3563();
function runActionList_3563() {
	window.obj3294_onTap_runningActionsCount = obj3294_onTap_runningActionsCount + 1;
	$("#obj3534").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3294_onTap_runningActionsCount = window.obj3294_onTap_runningActionsCount - 1;
if (window.obj3294_onTap_runningActionsCount == 0) {
	obj3294_onTap_actionGroup1();
}		
	}, 1);
}



};
obj3294_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3294_onTap_activeActionGroupIndex = -1;
		$("#obj3294").trigger("obj3294_onTap_ended");
		
		return;
	}
	window.obj3294_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj3294 
hide_3296();
function hide_3296() {
	var element = "#obj3294";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3294_onTap_runningActionsCount = obj3294_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj3294_onTap_runningActionsCount = window.obj3294_onTap_runningActionsCount - 1;
if (window.obj3294_onTap_runningActionsCount == 0) {
	obj3294_onTap_actionGroup2();
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
		setTimeout(hide_3296(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj3294_onTap_runningActionsCount = window.obj3294_onTap_runningActionsCount - 1;
if (window.obj3294_onTap_runningActionsCount == 0) {
	obj3294_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj3290 
hide_3297();
function hide_3297() {
	var element = "#obj3290";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3294_onTap_runningActionsCount = obj3294_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj3294_onTap_runningActionsCount = window.obj3294_onTap_runningActionsCount - 1;
if (window.obj3294_onTap_runningActionsCount == 0) {
	obj3294_onTap_actionGroup2();
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
		setTimeout(hide_3297(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj3294_onTap_runningActionsCount = window.obj3294_onTap_runningActionsCount - 1;
if (window.obj3294_onTap_runningActionsCount == 0) {
	obj3294_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj3288 
hide_3299();
function hide_3299() {
	var element = "#obj3288";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3294_onTap_runningActionsCount = obj3294_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj3294_onTap_runningActionsCount = window.obj3294_onTap_runningActionsCount - 1;
if (window.obj3294_onTap_runningActionsCount == 0) {
	obj3294_onTap_actionGroup2();
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
		setTimeout(hide_3299(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj3294_onTap_runningActionsCount = window.obj3294_onTap_runningActionsCount - 1;
if (window.obj3294_onTap_runningActionsCount == 0) {
	obj3294_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj3285 
hide_3298();
function hide_3298() {
	var element = "#obj3285";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3294_onTap_runningActionsCount = obj3294_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOutDown";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj3294_onTap_runningActionsCount = window.obj3294_onTap_runningActionsCount - 1;
if (window.obj3294_onTap_runningActionsCount == 0) {
	obj3294_onTap_actionGroup2();
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
		setTimeout(hide_3298(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj3294_onTap_runningActionsCount = window.obj3294_onTap_runningActionsCount - 1;
if (window.obj3294_onTap_runningActionsCount == 0) {
	obj3294_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj3294_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3294_onTap_activeActionGroupIndex = -1;
		$("#obj3294").trigger("obj3294_onTap_ended");
		
		return;
	}
	window.obj3294_onTap_activeActionGroupIndex = 2;
	





















};
obj3534_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3534_SCEventRun_activeActionGroupIndex = -1;
		$("#obj3534").trigger("obj3534_SCEventRun_ended");
		
		return;
	}
	window.obj3534_SCEventRun_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj2486 
show_3536();
function show_3536() {
	var element = "#obj2486";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj3534_SCEventRun_runningActionsCount = obj3534_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
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
		window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj2470 
show_3537();
function show_3537() {
	var element = "#obj2470";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj3534_SCEventRun_runningActionsCount = obj3534_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
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
		window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj2484 
show_3538();
function show_3538() {
	var element = "#obj2484";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj3534_SCEventRun_runningActionsCount = obj3534_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
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
		window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj2482 
show_3539();
function show_3539() {
	var element = "#obj2482";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj3534_SCEventRun_runningActionsCount = obj3534_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
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
		window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj2480 
show_3540();
function show_3540() {
	var element = "#obj2480";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj3534_SCEventRun_runningActionsCount = obj3534_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
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
		window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj2478 
show_3541();
function show_3541() {
	var element = "#obj2478";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj3534_SCEventRun_runningActionsCount = obj3534_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
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
		window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj2476 
show_3542();
function show_3542() {
	var element = "#obj2476";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj3534_SCEventRun_runningActionsCount = obj3534_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
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
		window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj2474 
show_3543();
function show_3543() {
	var element = "#obj2474";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj3534_SCEventRun_runningActionsCount = obj3534_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
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
		window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj2472 
show_3544();
function show_3544() {
	var element = "#obj2472";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj3534_SCEventRun_runningActionsCount = obj3534_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
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
		window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj2468 
show_3545();
function show_3545() {
	var element = "#obj2468";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj3534_SCEventRun_runningActionsCount = obj3534_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
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
		window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj2518 
show_3546();
function show_3546() {
	var element = "#obj2518";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj3534_SCEventRun_runningActionsCount = obj3534_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
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
		window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj2613 
show_3547();
function show_3547() {
	var element = "#obj2613";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj3534_SCEventRun_runningActionsCount = obj3534_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
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
		window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj2488 
show_3548();
function show_3548() {
	var element = "#obj2488";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj3534_SCEventRun_runningActionsCount = obj3534_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
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
		window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj2605 
show_3549();
function show_3549() {
	var element = "#obj2605";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj3534_SCEventRun_runningActionsCount = obj3534_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
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
		window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj2597 
show_3550();
function show_3550() {
	var element = "#obj2597";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj3534_SCEventRun_runningActionsCount = obj3534_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
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
		window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj2589 
show_3551();
function show_3551() {
	var element = "#obj2589";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj3534_SCEventRun_runningActionsCount = obj3534_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
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
		window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj2628 
show_3552();
function show_3552() {
	var element = "#obj2628";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj3534_SCEventRun_runningActionsCount = obj3534_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
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
		window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj2636 
show_3553();
function show_3553() {
	var element = "#obj2636";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj3534_SCEventRun_runningActionsCount = obj3534_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
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
		window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj2735 
show_3554();
function show_3554() {
	var element = "#obj2735";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj3534_SCEventRun_runningActionsCount = obj3534_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
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
		window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj2726 
show_3555();
function show_3555() {
	var element = "#obj2726";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj3534_SCEventRun_runningActionsCount = obj3534_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
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
		window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj2719 
show_3556();
function show_3556() {
	var element = "#obj2719";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj3534_SCEventRun_runningActionsCount = obj3534_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
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
		window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj2712 
show_3557();
function show_3557() {
	var element = "#obj2712";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj3534_SCEventRun_runningActionsCount = obj3534_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
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
		window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj2705 
show_3558();
function show_3558() {
	var element = "#obj2705";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj3534_SCEventRun_runningActionsCount = obj3534_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
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
		window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj2698 
show_3559();
function show_3559() {
	var element = "#obj2698";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj3534_SCEventRun_runningActionsCount = obj3534_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
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
		window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj2691 
show_3560();
function show_3560() {
	var element = "#obj2691";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj3534_SCEventRun_runningActionsCount = obj3534_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
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
		window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj2742 
show_3561();
function show_3561() {
	var element = "#obj2742";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj3534_SCEventRun_runningActionsCount = obj3534_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
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
		window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj2749 
show_3562();
function show_3562() {
	var element = "#obj2749";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj3534_SCEventRun_runningActionsCount = obj3534_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
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
		window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(0, function() {
	// 		setTimeout(function() {
	// 			window.obj3534_SCEventRun_runningActionsCount = window.obj3534_SCEventRun_runningActionsCount - 1;
if (window.obj3534_SCEventRun_runningActionsCount == 0) {
	obj3534_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj3534_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3534_SCEventRun_activeActionGroupIndex = -1;
		$("#obj3534").trigger("obj3534_SCEventRun_ended");
		
		return;
	}
	window.obj3534_SCEventRun_activeActionGroupIndex = 1;
	





















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
 *   obj2514: Event Show
 *
 */
 
$("#obj2514").bind('SCEventShow', function(event) {
	if (window.obj2514_onShow_activeActionGroupIndex != -1) return;
var obj2514_onShow_runningActionsCount = 0;
var obj2514_onShow_loopCount = 0;
obj2514_onShow_actionGroup0();
});







/*
 *
 *   obj2510: Event Show
 *
 */
 
$("#obj2510").bind('SCEventShow', function(event) {
	if (window.obj2510_onShow_activeActionGroupIndex != -1) return;
var obj2510_onShow_runningActionsCount = 0;
var obj2510_onShow_loopCount = 0;
obj2510_onShow_actionGroup0();
});







/*
 *
 *   obj2506: Event Show
 *
 */
 
$("#obj2506").bind('SCEventShow', function(event) {
	if (window.obj2506_onShow_activeActionGroupIndex != -1) return;
var obj2506_onShow_runningActionsCount = 0;
var obj2506_onShow_loopCount = 0;
obj2506_onShow_actionGroup0();
});







/*
 *
 *   obj2525: Event Show
 *
 */
 
$("#obj2525").bind('SCEventShow', function(event) {
	if (window.obj2525_onShow_activeActionGroupIndex != -1) return;
var obj2525_onShow_runningActionsCount = 0;
var obj2525_onShow_loopCount = 0;
obj2525_onShow_actionGroup0();
});







/*
 *
 *   obj2530: Event Show
 *
 */
 
$("#obj2530").bind('SCEventShow', function(event) {
	if (window.obj2530_onShow_activeActionGroupIndex != -1) return;
var obj2530_onShow_runningActionsCount = 0;
var obj2530_onShow_loopCount = 0;
obj2530_onShow_actionGroup0();
});







/*
 *
 *   obj2559: Event Show
 *
 */
 
$("#obj2559").bind('SCEventShow', function(event) {
	if (window.obj2559_onShow_activeActionGroupIndex != -1) return;
var obj2559_onShow_runningActionsCount = 0;
var obj2559_onShow_loopCount = 0;
obj2559_onShow_actionGroup0();
});







/*
 *
 *   obj2563: Event Show
 *
 */
 
$("#obj2563").bind('SCEventShow', function(event) {
	if (window.obj2563_onShow_activeActionGroupIndex != -1) return;
var obj2563_onShow_runningActionsCount = 0;
var obj2563_onShow_loopCount = 0;
obj2563_onShow_actionGroup0();
});























































/*
 *
 *   obj2518: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2518");
	var winTarget = document.getElementById("obj2518");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2518").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2518_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2518_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2518_onTouchDown_activeActionGroupIndex != -1) return;
var obj2518_onTouchDown_runningActionsCount = 0;
var obj2518_onTouchDown_loopCount = 0;
obj2518_onTouchDown_actionGroup0();
});


/*
 *
 *   obj2518: Event SCActionDragDrop352_droppedOutsideTargetActions
 *
 */
$("#obj2518").bind("SCActionDragDrop352_droppedOutsideTargetActions", function(event) {
	if (window.obj2518_SCActionDragDrop352_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj2518_SCActionDragDrop352_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2518_SCActionDragDrop352_droppedOutsideTargetActions_loopCount = 0;
obj2518_SCActionDragDrop352_droppedOutsideTargetActions_actionGroup0();
});




/*
 *
 *   obj2613: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2613");
	var winTarget = document.getElementById("obj2613");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2613").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2613_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2613_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2613_onTouchDown_activeActionGroupIndex != -1) return;
var obj2613_onTouchDown_runningActionsCount = 0;
var obj2613_onTouchDown_loopCount = 0;
obj2613_onTouchDown_actionGroup0();
});


/*
 *
 *   obj2613: Event droppedInsideTargetActions
 *
 */
$("#obj2613").bind("droppedInsideTargetActions", function(event) {
	if (window.obj2613_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj2613_droppedInsideTargetActions_runningActionsCount = 0;
var obj2613_droppedInsideTargetActions_loopCount = 0;
obj2613_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj2488: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2488");
	var winTarget = document.getElementById("obj2488");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2488").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2488_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2488_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2488_onTouchDown_activeActionGroupIndex != -1) return;
var obj2488_onTouchDown_runningActionsCount = 0;
var obj2488_onTouchDown_loopCount = 0;
obj2488_onTouchDown_actionGroup0();
});


/*
 *
 *   obj2488: Event SCActionDragDrop2372_droppedOutsideTargetActions
 *
 */
$("#obj2488").bind("SCActionDragDrop2372_droppedOutsideTargetActions", function(event) {
	if (window.obj2488_SCActionDragDrop2372_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj2488_SCActionDragDrop2372_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2488_SCActionDragDrop2372_droppedOutsideTargetActions_loopCount = 0;
obj2488_SCActionDragDrop2372_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj2488: Event droppedInsideTargetActions
 *
 */
$("#obj2488").bind("droppedInsideTargetActions", function(event) {
	if (window.obj2488_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj2488_droppedInsideTargetActions_runningActionsCount = 0;
var obj2488_droppedInsideTargetActions_loopCount = 0;
obj2488_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj2605: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2605");
	var winTarget = document.getElementById("obj2605");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2605").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2605_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2605_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2605_onTouchDown_activeActionGroupIndex != -1) return;
var obj2605_onTouchDown_runningActionsCount = 0;
var obj2605_onTouchDown_loopCount = 0;
obj2605_onTouchDown_actionGroup0();
});


/*
 *
 *   obj2605: Event droppedInsideTargetActions
 *
 */
$("#obj2605").bind("droppedInsideTargetActions", function(event) {
	if (window.obj2605_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj2605_droppedInsideTargetActions_runningActionsCount = 0;
var obj2605_droppedInsideTargetActions_loopCount = 0;
obj2605_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj2597: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2597");
	var winTarget = document.getElementById("obj2597");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2597").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2597_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2597_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2597_onTouchDown_activeActionGroupIndex != -1) return;
var obj2597_onTouchDown_runningActionsCount = 0;
var obj2597_onTouchDown_loopCount = 0;
obj2597_onTouchDown_actionGroup0();
});


/*
 *
 *   obj2597: Event droppedInsideTargetActions
 *
 */
$("#obj2597").bind("droppedInsideTargetActions", function(event) {
	if (window.obj2597_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj2597_droppedInsideTargetActions_runningActionsCount = 0;
var obj2597_droppedInsideTargetActions_loopCount = 0;
obj2597_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj2589: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2589");
	var winTarget = document.getElementById("obj2589");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2589").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2589_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2589_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2589_onTouchDown_activeActionGroupIndex != -1) return;
var obj2589_onTouchDown_runningActionsCount = 0;
var obj2589_onTouchDown_loopCount = 0;
obj2589_onTouchDown_actionGroup0();
});


/*
 *
 *   obj2589: Event droppedInsideTargetActions
 *
 */
$("#obj2589").bind("droppedInsideTargetActions", function(event) {
	if (window.obj2589_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj2589_droppedInsideTargetActions_runningActionsCount = 0;
var obj2589_droppedInsideTargetActions_loopCount = 0;
obj2589_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj2628: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2628");
	var winTarget = document.getElementById("obj2628");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2628").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2628_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2628_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2628_onTouchDown_activeActionGroupIndex != -1) return;
var obj2628_onTouchDown_runningActionsCount = 0;
var obj2628_onTouchDown_loopCount = 0;
obj2628_onTouchDown_actionGroup0();
});


/*
 *
 *   obj2628: Event droppedInsideTargetActions
 *
 */
$("#obj2628").bind("droppedInsideTargetActions", function(event) {
	if (window.obj2628_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj2628_droppedInsideTargetActions_runningActionsCount = 0;
var obj2628_droppedInsideTargetActions_loopCount = 0;
obj2628_droppedInsideTargetActions_actionGroup0();
});




/*
 *
 *   obj2636: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2636");
	var winTarget = document.getElementById("obj2636");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2636").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2636_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2636_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2636_onTouchDown_activeActionGroupIndex != -1) return;
var obj2636_onTouchDown_runningActionsCount = 0;
var obj2636_onTouchDown_loopCount = 0;
obj2636_onTouchDown_actionGroup0();
});


/*
 *
 *   obj2636: Event SCActionDragDrop2372_droppedOutsideTargetActions
 *
 */
$("#obj2636").bind("SCActionDragDrop2372_droppedOutsideTargetActions", function(event) {
	if (window.obj2636_SCActionDragDrop2372_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj2636_SCActionDragDrop2372_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2636_SCActionDragDrop2372_droppedOutsideTargetActions_loopCount = 0;
obj2636_SCActionDragDrop2372_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj2636: Event droppedInsideTargetActions
 *
 */
$("#obj2636").bind("droppedInsideTargetActions", function(event) {
	if (window.obj2636_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj2636_droppedInsideTargetActions_runningActionsCount = 0;
var obj2636_droppedInsideTargetActions_loopCount = 0;
obj2636_droppedInsideTargetActions_actionGroup0();
});







/*
 *
 *   obj2662: Event SCEventCounterReachedTargetValue
 *
 */
$("#obj2662").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj2662_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) return;
var obj2662_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj2662_SCEventCounterReachedTargetValue_loopCount = 0;
obj2662_SCEventCounterReachedTargetValue_actionGroup0();
});




/*
 *
 *   obj2735: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2735");
	var winTarget = document.getElementById("obj2735");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2735").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2735_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2735_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2735_onTouchDown_activeActionGroupIndex != -1) return;
var obj2735_onTouchDown_runningActionsCount = 0;
var obj2735_onTouchDown_loopCount = 0;
obj2735_onTouchDown_actionGroup0();
});


/*
 *
 *   obj2735: Event SCActionDragDrop380_droppedOutsideTargetActions
 *
 */
$("#obj2735").bind("SCActionDragDrop380_droppedOutsideTargetActions", function(event) {
	if (window.obj2735_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj2735_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2735_SCActionDragDrop380_droppedOutsideTargetActions_loopCount = 0;
obj2735_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup0();
});




/*
 *
 *   obj2726: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2726");
	var winTarget = document.getElementById("obj2726");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2726").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2726_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2726_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2726_onTouchDown_activeActionGroupIndex != -1) return;
var obj2726_onTouchDown_runningActionsCount = 0;
var obj2726_onTouchDown_loopCount = 0;
obj2726_onTouchDown_actionGroup0();
});


/*
 *
 *   obj2726: Event SCActionDragDrop380_droppedOutsideTargetActions
 *
 */
$("#obj2726").bind("SCActionDragDrop380_droppedOutsideTargetActions", function(event) {
	if (window.obj2726_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj2726_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2726_SCActionDragDrop380_droppedOutsideTargetActions_loopCount = 0;
obj2726_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup0();
});




/*
 *
 *   obj2719: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2719");
	var winTarget = document.getElementById("obj2719");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2719").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2719_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2719_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2719_onTouchDown_activeActionGroupIndex != -1) return;
var obj2719_onTouchDown_runningActionsCount = 0;
var obj2719_onTouchDown_loopCount = 0;
obj2719_onTouchDown_actionGroup0();
});


/*
 *
 *   obj2719: Event SCActionDragDrop373_droppedOutsideTargetActions
 *
 */
$("#obj2719").bind("SCActionDragDrop373_droppedOutsideTargetActions", function(event) {
	if (window.obj2719_SCActionDragDrop373_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj2719_SCActionDragDrop373_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2719_SCActionDragDrop373_droppedOutsideTargetActions_loopCount = 0;
obj2719_SCActionDragDrop373_droppedOutsideTargetActions_actionGroup0();
});




/*
 *
 *   obj2712: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2712");
	var winTarget = document.getElementById("obj2712");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2712").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2712_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2712_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2712_onTouchDown_activeActionGroupIndex != -1) return;
var obj2712_onTouchDown_runningActionsCount = 0;
var obj2712_onTouchDown_loopCount = 0;
obj2712_onTouchDown_actionGroup0();
});


/*
 *
 *   obj2712: Event SCActionDragDrop380_droppedOutsideTargetActions
 *
 */
$("#obj2712").bind("SCActionDragDrop380_droppedOutsideTargetActions", function(event) {
	if (window.obj2712_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj2712_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2712_SCActionDragDrop380_droppedOutsideTargetActions_loopCount = 0;
obj2712_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup0();
});




/*
 *
 *   obj2705: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2705");
	var winTarget = document.getElementById("obj2705");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2705").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2705_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2705_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2705_onTouchDown_activeActionGroupIndex != -1) return;
var obj2705_onTouchDown_runningActionsCount = 0;
var obj2705_onTouchDown_loopCount = 0;
obj2705_onTouchDown_actionGroup0();
});


/*
 *
 *   obj2705: Event SCActionDragDrop380_droppedOutsideTargetActions
 *
 */
$("#obj2705").bind("SCActionDragDrop380_droppedOutsideTargetActions", function(event) {
	if (window.obj2705_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj2705_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2705_SCActionDragDrop380_droppedOutsideTargetActions_loopCount = 0;
obj2705_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup0();
});




/*
 *
 *   obj2698: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2698");
	var winTarget = document.getElementById("obj2698");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2698").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2698_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2698_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2698_onTouchDown_activeActionGroupIndex != -1) return;
var obj2698_onTouchDown_runningActionsCount = 0;
var obj2698_onTouchDown_loopCount = 0;
obj2698_onTouchDown_actionGroup0();
});


/*
 *
 *   obj2698: Event SCActionDragDrop380_droppedOutsideTargetActions
 *
 */
$("#obj2698").bind("SCActionDragDrop380_droppedOutsideTargetActions", function(event) {
	if (window.obj2698_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj2698_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2698_SCActionDragDrop380_droppedOutsideTargetActions_loopCount = 0;
obj2698_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup0();
});




/*
 *
 *   obj2691: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2691");
	var winTarget = document.getElementById("obj2691");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2691").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2691_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2691_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2691_onTouchDown_activeActionGroupIndex != -1) return;
var obj2691_onTouchDown_runningActionsCount = 0;
var obj2691_onTouchDown_loopCount = 0;
obj2691_onTouchDown_actionGroup0();
});


/*
 *
 *   obj2691: Event SCActionDragDrop380_droppedOutsideTargetActions
 *
 */
$("#obj2691").bind("SCActionDragDrop380_droppedOutsideTargetActions", function(event) {
	if (window.obj2691_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj2691_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2691_SCActionDragDrop380_droppedOutsideTargetActions_loopCount = 0;
obj2691_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup0();
});




/*
 *
 *   obj2742: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2742");
	var winTarget = document.getElementById("obj2742");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2742").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2742_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2742_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2742_onTouchDown_activeActionGroupIndex != -1) return;
var obj2742_onTouchDown_runningActionsCount = 0;
var obj2742_onTouchDown_loopCount = 0;
obj2742_onTouchDown_actionGroup0();
});


/*
 *
 *   obj2742: Event SCActionDragDrop359_droppedOutsideTargetActions
 *
 */
$("#obj2742").bind("SCActionDragDrop359_droppedOutsideTargetActions", function(event) {
	if (window.obj2742_SCActionDragDrop359_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj2742_SCActionDragDrop359_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2742_SCActionDragDrop359_droppedOutsideTargetActions_loopCount = 0;
obj2742_SCActionDragDrop359_droppedOutsideTargetActions_actionGroup0();
});




/*
 *
 *   obj2749: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2749");
	var winTarget = document.getElementById("obj2749");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2749").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2749_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2749_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2749_onTouchDown_activeActionGroupIndex != -1) return;
var obj2749_onTouchDown_runningActionsCount = 0;
var obj2749_onTouchDown_loopCount = 0;
obj2749_onTouchDown_actionGroup0();
});


/*
 *
 *   obj2749: Event SCActionDragDrop380_droppedOutsideTargetActions
 *
 */
$("#obj2749").bind("SCActionDragDrop380_droppedOutsideTargetActions", function(event) {
	if (window.obj2749_SCActionDragDrop380_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj2749_SCActionDragDrop380_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2749_SCActionDragDrop380_droppedOutsideTargetActions_loopCount = 0;
obj2749_SCActionDragDrop380_droppedOutsideTargetActions_actionGroup0();
});
























/*
 *
 *   obj3294: Event Touch Down
 *
 */
 
$("#obj3294").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3294_onTap_activeActionGroupIndex != -1) return;
var obj3294_onTap_runningActionsCount = 0;
var obj3294_onTap_loopCount = 0;
obj3294_onTap_actionGroup0();
});










/*
 *
 *   obj3534: Event SCEventRun
 *
 */
$("#obj3534").bind("SCEventRun", function(event) {
	if (window.obj3534_SCEventRun_activeActionGroupIndex != -1) return;
var obj3534_SCEventRun_runningActionsCount = 0;
var obj3534_SCEventRun_loopCount = 0;
obj3534_SCEventRun_actionGroup0();
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
	
$("#obj3607").trigger('SCEventShow');
$("#obj2575").trigger('SCEventShow');
$("#obj2573").trigger('SCEventShow');
$("#obj2571").trigger('SCEventShow');
$("#obj2569").trigger('SCEventShow');
$("#obj2567").trigger('SCEventShow');
$("#obj2565").trigger('SCEventShow');
$("#obj2577").trigger('SCEventShow');
$("#obj3285").trigger('SCEventShow');
$("#obj3288").trigger('SCEventShow');
$("#obj3290").trigger('SCEventShow');
$("#obj3294").trigger('SCEventShow');
$("#obj2049").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});