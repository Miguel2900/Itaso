let azucarV = [16,/*Alimento lácteo bebible con probióticos naturales sabor fresa*/
  7,/*Agua de fruta con jugo natural de naranja*/
  1,/*Agua saborizada o agua infusionada*/
  48,/*Bebida de té verde sabor pepino con miel*/
  21,/*Bebida de pulpa de mango*/
  27,/*Bebida carbonatada de cola*/
  24,/*Chocolate en polvo*/
  6,/*Queso petit suisse sabor fresa*/
  41,/*Yogurt bebible sabor fresa*/
  47,/*Bebida energética*/
  31,/*Bebida carbonatada sabor naranja*/
  30,/*Bebida carboatada sabor toronja*/
  42,/*Concentrado de horchata*/
  28,/*Concentrado de jamaica*/
  49,/*Néctar clarificado de manzana*/
  31,/*Néctar de piña*/
  45,/*Bebida carbonatada de cola*/
  25,/*Leche sabor chocolate*/
  33,/*Bebida a base de té negro sabor limón*/
  29,/*Bebida carbonatada sabor manzana*/
  0,/*Bebida carbonatada*/
  37,/*Bebida deportiva*/
  32,/*Bebida carbonatada sabor uva*/
  0,/*Polvo para preparar agua de sabor*/
  29,/*Bebida carbonatada sabor lima-limón*/
  9,/*Producto a base de leche fermentada con lactobacilos*/
  41,/*Yogurt bebible sabor fresa*/
  0,/*Ron*/
  17,/*Gin-tonic*/
  0,/*Brandy/Coñac*/
  0,/*Mezcal*/
  4,/*Tinto de mesa*/
  0,/*Whisky*/
  15,/*Paloma*/
  27,/*Mojito*/
  4,/*Michelada clásica*/
  19,/*Cuba*/
  78,/*Piña colada*/
  46,/*Margarita*/
  2,/*Pulque natural*/
  0,/*Martini seco*/
  3,/*Regular*/];

var edad, peso, altura;

var maxBebidas

function increaseValue(element) {
  value = document.getElementById(element).innerHTML;
  value++;
  document.getElementById(element).innerHTML = value;
}
function decreaseValue(element) {
  value = document.getElementById(element).innerHTML;
  value = (value - 1) < 0 ? 0 : (value - 1);
  document.getElementById(element).innerHTML = value;
}
function reset(element) {
  document.getElementById(element).innerHTML = 0;
}

function getVaribles() {
  let queryString = location.search;
  let params = new URLSearchParams(queryString);

  edad = parseInt(params.get("Edad"));
  peso = parseInt(params.get("Peso"));
  altura = parseInt(params.get("Altura"));
}

function generateBeverages() {
  getVaribles();

  let board = document.getElementById("board");

  maxBebidas = (edad < 18) ? 28 : 43;
  for (let i = 1; i < maxBebidas; i++) {
    board.innerHTML += 
    `<div class="container">
        <center>
            <img src="../../../media/03-juegos/01-calculadora/images/beverages/${i}.png">
        </center>
        <p class="contar" id="contar${i}">0</p>
        <div>
            <button onclick="decreaseValue('contar${i}')" class="decr" id="decr"><span class="material-icons-outlined">remove</span></button>
            <button onclick="increaseValue('contar${i}')" class="incr" id="incr"><span class="material-icons-outlined">add</span></button>
            <button onclick="reset('contar${i}')" class="reset" id="reset"><span class="material-icons-outlined">cached</span></button>
        </div>
    </div>`
  }
}

function sugarCalc() {
  let azucar = 0;
  for (let i = 1; i < maxBebidas; i++) {
    value = document.getElementById(`contar${i}`).innerHTML;
    azucar += value * azucarV[(i - 1)];
  }

  document.getElementById("display").innerHTML = "";
  var display = document.getElementById("display");
  var h1 = document.createElement("h1");
  var cDiario = document.createElement("h1");

  h1.innerHTML = 'En total consumes ' + azucar + ' gramos de azucar';
  display.appendChild(h1);


  document.getElementById("display").innerHTML += `<br><img src="../../../media/03-juegos/01-calculadora/images/cuchara.png"><h1>x${(azucar / 15).toFixed(1)} cucharadas soperas</h1></img>`;

  let color;
  if (azucar > 25) {
    color = '#ff0000';
    cDiario.innerHTML += `<div class="display2" id="textBox">
      <h1/>Tu consumo se excede del recomendado <br>diario de 25 gramos
      </div>`;
  }
  else {
    color = '#008000'
    cDiario.innerHTML += `<div class="display2" id="textBox">
      <h1/>Tu consumo se encuentra debajo del <br>recomendado diario de 25 gramos
      </div>`;
  }
  display.appendChild(cDiario);

  document.getElementById('textBox').style.backgroundColor = color;

  if (azucar > 25) {
    var blink = document.getElementById('textBox');
    setInterval(function () {
      blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
    }, 800);
  }

  if (edad >= 18) {
    var IMC = document.createElement("h1");
    IMC.innerHTML += "<br><br>Su IMC es " + (peso / Math.pow(altura / 100, 2)).toFixed(3);
    display.appendChild(IMC);
  }
}