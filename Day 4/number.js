let value1 = Math.floor(Math.random() * 10)


const guessInput = document.getElementById('guess-input');
const button = document.getElementById('basic-addon2');
const cardBody = document.getElementById('card-body')

function Correct(){
    const resultDiv = document.createElement('div');
    resultDiv.innerHTML = 'CONGRATS! YOU GUESSED THE CORRECT NUMBER!'

    resultDiv.classList.add('alert')
    resultDiv.classList.add('alert-success')
    resultDiv.classList.add('mt-4')
    
    cardBody.append(resultDiv)
}

function Incorrect(){
    const resultDiv = document.createElement('div');
    resultDiv.innerHTML = 'Sorry... You Guessed an Incorrect Number. Guess Again!'

    resultDiv.classList.add('alert')
    resultDiv.classList.add('alert-warning')
    resultDiv.classList.add('mt-4')
    
    cardBody.append(resultDiv)
}

button.addEventListener('click', (event) => {
    const input = guessInput.value

    if(input == value1){
        Correct();
    }

    else{
        Incorrect();
    }
})