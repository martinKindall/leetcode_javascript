/**
 * @param {number} n
 */
 var OrderedStream = function(n) {
    // as data structure for storing an array will be used
    this.dataStruct = new Array(n+1);
    this.pointer = 1;
    this.size = n+1;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    // we can use a pointer that is going to be updated
    // after every insert, which can only "advance"
    
    this.dataStruct[idKey] = value;
    return this.createResultAndUpdatePointer();
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */

/** 
 * @return {string[]}
 */
OrderedStream.prototype.createResultAndUpdatePointer = function() {
    const result = [];
    while (this.pointer < this.size) {
        const currVal = this.dataStruct[this.pointer];
        if (currVal !== undefined) {
            result.push(currVal);
            this.pointer += 1;
        } else {
            break;
        }
    }
    
    return result;
};