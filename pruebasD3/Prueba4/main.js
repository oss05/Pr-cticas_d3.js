//Scales

//gráfica 2

let svgWidth = 700;
let svgHeight = 350;

let svg = d3.select('svg').style("margin-top", 15)
	.attr("width", svgWidth) 
	.attr("height", svgHeight)
	.attr("class", "background") 

let datos = [1, 0.5 ,8, 2, 3, 5, 0.8, 9];

let barPadding = 12;
let barWidth = (svgWidth / datos.length); 

let yScale = d3.scaleLinear()
	.domain([0, d3.max(datos)])
	.range([0, svgHeight]);

let grafica = svg.selectAll("rect")
	.data(datos) 
	.enter() 
	.append("rect") 
	.attr("y", function(d) { 
		return svgHeight - yScale(d)
	})
	.attr("height", function(d) { 
		return yScale(d);
	})
	.attr("width", barWidth - barPadding) 
	.attr("transform", function (d, i) { 
		let translate = [barWidth * i, 0];
		return "translate ("+ translate +")"; 
	}) ;

//Labels

let text = svg.selectAll("text")
	.data(datos)
	.enter()
	.append("text")
	.text(function(d) { 
		return d 
	})
	.attr("y", function (d,i) {
		return svgHeight - yScale(d) - 2;
	})
	.attr("x", function (d,i) {
		return barWidth * i;
	})


