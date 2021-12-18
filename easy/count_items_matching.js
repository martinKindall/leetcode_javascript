/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
 var countMatches = function(items, ruleKey, ruleValue) {
    // filtering items can be an approach
    
    let filteringLambda;
    if (ruleKey === "type") {
        filteringLambda = item => item[0] === ruleValue;
    } else if (ruleKey === "color") {
        filteringLambda = item => item[1] === ruleValue;
    } else {
        filteringLambda = item => item[2] === ruleValue;
    }
    
    const filteredItems = items.filter(filteringLambda);
    
    return filteredItems.length;
};