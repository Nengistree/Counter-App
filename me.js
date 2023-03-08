let saveEl = document.getElementById("save-el")
let numberEl = document.getElementById("number-el")

let count = 0



function increase() {
    count = count + 1
    numberEl.innerText = count
}

function save() {
    let countstr = count + " - "
    saveEl.textContent += countstr
    numberEl.textContent = 0 
    count = 0
    console.log(count)
}

let accecptEl = document.getElementById("accept-el")

let greeting = "welcome back "
let name = "Mr Nengi Amapakabo"

accecptEl.innerText = greeting + name 