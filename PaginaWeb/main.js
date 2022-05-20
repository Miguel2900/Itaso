let azucarV = [16,/*Lacteo bebible*/48,/*te verde*/24,/*chocolate polvo*/45,/*cola*/0,/*polvo agua*/6,/*danonino*/
  1,/*agua saborizada*/37,/*bebida deportiva*/42,/*horchata*/28,/*jamaica*/7,/*agua fruta jugo*/27,/*cola lata*/
  25,/*leche chocolate*/29,/*refresco lima*/30,/*refresco toronja*/33,/*te negro*/21,/*pulpa mango*/29,/*refresco manzana*/
  64,/*carbonatada*/31,/*refresco naranja*/31,/*nectar piña*/47,/*energetica*/32,/*refresco uva*/9,/*lactobacilos*/41,/*yogurt bebible*/
  11,/*griego bebible*/49,/*nectar manzana*/2.4,/*pulque*/0,/*Ron*/0,/*Brandy*/0,/*Carajillo*/3,/*cerveza botella*/0,/*charro negro*/
  0,/*Ginebra*/];
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

  maxBebidas = (edad < 18) ? 28 : 48;
  for (let i = 1; i < maxBebidas; i++) {
    if (i > 27) {
      imgNum = i + 27;
    } else {
      imgNum = i;
    }
    board.innerHTML += `<div class="container">
        <center>
            <img src="./images/beverages/${imgNum}.png">
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
  for (let i = 0; i < 27; i++) {
    value = document.getElementById(`contar${(i + 1)}`).innerHTML;
    azucar += value * azucarV[i];
  }

  document.getElementById("display").innerHTML = "";
  var display = document.getElementById("display");
  var h1 = document.createElement("h1");
  var cDiario = document.createElement("h1");

  h1.innerHTML = 'En total consumes ' + azucar + ' gramos de azucar';
  display.appendChild(h1);


  document.getElementById("display").innerHTML += `<br><img src="./front/Cuchara.png"><p>x${(azucar / 15).toFixed(1)} cucharadas soperas</p></img>`;

  if (azucar > 25) {
    cDiario.className = "red";
    cDiario.innerHTML += 'Tu consumo se excede del recomendado diario de 25 gramos';//cambio color
  }
  else {
    cDiario.className = "green";
    cDiario.innerHTML += 'Tu consumo se encuentra debajo del recomendado diario de 25 gramos';//cambio color
  }
  display.appendChild(cDiario);

  if (edad >= 18) {
    var IMC = document.createElement("h1");
    IMC.innerHTML += "Su IMC es " + (peso / Math.pow(altura / 100, 2)).toFixed(3);
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