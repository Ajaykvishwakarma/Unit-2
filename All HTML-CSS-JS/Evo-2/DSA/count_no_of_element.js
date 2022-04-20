var arr=[0,4,5,6,7,2,1,0,1,2,0,1];
// console.log(arr)
var arr1 = []
for(var i=0; i<arr.length; i++)
{
    
    for(var j=i+1; j<arr.length; j++)
    {
        var count=1;
        
        if(arr[i]==arr[j])
        {
            
            arr1.push(arr[j])
        }
        
    }
    
}
var unique =[];
for(var i=0; i<arr1.length; i++)
{
    var count=0;
    for(var j=0; j<unique.length; j++)
    {
        if(arr1[i]==unique[j])
        {
            count++;

        }
    }
    if(count==0)
    {
        unique.push(arr1[i])
    }
}
console.log(unique)