//displays current date
const date = new Date();

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
const dayOfWeek = weekday[date.getDay()];

const month = new Array(12);
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
const monthString = month[date.getMonth()];



const day = date.getDate();

document.getElementById("currentDay").innerHTML = dayOfWeek + ", " + monthString + " " + day;

$(document).ready(function() {
    $(".saveBtn").on('click', function() {
        let time  = docuemnt.getElementsByClassName('time-block').attr('id');
        let details = document.getElementsByClassName('description').val();
        localStorage.setItem(time, details);
    });

    function colorCode() {
        let currentHour = date.getHours();
        
        $(".time-block").each(function() {  
            let timeSlot = parseInt($(this).attr('id'));
            console.log(timeSlot);

            

        })
    }
    colorCode();
})



