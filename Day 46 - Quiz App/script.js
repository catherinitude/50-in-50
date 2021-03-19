const quizData = [
     {
          question:
               'In what year was the first-ever Wimbledon Championship held?',
          a: '1955',
          b: '1798',
          c: '1907',
          d: '1877',
          correct: 'd',
     },
     {
          question: 'What is the painting “La Gioconda” more usually known as?',
          a: 'Arrangement in Grey and Black No. 1',
          b: 'The Mona Lisa',
          c: 'The Garden of Earthly Delights',
          d: 'Composition with Red Blue and Yellow',
          correct: 'b',
     },
     {
          question: 'Which sport does Costantino Rocca play?',
          a: 'Golf',
          b: 'Baseball',
          c: 'Football',
          d: 'Hockey',
          correct: 'a',
     },
     {
          question: 'What flavor is Cointreau?',
          a: 'Cherry',
          b: 'Orange',
          c: 'Umami',
          d: 'Mint',
          correct: 'b',
     },
     {
          question: 'What is the diameter of Earth?',
          a: '8,000 miles',
          b: '10,000 miles',
          c: '12,000 miles',
          d: '14,000 miles',
          correct: 'a',
     },
     {
          question: 'How many total time zones are there in the world?',
          a: '12',
          b: '16',
          c: '20',
          d: '24',
          correct: 'd',
     },
     {
          question: 'How many Earths could fit inside the sun?',
          a: '13,000',
          b: '130,000',
          c: '1,300,000',
          d: '130,000,000',
          correct: 'c',
     },
     {
          question:
               'When Michael Jordan played for the Chicago Bulls, how many NBA Championships did he win?',
          a: '4',
          b: '6',
          c: '8',
          d: '0',
          correct: 'b',
     },
     {
          question: 'How long is an eon in geology',
          a: 'A hundred years',
          b: 'A million years',
          c: 'A billion years',
          d: 'A trillion years',
          correct: 'c',
     },
     {
          question: 'How awesome are you?',
          a: 'Zero',
          b: 'Four',
          c: 'A little',
          d: 'Infinity',
          correct: 'd',
     },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
     deselectAnswers();

     const currentQuizData = quizData[currentQuiz];

     questionEl.innerText = currentQuizData.question;
     a_text.innerText = currentQuizData.a;
     b_text.innerText = currentQuizData.b;
     c_text.innerText = currentQuizData.c;
     d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
     answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
     let answer;

     answerEls.forEach((answerEl) => {
          if (answerEl.checked) {
               answer = answerEl.id;
          }
     });

     return answer;
}

submitBtn.addEventListener('click', () => {
     const answer = getSelected();

     if (answer) {
          if (answer === quizData[currentQuiz].correct) {
               score++;
          }

          currentQuiz++;

          if (currentQuiz < quizData.length) {
               loadQuiz();
          } else {
               quiz.innerHTML = `
                 <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                 <button onclick="location.reload()">Reload</button>
             `;
          }
     }
});
