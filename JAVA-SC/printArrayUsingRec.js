var arr = [1,2,3,4,5]
var sum1 = 0;
sum(sum1, arr, 5, 0)
function sum(sum1, arr, N, i){
    
    if(N == i)
    {
        return 0;
    }
    else{
       return (sum1 = sum1 + (arr[i]))
    
       
    }

    

}