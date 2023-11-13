$(document).ready(function () {


    //Mobile menu function

    $('.icon-hamburger, .icon-close-menu').click(function (e) { 
        e.preventDefault();
        $('.icon-hamburger, .icon-close-menu').toggleClass('hidden');

        if($('.mobile-menu-nav').hasClass('hidden')){
            $('.mobile-menu-nav').removeClass('hidden');
        }
        else{
            $('.mobile-menu-nav').addClass('hidden');
        }
    });
    


    // Bookmark Button 

    let bookmark = $('.bookmark');

    $(".btn__bookmark").mouseenter(function() {
        if (!$(this).hasClass('clicked')) {
            bookmark.attr('src', '../crowdfunding-product-page/images/icon-bookmark-gray.svg');
        }
    });
    
    $(".btn__bookmark").mouseleave(function() {
        if (!$(this).hasClass('clicked')) {
            bookmark.attr('src', '../crowdfunding-product-page/images/icon-bookmark.svg');
        }
    });
    
    $(".btn__bookmark").click(function() {
        $(this).toggleClass('clicked');
        if ($(this).hasClass('clicked')) {
            bookmark.attr('src', '../crowdfunding-product-page/images/icon-bookmark-green.svg');
            $('#bookmark-text').html('Bookmarked').css('color', 'hsl(176, 72%, 28%)');
        } else {
            bookmark.attr('src', '../crowdfunding-product-page/images/icon-bookmark.svg');
            $('#bookmark-text').html('Bookmark').css('color', 'hsl(0, 0%, 48%)');
        }
    });



    //Open Modal
    $('.openModal').click(function (e) { 
        e.preventDefault();
        $('.modal__project').fadeIn().removeClass('hidden');
        $(".master-container").css('filter','blur(10px)')
    });

    

        //Select Modal column 

        $("input[name='pledgeOption']").change(function () {
            // Remove 'active' class from all columns
            $(".selection__column").removeClass("active");
            $(".pledge").removeClass("active");

            // Add 'active' class to the parent of the selected radio button
            let selectedColumn = $(this).closest(".selection__column");
            selectedColumn.addClass("active");
            
            // Add 'active' class to the .pledge inside the selected column
            selectedColumn.find(".pledge").addClass("active");
        });

        // Close Modal Columns

        $('#closeModal').click(function (e) { 
            e.preventDefault();
            $(".master-container").css('filter','blur()')
            $(".modal__project").fadeOut();
        });



        //Open Thank You modal


        $('.btn__continue').click(function (e) { 
            e.preventDefault();
            if($("input[name='pledge']").val() == null){
                alert('Enter a correct value');
            }else{
                $('.modal__project').fadeOut().addClass('hidden');
                $('#modalOverlay').removeClass('hidden');
            }

        });

            
        // Close Thank You modal
        $("#btn__thanks").click(function() {
            $(".master-container").css('filter','blur()')
            $("#modalOverlay").fadeOut();
            location.reload(true);
        });




        $("input[name='pledge']").on('input', function () {
            // Remove existing "$" and non-numeric characters
            let value = $(this).val().replace(/[^\d.]/g, '');
            
            // Add "$" to the beginning of the value
            value = '$' + value;
            
            // Update the input value
            $(this).val(value);
        });

});