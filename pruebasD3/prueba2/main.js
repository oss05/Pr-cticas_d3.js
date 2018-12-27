
let datos = [0, 1, 2, 3, 4];

d3.select('body')
	.selectAll('p')
	.data(datos)
	.enter()
	.append('p')
	/*.text('hola, soy la representacion de cada dato adjunto!!')*/
	.text(function(d) {return d;}); /*imprime en texto la funcion d (datos) y retorna estos mismos valores*/