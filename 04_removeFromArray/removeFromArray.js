//1-st version of the solution

const  removeFromArray = function (arrays, ...valuesToRemove) {
   return arrays.filter((number) => !valuesToRemove.includes(number));
};



//2-nd version of the solution 

//const removeNumberFromArray = function (array, numbers) {
  //const newArray = [];
  //array.forEach((item) => {
    //if (!numbers.includes(item)) {
      //newArray.push(item);
    //}
  //});
 // return newArray;
//};

// Do not edit below this line
module.exports = removeFromArray;




