
const texto = document.getElementById('texto');
const btnExtraer = document.getElementById('extraer');
const btnSaldo = document.getElementById('saldo');
const btnMovimientos = document.getElementById('movimientos');
const btnRetirar = document.getElementById('retirar');
const btnCancelar = document.getElementById('cancelar');
const resultado = document.getElementById('resultado');
const formContainer = document.getElementById('form-container');
const upForm = document.getElementById('up-form');
const downForm = document.getElementById('down-form');
const checkForm = document.getElementById('check-form');
const cajero = document.getElementById('cajero');
const header = document.getElementById('talkbubble');
btnExtraer.addEventListener('click', extraerDinero);
btnRetirar.addEventListener('click', retirarDinero);
btnSaldo.addEventListener('click', mostrarSaldo);
btnMovimientos.addEventListener('click', ultimosMovimientos);
btnCancelar.addEventListener('click', cancelarOperacion);

let dinero = 0;
let paraEntregar = [];
let entregado = [];
let caja = [];
let cajaParcial = [];
const imagenes = [];


imagenes['100'] = './billetes/cien.jpg';
imagenes['50'] = './billetes/cincuenta.jpg';
imagenes['20'] = './billetes/veinte.jpg';
imagenes['10'] = './billetes/diez.jpg';

caja.push(new Billete(100, 20));
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 5));
caja.push(new Billete(10, 10));

cajaParcialRecargar()

function cajaParcialRecargar()
{
  cajaParcial.push(new Billete(100, 20));
  cajaParcial.push(new Billete(50, 10));
  cajaParcial.push(new Billete(20, 5));
  cajaParcial.push(new Billete(10, 10)); 
}

let total = 0;
let subTotal = 0;
let totalParcial = 0;
let consultaMovimientos = 0;

for (let i of cajaParcial)
{
  totalParcial += (i.cantidad * i.valor);
}

for (let i of caja)
{
  total += (i.cantidad * i.valor);
}

