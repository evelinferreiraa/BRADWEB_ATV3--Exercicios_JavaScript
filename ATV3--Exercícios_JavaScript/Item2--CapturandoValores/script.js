// Évelin Ferreira da Silva    BP3039447

function getAttributes() {
    var link = document.getElementById("w3r"); // Obtém o elemento <a>
    var href = link.getAttribute("href"); // Obtém o valor do href
    var hreflang = link.getAttribute("hreflang"); // Obtém o valor do hreflang
    var rel = link.getAttribute("rel"); // Obtém o valor do rel
    var target = link.getAttribute("target"); // Obtém o valor target
    var type = link.getAttribute("type"); // Obtém o valor do type
    
    // Exibe os valores dos atributos capturados em um 'ALERTA'   
    alert("href: " + href + "\n\n" +
          "hreflang: " + hreflang + "\n\n" +
          "rel: " + rel + "\n\n" +
          "target: " + target + "\n\n" +
          "type: " + type);
  }

window.onload = init;