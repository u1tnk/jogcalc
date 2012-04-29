$(function(){
    var distance = 0;
    var hours = 0;
    var minutes = 0;

    var distanceView = $('#distanceView');
    var distanceInput = $('#distanceInput');
    var hoursView = $("#hoursView");
    var hoursInput = $("#hoursInput");
    var minutesView = $("#minutesView");
    var minutesInput = $("#minutesInput");
    
    var execCalc = $("#execCalc");
    var speedView = $("#speedView");

    distanceInput.change(function(){
        if(!distanceInput.val()){
            return
        }
        distance = parseInt(distanceInput.val());
        distanceView.text(distance);
    });
    hoursInput.change(function(){
        hours = parseInt(hoursInput.val());
        console.log(hours);
        hoursView.text(hours);
    });
    minutesInput.change(function(){
        minutes = parseInt(minutesInput.val());
        minutesView.text(minutes);
    });

    execCalc.click(function(){
        if(distance === 0 || (hours === 0 && minutes === 0)){
            alert("pleas input!");
            return;
        }
        var allSecond = hours * 60 * 60 + minutes * 60;
        var resultAllSecond = allSecond / distance;
        var resultMinutes = parseInt(resultAllSecond / 60);
        var resultSecond = parseInt(resultAllSecond % 60);
        speedView.text("1kmあたり" + resultMinutes + "分" +  resultSecond + "秒で走れ！");
    });



});

