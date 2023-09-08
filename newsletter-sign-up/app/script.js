$(document).ready(function () {

    
    
    $('#submitBtn').click(function (e) { 
        e.preventDefault();
        
        let email = $('#input-email').val();

        // Regular expression to validate email format
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if(emailPattern.test(email)) {
            $('#input-email').removeClass('error');
            $('#email-error').addClass('hidden');
            $('.container').addClass('hidden');
            $('.container-success').removeClass('hidden');
            confirmMessage(email);
        }else{
            $('#input-email').addClass('error');
            $('#email-error').removeClass('hidden');
        }

    });


    function confirmMessage(email) {
        let message = $('#confirmMessage').html(`A confirmation email has been sent to <b>${email}</b>. Please
            open it and click the button inside to confirm your subscription.`);
    }

    $('#dismissBtn').click(function (e) { 
        e.preventDefault();
        location.reload();
    });



});