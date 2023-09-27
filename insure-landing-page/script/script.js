$(document).ready(function () {
    

    $('.menu-mobile').click(function (e) { 
        e.preventDefault();
        $('.ham').toggleClass('hidden');
        $('.close').toggleClass('hidden animate__fadeOut');
        $('.menu-mobile-container').toggleClass('hidden animate__fadeIn');
    });
});