// var nums = [1,2,3,4,5,6];

// var res = nums.forEach(function(elem,index, arr){
//   console.log(elem*10,index,arr)
// })

// var res =nums.map(multiplyBy10)

// function multiplyBy10(elem){
//     return elem*10;
// }
// console.log(res)

// var nums =['1','2','3']
// var sum = 0;
// // nums = nums.map(Number) // convert string to number
// var res = nums.map(function(elem,index, array){
//  sum += elem*1;
//  return sum;
// },1)

// console.log(res[res.length-1])  // sum with map 

var ages = [33,45,67,84]
var res = ages.filter(function(elem){
    return (elem > 30)

})
console.log(res)