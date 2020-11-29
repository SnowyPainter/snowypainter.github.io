/*let sideMenu = document.createElement("div")
let closeBtn = document.createElement("button")
let openBtn = document.createElement("button")

openBtn.innerText = "Open"
openBtn.classList.add("openMenu")

closeBtn.innerText = "Close"
sideMenu.id = "menu"
sideMenu.classList.add("menu")
closeBtn.classList.add("closeMenu")

sideMenu.appendChild(closeBtn)
document.body.appendChild(sideMenu)
document.body.appendChild(openBtn)

function open() {
    document.getElementById("menu").style.width = "100%"
}

function close() {
    document.getElementById("menu").style.width = "0"
}

openBtn.addEventListener("click", () => {
    open()
})
closeBtn.addEventListener("click", () => {
    close()
})*/

let home = document.createElement("a")
home.href = "../index.html"
home.id = "home"
home.innerText = "Home"
home.classList.add("home")
document.body.appendChild(home)