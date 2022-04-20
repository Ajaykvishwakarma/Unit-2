// var str = "masai";
// var data = []
// for(var i=0; i<str.length; i++)
// {
//     var bag = "";
//     for(var j=i; j<str.length; j++)
//     {
//         bag = bag + str[j];
//         data.push(bag);
        
//     }
// }
// console.log(data)

// muliple line input

function runProgram(input) {
     input=input.split('\n')
     var tc = +input[0];
     var arr = input[1].split(" ").map(Number)
	console.log(arr)
}



if (process.env.USERNAME === "AJAY") {
	runProgram(`
    5,
    12345
    `);
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
