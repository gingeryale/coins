//$.getScript('js/templateU.js');
var data;
var url = 'https://api.coingecko.com/api/v3/coins/list';
$('#loadingDiv').show();
$('.home').addClass('active');

var $promise = $.ajax({
    url: url,
    dataType: 'json',
    type: 'GET',
    data: data,
    success: function (response, status) {
        var arr = JSON.parse(JSON.stringify(response));
        arr.length=48;
        $('#loadingDiv').hide();

        $.each(arr, function(i, e) {
            list=`<li class="card list-inline-item mt-1 col-md-3">
            <div class="card-body">
            <h5 class="card-title" id="letters">${e.symbol}</h5>
    
            <span>
             <div class="col-sm-5 togglerBtn form">
             <!--<label><input onclick="buildArr('${e.symbol}')" id="${e.symbol}" type="checkbox" class="ios-switch tinyswitch" name="coins" value="${e.symbol}" /><div><div></div></div></label>-->
             <label><input onclick="addCoin()" id="${e.symbol}" data-target="${e.symbol}" type="checkbox" class="ios-switch tinyswitch" name="coins" value="${e.symbol}" /><div><div></div></div></label>
            </div>
          </span>
        
          <p class="card-text">${e.name}</p>
        
          <button onclick="seeMore('${e.id}')" data-toggle="collapse" data-id="${e.id}" data-target="#demo${i}" class="btn btn-primary btn-sm toggler">See More</button>
        
          <div id="demo${i}" class="collapse ${e.symbol}">
           
        <!-- enter function -->
          </div>
        </div>
        </li>`;
        $("#table").append(list);
        });
       

        
       
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log('AJAX error:' + textStatus);
        $("#table").empty().html('<h3>Error: A server error occurred.</h3>');
    }
});



function seeMore(idx) { 
    var url2 = `https://api.coingecko.com/api/v3/coins/${idx}`;
    $.get(url2, function (json) {
                arr = JSON.parse(JSON.stringify(json));
                 //$.each(arr, function(i, e) {
                    //console.log("here is e: " + e +" & here is i=> "+i);
  

                    details=` 
                    <img src="${arr.image.thumb}" width="25px">
                    <ul>
                    <li id="USD" class="price">$ ${arr.market_data.current_price.usd}</li>
                    <li id="EUR" class="price">€ ${arr.market_data.current_price.eur}</li>
                    <li id="ILS" class="price">₪ ${arr.market_data.current_price.ils}</li>
                    </ul>
                    `;

                   var dataB = document.getElementsByClassName(arr.symbol);
                  $(dataB).empty().append(details);
                  //$('.show').toggleClass('show');

                 //});
                 // place into local storage
            });
             // refresh div every 2 minutes THIS select this one
             var $container = $(".toggler[data-id=idx]");
             setInterval(function()
         {
             $container.load(url2);
             console.log("refresh");
         }, 120000);
         };
        

      
       
var selection = [];


