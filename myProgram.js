function checkPalindrome() {
    const valueFromInput = document.getElementById("stringInput").value.trim();
    if (valueFromInput && valueFromInput.length <= 10) {
        const reversedString = valueFromInput.split("").reverse().join("");
        if (valueFromInput === reversedString) {
            document.getElementById("resultBox").innerHTML = `${valueFromInput} is a Palindrome`;
        }
        else {
            document.getElementById("resultBox").innerHTML = `${valueFromInput} is not a Palindrome`;
        }
    }
    else if(valueFromInput.length > 10) {
        document.getElementById("resultBox").innerHTML = "String must be max 10 char";
    }
    else{
        document.getElementById("resultBox").innerHTML = ">> Enter String First <<";
    }
}
function clearScreen() {
    document.getElementById("resultBox").innerHTML = ">> Result <<";
    document.getElementById("stringInput").value = "";
}