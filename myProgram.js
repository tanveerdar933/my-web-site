function checkPalindrome(value) {
    let checker = value.split("").reverse().join("");
    return checker === value ? `${value} is a Palindrome` : `${value} is not a Palindrome`;
}
checkPalindrome("HEllO");