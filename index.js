// DOM - elements
const startButton = document.getElementById('start_buton')
const input = document.getElementById('input')
const textField = document.getElementById('text_field')

// Global variables
const text = [
    "Hello my name is Nikita !",
    "I live in Russia",
]
let cuurrentSentenceOrder = 0;
const splitedText = text[cuurrentSentenceOrder].split(' ')
let cuurrentWordOrder = 0;
let startTime;


startButton.addEventListener('click', function() {
    // clear textField
    textField.innerText = null
    
    // insert text into textfield
    text[cuurrentSentenceOrder].split(' ').forEach((word) => {
        const el = document.createElement('span')
        el.innerText = word
        textField.appendChild(el)
    })

    // set start time
    startTime = Date.now()

    // disable start button
    startButton.disabled = true
    
})


input.addEventListener('input', function(event) {

    if (cuurrentWordOrder == splitedText.length - 1) {
        textField.childNodes[cuurrentWordOrder].className = 'highlite'
        textField.childNodes[cuurrentWordOrder - 1].className = ''
        event.target.value = ''
        console.log(`your score is ${(Date.now() - startTime) / 1000}`)
        return
    }

    if (event.target.value.trim() === splitedText[cuurrentWordOrder]) {

        textField.childNodes[cuurrentWordOrder].className = 'highlite'

        if (cuurrentWordOrder > 0) {
            textField.childNodes[cuurrentWordOrder - 1].className = ''
        }

        cuurrentWordOrder++
        event.target.value = ''

    }

})