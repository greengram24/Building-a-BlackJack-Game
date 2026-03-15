let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")


function getRandomCard(){

}


function startGame(){
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for (let i = 0; i<cards.length; i++){
        cardsEl.textContent +=cards[i] + " "
    }

    sumEl.textContent = "Sum: "+ sum
    if (sum <= 20){
        message ="Do you want to draw a new card?"      
    } else if (sum === 21){
        message = "Nice one. You've got blackjack."
        hasBlackJack = true
    } else {
        message = "You lose!"
        isAlive= false
    }

    messageEl.textContent = message

    console.log(message)
}

function newCard(){
    let card = 7
    sum += card
    cards.push(card)
    renderGame()
}


// learned how to return values

