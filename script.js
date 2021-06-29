const inputEl = document.getElementById('input-el');
const saveBtn = document.getElementById('input-btn');
const delBtn = document.getElementById('delete-btn');
const tabBtn = document.getElementById('tab-btn');
const ulEl = document.querySelector('#ul-el');
let myLeads = [];

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;

    render(myLeads)
}


function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
    `
    }
    ulEl.innerHTML = listItems;
}

saveBtn.addEventListener('click', saveLead);
delBtn.addEventListener('click', deleteLead);

tabBtn.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    })
})

function saveLead() {
    myLeads.push(inputEl.value);
    inputEl.value = '';

    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    render(myLeads);


}

function deleteLead() {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
}