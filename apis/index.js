// const bodyel = document.getElementById('body')
// console.log("test")
// console.log(bodyel)
// fetch("https://apis.scrimba.com/dog.ceo/api/breeds/image/random")
//     .then(response => response.json())
//     .then(data => {
//         bodyel.innerHTML = `<img src="${data.message}">`
//     })


// try {
//     const response = await fetch("https://apis.scrimba.com/dog.ceo/api/breeds/image/random")
//     const data = await response.json()
//     console.log(data)
//     bodyel.innerHTML = `<img src="${data.message}">`
// } catch(err) {
//     throw(console.error(err));
// } finally {
//     console.log("the operation has completed")
// }


try {
    const response = await fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
        headers: {
            'Content-Type': 'application/json'  
        },
        method: "POST",
        body: JSON.stringify({
            title:"Holiday Nightmares",
            body: 'When I was kidnapped in Scotland...',
            userId:100
        })
    })
    if (!response.ok) {
        throw new Error("something wrong with the API")
    }
    const data = await response.json()
    console.log(data)
} catch(err) {
    console.log(err)
}



