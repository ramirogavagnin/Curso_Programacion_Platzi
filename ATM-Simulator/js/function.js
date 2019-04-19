
/// Pre Carga

window.onload = function() 
{
    loader(); 
}

function loader()
{ 
    let loaderNode = document.getElementById('pre-loader');
    loaderNode.classList.add('animated', 'fadeOut', 'delay-1s');
    cajero.classList.add('animated', 'fadeInDown', 'fast', 'delay-1s');
    cajero.style.visibility = 'visible';
    formContainer.classList.add('animated', 'fadeInDown', 'fast', 'delay-1s');
    formContainer.style.visibility = 'visible';
    header.classList.add('animated', 'fadeIn', 'slow', 'delay-1s');
    header.style.visibility = 'visible';
    formContainer.addEventListener('animationend', handleAnimationEnd);

    function handleAnimationEnd()
    {
        loaderNode.remove();
        formContainer.removeEventListener('animationend', handleAnimationEnd);
    }
    
}


/// Funciones Extraer, Retirar, Cancelar, Consulta Saldo, Ultimos Movimientos.

function extraerDinero()
{  
    console.log(caja)
   dinero = parseInt(texto.value);
   
    if(dinero == 50 || dinero == 100 || dinero == 200 || dinero == 300 || dinero == 500 || dinero == 1000)
    {   
        if (dinero > 0 && dinero <= total)
        {   totalParcial -= dinero;
            for (let i of cajaParcial)
            {       
                let division = Math.floor(dinero / i.valor);

                    if (division > i.cantidad)
                    {
                        papeles = i.cantidad;
                    } else
                    {   
                        papeles = division;
                    }   
                    console.log(totalParcial, total, '4 before');
                    paraEntregar.push(new Billete(i.valor, papeles));
                    dinero = dinero - (i.valor * papeles);
                    i.cantidad -= papeles;
                    console.log(totalParcial, total, '4');
            }
        }
        else
        {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'No puedo darte esa cantidad :(',
                footer: 'Saldo Disponible $' + total
              })
        }

        if (dinero > 0)
        {   
            console.log('Soy un cajero pobre y no tengo dinero :(');
        }
        else
        {   
            for (let e of paraEntregar)
            {   
               if (e.cantidad > 0)
               {
                   for (let i=0; i < e.cantidad; i++)
                   {
                    resultado.innerHTML += '<img src=" ' + e.imagen.src + ' " style="margin: 5px">';
                   }
                    resultado.innerHTML += '<br/>';
               }
               
            }
            animateFadeInFadeOut(upForm, downForm, 'fadeInUp', 'fadeInDown', 'fadeOutDown', 'faster') 
            console.log(cajaParcial, '6');
        }
    } 
    else
    {   
        Swal.fire
        ({
            type: 'error',
            title: 'Oops...',
            text: 'Indoduce solo: 50 - 100 - 200 - 300 - 500\n - 1000',
            footer: 'Saldo Disponible: $' + total
        })
    
    }
}


function retirarDinero()
{   
    console.log(total, totalParcial)
    caja = cajaParcial;
    total = totalParcial;
    console.log(total)
    resultado.innerHTML = '';
    subTotal = 0;
    consultaMovimientos = 0;
    animateFadeInFadeOut(downForm, upForm, 'fadeInUp', 'fadeInDown', 'fadeOutDown', 'faster') 
       
        for (let i of paraEntregar)
        {
            subTotal += (i.cantidad * i.valor);
            entregado.push(i);
        }
        for (let i of entregado)
        {
          consultaMovimientos += i.cantidad * i.valor;
        }
            
    Swal.fire
    ({
        title: 'Operación Exitosa! :)',
        text: 'Retiraste USD ' + subTotal,
        footer: 'Tu nuevo saldo es de $' + total,
        animation: false,
        customClass: 
        {
        popup: 'animated tada'
        }
    })  
    paraEntregar = [];
       
} 


function mostrarSaldo()
{
    Swal.fire({
        title: 'Tu saldo actual es de $' + total,
        width: 600,
        padding: '3em',
        background: '#fff',
        backdrop: `
        rgb(220,220,220, 0.4)
          center left
          no-repeat
        `
      })
}


function cancelarOperacion ()
{   
    paraEntregar = [];
    cajaParcial = [];
    totalParcial = total;
    animateFadeInFadeOut(downForm, upForm, 'fadeInUp', 'fadeInDown', 'fadeOutDown', 'faster', 'delay-0.9s') 
    resultado.innerHTML = '';
    cajaParcialRecargar()
    
    /* for(let i of caja)
    {
        cajaParcial.push(i);
        console.log(i)
    } */

    Swal.fire({
        position: 'center-center',
        type: 'error',
        title: ' ¡La operación ha sido cancelada! ',
        showConfirmButton: false,
        timer: 1100
      })  
}

function ultimosMovimientos ()
{
    Swal.fire({
        title: 'Tus últimos movientos suman un total de $' + consultaMovimientos,
        width: 600,
        padding: '3em',
        background: '#fff',
        backdrop: `
        rgb(220,220,220, 0.4)
          center left
          no-repeat
        `
      })
}


/// Animations

function animateFadeInFadeOut(nodeA, nodeB, fadeInUp, fadeInDown, fadeOutDown, duration, delay) {
    
    nodeA.classList.remove('animated', fadeInUp, duration, 'delay-1s'); 
    nodeA.classList.add('animated', fadeOutDown, duration); 
    
    function handleAnimationEnd() 
    {   
        let id = nodeA.id;

        if(id === 'up-form')
        {   
            nodeA.style.visibility = 'hidden';
            nodeB.style.visibility = 'visible';
            resultado.style.visibility = 'visible';
            resultado.classList.remove('animated', fadeOutDown, duration); 
            resultado.classList.add('animated', fadeInDown, duration); 
            nodeA.removeEventListener('animationend', handleAnimationEnd)
        } 
        else if(id === 'down-form')
        {
            nodeA.style.visibility = 'hidden';
            nodeB.style.visibility = 'visible';
            resultado.style.visibility = 'hidden';
            btnMovimientos.style.visibility = 'visible';
            resultado.classList.remove('animated', fadeInDown, duration); 
            resultado.classList.add('animated', fadeOutDown, duration); 
            nodeA.removeEventListener('animationend', handleAnimationEnd)
        } 
        
        
        nodeB.classList.remove('animated', fadeOutDown, duration, delay); 
        nodeB.classList.add('animated', fadeInDown, duration, delay); 
        
       
    }

    nodeA.addEventListener('animationend', handleAnimationEnd)
    
}

