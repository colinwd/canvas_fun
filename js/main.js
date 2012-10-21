(function() {
  Crafty.init(600, 300);
  Crafty.background('rgb(127,127,127)');

  //Paddles
  Crafty.e("Paddle, 2D, DOM, Color, Multiway")
    .color('rgb(255,0,0)')
    .attr({ x: 20, y: 100, w: 10, h: 50 })
    .multiway(7, { W: -90, S: 90 } )
    .bind('EnterFrame', function() {
      if (this.y <= 0) {
        this.y = 0;
      }

      if (this.y >= 250) {
        this.y = 250;
      }
    });
  Crafty.e("Paddle, 2D, DOM, Color, Multiway")
    .color('rgb(0,255,0)')
    .attr({ x: 580, y: 100, w: 10, h: 50 })
    .multiway(7, { UP_ARROW: -90, DOWN_ARROW: 90})
    .bind('EnterFrame', function() {
      if (this.y <= 0) {
        this.y = 0;
      }

      if (this.y >= 250) {
        this.y = 250;
      }
    });

    //Ball
    Crafty.e("2D, DOM, Color, Collision")
      .color('rgb(0,0,255)')
      .attr({ x: 300, y: 150, w: 10, h: 10,
              dX: 3,
              dY: 3 })
      .bind('EnterFrame', function() {
        //hit floor or roof
        if (this.y <= 0 || this.y >= 290) {
          this.dY *= -1;
        }

        //Right side
        if (this.x > 600) {
          this.x = 300;
          this.dX = 3;
          Crafty("LeftPoints").each(function() {
            this.text(++this.points + " Points")
          });
        }

        //Left side
        if (this.x < 10) {
          this.x = 300;
          this.dX = -3;
          Crafty("RightPoints").each(function() {
            this.text(++this.points + " Points")
          });
        }

        this.x += this.dX;
        this.y += this.dY;
      })
      .onHit('Paddle', function() {
        this.dX *= -1;

        if (this.dX < 8) {
          this.dX *= 1.1;
        }

        if (this.dX > 11.5) {
          this.dX = 11.5;
        }
      })

  //Score boards
  Crafty.e("LeftPoints, DOM, 2D, Text")
    .attr({ x: 20, y: 20, w: 100, h: 20, points: 0 })
    .text("0 Points");
  Crafty.e("RightPoints, DOM, 2D, Text")
    .attr({ x: 515, y: 20, w: 100, h: 20, points: 0 })
    .text("0 Points");

})();