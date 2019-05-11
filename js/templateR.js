$.getScript('js/canvasjs.js');
var time = new Date();
time.getMinutes();
var dataPoints = [];

  
var storedNames = JSON.parse(JSON.stringify(sessionStorage.getItem("selection")));
console.log("storedNames is here:");
console.log(storedNames);
// var storedNames = "BTC,808,777,888,ETH";

if(storedNames !== null){
	console.log("more than 1");
	lr();
	}else{
	  $("#searchResult").empty().html('<h3>Select a minimum of 5 coins to run Live Reports.</h3>');
};

var urls = "https://min-api.cryptocompare.com/data/pricemulti?fsyms="+storedNames+"&tsyms=USD";
//var urls = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,808,777,888,ETH&tsyms=USD";
console.log(urls);

function lr(){
	var $promise = $.ajax({
		url: urls,
		dataType: 'json',
		type: 'GET',
		data: data,
		success: function (response, status) {
			var arr = JSON.stringify(response);
			console.log(arr);
			if(response.Response !== 'Error'){
	$.each(JSON.parse(arr), function(i, e) {
				dataPoints.push({
								type: "line",
								xValueType: "dateTime",
								yValueFormatString: `${e.USD}`,
								xValueFormatString: "hh:mm TT",
								showInLegend: true,
								name: `${i}`,
								coinVal:`${e.USD}`,
						dataPoints: [ {x: i, y: e.USD} ]
					});
			});	
			
	console.log(dataPoints);
	
			var chart = new CanvasJS.Chart("chartContainer", {
				animationEnabled: true,
				title:{
					text: "Update Live Coin Reports"
				},
				axisX: {
					valueFormatString: time.setMinutes()
				},
				axisY: {
					title: "USD",
					includeZero: false,
					suffix: "$"
				},
				legend:{
					cursor: "pointer",
					fontSize: 16,
					itemclick: toggleDataSeries
				},
				toolTip:{
					shared: true
				},
				data: dataPoints 
			});
			chart.render();
			
			function toggleDataSeries(e){
				if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
					e.dataSeries.visible = false;
				}
				else{
					e.dataSeries.visible = true;
				}
				chart.render();	
				updateChart();
			}
	
	function updateChart() {
		$.getJSON(urls, function(response) {
			//debugger;
			var arra = JSON.parse(JSON.stringify(response));
			console.log(arra);
			//debugger;
			//dataPoints[0].dataPoints[0].x
				$.each(arra, function(i, e) {
					dataPoints.push({
						x: parseInt(i),
						y: parseInt(e)
						});
			 });
			 chart.render();
			 setTimeout(function(){updateChart()}, 2000);
		});
			} 
		// 200 OK response returns error for user selection
	} else{
		$("#searchResult").empty().html('<h3>No coin data was returned from your selection. Select a new set of coins.</h3>');
	}
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
				console.log('AJAX error:' + textStatus);
				$("#table").empty().html('<h3>Error: A server error occurred.</h3>');
		}
	});
}


