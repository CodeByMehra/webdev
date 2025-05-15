console.log("Hello")

// Faulty calculator

faultVal=Math.random()
let a= 9
let b= 10
let op='+'


function trueCalculator(a,op, b){
    if(op=='+'){
        console.log("Sum of ", a ,"+", b, "=" ,a+b)
    }
    else if(op=='-'){
        console.log("Sum of ", a ,"-", b, "=" ,a-b)
    }
    else if(op=='*'){
        console.log("Sum of ", a ,"*", b, "=" ,a*b)
    }
}

trueCalculator(7, '+' , 90)