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
        $("qeustion_div").html(gizmoGame.questions[ThisThing.current].question);
        //create varioable for choice and button within timer 


    } 
    // else {}


    
}

// timer here countdown { if  <== 0 timeoutFunction remember 1000 is a second

// }  cou{else     }  my brain hurrt, focusing on timer count down and ignoring question content for at least a little bit --1/25/20







}//end of functions, pretty much end of entire js file? --no not end, will add something with a result to the end of previous objects.


 