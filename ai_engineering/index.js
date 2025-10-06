const inputel = document.getElementById('inpt-add')
const buttonel = document.getElementById('add')
const parel = document.getElementById('paragraph')
const generate = document.getElementById('generate')
const answerel = document.getElementById('answer')
let tmp = []

buttonel.addEventListener("click", function() {
    tmp.push(inputel.value)
    render(parel, inputel.value)
})

generate.addEventListener("click", () => AI(tmp))

function render(id, value) {
    id.textContent += value + " "
}

function renderanswer(id, value) {
    id.textContent = value + " "
}

async function AI(arr) {
    let name = arr.join(", ")
    console.log(name)
    response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": "Bearer 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",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "model": "openai/gpt-oss-20b:free",
            "messages": [
            {
                "role":"system",
                "content":"you are a stock expert analyst"
            },
            {
                "role": "user",
                "content": `please explain about this stock: ${name}. dont use any formatting string, just use plain string in paragraph`
            }
            ]
        })
    })
    data = await response.json()
    console.log(data)
    renderanswer(answerel, data.choices[0].message.content)
    
}