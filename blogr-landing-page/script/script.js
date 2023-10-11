$(document).ready(function () {
    
    
    $('.connect').click(function (e) { 
        e.preventDefault();
        $('.connect-expand, .connect-expand-mobile').toggleClass('active');
        $('.arrowUp').toggleClass('arrow');
    });


    $('.hamburger-menu').click(function (e) { 
        e.preventDefault();
        $('.open, .close, .mobile-nav').toggleClass('hidden');
    });
});

