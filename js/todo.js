const elForm = document.querySelector(".form")
const elInput = document.querySelector(".input")
const elList = document.querySelector(".list")

let todos = []
let counter = 1

elForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const inputValue = elInput.value

    let todo = {
        name: inputValue,
        id: counter++
    }

    elList.innerHTML = null


    todos.push(todo)
    for(item of todos){
        const newLi = document.createElement("li")
        newLi.textContent = item.name
        console.log(item.id);

        elList.appendChild(newLi)   
    }

    console.log(inputValue);
})

