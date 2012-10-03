function draw() {
  var canvas = document.getElementById('awesome');
  if (canvas.getContext){
    var c = canvas.getContext('2d');
    c.fillStyle = "#FFFFFF";
    c.strokeStyle = "#FFFFFF";

    var smileyFace = function(x, y) {
      c.beginPath();
      c.arc(75+x, 75+y, 50, 0, Math.PI*2, true); //head
      c.moveTo(110+x,75+y);
      c.arc(75+x, 75+y, 35, 0, Math.PI, false); //smile
      c.moveTo(65+x, 65+y);
      c.arc(60+x, 65+y, 5, 0, Math.PI*2, true); //left eye
      c.moveTo(95+x, 65+y);
      c.arc(90+x, 65+y, 5, 0, Math.PI*2, true); //right eye
      c.stroke();
    };

    smileyFace(300, 300);

    var speechBubble = function(x, y) {
      c.beginPath();
      c.moveTo(75+x, 25+y);
      c.quadraticCurveTo(25+x, 25+y, 25+x, 62.5+y);
      c.quadraticCurveTo(25+x, 100+y, 50+x, 100+y);
      c.quadraticCurveTo(50+x, 120+y, 30+x, 125+y);
      c.quadraticCurveTo(60+x, 120+y, 65+x, 100+y);
      c.quadraticCurveTo(125+x, 100+y, 125+x, 62.5+y);
      c.quadraticCurveTo(125+x, 25+y, 75+x, 25+y);
      c.stroke();
    };

    speechBubble(420, 250);




  } else {
    alert("fuck all yall");
  }
}