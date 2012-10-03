var draw = function() {
  var canvas = document.getElementById('awesome');
  if (canvas.getContext){
    var c = canvas.getContext('2d');
    c.fillStyle = "#FFFFFF";
    c.strokeStyle = "#FFFFFF";

    c.beginPath();
    c.moveTo(25, 25);
    c.lineTo(105, 25);
    c.lineTo(25, 105);
    c.fill();

    c.beginPath();
    c.moveTo(125, 125);
    c.lineTo(125, 45);
    c.lineTo(45, 125);
    c.closePath();
    c.stroke();



  } else {
    alert("fuck all yall");
  }
};