// Our functtion to perform our
function checkPalindrome() {
    // Grabs our current text in our input element
    const inputText = document.getElementById("textInput").value;

    // Process text removes spaces and converts to lowercase
    const processedText = inputText.replace(/[\W_]/g, '').toLowerCase();
    
    // This reverses the processed text
    const reversedText = processedText.split('').reverse().join('');

    // Checks if the original processed text is the same as the our reversed text
    const isPalindrome = processedText == reversedText;

    // Outputs our results to the webpage
    const resultElement = document.getElementById("result");
    // Our if statement displays if we have a palindrome after the word is checked 
    if (isPalindrome) {
        resultElement.innerHTML = `"${inputText}" is a palindrome!`;
        // Our else statement displays if our word isn't a palindrome
    } else {
        resultElement.innerHTML = `"${inputText}" is not a palindrome. :(`;
    }
}