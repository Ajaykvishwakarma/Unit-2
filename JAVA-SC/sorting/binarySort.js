function runProgram(input) {
     input = input.split('\n')
     var arr = input[0].split(" ").map(Number)
     for(var i=0; i<arr.length; i++)
     {
         for(var j=0; j<arr.length-i-1; j++)
         {
             if(arr[j] > arr[j+1])
             { 
                var v = j+1;
                var res =  swap(arr, j, v)

             }
         }
     }
     var bag ="";
     for(var i=0; i<res.length; i++){
 
         bag += res[i]+" ";
 
     }
     console.log(bag)
     function swap(arr, j, v){
         var temp = arr[j];
         arr[j]=arr[v];
         arr[v]=temp;
         return arr;
     }
	
}



if (process.env.USERNAME === "Ajay") {
	runProgram(`1 5 7 9 0 4 0 0 0 0 1 1 1 1 1 1 2 2 2 2 2 5 5 5 5 7 7 7 7 8 8 9 7 8 7 9`);
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