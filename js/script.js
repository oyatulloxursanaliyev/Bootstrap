const elList = document.querySelector(".list")

const newP = document.createElement("p")
const newImg = document.createElement("img")
const newItem = document.createElement("li")

newP.textContent = "Salom"


newP.setAttribute("class", "hero__desc")
newImg.setAttribute("src", "https://picsum.photos/200/200")


elList.appendChild(newItem)
newItem.appendChild(newP)
newItem.appendChild(newImg)

console.log(newImg);


