document.addEventListener("keydown", eventoTeclas);
var cuadradito = document.getElementById('lienzo');
var papel = cuadradito.getContext('2d');
var color = "red";
var x = 150;
var y = 150;
cuadradito.onmousemove = eventoMouse;
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
}

dibujarLinea (color, 149, 149, 151, 151, papel);

function dibujarLinea (color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}

function eventoTeclas(evento)
{
    var colorcito = "blue";
    var movimiento = 5;

    switch(evento.keyCode)
    {
        case teclas.UP:
        dibujarLinea (colorcito, x, y, x, y - movimiento, papel);
        y = y - movimiento;
        break;

        case teclas.DOWN:
        dibujarLinea (colorcito, x, y, x, y + movimiento, papel);
        y = y + movimiento;
        break;

        case teclas.LEFT:
        dibujarLinea (colorcito, x, y, x - movimiento, y, papel);
        x = x - movimiento;
        break;

        case teclas.RIGHT:
        dibujarLinea (colorcito, x, y, x + movimiento, y, papel);
        x = x + movimiento;
        break;

        default:    
        break;
    }   
}


function eventoMouse (evento) 
{

    var colorcito = "blue";
    var xi = evento.layerX;
    var yi = evento.layerY;
    var xf = evento.offsetX;
    var yf = evento.offsetY;
    dibujarLinea (colorcito, xi, yi, xf, yf, papel);
}