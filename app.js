// java 
let input = document.getElementById("input");
let button = document.getElementById("btn");
let msg = document.getElementById("msg");

// events
button.onclick = function (){

    let buttonValue = input.value;
    if(input.value != ""){
        msg.innerHTML = `hello worled ${buttonValue}`;
        input.value = ""
    }
}