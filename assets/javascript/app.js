//questions shown
// display answers, capture clicking of answer
// show incorrect, correct if clicked
    // else dont click move onto next questions


//10 total questions- display final score
//restart game?
// where do i put my questions in the js file.  following what Ross and Heater talked about during office hours Saturday.

//all trivia questions in trivia function
$.fn.trivia = function() {   //binds a function to document.readyState
    var gizmoGame = this;
    gizmoGame.userPick = null;
    gizmoGame.answers = {
        correct: 0
        incorrect: 0

    };

    gizmoGame.images= null;//images will go here --1/25/20
    gizmoGame.count = 30;  //30 seconds count-down timer
    gizmoGame.current = 0 //start array for next question

    gizmoGame.questions = [{
        quesion: "when don't feed em?"   //1
        choices: ["high noon", "midnight","4:20","2:30"],
        correct: 1 //0-3 will be correct answer, could have a joke answer be something else too
    //pretty much this array for each question

    },{
    // console.log(gizmoGame) 

        question: "what mom did kill one in?"      //2
        choices: ["microwave", "blender", "mixer", "pelaton"],
        correct: 0

    },{

        question: "what mom did kill one in?"      //3
        choices: ["microwave", "blender", "mixer", "pelaton"],
        correct: 0


    },{

        question: "what mom did kill one in?"      //4
        choices: ["microwave", "blender", "mixer", "pelaton"],
        correct: 0


    },{

        question: "what mom did kill one in?"      //5
        choices: ["microwave", "blender", "mixer", "pelaton"],
        correct: 0


    },{

        question: "what mom did kill one in?"      //6
        choices: ["microwave", "blender", "mixer", "pelaton"],
        correct: 0


    },{

        question: "what mom did kill one in?"      //7
        choices: ["microwave", "blender", "mixer", "pelaton"],
        correct: 0


    },{

        question: "what mom did kill one in?"      //8
        choices: ["microwave", "blender", "mixer", "pelaton"],
        correct: 0


    },{

        question: "what mom did kill one in?"      //9
        choices: ["microwave", "blender", "mixer", "pelaton"],
        correct: 0


    },{

        question: "what mom did kill one in?"      //10
        choices: ["microwave", "blender", "mixer", "pelaton"],
        correct: 0


            //need to actually write real questions in here 1/25/20
    }


    //going to code out 2 questions and see what I get in console etc-1/25/20 nevermind debugger is helping

];
//end of questions

gizmoGame.ask= function() {
    if (gizmoGame.questions[gizmoGame.current]) {
        $("#timer").html("Time Remaining: " + "00:" + gizmoGame.count + " seconds");
        $("question_div").html(gizmoGame.questions[gizmoGame.current].question);
        var choicesArray = gizmoGame.questions[gizmoGame.current].choices;
        var buttonsArray = [];


        for (var i=0; i < choicesArray.length; i++)  {
            var button = $('<button>');
            button.text(choicesArray[i]);
            button.attr('data-id', i);
            ${'choices_div').append(button);
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


        }
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
            clearInterval(window.triviaCounter)
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

            //next question function

        // clean up and show answers

    // make sure prints to screen not console.log





    } 
    // else {}


    
}

// timer here countdown { if  <== 0 timeoutFunction remember 1000 is a second

// }  cou{else     }  my brain hurrt, focusing on timer count down and ignoring question content for at least a little bit --1/25/20







}//end of functions, pretty much end of entire js file? --no not end, will add something with a result to the end of previous objects.


 