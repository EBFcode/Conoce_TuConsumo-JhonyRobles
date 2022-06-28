// Comenzamos:

// Obtener nombre de usuario
// Primero averiguamos si tenemos ya los datos del usuario:
let userCountry;
let userData = () => { 
    userCountry = document.getElementById("pais").value;
    localStorage.setItem('Pais', userCountry);
    
    let selectPais = document.getElementById("pais");
    selectPais.style.display= 'none';

    let textoPais = document.getElementById("textoPais");
    document.getElementById("textoPais").textContent=userCountry;
    textoPais.style.display= 'flex';

    let inputUserName = document.getElementById("userName");
    inputUserName.style.display= 'none';
    
    let userName = document.getElementById("userName");
    localStorage.setItem('userName', userName);
    document.getElementById("textoPNombre").textContent=userName;

}

let validacion1 = localStorage.setItem(Pais);
let validacion2 = localStorage.setItem(userName);




if (validacion1 && validacion2 == null ) {
    userData();
}else {
    let prueba = document.getElementById("funciona");
    prueba.style.display= 'flex';
}


// let button = document.getElementById("button");
// let precioGasolina;



// let onButtonClick = function() {
//     // Preguntamos el pais para referirnos a su moneda local (hay pocos por que es un ejemplo)

    


//     let monedaLocal;
//     let countries = [["republica dominicana", "rd"],["argentina","arg"]];



//     // Con este while buscamos saber la moneda del usuario, si no tiene una registrada lo ponemos como pesos y si no escribe nada o un str vacio, le volvemos a preguntar.

//     while (userCountry){
//         if(userCountry == countries[0][0] || userCountry == countries[0][1]) {
//             monedaLocal = "pesos Dominicanos";
//             precioGasolina = 293.6;
            
//             break;
//         }
//         else if (userCountry == countries[1][0] || userCountry ==countries[1][1]){
//             monedaLocal = "pesos Argentinos";
//             precioGasolina = 474.1;
//             break;
//         }else {
//             monedaLocal = "pesos";
//             // Ya que no sabemos el pais, no sabemos el precio de la gasolina, asi que lo pedimos:
//             precioGasolina = parseInt(prompt("Cual es el precio de la gasolina actualmente?"))
//             break;
//         }


//     }

    





//     let GalonPorKilometro = document.getElementById("consumoPorGalon").value;
//     let esNumero = typeof GalonPorKilometro;


//     // Calculos
//     let formulaPorKilometro = 1 / GalonPorKilometro;
//     let Kilometro = document.getElementById("cuantosKilometros").value;
//     let resultadoGalones = Kilometro * formulaPorKilometro;
//     let idaYvueltaGalones = resultadoGalones * 2;
//     let DeGalonesAPesos = precioGasolina * resultadoGalones;
//     let idaYvueltaPesos = DeGalonesAPesos * 2;



//     // Imprimimos el resultado modificando el DOM del HTML
//     document.getElementById("textoSuConsumo").textContent="Su consumo sera de: (aproximadamente)";

//     document.getElementById("totalConsumo").textContent="$"+DeGalonesAPesos.toFixed()+" "+monedaLocal;

//     DeGalonesAPesos += DeGalonesAPesos ;

//     document.getElementById("totalx2").textContent="$"+DeGalonesAPesos.toFixed()+" "+monedaLocal;

//     let resultado = document.getElementById("contenedorCalculo");

//     resultado.style.display= 'flex';


// }


// // ---------------------------------------------
// // Esta funcion de ver precio aun no funciona
// let btn_VerPrecio = document.getElementById("verUserName");

//     btn_VerPrecio.onclick = () => {
//         btn_VerPrecio.innerText = precioGasolina;
//         console.log("Hola")
//     }
// // Esta funcion de ver precio aun no funciona
// // ---------------------------------------------


// button.addEventListener("click", onButtonClick);


