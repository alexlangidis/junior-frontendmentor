$(document).ready(function () {
    

    // $(".mobile-menu").click(function (e) { 
    //     e.preventDefault();
    //     if($('.ham').hasClass('open')){
    //         $('.ham').addClass('hidden');
    //         $('.close').removeClass('hidden');
    //         $('.ham').removeClass('open');
    //     }else{
    //         $('.ham').addClass('open');
    //         $('.close').addClass('hidden');
    //         $('.ham').removeClass('hidden');
    //     }

    //     $('.mobile-menu-container').toggleClass('hidden');
    // });


    $(".mobile-menu").click(function(e) {
        e.preventDefault();
        $('.ham').toggleClass('hidden open');
        $('.close').toggleClass('hidden');
        $('.mobile-menu-container').toggleClass('hidden');
    });
    

});