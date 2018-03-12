"A website for my small lawn-care business. I used a color scheme that matches the job. I made it responsize while also adding in a cool logo right in the header that helps the name catch your eye. I added in some javascript/jQuery to make it collect the users input, as well as adding some animations to help the user become aware of where their cursor is."

CSS selectors:
    body {background-color:#000;}
    p{color:white;}
    h1 {background-color:#2eb82e;color:#fff;text-align:center;font-size:100px;font-weight:bolder;padding-bottom:20px;}
    .mowing-man{border-radius:50px;width:100px;height:100px}
    /*horizontal line that seperates the nav bar from the content*/
    .hr{background-color:#2eb82e;}
    /*start of form and checkboxes*/
    .checkbox{display:flex;flex-direction:column;margin-top:50px;}
    .form-check{align-self:center;width:140px;}
    .label{color:white;}
    /*styling for the submit button*/
    .btn{margin:10px;}
    .submit{display:flex;justify-content:center;margin:30px 0px;}
    .submit-color{background-color:#2eb82e;border-color:white;}
    /*styling for container-nav div*/
    .green{color:#2eb82e;}
    .nav-links{margin-top:10px;text-align:center;}

JavaScript/jQuery: here is a few of those

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
