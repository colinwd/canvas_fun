var draw = function() {
  var canvas = document.getElementById('awesome');
  if (canvas.getContext){
    var c = canvas.getContext('2d');
    c.fillStyle = "#FFFFFF";
    c.strokeStyle = "#FFFFFF";

    for (var i = 0; i < 4; i++) {
      for (var j=0; j < 3; j++) {
        c.beginPath();
        var x = 25 + j*50; // x coordinate
        var y = 25 + i*50; // y coordinate
        var radius = 20; // Arc radius
        var startAngle = 0; // Starting point on circle
        var endAngle = Math.PI+(Math.PI*j)/2; //End point on circle
        var anticlockwise = i % 2 === 0 ? false : true; // clockwise or anticlockwise

        c.arc(x, y, radius, startAngle, endAngle, anticlockwise);

        if (i > 1) {
          c.fill();
        } else {
          c.stroke();
        }
      }
    }



  } else {
    alert("fuck all yall");
  }
};