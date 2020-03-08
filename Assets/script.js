
var quizQuestions = [
    {
        question: "What Country Does Sushi Come From?",
        choices: ["Japan", "Italy", "The United States", "Thailand"],
        answer: "Japan"
    },
    {
        question: "How Long is a Fortnight?",
        choices: ["One Week", "Two Weeks", "One Night", "One Month"],
        answer: "Two Weeks"
    },
    {
        question: "What Is The Heimlich Maneuver?",
        choices: ["A Complicated Aerial Stunt", "A Gymnastics Routine", "A Way to Stop People Choking", "A Soccer Move"],
        answer: "A Way to Stop People Choking"
    },
    {
        question: "What Does The Odometer Measure?",
        choices: ["The Amount of Friction on The Tires", "The Odor of the Car", "The RPM", "The Amount of Distance a Car Has Traveled"],
        answer: "The Amount of Distance a Car Has Traveled"
    },
    {
        question: "What Type Of Cheese Is Actually Made Backwards?",
        choices: ["Mozzarella", "Edam", "Cheddar", "Gouda"],
        answer: "Edam"
    }
]

// question index
let currentQuestion = 0

// html variables
let startButton = document.getElementById("start");
let cat = document.getElementById("choices");
let cardBody = document.getElementById("question");
let score = 0; 
var sec = 30;
let scoreCounter = document.createElement('p'); 
scoreCounter2.innerHTML = "score " + score; 

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

                console.log(score)
                score ++; 
                scoreCounter2.innerHTML=score; 
                console.log(score)
                $(cardBody).empty(); 
                $(cat).empty(); 
                currentQuestion++
                createQuestion()

            } else {
                sec = sec-10; 

               $(cardBody).empty(); 
               $(cat).empty(); 
                currentQuestion++
                createQuestion()
            }

            if (question === undefined) {
                alert("Quiz is Over!")
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


