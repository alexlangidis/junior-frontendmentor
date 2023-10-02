$(document).ready(function () {
    
    
    $('.switch').change(function (e) { 
        e.preventDefault();
       darkMode();
    });

    function darkMode(){
        $('body').toggleClass('dark white');
        $('.header-top').toggleClass('header-bg-dark header-bg-white');
        $('.follower-box').toggleClass('dark-card-bg white-card-bg');
        $('.stats-box').toggleClass('dark-card-bg white-card-bg');
        $('#toggle-bg').toggleClass('bg-gradient-to-r from-[#378fe6] via-[#3ed0da] to-[#3eda82] bg-[var(--Toggle)]')
    }


});