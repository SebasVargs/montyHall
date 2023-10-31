function randomPosition(arrayLength){
    const valor = Math.floor(Math.random() * arrayLength)
    return valor;
}

function setRandomColors() {
    const divs = document.querySelectorAll('#randomColor div');
    const colors = ['blue1', 'blue2'];
    const randomIndex = randomPosition(divs.length);

    for (let i = 0; i < divs.length; i++) {
        const randomColorIndex = Math.floor(Math.random() * colors.length);
        const color = colors[randomColorIndex];
        divs[i].className = color;

        if (i === randomIndex) {
            divs[i].className = 'red';
        }
    }

    //setRandomImages(randomIndex);
}

// Llama a la función para establecer los colores aleatorios cuando la página se carga.
const randomIndex = setRandomColors();

function setRandomImages() {
    const divs = document.querySelectorAll('#randomImages .card-back img');
    const imagePaths = ['./src/toro.png', './src/toro.png'];

    for (let i = 0; i < divs.length; i++) {
        const randomImagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)];
        divs[i].src = randomImagePath;

        if (i === randomIndex) {
            divs[i].src = './src/yate.png';
        }
    }


}

// Llama a la función para establecer los colores aleatorios cuando la página se carga.
setRandomImages();

let firstClick = true;

function handleCardClick(card) {
    if (firstClick) {
        card.querySelector('.card-front').style.background = 'blue';
        firstClick = false;
    } else {
        card.classList.toggle('flip');
    }
}
