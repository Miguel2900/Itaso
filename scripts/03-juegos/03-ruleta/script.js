var piezas = document.getElementsByClassName("movil");

var tamWidh = 90;
var tamHeight = 90;

var poso_x = [];
var poso_y = [];

// var vs = [[961, 210], [884, 325], [1113, 412], [1111, 169], [961, 210]];
var cornersX = [967, 967, 819, 740];
var cornersY = [414, 165, 217, 325];

for (var i = 0; i < piezas.length; i++) {
  piezas[i].setAttribute("width", tamWidh);
  piezas[i].setAttribute("height", tamHeight);
  poso_x[i] = Math.floor(Math.random() * (320 - 1)) + 1;
  poso_y[i] = Math.floor(Math.random() * (600 - 1)) + 1;
  piezas[i].setAttribute("x", poso_x[i]);
  piezas[i].setAttribute("y", poso_y[i]);
  piezas[i].setAttribute("onmousedown", "seleccionarElemento(evt)");
}

var elementSelect = 0;
var currentX = 0;
var currentY = 0;
var currentPosX = 0;
var currentPosY = 0;

function mouseCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  var coords = "[" + x + "," + y + "],";
  console.log(coords);
}

function seleccionarElemento(evt) {
  var cuerpo = document.getElementsByTagName("body")[0];
  cuerpo.style.cursor = "url(../../../images/03-juegos/03-ruleta/images/cerrada.png), auto";
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
}

// function checarElemento(evt) {
//   for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
//     var xi = vs[i][0], yi = vs[i][1];
//     var xj = vs[j][0], yj = vs[j][1];
//     // console.log(xi)
//     // console.log(yi)
//     // console.log(xj)
//     // console.log(yj)
//     // console.log(evt.clientX)
//     // console.log(evt.clientY)
//     var intersect = ((yi > evt.clientY) != (yj > evt.clientY))
//       && (evt.clientX < (xj - xi) * (evt.clientY - yi) / (yj - yi) + xi);
//     if (intersect) {
//       window.alert("Verdura")
//     }
//   }
// }

function checarElemento2(evt) {

  var x = evt.clientX, y = evt.clientY;
  var i, j = cornersX.length - 1;
  var odd = false;

  var pX = cornersX;
  var pY = cornersY;

  for (i = 0; i < cornersX.length; i++) {
    if ((pY[i] < y && pY[j] >= y || pY[j] < y && pY[i] >= y)
      && (pX[i] <= x || pX[j] <= x)) {
      odd ^= (pX[i] + (y - pY[i]) * (pX[j] - pX[i]) / (pY[j] - pY[i])) < x;
    }

    j = i;
  }

  if (odd) window.alert("Verdura")

}

function deseleccionarElemento(evt) {
  //testing();
  var cuerpo = document.getElementsByTagName("body")[0];
  cuerpo.style.cursor = "url(../../../images/03-juegos/03-ruleta/images/abierta.png), auto";
  if (elementSelect != 0) {
    elementSelect.removeAttribute("onmousemove");
    elementSelect.removeAttribute("onmouseout");
    elementSelect.removeAttribute("onmouseup");
    elementSelect = 0;
    checarElemento2(evt);
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
  valor = (valor - parseInt(valor.toString().split(".")[0])) * 360;
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
