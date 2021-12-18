/**
 * @param {string} command
 * @return {string}
 */
 var interpret = function(command) {
    // G -> G easy
    // ( can be a bit tricky, because the following
    // char can be either a ) or an al).
    
    // so the algorithm could be reading every char of the string
    // and advance the proper steps according to the next char
    
    let i;
    let result = "";
    
    for (i = 0; i < command.length;) {
        const currChar = command.charAt(i);
        
        if (currChar === 'G') {
            result += "G";
            i++;
        } else if (currChar === "(") {
            if (")" === command.charAt(i+1)) {
                result += "o";
                i += 2;
            } else {
                result += "al";
                i += 4;
            }
        }
    }
    
    return result;
};