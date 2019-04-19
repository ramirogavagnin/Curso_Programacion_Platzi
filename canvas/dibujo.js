console.log("canvas");

var canvas_node = document.getElementById("dibujo");
var lienzo = canvas_node.getContext("2d");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var ancho = canvas_node.width
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("boton");
var boton_sorpresa = document.getElementById("boton_sorpresa");
var boton_borrar = document.getElementById("boton_borrar");
var parrafo = document.getElementById("parrafo");
boton.addEventListener("click", dibujoConClick);
boton_sorpresa.addEventListener("click", draw);
boton_borrar.addEventListener("click", limpiarLienzo);


// función que dibuja una linea

function dibujarLinea (color, x_inicial, y_inicial, x_final, y_final)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}

// función que dibuja cuando hago click

function dibujoConClick ()
{  
var lineas = parseInt(texto.value);
var espacio = ancho / lineas;
var l = 0;
var color = "red";
var xi, yi, xf, yf, xf_2;

// ciclo donde por cada iteración dibujo mi figura de a una línea por vez

  for (l = 0; l < lineas; l++)
{
xi = espacio * l;    
yi = espacio * l;
xf = espacio * (l + 1);
yf = espacio * (l + 1);
xf_2 = 300 - xf;

dibujarLinea(color, 0, yi, xf, 300);
dibujarLinea(color, xi, 0, 300, yf);
dibujarLinea(color, 300, yi, xf_2, 300);
dibujarLinea(color, xf_2, 0, 0, yf);
}

// borde izq
dibujarLinea(color, 1, 1, 1, 299);
// borde inferior
dibujarLinea(color, 1, 299, 299, 299);
// borde der
dibujarLinea(color, 299, 1, 299, 299);
// borde superior
dibujarLinea(color, 1, 1, 299, 1);
parrafo.innerHTML = 'Así queda tu dibujito';


}


function limpiarLienzo ()
{
lienzo.clearRect(0, 0, canvas_node.width, canvas_node.height);
ctx.clearRect(0, 0, canvas.width, canvas.height);
parrafo.innerHTML = '';
}


// Pac-Man DevMozilla
function draw() 
{
      parrafo.innerHTML = 'Así queda tu dibujito';
      roundedRect(ctx,12,12,150,150,15);
      roundedRect(ctx,19,19,150,150,9);
      roundedRect(ctx,53,53,49,33,10);
      roundedRect(ctx,53,119,49,16,6);
      roundedRect(ctx,135,53,49,33,10);
      roundedRect(ctx,135,119,25,49,10);
  
      ctx.beginPath();
      ctx.arc(37,37,13,Math.PI/7,-Math.PI/7,false);
      ctx.lineTo(31,37);
      ctx.fill();
  
      for(var i=0;i<8;i++)
      {
        ctx.fillRect(51+i*16,35,4,4);
      }
  
      for(i=0;i<6;i++)
      {
        ctx.fillRect(115,51+i*16,4,4);
      }
  
      for(i=0;i<8;i++)
      {
        ctx.fillRect(51+i*16,99,4,4);
      }
  
      ctx.beginPath();
      ctx.moveTo(83,116);
      ctx.lineTo(83,102);
      ctx.bezierCurveTo(83,94,89,88,97,88);
      ctx.bezierCurveTo(105,88,111,94,111,102);
      ctx.lineTo(111,116);
      ctx.lineTo(106.333,111.333);
      ctx.lineTo(101.666,116);
      ctx.lineTo(97,111.333);
      ctx.lineTo(92.333,116);
      ctx.lineTo(87.666,111.333);
      ctx.lineTo(83,116);
      ctx.fill();
  
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.moveTo(91,96);
      ctx.bezierCurveTo(88,96,87,99,87,101);
      ctx.bezierCurveTo(87,103,88,106,91,106);
      ctx.bezierCurveTo(94,106,95,103,95,101);
      ctx.bezierCurveTo(95,99,94,96,91,96);
      ctx.moveTo(103,96);
      ctx.bezierCurveTo(100,96,99,99,99,101);
      ctx.bezierCurveTo(99,103,100,106,103,106);
      ctx.bezierCurveTo(106,106,107,103,107,101);
      ctx.bezierCurveTo(107,99,106,96,103,96);
      ctx.fill();
  
      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.arc(101,102,2,0,Math.PI*2,true);
      ctx.fill();
  
      ctx.beginPath();
      ctx.arc(89,102,2,0,Math.PI*2,true);
      ctx.fill();
    }
  
  
  // A utility function to draw a rectangle with rounded corners.
  
  function roundedRect(ctx,x,y,width,height,radius)
  {
    ctx.beginPath();
    ctx.moveTo(x,y+radius);
    ctx.lineTo(x,y+height-radius);
    ctx.quadraticCurveTo(x,y+height,x+radius,y+height);
    ctx.lineTo(x+width-radius,y+height);
    ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
    ctx.lineTo(x+width,y+radius);
    ctx.quadraticCurveTo(x+width,y,x+width-radius,y);
    ctx.lineTo(x+radius,y);
    ctx.quadraticCurveTo(x,y,x,y+radius);
    ctx.stroke();
  }