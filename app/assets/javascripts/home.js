var distance = localStorage.getItem("jogCalDistance");
if(!distance){distance = 1};
var hours = localStorage.getItem("jogCalHours");
if(!hours){hours = 0};
var minutes = localStorage.getItem("jogCalMinutes");
if(!minutes){minutes = 0};

var distancePanelShow;
var distanceView;
var distancePanel;
var distanceInput;
var distanceInputRange;
var timePanelShow;
var hoursView;
var hoursInput;
var timeDecide;
var minutesView;
var minutesInput;

var speedView;
var rankView;

function execCalc(){
    if(distance == 0 || (hours == 0 && minutes == 0)){
        speedView.text("計算できません");
        rankView.text("");
        return;
    }
    var allSecond = hours * 60 * 60 + minutes * 60;
    var resultAllSecond = allSecond / distance;
    var resultMinutes = parseInt(resultAllSecond / 60);
    var resultSecond = parseInt(resultAllSecond % 60);
    speedView.text(resultMinutes + "分" +  resultSecond + "秒");
    if(resultAllSecond >= 6 * 60){
        rankView.text("初級");
    }else if(4 * 60 + 30 < resultAllSecond && resultAllSecond < 6 * 60 ){
        rankView.text("中級");
    }else{
        rankView.text("プロ級");
    }
}

function updateDistance(value){
    distance = value;
    distanceView.text(distance);
    distanceInput.val(value);
    distanceInputRange.val(value);
    execCalc();
    localStorage.setItem("jogCalDistance", distance);
}
$(function(){
    distanceView = $('#distanceView');
    distancePanel = $('#distancePanel');
    distancePanelShow = $('#distancePanelShow');
    distanceInput = $('#distanceInput');
    distanceInputRange = $('#distanceInputRange');
    timePanel = $('#timePanel');
    timePanelShow = $('#timePanelShow');
    hoursView = $(".hoursView");
    hoursInput = $("#hoursInput");
    minutesView = $(".minutesView");
    minutesInput = $("#minutesInput");
    minutesInput = $("#minutesInput");
    speedView = $("#speedView");
    rankView = $("#rankView");
    distancePanel.show();
    distancePanelShow.addClass("btn-primary");
    distancePanelShow.removeClass("btn-inverse");
 

    hoursInput.change(function(){
        var value = hoursInput.val();
        hours = parseInt(value);
        localStorage.setItem("jogCalHours", hours);
        hoursView.text(hours);
        execCalc();
    });
    minutesInput.change(function(){
        var value = minutesInput.val();
        minutes = parseInt(value);
        localStorage.setItem("jogCalMinutes", minutes);
        minutesView.text(minutes);
        execCalc();
    });

    distanceView.text(distance);
    hoursView.text(hours);
    hoursInput.val(hours);
    minutesView.text(minutes);
    minutesInput.val(minutes);
    execCalc();

    distancePanelShow.click(function(){
        timePanel.hide();
        timePanelShow.removeClass("btn-primary");
        timePanelShow.addClass("btn-inverse");
        distancePanel.show();
        distancePanelShow.addClass("btn-primary");
        distancePanelShow.removeClass("btn-inverse");
    });
    timePanelShow.click(function(){
        distancePanel.hide();
        distancePanelShow.removeClass("btn-primary");
        distancePanelShow.addClass("btn-inverse");
        timePanel.show();
        timePanelShow.addClass("btn-primary");
        timePanelShow.removeClass("btn-inverse");
    });

    distanceInputRange.change(function(){
        if(!distanceInputRange.val()){
            return
        }
        updateDistance(distanceInputRange.val());
    });
    distanceInput.change(function(){
        if(!distanceInput.val()){
            return
        }
        updateDistance(distanceInput.val());
    });

});

