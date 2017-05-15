var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90

function drawClock() {
  ctx.arc(0, 0, radius, 0 , 2*Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

drawClock();
setInterval(drawClock, 1000);
