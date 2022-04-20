function runProgram(input) {
	input = input.split('\n')
    var tc = +input[0];
    var line =1;
    console.log(tc)
    for(var i=1; i<=tc; i++)
    {
        var size = input[line].trim().split(" ").map(Number);
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
        console.log(size,arr)
    }
}



if (process.env.USERNAME === "AJAY") {
	runProgram
    (`2
    5
    1 2 3 4 5
    3
    1 2 3`);
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