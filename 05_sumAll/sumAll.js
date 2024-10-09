

// 1st- possible solution

// const sumAll = function (array) {
//   let fullArray = [];
//   array.sort((a, b) => a - b);
//   for (let i = array[0]; i <= array[1]; i++) {
//     fullArray.push(i);
//   }
//   let sum = fullArray.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   }, 0);
//   return sum;
// };



// Description to the function creation:

// function sumAll(arr) {
//     1) create new empty array, fullArray
//     2) create sort method on array to arrange [small, big]
//     3) for loop on sorted arr
//     4) push each value into fullArr

//     fullArr, run reduce method, creating one single output integer value
//     return value
// }



//2-nd possible solution

const sumAll = function (start, end) {
let sum = 0;
for(let i = start; i<=end; i++) {
    sum+=1;
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;