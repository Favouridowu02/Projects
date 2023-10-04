var questions =[{
    question: "What is the baby of a Moth Known as",
    choices: ['baby', 'innfact', 'Kit' ,'Larva'],
    correctAnswer: 3
}, {
    question: 'What is the adult of a kid called',
    choices: ['Calf', 'doe', 'goat', 'chick'],
    correctAnswer: 2
}, {
    question: 'What is the young of a buffalo called',
    choices: ['Calf', 'baby', 'pup', 'cow'],
    correctAnswer: 0
}, {
    question: 'What a baby Aligator called',
    choices: ['baby', 'gator', 'hatchling', 'cow'],
    correctAnswer: 2
}, {
    question: 'What is baby Goose called',
    choices: ['gooser', 'gosling', 'gup', 'pup'],
    correctAnswer: 1
}, {
    question: 'What is a baby hamster called',
    choices: ['Calf', 'doe', 'goat', 'chick'],
    correctAnswer: 0
}, {
    question: 'What is a baby Hawk called',
    choices: ['hawlett', 'pup', 'larva', 'eyas'],
    correctAnswer: 3
}, {
    question: 'What is baby grasshopper called',
    choices: ['hopper', 'nymph', 'stick', 'pup'],
    correctAnswer: 1
}, {
    question: 'What is baby Kangaroo called',
    choices: ['kinda', 'joey', 'calf', 'baby'],
    correctAnswer: 1
}, {
    question: 'What is baby whale called',
    choices: ['whala', 'cub', 'grub', 'impact'],
    correctAnswer: 1
}, {
    question: 'What is baby Monkey called',
    choices: ['infant', 'baby', 'calf', 'pulp'],
    correctAnswer: 0
}, {
    question: 'What is baby Bear Called',
    choices: ['cub', 'baby balu', 'young-bear', 'bearlet'],
    correctAnswer: 0
},]
var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();
    $(this).find(".nextButton").on('click', function () {
        if (!quizOver) {
            value = $('input[type="radio"]:checked').val();
            if (!quizOver) {
                $(document).find(".quizMessage").text('Please Select a Answer');
                $(document).find(".quizMessage").show();
            } else {
                $(document).find('.quizMessage').hide();
                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }
                currentQuestion++;
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    $(document).find('.nextButton').text('Play Again');
                    quizOver = true;
                }
            }
        }
        else {
            quizOver = false;
            $(document).find('.nextButton').text('Next Question');
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    })

});
function displayCurrentQuestion() {
    console.log('In display current Question');

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find('.quizContianer > . question');
    var choiceList = $(document).find('.quizContainer > .choicesList');
    var numChoices = questions[currentQuestion].choices.Length;

    //set the questionClass text to the current question
    $(questionClass).text(question);

    //Remove all current <li> elements (if any)
    $(choiceList).find('li').remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + 1 + ' name="dynradio">' + choice + '</li>').appendTo(choiceList) 
    }
} function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}
function displayScore() {
    $(document).find(".quizContainer > .result").text("You Scored: " + correctAnswers + "out of: " + questions.Length);
    $(document).find(".quizContainer > .result").show();
}
function hideScore() {
    $(document).find(".result").hide();
}