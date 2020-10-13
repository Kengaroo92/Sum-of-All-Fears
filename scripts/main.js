function sumFears() {

    let input1 = parseInt(document.getElementById("userInput1").value);
    let input2 = parseInt(document.getElementById("userInput2").value);
    let input3 = parseInt(document.getElementById("userInput3").value);
    let input4 = parseInt(document.getElementById("userInput4").value);
    let input5 = parseInt(document.getElementById("userInput5").value);
    let kValue = parseInt(document.getElementById("userInputK").value);

    let sumArray = [input1, input2, input3, input4, input5];

    let checkValue = 0;
    let found = false;

    for (let i = 0; i < sumArray.length; i++) {
        checkValue = kValue - sumArray[i];

        if (sumArray.includes(checkValue, i + 1)) {
            found = true;
            break;
        }
    }
    document.getElementById("output").innerHTML = `True or false, there is a pair? : ${found.toString()}`;
}