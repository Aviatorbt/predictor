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
    setTimeout(function() {
      canPredict = true;
    }, 120000);
    document.getElementById("predictionResult").innerHTML = "";
    var num = (Math.floor(Math.random() * 80) + 160) / 85;
    setTimeout(function() {
      document.getElementById("predictionResult").innerHTML = num.toFixed(2) + "x";
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
  
  // Agregamos estilo para la alerta
  var estiloAlerta = document.createElement("style");
  estiloAlerta.innerHTML = ".alerta { background-color: #F4D03F; color: #000; font-size: 1.5em; font-weight: bold; padding: 20px; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 9999; border: 4px solid #FF4136; border-radius: 10px; box-shadow: 5px 5px 15px #FF4136; text-align: center; font-family: 'Open Sans', sans-serif; }";
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
        <p>¡Atencion!</p>
      </div>
      <div class="mensaje-alerta">
        <p>${mensaje}</p>
        <p>¡Ahora puedes hacer tu prediccion!</p>
      </div>
      <button onclick="cerrarAlerta()" class="cerrar-alerta">X</button>
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
  