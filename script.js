const inputEl = document.getElementById('input-el');
const saveBtn = document.getElementById('input-btn');
const ulEl = document.querySelector('#ul-el')
let myLeads = [];
saveBtn.addEventListener('click', saveLead);

function saveLead() {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    renderLeads()
}

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>
    `
    }
    ulEl.innerHTML = listItems
}