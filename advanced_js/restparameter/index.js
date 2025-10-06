const bodyel = document.getElementById("body")

function getlabelshtml(sender, text, ...names) {
    for (i of names) {
        bodyel.innerHTML += `
        <div>
            <p>Dear ${i}</p>
            <p>${text}</p>
            <p>Best wishes</p>
            <p>${sender}</p>
        </div>
        ` 
    }
}

let text = "Thank you for all your hard work throughout the year!"
getlabelshtml("Tom", text,'sally', 'reddot', 'zaydan', 'akmal', 'gugugaga', 'radiogaga', 'bohemian', 'hungarian')