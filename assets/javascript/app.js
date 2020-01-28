//questions shown
// display answers, capture clicking of answer
// show incorrect, correct if clicked
    // else dont click move onto next questions


//10 total questions- display final score
//restart game?
// where do i put my questions in the js file.  following what Ross and Heater talked about during office hours Saturday.

//all trivia questions in trivia function

    $.fn.trivia = function() {   //$ binds a function to document.readyState
    var gizmoGame = this;          //clicked var
    gizmoGame.userPick = null;          //captures answer
    gizmoGame.answers = {               
        correct: 0,
        incorrect: 0            //result counter

    };

    gizmoGame.images= null;//images will go here --1/25/20
    gizmoGame.count = 30;  //30 seconds count-down timer
    gizmoGame.current = 0; //start array for next question

    gizmoGame.questions = [ {
        quesion: "when don't feed em?",   //1
        choices: ["high noon", "midnight","4:20","2:30"],
        correct: 1 //0-3 will be correct answer, could have a joke answer be something else too
    //pretty much this array for each question

    },{
    // console.log(gizmoGame) 

        question: "what mom did kill one in?",      //2
        choices: ["microwave", "blender", "mixer", "pelaton"],
        correct: 0

    },{

        question: "what mom didn't kill one in?"   ,    //3
        choices: ["not a microwave", "blender", "mixer", "pelaton"],
        correct: 0


    },{

        question: "Who is Stripe?"   ,   //4
        choices: ["leading man", "plays in U2", "Leading Gremlin", "pelaton"],
        correct: 2


    },{

        question: "Why is water bad?"   ,   //5
        choices: ["balloon reproduction", "blender", "Stripe", "PEMDAS"],
        correct: 0


    },{

        question: "Is Gremlins a Christmas Movie?"    ,  //6
        choices: ["no", "no", "yes", "Not Sure"],
        correct: 2


    },{

        question: "Who's on First?"    ,  //7
        choices: ["I Don't Know's on Fourth", "blender", "mixer", "pelaTone"],
        correct: 0


    },{

        question: "Movie Theater?"  ,    //8
        choices: ["microwave", "popcorn", "really gross ending of a lot of Gremlins", "pelaton"],
        correct: 2


    },{

        question: "Who is the Voice of Mogwai?"   ,   //9
        choices: ["Bobby", "Howie Mandel", "mixer", "pElaton"],
        correct: 1


    },{

        question: "How are you?"    ,  //10
        choices: ["Gremlin-tastic", "February", "apples", "Pelaton"],
        correct: 0


            //need to actually write real questions in here 1/25/20-- sort of did 1/28
    },


    //going to code out 2 questions and see what I get in console etc-1/25/20 nevermind debugger is helping

];
//end of questions

gizmoGame.ask= function() {
    if (gizmoGame.questions[gizmoGame.current]) {
        $("#timer").html("Time Remaining: " + "00:" + gizmoGame.count + " seconds");
        $("question_div").html(gizmoGame.questions[gizmoGame.current].question);
        var choicesArray = gizmoGame.questions[gizmoGame.current].choices;
        var buttonsArray = [];


        for (var i = 0; i < choicesArray.length; i++)  {
            var button = $('<button>');
            button.text(choicesArray[i]);
            button.attr('data-id', i);
            $('#choices_div').append(button);
        }

        window.triviaCounter = setInterval(gizmoGame.timer, 1000); 
        //1000 is a second
        
        }
        else {
        $('.card-body').append($('<div />', {
            text: 'TimeOut: ' + (
                gizmoGame.questions.length - (gizmoGame.answers.correct + gizmoGame.answers.incorrect)),
                class: 'result'
        })); 
        $('#start_button').text('Restart').appendTo('.card-body').show();
        }


        };
        //create varioable for choice and button within timer 
            //timer
        gizmoGame.timer = function() {
            gizmoGame.count--; 
            if (gizmoGame.count <= 0){
                setTimeout(function() { gizmoGame.nextQuestion();
                });

            }
            else {
                $("#timer").html("Time remaining: " + "00:" + gizmoGame.count + " seconds");

// console.log(print[gizmoGame])
            }
        };

        gizmoGame.nextQuestion = function() {
            gizmoGame.current++;
            clearInterval(window.triviaCounter);
            gizmoGame.count = 30;
            $('#timer').html("");
            setTimeout(function() 
            {
                    gizmoGame.cleanUp();
                    gizmoGame.ask();
            }, 3000     )

        };
        gizmoGame.cleanUp = function() {
            $('div[id]').each(function(item)
            {
                    $(this).html('');
                    

            }               );
            $('.correct').html('Correct Answers: ' + gizmoGame.answers.correct);
            $('.incorrect').html('Incorrect Answers: ' + gizmoGame.answers.incorrect);

                                     };
        gizmoGame.answer = function(correct) {
            var string = correct ? 'correct' : "incorrect";  //console log to check return
            gizmoGame.answers[string]++;
            $('.' + string).html(stirng + ' answers: ' + gizmoGame.answers[string]);

        };
        return gizmoGame;
        };


        //gizmoGame is finished.

       
            //next question function

        // clean up and show answers

    // make sure prints to screen not console.log

//choices div on click function what kind of button? 1/27/20


    // else {}



// timer here countdown { if  <== 0 timeoutFunction remember 1000 is a second

// }  cou{else     }  my brain hurrt, focusing on timer count down and ignoring question content for at least a little bit --1/25/20



//end of functions, pretty much end of entire js file? --no not end, will add something with a result to the end of previous objects.


var Trivia;

$("#start_button").click(function() {
    $(this).hide()
    $('.result').remove();

    Trivia = new $(window).trivia();
    Trivia.ask();
    });

$('#choices_div').on('click', 'button', function(e) { //do something
    var userPick = $(this).data("id"),
    gizmoGame = Trivia || $(window).trivia(),
    index = gizmoGame.questions[gizmoGame.current].correct,
    correct = gizmoGame.questions[gizmoGame.current].choices[index];

    if (userPick !== index) {
        $('#choices_div').text("Wrong! The Correct Choice Was: " + correct);
        gizmoGame.answers(false);
    } else {
        $('#choices_div').text("Correct! That is the Right Answer: " + correct);
        gizmoGame.answer(true);

    }
    gizmoGame.nextQuestion();





});


