$(document).ready( function () {
    setColor = "rgba(0, 0, 0, 0)";
    resetGrid();
});

$("#sketchpad").on("mouseenter", ".gridBlock", function () {
    var thisColor = $(this).css("background-color");
    if (setColor === "rgba(0, 0, 0, 0)") {
        if (thisColor === "rgba(0, 0, 0, 0)" ){
            var color = 'rgb('
                        + (Math.floor(Math.random() * 256)) + ','
                        + (Math.floor(Math.random() * 256)) + ','
                        + (Math.floor(Math.random() * 256)) + ')';
            $(this).css("background-color", color);
        }
    } else {
        $(this).css("background-color", setColor);
    }
});


function resetGrid() {
    $("#sketchpad").empty();
    var divCount = prompt("Please enter a size(1-200)");
    while (divCount > 200 || isNaN(divCount) || !divCount) {
        divCount = prompt("Please enter a number between 1 and 100");
    }

    var parentWidth = Math.ceil($('#sketchpad').width());
    var sizePercent = (parentWidth / divCount)/parentWidth * 100;

    for (i = 0; i < divCount; i++) {
        for (j = 0; j < divCount; j++) {
            $("#sketchpad").append("<div class='gridBlock'></div>")
        }
    }
    $(".gridBlock").width(sizePercent + "%");
    $(".gridBlock").height(sizePercent + "%");
}

function resetColors() {
    $(".gridBlock").css("background-color", "rgba(0, 0, 0, 0)");
    setColor = "rgba(0, 0, 0, 0)";
}

function pickColor() {
    var redVal = $("#red").val();
    var greenVal = $("#blue").val();
    var blueVal = $("#green").val();

    if (redVal > 255 || greenVal > 255 || blueVal > 255
        || isNaN(redVal) || isNaN(greenVal) || isNaN(blueVal)
        || !redVal || !greenVal || !blueVal) {
        alert("Invalid code entry!");
    } else {
        setColor = "rgb(" + redVal + "," + greenVal + "," + blueVal + ")";
    }
}