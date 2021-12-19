/**
 * @param {number[][]} edges
 * @return {number}
 */
 var findCenter = function(edges) {
    // we could count how many times appear each element
    // and return the only element that repeats n times
    
    // but if there are no other repeated nums in the graph, 
    // than it is enough to detect the center by knowing the repeated
    // element between 2 vertices, this soultion would be O(1)
    
    const dictNode = {};
    
    let i;
    for (i=0; i < 2; i++) {
        const actualCountI = dictNode[edges[i][0]] || 0;
        dictNode[edges[i][0]] = actualCountI + 1;
        
        if (dictNode[edges[i][0]] === 2) {
            return edges[i][0];
        }
        
        const actualCountJ = dictNode[edges[i][1]] || 0;
        dictNode[edges[i][1]] = actualCountJ + 1;
        
        if (dictNode[edges[i][1]] === 2) {
            return edges[i][1];
        }
    }
};