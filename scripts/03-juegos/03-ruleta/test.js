function circumPointFromAngle(cx, cy, r, a) {
  return [
    cx + r * Math.cos(a),
    cy + r * Math.sin(a)
  ];
}


// configuration values
var radius = 40;
var center = 60;

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
var values = data.map(function(record){ return record.value; })
var max = values.reduce(function(pre, cur) { return pre + cur; });
var ratios = values.map(function(val) { return val / max; });

// starting angle (this is -90° because svg counts zero as +90° to common sense)
var theta = -Math.PI * 0.5;

// for each ratio, lets build our segment
ratios.forEach(function(val, idx) {
  
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
  path.setAttribute('id', 'path-'+idx);
  path.style.fill = data[idx].color;

  var text = document.createElementNS("http://www.w3.org/2000/svg","text");
  var textPath = document.createElementNS("http://www.w3.org/2000/svg","textPath");
  textPath.textContent+="Testal;sdmgpoasdjfpoajsdopgjasdopgj";
  textPath.setAttribute('href','textcircle');

  text.appendChild(textPath)
  svg.appendChild(text);
  svg.appendChild(path);

});



function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("foodGroup", ev.target.getAttribute("foodGroup"));
  ev.dataTransfer.setData("name", ev.target.getAttribute("id"));
  console.log( ev.target.getAttribute("id"));
}

function drop(ev) {
  ev.preventDefault();
  var foodGroup = ev.dataTransfer.getData("foodGroup");
  var foodName = ev.dataTransfer.getData("name");
  validateFood(ev.target.getAttribute("label"), foodGroup, foodName);
}

function validateFood(group, foodGroup, foodName)
{
  if (foodGroup == group) {
    window.alert(foodName + " es un " + foodGroup + " y conincide con un " + group);
    food=document.getElementById(foodName);
    food.style.visibility="hidden";
  }
  else
  {
    window.alert(foodName + " no es un " + group + " es un " + foodGroup);
  }
}