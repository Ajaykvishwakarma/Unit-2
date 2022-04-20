var str = "Anjuman";

var obj ={
    a:0,
    e:0,
    i:0,
    o:0,
    u:0
};
for(var x in obj)
{
    for(var i=0; i<str.length; i++)
    {
        if(x==str[i])
        {
            obj[x]=1;
        }
    }

}
var bag = "";
for(x in obj)
{
    if(obj[x]==0)
    {
        bag += x+" ";
    }
}
console.log(bag)