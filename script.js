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
       if (oldVal !== "" && operatorVal ===""){

       }else{
        var selectedNum = num.innerText;
        newVal +=selectedNum;
        displayVal +=selectedNum;
        display.innerText = displayVal;
    }
        console.log(`after new num -new val: ${newVal} old val: ${oldVal} operator val: ${operatorVal}`);
    });

});

var operators = document.querySelectorAll(".operate");
operators.forEach((op)=>{
    op.addEventListener("click",()=>{   
        if (oldVal ==="" && newVal !==""){
            operatorVal = op.innerText;
            oldVal = displayVal;
            displayVal +=operatorVal;
            display.innerText = displayVal;
            newVal = "";
        }else if (newVal==="" && operatorVal==="" && oldVal !==""){
            operatorVal = op.innerText;
            displayVal +=operatorVal;
            display.innerText += op.innerText;
        }
        console.log(`after setting op -new val: ${newVal} old val: ${oldVal} operator val: ${operatorVal}`);
    });
});

var compute = document.querySelector(".compute");
compute.addEventListener("click",()=>{
    if (newVal != "" && operatorVal!=""){
        operate();
        operatorVal = "";
        newVal = "";
    }
    console.log(`after operate - new val: ${newVal} old val: ${oldVal} operator val: ${operatorVal}`);
});
function operate(){
    if (operatorVal == "+"){
        console.log("old: "+oldVal +"    new: " +newVal);
        oldVal = +oldVal + +newVal;
        console.log("old value after computing: "+oldVal);
        displayVal = oldVal.toString();
        display.innerText= oldVal;
    } else if(operatorVal == "-"){
        oldVal = +oldVal - +newVal;
        displayVal = oldVal.toString();
        display.innerText= oldVal;
    } else if(operatorVal  =="*"){
        oldVal = +oldVal * +newVal;
        if (oldVal%1 !=0){
            oldVal = oldVal.toFixed(2);
            }
        displayVal = oldVal.toString();
        display.innerText= oldVal;
    }else{
        if (newVal !=0){
            oldVal = +oldVal / +newVal;
            if (oldVal%1 !=0){
                oldVal = oldVal.toFixed(2);
            }
            displayVal = oldVal.toString();
            display.innerText= oldVal;
        }
        else {
            alert("I'm gonna divide YOU into " + oldVal +"/0 pieces");
            newVal = "";
            operatorVal == "";
            displayVal = oldVal;
            display.innerText= displayVal;
        }
    }
newVal = "";
};
const resetButton = document.querySelector(".clear");
resetButton.addEventListener("click",()=>{
    oldVal = "";
    newVal = "";
    display.innerText = "Enter a number";
    displayVal = "";
    operatorVal = "";
})