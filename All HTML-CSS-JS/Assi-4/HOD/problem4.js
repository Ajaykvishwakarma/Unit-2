var arr = ["Apple", "Windows", "Linux", "Kindle", "Quiz"];

var sum = 0;
arr.forEach(function(ele,index,arr){
    if(index%2==0){
        sum = sum + (ele.length);
    }
})
console.log(sum)