$(function(){
$("#vegas").vegas({
  delay:5000,
  slides:[
    { src:'./images/BN-1.jpg' },
    { src:'./images/BN-2.jpg' },
    { src:'./images/BN-4.jpg'},
    { src:'./images/BN-5.jpg'}
  ],
  transition : 'zoomOut'
});
})

// $(function() {

// $('#dg-container').gallery({autoplay	:	true});

// });



////////////////////////////////

	$(window).load(function() {
		$(".se-pre-con").fadeOut("slow");;
	});


///////////////////////////////

 var context;
var $window = $(window);


// refresh the page only if you're crossing into a context
// that isn't already set
$(window).resize(function() {
    if($window.width() > 768)  {
        //refresh the page
        location.reload();
    } 
}); 

    