/*

    Smooth Scroll

*/

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

/*

    Slideshow

*/

class Slideshow {

    constructor() {
        this.slideIndex = 1;
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    currentSlide(n) {
        this.showSlides(this.slideIndex = n);
    }

    showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("slide_show_Slides");
        var dots = document.getElementsByClassName("dot");

        if (n > slides.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[this.slideIndex - 1].style.display = "block";
        dots[this.slideIndex - 1].className += " active";
    }
}

/*

    Modal Album Gallery

*/

class ModalSlideShow {

    constructor()
    {
        this.slideIndex = 1;
    }

    // Open the Modal
    openModal() {
        document.getElementById("myModal").style.display = "block";
    }

    // Close the Modal
    closeModal() {
        document.getElementById("myModal").style.display = "none";
    }

    // Next/previous controls
    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    // Thumbnail image controls
    currentSlide(n) {
        this.showSlides(this.slideIndex = n);
    }

    showSlides(n) {
        var i;
        var album = document.getElementsByClassName("gallery_thumbnail");
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        var captionText = document.getElementById("caption");

        if (n > slides.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[this.slideIndex - 1].style.display = "block";
    }
}

/*

    Modal Image Gallery

*/

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

/*

    Send Mail Function

    To-do: Add firebase functionality to automate mail sending.

*/

function sendMail() {
    oForm = document.forms.ContactForm;
    formName = oForm.elements.inquiry_name.value;
    formSubj = oForm.elements.inquiry_subject.value;
    formBody = oForm.elements.inquiry_body.value;
    console.log(formName);
    out = 'mailto:jazzclububc@gmail.com?subject=' + formName + ': ' + formSubj;
    out += '&body=' + formBody;
    window.open(out);
}

// Render the slideshow and modal
var sldshow = new Slideshow();
var modalShow = new ModalSlideShow();

// Render Slideshow first
sldshow.showSlides();
modalShow.showSlides();