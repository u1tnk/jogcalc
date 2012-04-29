$(function(){
    var distance, hours, minutes;
    var distanceView = $('#distanceView');
    var distanceInput = $('#distanceInput');
    var hoursView = $("#hoursView");
    var hoursInput = $("#hoursInput");
    var minutesView = $("#minutesView");
    var minutesInput = $("#minutesInput");
    
    var speedView = $("#speedView");

    distanceInput.change(function(){
        console.log(distanceInput.val())
        if(!distanceInput.val()){
            return
        }
        distance = distanceInput.val();
        distanceView.text(distance);
    });
    hoursInput.change(function(){
        hours = hoursInput.val();
        console.log(hours);
        hoursView.text(hours);
    });
    minutesInput.change(function(){
        minutes = minutesInput.val();
        minutesView.text(minutes);
    });



});

