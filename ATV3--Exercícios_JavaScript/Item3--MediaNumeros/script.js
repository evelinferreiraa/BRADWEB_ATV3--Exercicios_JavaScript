// Évelin Ferreira da Silva    BP3039447

function calculaMedia() { 
    var input = document.getElementById("inputValues").value; // Obtém o valor digitado pelo usuário
    var numeros = input.split(","); // Divide a string dos números separados pela vírgula em um array 

    // Cálculo da soma
    var soma = 0, i;
    for (i = 0; i < numeros.length; i++) {
      soma += parseFloat(numeros[i]);
    }

    // Cálculo da média
    var media = soma / numeros.length;
    
    // Exibe 
    document.getElementById("result").innerHTML = "A média dos números é: " + media.toFixed(2); 
  }

window.onload = init;