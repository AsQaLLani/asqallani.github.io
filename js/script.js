var canvas=document.getElementsById("canvas");
var ctx=canvas.getContext("2d");
var radius=canvas.height/2;
ctx.translate(radius,radius);
radius = radius * 0.90;

setInterval(drawClock,1000);