const array1 = [0,1,2];
//copy the reference
const array2 = array1;
//copy the values
const array3 = [...array1];
array1[0] = 100;
console.log(array1);
console.log(array2);
console.log(array3);