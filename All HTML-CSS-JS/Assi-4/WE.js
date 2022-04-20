// function Web14(message,web13){
//     console.log("Hai"+" "+message)
//     web13()
// }




// Web14("I am student from web-14",web13)



// function web13(){
//     console.log("i am student of web-13")
// }


// function sum(num1,num2,resultDisplay){
//     var res=num1+num2
//     //console.log(res)
//     resultDisplay(res)
// }


// sum(1,2,resultDisplay)


// function resultDisplay(output){
//     console.log("the sum is "+ output)
// }



// js()


// function js(){
//     console.log("welcome to js")
// }

// x()
// var x = function(){
//     console.log("second func")
// }



// var y =10
// console.log(y)



// forEach --- HOF

var names =["duwesh","Shakti","dhruv"]

// console.log(names[0])
// console.log(names[1])
// console.log(names[2])


// for(var i=0;i<names.length;i++){
//     console.log()
// }

// forEach is only for arrays

// names.forEach(xyz)


// function xyz(e, i, array){
//     console.log(e)
//     console.log(i)
// }


// var nums=[1,2,3,4,5]
// // multiply each elem by 10

// var res =[]

// nums.forEach(multiplyBy10)

// function multiplyBy10(elem){
//     res.push(elem*10)

// }
// console.log(res)

// var sum=0
// var nums =[1,2,3,4,5]
// nums.forEach(summer)
// function summer(elem){
//     sum+=elem
// }

// console.log(sum)

//map

// var nums=[1,2,3,4,5]

//  var res =nums.map(function(elem){
//     return (elem)
// })

// forEach wont return anything
//map returns an array

// console.log(res)


// var nums = [1,2,3,4,5]
// // multiply each and every elemet by 10

// var res = nums.forEach(multiplyBy10)


// function multiplyBy10(elem){
//     return elem*10
// }

// console.log(res)



// var nums=["1","2","3"]

// // nums = nums.map(Number)
// // nums.map(function(elem,index,array))

// // filter

// var ages = [32,33,45,16]

// var res= ages.filter(ageCheck)

// function ageCheck(elem){
//     return (elem>30)
// }

// console.log(res)

// // retruns the elements which satisfies the given condition i.e tru


// function isEven(elem){
//     return elem%2==0
// }

// var out = ages.filter(isEven)
// console.log(out)

// forEach --> it is not returning an array
// map-->it is returning an array
// filter-->? it is also returning array with conditions


// reduce 

// var nums =[10,2,3,4]

// // var accumulator=nums[0]

// // for(var i=0;i<nums.length;i++){
// //     accumulator+=nums[i]
// // }

// // console.log(accumulator)

// var res = nums.reduce(function(ac,cv){
//     return cv+ac     // result will be stored in ac
// })

// console.log(res)

// ac=10,cv=2 => 2+10 =10 -->ac=12
// ac=12,cv=2=>12+2=14 --> ac=14
// ac=14, cv=3 =>14+3=17 -->ac=17
//ac=15 , cv=4 ==>15+4 =19 
//19

// reduce -- combining and returing single elem





// forEach is of arrays -- but is not returning array
// map is for arrays --> it is returning array
// filter is for arrays --> it is returtning array
// reduce is for arrays --> returns single value


// chaining

// forEach().map() --- you cant chain

// map().forEach() --> possible

// map().filter()--> possible

// map().filter().reduce() ---> possible--> single value

// reduce().map()---> not possible


// Given an array of numbers extract the numbers which are odd

// Sample Input - [1,2,3]
// Sample Output - [1,3]

var arr =[1,2,3]

// var res = arr.filter(extractOdd)

// function extractOdd(elem){
//     return elem%2==1
// }

// console.log(res)


// // Given an array of numbers print the product of all numbers

// // Sample Input - [2,3,4]
// // Sample Output - 24

// var arr =[2,3,4]


// var res = arr.reduce(function(ac,cv){
//     return ac*cv
// },1)

// // ac=1 --> ac*cv -->1*2 -->ac=2
// //ac=2 -->2*3 =6 - ac=6
// //ac=6 -->6*4 ->ac=24

// console.log(res)


// Given an array of numbers find the sum of odd elements
// Sample Input - [1, 2, 3, 4]
// Sample Output - 4

var arr =[1,2,3,4]
var isOdd=function(elem){
    return elem%2==1
}

var sum = function(ac,cv){
    return ac+cv
}

var oddSum = arr.filter(isOdd).reduce(sum)
console.log(oddSum)

