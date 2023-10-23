$(document).ready(function () {
    


     $('.range').change (function() {
        refreshPrices();
        updateRangeBackground();
      });



      $('.myCheckBox').change(function() {
        refreshPrices();
      });


      

    function refreshPrices(){
        let range = $('.range').val();
        let pageView = $('.pageViews');
        let month = `<span class="text-[1rem] text-[var(--GrayishBlue)] font-light">
        / month</span>`
        let year = `<span class="text-[1rem] text-[var(--GrayishBlue)] font-light">
        / year</span>`
    
        if(range == 0){
            if($('.myCheckBox').is(':checked')){
                $('.priceFixed').html(`$72.00&nbsp; ${year}`);
            }else{
                $('.priceFixed').html(`$8.00&nbsp; ${month}`);
            }
            pageView.html('10k Pageviews');
         }

        if(range == 1){
            if($('.myCheckBox').is(':checked')){
                $('.priceFixed').html(`$108.00&nbsp; ${year}`);
            }else{
            $('.priceFixed').html(`$12.00&nbsp; ${month}`);
             }
             pageView.html('50k Pageviews');
        }

        if(range == 2){
            if($('.myCheckBox').is(':checked')){
                $('.priceFixed').html(`$144.00&nbsp; ${year}`);
            }else{
            $('.priceFixed').html(`$16.00&nbsp; ${month}`);
             }
             pageView.html('100k Pageviews');
        }

        if(range == 3){
            if($('.myCheckBox').is(':checked')){
                $('.priceFixed').html(`$216.00&nbsp; ${year}`);
            }else{
            $('.priceFixed').html(`$24.00&nbsp; ${month}`);
             }
             pageView.html('500k Pageviews');
        }

        if(range == 4){
            if($('.myCheckBox').is(':checked')){
                $('.priceFixed').html(`$324.00&nbsp; ${year}`);
            }else{
            $('.priceFixed').html(`$36.00&nbsp; ${month}`);
             }
             pageView.html('1M Pageviews');
        }
    }

    
    function updateRangeBackground() {
        $('.range').each(function() {
          var value = parseInt($(this).val());
          var percentage = (value * 25);
          $(this).css('background', 'linear-gradient(to right, var(--SoftCyan), var(--SoftCyan) ' + percentage + '%,  var(--VeryPaleBlue) ' + percentage + '%,  var(--VeryPaleBlue) 100%)');
          
        });
      }
    

    


     
});