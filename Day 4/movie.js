const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
   ]

const text = document.getElementById('textAbout')
const i = Math.floor(Math.random() * 10)
text.innerHTML = movies[i].explanation



const hint = document.getElementById('button')
const showHint = document.getElementById('showHint')
button.addEventListener('click', (event) => {
showHint.innerHTML = movies[i].hint
})

const body = document.getElementById('card-body')

const movieTitle = movies[i].title




const submit = document.getElementById('submit')
const textInput = document.getElementById('text-input')
submit.addEventListener('click', (event) => {
    if (textInput == movieTitle){
        const resultDiv = document.createElement('div');
        resultDiv.innerHTML = 'CONGRATS! YOU GUESSED THE CORRECT MOVIE!'

        resultDiv.classList.add('alert')
        resultDiv.classList.add('alert-success')
        resultDiv.classList.add('mt-4')
        
        body.append(resultDiv)
    }
    else{
        const resultDiv = document.createElement('div');
        resultDiv.innerHTML = 'Sorry... You Guessed the Incorrect Movie. Guess Again!'
    
        resultDiv.classList.add('alert')
        resultDiv.classList.add('alert-warning')
        resultDiv.classList.add('mt-4')
        
        body.append(resultDiv)
    }
})