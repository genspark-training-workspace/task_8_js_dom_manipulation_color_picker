const randomColorButton = document.getElementById('randomColorButton')
const clickSound = document.getElementById('clickSound')
const body = document.body
const colorPicker = document.getElementById('colorPicker')

function getRandomColor() {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function playSound() {
    clickSound.currentTime = 0
    clickSound.play()
}

function changeBackgroundColor(color) {
    body.style.backgroundColor = color
}

function createRipple(event, button) {
    const circle = document.createElement('span')
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2
    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`
    circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`
    circle.classList.add('ripple')
    button.appendChild(circle)
    setTimeout(() => circle.remove(), 600)
}

randomColorButton.addEventListener('click', (event) => {
    playSound()
    createRipple(event, randomColorButton)
    const randomColor = getRandomColor()
    changeBackgroundColor(randomColor)
})

colorPicker.addEventListener('input', (event) => {
    playSound()
    const selectedColor = event.target.value
    changeBackgroundColor(selectedColor)
})
