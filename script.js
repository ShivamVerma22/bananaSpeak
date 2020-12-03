var txtInput = document.querySelector(".input-text");
var btnTranslate = document.querySelector(".btn-translate");
var outputBoard = document.querySelector(".output-board");
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function displayError(error){
    console.log("Error occured:"+error)
}

function setURLString(text){
    return serverURL + "?" + "text=" + text
}

function translateText(){
    var inputtedText = txtInput.value;
    fetch(setURLString(inputtedText))
        .then(response => response.json())
        .then(output => {
            var translatedText = output.contents.translated;
            outputBoard.innerText = translatedText;
        })
        .catch(displayError)
}

btnTranslate.addEventListener("click", translateText)