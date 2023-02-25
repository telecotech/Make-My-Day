// // Define the displayTime() function to display the current date and time in the header
// var now = dayjs();
// var formattedDateTime = now.format("dddd, MMMM D, YYYY h:mm A");
// $("#currentDay").text(formattedDateTime);


// $(".saveBtn").on("click", function() {
//   // Get the id of the time block
//   var timeBlockId = $(this).parent().attr("id");

//   // Get the text entered in the text area
//   var text = $(this).siblings(".description").val().trim();

//   // Save the text to local storage using the time block id as the key
//   localStorage.setItem(timeBlockId, text);
//   console.log('function working')
// });



// // Load the saved data for each textarea
// $('.time-block').each(function() {
//   // Get the ID of the parent element
//   var id = $(this).attr('id');
  
//   // Get the saved value from local storage
//   var value = localStorage.getItem(id);
  
//   // If there is saved data, set the value of the textarea
//   if (value !== null) {
//     $(this).find('textarea').val(value);
//   }
// });







// trying something


$(document).ready(function() {

  // Define the displayTime() function to display the current date and time in the header
  var now = dayjs();
  var formattedDateTime = now.format("dddd, MMMM D, YYYY h:mm A");
  $("#currentDay").text(formattedDateTime);

  // Function to update text area color based on current time
  function updateTextAreaColor() {
    var currentHour = dayjs().hour();
    $('.time-block').each(function() {
      var blockHour = parseInt($(this).attr('id'));
      var textArea = $(this).find('textarea');
      if (blockHour < currentHour) {
        textArea.removeClass('present future').addClass('past');
      } else if (blockHour === currentHour) {
        textArea.removeClass('past future').addClass('present');
      } else {
        textArea.removeClass('past present').addClass('future');
      }
    });
  }

  // Call the updateTextAreaColor() function every 5 minutes to keep the colors updated
  setInterval(updateTextAreaColor, 5 * 60 * 1000);

  // Call the updateTextAreaColor() function once on page load
  updateTextAreaColor();

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







