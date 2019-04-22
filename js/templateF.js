var searchData;
var idx = $('.inputField').val();
console.log(idx);
var url = "https://api.coingecko.com/api/v3/coins/"+idx;
var url2 = "https://api.coingecko.com/api/v3/coins/";

var $promise = $.ajax({
    url: url2,
    dataType: 'json',
    type: 'GET',
    data: searchData,
    success: function (response, status) {
        var obj = JSON.parse(JSON.stringify(response));
        //debugger;
        $.each(obj, function(i, e) {
            var q = obj.filter(el => {
                return el.symbol === idx;
              });
            //console.log("this is e: "+e.symbol + " here is i=> "+i);
            //console.log("this is query: " + q[i].name + " here is i=> "+i.name);
            list=
            `<li class="card col-3 list-inline-item mt-1">
            <div class="card-body">
            <h5 class="card-title" id="letters">${q[i].symbol}</h5>
            <span>
             <div class="col-sm-5 togglerBtn">
              <button type="button" class="btn btn-xs btn-primary btn-toggle" data-toggle="button" aria-pressed="false" autocomplete="off">
                <div class="handle"></div>
              </button>
            </div>
          </span>
        
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
        $("#table").empty().append(list);
        $('.inputField').val("");
        });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log('AJAX error:' + textStatus);
    }
});
