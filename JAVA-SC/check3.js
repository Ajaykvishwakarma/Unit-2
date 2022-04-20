// function runProgram(input){
//   input = input.split('\n')  
//    var tc = +input[0];
//   console.log(tc)
//    var line = 1;
   
// }

// if (process.env.USER === "AJAY") {
//   runProgram(`2
//   3
//   1 2 3
//   4 5 6 
//   7 8 9
//   2
//   1 2
//   3 4`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }

function runProgram(input) {
    input  = input.split('\n')

    let tc = +input[0];
    // console.log(tc)
    let line = 1;
    
    for(let i =1; i<=tc; i++)
    {
        let array = []
        var N = +input[line];
        line++;
        for(let j = 1; j<= N; j++)
        {
            var arr = input[line].trim().split(" ").map(Number)
            line++;
            array.push(arr)
        }
        addEvent(array)
    }
 
}
function  addEvent(array){
    
    for(var i=0; i<array.length; i++)
    {
        var bag = "";
        for(var j=0; j<array[0].length; j++)
        {
            bag = bag + Number(array[i][j]+1)+" ";

        }
        console.log(bag)
    }
   console.log("-----------------")
}



if (process.env.USERNAME === "AJAY") {
	runProgram(`2
      3
      1 2 3
      4 5 6 
      7 8 9
      2
      1 2
      3 4`);
} else {
	process.stdin.resume();
	process.stdin.setEncoding("ascii");
	let read = "";
	process.stdin.on("data", function (input) {
		read += input;
	});
	process.stdin.on("end", function () {
		read = read.replace(/\n$/, "");
		read = read.replace(/\n$/, "");
		runProgram(read);
	});
	process.on("SIGINT", function () {
		read = read.replace(/\n$/, "");
		runProgram(read);
		process.exit(0);
	});
} 