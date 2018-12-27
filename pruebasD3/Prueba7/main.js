//Gráfica PIE

let datos = [
	{"plataforma": "Android", "porcentaje": 40.11},
	{"plataforma": "iOS", "porcentaje": 13.06},
	{"plataforma": "Windows", "porcentaje": 36.69}	
];

let svgWidth = 750, svgHeight = 600, radio = Math.min(svgWidth, svgHeight/2);
let svg = d3.select("svg")
	.attr("width" , svgWidth)
	.attr("height", svgHeight);

let g = svg.append("g")
	.attr("transform", "translate("+ radio +", "+ radio +")");

let color = d3.scaleOrdinal(d3.schemeCategory10);

let pie = d3.pie().value(function(d) {
	return d.porcentaje;
});

let path = d3.arc()
	.outerRadius(radio)
	.innerRadius(0);

let arc = g.selectAll("arc")
	.data(pie(datos))
	.enter()
	.append("g");

arc.append("path")
	.attr("d", path)
	.attr("fill", function(d) { return color(d.data.porcentaje);});

let label = d3.arc()
    .outerRadius(radio)
    .innerRadius(0);
            
arc.append("text")
    .attr("transform", function(d) { 
        return "translate(" + label.centroid(d) + ")"; 
    })
    .attr("text-anchor", "middle")
    .text(function(d) { return d.data.plataforma+":"+d.data.porcentaje+"%"; });