$( document ).ready(function() {

  setInterval(draw, 10);
  //

  var cor = 0.5
  var cof = 0.5
  //
  particle = new Particle(100,250,randomColour(),cof,cor)

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var x1
  var x2
  var y1
  var y2

  $( "#canvas" ).mousedown(function(canvas) {
    var offset = $(this).offset();
    x1 = canvas.clientX- offset.left;
    y1 = canvas.clientY- offset.top;

  });

  $( "#canvas").mouseup(function(canvas) {
    var offset = $(this).offset();
    x2 = canvas.clientX- offset.left;
    y2 = canvas.clientY- offset.top;
    particle = new Particle(x2, y2, randomColour(),cor,cof)
    particle.giveVelocity(x2-x1,y2-y1)
  });


  // $('#canvas').bind('click', function(canvas) {
  //   var offset = $(this).offset();
  //   x = canvas.clientX- offset.left;
  //   y = canvas.clientY- offset.top;
  //   particle = new Particle(x, y, randomColour(),cor,cof)
  //   particle.giveXVelocity()
  // })

  $("#particle").submit(function(event) {
  event.preventDefault();
  cor = ($(this).find("[name=cor]").val())/100;
  cof= ($(this).find("[name=cof]").val())/100;
  })

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particle.position()
    x = particle.xPos
    y = particle.yPos
    drawBall(x,y);
  };

  function drawBall(x,y) {
    ctx.beginPath();
    ctx.arc(x, y, particle.radius, 0, Math.PI*2);
    ctx.fillStyle = randomColour()
    ctx.fill();
    ctx.closePath();
  }

  //generate a random hexcode
  function randomColour() {
    var letters = '0123456789ABCDEF';
    var colour = '#';
    for (var i = 0; i < 6; i++) {
      colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
  }




});
