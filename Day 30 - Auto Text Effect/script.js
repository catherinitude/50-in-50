const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = "We love Programing!";

let i = 1;
let speed = 300 / speedEl.value;

writeText()

function writeText() {
     textEl.innerText = text.slice(0,i);
     i++
     if(i > text.length){
          i=1
     }

     setTimeout(writeText, speed); 
}

speedEl.addEventListener('input', (e) => speed = 300 /e.target.value)