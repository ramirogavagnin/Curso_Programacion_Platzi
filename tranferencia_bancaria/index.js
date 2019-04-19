class Cliente 
{
    constructor(nombre, apellido, dni, numeroDeCuenta, saldo, verificacion, banco)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = parseInt(dni);
        this.cuenta = parseInt(numeroDeCuenta);
        this.saldo = parseInt(saldo);
        this.id = this.dni;
        this.verificacion = verificacion;
        this.banco = banco;
    
    }
}

let clienteUno = new Cliente('Ramiro', 'Gavagnin', '35121011', '123456', '200', true, 'Santander');
let clienteDos = new Cliente('Agustín', 'Salguero', '37101211', '113456', '200', true, 'Frances');

const date = new Date();
//let hour = date.getHours();
let hour = 15;
let costo = 100;
let sinCargo = 0;
let nuevoSaldo;


if(hour >= 8 && hour < 12 || hour >= 15 && hour < 20)
{
    if(clienteUno.verificacion === true && clienteDos.verificacion === true)
    {
        let cantidad = prompt('Ingrese la cantidad a transferir\n' + 'Su saldo actual es de: $' + `${clienteUno.saldo}\n\n` + '***ATENCIÓN***\n\n' + 'El costo por transacción entre distintos bancos es de $' + `${costo}\n`);
        cantidad = parseInt(cantidad);

        if((cantidad > 0 && cantidad <= clienteUno.saldo) && clienteUno.banco === clienteDos.banco)
        {   
            nuevoSaldo = clienteUno.saldo - cantidad;
            alert('¡Transacción Exitosa!\n\nSe transfirieron: $' + `${cantidad}` + ' a la cuenta Nº ' + `${clienteDos.cuenta} del Banco ${clienteDos.banco}\n` + 'Su nuevo saldo es de $' + `${nuevoSaldo}` + '\n\n\nTe recordamos que el costo por esta transacción fue de $' + `${sinCargo}`);
        }
        else if((cantidad > 0 && cantidad <= (clienteUno.saldo - costo)) && clienteUno.banco != clienteDos.banco)
        {   
            nuevoSaldo = (clienteUno.saldo - cantidad) - costo;
            alert('¡Transacción Exitosa!\n\nSe transfirieron: $' + `${cantidad}` + ' a la cuenta Nº ' + `${clienteDos.cuenta} del Banco ${clienteDos.banco}\n` + 'Su nuevo saldo es de $' + `${nuevoSaldo}` + '\n\n\nTe recordamos que el costo por esta transacción fue de $' + `${costo}`);
        }
        else
        {   
            alert('La cantidad ingresada es MAYOR a su saldo actual\nPor favor inténtelo nuevamente\n\n' + 'Su saldo actual es de: $' + `${clienteUno.saldo}\n\n` + '***ATENCIÓN***\n' + 'El costo por transacción entre distintos bancos es de $' + `${costo}\n`);
        }
    }
    else
    {
        alert('Error de autenticación :(');
    }
}
else
{
    alert('Oops!\n\nSolo puedes hacer tranferencias de 8 a 12 y de 15 a 20.\nInténtalo nuevamente más tarde :)\n\nGracias por elegirnos!');
}