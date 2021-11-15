const inputOne = document.querySelector(".inputOne");
const inputTwo = document.querySelector(".inputTwo");
const check = document.querySelector(".check");
const output = document.querySelector(".output");

function checkPassword (){
    if(inputOne.value === inputTwo.value){
        output.innerText = "Password matched"
    } else {
        output.innerText = "Password not matched"
    }
}

check.addEventListener("click", checkPassword)