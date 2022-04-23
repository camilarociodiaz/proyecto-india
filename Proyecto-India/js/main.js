// Get the button that opens the modal
var btn = document.querySelectorAll("button.modal-button");

// All page modals
var modals = document.querySelectorAll('.modal-stack');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close-stack");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal-stack')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}

//Portfolio sider (necesitamos uno para cada owl carousel)
$(document).ready(function(){
    $(".modal-slider").owlCarousel({
        loop:true,
        autoplay: true,
        margin:10,
        nav:false,
        dots: true,
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:1
            },

            900:{
                items:1
            },

            1200:{
                items:1
            },

            1500:{
                items:1
            }
        }
    });
  });


//clientes slider
$(document).ready(function(){
    $("#clientes-slider").owlCarousel({
        loop:true,
        autoplay: true,
        margin:10,
        nav:false,
        dots: true,
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        responsive:{
            0:{
                items:2
            },
            768:{
                items:4
            },

            900:{
                items:6
            },

            1200:{
                items:6
            },

            1500:{
                items:6
            }
        }
    });
  });
