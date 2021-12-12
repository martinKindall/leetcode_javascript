/**
 * @param {string} address
 * @return {string}
 */
 var defangIPaddr = function(address) {
    // without using split and replace
    // iterating over the string, meanwhile copying numbers
    // whenever a . appears, then replace it with [.]
    
    // time O(N)
    // space O(N) as creates a new string
    
    let newIp = "";
    
    let idx;
    
    for (idx = 0; idx < address.length; idx++) {
        const character = address.charAt(idx);
        if (character === '.') {
            newIp += "[.]";
        } else {
            newIp += character;
        }
    }
    
    return newIp;
};