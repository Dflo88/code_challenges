var orderedCount = function (text) {
    var tally = {};
    let mySet = new Set(text);
    var finalArray = [];
    for (x of text) {
      tally[x] ? tally[x] = tally[x] + 1: tally[x] = 1;
    }
    mySet.forEach((element) => finalArray.push([element, tally[element]])); 
    return(finalArray)
}