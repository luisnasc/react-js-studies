// Usual function
function printHello(){
    console.log("Hello");
}
printHello();


// Simple arrow function
const printHelloArrow = (fname, lastname) => {
    console.log("Hello, "+fname+" "+lastname);
}
printHelloArrow("Luis",'Nascimento')

// 
const doubleNumber = number => number*2;

let num = 5
console.log("The double of "+num+" is "+doubleNumber(num));