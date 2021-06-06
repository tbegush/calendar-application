//moment.js
// two main functions - target the save button on click save value of desc to var
//    save the time, set variables to local storage.
//  
// for each function - 
//  .each in jquery   


var todaysDate = new Date()
// Convert the `todaysDate` to the "MMM Do YY" format using `moment()`
var properFormat = 'LLLL';
var convertedDate = moment(todaysDate, properFormat).format('LLLL');
// Log `convertedDate` into the console
console.log(convertedDate);

$("#todaysDate").text(convertedDate);

 //stores text input to local storage
 $(".saveBtn").on("click", function(){
    //  alert("????????");
    localStorage.setItem(t, $(".eventText").val());
    var t = $(this).parents(".row").data("time");
    // alert(t);
    // localStorage.setItem("time", t);
    
});