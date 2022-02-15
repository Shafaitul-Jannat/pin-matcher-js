function getPin(){
    const pin= Math.round(Math.random()*10000);
    const pinString= pin+ '';
    if(pinString.length== 4 ){
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin(){
   const pin= getPin();
   document.getElementById("display-pin").value = pin;
}

document.getElementById('key-pad').addEventListener('click',function(event){
const number= event.target.innerText;
const calcInput = document.getElementById('typed-numbers');
if(isNaN(number)){
    if(number=='C'){
        calcInput.value='';
    }
}
else{
const previousNumber = calcInput.value ;
const newNumber = previousNumber + number
calcInput.value = newNumber;
}
})
document.getElementById('submit-button').addEventListener('click',function(){
const displayPin = document.getElementById("display-pin").value;
const typedNumbers = document.getElementById('typed-numbers').value;
const failMsg= document.getElementById("fail-msg");
const successMsg= document.getElementById("success-msg");
if(displayPin == typedNumbers){
    failMsg.style.display='none';
    successMsg.style.display='block';
}
else{
    successMsg.style.display='none';
    failMsg.style.display='block';
}

})