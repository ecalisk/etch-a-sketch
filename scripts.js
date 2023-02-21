/* func: Create squares */
function createSquares(gridSize) {
  const grid = document.querySelector("#grid-container");
  for (i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    const squareSize = parseFloat(360 / gridSize).toPrecision(7);
    square.style.width = squareSize + "px";
    square.style.height = squareSize + "px";
    square.style.backgroundColor = "white";
    grid.appendChild(square);
    square.addEventListener("mouseenter", function () {
      square.style.backgroundColor = "black";
    });
  }
}

/* MAIN */
createSquares(128);
