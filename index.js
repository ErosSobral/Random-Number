//random number
const Botao = document.getElementById("Botao");
const label = document.getElementById("label");

const min= 1;
const max= 20;

let randomnum;

Botao.onclick = function(){
    randomnum = Math.floor(Math.random() * max) + min;
    label.textContent = randomnum;
}