

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

      $('.showAboutContainer').hide();
      $('#chartContainer').hide();
  
    $('.home, .cryptoniteLogo').on('click', function () {     
        $('.reports').removeClass('active');
        $('.about').removeClass('active');  
        $('.home').addClass('active'); 
        $('#table').empty();  
      $.getScript('js/templateA.js');
    });

    $('.liveReports').on('click', function () { 
      $('#chartContainer').show();
        $('.home').removeClass('active');
        $('.about').removeClass('active');
        $('.reports').addClass('active');
        $('#chartContainer').addClass('showChartContainer');
        $.getScript('js/templateR.js');
      });

      $('.about').on('click', function () { 
        $('#chartContainer').hide();
        $('#table').hide(); 
        $('.showAboutContainer').show();
        $('.home').removeClass('active');
        $('.reports').removeClass('active');     
        $.getScript('js/templateL.js');
        $('.about').addClass('active');
      });

      $('.searchBtn').on('click', function () { 
        if($('.inputField').val().length === 0 ){
          alert("search field can't be empty");
      }    else{
        $.getScript('js/templateF.js');
      }
      });


      $("input[name='coins']").click(function () { 
        $.getScript('js/templateU.js');
      });

  });