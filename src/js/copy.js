jQuery(function($) {
  
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    
    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
    
    // Check all animatables and animate them if necessary
		$animatables.each(function(i) {
       var $animatable = $(this);
			if (($animatable.offset().top + $animatable.height() - 200) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
			}
    });

	};
  
  // Hook doAnimations on scroll, and trigger a scroll
	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});










// // Creation of the function copy
// function Clipboard(text){
//   var dummy = document.createElement("input");
//   document.body.appendChild(dummy);
//   dummy.setAttribute('value', text);
//   dummy.select();
//   document.execCommand("copy");
//   document.body.removeChild(dummy);
// };



// Using of the function
// document.getElementById("mail").addEventListener("click", Clipboard("oscar@cyberbea.com"));





function copyToClipBoard(text) {
  try {
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val(text).select();
      var retVal = document.execCommand("copy");
      console.log('Copy to clipboard returns: ' + retVal);
      $temp.remove();
  } catch (err) {
      console.log('Error while copying to clipboard: ' + err);
  }
}

$("mail").on('click', copyToClipBoard('oscar@cyberbea.com'));





// modal
document.getElementById('mail').addEventListener('click', function() {
  document.getElementById('overlay').classList.add('is-visible');
  document.getElementById('modal').classList.add('is-visible');
});

document.getElementById('close-btn').addEventListener('click', function() {
  document.getElementById('overlay').classList.remove('is-visible');
  document.getElementById('modal').classList.remove('is-visible');
});
document.getElementById('overlay').addEventListener('click', function() {
  document.getElementById('overlay').classList.remove('is-visible');
  document.getElementById('modal').classList.remove('is-visible');
});








