const jf = required('jonny-five'); // me traigo la biblioteca Johnny Five;
const cicuito = new jf.Board(); // creo una instancia de board(circuito), en mi constante circuito;

circuito.on('ready', prenderLed); // cuando circuito este listo disparo al función prenderLed();

function prenderLed()
{
    let led = new jf.Led(13); //creo la variable led donde guardo una nueva instancia de la clase Led (que esta dentro de mi biblioteca Johnny Five) le paso como parametro el puerto positivo del arduino;
    led.blink(500); // el método blink me permite parpadear mi led y le paso por parametro el delay en ms;
}