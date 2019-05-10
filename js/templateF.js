//$.getScript('js/templateU.js');
var searchData;
var idx = $('.inputField').val().toLowerCase();
console.log(idx);

$('#loadingDiv').show();
var url = "https://api.coingecko.com/api/v3/coins/"+idx;
var url2 = "https://api.coingecko.com/api/v3/coins/";

var contents = $('.userSelection_array').toArray().map(elem => elem.innerHTML);
var searchCondition = contents.findIndex(el => el==idx);
$('.searchBtn').on('click', function () { 
  if(searchCondition !== -1){
  console.log("found");
  ff();
  }else{
    $("#searchResult").empty().html('<h3>Coin not selected from list above.</h3>');
  };
});

 var ff = function(){
  var $promise = $.ajax({
  url: url2,
  dataType: 'json',
  type: 'GET',
  data: searchData,
  
  success: function (response, status) {
      var obj = JSON.parse(JSON.stringify(response));
      $('#loadingDiv').hide();

      $.each(obj, function(i, e) {
          var q = obj.filter(el => {
              return el.symbol === idx;
            });
          //console.log("this is e: "+e.symbol + " here is i=> "+i);
          //console.log("this is query: " + q[i].name + " here is i=> "+i.name);
          if(q.length !== 0){
            list1=
            `<li class="card list-inline-item mt-1 centralSearch">
            <div class="card-body">
            <h5 class="card-title" id="letters">${q[i].symbol}</h5>
            
        
          <p class="card-text">${q[i].name}</p>
        
          <button data-toggle="collapse" data-id="${q[i].id}" data-target="#demo" class="btn btn-primary btn-sm">See More</button>
        
          <div id="demo" class="collapse ${q[i].symbol}">
           

          <img src="${q[i].image.thumb}" width="25px">
          <ul>
          <li id="USD" class="price">$ ${q[i].market_data.current_price.usd}</li>
          <li id="EUR" class="price">€ ${q[i].market_data.current_price.eur}</li>
          <li id="ILS" class="price">₪ ${q[i].market_data.current_price.ils}</li>
          </ul>
          </div>
        </div>
        </li>`;
        $("#searchResult").empty().append(list1);
        $(".showSearchResult").addClass('list-inline-item mt-1 col-md-3');

        //$('.userSelection_array').text(selection);

        $("#searchResult").val("");
          } else {
            $("#searchResult").empty().html('<h3>Error: Could not find coin with the given id.</h3>');
            console.log(Error);
          }
      });
  },
  error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log('AJAX error:' + textStatus);
      $("#searchResult").empty().html('<h3>Error: A server error occurred.</h3>');

  }
});

}
