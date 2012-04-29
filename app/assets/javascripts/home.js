var distance = 0;
var hours = 0;
var minutes = 0;

var distancePanelShow;
var distanceView;
var distancePanel;
var distanceInput;
var timePanelShow;
var hoursView;
var hoursInput;
var timeDecide;
var minutesView;
var minutesInput;

var speedView;

function execCalc(){
    var allSecond = hours * 60 * 60 + minutes * 60;
    var resultAllSecond = allSecond / distance;
    var resultMinutes = parseInt(resultAllSecond / 60);
    var resultSecond = parseInt(resultAllSecond % 60);
    speedView.text("1kmあたり" + resultMinutes + "分" +  resultSecond + "秒");
}

function updateDistance(value){
    distance = value;
    distanceView.text(distance);
    distancePanel.fadeOut(1000);
    checkShowExecPanel();
}
function checkShowExecPanel(){
    if(distance === 0 || (hours === 0 && minutes === 0)){
        return;
    }
    execCalc();
    execPanel.fadeIn(1000);
}
$(function(){
    distanceView = $('#distanceView');
    distancePanel = $('#distancePanel');
    distancePanelShow = $('#distancePanelShow');
    distanceInput = $('#distanceInput');
    timePanel = $('#timePanel');
    timePanelShow = $('#timePanelShow');
    timeDecide = $("#timeDecide");
    hoursView = $(".hoursView");
    hoursInput = $("#hoursInput");
    minutesView = $(".minutesView");
    minutesInput = $("#minutesInput");
    execPanel = $('#execPanel');
    
    speedView = $("#speedView");

    distancePanelShow.click(function(){
        timePanel.fadeOut(1000);
        execPanel.fadeOut(1000);
        distancePanel.fadeIn(1000);
    });
    timePanelShow.click(function(){
        distancePanel.fadeOut(1000);
        execPanel.fadeOut(1000);
        timePanel.fadeIn(1000);
    });
    distanceInput.change(function(){
        if(!distanceInput.val()){
            return
        }
        updateDistance(distanceInput.val());
    });
    hoursInput.change(function(){
        hours = parseInt(hoursInput.val());
        hoursView.text(hours);
    });
    minutesInput.change(function(){
        minutes = parseInt(minutesInput.val());
        minutesView.text(minutes);
    });
    timeDecide.click(function(){
        timePanel.fadeOut(1000);
        checkShowExecPanel();
    });

});

