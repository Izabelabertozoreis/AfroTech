let button = document.getElementById("calcular");

button.addEventListener("click", calcular); //fica atento a tudo que acontece no botão, como se fosse um log
//mouseover -  isso é um evento *

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("oi");
    resultado.innerHTML = "oi";
}
