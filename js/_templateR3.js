$.getScript('js/templateF.js');
var data;
var time = new Date();
time.setHours();
time.setMinutes();
console.log('charts');
var dataArray = [];
var dataPoints = [];
var dataPoints1;
var urls = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,888,abc,808,777,ETH&tsyms=USD";

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



			var $promise = $.ajax({
				url: urls,
				dataType: 'json',
				type: 'GET',
				data: data,
				success: function (response, status) {
					//var arr = JSON.parse(JSON.stringify(response));
					var arra = JSON.parse(JSON.stringify(data));
					$('#loadingDiv').hide();
			
					$.each(arr, function(i, e) {
						dataPoints.push(
							{
								name: `${i}`,
								type: "spline",
								yValueFormatString: "#0.## $",
								showInLegend: true,
								dataPoints: [ {x:`${i}`, y: `${e.USD}`} ]
							}
						)
					});	
					
		console.log(dataPoints);
		
					var chart = new CanvasJS.Chart("chartContainer", {
						animationEnabled: true,
						title:{
							text: "Daily High Temperature at Different Beaches"
						},
						axisX: {
							valueFormatString: time.getTime()
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
						data: [ dataPoints ]
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
					}
				},
				error: function (XMLHttpRequest, textStatus, errorThrown) {
					console.log('AJAX error:' + textStatus);
					$("#table").empty().html('<h3>Error: A server error occurred.</h3>');
				}
			});







			

// console.log(chart.options.data[0]);
// console.log(dataPoints[0].name);