const checkInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const textResult = document.getElementById("result");

checkButton.addEventListener("click", function() {
    var textInput = removeNonAlphanumeric(checkInput.value.toLowerCase().replaceAll(" ", ""));

    if (textInput === "") {
        alert("Please input a value");
    }
    else if (textInput.length === 1) {
        textResult.innerText = `${checkInput.value} is a palindrome`;
    }
    else if (textInput.length > 1) {
        var i = 0;
        while (textInput[i] === textInput[textInput.length - 1 - i] && i < textInput.length/2) {
            i++;
        }
        if (i >= textInput.length/2) {
            textResult.innerText = `${checkInput.value} is a palindrome`;
        } 
        else {
            textResult.innerText = `${checkInput.value} is not a palindrome`;
        }
    }
});

function removeNonAlphanumeric(inputString) {
    return inputString.replace(/[^a-zA-Z0-9]/g, '');
};