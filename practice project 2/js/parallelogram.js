let parallelogramBtn = document.getElementById("parallelogram-btn");
parallelogramBtn.addEventListener("click", function () {
  let parallelogramBase = getValueByID("parallelogram-b");
  let parallelogramHeight = getValueByID("parallelogram-h");
//   console.log(parallelogramBase, parallelogramHeight);
  let parallelogramArea = parallelogramBase * parallelogramHeight;
//   console.log(parallelogramArea);
  function showParallelogram(parallelogramShowId, parallelogramValue) {
    let parallelogramShow = document.getElementById(parallelogramShowId);
    parallelogramShow.innerText = parallelogramValue;
  }

  showParallelogram("display-parallelogram", parallelogramArea);
});
