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

var execCalc;
var speedView;

function clearExeccPanel(){
    execPanel.hide();
    speedView.text("");
}
function updateDistance(value){
    distance = value;
    distanceView.text(distance);
    distancePanel.hide();
    checkShowExecutePanel();
}
function checkShowExecutePanel(){
    if(distance === 0 || (hours === 0 && minutes === 0)){
        clearExeccPanel();
        return;
    }
    execPanel.show();
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
    
    execCalc = $("#execCalc");
    speedView = $("#speedView");

    distancePanelShow.click(function(){
        timePanel.hide();
        clearExeccPanel();
        distancePanel.show();
    });
    timePanelShow.click(function(){
        distancePanel.hide();
        clearExeccPanel();
        timePanel.show();
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
        timePanel.hide();
        checkShowExecutePanel();
    });

    execCalc.click(function(){
        var allSecond = hours * 60 * 60 + minutes * 60;
        var resultAllSecond = allSecond / distance;
        var resultMinutes = parseInt(resultAllSecond / 60);
        var resultSecond = parseInt(resultAllSecond % 60);
        speedView.text("1kmあたり" + resultMinutes + "分" +  resultSecond + "秒");
    });



});

