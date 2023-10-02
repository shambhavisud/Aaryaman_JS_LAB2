/**
 * 1. Javascript supports --> Functions, XHTML, CSS, HTML --> Functions
 * 2. Which language used for styling web pages  --> HTML, JQuery, CSS, XML --> CSS
 * 3. Which is not a Javascript Framework --> Python, JQuery, Django, NodeJS --> Django
 * 4. Which is used to connect to Database --> PHP, HTML, JS, All --> PHP
 * 5. Javascript is a --> Language, Programming Language, Development, All -->  Programming Language
 */

function Quiz(questions){
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

function Question(text, options, answer){
    this.text = text;
    this.options = options;
    this.answer = answer;
}

Quiz.prototype.getQuestionByIndex = function(){
    return this.questions[this.questionIndex]
}

Quiz.prototype.checkOptionWithAnswer = function(ans){
    if(this.getQuestionByIndex().answer == ans){
        this.score++
    }
    this.questionIndex++
}

Quiz.prototype.isEnded = function(){
    return this.questionIndex == this.questions.length
}

let questions = [
    new Question("Javascript supports ?", ["Functions", "XHTML", "CSS", "HTML"], "Functions"),
    new Question("Which language used for styling web pages ?", ["HTML", "JQuery", "CSS", "HTML"], "CSS"),
    new Question("Which is not a Javascript Framework ?", ["Python", "JQuery", "DJango", "NodeJS"], "DJango"),
    new Question("Which is used to connect to Database ?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("Javascript is a ?", ["Language", "Programming Language", "Development", "All"], "Programming Language" )
];      //;

let quiz = new Quiz(questions)

function displayQuestions(){
    if(quiz.isEnded()){
        showScores()
    }
    else{
        let questionElement = document.getElementById("question");
        questionElement.innerText = quiz.getQuestionByIndex().text

        let choices = quiz.getQuestionByIndex().options
        for (let i = 0; i < choices.length; i++) {
            let elem = document.getElementById("choice"+ i)
            elem.innerText = choices[i];
            handleClickOnBtn("btn"+ i, choices[i])
        }
        showProgress()
    }
}

function showProgress(){
    let currentIndex = quiz.questionIndex + 1
    let element  = document.getElementById("progress")
    element.innerText = `Question ${currentIndex} of ${quiz.questions.length}`
}

function handleClickOnBtn(id, choice){
    let buttonElement = document.getElementById(id)
    buttonElement.onclick = function() {
        quiz.checkOptionWithAnswer(choice)
        displayQuestions()
    }
}

function showScores(){
    let result = `<h1>Result</h1><h2 id="score">Your scores: ${quiz.score}. And mark percentage is: ${(quiz.score/questions.length)*100}%</h2>`
    let quizElement = document.getElementById("quiz")
    quizElement.innerHTML = result
}

displayQuestions()
