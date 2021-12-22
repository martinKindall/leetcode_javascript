/**
 * @param {string[]} words
 * @return {string}
 */
 var firstPalindrome = function(words) {
    return words.find(word => isPalindrome(word)) || "";
};

function isPalindrome(word) {
    const size = word.length;
    
    let i;
    for (i=0; i < size / 2; i++) {
        if (word.charAt(i) !== word.charAt(size-i - 1)) {
            return false;
        }
    }
    
    return true;
}