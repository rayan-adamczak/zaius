// Text appears fadeintop
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





// function copyToClipBoard(text) {
//   try {
//       var $temp = $("<input>");
//       $("body").append($temp);
//       $temp.val(text).select();
//       var retVal = document.execCommand("copy");
//       console.log('Copy to clipboard returns: ' + retVal);
//       $temp.remove();
//   } catch (err) {
//       console.log('Error while copying to clipboard: ' + err);
//   }
// }

// $("mail").on('click', copyToClipBoard('oscar@cyberbea.com'));


  
document.getElementById('mail').addEventListener( 'click', function( event ) { copytext("oscar") } );


    function detectIE() {
        var ua = window.navigator.userAgent;

        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // IE 12 => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }

        // other browser
        return false;
    }
    function copytext(text) {
        if (detectIE()) {
            window.clipboardData.setData('Text', text);
        }
        var textField = document.createElement('textarea');
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        window.clipboardData.setData('Text', copytext);
        textField.remove();
    }

function copytext(text) {
        var textField = document.createElement('textarea');
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        $(textField).remove();
    }





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








