/**
 * @param {string} s
 * @return {string}
 */
 var sortSentence = function(s) {
    const splittedSentence = s.split(" ");
    
    const dictSentence = {};
    splittedSentence.forEach(word => {
        const position = word.slice(-1);
        dictSentence[position] = word.slice(0, -1);
    });
    
    let i;
    let result = "";
    for (i = 0; i < splittedSentence.length; i++) {
        result += dictSentence[(i+1) + ""];
        
        if (i !== splittedSentence.length - 1) {
            result += " ";
        }
    }
    
    return result;
};