function randomCircles() {
  var canvas = document.querySelector("#canvas");
  var ctx = canvas.getContext("2d");
  var colors = [
    "#E0DDCF",
    "#C75000",
    "#F46036",
    "#1B998B",
    "#C5D86D",
    "#52FFB8",
    "#F9DB6D",
    "#33658A",
  ];

  var randomX = Math.ceil( 50 * Math.random());
  var randomY = Math.ceil( 50 * Math.random());
  let randomIndex = parseInt(Math.random() * (colors.length - 0) + 0);
  var randomRadius = Math.ceil( 50 * Math.random());
  let randomColor = colors[randomIndex];

  ctx.strokeStyle = `${randomColor}`;
  ctx.fillStyle = `${randomColor}`;
  ctx.beginPath();
  ctx.arc(randomX, randomY, randomRadius 0, 2*Math.PI);
  ctx.stroke();
  ctx.fill();   
  ctx.closePath();

  setTimeout(randomCircles,200);
}

document.addEventListener("DOMContentLoaded", () => {
  randomCircles();
});
