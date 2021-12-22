/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    const digitLogs = logs.filter(log => isDigitLog(log));
    const letterLogs = bubbleSortLexLogs(logs.filter(log => !isDigitLog(log)));

    return [...letterLogs, ...digitLogs];
};

function isDigitLog(log) {
    return !isNaN(log.split(" ")[1]);
}

function bubbleSortLexLogs(logs) {
    const arrCopy = [...logs];
    const size = logs.length;

    let i, j;

    for (i=0; i < size - 1; i++) {
        for (j=0; j < size - 1 - i; j++) {
            const logs1 = arrCopy[j].split(" ");
            const logs2 = arrCopy[j+1].split(" ");

            const [id1, ...content1] = logs1;
            const [id2, ...content2] = logs2;

            // swap if greater by content or id
            if (content1.join(" ") > content2.join(" ") ||
                ((content1.join(" ") === content2.join(" ")) && (id1 > id2))) {
                const temp = arrCopy[j+1];
                arrCopy[j+1] = arrCopy[j];
                arrCopy[j] = temp;
            }
        }
    }

    return arrCopy;
}
