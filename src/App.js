var inputTxt = document.querySelector("#input--txt");
var btnTranslate = document.querySelector("#btn--translate");
var outputTxt = document.querySelector("#output--txt");


var clickHandler = function handleClick(){
    console.log("click detected")
    console.log(inputTxt.value)
    outputTxt.innerHTML = inputTxt.value
    console.log(outputTxt.value)
}



// button wiring done
// next, 
btnTranslate.addEventListener("click",clickHandler);