$.getScript('js/templateU.js');
var data;
var selectionReport = [];
var time = new Date();
time.setHours();
time.setMinutes();
console.log('charts');
var dataArray = [];
var dataPoints = [];
var dataPoints1;
console.log(urls);
var selectionReport = $('.userSelection_array').toArray().map(elem => elem.innerHTML); 
  if(searchCondition.length > 0){
  console.log("more than 1");
  }else{
    $("#searchResult").empty().html('<h3>Live Reports needs a minimum of one and maximum of 5 coins to run.</h3>');
  };


var storedNames = JSON.parse(JSON.stringify(sessionStorage.getItem("selection")));
alert(storedNames);
	


var urls = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${selectionReport}&tsyms=USD`;
console.log("selectionReport");
console.log(urls);
    // var url2 = urls;
    // $.get(urls, function (json) {
	// 			arra = JSON.parse(JSON.stringify(json));
	// 			var count = 1;
    //              $.each(arra, function(i, e) {
	// 				 //debugger;
	// 				//console.log("here is e: " + e.USD +" & here is i=> "+i);
	// 				/*{ x: new Date(2017,6,24), y: 31 }*/
	// 				dataPoints.push(
	// 					{
	// 						name: `${i}`,
	// 						type: "spline",
	// 						yValueFormatString: "#0.## $",
	// 						showInLegend: true,
	// 						dataPoints: [ {x:`${i}`, y: `${e.USD}`} ]
	// 					}
	// 				)
					
	// 			 });
	// 		});
	// 		console.log("jsonData");		
	// 		console.log(dataPoints);
	
			var dataPoints = [];
			var chart = new CanvasJS.Chart("chartContainer",{
				title: {
					text: "Share Value of Two Companies"
				},
				axisX: {
					valueFormatString: time.getTime()
				},
				axisY:{
					prefix: "$",
					includeZero: false
				}, 
				toolTip: {
					shared: true
				},
				legend: {
					cursor:"pointer",
					verticalAlign: "top",
					fontSize: 22,
					fontColor: "dimGrey",
				},
				data: [{
					type: "line",
					dataPoints : dataPoints,
				}]
			});
			$.getJSON(urls, function(data) {  
				$.each(data, function(key, value){
					dataPoints.push([ {x:`${key}`, y: `${value.USD}`} ]);
				});	
				chart.render();
			});
