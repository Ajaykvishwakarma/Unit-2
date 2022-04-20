function runProgram(input) {
    input = input.split('\n')
    var tc = +input[0];
    var line = 2;
    var bag =[]
    for(var i=0; i<4; i++)
    {
        // var size = +input[line];
        // line++;
        // for(var j=0; j<size; j++)
        // {
        //     var arr = +input[line];
        //     line++;
            // console.log(arr)
        // }
        var arr = input[line].trim().split("").map(Number)
        line++;
         bag.push(arr)
    }
    var sum = 0;
    var array = bag[0];
    console.log(array)
    for(var i = 0; i<array.length; i++)
    {
     
      sum = sum + array[i];
      
    }
    console.log(sum)
   
	
	
}



if (process.env.USERNAME === "Ajay") {
	runProgram(`1
    4
    0101
    0001
    1001
    0000
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