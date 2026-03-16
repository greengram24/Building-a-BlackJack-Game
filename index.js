let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Vhi",
    chips: 145
}



let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    } else{
        return
    }
    
}

let airbnb = {
    title: "Entire condo in Baguio, Philippines",
    guests: 11,
    bedroom: 3,
    beds: 11,
    baths: 3,
    available: true,
    offers: ["Wifi","Kitchen","Workspace","Parking"]
}

console.log(airbnb.offers)

// 3/16/2026
// Aside- Math.random()
// Flooring the number with Math.floor()
// Using Math.random() and Math.floor() to createa dice
// Completing our dice function
// Make getRandomCard() work
// complete getRandomCard()
// our new card feature is broken
// && and || operators
// objects sneak peek
//Aside- intro to objects
// Create your first object