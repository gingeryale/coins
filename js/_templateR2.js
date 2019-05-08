$.getScript('js/templateF.js');

console.log('charts');
var dataArray = [];
var dataPointsWWW = [];
var dataPoints1;
var urls = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,888,abc,808,777,ETH&tsyms=USD";

    var url2 = urls;
    $.get(urls, function (json) {
				arra = JSON.parse(JSON.stringify(json));
				var count = 1;
                 $.each(arra, function(i, e) {
					 //debugger;
					//console.log("here is e: " + e.USD +" & here is i=> "+i);
					
					dataPointsWWW.push({
							type: "line",
							xValueType: "dateTime",
							yValueFormatString: "$####.00",
							xValueFormatString: "hh:mm:ss TT",
							showInLegend: true,
							name: `${i}`,
							coinVal:`${e.USD}`,
							dataPoints: "dataPoints"+count
					}); count++
					
				 });
			});
			//console.log("jsonData");		
			//console.log(dataPointsWWW);


			
			



























var dataPoints = []; 
var urls = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,888,abc,808,777,ETH&tsyms=USD";
var chart = new CanvasJS.Chart("chartContainer", {
	zoomEnabled: true,
	title: {
		text: "Share Value of Two Companies"
	},
	axisX: {
		title: "chart updates every 3 secs"
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
		itemclick: toggleDataSeries
	},
	data: [{
		type: "line",
		dataPoints : dataPoints,
	}]
});
$.getJSON(urls, function(data) {  
	$.each(data, function(k, v){
		
		dataPoints.push({x: k, y: parseFloat(v.USD)});
	});	
	//  chart.render();
});

var dataC = chart.options.data[0].dataPoints;
console.log("data:");
console.log(dataC);
console.log(dataC.y);
function toggleDataSeries(e) {
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	}
	else {
		e.dataSeries.visible = true;
	}
	chart.render();
}

var updateInterval = 3000;
// initial value

var yValue1 = chart.options.data[0].dataPoints[0]; 
var yValue2 = chart.options.data[0].dataPoints[1];
console.log(yValue1,yValue2);

var time = new Date;
// starting at 9.30 am
time.setHours(9);
time.setMinutes(30);
time.setSeconds(00);
time.setMilliseconds(00);

function updateChart(count) {
	count = count || 1;
	var deltaY1, deltaY2;
	for (var i = 0; i < count; i++) {
		time.setTime(time.getTime()+ updateInterval);
		deltaY1 = .5 + Math.random() *(-.5-.5);
		deltaY2 = .5 + Math.random() *(-.5-.5);

	// adding random value and rounding it to two digits. 
	yValue1 = Math.round((yValue1 + deltaY1)*100)/100;
	yValue2 = Math.round((yValue2 + deltaY2)*100)/100;

	
	// pushing the new values
	data.dataPoints[0].push({
		x: time.getTime(),
		y: yValue1
	});
	chart.options.data[0].dataPoints[1].push({
		x: time.getTime(),
		y: yValue2
	});
	}

	// updating legend text with  updated with y Value 
	chart.options.data[0].dataPoints[0].legendText = " Company A  $" + yValue1;
	chart.options.data[0].dataPoints[1].legendText = " Company B  $" + yValue2; 
	chart.render();
}
// generates first set of dataPoints 
updateChart(100);	
setInterval(function(){updateChart()}, updateInterval);

console.log(chart.options.data[0].dataPoints[0]);