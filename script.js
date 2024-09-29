const randomColorButton = document.getElementById('randomColorButton');
const clickSound = document.getElementById('clickSound');
const body = document.body;
const colorPicker = document.getElementById('colorPicker');

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to play sound
function playSound() {
    clickSound.currentTime = 0; // Reset sound to start
    clickSound.play(); // Play sound
}

// Function to change the background color
function changeBackgroundColor(color) {
    body.style.backgroundColor = color; // Change body background color
}

// Function to create ripple effect
function createRipple(event, button) {
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
    circle.classList.add('ripple');
    button.appendChild(circle);
    setTimeout(() => circle.remove(), 600); // Remove ripple effect after animation
}

// Event listener for random color button
randomColorButton.addEventListener('click', (event) => {
    createRipple(event, randomColorButton); // Create ripple effect
    const randomColor = getRandomColor(); // Get random color
    changeBackgroundColor(randomColor); // Change background color
    playSound(); // Play sound
});

// Event listener for color picker
colorPicker.addEventListener('input', (event) => {
    const selectedColor = event.target.value; // Get selected color
    changeBackgroundColor(selectedColor); // Change background color
    playSound(); // Play sound
});
