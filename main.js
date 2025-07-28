console.log("HELLO WORLD")

let card = document.querySelectorAll(".cards")[0]
let head = document.getElementById("Heading")
let pgh = document.getElementById("Para")

function createCard (){
    if (pgh.value === "" || head.value === "") {
        console.log("Clear first")
    } else {
        console.log("created --1")
    const str = document.createElement("div")
    str.classList.add("ncrds")
    card.appendChild(str)
    const hdr = document.createElement("h2")
    hdr.textContent = head.value
    head.value = ""
    str.appendChild(hdr)
    const para = document.createElement("p")
    para.textContent = pgh.value
    pgh.value = ""
    str.appendChild(para)
    }
}