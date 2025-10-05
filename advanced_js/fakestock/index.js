import { getstock } from './fakestock.js'

console.log("Hello")

const nameel = document.getElementById('name')
const symel = document.getElementById('sym')
const priceel = document.getElementById('price')
const timeel = document.getElementById('time')

function render() {
    console.log("ANJING")
    let {name, sym, price, time} = getstock()
    console.log(price)
    nameel.textContent = "name: " + name
    symel.textContent = "sym: " + sym
    priceel.textContent = `price: ${Number(price)}`
    timeel.textContent = "time: " + time
}

setInterval(render, 1500)

function hello() {
    console.log("HELLLOOO")
}

setInterval(hello, 1000)