let rectangleBtn = document.getElementById("rectangle-btn");
rectangleBtn.addEventListener("click", function () {
  let w = getValueByID("rectangle-w");
  let l = getValueByID("rectangle-l");

  let rectangleArea = w * l;

  let displayRectangle = document.getElementById("display-rectangle");
  displayRectangle.innerText = rectangleArea;
});
