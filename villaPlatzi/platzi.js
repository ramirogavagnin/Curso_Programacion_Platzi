document.addEventListener("keydown", dibujar);
var z = aleatorio (10, 20);
var vp = document.getElementById('villa-platzi');
var papel = vp.getContext('2d');
var cantidad = aleatorio(1, 3);
var xCerdo = 100;
var yCerdo = 300;

var fondo = {
    url: './tile.png',
    cargaOK: 'false'
}; 

var vaca = {
    url: './vaca.png',
    cargaOK: 'false'
}; 

var cerdo = {
    url: './cerdo.png',
    cargaOK: 'false'
}; 

var pollo = {
    url: './pollo.png',
    cargaOK: 'false'
}; 

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener('load', cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener('load', cargarVaca)

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener('load', cargarCerdo)

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener('load', cargarPollo)

function cargarFondo ()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarVaca ()
{
    vaca.cargaOK = true;
    dibujar();
}

function cargarCerdo ()
{
    vaca.cargaOK = true;
    dibujar();
}

function cargarPollo ()
{
    vaca.cargaOK = true;
    dibujar();
}


function dibujar (evento)
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    
    if(vaca.cargaOK)
    {   
        papel.drawImage(vaca.imagen, 150, 150);
    }

    if(pollo.cargaOK)
    {   
        papel.drawImage(pollo.imagen, 400, 250)   
    }

    if(cerdo.cargaOK && evento)
    { 
        var movimiento = 10;

        switch(evento.keyCode)
    {
        case teclas.UP:
        papel.drawImage(cerdo.imagen, xCerdo, yCerdo - movimiento);
        yCerdo = yCerdo - movimiento;
        break;

        case teclas.DOWN:
        papel.drawImage(cerdo.imagen, xCerdo, yCerdo + movimiento);
        yCerdo = yCerdo + movimiento;
        break;

        case teclas.LEFT:
        papel.drawImage(cerdo.imagen, xCerdo - movimiento, yCerdo);
        xCerdo = xCerdo - movimiento;
        break;

        case teclas.RIGHT:
        papel.drawImage(cerdo.imagen, xCerdo + movimiento, yCerdo);
        xCerdo = xCerdo + movimiento;
        break;

        default:    
        break;
    }   
        
    } 

    else if(cerdo.cargaOK)
    {   
         papel.drawImage(cerdo.imagen, xCerdo, yCerdo);
    }
}


function aleatorio (min, max)
{
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}



// Función que dibuja animales aleatoriamente
/* function dibujar (evento)
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK)
    {   
        
        for(var v = 0; v < cantidad; v++)
        {
            var x = aleatorio(0, 2);
            var y = aleatorio(0, 2);
            var x = x * 75;
            var y = y * 75;
            papel.drawImage(vaca.imagen, x, y);
        }
        
    }

    if(cerdo.cargaOK && evento)
    {   
        var x = aleatorio(0, 2);
        var y = aleatorio(0, 2);
        var x = x * 60;
        var y = y * 60;
        papel.drawImage(cerdo.imagen, xCerdo, yCerdo);
        
    } 

    if(pollo.cargaOK)
    {   
        
        for(var v = 0; v < cantidad; v++)
        {
            var x = aleatorio(6, 8);
            var y = aleatorio(6, 8);
            var x = x * 50;
            var y = y * 50;
            papel.drawImage(pollo.imagen, x, y);
        }
        
    }

} */