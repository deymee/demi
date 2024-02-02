$(function() {
    let questions = [{
        question: "Whose hairline has completely given up on him?",
        choices: ["tunde", "jedidiah", "lekan", "jojo"],
        correctAnswer: 3
    }, {
        question: "Who said copper self dey drive benz?",
        choices: ["ay", "banji", "funbi", "salami"],
        correctAnswer: 0
    }, {
        question: "Who is the mixing and mastering king?",
        choices: ["ese", "rahman", "banji", "jedidiah"],
        correctAnswer: 2
    }, {
        question: "Whose teeth can you land a plane in between?",
        choices: ["rahman", "ese", "bolu", "funbi"],
        correctAnswer: 1
    }, {
        question: "Who is the biggest liar?",
        choices: ["jedidiah", "rahman", "ese", "banji"],
        correctAnswer: 1
    }, {
        question: "Who is gay?",
        choices: ["jedidiah", "banji", "ese", "rahma"],
        correctAnswer: 0
    }];

    let currentQuestion = 0;
    let correctAnswers = 0;
    let quizOver = false;

    displayCurrentQuestion();
    $(".quizMessage").hide();

    $(".nextButton").on("click", function() {
        if (!quizOver) {
            let value = $("input[type='radio']:checked").val();

            if (value === undefined) {
                $(".quizMessage").text("Please select an answer").show();
            } else {
                $(".quizMessage").hide();

                if (parseInt(value) === questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++;
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    $(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else {
            quizOver = false;
            $(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

    function displayCurrentQuestion() {
        let question = questions[currentQuestion].question;
        let choiceList = $(".choiceList");

        $(".question").text(question);
        choiceList.empty();

        questions[currentQuestion].choices.forEach(function(choice, i) {
            $('<li><label><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</label></li>').appendTo(choiceList);
        });
    }

    function resetQuiz() {
        currentQuestion = 0;
        correctAnswers = 0;
        hideScore();
    }

    function displayScore() {
        $(".result").text("You scored: " + correctAnswers + " out of: " + questions.length).show();
    }

    function hideScore() {
        $(".result").hide();
    }
});
