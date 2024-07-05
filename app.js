// Editar contenido del HTML con JS
//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un numero del 1 al 10';

let numeroSecreto = 0;
let intentos = 0;
let listaNumSecretos = [];
let numMax = 10;

//let numeroSecreto = generarNumSecreto();
//let intentos = 1;

// Creacion de una funcion en JS
function asignarTexElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    //console.log(numeroUsuario === numeroSecreto);

    if (numeroUsuario === numeroSecreto) {
        asignarTexElemento('p', `Acertaste el numero Secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        
        document.getElementById('reiniciar').removeAttribute('disabled')
    
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTexElemento('p', 'El numero Secreto es Menor');
        } else {
            asignarTexElemento('p', 'El numero Secreto es Mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja() {
    //let valorCaja = document.querySelector('#valorUsuario');
    //valorCaja.value = '';

    document.querySelector('#valorUsuario').value = '';
}

function generarNumSecreto() {
    //let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    //return numeroSecreto;
    //return Math.floor(Math.random() * 10) + 1;


    let numGenerado = Math.floor(Math.random() * numMax) + 1;

    console.log(numGenerado);
    console.log(listaNumSecretos);

    // Si ya sorteamos todos los numero
    if (listaNumSecretos.length == numMax) {
        asignarTexElemento('p', `Ya se sortearon todos los numeros posibles`)

        
    } else {

        // Si el numero esta generado en la lista

        if (listaNumSecretos.includes(numGenerado)) {

            // Recursividad
            return generarNumSecreto();

        } else {

            listaNumSecretos.push(numGenerado);
            return numGenerado;
        }

    }


}

function condicionInicio() {
    asignarTexElemento('h1', 'Juego del numero escondido');
    asignarTexElemento('p', `Indica un numero del 1 al ${numMax}`);

    numeroSecreto = generarNumSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja - Iniciar mensaje de intervalo de numeros - Generar numero aleatorio - desabilitar boton - reiniciar intentos

    limpiarCaja();
    condicionInicio();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}

condicionInicio();
