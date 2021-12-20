/**
 * @param {string} s
 * @return {string}
 */
 var toLowerCase = function(s) {
    // another solution without using dicts is to use char comparison
    // and from the char code just add 32 whenever it is an uppercased char
    // that would give the mapping to lowercased char.
    
    return s.split("").map(char => {
        if (char >= 'A' && char <= 'Z') {
            return String.fromCharCode(char.charCodeAt(0) + 32);
        }
        return char;
    }).join("");
};


var toLowerCaseDict = function(s) {
    // it is inevitable to iterate through the whole string
    // so best solution in time would be O(N)
    
    // using space O(26*2) = O(1) one can create a hashmap
    // for every char
    
    // and ignore special chars
    
    const alphabetDict = {
        'a': 'a',
        'b': 'b',
        'c': 'c',
        'd': 'd',
        'e': 'e',
        'f': 'f',
        'g': 'g',
        'h': 'h',
        'i': 'i',
        'j': 'j',
        'k': 'k',
        'l': 'l',
        'm': 'm',
        'n': 'n',
        'o': 'o',
        'p': 'p',
        'q': 'q',
        'r': 'r',
        's': 's',
        't': 't',
        'u': 'u',
        'v': 'v',
        'w': 'w',
        'x': 'x',
        'y': 'y',
        'z': 'z',
        'A': 'a',
        'B': 'b',
        'C': 'c',
        'D': 'd',
        'E': 'e',
        'F': 'f',
        'G': 'g',
        'H': 'h',
        'I': 'i',
        'J': 'j',
        'K': 'k',
        'L': 'l',
        'M': 'm',
        'N': 'n',
        'O': 'o',
        'P': 'p',
        'Q': 'q',
        'R': 'r',
        'S': 's',
        'T': 't',
        'U': 'u',
        'V': 'v',
        'W': 'w',
        'X': 'x',
        'Y': 'y',
        'Z': 'z'
    };
    
    const alphabetSet = new Set(Object.keys(alphabetDict));
    
    return s.split("").map(char => {
        if (alphabetSet.has(char)) {
            return alphabetDict[char];
        }
        return char;
    }).join("");
};