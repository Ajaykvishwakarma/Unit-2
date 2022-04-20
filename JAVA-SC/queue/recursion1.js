// function factorial(n){
//     if (n == 0 || n == 1) return 1
//     return n * factorial(n-1)
// }
// var res = factorial(6)
// console.log(res)

// function checkPalindrome(str,left,right){
//     if (left == right) return true
//     if (str[left] != str[right]) return false
//     return checkPalindrome(str,left+1,right-1)
// }
// var str = "madam";
// var right = str.length-1;

// var res = checkPalindrome(str,0,right)
// console.log(res)

// function checkPalindrome(str){
//    var  left = 0;
//     var right = str.length - 1;
//     while(left < right){
//         if (str[left] != str[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true
// }
// var str = "madam";
// var res = checkPalindrome(str)
// console.log(res)


function solve(){
    for(var i=0; i<10; i++)
    {
       return i;
    }
    return 10
}
var res = solve();
console.log(res)