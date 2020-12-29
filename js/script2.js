$('.modal').on('shown.bs.modal', function(e) {

    e.preventDefault();

    var hadii = this;

    $(document).ready(function() {
        $('.qty_selected option[value="1"]', hadii).attr("selected", true);
        $(".qty_selected", hadii).trigger("change");
    });

    $(".upsellcheck").prop("checked", false);
    $(".upsellcheck").trigger("change");


    var packpricc = 0,
        upsellpricc = 0;

    $('.modal-open .qty_selected').change(function() {
        var packname, qtypack, packprice, packtotal = 0;
        packpricc = 0;

        if ($(this).val() == 0) {
            $(".modal-open #infoprice").hide();
        } else {
            $(".modal-open #infoprice").show();
        }

        packname = $(this).attr("name");
        qtypack = $(this).val();
        packprice = $(this).attr("data-price");
        packtotal = packprice * qtypack;

        $(".modal-open .NAMEOFPACK").text(packname);
        $(".modal-open .QTYPACKS").text(qtypack);
        $(".modal-open .PACKPRICE").text(packtotal);

        packpricc = packtotal;
        calcultotalpack();
    });

    $('.modal-open .upsellcheck').change(function() {
        var upsell = "",
            qtyupsell = 0,
            upsellprice = 0,
            qtyupsellVideo = 0,
            upsellVideoprice = 0,
            qtyupselllanding = 0,
            upsellLandingprice = 0;

        upsellpricc = 0;

        $('.modal-open .sampleupsell:checkbox').each(function() {
            if ($(this).is(":checked")) {
                qtyupsell += 1;
                upsell = upsell + " / " + $(this).attr("id");
                upsellprice += parseInt($(this).val());
                $(".modal-open .QTYUPSELL").text(qtyupsell);
                $(".modal-open .UPSELLPRICE").text(upsellprice);

                if (qtyupsell != 0) {
                    $(".modal-open #divupsell").show();
                }
            } else if ($(this).is(":not(:checked)")) {
                if (qtyupsell == 0) {
                    $(".modal-open #divupsell").hide();
                }
            }
        });

        $('.modal-open .videoupsell:checkbox').each(function() {
            if ($(this).is(":checked")) {
                qtyupsellVideo += 1;
                upsell = upsell + " / " + $(this).attr("id");
                upsellVideoprice += parseInt($(this).val());
                upsellprice += upsellVideoprice;
                $(".modal-open .QTYVIDEOUPSELL").text(qtyupsellVideo);
                $(".modal-open .UPSELLVIDEOPRICE").text(upsellVideoprice);

                if (qtyupsellVideo != 0) {
                    $(".modal-open #divupsellvideo").show();
                }
            } else if ($(this).is(":not(:checked)")) {
                if (qtyupsellVideo == 0) {
                    $(".modal-open #divupsellvideo").hide();
                }
            }
        });

        $('.modal-open .landingupsell:checkbox').each(function() {
            if ($(this).is(":checked")) {
                qtyupselllanding += 1;
                upsell = upsell + " / " + $(this).attr("id");
                upsellLandingprice += parseInt($(this).val());
                upsellprice += upsellLandingprice;
                $(".modal-open .QTYLANDINGUPSELL").text(qtyupselllanding);
                $(".modal-open .UPSELLLANDINGPRICE").text(upsellLandingprice);

                if (qtyupselllanding != 0) {
                    $(".modal-open #divupselllanding").show();
                }
            } else if ($(this).is(":not(:checked)")) {
                if (qtyupselllanding == 0) {
                    $(".modal-open #divupselllanding").hide();
                }
            }
        });
        upsellpricc = upsellprice;
        calcultotalpack();
    });

    function calcultotalpack() {
        var totalpack = 0;
        totalpack = upsellpricc + packpricc;
        $(".modal-open .TOTALPACKPRICE").text(totalpack);
    }


    $('#formpackecom', this).submit(function(e) {

        var formData = new FormData();

        e.preventDefault();
        e.stopPropagation();

        var fullname = $('.fullname', this).val();
        var phone = $('.mobile', this).val();
        var email = $('.email', this).val();
        var pack = $('.qty_selected', this).attr("name") + " = " + $('.qty_selected', this).val();
        var packprice = packpricc;
        var upsellprice = upsellpricc;
        var upsell = "";
        var coupon = $('.couponcode', this).val();

        $('.upsellcheck:checkbox', this).each(function() {
            if ($(this).is(":checked")) {
                upsell = upsell + " / " + $(this).attr("name");
            }
        });

        //alert(fullname + phone + email + pack + packprice + upsellprice + upsell);


        formData.append('fullname', fullname);
        formData.append('phone', phone);
        formData.append('email', email);
        formData.append('pack', pack);
        formData.append('upsell', upsell);
        formData.append('packprice', packprice);
        formData.append('upsellprice', upsellprice);
        formData.append('coupon', coupon);


        $.ajax({
            url: 'php/index.php',
            type: 'POST',
            processData: false, // important
            contentType: false, // important
            data: formData,
            cache: false,
            beforeSend: function() {
                $('#ecompacks svg').show();
                $('#ecompacks').attr('disabled', true);
            },
            success: function(response) {
                $('#ecompacks .fa').hide();
                $('body #formpackecom').trigger("reset");
                window.location.href = 'thank-you.php';
            },
            error: function(response) {
                alert('an error! please try again');
                $('#formpackecom').attr('disabled', false);
            }
        });

        return false;
    });
})

//////////////////////

$(document).ready(function() {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true
    });
});

////////////////////

$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});

//////////////////

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}