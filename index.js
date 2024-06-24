
let mySaves = ['hello', 'hi', 'ciao', 'july'];
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')


inputBtn.addEventListener('click', function() {
    mySaves.push(inputEl.value);
    console.log(mySaves)
})

for (let i = 0; i < mySaves.length; i++) {
    console.log(mySaves[i])
}
