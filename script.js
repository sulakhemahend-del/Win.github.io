var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");

colorDisplay.textContent = pickedColor;

// सभी squares पर क्लिक इवेंट जोड़ें
for(var i = 0; i < squares.length; i++){
    // शुरुआती रंग दें
    squares[i].style.backgroundColor = colors[i];

    // क्लिक लिसनर जोड़ें
    squares[i].addEventListener("click", function(){
        // क्लिक किए गए वर्ग का रंग लें
        var clickedColor = this.style.backgroundColor;
        
        // देखें कि क्या यह सही रंग है
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323"; // गलत होने पर वर्ग को बैकग्राउंड रंग में बदलें
            messageDisplay.textContent = "Try Again";
        }
    });
}

// नया गेम शुरू करने के लिए बटन
resetButton.addEventListener("click", function(){
    // रंग फिर से generate करें
    colors = generateRandomColors(numSquares);
    // एक नया सही रंग चुनें
    pickedColor = pickColor();
    // RGB कोड को अपडेट करें
    colorDisplay.textContent = pickedColor;
    // बटन टेक्स्ट को 'New Colors' पर वापस सेट करें
    this.textContent = "New Colors";
    // मैसेज को खाली करें
    messageDisplay.textContent = "";
    // squares के रंग बदलें
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    // H1 बैकग्राउंड को रीसेट करें
    h1.style.backgroundColor = "steelblue";
});

// जीतने पर सभी वर्गों का रंग बदलें
function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

// colors array से एक random रंग चुनें
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// random RGB रंगों का एक array generate करें
function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

// एक individual random RGB रंग generate करें
function randomColor(){
    // 0 से 255 तक random लाल (red)
    var r = Math.floor(Math.random() * 256);
    // 0 से 255 तक random हरा (green)
    var g = Math.floor(Math.random() * 256);
    // 0 से 255 तक random नीला (blue)
    var b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
