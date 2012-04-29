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
    distancePanel.hide();
    checkShowExecPanel();
    localStorage.setItem("jogCalDistance", distance);
}
function checkShowExecPanel(){
    if(distance === 0 || (hours === 0 && minutes === 0)){
        return;
    }
    execCalc();
    execPanel.show();
}
$(function(){
    distanceView = $('#distanceView');
    distancePanel = $('#distancePanel');
    distancePanelShow = $('#distancePanelShow');
    distanceInput = $('#distanceInput');
    timePanel = $('#timePanel');
    timePanelShow = $('#timePanelShow');
    hoursView = $(".hoursView");
    hoursInput = $("#hoursInput");
    minutesView = $(".minutesView");
    minutesInput = $("#minutesInput");
    execPanel = $('#execPanel');
    speedView = $("#speedView");

    hoursInput.slider({max: 10, min: 0, step: 1
        , slide:function(){
            hours = parseInt(hoursInput.slider("value"));
            localStorage.setItem("jogCalHours", hours);
            hoursView.text(hours);
            checkShowExecPanel();
        }
    });
    minutesInput.slider({max: 59, min: 0, step: 1
        , slide: function(){
            minutes = parseInt(minutesInput.slider("value"));
            localStorage.setItem("jogCalMinutes", minutes);
            minutesView.text(minutes);
            checkShowExecPanel();
        }
    });

    distanceView.text(distance);
    hoursView.text(hours);
    hoursInput.val(hours);
    minutesView.text(minutes);
    minutesInput.val(minutes);
    checkShowExecPanel();

    distancePanelShow.click(function(){
        timePanel.hide();
        execPanel.hide();
        distancePanel.show();
    });
    timePanelShow.click(function(){
        distancePanel.hide();
        execPanel.hide();
        timePanel.show();
    });
    distanceInput.change(function(){
        if(!distanceInput.val()){
            return
        }
        updateDistance(distanceInput.val());
    });

});

