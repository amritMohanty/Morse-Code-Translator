var inputTxt = document.querySelector("#input--txt");
var btnTranslate = document.querySelector("#btn--translate");
var outputTxt = document.querySelector("#output--txt");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var temp = "";

function fetchTxt(url){
    var queryURL = url+"?text="+inputTxt.value;
    fetch(queryURL).then(res => res.json()).then(json => {
        outputTxt.innerHTML = json.contents.text
        console.log(outputTxt.value)
})
}



var clickHandler = function handleClick(){
    console.log("click detected")
    console.log(inputTxt.value)
    fetchTxt(serverURL)
}




// button wiring done
// next, 
btnTranslate.addEventListener("click",clickHandler);