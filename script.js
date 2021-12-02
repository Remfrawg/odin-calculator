var displayVal = "";
var oldVal = "";
var newVal ="";
var operatorVal = "";

var numbers = document.querySelectorAll(".number");
var display = document.querySelector(".display");
console.log("numbers: "+ typeof(numbers) + " " + numbers.length);
numbers.forEach((num)=>{
    console.log("creating node: " + num.innerText);
    num.addEventListener("click",()=>{
       /*  console.log("clicking " + num.innerText); */
        var selectedNum = num.innerText;
        newVal +=selectedNum;
        displayVal +=selectedNum;
        display.innerText = displayVal;
        console.log(`after new num -new val: ${newVal} old val: ${oldVal} operator val: ${operatorVal}`);
    });

});

var operators = document.querySelectorAll(".operate");
operators.forEach((op)=>{
    op.addEventListener("click",()=>{   
        if (oldVal ==""){
            operatorVal = op.innerText;
            oldVal = displayVal;
            displayVal +=operatorVal;
            display.innerText = displayVal;
            newVal = "";
        }else if (newVal!=""){
            alert("Don't click that!")
        }
        else{
            operatorVal = op.innerText;
            displayVal +=operatorVal;
            display.innerText += op.innerText;
        }
        console.log(`after setting op -new val: ${newVal} old val: ${oldVal} operator val: ${operatorVal}`);
    });
});

var compute = document.querySelector(".compute");
compute.addEventListener("click",()=>{
    operate(oldVal,operatorVal,newVal);
    operatorVal = "";
    newVal = "";
    console.log(`after operate - new val: ${newVal} old val: ${oldVal} operator val: ${operatorVal}`);
});
function operate(old,operator,newValue){
    if (operator == "+"){
        oldVal = +old + +newValue;
        displayVal = oldVal.toString();
        display.innerText= oldVal;
    } else if(operator == "-"){
        oldVal = +old - +newValue;
        displayVal = oldVal.toString();
        display.innerText= oldVal;
    } else if(operator  =="*"){
        oldVal = +old * +newValue;
        displayVal = oldVal.toString();
        display.innerText= oldVal;
    } /*division*/ else{
        oldVal = +old / +newValue;
        displayVal = oldVal.toString();
        display.innerText= oldVal;
    }
newVal = "";
};

function reset(){
oldVal = "";
newVal = "";
display.innerText = 0;
displayVal = "";
operatorVal = "";
};