var questions = [
    {
        question: 'Which country has the most islands?',
        option: ['Finland', 'Norway', 'Sweden', 'Denmark'],
        answer: 2
    },

    {
        question: 'What is the capital city of France?',
        option: ['Paris', 'London', 'Madrid', 'Berlin'],
        answer: 0
    },

    {
        question: 'Who is the current Prime Minister of the United Kingdom?',
        option: ['Boris Johnson', 'Theresa May', 'David Cameron', 'George Osborne'],
        answer: 1
    },

    {
        question: 'What is the capital city of Japan?',
        option: ['Tokyo', 'Osaka', 'Kyoto', 'Hakone'],
        answer: 0
    },
   


    {
        question: 'Which is the most popular front-end framework?',
        option: ['React', 'Vue.js', 'Angular', 'Bootstrap'],
        answer: 1
    },
    {
        question: 'Which programming language is primarily used for web development?',
        option: ['JavaScript', 'Python', 'Java', 'C++'],
        answer: 0
    },

    {
        question: 'What is the most popular programming language?',
        option: ['Python', 'JavaScript', 'Java', 'C++'],
        answer: 1
    },

    {
        question: 'Which is the largest country in the world?',
        option: ['China', 'India', 'United States', 'Indonesia'],
        answer: 0
    },  

]


var currentQuestionIndex = 0;
var score = 0;

function displayQuestion() {
    var questionEl = document.getElementById('question')
    questionEl.textContent = questions[currentQuestionIndex].question
    document.getElementById('btn1').textContent=questions[currentQuestionIndex].option[0]
    document.getElementById('btn2').textContent=questions[currentQuestionIndex].option[1]
    document.getElementById('btn3').textContent=questions[currentQuestionIndex].option[2]   
    document.getElementById('btn4').textContent=questions[currentQuestionIndex].option[3]
}

function checkAnswer(selectedOptionIndex){
    var correctAsnwer = questions[currentQuestionIndex].answer
    document.getElementById('btn1').disabled = true;
    document.getElementById('btn2').disabled = true;
    document.getElementById('btn3').disabled = true;
    document.getElementById('btn4').disabled = true;

    if(selectedOptionIndex === questions[currentQuestionIndex].answer){
        alert("Correct!");
        score++;
        document.getElementById('score').textContent = "Score: " + score;
    }else
    {
        alert("Wrong! Try Again");
    }
    
}

function nextQuestion(){
   
    
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        displayQuestion();
        document.getElementById('btn1').disabled = false;
        document.getElementById('btn2').disabled = false;
        document.getElementById('btn3').disabled = false;
        document.getElementById('btn4').disabled = false;
    }else{
        document.getElementById('result').textContent = "Game Over! Your Score Is " + score;
        document.getElementById('next-btn').style.display = "none";
        document.getElementById('restart-btn').style.display = "block";
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('score').textContent = "Score: 0";
    document.getElementById('result').textContent = "";
    document.getElementById('next-btn').style.display = "block";
    document.getElementById('restart-btn').style.display = "none";
    displayQuestion();
}

function hoverEffect(element){
    element.style.backgroundColor = "#bbb";
}

function removeHoverEffect(element) {
    element.style.backgroundColor = "";
}



document.addEventListener('keydown', function(event){
    if(event.key === "1"){
        checkAnswer(0);
    }
    else if(event.key === "2"){
        checkAnswer(1);
    }
    else if(event.key === "3"){
        checkAnswer(2);
    }
    else if(event.key === "4"){
        checkAnswer(3);
    }
});
displayQuestion();

