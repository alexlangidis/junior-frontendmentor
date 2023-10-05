$(document).ready(function () {
    
    
    
    $('.dropdown').click(function (e) { 
        e.preventDefault();
        $(this).find('#arrow').toggleClass('rotate-180 duration-300');
        toggleSubMenu(this);
    });
    
    function toggleSubMenu(dropdown) {
        $(dropdown).find('.sub-menu').toggleClass('hidden');
    }
    

    $('.dropdown-mobile').click(function (e) { 
        e.preventDefault();
        $(this).find('#arrow').toggleClass('rotate-180 duration-300');
        toggleSubMenuMobile(this);
    });
    
    function toggleSubMenuMobile(dropdown) {
        $(dropdown).find('.sub-menu-mobile').toggleClass('hidden');
    }

    // $('.open').click(function (e) { 
    //     e.preventDefault();
    //     $('.mobile-menu').toggleClass('hidden flex');
    //     $('.overflow').toggleClass('hidden flex');
    // });

    // $('.close').click(function (e) { 
    //     e.preventDefault();
    //     $('.mobile-menu').toggleClass('hidden flex');
    //     $('.overflow').toggleClass('hidden flex');
    // });

    function toggleMenu() {
        $('.mobile-menu, .overflow').toggleClass('hidden flex animate__fadeInDown');
    }
    
    $('.open, .close').click(function (e) {
        e.preventDefault();
        toggleMenu();
    });
    
});