var workDayPlanner = []

for (time = 9; time <= 17; time++) {
    var dataPlanner = "";
    var id = time - 9;
    var ampm = "";
    var dHour = 0;

    if (time === 12) {
        dHour = 12;
        ampm = "pm";
    }   else if (time > 12) {
        ampm = "pm";
        dHour = time - 12;
    }   else if (time < 12) {
        ampm = "am";
        dHour = time;
    }
    dHour = dHour.toString();

    dataPlanner = {
        id: id,
        dHour: dHour,
        time: time,
        ampm: ampm,
        dataPlanner: dataPlanner,
    };
    workDayPlanner.push(dataPlanner);
}
function currentDate() {
    var cDate = moment().format("dddd, MMMM D0");
    $("#currentDay").text(cDate);
}
