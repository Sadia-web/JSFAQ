// function addNumbers(num1,num2){
//     return num1 + num2;
// }
// var result = addNumbers(5,3);
// console.log(result);

function addNumbers(num1,num2){
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
        
    }
    return sum;
}
var result = addNumbers(3,6,10,50);
console.log(result);