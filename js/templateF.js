//$.getScript('js/templateU.js');
var searchData;
var idx = $('.inputField').val().toLowerCase();
$('#loadingDiv').load('index-1.html#loadingDiv');
$('#liveReports').load('index-1.html#liveReports');
$('#loadingDiv').show();
var url = "https://api.coingecko.com/api/v3/coins/"+idx;
var url2 = "https://api.coingecko.com/api/v3/coins/";

$('#liveReports').on('click', function(){
  var selection = sessionStorage.getItem('selection');
  console.log(selection);
});

var $promise = $.ajax({
    url: url2,
    dataType: 'json',
    type: 'GET',
    data: searchData,
    
    success: function (response, status) {
        var obj = JSON.parse(JSON.stringify(response));
        $('#loadingDiv').hide();

        $.each(obj, function(i, e) {

            var q = obj.filter(ee => {
                return ee.symbol === idx;
              });
              console.log(q);
              console.log(q[0].symbol);

            //console.log("this is e: "+e.symbol + " here is i=> "+i);
            //console.log("this is query: " + q[i].name + " here is i=> "+i.name);
            if(q.length !== 0){
              list=
              `<li class="card list-inline-item mt-1 centralSearch">
              <div class="card-body">
              <h5 class="card-title" id="letters">${q[0].symbol}</h5>
              
          
            <p class="card-text">${q[0].name}</p>
          
            <button data-toggle="collapse" data-id="${q[0].id}" data-target="#demo" class="btn btn-primary btn-sm">See More</button>
          
            <div id="demo" class="collapse ${q[0].symbol}">
             
  
            <img src="${q[0].image.thumb}" width="25px">
            <ul>
            <li id="USD" class="price">$ ${q[0].market_data.current_price.usd}</li>
            <li id="ILS" class="price">₪ ${q[0].market_data.current_price.ils}</li>
            <li id="EUR" class="price">€ ${q[0].market_data.current_price.eur}</li>
            </ul>
            </div>
          </div>
          </li>`;
          $("#searchResults").empty().append(list);
          $('.userSelection_array').text(selection);

          $('.inputField').val("");
            } else {
              $("#searchResults").empty().html('<h3>Error: Could not find coin with the given id.</h3>');
              console.log(Error);
            }
        });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log('AJAX error:' + textStatus);
        $("#table").empty().html('<h3>Error: A server error occurred.</h3>');

    }
});

