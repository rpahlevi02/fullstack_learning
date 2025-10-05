let deck = [
  ...Array(4).fill(2),
  ...Array(4).fill(3),
  ...Array(4).fill(4),
  ...Array(4).fill(5),
  ...Array(4).fill(6),
  ...Array(4).fill(7),
  ...Array(4).fill(8),
  ...Array(4).fill(9),
  ...Array(4).fill(10), // 10
  ...Array(4).fill(10), // Jack
  ...Array(4).fill(10), // Queen
  ...Array(4).fill(10), // King
  ...Array(4).fill(11)  // Ace
];console.log(deck)

let cards = [];

let hasblackjack = false;
let isalive=true;
let message= "";

let messageEl = document.getElementById('message');
let sumEl = document.querySelector('.sum');
let cardEl = document.querySelector(".card")
let newcardEl = document.querySelector(".new-card")

let player = {
    name: "rey",
    chips: 130
}

let playerEl = document.getElementById('player')
playerEl.textContent = player.name + ": $" + player.chips

function getrandomcard() {
    let randomIndex = Math.floor(Math.random() * deck.length);
    let randomCard = deck[randomIndex];      // pick
    deck.splice(randomIndex, 1);             // remove 1 element at that index
    console.log(randomCard);
    return randomCard;
}

function startgame() {
    if (isalive === true) {
        cards.push(getrandomcard())
        
        rendergame()
    }
}

function rendergame() {
    let sum = 0
    for (i of cards) {
        sum = sum + i
    }

    if (sum < 21) {
        message= "Do you want to draw a card?"
    } else if (sum === 21) {
        message = "You got a blackjack"
        hasblackjack = true;
    } else {
        message = "You lose game over"
        isalive=false;
    }

    cardEl.textContent = "Card: " + cards.join(" - ")
    console.log(cardEl.textContent)

    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    newcardEl.textContent = "DRAW A CARD"
    document.querySelector(".new-card").style.display = "inline-block";
}

function drawcard() {
    if (isalive === true && hasblackjack === false) {
        let newcard = getrandomcard();
        cards.push(newcard)
        rendergame();
    }
}
