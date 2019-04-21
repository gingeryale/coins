
    let url="https://api.coingecko.com/api/v3/coins/";
    let allCoins = "list";
    let id = "bitcoin";
   

    let ajaxGetter = function(url, param, limit) {
        $.get(url+param,
                function (json) {
                     arr = JSON.parse(JSON.stringify(json.slice(0, limit)));
                     let list = $("#table");
                   $.each(arr,function (i,e) {
                       list+=`<li class="card col-3 list-inline-item mt-1">
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
                   
                     <button onclick="more(${e.id})" data-toggle="collapse" data-id="${e.id}" data-target="#demo${i}" class="btn btn-primary btn-sm" id="olin">See More</button>
                   
                     <div id="demo${i}" class="collapse">
                       <img src="" width="50px">
                       <ul>
                         <li id="USD" class="price">ooo</li>
                         <li id="EUR" class="price">#100</li>
                         <li id="ILS" class="price">sk100</li>
                       </ul>
                   
                     </div>
                   </div>
                   </li>`;
                   });
                  //  list+="</ul>";
                   $("#table").html(list);
                });

    }
    ajaxGetter(url, allCoins, 30);

    function more(id){
      $.get(url, function (json) {
             arr = JSON.parse(JSON.stringify(json.slice(0, limit)));
             $.each(arr,function (i,e) {
               
             }
        });
    }
//ajaxGetter(url, all, 10) 
     
//
//    function a(ajaxGetter(url, all, 10)) {
//        let lists = "<ul>";
//        $.each(arr,function (i,e) {
//
//            lists += `<li onclick="b(${e.categoryID})">HERE: ${e.name}</li>`;
//        });
//
//        lists+="</ul>";
//        $("#d2").html(lists);
//
//    };
//
   // function a() {
   //     $.get(url+all,
   //             function (json) {
   //                 arr = JSON.parse(JSON.stringify(json.slice(0, 10)));
   //                 let tbl = "<table border='1'><tr><th>name</th><th>description</th></tr>";
   //                 let lists = "<ul>";

   //                 $.each(arr,function (i,e) {

   //                     lists += `<li onclick="b(${e.categoryID})">HERE: ${e.name}</li>`;
   //                 });
   //                 tbl += "</table>";
   //                 lists+="</ul>";
   //                 $("#d2").html(lists);
   //             });

   // }

   function b(prop){
       //console.log(arr[prop-1].name);
       let detail = "<ul>";
       detail += `<li>${arr[prop-1].symbol}</li>`;
       detail += "</ul>";
       $("#d3").html(detail);
   };



// Initialize tooltip component
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

// Initialize popover component
$(function () {
  $('[data-toggle="popover"]').popover()
});



//// incorrect function
let details = $("#table2");
function more(id) {
    $.get("https://api.coingecko.com/api/v3/coins/"+id, function (json) {
                 arr2 = JSON.parse(JSON.stringify(json));
                
               $.each(arr2,function (i,e) {
                    details+=` 
                    <li id="USD" class="price">${e.id}</li>
                    <li id="EUR" class="price">EUROEUROeuroeuroEURO</li>
                    <li id="ILS" class="price">ILSilsILSILs</li>
                    `;
               });
               $("#table2").append(details);
            });
        };${id.market_data.current_price.usd}