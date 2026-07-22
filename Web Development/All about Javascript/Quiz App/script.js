const questionSpan = document.getElementById('question')
const option1Span = document.getElementById('op1')
const option2Span = document.getElementById('op2')
const option3Span = document.getElementById('op3')
const option4Span = document.getElementById('op4')
const scoreSpan = document.getElementById("score")
const nextBtn = document.getElementById('btn')
const numberOfQuestions = document.getElementById('numberOfQuestions')
const quizDiv = document.getElementById('quiz')
const resultDiv = document.getElementById('results')
const questionsResultsParent = document.getElementById("questionResultsParent")
const restartBtn = document.getElementById("restartBtn")
const timerLimit = document.getElementById("time")

let currentQuestion = 0
let userAnswers = []
let selectedOption = null
let count = 0
let timeLeft = 15;

const questions = [
    {
        question: "Which language runs in a web browser",
        options: ["Java","JavaScript","Python","C++"],
        answer:1
    },
    {
        question: "What does CSS stand for?",
        options: [
          "Central Style Sheets",
          "Cascading Style Sheets",
          "Cascading Simple Sheets",
          "Cars SUVs Sailboats"
        ],
        answer: 1
      },
      {
        question: "What does HTML stand for?",
        options: [
          "Hypertext Markup Language",
          "Hypertext Markdown Language",
          "Hyperloop Machine Language",
          "Helicopters Terminals Motorboats Lamborghinis"
        ],
        answer: 0
      },
      {
        question: "Which method adds an item to the end of an array?",
        options: ["shift()", "pop()", "push()", "unshift()"],
        answer: 2
      },
      {
        question: "Which keyword declares a constant in JavaScript?",
        options: ["var", "let", "const", "static"],
        answer: 2
      }
]

let timerLoop;

// 2. The main "Start" function
function startTimer() {
  // Clear any existing timer so they don't stack up if clicked twice
  clearInterval(timerLoop);
  
  // Step 2: Show the number "15" on the screen immediately
  document.getElementById("time").textContent = timeLeft;
  timerLimit.innerHTML = `Time:${timeLeft} seconds`

  // Step 3: Start a 1-second loop
  timerLoop = setInterval(() => {
    // Step 4: Minus one second from the clock
    timeLeft--;

    // Step 4: Change the screen to show the new number
    timerLimit.innerHTML = `Time:${timeLeft} seconds`

    // Step 5: Check if it hit zero
    if (timeLeft <= 0) {
      clearInterval(timerLoop); // Stop the loop from running forever
      quizDiv.style.display = "none"
      resultDiv.style.display = "flex"
      showResult()
    }
  }, 1000); // 1000 milliseconds = 1 second
}

function removeSelection(){
  option1Span.classList.remove("select-option")
  option2Span.classList.remove("select-option")
  option3Span.classList.remove("select-option")
  option4Span.classList.remove("select-option")
}

function showQuestion (){
  startTimer()
  const questionObject = questions[currentQuestion]
  numberOfQuestions.innerHTML = `Question ${currentQuestion+1}/5`

  questionSpan.innerHTML = questionObject.question

  op1 = questionObject.options[0]
  op2 = questionObject.options[1]
  op3 = questionObject.options[2]
  op4 = questionObject.options[3] 

  option1Span.innerHTML = op1
  option2Span.innerHTML = op2
  option3Span.innerHTML = op3
  option4Span.innerHTML = op4

  option1Span.addEventListener('click', function (){
    selectedOption = 0
    removeSelection()
    option1Span.classList.add("select-option")
  })
  option2Span.addEventListener('click', function (){
    selectedOption = 1
    removeSelection()
    option2Span.classList.add("select-option")
  })
  option3Span.addEventListener('click', function (){
    selectedOption = 2
    removeSelection()
    option3Span.classList.add("select-option")
  })
  option4Span.addEventListener('click', function (){
    selectedOption = 3
    removeSelection()
    option4Span.classList.add("select-option")
  })

  if (currentQuestion == 4){
    nextBtn.innerHTML = "Finish"
  }
}

function showResult(){
  let score = 0
  for(let i=0;i<=4;i++){

    const questionResultDiv = document.createElement("div")

    const questionStatusDiv = document.createElement("div")
    questionStatusDiv.classList.add("question-status")

    questionResultDiv.appendChild(questionStatusDiv)

    const questionNumberAndQuestionDiv = document.createElement("div")
    questionNumberAndQuestionDiv.classList.add("question-number-and-question")

    questionStatusDiv.appendChild(questionNumberAndQuestionDiv)

    const questionNumber = document.createElement("span")
    questionNumber.innerHTML = `Q${i+1}`
    questionNumber.classList.add("question-number")

    const resultQuestionTopic = document.createElement("span")
    resultQuestionTopic.innerHTML = questions[i].question
    resultQuestionTopic.classList.add("result-question-topic")

    questionNumberAndQuestionDiv.appendChild(questionNumber)
    questionNumberAndQuestionDiv.appendChild(resultQuestionTopic)

    const myAnswer = document.createElement("span")
    myAnswer.innerHTML = `Your Answer: ${questions[i].options[userAnswers[i]]}`
    myAnswer.classList.add("my-answer")

    const correctAnswer = document.createElement("span")
    correctAnswer.innerHTML = `Correct Answer: ${questions[i].options[questions[i].answer]}`
    correctAnswer.classList.add("correct-answer")

    questionStatusDiv.appendChild(myAnswer)
    questionStatusDiv.appendChild(correctAnswer)

    questionsResultsParent.appendChild(questionResultDiv)

    if (questions[i].answer == userAnswers[i]){
      score = score + 1
      questionResultDiv.classList.add("question-result-correct")

    }
    else{
      questionResultDiv.classList.add("question-result-incorrect")
    }
    scoreSpan.innerHTML = `Your Score: ${score}/5`
}}

nextBtn.addEventListener('click',function(){
  if (selectedOption == null)
    return

  if (currentQuestion == 4){
    userAnswers.push(selectedOption)
    quizDiv.style.display = "none"
    resultDiv.style.display = "flex"
    showResult()
    return
  }

  userAnswers.push(selectedOption)
  selectedOption = null

  currentQuestion = currentQuestion + 1
  removeSelection()
  showQuestion()
})

restartBtn.addEventListener('click', function(){
  questionsResultsParent.replaceChildren();
  currentQuestion = 0
  userAnswers = []
  selectedOption = null
  removeSelection()
  quizDiv.style.display = "flex"
  resultDiv.style.display = "none"
  // reset timer
  showQuestion()
})

showQuestion()