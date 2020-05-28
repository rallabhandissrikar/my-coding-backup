function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Where was nepolea born?", ["New Delhi", "france","America", "India"], "france"),

    new Question("Who was ruling france during17th century", ["King loius", "henery louis VIII","khan bog", "people"], "henery louis VIII"),
    

    new Question("who was the wife or king of henery louis VIII", ["Queen marie antoinette", "Lois marie","sitar", "denisfe"], "Queen marie antoinette"),
    

    new Question("How many estates did society that time was divided?", ["20", "5","3", "100"], "3"),

    new Question("Currency of India?", ["Dollar", "Rupee","Euro", "Pound"], "Rupee"),

    new Question("Currency of India?", ["Dollar", "Rupee","Euro", "Pound"], "Rupee"),

    new Question("Currency of India?", ["Dollar", "Rupee","Euro", "Pound"], "Rupee"),


    new Question("Currency of India?", ["Dollar", "Rupee","Euro", "Pound"], "Rupee"),




        

];


var quiz = new Quiz(questions);


populate()