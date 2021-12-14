/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
 var ParkingSystem = function(big, medium, small) {
    this.parkingState = {
        1: 0,
        2: 0,
        3: 0
    };
    
    this.carTypeLimits = {
        1: big,
        2: medium,
        3: small
    };
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    if (this.parkingState[carType] < this.carTypeLimits[carType]) {
        this.parkingState[carType] += 1;
        return true;
    }
    return false;
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

// carType: big, medium, small. Or 1, 2, 3.
// There is a state, the parking System. I can use a map for storing the actual state.
// and mutate it as cars are added.