$.getScript('js/templateU.js');
var searchData;
var idx = $('.inputField').val().toLowerCase();
console.log(idx);

$('#loadingDiv').show();
var url = "https://api.coingecko.com/api/v3/coins/"+idx;
//var url2 = "https://api.coingecko.com/api/v3/coins/";

var contents = $('.userSelection_array').toArray().map(elem => elem.innerHTML);
var searchCondition = contents.findIndex(el => el==idx);
$('.searchBtn').on('click', function () { 
  if(searchCondition !== -1){
  console.log("found");
  ff();
  }else{
    $("#searchResult").empty().html('<h3>Error: Could not find coin with the given id.</h3>');
  };
});

 var ff = function(){
  var $promise = $.ajax({
  url: url,
  dataType: 'json',
  type: 'GET',
  data: searchData,
  
  success: function (response, status) {
      var obj = JSON.parse(JSON.stringify(response));
      $('#loadingDiv').hide();

      $.each(obj, function(i, e) {
       // debugger;
          var q = obj.filter(el => {
              return el.symbol === idx;
            });
          console.log("this is eeee: "+e.symbol + " here is i=> "+ e.id);
          console.log("this is qqq query: " + q[i].name + " here is i=> "+ q[i].symbol);
          if(q.length !== 0){
            list1=
            `<li class="card list-inline-item mt-1 centralSearch">
            <div class="card-body">
            <h5 class="card-title" id="letters">${e.symbol}</h5>
            
            <span>
             <div class="col-sm-5 togglerBtn form">
             <label><input onclick="addCoin()" id="${e.symbol}" data-target="${e.symbol}" type="checkbox" class="ios-switch tinyswitch" name="coins" value="${e.symbol}" /><div><div></div></div></label>
            </div>
          </span>
        
          <p class="card-text">${e.name}</p>
        
          <button data-toggle="collapse" data-id="${e.id}" data-target="#demo" class="btn btn-primary btn-sm">See More</button>
        
          <div id="demo" class="collapse ${e.symbol}">
           

          <img src="${e.image.thumb}" width="25px">
          <ul>
          <li id="USD" class="price">$ ${e.market_data.current_price.usd}</li>
          <li id="EUR" class="price">€ ${e.market_data.current_price.eur}</li>
          <li id="ILS" class="price">₪ ${e.market_data.current_price.ils}</li>
          </ul>
          </div>
        </div>
        </li>`;
        $("#searchResult").empty().append(list1);
        $(".showSearchResult").addClass('list-inline-item mt-1 col-md-3');

        //$('.userSelection_array').text(selection);
            // empty the input field after search
        $(".inputField").val("");
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
function addCoin(){
  console.log("clicked");
}