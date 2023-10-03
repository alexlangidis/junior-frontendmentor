$(document).ready(function () {

    const users = ['tanya', 'john']
    
    let slide = 0;

    const navigation = () => {
        // Check slide value
        if(slide > users.length-1){
            slide = 0;
        }
        $('[data-id="1"]').toggleClass('hidden');
        $('[data-id="2"]').toggleClass('hidden');
        slide++;
    }
    
    
    $('#next, #prev').click(navigation);


});