//gráfica 1

//primero definimos un largo un ancho del contenedor de la gráfica
let svgWidth = 700;
let svgHeight = 350;

let svg = d3.select('svg')
	.attr("width", svgWidth) 
	.attr("height", svgHeight)
	.attr("class", "background") //creamos una nueva clase para ponerle un background-color


//creamos un array con los datos a graficar
let datos = [80, 100 ,120, 50, 56, 85, 200, 9];

let barPadding = 12;
let barWidth = (svgWidth / datos.length); //Divide el ancho de cada barra entre el número de datos a graficar.

let grafica = svg.selectAll("rect")
	.data(datos) //Método data para traer los datos del array
	.enter() //Este método permite crear el nuevo elemento 'rect'
	.append("rect") //Va a crear/ejecutarse una vez por cada dato del array creanco rectángulos
	.attr("y", function(d) { //Este parámetro afecta al eje Y teniando acceso a un callback function
		return svgHeight - d //le restamos 'datos' a svgHeight
	})
	.attr("height", function(d) { //parámetro que afecta la altura
		return d;
	})
	.attr("width", barWidth - barPadding) //separa el ancho de la barra con el padding declarado antes
	.attr("transform", function (d, i) { //Para coordinar cada barra multiplicamos el ancho por i(index)
		let translate = [barWidth * i, 0];
		return "translate ("+ translate +")"; //String que describe la transformacuón al eje x
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
		return svgHeight - d - 2;
	})
	.attr("x", function (d,i) {
		return barWidth * i;
	})


