

const colors = ["#9b5de5", "#f15bb5", "#00bbf9", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"];
const items = document.querySelectorAll('.item');
const modalContainer = document.querySelector('.modal-container');
const closeBtn = document.querySelector('.modal-btn');
const modalP = document.querySelector('.modal p');
const scoreText = document.querySelector('#score');

const rows = 3;
const cols = 3;
let target;
let score;

initialGame();

function initialGame() {
    score = 0;
    colorizeItems();
}

function colorizeItems() {
    let mainColor = colors[Math.floor(Math.random() * colors.length)];

    items.forEach(item => item.style.backgroundColor = mainColor);

    target = Math.floor(Math.random() * (rows * cols));
    items[target].style.backgroundColor = lightenColor(mainColor, 10);

    items.forEach(item => {
        item.removeEventListener('click', handleItemClick);
        item.addEventListener('click', handleItemClick);
    });
}

function handleItemClick(event) {
    const number = Array.from(items).indexOf(event.currentTarget);

    if (target === number) {
        nextLevel();
    } else {
        loseGame();
    }
}

function nextLevel() {
    score++;
    scoreText.innerText = "Your Score: " + score;
    colorizeItems();
}

function loseGame() {
    modalP.innerText = "Your Score: " + score;
    modalContainer.classList.add('show');
}

function lightenColor(color, amount) {
    return '#' + color.replace(/^#/, '').replace(/../g, color => {
        return ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).slice(-2);
    });
}

// Event listener for closing the modal
closeBtn.addEventListener('click', () => {
    modalContainer.classList.remove('show');
});
function nextLevel() {
    console.log('correct')
    score++;
    scoreText.innerText = "Your Score: " + score;
    colorizeItems();

}
function loseGame() {
    console.log('incorrect')
    modalP.innerText = "Your Score" + score;
    modalContainer.classList.add('show ')
}

