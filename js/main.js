function draw() {
  var canvas = document.getElementById('awesome');
  if (canvas.getContext){
    var c = canvas.getContext('2d');
    c.fillStyle = "#FFFFFF";
    c.strokeStyle = "#FFFFFF";

  roundedRect(c,12,12,150,150,15);
  roundedRect(c,19,19,150,150,9);
  roundedRect(c,53,53,49,33,10);
  roundedRect(c,53,119,49,16,6);
  roundedRect(c,135,53,49,33,10);
  roundedRect(c,135,119,25,49,10);

  c.beginPath();
  c.arc(37,37,13,Math.PI/7,-Math.PI/7,false);
  c.lineTo(31,37);
  c.fill();
  for(var i=0;i<8;i++){
    c.fillRect(51+i*16,35,4,4);
  }
  for(i=0;i<6;i++){
    c.fillRect(115,51+i*16,4,4);
  }
  for(i=0;i<8;i++){
    c.fillRect(51+i*16,99,4,4);
  }
  c.beginPath();
  c.moveTo(83,116);
  c.lineTo(83,102);
  c.bezierCurveTo(83,94,89,88,97,88);
  c.bezierCurveTo(105,88,111,94,111,102);
  c.lineTo(111,116);
  c.lineTo(106.333,111.333);
  c.lineTo(101.666,116);
  c.lineTo(97,111.333);
  c.lineTo(92.333,116);
  c.lineTo(87.666,111.333);
  c.lineTo(83,116);
  c.fill();
  c.fillStyle = "white";
  c.beginPath();
  c.moveTo(91,96);
  c.bezierCurveTo(88,96,87,99,87,101);
  c.bezierCurveTo(87,103,88,106,91,106);
  c.bezierCurveTo(94,106,95,103,95,101);
  c.bezierCurveTo(95,99,94,96,91,96);
  c.moveTo(103,96);
  c.bezierCurveTo(100,96,99,99,99,101);
  c.bezierCurveTo(99,103,100,106,103,106);
  c.bezierCurveTo(106,106,107,103,107,101);
  c.bezierCurveTo(107,99,106,96,103,96);
  c.fill();
  c.fillStyle = "black";
  c.beginPath();
  c.arc(101,102,2,0,Math.PI*2,true);
  c.fill();
  c.beginPath();
  c.arc(89,102,2,0,Math.PI*2,true);
  c.fill();

function roundedRect(c,x,y,width,height,radius){
  c.beginPath();
  c.moveTo(x,y+radius);
  c.lineTo(x,y+height-radius);
  c.quadraticCurveTo(x,y+height,x+radius,y+height);
  c.lineTo(x+width-radius,y+height);
  c.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
  c.lineTo(x+width,y+radius);
  c.quadraticCurveTo(x+width,y,x+width-radius,y);
  c.lineTo(x+radius,y);
  c.quadraticCurveTo(x,y,x,y+radius);
  c.stroke();
}




  } else {
    alert("fuck all yall");
  }
}