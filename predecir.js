function predecir() {
    document.getElementById("predictionResult").innerHTML = "";
    var num = (Math.floor(Math.random() * 70) + 160) / 75;
    setTimeout(function() {
      document.getElementById("predictionResult").innerHTML = num.toFixed(2) + "x";
      document.getElementById("predictionResult").innerHTML = valorPredicho;
  
    }, 2000);
    var i = 0;
    var interval = setInterval(function() {
      if (i >= num * 100) {
        clearInterval(interval);
      } else {
        i++;
        document.getElementById("predictionResult").innerHTML = (i / 100).toFixed(2) + "x";
      }
    }, 5);
  }
  
var canPredict = true;
var timer = null;

function predecir() {
  if (!canPredict) {
    var alerta = document.createElement("div");
    alerta.setAttribute("class", "alerta");
    alerta.innerHTML = "No puedes predecir. Debes esperar a que finalize la cuota anterior.";
    document.body.appendChild(alerta);
    setTimeout(function() {
      document.body.removeChild(alerta);
    }, 3000);
    return;
  }

  canPredict = false;
  document.getElementById("predictionResult").innerHTML = "";

  // Genera una nueva predicción
  var num = (Math.floor(Math.random() * 80) + 160) / 85;
  document.getElementById("predictionResult").innerHTML = num.toFixed(2) + "x";

  // Inicia el temporizador con una cuenta regresiva de 2 minutos
  var countDown = 120;
  document.getElementById("cronometro").innerHTML = "Proxima cuota en: 02:00";
  timer = setInterval(function() {
    countDown--;
    var minutes = Math.floor(countDown / 60);
    var seconds = countDown % 60;
    document.getElementById("cronometro").innerHTML = "Proxima cuota en: " +
      (minutes < 10 ? "0" + minutes : minutes) + ":" +
      (seconds < 10 ? "0" + seconds : seconds);

    if (countDown <= 0) {
      clearInterval(timer);
      canPredict = true;
      document.getElementById("predictionResult").innerHTML = "¡Momento de Entrada!";
      predecir(); // Llama a la función predecir nuevamente para generar una nueva predicción
    }
  }, 1000);
}


  
var estiloAlerta = document.createElement("style");
estiloAlerta.innerHTML = ".alerta { background-color: #000000; color: #fff; font-size: 0.8em; font-weight: bold; padding: 10px; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 9999; border: 4px solid #FEFDEB; border-radius: 10px; box-shadow: 5px 5px 15px #FEFDEB; text-align: center; font-family: 'Open Sans', sans-serif; } .cerrar-alerta-alerta { font-size: 0.5em; }";
document.head.appendChild(estiloAlerta);
  
  function seleccionarIcono(nombreCasino) {
    let nombre = nombreCasino.split('.')[0];
    let mensaje = "Has seleccionado el casino " + nombre + ".";
    
    // crear elemento div para alerta
    let alerta = document.createElement("div");
    alerta.classList.add("alerta");
    
    // crear contenido de alerta
    let contenidoAlerta = document.createElement("div");
    contenidoAlerta.classList.add("contenido-alerta");
    contenidoAlerta.innerHTML = `
      <div class="titulo-alerta">
        <p>Atencion</p>
      </div>
      <div class="mensaje-alerta">
        <p>${mensaje}</p>
        <p></p>
      </div>
      <button onclick="cerrarAlerta()" class="cerrar-alerta">X</padding-bottom>
`;
    
    // agregar contenido de alerta a elemento de alerta
    alerta.appendChild(contenidoAlerta);
    
    // agregar elemento de alerta al cuerpo del documento
    document.body.appendChild(alerta);
  }
  
  // función para cerrar la alerta
  function cerrarAlerta() {
    document.querySelector('.alerta').remove();
  }
  