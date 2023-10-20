$(document).ready(function () {
 
    $('.menu-ham, .menu-close').click(function (e) { 
        e.preventDefault();
        $('.menu-sidebar').toggleClass('hidden grid animate__slideInDown');
    });

});