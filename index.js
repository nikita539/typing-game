const startButton = document.getElementById('start_buton')
const input = document.getElementById('input')
const textField = document.getElementById('text_field')

const text = [
    "Hello my name is Nikita !"
]


startButton.addEventListener('click', function() {
    // clear textField
    textField.innerText = null
    
    // insert text into textfield
    text[0].split(' ').forEach((word) => {
        const el = document.createElement('span')
        el.innerText = word
        textField.appendChild(el)
    })

    // disable start buton
    startButton.disabled = true
    
})

input.addEventListener('input', function(event) {
    
})