let cards=[]
let sum=0

let hasBlackJack = false
let isAlive = false

let message = ""

let mainText = document.getElementById("main-text")

let cardsDealt = document.getElementById("cards-dealt")
let cardsSum = document.getElementById("cards-sum")

let player = {
    name: prompt("Please enter your name", "Player 1"),
    credits: 100
}

let playerInfo = document.getElementById("player-info")
playerInfo.textContent = player.name + ": " + "$" + player.credits

function startGame() {
    if (player.credits != 0) {
        isAlive = true
        let firstCard = randomCard()
        let secondCard = randomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        player.credits -= 10
        renderGame()
    } else {
        isAlive=false
        mainText.textContent="Refresh the browser to start a new game"
        playerInfo.textContent = "Refresh the browser to start a new game"
    }
    
}



function randomCard() {
    cardNumber = Math.floor(Math.random()*13) + 1
    if (cardNumber > 10) {
        return 10
    } else if (cardNumber === 1) {
        return 11
    } else {
        return cardNumber
    }
}


function renderGame() {
    playerInfo.textContent = player.name + ": " + "$" + player.credits
    cardsDealt.textContent = "Cards: " + cards

    cardsSum.textContent = "Sum: " + sum


    if (sum < 21 && player.credits!=0) {
        mainText.textContent = "Do you want to draw another card?"
        document.getElementById("start-game").disabled = true
    } else if (sum===21) {
        mainText.textContent = "You've got Blackjack!"
        hasBlackJack = true
        player.credits+=100
        playerInfo.textContent = player.name + ": " + "$" + player.credits
        document.getElementById("start-game").textContent = "START NEW GAME"
    } else if (sum>21) {
        document.getElementById("start-game").disabled = false
        mainText.textContent = "You're out of the game!"
        isAlive = false
        document.getElementById("start-game").textContent = "START NEW GAME"
    }

}



function newCard() {
    if (isAlive===true) {
        if (player.credits !=0 && !hasBlackJack) {
            let newRandomCard = randomCard()
            cards.push(newRandomCard)
            sum += newRandomCard
            player.credits -= 10
            renderGame()
        }
    }
}


