$(document).ready(function () {
    

   $('#selector-bar').click(function (e) { 
    e.preventDefault();
    $('.monthly').toggle();
    $('.annually').toggle();


    if ($('#selector-bar').css('justify-content') === 'flex-end') {
        $('#selector-bar').css('justify-content', 'flex-start');
      } else {
        $('#selector-bar').css('justify-content', 'flex-end');
      }

   });

});