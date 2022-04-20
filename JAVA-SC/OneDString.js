function runProgram(input) {
	input = input.split('\n')
    var arr = input[0].split(" ").map(Number);
    binnaryArray(arr)

}
function binnaryArray(arr){
    var data = [];
    for(var i=0; i<arr.length; i++)
    {
        var bag = "";
        for(var j=i; j<arr.length; j++)
        {
            bag = bag + arr[j];
            data.push(bag)
        }
    }
    // console.log(data)
  var arr1 =[]
    for(var i=0; i<data.length; i++)
    {
        var num = data[i];
        var flag = 0;
        for(var j=0; j<num.length; j++)
        {
            if(num[j]==0)
            {
                flag = 1;
            }
        }
       
       if(flag == 0)
        {
           arr1.push(num.length)
        }
    }
    var max = arr1[0];
    for(var i=0; i<arr1.length; i++)
    {
        if(arr1[i]>max)
        {
            max = arr1[i]
        }
         
    }
  console.log(max)
    
}



if (process.env.USERNAME === "Ajay") {
	runProgram(`1 1 1 1 0 0 0 0 1 1 1`);
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