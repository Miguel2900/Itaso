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
    azucar = azucar/13;
    console.log("Total de cucharadas rasaa de azucar en la semana:", azucar); 

    const resultado = document.getElementById("azucar");
   

    //const image = document.createElement('img')
    //image.src = './front/Cuchara.png'
    //document.querySelector('contenderImg').appendChild(image)

    parseInt(azucar)
    let n = 0;
    img = '<img src="./front/Cuchara.png" />';

    

    while (n < azucar) {
        if(n==1){
            document.getElementById("display").innerHTML="";
            var display = document.getElementById("display");
            var h1 = document.createElement("h1");
            h1.innerHTML = azucar +' Cucharadas de azucar ';
            display.appendChild(h1);
        }
        
        resultado.innerHTML = azucar
        document.getElementById("display").innerHTML +='<img src="./front/Cuchara.png" />';
        //document.write(img);
        n ++;
    }


  }