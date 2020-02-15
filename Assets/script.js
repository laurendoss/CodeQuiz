var quizQuestions = [
    {
        question: "When is Luna's Birthday?",
        choices: ["March 5", "November 8", "September 5", "October 21"],
        answer: "September 5"
    },
    {
        question: "When is Scout's Birthday?",
        choices: ["December 7", "April 9", "August 23", "February 10"],
        answer: "December 7"
    }
]

// question index
let currentQuestion = 0

// html variables
let startButton = document.getElementById("start");
let cat = document.getElementById("choices");
let cardBody = document.getElementById("question");
let score = 0; 
let scoreCounter = document.createElement('p'); 
scoreCounter2.innerHTML = "score " + score; 
console.log(score)
scoreCounter2.append(score); 




function createQuestion() {
    let question = document.createElement("p");
    question.innerHTML = quizQuestions[currentQuestion].question;
    cardBody.append(question);

    createChoices(quizQuestions[currentQuestion].choices);

}

// order of program 
window.addEventListener("load", function () {

    startButton.addEventListener("click", function () {
        //startButton.attr("display") hide start button
        createQuestion()
        var sec = 30;
        var time = setInterval(myTimer, 1000);
        function myTimer() {
            document.getElementById('timer').innerHTML = sec + "sec left";
            sec--;
            if (sec == -1) {
                clearInterval(time);
                alert("Time out!! :(");
            }
        }
    })
})
// choices is our parameter and it expects an argument of a choice arrray from the quizQuestion array of objects
function createChoices(choices) {
    for (var i = 0; i < choices.length; i++) {
        let choiceButton = document.createElement("button");
        choiceButton.innerHTML = choices[i]

        choiceButton.addEventListener("click", function (e) {

            let userChoice = e.srcElement.innerHTML
            if (userChoice === quizQuestions[currentQuestion].answer) {

                // add to score
                console.log(score)
                score ++; 
                scoreCounter2.innerHTML=score; 
                console.log(score)
                $(cardBody).empty(); 
                $(cat).empty(); 
                currentQuestion++
                createQuestion()

            } else {
                // subtract from timer

               $(cardBody).empty(); 
               $(cat).empty(); 
                currentQuestion++
                createQuestion()
            }
        })

        cat.append(choiceButton)
    }

}


// function example(word){
//     console.log("this function has a parameter called word with an argument of " + word)
// }

// example("cat")












// let lastQuestionIndex = quizQuestions.length - 1; 
// let runningQuestionIndex = 0; 
// var score = 0; 
// runningQuestionIndex = 0; 

// var answer = document.getElementsByTagName("button").addEventListener("click", checkAnswer()); 
// function renderQuestion(){
//     let q = quizQuestions[runningQuestionIndex];
//     question.innerHTML = "<p>" + q.question + "<p>";
//     choiceA.innerHTML = q.choiceA; 
//     choiceB.innerHTML = q.choiceB; 
//     choiceC.innerHTML = q.choiceC; 
//     choiceD.innerHTML = q.choiceD; 

// }
// function checkAnswer(answer){
//     if (quizQuestions[runningQuestionIndex].correct){
//         score++; 
//     }else{

//     }
//     if (runningQuestionIndex < lastQuestionIndex) {
//         runningQuestionIndex++; 
//         renderQuestion(); 
//     }else{

//     }
// }
// for(var i=0; i<quizQuestions.length; i++){
// renderQuestion(quizQuestions[i]); 
// checkAnswer(); 
// }


