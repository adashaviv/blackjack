let firstNumber = 0 
let secondNumber = 0 
let cards = []
let sum = 0

let isAlive = true
let isBlackJack = false
let isStay = false
let dealerGo = true

let dealerFirstNumber = 0
let dealerSecondNumber = 0
let dealerCards = []
let dealerSum = 0

const startButtonChange = document.getElementById("start-btn")
const displayCards = document.getElementById("cards-display")
const displaySum = document.getElementById("sum-display")

const displayDealerCards = document.getElementById("dealers-cards-display")
const displayDealerSum = document.getElementById("dealers-sum-display")
const playMessage = document.getElementById("play-message")

function startGame() {
    
    cards = []
    sum = 0

    dealerCards = []
    dealerSum = 0

    isAlive = true
    isBlackJack = false
    isStay = false

    firstNumber = getRandomNumber()
    secondNumber = getRandomNumber()

    dealerFirstNumber = getRandomNumber()
    dealerSecondNumber = getRandomNumber()

     displayDealerSum.textContent = " "

    startButtonChange.textContent = "RESTART GAME"

    cards.push(firstNumber)
    cards.push(secondNumber)

    dealerCards.push(dealerFirstNumber)
    dealerCards.push(dealerSecondNumber)

    renderGame()

}

function renderGame() {
    displayCards.textContent = "Cards:"
    sum = 0

    displayDealerCards.textContent = dealerFirstNumber + " __ "

    for (let i=0; i<cards.length; i++) {
        displayCards.textContent += " " + cards[i] 
        sum += cards[i]

        
    }

    dealerSum = dealerFirstNumber + dealerSecondNumber

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
        return randomIndex = 11
    } else if (randomIndex === 11 || randomIndex === 12 || randomIndex === 13) {
        return randomIndex = 10
    } else {
        return randomIndex
    }

}

function dealCard() {
    if (isBlackJack === false && isAlive === true && isStay === false) {
        getRandomNumber()

        cards.push(randomIndex)

        renderGame()
    }
}

function showDealer() {
    if (isBlackJack === false && isAlive === true) {

        isStay = true

        displayDealerCards.textContent = dealerFirstNumber + " " + dealerSecondNumber

        displayDealerSum.textContent = "Dealer's sum: " + dealerSum

        if (dealerSum >= 17) {

            dealerGo = false 

            if (sum > dealerSum) {
                playMessage.textContent = "You win 💵 "
            } else if (sum < dealerSum) {
                playMessage.textContent = "Sorry, game over 😭😭😭"
            } else {
                 playMessage.textContent = "You didn't win, but you also didn't lose..."
            }
        } else {
            dealerAddCard() 

            } 

    }

}

function dealerAddCard() {

    do {
        getRandomNumber()
            displayDealerCards.textContent += " " + randomIndex
            dealerCards.push(randomIndex)

            dealerSum = 0

            for (let i=0; i<dealerCards.length; i++) {
                dealerSum += dealerCards[i]
            }

            if (dealerSum>=17) {
                dealerGo = false 
            }

            displayDealerSum.textContent = "Dealer's sum: " + dealerSum

            if (dealerSum >= 17 && dealerSum <=21 ) {
                if (sum > dealerSum && sum < 21) {
                    playMessage.textContent = "You win 💵 "
                } else if (sum === dealerSum) {
                    playMessage.textContent = "You didn't win, but you also didn't lose..."

                }  else if (dealerSum > sum) {
                    playMessage.textContent = "Sorry, game over 😭😭😭"
                } 

            } else if (dealerSum > 21) {

                playMessage.textContent = "You win!"

            } 
    } while (dealerGo === true)
 }