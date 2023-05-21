var input1;
var input2;



function button() {
    alert("Whore.");
}

function buttontwo() {
    alert("I love you <3");
}

function changevalues() {
    input1 = Number(document.getElementById("number1").value);
    input2 = Number(document.getElementById("number2").value);
    document.getElementById("output").innerHTML = sum(input1,input2);
}

function sum(number1, number2) {
    var todd = number1 + number2;
    return todd

}