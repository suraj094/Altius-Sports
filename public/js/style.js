$(document).ready(function(){
    $('#search').click(function(e){
        e.preventDefault();
        var search =  document.getElementById('keywords').value;
        url = window.location.href.split('search');
        window.location = 'http://www.altiussports.com/' + 'search/' +  search;
    })
});


function SUBMIT(){
var url = window.location.href; 
  $('#form5').submit(function(e) {
    var name    = document.getElementById('cont_name');
    var email   = document.getElementById('cont_email');
    var ph_no = document.getElementById('cont_number');
    var message = document.getElementById('cont_message');
    if (!name.value || !email.value || !message.value) {
      alert("Fill All Fields !");
      return false;
    } else {
    $.ajax({
    url: "https://mailthis.to/info@altiussports.com", 
    method: "POST",
    data: {name: name.value,
       email: email.value,
       phone : ph_no.value,
        message : message.value},
    dataType: "text/html",
});
      e.preventDefault();
      $(this).get(0).reset();
      document.getElementById('return-text-contact').innerHTML = "* Thank You! Our program advisor will contact you soon";
    //   window.location = "http://localhost:3000/products";
      setTimeout(function(){
	location.reload();
	},5000);
    }
    // window.history.go(0);
  });
  
};

function SUBSCRIBE(){
var url = window.location.href; 
  $('#subscribe').submit(function(e) {
    var email   = document.getElementById('emailId');
    if (!email.value) {
      alert("Fill All Fields !");
      return false;
    } else {
    $.ajax({
    url: "https://mailthis.to/info@altiussports.com", 
    method: "POST",
    data: {email: email.value},
    dataType: "text/html",
});
      e.preventDefault();
      $(this).get(0).reset();
      document.getElementById('emailId').value = "* Thank You for subscribing our newsletter";
    //   window.location = "http://localhost:3000/products";
      setTimeout(function(){
        location.reload();
      }, 6000);
    }
    // window.history.go(0);
  });
  
};
