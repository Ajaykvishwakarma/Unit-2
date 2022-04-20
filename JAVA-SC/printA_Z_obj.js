var obj = {}

for(var i = "a".charCodeAt(0); i<="z".charCodeAt(0); i++)
{
    // console.log(String.fromCharCode(i))
    if(obj[String.fromCharCode(i)] == undefined)
    {
        obj[String.fromCharCode(i)] = 0;

    }
}
console.log(obj)