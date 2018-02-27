//adding a function to collect user name input
$(document).ready(function() {
  $('#inputName').on('click', function(){
    var inputName = $(this).val();
    console.log(inputName);
  });
});
//added a function to collect phone input
$(document).ready(function() {
  $('#inputPhone').on('click', function(){
    var inputPhone = $(this).val();
    console.log(inputPhone);
  });
});
//added a function to collect user email
$(document).ready(function() {
  $('#inputAddress').on('click', function(){
    var inputAddress = $(this).val();
    console.log(inputAddress);
  });
});
