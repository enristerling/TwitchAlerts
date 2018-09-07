
function getNames(){
	$.get("../../StreamLabsAlerts/most_recent_follower.txt", function(data) {
	    var myvar = data;
	  $('#followName').text(data);
	});
}


getNames(); // load ASAP
window.setInterval(getNames, 3000);


// Add Animations

$( document ).ready(function() {
    // Add Animations

    tl = new TimelineMax({repeat: -1});

    $( ".item" ).each(function( index ) {
        tl.to(this, 0, {onComplete:addAnimated, onCompleteParams:[this], delay: 5});
        tl.to(this, 14.2, {onComplete:rmvAnimated, onCompleteParams:[this]});
	});

    function addAnimated(identifier){
        $(identifier).addClass("animated");
    }
    function rmvAnimated(identifier){
        $(identifier).removeClass("animated");
    }
});