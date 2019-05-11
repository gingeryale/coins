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
      // initial load hide sections
      $('.showAboutContainer').hide();
      $('#chartContainer').hide();
      $('.userSelection_section').hide();
      $('#searchResult').hide();



// Ssection coin displays  
    $('.home, .cryptoniteLogo').on('click', function () {     
        $('.reports').removeClass('active');
        $('.about').removeClass('active');  
        $('.home').addClass('active'); 
        $('#table').empty();  
      $.getScript('js/templateA.js');
    });
// BROKEN section live reports 
    $('.liveReports').on('click', function () { 
      $('#chartContainer').show();
        $('.home').removeClass('active');
        $('.about').removeClass('active');
        $('.reports').addClass('active');
        $('#chartContainer').addClass('showChartContainer');
        $('#searchResult').show();

        $.getScript('js/templateR.js');
      });
// section about
      $('.about').on('click', function () { 
        $('#chartContainer').hide();
        $('#table').hide(); 
        $('.showAboutContainer').show();
        $('.home').removeClass('active');
        $('.reports').removeClass('active');     
        $.getScript('js/templateL.js');
        $('.about').addClass('active');
      });
// SEMI-FUNCTIONAL section for searh form
      $('.searchBtn').on('click', function () { 
        if($('.inputField').val().length === 0 ){
          alert("search field can't be empty");
      }    else{
        $.getScript('js/templateF.js');
      }
      });

// section user selected coin
      $("input[name='coins']").click(function () { 
        $.getScript('js/templateU.js');
      });
  });