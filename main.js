let input = document.getElementById('inputBox')
let button = document.getElementById("btn")
let deleteAll = document.getElementById('deleteAll')
let checkallbtn = document.getElementById('checkAll')
let alltaskbtn = document.querySelector('#alltaskbtn')
let pendingbtn = document.querySelector('#pendingbtn')
let completedbtn = document.querySelector('#completedbtn')

let alltasklist = document.querySelector('#all-task')
let pendinglist = document.querySelector('#pending-task')
let completedlist = document.querySelector('#completed-task')

const menuBtns = document.querySelectorAll('.logo')
const left = document.querySelector('.left')
const right = document.querySelector('.right')
menuBtns.forEach(menuBtn =>{
    menuBtn.addEventListener("click",()=>{
        left.classList.toggle("activated")
        right.classList.toggle("activated")
    })
})

alltasklist.addEventListener('click', (e) => {
    if (e.target.id === "checkicon") {

        e.target.nextSibling.classList.toggle("checked")

        let child = e.target.querySelector('img')
        if (child.getAttribute('src') === "check.svg") {
            child.setAttribute('src', "checkfill.svg");
        }
        else {
            child.setAttribute('src', "check.svg");
        }
        
        saveData()

    }
    else if (e.target.parentElement.id === "checkicon") {

        e.target.parentElement.nextSibling.classList.toggle("checked")

        if (e.target.getAttribute('src') === "check.svg") {
            e.target.setAttribute('src', "checkfill.svg");
        }
        else {
            e.target.setAttribute('src', "check.svg");
        }

        saveData()

    }
    else if (e.target.id === "delete") {
        e.target.parentElement.remove();
        saveData()
    }
    else if (e.target.parentElement.id === "delete") {
        e.target.parentElement.parentElement.remove();
        saveData()
    }

    else if (e.target.id === "edit") {
        editIconTargeted = e.target
        let itemContent = editIconTargeted.previousSibling.innerText
        let editInputBox = document.createElement('input')
        editInputBox.value = itemContent

        editIconTargeted.previousSibling.innerHTML = ''

        editIconTargeted.previousSibling.appendChild(editInputBox)
        editInputBox.focus()
        editIconTargeted.previousSibling.style.backgroundColor = "rgba(255,255,255,0.7)"

        editInputBox.addEventListener('change', (e) => {
            let newvalue = editInputBox.value
            editIconTargeted.previousSibling.removeChild(editInputBox)
            editIconTargeted.previousSibling.innerHTML = newvalue

            editIconTargeted.previousSibling.style.backgroundColor = 'var(--color2)'
            saveData()
        })        
    }
    else if (e.target.parentElement.id === "edit") {
        editIconTargeted = e.target.parentElement
        let itemContent = editIconTargeted.previousSibling.innerText
        let editInputBox = document.createElement('input')
        editInputBox.value = itemContent

        editIconTargeted.previousSibling.innerHTML = ''

        editIconTargeted.previousSibling.appendChild(editInputBox)
        editInputBox.focus()
        editIconTargeted.previousSibling.style.backgroundColor = "rgba(255, 255, 255, 0.5)"

        editInputBox.addEventListener('change', (e) => {
            let newvalue = editInputBox.value
            editIconTargeted.previousSibling.removeChild(editInputBox)
            editIconTargeted.previousSibling.innerHTML = newvalue

            editIconTargeted.previousSibling.style.backgroundColor = 'var(--color2)'
            saveData()
        })
    }

})


function addTask() {
    if (input.value !== '') {

        // alltask
        let listContainer = document.createElement('li')
        alltasklist.insertAdjacentElement('beforeEnd', listContainer)
        
        let checkedicon = document.createElement('span')
        checkedicon.classList.add('checkicon')
        checkedicon.setAttribute('id', 'checkicon')
        checkedicon.innerHTML = '<img class="checkimg" src="check.svg" alt="">'

        listContainer.appendChild(checkedicon)

        let task = document.createElement('div')
        task.innerHTML = input.value
        listContainer.appendChild(task)

        let span2 = document.createElement("span")
        span2.innerHTML = `<img src="edit.svg" alt="">`
        span2.classList.add('editicon')
        span2.setAttribute('id', 'edit')

        task.insertAdjacentElement('afterend', span2)

        let span1 = document.createElement("span")
        span1.innerHTML = '<img src="delete.svg" alt="">'

        span1.classList.add('crossicon')
        span1.setAttribute('id', 'delete')
        span1.setAttribute('onclick', 'delete()')

        span2.insertAdjacentElement('afterend', span1)   

        // pending
        let listContainer1 = document.createElement('li')
        pendinglist.insertAdjacentElement('beforeEnd', listContainer1)
        
        let checkedicon1 = document.createElement('span')
        checkedicon1.classList.add('checkicon')
        checkedicon1.setAttribute('id', 'checkicon1')
        checkedicon1.innerHTML = '<img class="checkimg" src="check.svg" alt="">'

        listContainer1.appendChild(checkedicon1)

        let task1 = document.createElement('div')
        task1.innerHTML = input.value
        listContainer1.appendChild(task1)

        let span4 = document.createElement("span")
        span4.innerHTML = `<img src="edit.svg" alt="">`
        span4.classList.add('editicon')
        span4.setAttribute('id', 'edit1')

        task1.insertAdjacentElement('afterend', span4)

        let span3 = document.createElement("span")
        span3.innerHTML = '<img src="delete.svg" alt="">'

        span3.classList.add('crossicon')
        span3.setAttribute('id', 'delete1')
        span3.setAttribute('onclick', 'delete()')

        span4.insertAdjacentElement('afterend', span3)  
        
        // completed
        let listContainer2 = document.createElement('li')
        completedlist.insertAdjacentElement('beforeEnd', listContainer2)
        
        let checkedicon2 = document.createElement('span')
        checkedicon2.classList.add('checkicon')
        checkedicon2.setAttribute('id', 'checkicon2')
        checkedicon2.innerHTML = '<img class="checkimg" src="check.svg" alt="">'

        listContainer2.appendChild(checkedicon2)

        let task2 = document.createElement('div')
        task2.innerHTML = input.value
        listContainer2.appendChild(task2)

        let span6 = document.createElement("span")
        span6.innerHTML = `<img src="edit.svg" alt="">`
        span6.classList.add('editicon')
        span6.setAttribute('id', 'edit2')

        task2.insertAdjacentElement('afterend', span6)

        let span5 = document.createElement("span")
        span5.innerHTML = '<img src="delete.svg" alt="">'

        span5.classList.add('crossicon')
        span5.setAttribute('id', 'delete2')
        span5.setAttribute('onclick', 'delete()')

        span6.insertAdjacentElement('afterend', span5)  
    }
    input.value = ''
    saveData()
}

function checkAll() {
    let allcheckboxes = document.getElementsByClassName("checkimg")
    let allListItems = alltasklist.querySelectorAll('div')
    
    
    if(checkallbtn.innerHTML == 'Check All'){
        for (let i = 0; i < allcheckboxes.length; i++) {
            allcheckboxes[i].setAttribute('src', "checkfill.svg");
    
        }
        for (let i = 0; i < allListItems.length; i++) {
            allListItems[i].setAttribute('class', "checked");
    
        }
        checkallbtn.innerHTML = 'Uncheck All'
        saveData()

    }else if(checkallbtn.innerHTML == 'Uncheck All'){
        for (let i = 0; i < allcheckboxes.length; i++) {
            allcheckboxes[i].setAttribute('src', "check.svg");
    
        }
        for (let i = 0; i < allListItems.length; i++) {
            allListItems[i].removeAttribute('class', "checked");
    
        }
        checkallbtn.innerHTML = 'Check All'
        saveData()
    }   
}

function delAll() {
    alltasklist.innerHTML = ''
    pendinglist.innerHTML = ''
    completedlist.innerHTML = ''
    saveData()
}

alltaskbtn.addEventListener('click',(e)=>{
    alltasklist.classList.add('open')
    pendinglist.classList.remove('open')
    completedlist.classList.remove('open')
    alltaskbtn.classList.add('colored')
    pendingbtn.classList.remove('colored')
    completedbtn.classList.remove('colored')
})

pendingbtn.addEventListener('click',(e)=>{
    alltasklist.classList.remove('open')
    pendinglist.classList.add('open')
    completedlist.classList.remove('open')
    alltaskbtn.classList.remove('colored')
    pendingbtn.classList.add('colored')
    completedbtn.classList.remove('colored')
})

completedbtn.addEventListener('click',(e)=>{
    alltasklist.classList.remove('open')
    pendinglist.classList.remove('open')
    completedlist.classList.add('open')
    alltaskbtn.classList.remove('colored')
    pendingbtn.classList.remove('colored')
    completedbtn.classList.add('colored')
})

checkallbtn.innerHTML = 'Check All'
saveData()
function saveData() {
    localStorage.setItem("all-task-list-data", alltasklist.innerHTML)
    localStorage.setItem("pending-list-data", pendinglist.innerHTML)
    localStorage.setItem("completed-list-data", completedlist.innerHTML)
    localStorage.setItem("check-uncheck", checkallbtn.innerHTML)
}

function showTask() {
    alltasklist.innerHTML = localStorage.getItem("all-task-list-data")
    pendinglist.innerHTML = localStorage.getItem("pending-list-data")
    completedlist.innerHTML = localStorage.getItem("completed-list-data")
    checkallbtn.innerHTML = localStorage.getItem("check-uncheck")
}
showTask()

// document.body.innerHTML = ''

