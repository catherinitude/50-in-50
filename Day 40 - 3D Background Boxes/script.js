const boxesContainer = document.getElementById('boxes');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'));

function createBoxes() {
     for (let ind1 = 0; ind1 < 4; ind1++) {
          for (let ind2 = 0; ind2 < 4; ind2++) {
               const box = document.createElement('div');
               box.classList.add('box');
               box.style.backgroundPosition = `${-ind2 * 125}px ${-ind1 * 125}px`;
               boxesContainer.appendChild(box);
          }
     }
}

createBoxes();
