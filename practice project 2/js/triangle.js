let calBtn = document.getElementById("cal-btn");

calBtn.addEventListener("click", function () {
  let b = getValueByID("base");
  let h = getValueByID("height");

  let area = 0.5 * b * h;

  // let displayShow = document.getElementById("display-value");

  // displayShow.innerText = area;

  function showArea(showId, calArea) {
    let showSomething = document.getElementById(showId);
    return showSomething.innerText = calArea;
  }

  showArea("display-value", area);
});
