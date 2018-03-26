//added a fade in animation to the nav bar
$('a').hide().delay(1000).fadeIn(3000);
//added a green border to the navs when the user tabs onto them
$('a').on('focus', function() {
  $(this).css("border", "solid 2px #2eb82e");
});
$('a').on('focusout', function() {
  $(this).css("border", "none");
});


let navAnchors = document.getElementsByTagName('a');

for (let i = 0; i < navAnchors.length; i += 1) {
  let a = navAnchors[i];
  let originalText  = a.textContent;
  let uppercaseText = a.textContent.toUpperCase();
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
  $(this).css("border", "solid 4px #2eb82e");
  $(this).css("fontWeight", "bold");
  $(this).css("fontSize", "20px");
  $(this).css("color", "#000");
});
//input field changes background color when tabbed on
$('.form-control').on('focus',function() {
  $(this).css("border", "solid 4px #2eb82e");
  $(this).css("fontWeight", "bold");
  $(this).css("fontSize", "20px");
  $(this).css("color", "#000");
});
//input field changes color after a change is made
$('.form-control').on('change', function() {
  $(this).css("backgroundColor", "#2eb82e");
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
//added the focus color when the user tabs on it
$('button').on('focus', function() {
  $(this).css("backgroundColor", "black");
  $(this).css("color", "#2eb82e");
  $(this).css("borderColor", "#2eb82e");
})
$('button').on('focusout', function() {
  $(this).css("backgroundColor", "#2eb82e");
  $(this).css("color", "white");
})
