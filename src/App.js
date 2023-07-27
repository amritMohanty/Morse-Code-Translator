var inputTxt = document.querySelector("#input--txt");
var btnTranslate = document.querySelector("#btn--translate");
var outputTxt = document.querySelector("#output--txt");

var serverURL = "https://api.funtranslations.com/translate/morse.json"

function fetchTxt(url){
    var queryURL = url+"?text="+inputTxt.value;
    fetch(queryURL)
    .then(res => res.json())
    .then(json => {
        outputTxt.innerHTML = json.contents.translated
    }).catch(error => {
        alert(error)
        console.log(error)
    })
}

var clickHandler = function handleClick(){
    fetchTxt(serverURL)
}




// button wiring done
// next, 
btnTranslate.addEventListener("click",clickHandler);