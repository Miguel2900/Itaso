var piezas = document.getElementsByClassName("movil");

var tamWidh = 90;
var tamHeight = 90;

for (var i = 0; i < piezas.length; i++) {
  piezas[i].setAttribute("width", tamWidh);
  piezas[i].setAttribute("height", tamHeight);
  piezas[i].setAttribute("x", Math.floor(Math.random() * (320 - 1)) + 1);
  piezas[i].setAttribute("y", Math.floor(Math.random() * (600 - 1)) + 1);
  piezas[i].setAttribute("onmousedown", "seleccionarElemento(evt)");
}

var elementSelect = 0;
var currentX = 0;
var currentY = 0;
var currentPosX = 0;
var currentPosY = 0;

function seleccionarElemento(evt) {
  elementSelect = reordenar(evt);
  currentX = evt.clientX;
  currentY = evt.clientY;
  currentPosx = parseFloat(elementSelect.getAttribute("x"));
  currentPosy = parseFloat(elementSelect.getAttribute("y"));
  elementSelect.setAttribute("onmousemove", "moverElemento(evt)");
}

function moverElemento(evt) {
  var dx = evt.clientX - currentX;
  var dy = evt.clientY - currentY;
  currentPosx = currentPosx + dx;
  currentPosy = currentPosy + dy;
  elementSelect.setAttribute("x", currentPosx);
  elementSelect.setAttribute("y", currentPosy);
  currentX = evt.clientX;
  currentY = evt.clientY;
  elementSelect.setAttribute("onmouseout", "deseleccionarElemento(evt)");
  elementSelect.setAttribute("onmouseup", "deseleccionarElemento(evt)");
  //iman();
}

function deseleccionarElemento(evt) {
  //testing();
  if (elementSelect != 0) {
    elementSelect.removeAttribute("onmousemove");
    elementSelect.removeAttribute("onmouseout");
    elementSelect.removeAttribute("onmouseup");
    elementSelect = 0;
  }
}

var entorno = document.getElementById("entorno");

function reordenar(evt) {
  var padre = evt.target.parentNode;
  var clone = padre.cloneNode(true);
  var id = padre.getAttribute("id");
  entorno.removeChild(document.getElementById(id));
  entorno.appendChild(clone);
  return entorno.lastChild.firstElementChild;
}

const ruleta = document.querySelector("#ruleta");

ruleta.addEventListener("click", girar);
giros = 0;

function girar() {
  let rand = Math.random() * 7200;
  calcular(rand);
}

// function girar(){
//   if (giros < 3) {
//     let rand = Math.random() * 7200;
//     calcular(rand);
//     giros++;
//     var sonido = document.querySelector('#audio');
//     sonido.setAttribute('src', 'sonido/ruleta.mp3');
//     document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros;
//   }else{
//     Swal.fire({
//       icon: 'success',
//       title: 'VUELVA PRONTO EL JUEGO TERMINO!!',
//       confirmButtonColor: '#3085d6',
//       confirmButtonText: 'Aceptar',
//       allowOutsideClick: false
//     }).then((result)=>{
//       if (result.value == true) {
//         giros = 0;
//          document.querySelector('.elije').innerHTML = 'TU CORTESIA ES: ';
//          document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros;
//       }
//     })
//   }
// }

// function premio(premios){

//   document.querySelector('.elije').innerHTML = 'TU CORTESIA ES: ' + premios;

// }

function calcular(rand) {
  valor = rand / 360;
  valor = (valor - parseInt(valor.toString().split(".")[0]))* 360;
  console.log(valor);
  ruleta.style.transform = "rotate(" + rand + "deg)";

  setTimeout(() => {
    switch (true) {
      case valor > 0 && valor <= 72:
        console.log("Verduras 1");
        //premio("Verduras");
        break;
      case valor > 72 && valor <= 144:
        console.log("Frutas 5");
        //premio("Frutas");
        break;
      case valor > 144 && valor <= 216:
        console.log("Cereales 4");
        //premio("Cereales");
        break;
      case valor > 216 && valor <= 288:
        console.log("Leguminosas 3");
        //premio("Leguminosas");
        break;
      case valor > 288 && valor <= 360:
        console.log("Origen animal 2");
        //premio("Origen animal");
        break;
    }
  }, 5000);
}
