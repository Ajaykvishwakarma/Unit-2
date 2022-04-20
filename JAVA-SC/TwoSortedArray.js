function runProgram(input) {
    input = input.split('\n')
    var tc = +input[0];
    var line = 1;
    for(var i=0; i<tc; i++)
    {
        var size = input[line].trim().split(" ").map(Number);
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
        var arr2 = input[line].trim().split(" ").map(Number);
        line++;
    //   var arr = arr.sort();
    //   var arr2 = arr2.sort();
        twoASorted(size, arr,arr2);
        
        
    }
	
}
function twoASorted(size, arr,arr2){

         var left = 0;
         var right = size-1;
         var count = 0;
         while(left < arr.length && right >= 0){
            if (arr[left] < arr2[right]) left++;
            else if (arr[left] > arr2[right]) right--;
            else{
                count++;
                left++;
                right--;
            }
        }
        console.log(count);

}



if (process.env.USERNAME === "Ajay") {
	runProgram
    (`1
    7
    1 2 2 3 4 5 7
    7 4 4 3 2 1 1 
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