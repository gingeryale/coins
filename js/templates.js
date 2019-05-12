$('document').ready(function () {

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


// Ssection coin displays  
  $('.home, .cryptoniteLogo').on('click', function () {     
      $('.reports').removeClass('active');
      $('.about').removeClass('active');  
      $('.home').addClass('active');
    $.getScript('js/templateA.js');
  });
  
// BROKEN section live reports 
  $('.liveReports').on('click', function () {        
      $.getScript('js/templateR.js');
    });

// section about
    $('.about').on('click', function () { 
      $('#aboutContainer').empty();   
      $.getScript('js/templateL.js');
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