//added a fade in animation to the navs
$('a').hide().delay(1000).fadeIn(1000);

//added a function that capitalizes all text when a mouseover occurs on the nav
// var navItems = document.getElementsByTagName('a');
//
// for (let i = 0; i < navItems.length; i += 1) {
// navItems[i].addEventListener('mouseover', function() {
//   navItems[i].textContent = navItems[i].textContent.toUpperCase();
// });
// navItems[i].addEventListener('mouseout', function() {
//   navItems[i].textContent = navItems[i].textContent.toLowerCase();
// });
// }

const listDiv = document.querySelector('.navList');

listDiv.addEventListener('mouseover', function (event) {
  if (event.target.tagName == 'LI') {
  event.target.textContent = event.target.textContent.toUpperCase();
}
});
listDiv.addEventListener('mouseout', function (event) {
  if (event.target.tagName == 'LI') {
  event.target.textContent = event.target.textContent.toLowerCase();
}
});

//adding a function to collect user name input
// $(document).ready(function() {
//   $('#inputName').on('click', function(){
//     var inputName = $(this).val();
//     console.log(inputName);
//   });
// });
// //added a function to collect phone input
// $(document).ready(function() {
//   $('#inputPhone').on('click', function(){
//     var inputPhone = $(this).val();
//     console.log(inputPhone);
//   });
// });
// //added a function to collect user email
// $(document).ready(function() {
//   $('#inputAddress').on('click', function(){
//     var inputAddress = $(this).val();
//     console.log(inputAddress);
//   });
// });

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
