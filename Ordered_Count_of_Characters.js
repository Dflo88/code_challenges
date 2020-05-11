/* 
Instructions: 
Count the number of occurrences of each character and return it 
as a list of tuples in order of appearance. For empty output return 
an empty list.

source: codewars 7kyu
*/

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