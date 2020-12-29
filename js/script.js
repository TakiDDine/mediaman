$('body #contactForm').submit(function(e) {

    var formData = new FormData();

    e.preventDefault();
    e.stopPropagation();

    var fullname = $('#contact_full_name').val();
    var phone = $('#contact_phone').val();
    var email = $('#contact_email').val();
    var message = $('#contact_message').val();;


    formData.append('fullname', fullname);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('message', message);


    $.ajax({
        url: 'php/index2.php',
        type: 'POST',
        processData: false, // important
        contentType: false, // important
        data: formData,
        beforeSend: function() {
            $('i.fa.fa-spinner').show();
            $('.siftdakchi').attr('disabled', true);
        },
        success: function(response) {
            $('i.fa.fa-spinner').hide();
            $('body #contactForm').trigger("reset");
            window.location.href = '/booking-confirmed';
        },
        error: function(response) {
            alert('an error! please try again');
        }
    });

    return false;
});

//////////////////////
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
    } else {
        $('.nav').removeClass('affix');
    }
});
/////////////////////

$(document).ready(function() {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true
    });
});

/////////////////////

window.onscroll = function() {
    myFunction()
};

var header = document.getElementById("servicesSF");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
    if (window.location.href.indexOf("creation-video.php") != "-1") {
        document.getElementById("servicesSF").classList.remove("sticky");
    }
}

///////////////////

$(document).ready(function() {
    $("a.service-col").each(function() {
        if (this.href == window.location.href) {
            $(this).addClass("activee");
        }
    });
});

//////////////////

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}