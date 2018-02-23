//adding a function to collect user name input
$(document).ready(function() {
  $('#inputName').on('click', function(event){
    var inputName = $(this).val('');
    alert(inputName);
  });
});
//added a function to collect phone input
$(document).ready(function() {
  $('#inputPhone').on('click', function(event){
    var inputPhone = $(this).val();
    alert(inputPhone);
  });
});
//added a function to collect user email
$(document).ready(function() {
  $('#inputAddress').on('click', function(event){
    var inputAddress = $(this).val('');
    alert(inputAddress);
  });
});
