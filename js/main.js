var draw = function() {
  var canvas = document.getElementById('awesome');
  if (canvas.getContext){
    var c = canvas.getContext('2d');
    c.fillStyle = "#FFFFFF";
    c.strokeStyle = "#00FFFF";

    c.beginPath();
    c.arc(75, 75, 50, 0, Math.PI*2, true); //head
    c.moveTo(110,75);
    c.arc(75, 75, 35, 0, Math.PI, false); //smile
    c.moveTo(65, 65);
    c.arc(60, 65, 5, 0, Math.PI*2, true); //left eye
    c.moveTo(95, 65);
    c.arc(90, 65, 5, 0, Math.PI*2, true); //right eye
    c.stroke();


  } else {
    alert("fuck all yall");
  }
};