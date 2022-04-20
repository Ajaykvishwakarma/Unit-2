 function sonArray(nums){
    var res = [];
     function innerFun(path,start) {
        res.push([...path])                        //(1)
        for(let i=start; i<nums.length; i++) {     //(2)
            path.push(nums[i]);                    //(3)
            innerFun(path,i+1);
            path.pop();
        }
    }
    var path = []
    innerFun(path,0)
    return res;
}
var nums =  [1,2,4]
console.log(sonArray(nums))