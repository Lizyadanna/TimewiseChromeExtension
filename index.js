
let mySaves = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el');


inputBtn.addEventListener('click', function() {
    mySaves.push(inputEl.value);

    renderSaves()
    clearInput()
})

function renderSaves() {
    let listItems = ""
for (let i = 0; i < mySaves.length; i++) {
    listItems += "<li>" + mySaves[i] + "</li>"
}
ulEl.innerHTML = listItems
}

function clearInput() {
    inputEl.value = "";
}

