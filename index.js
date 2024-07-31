let firstNumber = 0 
let secondNumber = 0 
let cards = []
let sum = 0
let isAlive = true
let isBlackJack = false
let startButtonChange = document.getElementById("start-btn")
let displayCards = document.getElementById("cards-display")
let displaySum = document.getElementById("sum-display")
let playMessage = document.getElementById("play-message")

function startGame() {
    
    cards = []
    sum = 0
    isAlive = true
    isBlackJack = false

    firstNumber = getRandomNumber()
    secondNumber = getRandomNumber()

    startButtonChange.textContent = "RESTART GAME"

    cards.push(firstNumber)
    cards.push(secondNumber)

    renderGame()

}

function renderGame() {
    displayCards.textContent = "Cards:"
    sum = 0

    for (let i=0; i<cards.length; i++) {
        displayCards.textContent += " " + cards[i] 
        sum += cards[i]
    }

    displaySum.textContent = "Sum: " + sum

    if (sum===21) {
        playMessage.textContent = "BLACKJACK! You win!"
        isBlackJack = true

    } else if (sum < 21) {
        playMessage.textContent = "What do you want to do?"
        
    } else {
        playMessage.textContent = "Sorry, bust. Try again."
        isAlive = false
    }

    
}

function getRandomNumber() {
    randomIndex = Math.floor(Math.random()*13 + 1)

    if (randomIndex === 1) {
        return 11
    } else if (randomIndex === 11 || randomIndex === 12 || randomIndex === 13) {
        return 10
    } else {
        return randomIndex
    }

}

function dealCard() {
    if (isBlackJack === false && isAlive === true) {
        getRandomNumber()

        cards.push(randomIndex)

        renderGame()
    }
}

