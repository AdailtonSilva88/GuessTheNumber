let computerNumber
let userNumbers = []
let attempts = 0
let maxGuesses = 10

function init() {
    computerNumber = Math.floor(Math.random() * 101)   
}

function compareNumbers(){
    const userNumber = Number(document.getElementById('inputBox').value) 
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers
    document.getElementById('inputBox').value = ''
    attempts++
    document.getElementById('attempts').innerHTML = attempts

    if(attempts <= maxGuesses){

        if(userNumber > computerNumber){
            document.getElementById('textOutput').innerHTML = 'Your number is too high'
        }else if(userNumber < computerNumber){
            document.getElementById('textOutput').innerHTML = 'Your number is too low'
        }else{
            document.getElementById('textOutput').innerHTML = 'Congratulations The computer number is ' + computerNumber
            document.getElementById('inputBox').setAttribute('Readonly','Readonly')
        }    
    }else{
        document.getElementById('textOutput').innerHTML = 'You Lose! The computer number was ' + computerNumber
        document.getElementById('inputBox').setAttribute('Readonly','Readonly')
    } 
}

function newGame(){
    window.location.reload(true)
}
