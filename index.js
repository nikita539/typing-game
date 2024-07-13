const startButton = document.getElementById('start_buton')
const input = document.getElementById('input')
const textField = document.getElementById('text_field')

const text = [
    "Hello dude, how are you ?"
]


startButton.addEventListener('click', function() {

    const elements = text[0].split(' ')

    elements.forEach((item) => {
        const elem = document.createElement('span')
        elem.innerText = item
        textField.appendChild(elem)
    })

})

input.addEventListener('input', function(event) {
    
})