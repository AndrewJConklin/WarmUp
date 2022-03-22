const a = "Hello World!"
console.log(a)

const body = document.querySelector("body")

const p = document.createElement("p")
p.textContent = "Hola, mundo!"

const element = p

body.append(element)