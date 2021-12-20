/**
 * @param {string} sentence
 * @return {boolean}
 */
 var checkIfPangram = function(sentence) {
    // using set, we could simply check if the sentence is a superset of the 
    // alphabet
    
    const sentenceSet = new Set(sentence);
    const alphabet = new Set('abcdefghijklmnopqrstuvwxyz');
    
    for (char of alphabet) {
        if (!sentenceSet.has(char)) {
            return false;
        }
    }
    
    return true;
};