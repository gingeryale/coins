$.getScript('js/templateF.js');

console.log('charts');
var urls = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,888,abc,808,777,ETH&tsyms=USD";
var dataArray = [];

    var url2 = urls;
    $.get(urls, function (json) {
				arra = JSON.parse(JSON.stringify(json));
				
                 $.each(arra, function(i, e) {
					 //debugger;
                    console.log("here is e: " + e.USD +" & here is i=> "+i);
					

                    // jsonData=` 
                    // <img src="${i}" width="25px">
                    // <ul>
                    // <li id="USD" class="price">$ ${i}</li>
                    // <li id="EUR" class="price">€ ${e.USD}</li>
                    // <li id="ILS" class="price">₪ ${arra[i]}</li>
                    // </ul>
					// `;
					var dataPoints = [];
					
					dataArray.push({
							type: "line",
							xValueType: "dateTime",
							yValueFormatString: "$####.00",
							xValueFormatString: "hh:mm:ss TT",
							showInLegend: true,
							name: `${i}`,
							coinVal:`${e.USD}`,
							dataPoints: dataPoints
					});
					console.log(dataArray);
				 });
					//console.log(jsonData);
					
        	//});
         


var  dataPoints = [];
// var dataPoints1 = [];
// var dataPoints2 = [];
// var dataPoints3 = [];
// var dataPoints4 = [];
// var dataPoints5 = [];
var chart = new CanvasJS.Chart("chartContainer", {
	zoomEnabled: true,
	title: {
		text: "Share Value of Coins"
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
		itemclick : toggleDataSeries
	},
	data: [dataArray]
});
console.log(dataArray);
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
var time = new Date;
time.setHours(time.getHours());
time.setMinutes(time.getMinutes());
time.setSeconds(time.getSeconds());
time.setMilliseconds(00);

// initial coin value
// for (var i = 0; i < 5; i++) {
// 	dataPoints.push(chart.options.data[0][i].coinVal);
// }

var yValue1 = chart.options.data[0][0].coinVal;
var yValue2 = chart.options.data[0][1].coinVal;
var yValue3 = chart.options.data[0][2].coinVal;
var yValue4 = chart.options.data[0][3].coinVal;
var yValue5 = chart.options.data[0][4].coinVal;

// update chart 
function updateChart(count,yValue1,yValue2,yValue3,yValue4,yValue5 ) {
	count = count || 1;
	var deltaY1, deltaY2, deltaY3,deltaY4,deltaY5;
	for (var i = 0; i < dataArray.length; i++) {
		time.setTime(time.getTime()+ updateInterval);
		//debugger;
		console.log("dataArray");
		console.log(dataArray);
		deltaY1 = yValue1;
		deltaY2 = yValue2;
		deltaY3 = yValue3;
		deltaY4 = yValue4;
		deltaY5 = yValue5;



	//adding random value and rounding it to two digits. 
	yValue1 = Math.round((yValue1 + deltaY1)*100)/100;
	yValue2 = Math.round((yValue2 + deltaY2)*100)/100;
	yValue3 = Math.round((yValue3 + deltaY3)*100)/100;
	yValue4 = Math.round((yValue4 + deltaY4)*100)/100;
	yValue5 = Math.round((yValue5 + deltaY5)*100)/100;

	// pushing the new values
	// for(var k = 0; k < 5; k++){
		
	// 	//dataPoints.push({x: time.getTime(), y: chart.options.data[0][k].coinVal})
	// 	dataPoints.push({x: time.getTime(), y: `${deltaY+k}`})
	// }
	
		
		//dataPoints.push({x: time.getTime(), y: chart.options.data[0][k].coinVal})
		dataPoints.push({x: time.getTime(), y: deltaY1});
		dataPoints.push({x: time.getTime(), y: deltaY2});
		dataPoints.push({x: time.getTime(), y: deltaY3});
		dataPoints.push({x: time.getTime(), y: deltaY4});
		dataPoints.push({x: time.getTime(), y: deltaY5});
	
	// dataPoints1.push({
	// 	x: time.getTime(),
	// 	y: deltaY1
	// });
	// dataPoints2.push({
	// 	x: time.getTime(),
	// 	y: deltaY2
	// });
	// dataPoints3.push({
	// 	x: time.getTime(),
	// 	y: deltaY3
	// });
	// dataPoints4.push({
	// 	x: time.getTime(),
	// 	y: deltaY4
	// });
	// dataPoints5.push({
	// 	x: time.getTime(),
	// 	y: deltaY5
	// });
	}

	// updating legend text with  updated with y Value 
	// LOOP
	// debugger;
	for(i=0;i<chart.options.data.length;i++){
		chart.options.data[0][i].legendText = `${chart.options.data[0][i].name} $  ${chart.options.data[i].coinVal}`;
	}
	console.log(`${dataPoints}`);
	// chart.options.data[0].legendText = " Company A  $" + yValue1;
	// chart.options.data[1].legendText = " Company B  $" + yValue2; 
	// chart.options.data[2].legendText = " Company C  $" + yValue3; 

	chart.render();
}
// generates first set of dataPoints 
updateChart(100);	
setInterval(function(){updateChart()}, updateInterval);
	
});