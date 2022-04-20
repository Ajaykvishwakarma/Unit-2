// Given an array of string generate an array whose first or last character is a
var arr = ["apple", "windows", "ubuntu", "cola", "system"];
var res = []
arr.forEach(function(element){
    if(element[0]=='a' || element[element.length-1]=='a'){
        res.push(element)
    }
})
console.log(res)