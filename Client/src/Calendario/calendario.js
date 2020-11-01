/* template: {
    milestone: function(schedule) {
        return '<span style="color:red;"><i class="fa fa-flag"></i> ' + schedule.title + '</span>';
    },
    milestoneTitle: function() {
        return 'Milestone';
    },
    task: function(schedule) {
        return '&nbsp;&nbsp;#' + schedule.title;
    },
    taskTitle: function() {
        return '<label><input type="checkbox" />Task</label>';
    },
    allday: function(schedule) {
        return schedule.title + ' <i class="fa fa-refresh"></i>';
    },
    alldayTitle: function() {
        return 'All Day';
    },
    time: function(schedule) {
        return schedule.title + ' <i class="fa fa-refresh"></i>' + schedule.start;
    },
    monthMoreTitleDate: function(date) {
        date = new Date(date);
        return tui.util.formatDate('MM-DD', date) + '(' + daynames[date.getDay()] + ')';
    },
    monthMoreClose: function() {
        return '<i class="fa fa-close"></i>';
    },
    monthGridHeader: function(model) {
        var date = parseInt(model.date.split('-')[2], 10);
        var classNames = [];

        classNames.push(config.classname('weekday-grid-date'));
        if (model.isToday) {
            classNames.push(config.classname('weekday-grid-date-decorator'));
        }

        return '<span class="' + classNames.join(' ') + '">' + date + '</span>';
    },
    monthGridHeaderExceed: function(hiddenSchedules) {
        return '<span class="calendar-more-schedules">+' + hiddenSchedules + '</span>';
    },

    monthGridFooter: function() {
        return '<div class="calendar-new-schedule-button">New Schedule</div>';
    },

    monthGridFooterExceed: function(hiddenSchedules) {
        return '<span class="calendar-footer-more-schedules">+ See ' + hiddenSchedules + ' more events</span>';
    },
    weekDayname: function(dayname) {
        return '<span class="calendar-week-dayname-name">' + dayname.dayName + '</span><br><span class="calendar-week-dayname-date">' + dayname.date + '</span>';
    },
    monthDayname: function(dayname) {
        return '<span class="calendar-week-dayname-name">' + dayname.label + '</span>';
    },
    timegridDisplayPrimaryTime: function(time) {
        var meridiem = time.hour < 12 ? 'am' : 'pm';

        return time.hour + ' ' + meridiem;
    },
    timegridDisplayTime: function(time) {
        return time.hour + ':' + time.minutes;
    },
    goingDuration: function(model) {
        var goingDuration = model.goingDuration;
        var hour = parseInt(goingDuration / SIXTY_MINUTES, 10);
        var minutes = goingDuration % SIXTY_MINUTES;

        return 'GoingTime ' + hour + ':' + minutes;
    },
    comingDuration: function(model) {
        var goingDuration = model.goingDuration;
        var hour = parseInt(goingDuration / SIXTY_MINUTES, 10);
        var minutes = goingDuration % SIXTY_MINUTES;

        return 'ComingTime ' + hour + ':' + minutes;
    },
    popupDetailRepeat: function(model) {
        return model.recurrenceRule;
    },
    popupDetailBody: function(model) {
        return model.body;
    }
} */


//import assets

import Axios from "axios";

//import libraries
const axios = require("axios").default;

const param = document.URL.split("?")[1];

const requestPaqueteURL = `https://cors-anywhere.herokuapp.com/https://administrador.turismocardoza.cl/`;

let data;

Axios.get(requestPaqueteURL).then(res =>{
    if(res.data.length > 0){
        data = res.data;
    } else {
        data = {
            error: "No hay Paquetes!"
        };
    }

    console.log(data);
})
.catch(err =>{
    alert(err);
});

var calendar = new Calendar("#calendario-container", {
    defaultView: "month",
    disableClick: true,
	template: {
		monthDayname: function (dayname) {
			return (
				'<span class="calendar-week-dayname-name" >' + dayname.label + "</span>"
			);
		},
    },
    
    
});

calendar.setOptions({month: {visibleWeeksCount: 4}});

calendar.createSchedules([
	{
		id: "1",
		calendarId: "1",
		title: "my schedule",
		category: "time",
		dueDateClass: "",
		start: "2020-10-18T22:30:00+09:00",
		end: "2020-10-19T02:30:00+09:00",
	},
]);
