function draw() {
  var canvas = document.getElementById('awesome');
  if (canvas.getContext){
    var c = canvas.getContext('2d');

    c.fillStyle = 'rgb(255, 221, 0)';
    c.fillRect(0, 0, 150, 37.5);
    c.fillStyle = 'rgb(102, 204, 0)';
    c.fillRect(0, 37.5, 150, 37.5);
    c.fillStyle = 'rgb(0, 153, 255)';
    c.fillRect(0, 75, 150, 37.5);
    c.fillStyle = 'rgb(255, 52, 0)';
    c.fillRect(0, 112.5, 150, 37.5);

    for (var i = 0; i < 10; i++){
      c.fillStyle = 'rgba(255, 255, 255, '+(i+1)/10 + ')';
      for (var j = 0; j < 4; j++) {
        c.fillRect(5 + i*14, 5 + j*37.5, 14, 27.5);
      }
    }


  } else {
    alert("fuck all yall");
  }
}