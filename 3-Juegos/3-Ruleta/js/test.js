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
    label: 'Alimentos de origen animal'
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
  path.setAttribute('data-label', data[idx].label);
  path.setAttribute('data-value', data[idx].value);
  path.setAttribute('data-normal', normal);
  path.style.fill = data[idx].color;
  svg.appendChild(path);
});



draggableElements = document.querySelectorAll(".draggable");
droppableElements = document.querySelectorAll(".droppable");

 draggableElements.forEach(elem => {
  elem.addEventListener("dragstart", dragStart);
  // elem.addEventListener("drag", drag);
  // elem.addEventListener("dragend", dragEnd);
 });

 function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id); // or "text/plain"
  // const img = new Image();
  // img.src =event.target.getAttribute("src");
  // event.dataTransfer.setDragImage(img, 0, 0);
}

//Events fired on the drop target

function dragEnter(event) {
  if(event.target.classList && event.target.classList.contains("droppable") && !event.target.classList.contains("dropped")) {
    event.target.classList.add("droppable-hover");
  }
}