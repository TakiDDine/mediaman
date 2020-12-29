$('body #registrationform').submit(function() {

    var formData = new FormData();

    var fullname = $('#name').val();
    var email = $('#email').val();
    var project = $('#projet').val();
    var phone = $('#phone').val();
    var tellusmore = $('#tellusmore').val();
    var ProjectType = "";
    var Packagetype = "";

    $('.tchak.lowla:checkbox:checked').each(function() {
        var id = $(this).attr('id');
        ProjectType = ProjectType + " / " + id;
    });

    $('.tchak.taniya:checkbox:checked').each(function() {
        var id = $(this).attr('id');
        Packagetype = Packagetype + " / " + id;

    });


    formData.append('fullname', fullname);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('project', project);
    formData.append('tellusmore', tellusmore);
    formData.append('ProjectType', ProjectType);
    formData.append('Packagetype', Packagetype);


    $.ajax({
        url: 'php/index1.php',
        type: 'POST',
        processData: false, // important
        contentType: false, // important
        data: formData,
        cache: false,
        beforeSend: function() {
            $('.siftdakchi .fa').show();
            $('.siftdakchi').attr('disabled', true);
        },
        success: function(response) {
            $('.siftdakchi .fa').hide();
            $('#registrationform').trigger("reset");

            window.location.href = 'booking-confirmed';
        },
        error: function(response) {
            alert('an error! please try again');
            $('.siftdakchi').attr('disabled', false);
        }
    });

    return false;
});

$('.tchak:checkbox').click(function() {

    $('.tchak:checkbox:checked').each(function() {
        var id = $(this).attr('id');

        if ((id == "Brand") || (id == "Ecom") || (id == "local") || (id == "other")) {
            $("h3.ff1").addClass("sbagha");
            $(".sterwagef.ff1").addClass("sbagha1");
        }

        if ((id == "marketing") || (id == "videos") || (id == "design") || (id == "Branding") || (id == "Increasesales") || (id == "website")) {
            $("h3.ff2").addClass("sbagha");
            $(".sterwagef.ff2").addClass("sbagha1");
        }
    });

    var idd = "";
    $('.tchak:checkbox:not(:checked)').each(function() {
        idd = idd + $(this).attr('id');
        if (idd.includes("BrandEcomlocalother")) {
            idd = "";
            $("h3.ff1").removeClass("sbagha");
            $(".sterwagef.ff1").removeClass("sbagha1");
        }
        if (idd.includes("marketingvideosdesignBrandingIncreasesaleswebsite")) {
            idd = "";
            $("h3.ff2").removeClass("sbagha");
            $(".sterwagef.ff2").removeClass("sbagha1");
        }
    });

});


$(".textareatellusmore").on('change', function() {
    if ($(this).val().length != 0) {
        $("h3.ff3").addClass("sbagha");
        $(".sterwagef.ff3").addClass("sbagha1");
    } else {
        $("h3.ff3").removeClass("sbagha");
        $(".sterwagef.ff3").removeClass("sbagha1");
    }
});



$(".infotxt").on('change', function() {
    var id1;
    id1 = "";
    $('.infotxt').each(function() {

        if ($(this).val() != "") {
            id1 = id1 + $(this).attr('id');
            if (id1.includes("nameemailprojetphone")) {
                $("h3.ff4").addClass("sbagha");
                $(".sterwagef.ff4").addClass("sbagha1");
            } else {
                $("h3.ff4").removeClass("sbagha");
                $(".sterwagef.ff4").removeClass("sbagha1");
            }
        }

    });
});