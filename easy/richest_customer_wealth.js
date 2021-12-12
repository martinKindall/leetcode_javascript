/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    // m times n matrix
    // m is the number of customers
    // n the number of banks
    // each customer may have one or more bank balances as I understood
    
    // the idea is for each customer sum up all the money they have across their bank accounts
    // we have to iterate over the matrix at least once.
    // calculate the welath of one customer at a time, and update it if the next one is wealthier
    
    // time O(M+N)
    // space O(1)
    
    let currMaxWealth = 0;
    
    const customers = accounts.length;
    const banks = accounts[0].length;
    
    let idCustomer = 0;
    let idBank;
    
    for (; idCustomer < customers; idCustomer++) {
        idBank = 0;
        let customerWealth = 0;
        
        for (; idBank < banks; idBank++) {
            customerWealth += accounts[idCustomer][idBank];
        }
        
        if (customerWealth > currMaxWealth) {
            currMaxWealth = customerWealth;
        }
    }
    
    return currMaxWealth;
};