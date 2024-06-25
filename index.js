
let mySaves = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el');
const deleteBtn = document.getElementById('delete-btn')
const tabBtn = document.getElementById('tab-btn')
const savesFromLocalStorage = JSON.parse(localStorage.getItem("mySaves"));

if (savesFromLocalStorage) {
    mySaves = savesFromLocalStorage;
    renderSaves();
}

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

inputBtn.addEventListener('click', function() {
    mySaves.push(inputEl.value);

    localStorage.setItem("mySaves", JSON.stringify(mySaves));
    renderSaves()
    clearInput()

    console.log(localStorage.getItem('mySaves'));
})

tabBtn.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        mySaves.push(tabs[0].url);

        localStorage.setItem("mySaves", JSON.stringify(mySaves));
        renderSaves()
    })
    mySaves.push(tabs[0].url);

    localStorage.setItem("mySaves", JSON.stringify(mySaves));
    renderSaves()
} )

deleteBtn.addEventListener('click', function() {
    localStorage.clear()
    mySaves = []
    renderSaves()
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


