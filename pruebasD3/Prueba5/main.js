//axis
let datos = [10, 20 ,30, 40, 50, 60, 70, 80];

let svgWidth = 550;
let svgHeight = 350;

let svg = d3.select('svg')
	.attr("width", svgWidth) 
	.attr("height", svgHeight);


let xScale = d3.scaleLinear()
	.domain([0, d3.max(datos)])
	.range([0, svgWidth]);

let yScale = d3.scaleLinear()
	.domain([0, d3.max(datos)])
	.range([svgHeight, 0]);

let x_axis = d3.axisBottom().scale(xScale);

let y_axis = d3.axisLeft().scale(yScale);

svg.append("g")
	.attr("transform", "translate(50, 10)")
	.call(y_axis);

let xAxisTranslate = svgHeight - 20;

svg.append("g")
	.attr("transform", "translate(50,"+ xAxisTranslate +")")
	.call(x_axis);


