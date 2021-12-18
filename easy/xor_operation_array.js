/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
 var xorOperation = function(n, start) {
    return new Array(n).fill(0).map((num, i) => start + 2 * i).reduce((accum, num) => num ^ accum);
};