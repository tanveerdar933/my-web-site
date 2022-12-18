function checkPalindrome() {
    const valueFromInput = document.getElementById("stringInput").value.trim();
    if (valueFromInput) {
        const reversedString = valueFromInput.split("").reverse().join("");
        if (valueFromInput === reversedString) {
            document.getElementById("resultBox").innerHTML = "is palandrom";
        }
        else {
            document.getElementById("resultBox").innerHTML = "is not palandrom";
        }
    }
}
function clearScreen() {
    document.getElementById("resultBox").innerHTML = ">> Result <<";
    document.getElementById("stringInput").value = "";
}