

$('document').ready(function () {
    // todo remove this line
    $('#loadingDiv').hide();
    $.ajaxSetup({
        beforeSend: function() {
           $('#loadingDiv').show();
        },
        complete: function(){
           $('#loadingDiv').hide();
        },
        success: function() {}
      });

    
    $('.home, .cryptoniteLogo').on('click', function () {     
        $('.reports').removeClass('active');
        $('.about').removeClass('active');  
        $('.home').addClass('active'); 
        $('#table').empty();  
      $.getScript('js/templateA.js');
    });

    $('.reports').on('click', function () { 
        $('.home').removeClass('active');
        $('.about').removeClass('active');
        $.getScript('js/templateB.js');
        $('.reports').addClass('active');
      });

      $('.about').on('click', function () { 
        $('.home').removeClass('active');
        $('.reports').removeClass('active');     
        $.getScript('js/templateC.js');
        $('.about').addClass('active');
      });

      $('.searchBtn').on('click', function () { 
        $('#table').empty();    
        if($('.inputField').val()==" "){
          alert("search field can't be empty");
          $.getScript('js/templateA.js');
      }    else{
        $.getScript('js/templateF.js');
      }
      });


      $("input[name='coins']").click(function () { 
        $.getScript('js/templateU.js');
      });

  });