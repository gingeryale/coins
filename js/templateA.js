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
        arr.length=10;
        $('#loadingDiv').hide();

        $.each(arr, function(i, e) {
            list=`<li class="card col-3 list-inline-item mt-1">
            <div class="card-body">
            <h5 class="card-title" id="letters">${e.symbol}</h5>
    
            <span>
             <div class="col-sm-5 togglerBtn">
              <button type="button" class="btn btn-xs btn-primary btn-toggle" data-toggle="button" aria-pressed="false" autocomplete="off">
                <div class="handle"></div>
              </button>
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
               
            });
        };


        var selectedCoins = [];

        // $("input[name='tech']").change(function(){
        //   var maxAllowed = 2;
        //   var count = $("input[name='tech']:checked").length;
        // if(count > maxAllowed){
        // $(this).prop("checked", "");
        // alert("reached max "+ maxAllowed);
        // }
        
        // });