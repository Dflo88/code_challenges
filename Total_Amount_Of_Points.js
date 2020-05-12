/*
Instructions:

Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x>y - 3 points
if x<y - 0 point
if x=y - 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4

Source: Codewars 8 kyu
*/

function points(games) {
    let tally = 0;
    for(x of games) {
      x[0] > x[2] ? tally = tally + 3 : x[0] === x[2] ? tally++ : tally;
    }
    return tally
  }

/*
Note on solution: I tried a forEach loop and found issues when trying to return an updated 
value from the loop. I believe a forEach loop should only be used when trying to do something 
to every value in an array. I found this post which was helpful:
https://stackoverflow.com/questions/12482961/is-it-possible-to-change-values-of-the-array-when-doing-foreach-in-javascript
*/