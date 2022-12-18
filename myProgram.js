function checkPalindrome() {
    const valueFromInput = document.getElementById("stringInput").value.trim();
    if (valueFromInput || valueFromInput.length <= 10) {
        const reversedString = valueFromInput.split("").reverse().join("");
        if (valueFromInput === reversedString) {
            document.getElementById("resultBox").innerHTML = "is palandrom";
        }
        else {
            document.getElementById("resultBox").innerHTML = "is not palandrom";
        }
    }
    else if (valueFromInput.length > 10) {
        document.getElementById("resultBox").innerHTML = "String must be max 10 char";
    }
}
function clearScreen() {
    document.getElementById("resultBox").innerHTML = ">> Result <<";
    document.getElementById("stringInput").value = "";
}