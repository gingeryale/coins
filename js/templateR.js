console.log('charts');

	var chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		title:{
			text: "Crude Oil Reserves vs Production, 2016"
		},	
		axisY: {
			title: "Billions of Barrels",
			titleFontColor: "#4F81BC",
			lineColor: "#4F81BC",
			labelFontColor: "#4F81BC",
			tickColor: "#4F81BC"
		},
		axisY2: {
			title: "Millions of Barrels/day",
			titleFontColor: "#C0504E",
			lineColor: "#C0504E",
			labelFontColor: "#C0504E",
			tickColor: "#C0504E"
		},	
		toolTip: {
			shared: true
		},
		legend: {
			cursor:"pointer",
			itemclick: toggleDataSeries
		},
		data: [{
			type: "column",
			name: "Proven Oil Reserves (bn)",
			legendText: "Proven Oil Reserves",
			showInLegend: true, 
			dataPoints:[
				{ label: "aaa", y: 266.21 },
				{ label: "bbb", y: 302.25 },
				{ label: "ccc", y: 157.20 },
				{ label: "ddd", y: 148.77 },
				{ label: "eee", y: 101.50 },
				{ label: "fff", y: 97.8 }
			]
		},
		{
			type: "column",	
			name: "Oil Production (million/day)",
			legendText: "Oil Production",
			axisYType: "secondary",
			showInLegend: true,
			dataPoints:[
				{ label: "aaa", y: 10.46 },
				{ label: "bbb", y: 2.27 },
				{ label: "ccc", y: 3.99 },
				{ label: "ddd", y: 4.45 },
				{ label: "eee", y: 2.92 },
				{ label: "fff", y: 3.1 }
			]
		}]
	});
	chart.render();
	
	function toggleDataSeries(e) {
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else {
			e.dataSeries.visible = true;
		}
		chart.render();
	}
	
	