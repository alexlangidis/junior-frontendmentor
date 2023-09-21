$(document).ready(function () {
    

    $('#menu-icon').click(function (e) { 
        e.preventDefault();
        $('.menu-mobile').toggleClass('active');
    });

        // Listen for clicks on the body
        $('body').click(function(event) {
            var menu = $('.menu-mobile');
            var menuIcon = $('#menu-icon');
    
            // Check if the clicked element is outside the menu and menu icon
            if (!menu.is(event.target) && !menuIcon.is(event.target) && menu.hasClass('active')) {
                menu.removeClass('active');
            }
        });
});