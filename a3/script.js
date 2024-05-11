function createRhombus() {
  var rHeight = document.getElementById('rHeight').value;
  var colorEven = document.getElementById('colorEven').value;
  var colorOdd = document.getElementById('colorOdd').value;
  var symbol = document.getElementById('symbol').value;

  upLeft(rHeight, colorEven, colorOdd, symbol);
  upRight(rHeight, colorEven, colorOdd, symbol);
  downLeft(rHeight, colorEven, colorOdd, symbol);
  downRight(rHeight, colorEven, colorOdd, symbol);
}

function upLeft(rHeight, colorEven, colorOdd, symbol) {
  var rLine = "";
  for (var i = 1; i <= rHeight; i++) {
    rLine += "<p>";
    for (var j = 1; j <= i; j++) {
      rLine += "<span style='color:" + (j % 2 ? colorEven : colorOdd) + ";'>" + symbol + "</span>";
    }
    rLine += "</p>";
  }
  document.getElementById("upLeft").innerHTML = rLine;
}

function upRight(rHeight, colorEven, colorOdd, symbol) {
  var rLine = "";
  for (var i = 1; i <= rHeight; i++) {
    rLine += "<p>";
    for (var j = 1; j <= rHeight - i; j++) {
      rLine += "<span style='color:" + (j % 2 ? colorEven : colorOdd) + ";'>" + symbol + "</span>";
    }
    rLine += "</p>";
  }
  document.getElementById("upRight").innerHTML = rLine;
}

function downLeft(rHeight, colorEven, colorOdd, symbol) {
  var rLine = "";
  for (var i = rHeight; i >= 1; i--) {
    rLine += "<p>";
    for (var j = 1; j <= i; j++) {
      rLine += "<span style='color:" + (j % 2 ? colorEven : colorOdd) + ";'>" + symbol + "</span>";
    }
    rLine += "</p>";
  }
  document.getElementById("downLeft").innerHTML = rLine;
}

function downRight(rHeight, colorEven, colorOdd, symbol) {
  var rLine = "";
  for (var i = rHeight; i >= 1; i--) {
    rLine += "<p>";
    for (var j = 1; j <= rHeight - i; j++) {
      rLine += "<span style='color:" + (j % 2 ? colorEven : colorOdd) + ";'>" + symbol + "</span>";
    }
    rLine += "</p>";
  }
  document.getElementById("downRight").innerHTML = rLine;
}
