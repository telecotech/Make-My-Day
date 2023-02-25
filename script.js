$(document).ready(function() {

  // Define the displayTime() function to display the current date and time in the header
  var now = dayjs();
  var formattedDateTime = now.format("dddd, MMMM D, YYYY H:mm A");
  $("#currentDay").text(formattedDateTime);

 

  $('.time-block').each(function() {
    var hour = ($(this).attr('id'));
    
    if (hour < now.hour()) {
      // past hour
      $(this).addClass("past").removeClass("present future");
    } else if (hour == now.hour()) {
      // current hour
      $(this).addClass("present").removeClass("past future");
    } else {
      // future hour
      $(this).addClass("future").removeClass("past present");
    }
    console.log(hour)
  });
  
  
 
  

 

  $(".saveBtn").on("click", function() {
    // Get the id of the time block
    var timeBlockId = $(this).parent().attr("id");

    // Get the text entered in the text area
    var text = $(this).siblings(".description").val().trim();

    // Save the text to local storage using the time block id as the key
    localStorage.setItem(timeBlockId, text);
  });

  // Load the saved data for each textarea
  $('.time-block').each(function() {
    // Get the ID of the parent element
    var id = $(this).attr('id');

    // Get the saved value from local storage
    var value = localStorage.getItem(id);

    // If there is saved data, set the value of the textarea
    if (value !== null) {
      $(this).find('textarea').val(value);
    }
  });

});






