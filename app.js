let backgroundEl = document.getElementById("background");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let totalNumber = 0;

var changeBackground = function () {
  backgroundEl.style.width = totalNumber + "%"
}

// Declare func that gets triggered everytime a btn is clicked
var clickedBtn = function (name) {
  // console.log("clicked " + name + " button");
  if (name === "plus") {
    if (totalNumber <= 90) {
      totalNumber += 10;
      changeBackground();
      console.log(totalNumber)
    } else {
      alert("Sorry cant go higher!");
    }
  }

  if (name === "minus") {
    if (totalNumber >= 10) {
      totalNumber -= 10;
      changeBackground();
      console.log(totalNumber)
    } else {
      alert("Sorry cant go lower!");
    }
  }
};


// Adding event listeners
plus.addEventListener("click", clickedBtn.bind(null, "plus"));
minus.addEventListener("click", clickedBtn.bind(null, "minus"));
