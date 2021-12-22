/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // a better solution using a map to know the last position of the repeated char
    // and the current non repeated chars
    // and a pointer to know where starts the current substring
    // used when removing from the dict the chars that are not part of the next substring

    // time is O(N). Although we iterate over the string again to remove chars from the map
    // worst case would do 2 entire pass over the string, for example when repetition of chars
    // occur at the end, like "abcdefgg"
    // space O(1) -> at most there are going to be 26 chars (alphabet)

    let maxSetSize = 0;
    let currMap = {};
    let initialPosForScanning = 0;

    let i;
    for (i=0; i < s.length; i++) {
        const currChar = s.charAt(i);
        if (currMap[currChar] !== undefined) {
            if (maxSetSize < Object.keys(currMap).length) {
                maxSetSize = Object.keys(currMap).length;
            }
            const temp = currMap[currChar] + 1;
            currMap = updateMap(currMap, currChar, i, s, initialPosForScanning);
            initialPosForScanning = temp;
        }
        currMap[currChar] = i;
    }

    if (maxSetSize < Object.keys(currMap).length) {
        maxSetSize = Object.keys(currMap).length;
    }

    return maxSetSize;
};

function updateMap(currMap, currChar, lastPos, word, initialPosForScanning) {
    let i;
    for (i=initialPosForScanning; i < lastPos; i++) {
        delete currMap[word.charAt(i)];
        if (word.charAt(i) === currChar) {
            break;
        }
    }
    return currMap;
}

var lengthOfLongestSubstringBruteForce = function(s) {
    // one solution is to store in a dict the different chars that appears
    // and if a char already exists, reset the dict and go on, but first saving
    // its size
    // finally return the biggest size reached by the dict

    // another solution would be to concatenate the chars in a new string

    // important to note, when a repeated char is spotted, one has to reset
    // the index to the next position after the last appearance of the repeated char

    let maxSetSize = 0;
    let currMap = {};

    let i;
    for (i=0; i < s.length; i++) {
        const currChar = s.charAt(i);
        if (currMap[currChar]) {
            if (maxSetSize < Object.keys(currMap).length) {
                maxSetSize = Object.keys(currMap).length;
            }
            i = currMap[currChar];
            currMap = {};
        } else {
            currMap[currChar] = i;
        }
    }

    if (maxSetSize < Object.keys(currMap).length) {
        maxSetSize = Object.keys(currMap).length;
    }

    return maxSetSize;
};
