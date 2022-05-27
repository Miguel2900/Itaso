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
            <img src="./images/beverages/${i}.png">
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


  document.getElementById("display").innerHTML += `<br><img src="./front/Cuchara.png"><h1>x${(azucar / 15).toFixed(1)} cucharadas soperas</h1></img>`;

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












/*
function calcularAzucar() {
  let contar = "contar";
  let aux = "contar";
  let contador = 0;
  let azucar = 0;

  for (let i = 1; i <= 6; i++) {
    contar = contar + i;
    console.log("Refresco:", contar);
    contador = document.getElementById(contar).innerHTML;
    console.log("Cuantos refrescos:", contador);

    switch (i) {
      case 1:
        azucar += contador * 45;
        console.log("Entró 1:", contador, "* 45");
        break;
      case 2:
        azucar += contador * 27;
        console.log("Entró 2:", contador, "* 27");
        break;
      case 3:
        azucar += contador * 30;
        console.log("Entró 3:", contador, "* 30");
        break;
      case 4:
        azucar += contador * 29;
        console.log("Entró 4:", contador, "* 29");
        break;
      case 5:
        azucar += contador * 31;
        console.log("Entró 5:", contador, "* 31");
        break;
      case 6:
        azucar += contador * 29;
        console.log("Entró 6:", contador, "* 29");
        break;
      case 7:
        azucar += contador * 32;
        console.log("Entró 7:", contador, "* 32");
        break;
      case 8:
        azucar += contador * 64;
        console.log("Entró 8:", contador, "* 64");
        break;
      case 9:
        azucar += contador * 31;
        console.log("Entró 9");
        break;
      case 10:
        azucar += contador * 49;
        console.log("Entró 10");
        break;
      case 11:
        azucar += contador * 21;
        console.log("Entró 11");
        break;
      case 12:
        azucar += contador * 7;
        console.log("Entró 12");
        break;
      case 13:
        azucar += contador * 1;
        console.log("Entró 13");
        break;
      case 14:
        azucar += contador * 42;
        console.log("Entró 14");
        break;
      case 15:
        azucar += contador * 28;
        console.log("Entró 15");
        break;
      case 16:
        azucar += contador * 0;
        console.log("Entró 16");
        break;
      case 17:
        azucar += contador * 24;
        console.log("Entró 17");
        break;
      case 18:
        azucar += contador * 37;
        console.log("Entró 18");
        break;
      case 19:
        azucar += contador * 47;
        console.log("Entró 19");
        break;
      case 20:
        azucar += contador * 33;
        console.log("Entró 20");
        break;
      case 21:
        azucar += contador * 48;
        console.log("Entró 21");
        break;
      case 22:
        azucar += contador * 25;
        console.log("Entró 22");
        break;
      case 23:
        azucar += contador * 9;
        console.log("Entró 23");
        break;
      case 24:
        azucar += contador * 41;
        console.log("Entró 24");
        break;
      case 25:
        azucar += contador * 16;
        console.log("Entró 25");
        break;
      case 26:
        azucar += contador * 6;
        console.log("Entró 26");
        break;
    }
    console.log("Azucar:", azucar);
    contar = aux;
  }
  console.log("Total de gr de azucar en la semana:", azucar);
  azucar = azucar / 13;
  console.log("Total de cucharadas rasaa de azucar en la semana:", azucar);

  const resultado = document.getElementById("azucar");


  //const image = document.createElement('img')
  //image.src = './front/Cuchara.png'
  //document.querySelector('contenderImg').appendChild(image)

  parseInt(azucar)
  let n = 0;
  img = '<img src="./front/Cuchara.png" />';



  while (n < azucar) {
    if (n == 1) {
      document.getElementById("display").innerHTML = "";
      var display = document.getElementById("display");
      var h1 = document.createElement("h1");
      h1.innerHTML = azucar + ' Cucharadas de azucar ';
      display.appendChild(h1);
    }

    resultado.innerHTML = azucar
    document.getElementById("display").innerHTML += '<img src="./front/Cuchara.png" />';
    //document.write(img);
    n++;
  }


}*/