$(document).ready(function () {
    
    
    $('.btn-form').click(function (e) { 
        e.preventDefault();
        let email = $('#email').val();

        IsEmail(email);
    });


    function IsEmail(email) {
        const regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!regex.test(email)) {
            $('.email-error').removeClass('hidden');
            return false;
        }
        else {
            $('.email-error').addClass('hidden');
            return true;
        }
    }
});