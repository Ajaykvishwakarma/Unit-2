// function hello(msg)
// {
//     console.log("Hello! " + msg)
// }
// hello("Ajay")

// function sum(n1,n2,cb)
// {
//     console.log(n1+n2)
//     cb("sum completed");
// }
// sum(2,3,"thanks")

// function sum(n1,n2,cb,necb)
// {
//     necb("Doing");
//     console.log(n1+n2)
//     cb("sum completed")
// }

// sum(2,3,"tha","h")

// function func1(callback)
// {
//     callback()
// }
// func1(func2)
// function func2()
// {
//     console.log("hello i am ajay")
// }
// forEach
// var names = ["Ajay", "Abhay", "Arun"];
// names.forEach(function(ele, index, array){
//     console.log(ele)
//     console.log(index)
//     console.log(array)
// })
// var nums = [1,2,3,4,5];
// var res =0
// nums.forEach(multiplyBy10)
// function multiplyBy10(elem){
//     res +=(elem+elem)    
// }
// console.log(res)
// map
// var nums = [1,2,3,4,5,6]
// var res = nums.forEach(function(elem){
//     console.log(elem*10)
// })
// var nums = [1,2,3,4,5,6]
// var res = nums.map(multiplyBy10)
//  function multiplyBy10(elem){
//      return elem*10;
//  }
// console.log(res)
// var sum =0;
// var res = nums.map(function (elem, index ,array){
//     sum += elem * 1;
//     return sum;
// })
// console.log(res[res.length-1])
// filter
// var ages = [32,23,34,23]
// var res = ages.filter(function (elem){
//     return(elem>23)
// })
// console.log(res)
// var ages = [32,23,34,23]
// var res = ages.filter(function (elem){
//     return (elem > 30)
// })
// console.log(res)
// var ages = [32,23,34,23]
// function isEven(elem){
//     return elem%2!=0;
// }
// var out = ages.filter(isEven)
// console.log(out)
// reduce 
// var nums = [1,2,3,4,5]
// var sum  = 0;
// for( var i=0; i<nums.length; i++)
// {
//     sum += nums[i]
// }
// console.log(sum)
// var res = nums.reduce(function(sum,cv){
//     return sum+cv;
// })
// console.log(res)
// var array = [1, 2, 3];
// array.peek()
//selection sort
// var arr = [12,18,2,3,45]
// for(var i=0; i<arr.length; i++)
// {
//     var min = i;
//     for(var j=i+1; j<arr.length; j++)
//     {
//         if(arr[min] > arr[j])
//         {
//             min = j;
//         }
//     }
//     var res = swap(arr,min,i)
// }
// console.log(res)
// function swap(arr,min,i)
// {
//     var temp = arr[i];
//     arr[i]= arr[min];
//     arr[min] = temp;
//     return arr
// }
// bobble sort
// var N= arr.length;
// for(var i=0; i<N-1; i++)
// {
//     for(var j=0; j<N-i-1; j++)
//     {
//         if(arr[j] > arr[j+1])
//         {
//             var v = j+1;
//             swap(arr,j,v)
//         }
//     } 
// }
// function swap(arr,j,v)
// {
//     var temp = arr[v];
//     arr[v]= arr[j];
//     arr[j] = temp;
//     console.log(arr)
// }