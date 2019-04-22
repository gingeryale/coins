

$('document').ready(function () {

    $.ajaxSetup({
        beforeSend: function() {
           $('#loadingDiv').show();
        },
        complete: function(){
           $('#loadingDiv').hide();
        },
        success: function() {}
      });

    
    $('.home').on('click', function () {
      
     // $('#table').html('<img src="https://bit.ly/2pSPf52">');
      
  
      $.getScript('js/home.js');
      $('.home').addClass('active');
    });
  });