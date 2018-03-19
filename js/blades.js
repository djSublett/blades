//added a fade in animation to the nav bar
$('a').hide().delay(1000).fadeIn(3000);
/**
 * We want to make the anchor text uppercase on mouseover and
 * return to normal on mouseout.
 *
 * Lets start by getting the elements we want attach listeners
 * to
 */
let navAnchors = document.getElementsByTagName('a');
/**
 * To attach the listeners we need to loop through the
 * elements
 */
for (let i = 0; i < navAnchors.length; i += 1) {
  let a = navAnchors[i];
/**
 * For each anchor we need the textContent and also create a
 * uppercase version
 */
  let originalText  = a.textContent;
  let uppercaseText = a.textContent.toUpperCase();
/**
 * With the two text versions saved before adding the event
 * listeners we won't have to worry about getting the correct
 * text while inside the event handlers. We just need to set
 * the textContent to originalText or uppercaseText.
 */
  // set textContent to the uppercase version on mouseover
  a.addEventListener('mouseover', function () {
    a.textContent = uppercaseText;
  })

  // set textContent to the original version on mouseout
  a.addEventListener('mouseout', function () {
    a.textContent = originalText;
  })
}

//second option to add textTransformation to the mouseovers
// var navItems = document.getElementsByTagName('a');
//
//
// for (let i = 0; i < navItems.length; i += 1) {
// navItems[i].addEventListener('mouseover', function() {
//  navItems[i].style.textTransform = "uppercase";
// });
// navItems[i].addEventListener('mouseout', function() {
//   navItems[i].style.textTransform = "none";
// });
// }





//input field changes background color when clicked
$('.form-control').click(function() {
  $(this).css("border", "solid 3px #2eb82e");
  $(this).css("fontWeight", "bold");
  $(this).css("fontSize", "20px");
  $(this).css("color", "#000");
});
//input field changes background color when tabbed on
$('.form-control').on('focus',function() {
  $(this).css("border", "solid 3px #2eb82e");
  $(this).css("fontWeight", "bold");
  $(this).css("fontSize", "20px");
  $(this).css("color", "#000");
});
//input field changes back to default color when left
let formStyle = $('.form-control').css();
$('.form-control').on('focusout', function() {
  $(this).css(formStyle);
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
