// Given an array of numbers extract the numbers which are odd

// Sample Input - [1,2,3]
// Sample Output - [1,3]

var arr = [1,2,3,4,5,6];

var res = arr.filter(oddNumber)

function oddNumber(num){
    return num%2==1;
}
console.log(res)