
let mySaves = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el');

let savesFromLocalStorage = JSON.parse(localStorage.getItem("mySaves"));
console.log(savesFromLocalStorage);

if (savesFromLocalStorage) {
    mySaves = savesFromLocalStorage;
    renderSaves();
}

inputBtn.addEventListener('click', function() {
    mySaves.push(inputEl.value);

    localStorage.setItem("mySaves", JSON.stringify(mySaves));
    renderSaves()
    clearInput()

    console.log(localStorage.getItem('mySaves'));
})

function renderSaves() {
    let listItems = ""
for (let i = 0; i < mySaves.length; i++) {
    listItems += `
    <li>
    <a target='_blank' href='about:blank'> ${mySaves[i]}</a>
    </li>
    `
}
ulEl.innerHTML = listItems
} 

function clearInput() {
    inputEl.value = "";
}


