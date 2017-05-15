const drawTime = function (ctx, radius){
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  //hour
  hour=hour%12;
  hour=(hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
  drawHand(ctx, hour, radius*0.5, radius*0.07);
  //minute
  minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
  drawHand(ctx, minute, radius*0.8, radius*0.07);
  // second
  second=(second*Math.PI/30);
  drawHand(ctx, second, radius*0.9, radius*0.02);
}
