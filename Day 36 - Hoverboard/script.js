const container = document.getElementById('container');
const colors = [
     '#fde0b2',
     '#f9b1b1',
     '#f384ac',
     '#f9fca0',
     '#ebf89d',
     '#dcf498',
     '#edfcdf',
     '#c7f8df',
     '#83f4dc',
];

const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
     const square = document.createElement('div');
     square.classList.add('square');
     square.addEventListener('mouseover', () => setColor(square));
     square.addEventListener('mouseout', () => removeColor(square));
     container.appendChild(square);
}

function setColor(element){
     const color = getRandomColor();
     element.style.background = color;
     element.style.boxShadow =`0 0 2px ${color},0 0 10px ${color}`
}

function removeColor(element){
     element.style.background ='#1d1d1d';
     element.style.boxShadow =`0 0 2px #000000`
}

function getRandomColor() {
     return colors[Math.floor(Math.random() * colors.length)];
}