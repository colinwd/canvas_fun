function draw() {
  var canvas = document.getElementById('awesome');
  if (canvas.getContext) {
    var c = canvas.getContext('2d');

    // Create gradients
  var radgrad = c.createRadialGradient(45,45,10,52,50,30);
  radgrad.addColorStop(0, '#A7D30C');
  radgrad.addColorStop(0.9, '#019F62');
  radgrad.addColorStop(1, 'rgba(1,159,98,0)');

  var radgrad2 = c.createRadialGradient(105,105,20,112,120,50);
  radgrad2.addColorStop(0, '#FF5F98');
  radgrad2.addColorStop(0.75, '#FF0188');
  radgrad2.addColorStop(1, 'rgba(255,1,136,0)');

  var radgrad3 = c.createRadialGradient(95,15,15,102,20,40);
  radgrad3.addColorStop(0, '#00C9FF');
  radgrad3.addColorStop(0.8, '#00B5E2');
  radgrad3.addColorStop(1, 'rgba(0,201,255,0)');

  var radgrad4 = c.createRadialGradient(0,150,50,0,140,90);
  radgrad4.addColorStop(0, '#F4F201');
  radgrad4.addColorStop(0.8, '#E4C700');
  radgrad4.addColorStop(1, 'rgba(228,199,0,0)');

  // draw shapes
  c.fillStyle = radgrad4;
  c.fillRect(0,0,150,150);
  c.fillStyle = radgrad3;
  c.fillRect(0,0,150,150);
  c.fillStyle = radgrad2;
  c.fillRect(0,0,150,150);
  c.fillStyle = radgrad;
  c.fillRect(0,0,150,150);



  } else {
    alert("fuck all yall");
  }
}