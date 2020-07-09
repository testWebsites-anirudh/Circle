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

  let randomX = parseInt(Math.random() * (50 - 0) + 0);
  let randomY = parseInt(Math.random() * (60 - 0) + 0);
  let randomIndex = parseInt(Math.random() * (colors.length - 0) + 0);
  let randomRadius = parseInt(Math.random() * (50 - 2) + 2);
  let randomColor = colors[randomIndex];

  ctx.fillStyle = `${randomColor}`;
  ctx.arc(50, 50, 20, 0, 360);

  //setTimeout(randomCircles,200);
}

document.addEventListener("DOMContentLoaded", () => {
  randomCircles();
});
