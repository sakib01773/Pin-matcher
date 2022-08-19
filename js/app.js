document.getElementById("generate-pin").addEventListener("click",function(){
    const newpin =generatePin()
    const displayField = document.getElementById("display-pin");
    displayField.value = newpin;
})
document.getElementById("calculator").addEventListener('click',function(event){
    const elementNumberString = event.target.innerText;
    const elementNumber = parseInt(elementNumberString);

    const typeNumberField = document.getElementById("typed-numbers")
    let previousTypedValue = typeNumberField.value
   
    if(isNaN(elementNumberString)){
        if(elementNumberString === "C"){
          typeNumberField.value = "";
        }else if(elementNumberString === "<"){
           previousTypedValue = previousTypedValue.split("");
           const ss = previousTypedValue.pop();
           const pp = previousTypedValue.join("")
           typeNumberField.value = pp;
           typeNumberField.value;
        }
    }
    else{
       
        typeNumberField.value = previousTypedValue + elementNumber;
    }
   
})

document.getElementById("verify-pin").addEventListener('click',function(){
    const displayField = document.getElementById("display-pin");
    const typeNumberField = document.getElementById("typed-numbers");
    const pinSucceSms = document.getElementById("pin-success");
    const pinFailusms =document.getElementById("pin-failure");
    if(displayField.value == typeNumberField.value){
       
        pinSucceSms.style.display = "block"
        pinFailusms.style.display = "none"
    }else{
        pinSucceSms.style.display = "none"
        pinFailusms.style.display = "block"
    }
})