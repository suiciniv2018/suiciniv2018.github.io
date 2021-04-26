"use strict"

const ValorCarne = parseFloat(document.querySelector("#valor-carne").textContent); //convert valor para numero
const ValorCarne1 = parseFloat(document.querySelector("#valor-carne2").textContent);
const ValorCarne2 = parseFloat(document.querySelector("#valor-carne3").textContent);

const formu = document.querySelector("form");

const inputcarne = formu.querySelector("#quantitya");

const inputlanche = formu.querySelector("#quantityb");

const total = document.querySelector("#total");//busca os dados no HTML

formu.addEventListener("submit", function (event){ //adiciona um evento de clicar algo na pagina
    event.preventDefault();

    let quantitya = parseFloat(inputcarne.value);
    let quantityb = parseInt(inputlanche.value);


switch(quantitya){

   case 1: 
    var totalcarne = ValorCarne * quantitya;
    var totallanche = totalcarne * quantityb;

    console.log(total.innerHTML = totallanche.toLocaleString('pt-br', {minimumFractionDigits: 2}));
break;

case 2: 

    var totalcarne1 = ValorCarne1 * quantityb;
    var totallanche1 = totalcarne1 

    console.log(total.innerHTML = totallanche1.toLocaleString('pt-br', {minimumFractionDigits: 2}));
    break;
case 3: 
    var totalcarne2 = ValorCarne2 * quantityb;
    var totallanche2 = totalcarne2 
   // total.innerHTML = totallanche2;//

   console.log(total.innerHTML = totallanche2.toLocaleString('pt-br', {minimumFractionDigits: 2}));
    break;

    default:

        console.log("numero errado");
    }
    

});


