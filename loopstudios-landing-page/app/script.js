$(document).ready(function () {
    

    $('.open').click(function (e) { 
        e.preventDefault();
        $('.nav-top-mobile').toggleClass('hidden animate__slideInRight');
    });

    $('.close').click(function (e) { 
        e.preventDefault();
        $('.nav-top-mobile').toggleClass('hidden animate__slideInRight');
    });
});