/**
 * @param {string} rings
 * @return {number}
 */
 var countPoints = function(rings) {
    // time O(N) space O(1) (considering the fact that there are only 3 colors and sets do not increase
    // in space greater than 3 colors)
    // we could create a set for each rod
    // and then iterate over the string filling those sets with the colors
    
    // finaly filter the sets which have all three colors
    
    const rodsSets = new Array(10).fill(0).map(_ => new Set());
    
    let i;
    for (i = 0; i < rings.length; i += 2) {
        const color = rings.charAt(i);
        const rod = parseInt(rings.charAt(i+1));
        rodsSets[rod].add(color);
    }
    
    return rodsSets.filter(rodSet => rodSet.size === 3).length;
};