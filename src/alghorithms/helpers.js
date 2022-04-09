export const 
newTrace = (array) => {
    return [
        {
            array: [...array],
            groupA: [],
            groupB: [],
            groupC: [],
            groupD: [],
            sortedIndices: []
        }
    ]
},

addToTrace = (trace, array, sortedIndices,groupA=[], groupB=[],groupC=[], groupD=[]) => {
    trace.push({
        array: [...array],
        groupA: [...groupA],
        groupB: [...groupB],
        groupC: [...groupC],
        groupD: [...groupD],
        sortedIndices: [...sortedIndices]
    })
},

lastSorted = (trace) => {
    return trace[trace.length -1].sortedIndices;
},

swap = (array,i,j) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
},

createRange = (start, end) => {
    return [...Array(end-start).keys()].map((elem) => elem + start)
},

createKey = (groupA, groupB, groupC, groupD) => {
    return {groupA, groupB, groupC, groupD}
}
