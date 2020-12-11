document.getElementById("currentDay").innerHTML = moment().format('dddd MMM Do YYYY');

$(document).ready(function() {
    $(".saveBtn").on('click', function() {
        let time  = $(this).parent().attr("id");
        let details = $(this).siblings('.description').val();
        localStorage.setItem(time, details);
     });

    function colorCode() {
        let currentHour = moment().format('hh');
        console.log(currentHour);

        $(".time-block").each(function() {  
            let timeSlot = parseInt($(this).attr('id'));

            if (currentHour === timeSlot) {
                $(this).addClass("present");
            } else if (currentHour < timeSlot) {
                $(this).addClass('future');
                $(this).removeClass('present');
            } else {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");

            }
        })
    }
    colorCode();

    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
})



