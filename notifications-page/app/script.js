$(document).ready(function () {
    

    $('.read-all').click(function (e) { 
        e.preventDefault();

        $('.notification').removeClass('unread');
        $('.notif-dot').addClass('hidden');
        $('.notif-count').html('0');
    });


    $('.unread').click(function (e) { 
        e.preventDefault();

        let unreadMessages = $('.unread');
        
        if($(this).hasClass('unread')){
            $(this).removeClass('unread');
            $(this).find('.notif-dot').addClass('hidden');
            $('.notif-count').html(unreadMessages.length-1);
        }
    });



});