d3.select('h1').style('color', 'red') //d3.select selecciona elementos de d3, ya sea específicos o todos con d3.selectAll()
.attr('class', 'heading')//.attr crea atributos, en este caso le creamos la clase "heading" a nuestro h1
.text('texto h1 modificado !!!');//este método sirve para escribir/modificar texto

d3.select('body').append('p').text('texto adjunto al body!!!')//append adjunta 'p' al body y le agrega yn text con .text
d3.select('body').append('p').text('segundo texto adjunto al body!!!')
d3.select('body').append('p').text('tercer texto adjunto al body!!!');

d3.selectAll('p').style('color', 'green');//selecciona todos los elementos 'p'

