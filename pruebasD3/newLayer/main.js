
var data = [{month:"January", revenue:13432, profit:8342},
			{month:"February", revenue:19342, profit:10342},
			{month:"March", revenue:17443, profit:15423},
			{month:"April", revenue:26342, profit:18432},
			{month:"May", revenue:34213, profit:29434},
			{month:"June", revenue:50321, profit:45343},
			{month:"July", revenue:54273, profit:47452}];

var margin = {left:40, right:40, top:30, bottom:30};

var width = 600 - margin.left - margin.right,
	height = 400 - margin.top - margin.bottom; 

var g = d3.select("#chart-area")
	.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
		.append("g")
			.attr("transform", "translate("+ margin.left + "," + margin.top +")");

var x = d3.scaleBand()
	.domain(data.map(function(d) {return (d.month);}))
	.range([0, width])
	.paddingInner(0.3)
	.paddingOuter(0.3);

var y0 = d3.scaleLinear()
	.domain([0, d3.max(data, function(d){
		return d.revenue;
	})])
	.range([height , 0]);

var y1 = d3.scaleLinear()
	.domain([0, d3.max(data, function(d){
		return d.profit;
	})])
	.range([height , 0]);

var xAxisCall = d3.axisBottom(x)
	g.append("g")
		.attr("class", "x-axis")
		.attr("transform","translate (0," + height + ")")
		.call(xAxisCall);

var yAxisCall = d3.axisLeft(y0)
	g.append("g")
		.attr("class","y-axis")
		.call(yAxisCall);

var yAxisCallRight = d3.axisRight(y1)
	g.append("g")
		.attr("class","y-axisRight")
		.attr("transform","translate ("+ width +", 0)")
		.call(yAxisCall)
		.selectAll("text")
		.attr("transform", "translate(45)");

var Rects = g.selectAll('rect')
	.data(data)
	.enter()
	.append('rect')
		.attr("x", function(d){ return x(d.month); })
		.attr("y", function(d){return y0(d.revenue);})
		.attr("width", x.bandwidth)
		.attr("height", function(d){ return height - y0(d.revenue);})
		.attr("fill", function(d){return "grey";})


