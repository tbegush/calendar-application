//moment.js
// two main functions - target the save button on click save value of desc to var
//    save the time, set variables to local storage.
//
// for each function -
//  .each in jquery

var todaysDate = moment().format("dddd MMMM Do YYYY, HHmm");
// Convert the `todaysDate` to the "MMM Do YY" format using `moment()`
var convertedDate = todaysDate;
// Log `convertedDate` into the console
console.log(convertedDate);

$("#todaysDate").text(convertedDate);

//stores text input to local storage
$(".saveBtn").on("click", function () {
  var time = $(this).parents(".row").data("time");
  var event = $(this).parents(".row").find(".eventText").val();
  localStorage.setItem(time, event);

  $(this).parents(".row").find(".display-event").text(event);
});

// display previously entered events at page load

$(document).ready(function () {
  $(".row").each(function () {
    var time = $(this).data("time");
    var event = localStorage.getItem(time);
    $(this).find(".display-event").text(event);

    var currentTime = moment().format("HH00");

    if (time > currentTime) {
      $(this).addClass("future");
    } 
    else if (time < currentTime) {
      $(this).addClass("past");
    }
    else {
        $(this).addClass("present");
    }
  });

  // for (var i = 0; i < $(".row").length; i++){
  //  var time = $(".row").eq(i).data("time");
  //      var event = localStorage.getItem(time);
  //     $(".row").eq(i).find(".display-event").text(event);
});
