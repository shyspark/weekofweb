$(document).ready(function() {
    $('#b1').click(function() {
        $('#red').fadeOut('slow');
    });
       $('#tree').mouseenter(function() {
       $(this).fadeOut('slow');

    }); 
           $('#b2').click(function() {
        $('#red').fadeIn('slow');
        $('#tree').fadeIn('slow');
    });

});