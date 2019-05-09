$.getScript('js/templateU.js');
var data;
var selectionReport = [];
var time = new Date();
time.setHours();
time.setMinutes();
console.log('charts');
var dataArray = [];
var dataNames = [];
var dataPoints1 = [];
console.log(urls);
var selectionReport = $('.userSelection_array').toArray().map(elem => elem.innerHTML); 
  if(searchCondition.length > 0){
  console.log("more than 1");
  }else{
    $("#searchResult").empty().html('<h3>Live Reports needs a minimum of one and maximum of 5 coins to run.</h3>');
  };


var storedNames = JSON.parse(JSON.stringify(sessionStorage.getItem("selection")));
console.log(storedNames);
	


var urls = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,888,abc,808,777,ETH&tsyms=USD`;
console.log("selectionReport");
console.log(urls);
    var url2 = urls;
    $.get(urls, function (json) {
				arra = JSON.parse(JSON.stringify(json));
           $.each(arra, function(i, e) {
					 //debugger;
					//console.log("here is e: " + e.USD +" & here is i=> "+i);
					/*{ x: new Date(2017,6,24), y: 31 }*/
					dataPoints1.push(
						[
							{x: new Date(), y: `${e.USD}`} 
						]);
						dataNames.push(
							[
								{x:  `${i}`, y: `${e.USD}`} 
							]);
					
				 });
			});
			console.log("jsonData");		
			console.log(dataPoints1);
	// var dataPoints = [
	// 	[{ x: new Date(2019, 0, 1),  y: 120 },{ x: new Date(), y: 135 },{ x: new Date(), y: 145 }],
	// 	[{ x: new Date(2019, 0, 1),  y: 190 },{ x: new Date(), y: 115 },{ x: new Date(), y: 165 }]
	// ];
	var chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "Weekly Revenue Analysis for First Quarter"
		},
		axisY:[{
			title: "Order",
			lineColor: "#C24642",
			tickColor: "#C24642",
			labelFontColor: "#C24642",
			titleFontColor: "#C24642",
			suffix: "k"
		},
		{
			title: "Footfall",
			lineColor: "#369EAD",
			tickColor: "#369EAD",
			labelFontColor: "#369EAD",
			titleFontColor: "#369EAD",
			suffix: "k"
		}],
		axisY2: {
			title: "Revenue",
			lineColor: "#7F6084",
			tickColor: "#7F6084",
			labelFontColor: "#7F6084",
			titleFontColor: "#7F6084",
			prefix: "$",
			suffix: "k"
		},
		toolTip: {
			shared: true
		},
		legend: {
			cursor: "pointer",
			itemclick: toggleDataSeries
		},
		data: [
		{
			type: "line",
			name: "Order",
			color: "#C24642",
			axisYIndex: 0,
			showInLegend: true,
			dataPoints: dataPoints1[0]
		},
		{
			type: "line",
			name: "Revenue",
			color: "#7F6084",
			axisYType: "secondary",
			showInLegend: true,
			dataPoints: dataPoints1[1]
		},
		{
			type: "line",
			name: "Revenue",
			color: "#7F6084",
			axisYType: "secondary",
			showInLegend: true,
			dataPoints: dataPoints1[2]
		},
		{
			type: "line",
			name: "Revenue",
			color: "#7F6084",
			axisYType: "secondary",
			showInLegend: true,
			dataPoints: dataPoints1[3]
		},
		{
			type: "line",
			name: "Revenue",
			color: "#7F6084",
			axisYType: "secondary",
			showInLegend: true,
			dataPoints: dataPoints1[4]
		},
		{
			type: "line",
			name: "Revenue",
			color: "#7F6084",
			axisYType: "secondary",
			showInLegend: true,
			dataPoints: dataPoints1[5]
		}]
	});
	chart.render();
	
	function toggleDataSeries(e) {
		if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		} else {
			e.dataSeries.visible = true;
		}
		e.chart.render();
	}