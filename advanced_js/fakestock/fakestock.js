export function getstock() {
    return {
        name: "qstackAI",
        sym: "QTA",
        price: (Math.random() * 3).toFixed(2),
        time: new Date().toLocaleTimeString()
    }
}