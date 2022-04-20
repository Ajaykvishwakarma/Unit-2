function sum(num1, num2, resultDisplay)
{
    var res = num1 + num2;
    resultDisplay(res)

    
}

sum(4,82,resultDisplay)


function resultDisplay(output)
{
    console.log("Sum of two Number is "+ output)
}