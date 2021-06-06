//moment.js
// two main functions - target the save button on click save value of desc to var
//    save the time, set variables to local storage.
//
// for each function -
//  .each in jquery

var todaysDate = new Date();
// Convert the `todaysDate` to the "MMM Do YY" format using `moment()`
var properFormat = "LLLL";
var convertedDate = moment(todaysDate, properFormat).format("LLLL");
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
for (var i = 0; i < $(".row").length; i++){
 var time = $(".row").eq(i).data("time");
 alert(time);
    var event = localStorage.getItem(time);
    $(".row").eq(i).find(".display-event").text(event);
    console.log(time);
    console.log(event);
}
  });

