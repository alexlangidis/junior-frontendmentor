$(document).ready(function() {
    let selectedTip = 0;
    let billAmount;
    let numberOfPeople;
    
  
    $('.bill-input').on('input', function() {
      billAmount = parseFloat($(this).val());
      calculateTip();
    });
  
    $('.people-input').on('input', function() {
      numberOfPeople = parseFloat($(this).val());
      calculateTip();
    });
  
    $('.tips').click(function() {
      selectedTip = parseFloat($(this).attr('value'));
      $('.tips').removeClass('active-tip');
      $(this).addClass('active-tip');
      calculateTip();
    });
  
    $('.custom-input').on('input', function() {
      selectedTip = parseFloat($(this).val());
      $('.tips').removeClass('active-tip');
      calculateTip();
    });
  
    function calculateTip() {
      if (!billAmount || !numberOfPeople) {
        return;
      }
  
      let tipAmount = billAmount * (selectedTip / 100);
      let totalAmount = billAmount + tipAmount;
      let tipAmountPerPerson = tipAmount / numberOfPeople;
      let totalAmountPerPerson = totalAmount / numberOfPeople;
  
      $('.tip-amount-result').text('$' + tipAmountPerPerson.toFixed(2));
      $('.total-result').text('$' + totalAmountPerPerson.toFixed(2));
    }


    $('.people-input').keyup(function() {
        const peopleValue= $(this)

        if ((peopleValue.val() != '') && (peopleValue.val() == 0)) {
            $('.error').css('display', 'block');
        }
        else {
            $('.error').css('display', 'none');
        }
    });

    // Reset the calculation on reset button click
    $('button[type="reset"]').click(function() {
        $('.bill-input').val('');
        $('.people-input').val('');
        selectedTip = 0;
        $('.tips').removeClass('active-tip');
        $('.tip-amount-result').text('$0.00');
        $('.total-result').text('$0.00');
    });


  });
  