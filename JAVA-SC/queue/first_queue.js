// function runProgram(input) {
//     input = input.split('\n')
//     var tc = +input[0];
//     // console.log(tc)
//     var line = 1;
//     var que = [];
//     for(var i=0; i<tc; i++)
//     {
//         var arr = input[line].trim().split(" ");
//         var char = arr[0];
//         var num = arr[1];
//         line++;
//         // console.log(arr)
//         if(arr[0] == 'E')
//         {

//         }

//     }

	
// }



// if (process.env.USERNAME === "AJAY") {
// 	runProgram(`4
//     E 3
//     D
//     D
//     E 4
//     `);
// } else {
// 	process.stdin.resume();
// 	process.stdin.setEncoding("ascii");
// 	let read = "";
// 	process.stdin.on("data", function (input) {
// 		read += input;
// 	});
// 	process.stdin.on("end", function () {
// 		read = read.replace(/\n$/, "");
// 		read = read.replace(/\n$/, "");
// 		runProgram(read);
// 	});
// 	process.on("SIGINT", function () {
// 		read = read.replace(/\n$/, "");
// 		runProgram(read);
// 		process.exit(0);
// 	});
// } 

// console.log(1 == '1')

// var str = "raju";
// str[0]="k";

// console.log(str)

// var x  = 10;
// var y =20;
// var person = {
//     name : "pablo panday",

// };
// add()

// function add(){
//     var res = x+y;
//     console.log('${person.name} is 30 year old')
// }

// function solve(){
//     for (i = 0;i<10;i++){
//         return i;
//     }
//     return 10;
// }
// var res = solve();
// console.log(res)
// var N = 16;
// var res = solve(N)
// console.log(res)
// function solve(N){
//     if (N % 2 == 0){
//         return true;
//     }
//     sum = 0;
//     for (i = 2;i<N;i++){
//         sum += i;
//     }
//     return false;
// }


// var arr = [1,2, 3, 4, 4];
// var res = check(arr)
// console.log(res)
// function check(arr){
//     var sum = 0;
//     for (i = 0;i<arr.length;i++){
//         sum += arr[i];
//     }
//     if (sum % 2 == 0){
//         return arr.length;
//     }
//     return sum;
// }


// var res = check(4, 4)
// console.log(res)
// function check(a,b){
//     a++;
//     b--;
//     if (a > b){
//         return true;
//     }
//     return false;
// }
// var res = check()
// console.log(res)
// function check(){
//    var sum = 0;
//     for (i = 1;i<=10;i++){
//         if (i % 2 == 0){
//             return sum;
//         }else{
//             sum += i;
//         }    
//     }
//     return sum
// }

var res = check();
console.log(res)

// function check(){
//     a = 2;
//     b = 1;
//     for (i = 2;i<4;i++){
//         if (i % 2 == 0){
//             a += i;
//         }else{  
//             b += i;
//         }    
//     }
//     if (a > b){
//         return true;
//     }else{
//         return false;
//     }
// }

// function check(){
//     for (i = 0;i<=10;i+=2){
//         if (i % 2 != 0){
//             return i;
//         }
//     }
//     return 100;
// }

// function check(){
//     for (i = 1;i<=10;i+=2){
//         if (i % 2 != 0){
//             return i;
//         }
//     }
//     return 100;
// }

// function check(){
//     for (i = 4;i<=21;i++){
//         if (i%1==0 || i%i==0 && i % 2 == 0){
//             return i;
//         }
//     }
//     return 0;
// }

function check(){
    for (i = 4;i<=21;i++){
        if( i%1==0 && i%i==0 && i % 2 != 0){
            return i;
        }
    }
    return 0;
}