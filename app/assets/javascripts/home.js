var distance = localStorage.getItem("jogCalDistance");
if(!distance){distance = 0};
var hours = localStorage.getItem("jogCalHours");
if(!hours){hours = 0};
var minutes = localStorage.getItem("jogCalMinutes");
if(!minutes){minutes = 0};

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
    speedView.text(resultMinutes + "分" +  resultSecond + "秒");
}

function updateDistance(value){
    distance = value;
    distanceView.text(distance);
    distancePanel.fadeOut(1000);
    checkShowExecPanel();
    localStorage.setItem("jogCalDistance", distance);
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

    hoursInput.slider({max: 10, min: 0, step: 1
        , change:function(){
            hours = parseInt(hoursInput.slider("value"));
            localStorage.setItem("jogCalHours", hours);
            hoursView.text(hours);
        }
    });
    minutesInput.slider({max: 60, min: 0, step: 1
        , change: function(){
            minutes = parseInt(minutesInput.slider("value"));
            localStorage.setItem("jogCalMinutes", minutes);
            minutesView.text(minutes);
        }
    });

    distanceView.text(distance);
    hoursView.text(hours);
    hoursInput.val(hours);
    minutesView.text(minutes);
    minutesInput.val(minutes);
    checkShowExecPanel();

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
    timeDecide.click(function(){
        timePanel.fadeOut(1000);
        checkShowExecPanel();
    });

});

