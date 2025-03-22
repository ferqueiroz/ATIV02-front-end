function calculo(num){
    let valor

    if (document.getElementById("display").innerText != '0') valor = document.getElementById("display").innerText;     
    else valor = '';
        

    document.getElementById("display").innerText = valor + num;
}

function calcular(){
    let resultado = document.getElementById("display").innerText
    document.getElementById("display").innerText = eval(resultado);
}

function apagar(){
    document.getElementById("display").innerText = "0"
}