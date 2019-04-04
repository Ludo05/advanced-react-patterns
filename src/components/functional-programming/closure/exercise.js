function add(number) {
    return function (numberTwo) {
       return  number + numberTwo;
    };

}
const addFive = add(5)(7);

// let result;
// result = addFive(7);
// should output 12

console.log("addFive(7)", addFive);
