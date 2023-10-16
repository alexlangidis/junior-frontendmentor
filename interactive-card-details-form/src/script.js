$(document).ready(function () {


    
    $('#submit_btn').click(function(e) {
        e.preventDefault();
    
        // Flag to track if there are any errors
        let hasErrors = false;
    
        // Iterate over each input in the form
        $('form input').each(function() {
            let inputVal = $(this).val();
    
            // Check if the input is empty or doesn't meet a specific criterion
            if (inputVal.trim() === '') {
                alert('Please fill in all fields.');
                hasErrors = true;  // Set the flag to true if there's an error
                return false;  // Stop the loop
            }else if ($('input').hasClass('errorMessage')) {
                alert('Please fill the form correctly');
                hasErrors = true;  // Set the flag to true if there's an error
                return false;  // Stop the loop
            } else{
                return;
            }
        });
    
        // If no errors, proceed
        if (!hasErrors) {
            $('form').addClass('hidden');
            $('.thanks').removeClass('hidden');
        }
    });
    

    $('.continue').click(function (e) { 
        e.preventDefault();
        location.reload(true);
    });



    $('#card-name').keyup(function (e) { 
        let inputVal = $(this).val();
        $('#name').text(inputVal);

    });

    $('#card-number').keyup(function (e) { 
        let inputVal = $(this).val();
        inputVal = inputVal.replace(/(\d{4})/g, '$1 ');  // Add a space every 4 digits
        $('#number').text(inputVal);

    });
    

    $('#card-month').focusout(function (e) { 
        let inputVal = $(this).val();

        if (inputVal.length == '') {
            $('#card-month').addClass('errorMessage border-[var(--Red)] outline-[var(--Red)]');
        } 
        else{
            $('#card-month').removeClass('errorMessage border-[var(--Red)] outline-[var(--Red)]');
        }

        if (inputVal >= 1 && inputVal <= 9) {
            inputVal = (`0${inputVal}`);
            $(this).val(inputVal);
        }

        $('#month').text(inputVal);
    
        if (inputVal < 1 || inputVal > 12) {
            alert('Please enter a valid month (between 1 and 12).');
        }
    });
    

    $('#card-year').focusout(function (e) { 
        let inputVal = $(this).val();
        $('#year').text(inputVal);

        if (inputVal.length == '') {
            $('#card-year').addClass('errorMessage border-[var(--Red)] outline-[var(--Red)]');
        } 
        else{
            $('#card-year').removeClass('errorMessage border-[var(--Red)] outline-[var(--Red)]');
        }
    });


    $('#card-cvc').keyup(function (e) { 
        let inputVal = $(this).val();
        $('#cvc').text(inputVal);
    });


// Input Max Length function

    function handleInputMaxLength(inputVal, maxLength){
        $(inputVal).on( 'input', function() {
            let inputVal = $(this).val();
            
            if (inputVal.length > maxLength) {
                $(this).val(inputVal.slice(0, maxLength));
              }
        });
    }

    handleInputMaxLength('#card-name', 22);
    handleInputMaxLength('#card-number', 16);
    handleInputMaxLength('#card-month', 2);
    handleInputMaxLength('#card-year', 2);
    handleInputMaxLength('#card-cvc', 3);



// Input errorMessage on input Focus Out

    let errorMessageDisplayed = false;


    $('#card-name').on('focusout', function() {
        let inputVal = $(this).val();
        let errorMessage = "Can not be blank";

            // Remove any existing error message span
         $(this).siblings('span.errorMessage').remove();

        if (inputVal.length == '') {
            $('#card-name').addClass('errorMessage border-[var(--Red)] outline-[var(--Red)]');
            $(this).after(`<span class="errorMessage">${errorMessage}</span>`);
            errorMessageDisplayed = true; // Set the flag to true

        } else{
            $('#card-name').removeClass('errorMessage border-[var(--Red)] outline-[var(--Red)]');
            errorMessageDisplayed = false;
        }
    });



    $('#card-number').on('focusout', function() {
        let expectedLength = 16;
        let inputVal = $(this).val();
        let errorMessage = "Can not be blank";
        let errorMessage1 = "Card number should be 16 digits";

            // Remove any existing error message span
         $(this).siblings('span.errorMessage').remove();

        if (inputVal.length == '') {
            $('#card-number').addClass('errorMessage border-[var(--Red)] outline-[var(--Red)]');
            $(this).after(`<span class="errorMessage">${errorMessage}</span>`);
            errorMessageDisplayed = true; // Set the flag to true

        } else if (inputVal.length !== expectedLength) {
            $('#card-number').addClass('errorMessage border-[var(--Red)] outline-[var(--Red)]');
            $(this).after(`<span class="errorMessage">${errorMessage1}</span>`);
            errorMessageDisplayed = true; // Set the flag to true
        }else{
            $('#card-number').removeClass('errorMessage border-[var(--Red)] outline-[var(--Red)]');
            errorMessageDisplayed = false;
        }
    });


    $('#card-cvc').on('focusout', function() {
        let expectedLength = 3;
        let inputVal = $(this).val();
        let errorMessage = "Can not be blank";
        let errorMessage1 = "CVC should be 3 digits.";

            // Remove any existing error message span
         $(this).siblings('span.errorMessage').remove();

        if (inputVal.length == '') {
            $('#card-cvc').addClass('errorMessage border-[var(--Red)] outline-[var(--Red)]');
            $(this).after(`<span class="errorMessage">${errorMessage}</span>`);
            errorMessageDisplayed = true; // Set the flag to true


        } else if (inputVal.length !== expectedLength) {
            $('#card-cvc').addClass('errorMessage border-[var(--Red)] outline-[var(--Red)]');
            $(this).after(`<span class="errorMessage">${errorMessage1}</span>`);
            errorMessageDisplayed = true; // Set the flag to true
        }else{
            $('#card-cvc').removeClass('errorMessage border-[var(--Red)] outline-[var(--Red)]');
            errorMessageDisplayed = false;
        }
    });





});