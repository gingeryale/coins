import from './templateA.js'
var data = '';
var url = 'https://api.coingecko.com/api/v3/coins/';

var $promise = $.ajax({
    url: url,
    dataType: 'json',
    type: 'GET',
    data: data,
    success: function (response, status) {
        // console.log('AJAX success: ' + JSON.stringify(response));
        var arr = JSON.parse(JSON.stringify(response));
        $.each(arr, function(i, e) {
            var content = 'Title : '+e.id ;
        content += ' Year : '+e.symbol ;
        content += ' Rated : '+e.name ;
        content += ' TROUBLE : '+ e.market_data.current_price.usd ;
        $(".dataCall").append(content);
      //$(".dataCall").append(JSON.stringify(response));
        });
       
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log('AJAX error:' + textStatus);
    }
});



$(document).ready(function() {
    $('#some-menu').load('some-local-path/menu.html');
});