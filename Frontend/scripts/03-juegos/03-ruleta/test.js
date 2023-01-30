var pieces = document.getElementsByClassName("draggable");
var div = document.getElementById("foodContainer");


for (var i = 0; i < pieces.length; i++) {
  pieces[i].style.position = "absolute";
  pieces[i].style.left = (Math.random() * (div.offsetWidth - 30 - 1)) + 1 + 'px';
  pieces[i].style.top = (Math.random() * (div.offsetHeight - 1)) + 1 + 'px';
  console.log(pieces[i].style.top);
}

function circumPointFromAngle(cx, cy, r, a) {
  return [
    cx + r * Math.cos(a),
    cy + r * Math.sin(a)
  ];
}

// configuration values
var radius = 50;
var center = 50;

// out actual data
var data = [
  {
    value: 17,
    color: '#ccebd7',
    label: 'Verduras'
  },
  {
    value: 17,
    color: '#f0b5ab',
    label: 'Animal'
  },
  {
    value: 17,
    color: '#e1ac97',
    label: 'Leguminosas'
  },
  {
    value: 32,
    color: '#faf3dc',
    label: 'Cereales'
  },
  {
    value: 17,
    color: '#e3f4ea',
    label: 'Frutas'
  }
];

// get the svg element so we can appendChild later
var svg = document.querySelector('#svg');

// reduce the values to get the max and then use it to map the values to ratios
var values = data.map(function (record) { return record.value; })
var max = values.reduce(function (pre, cur) { return pre + cur; });
var ratios = values.map(function (val) { return val / max; });

// starting angle (this is -90° because svg counts zero as +90° to common sense)
var theta = -Math.PI * 0.5;

// for each ratio, lets build our segment
ratios.forEach(function (val, idx) {

  // Get the angle of the segment (delta)
  var delta = val * 2 * Math.PI;

  // also get the normal from the center of this segment (for transition)
  var normal = theta + delta * 0.5;

  // These are the points on the circumfrence that the arc starts and ends
  var startPos = circumPointFromAngle(center, center, radius, theta);
  var endPos = circumPointFromAngle(center, center, radius, theta + delta);

  // Add the current delta to theta for the next segment
  theta += delta;

  // if the arc is greater than 180° we need to use the large arc flag
  var largeArc = '0 0 1';
  if (delta >= Math.PI) {
    largeArc = '0 1 0';
  }

  // for convenience store each path command in an array
  var actions = [];
  actions.push('M ' + center + ' ' + center);
  actions.push('L ' + startPos.join(' '));
  actions.push('A ' + radius + ' ' + radius + ' ' + largeArc + ' ' + endPos.join(' '));
  actions.push('Z');

  // create the element, set the d attr, data attrs and fill style
  var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute('d', actions.join('\n'));
  path.setAttribute('label', data[idx].label);
  path.setAttribute('ondragover', 'allowDrop(event)');
  path.setAttribute('ondrop', 'drop(event)');
  path.setAttribute('id', 'path-' + idx);
  path.style.fill = data[idx].color;

  var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  var textPath = document.createElementNS("http://www.w3.org/2000/svg", "textPath");
  textPath.textContent += "Testal;sdmgpoasdjfpoajsdopgjasdopgj";
  textPath.setAttribute('href', 'textcircle');

  text.appendChild(textPath)
  svg.appendChild(text);
  svg.appendChild(path);

});

var rouletteGroup;
groupBadge = document.getElementById("groupBadge");

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("foodGroup", ev.target.getAttribute("foodGroup"));
  ev.dataTransfer.setData("name", ev.target.getAttribute("id"));
}

function drop(ev) {
  ev.preventDefault();
  var foodGroup = ev.dataTransfer.getData("foodGroup");
  var foodName = ev.dataTransfer.getData("name");
  validateFood(ev.target.getAttribute("label"), foodGroup, foodName);
}

function validateFood(group, foodGroup, foodName) {
  if (foodGroup == group && foodGroup == rouletteGroup && group == rouletteGroup) {
    food = document.getElementById(foodName);
    // food.style.visibility = "hidden";
    $(document).ready(function () {
      $("#" + foodName).fadeOut();
    });
    rouletteGroup = undefined;
    groupBadge.innerHTML = "";
  }
}

const roulette = document.querySelector("#ruleta");

roulette.addEventListener("click", girar);
spins = 0;

function girar() {
  let rand = Math.random() * 7200;
  calcular(rand);
}

function calcular(rand) {
  valor = rand / 360;
  valor = (valor - parseInt(valor.toString().split(".")[0])) * 360;
  console.log(valor);
  ruleta.style.transform = "rotate(" + rand + "deg)";

  setTimeout(() => {
    switch (true) {
      case (valor > 0 && valor <= 36) || (valor <= 360 && valor > 324):
        rouletteGroup = "Verduras";
        //premio("Verduras");
        break;
      case valor > 36 && valor <= 108:
        rouletteGroup = "Cereales";
        //premio("Frutas");
        break;
      case valor > 108 && valor <= 180:
        rouletteGroup = "Leguminosas";
        //premio("Cereales");
        break;
      case valor > 180 && valor <= 252:
        rouletteGroup = "Animal";
        //premio("Leguminosas");
        break;
      case valor > 252 && valor <= 324:
        rouletteGroup = "Frutas";
        //premio("Origen animal");
        break;
    }
    groupBadge.innerHTML = rouletteGroup;
  }, 5000);
}
