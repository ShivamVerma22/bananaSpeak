var txtInput = document.querySelector(".input-text");
var btnTranslate = document.querySelector(".btn-translate");
var outputBoard = document.querySelector(".output-board");
var apiURL = "https://api.funtranslations.com/translate/minion.json"
var inputtedText = txtInput.value;
console.log(inputtedText)
console.log("Hello")

function translateText(){
    console.log(inputtedText)
}

btnTranslate.addEventListener("click", translateText())