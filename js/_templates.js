$(document).ready(function() {
    $('#table').load('js/home.js');


    $('.nav-link').click(function(){
        let template = $(this).attr('href');

        $('#table').load('js/'+template + '.js');
    });
});