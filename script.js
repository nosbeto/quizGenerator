const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('#choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');

var currentQuestion = {};
var acceptingAnswer = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = []

questions [
    {
        question: 'What is my name?',
        choice1: 'Alberto',
        choice2: 'John',
        choice3: 'Beto',
        choice4: 'Jose',
        answer: 1
    },
    {
        question: 'What is my name2?',
        choice1: 'Alberto',
        choice2: 'John',
        choice3: 'Beto',
        choice4: 'Jose',
        answer: 2
    },
    {
        question: 'What is my name3?',
        choice1: 'Alberto',
        choice2: 'John',
        choice3: 'Beto',
        choice4: 'Jose',
        answer: 3
    },
    {
        question: 'What is my name4?',
        choice1: 'Alberto',
        choice2: 'John',
        choice3: 'Beto',
        choice4: 'Jose',
        answer: 4
    },
    {
        question: 'What is my name?',
        choice1: 'Alberto',
        choice2: 'John',
        choice3: 'Beto',
        choice4: 'Jose',
        answer: 2
    }
]

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;

function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]
    getNewQuestion()
}

function getNewQuestion() {
    if(availableQuestions.length ===0 || questionCounter > MAX_QUESTIONS {
        localStorage.setItem('MostRecentScore', score)
        return window.location.assign('/end.html')
    }
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice =>{
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex,1)

    acceptingAnswers = true
}

choice.forEach(choice => {

})