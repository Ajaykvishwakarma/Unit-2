function runProgram(input) {
	input = input.split('\n')
    var arr = input[0].split(" ").map(Number);
    for(var i=0; i<arr.length; i++)
    {
        var min = i;
        for(var j=i+1; j<arr.length; j++)
        {
            if(arr[min] > arr[j])
            {
                min = j;
            }
        }
       var res = swap(arr,min,i)
    }
    // console.log(res)
     var bag ="";
    for(var i=0; i<res.length; i++){

        bag += res[i]+" ";

    }
    console.log(bag)
    function swap(arr, min, j){
        var temp = arr[min];
        arr[min] = arr[i]
        arr[i] = temp;
        return arr;
    }
}



if (process.env.USERNAME === "Ajay") {
	runProgram(`1 2 4 5 5 9 4 6`);
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