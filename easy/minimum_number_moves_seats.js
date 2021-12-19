/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
 var minMovesToSeat = function(seats, students) {
    // brute force would be to try every possible combination
    // and record its number of moves, then choosing the 
    // one with fewer moves
    
    // a greedy approach would try to satisfy the best seat for student i, then
    // the best seat available for student i+1, and so on, in only one pass.
    
    // but somehow looks like the solution can be done with dynamic programming
    
    // we will use counting sort
    
    const arr_seats = new Array(Math.max(...seats) + 1).fill(0);
    const arr_students = new Array(Math.max(...students) + 1).fill(0);
    
    seats.forEach(seat => {
        arr_seats[seat] += 1;
    });
    
    students.forEach(student => {
        arr_students[student] += 1;
    });
    
    let i, j = 0;
    let result = 0;
    
    // iter over the sorted student array and then over the seats array to find seats for each student
    // advance in index only if student and seat in current position are all placed (repeated seats/student)
    for (i = 0; i < arr_students.length;) {
        if (arr_students[i] > 0) {
            while(j < arr_seats.length) {
                if (arr_seats[j] > 0) {
                    result += Math.abs(i - j);
                    arr_seats[j] -= 1;
                    arr_students[i] -= 1;
                    break;
                }
                j++;
            }
        }
        if (arr_students[i] === 0) {
            i++;
        }
    }
    
    return result;
};