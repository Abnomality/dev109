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
    for (var k = 1; k < i; k++) {
      rLine += "&nbsp;&nbsp;&nbsp;";
    }
    for (var j = 1; j <= rHeight - i + 1; j++) {
      rLine += "<span style='color:" + ((j+i) % 2 ? colorEven : colorOdd) + ";'>" + symbol + "</span>";
    }
    rLine += "</p>";
  }
  document.getElementById("upLeft").innerHTML = rLine;
}



function upRight(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine ="";
for (i=0;i<pHeight;i++){
rLine +="<p>";
//Create each line on the Rhombus
for(j=0;j<=i;j++){

//Is the position even or odd so we change the color
if (j%2)
//even
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
else
//odd
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

}
rLine +="</p>";
// console.log(rLine);

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

function downRight(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine ="";
for (i=pHeight;i > 0;i--){
rLine +="<p>";
//Create each line on the Rhombus
for(j=0;j<i;j++){

//Is the position even or odd so we change the color
if (j%2)
//even
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
else
//odd
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

}
rLine +="</p>";
// console.log(rLine);

}

document.getElementById("downRight").innerHTML = rLine;
}
  document.getElementById("downRight").innerHTML = rLine;
}
