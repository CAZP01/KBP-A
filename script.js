const container1 = document.getElementById("container1")
const container2 = document.getElementById("container2")
const a = document.querySelector("#a a")
const list = document.querySelectorAll(".list")

container1.style.backgroundColor = "Green"
container2.style.backgroundColor = "Green"
a.href = "https://www.google.com"

list.forEach(function(list, modify) {
    list.textContent = "Kamu kena hack " + (modify + 1)
    list.style.fontFamily = "Times New Roman, serif"
    list.style.fontSize = "20px"
    list.style.color = "White"
    list.style.backgroundColor = "Grey"
})