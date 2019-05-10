$.getScript('js/canvasjs.js');
var time = new Date();
time.setMinutes();
var urls = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,888,abc,808,777,ETH&tsyms=USD";
var dataPoints = [];
var chart;

var $promise = $.ajax({
	url: urls,
	dataType: 'json',
	type: 'GET',
	data: data,
	success: function (response, status) {
		//var arr = JSON.parse(JSON.stringify(response));
		var arr = JSON.stringify(response);
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
				text: "Daily High Temperature at Different Beaches"
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
		//console.log(chart.options.data[0]);
		//console.log(chart.options.data[0].dataPoints);
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
	$.getJSON(urls, function(data) {
			$.each(data, function(key, value) {
					dataPoints.push({
					dataPoints: [ {x: key, y: value.USD} ]
					});
		 });
		 chart.render();
		 setTimeout(function(){updateChart()}, 1000);
	});
}
	},
	error: function (XMLHttpRequest, textStatus, errorThrown) {
			console.log('AJAX error:' + textStatus);
			$("#table").empty().html('<h3>Error: A server error occurred.</h3>');
	}
});






// var dataPoints = [];
// $.getJSON("https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH&tsyms=USD", function(data) {  
// 		$.each(data, function(key, value){
// 				dataPoints.push(	{x: time.getMinutes(), y: `${value.USD}`} );
// 		});
// 		chart = new CanvasJS.Chart("chartContainer",{
// 				title:{
// 						text:"Live Chart with dataPoints from External JSON"
// 				},
// 				data: [{
// 				type: "line",
// 				dataPoints : dataPoints,
// 				}]
// 		});
// 		chart.render();
// });


