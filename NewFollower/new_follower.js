


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