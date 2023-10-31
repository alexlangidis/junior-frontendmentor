$(document).ready(function () {
    $('#day').change(validateDate);
    $('#month').change(validateDate);
    $('#year').change(validateDate);

    function validateDate() {
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        let currentMonth = currentDate.getMonth() + 1;
        let currentDay = currentDate.getDate();
        let birthYear = parseInt($('#year').val());
        let birthMonth = parseInt($('#month').val());
        let birthDay = parseInt($('#day').val());

        if (birthYear < 1900 || birthYear > currentYear) {
            $('.year-error').removeClass('hidden');
            $('#year-text').addClass('date-h3-text-error').removeClass('date-h3-text');
            $('#year').addClass('border-focus-error').removeClass('border-focus');
        } else{
            $('.year-error').addClass('hidden');
            $('#year-text').removeClass('date-h3-text-error').addClass('date-h3-text');
            $('#year').removeClass('border-focus-error').addClass('border-focus');
        }

        if (birthMonth < 1 || birthMonth > 12) {
            $('.month-error').removeClass('hidden');
            $('#month-text').addClass('date-h3-text-error').removeClass('date-h3-text');
            $('#month').addClass('border-focus-error').removeClass('border-focus');
        } else{
            $('.month-error').addClass('hidden');
            $('#month-text').removeClass('date-h3-text-error').addClass('date-h3-text');
            $('#month').removeClass('border-focus-error').addClass('border-focus');
        }
        

        if (birthDay < 1 || birthDay > 31 || birthDay > daysInMonth(birthMonth, birthYear)) {
            $('.day-error').removeClass('hidden');
            $('#day-text').addClass('date-h3-text-error').removeClass('date-h3-text');
            $('#day').addClass('border-focus-error').removeClass('border-focus');
        } else{
            $('.day-error').addClass('hidden');
            $('#day-text').removeClass('date-h3-text-error').addClass('date-h3-text');
            $('#day').removeClass('border-focus-error').addClass('border-focus');
        
        }

        let yearsDifference = currentYear - birthYear;
        let monthsDifference = currentMonth - birthMonth;
        let daysDifference = currentDay - birthDay;

        if (daysDifference < 0) {
            monthsDifference--;
            daysDifference += daysInMonth(currentMonth - 1, currentYear);
        }

        if (monthsDifference < 0) {
            yearsDifference--;
            monthsDifference += 12;
        }


        if($('#year').hasClass('border-focus-error')){
            $('#years-dif').html('--');
        }else{
            $('#years-dif').html(yearsDifference);
        }

        if($('#month').hasClass('border-focus-error')){
            $('#months-dif').html('--');
        }else{
            $('#months-dif').html(monthsDifference);
        }

        if($('#day').hasClass('border-focus-error')){
            $('#days-dif').html('--');
        }else{
            $('#days-dif').html(daysDifference);
        }
    }

    function daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }
});
