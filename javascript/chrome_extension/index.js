let inputbtn = document.getElementById("input-btn")
let deletebtn = document.getElementById("delete-btn")
let tabbtn = document.getElementById("tab-btn")

const inputel = document.getElementById("input-el")
let ulel = document.getElementById('ul-l')
let myleads = localStorage.getItem("myLeads")

if (!myleads) {
    myleads = []
    localStorage.setItem("myLeads", JSON.stringify(myleads))
}
else {
    myleads = JSON.parse(myleads)
    let listitems =""
    for (i of myleads) {
         listitems += `<li><a href=${i} target='blank'> ${i} </a></li>`
    }
    ulel.innerHTML = listitems
}

inputbtn.addEventListener("click", function() {
    if (!myleads.includes(inputel.value) && !(inputel.value.trim() === "")) {
        myleads.push(inputel.value)
        localStorage.setItem("myLeads", JSON.stringify(myleads))
        renderlead(inputel.value)

        // clearing input
        inputel.value = ""
    }   
})

deletebtn.addEventListener("dblclick", function() {
    myleads = []
    localStorage.setItem("myLeads", JSON.stringify(myleads))
    ulel.textContent=""
})

tabbtn.addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let url = tabs[0].url;
    if (url && !myleads.includes(url)) {
      myleads.push(url);
      localStorage.setItem("myLeads", JSON.stringify(myleads));
      renderlead(url);
    }
})})

function renderlead(value) {
    // ulel.innerHTML = "<li><a href='" + inputel.value + "' target='blank'>" + inputel.value + "</a></li>"
    ulel.innerHTML += `<li><a href=${value} target='blank'> ${value} </a></li>`
}


