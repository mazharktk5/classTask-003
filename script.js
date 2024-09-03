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

displayQuestion();