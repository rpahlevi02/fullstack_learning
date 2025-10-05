//document.getElementById("count").innerText = 5;

let countEl = document.getElementById("count")

let count = parseInt(countEl.innerText)

let saveEl = document.getElementById("previous-entries")

function increment() {
    count += 1
    countEl.innerText = count
    console.log(countEl)
}

function reset() {
    count = 0
    countEl.innerText = 0
}

function save() {
    saveEl.textContent += count + " - "
    countEl.innerText = 0
    count = 0
}