const buttonsEl = document.querySelectorAll("button");

const inputFieldEl = document.getElementById("result")

for (let i = 0; i < buttonsEl.length; ++1){
  buttonsEl[i].addEventListener("click", ()=> {
    const buttonValue = buttonsEl[i].textContent;
    if(buttonValue === "C"){
      clearResult()
    } else if(buttonValue === "="){
      calculateResult()
    } else{
      appendValue(buttonValue);
    }
  })
}

function clearResult (){

}
function calculateResult (){

}
function appendValue (buttonValue){
  inputFieldEl.value += buttonValue
}
