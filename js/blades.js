//added a fade in animation to the navs
$('a').hide().delay(1000).fadeIn(1000);


//added a function that capitalizes all text when a mouseover occurs on the nav
var navItems = document.getElementsByTagName('a');
var defaultText = $('.nav li').text();

for (let i = 0; i < navItems.length; i += 1) {
navItems[i].addEventListener('mouseover', function() {
  navItems[i].textContent = navItems[i].textContent.toUpperCase();
});
navItems[i].addEventListener('mouseout', function() {
  navItems[i].textContent = navItems[i].textContent.toLowerCase();
});
}

// const listDiv = document.querySelector('.navList');
//
// listDiv.addEventListener('mouseover', function (event) {
//   if (event.target.tagName == 'LI') {
//   event.target.textContent = event.target.textContent.toUpperCase();
// }
// });
// listDiv.addEventListener('mouseout', function (event) {
//   if (event.target.tagName == 'LI') {
//   event.target.textContent = event.target.textContent.toLowerCase();
// }
// });

//input field changes colors when clicked
$('.form-control').click(function() {
  $(this).css("backgroundColor", "#2eb82e");
  $(this).css("color", "#000");
  $(this).css("fontWeight", "bold");
});




//adding an event listener to the submit button to collect
  //user name input, phone, address
$('.btn').click(function() {
  const name = $('#inputName').val();
  const phone = $('#inputPhone').val();
  const address = $('#inputAddress').val();
  console.log(name);
  console.log(phone);
  console.log(address);
})

// const button = document.querySelector('.btn');
//
// button.addEventListener('mouseover', function(event) {
//  if (button === true) {
//    $('button').mouseover(function() {
//    $(this).css("backgroundColor", "black");
//    $(this).css("color", "#2eb82e");
//    $(this).css("borderColor", "#2eb82e");
// });





//created a mouseover for the submit button
$('button').mouseover(function() {
  $(this).css("backgroundColor", "black");
  $(this).css("color", "#2eb82e");
  $(this).css("borderColor", "#2eb82e");
});
$('button').mouseout(function() {
  $(this).css("backgroundColor", "#2eb82e");
  $(this).css("color", "white");
});
