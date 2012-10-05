function draw() {
  var canvas = document.getElementById('awesome');
  if (canvas.getContext){
    var c = canvas.getContext('2d');

    for(var i = 0; i < 6; i++) {
      for (var j = 0; j < 6; j++) {
        for (var k = 0; k < 6; k++) {
          for (var l = 0; l < 6; l++) {
            c.fillStyle = 'rgb(' + Math.floor(255-(42.5/l)*i) + ', ' + Math.floor(255-(42.5/l)*j) + ', ' + Math.floor(255-(42.5/l)*k) + ')';
            c.fillRect((i*25)+(k*150), (j*25)+(l*150), 25, 25);
          }
        }
      }
    }




  } else {
    alert("fuck all yall");
  }
}