
$(document).ready(function(){
//  Set number counter to 60 (seconds).
let number = 60;

//  Variable that will hold our interval ID
var intervalId;

//create the question bank to populate the site with
let questionBank = [
    {q:"Whose 2013 world tour was called ‘The Mrs Carter Show’?", a:"Beyonce", options:["Whitney Houston","Beyonce","Shakira"]},
    {q:"What was Madonna’s first UK top ten single?", a:"Holiday", options:["Holiday","Madonna","Like a Virgin"]},
    {q:"The live album Beauty and the Beat featured pianist George Shearring and which singer? ", a:"Peggy Lee", options:["Martha Argerich","Peggy Lee","Claudio Arrau"]},
    {q:"Whose band was the Tijuana Brass?", a:"Herb Alpert", options:["MJs","Herb Alpert","Carlton Main"]},
    {q:"Who were Cliff Richard’s backing group through the 60s?", a:"The Shadows", options:["The Shadows","The voices","The Rythms"]},
    {q:"Miley Cyrus is the daughter of country singer Billy Ray Cyrus?", a:"True", options:["True","False"]},
    {q:"Stewart Copeland was the drummer with which band?", a:"The Police", options:["Ilegal Voices","Poping Beats","The Police"]},
    {q:"Who were the famous backing singers on most of Elvis Presley’s early hits?", a:"The Jordanaires", options:["The Shadows","The Jordanaires","The Cascades"]},
    {q:"Which piano-playing singer’s first hit was The Fat Man?", a:"Fats", options:["Fats","Regina Spektor","Sarah Bareilles"]},
    {q:"Who made the highly rated 1959 jazz album Kind of Blue?", a:"Miles Davis", options:["Frank Sinatra","Nina Simones","Miles Davis"]}
];
//console log values of the question bank to confirm structure
// console.log(questionBank);
// console.log(questionBank[0].q);
// console.log(questionBank[0].a);
// console.log(questionBank[0].options[1]);


//listen for a click event on the 'Start' button to allow user to enter quiz (timer also starts)
//$("#start-button").on("click", init);
$("#start-button").click(function(){

    console.log("entered start-button")

    // prevent button click from refreshing the page
    event.preventDefault();

    //hide the start button
    $("#start-button").hide();

    //populate the div with the questions from the bank
    populateQuestions();   

    //start the timer
    startTimer();
    
});

function startTimer(){
    //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    clearInterval(intervalId);

    // set an interval to decrement the number by 1 every second
    intervalId = setInterval(decrement, 1000);
}
        
function decrement() {
    //  Decrease number by one.
    number--;
    //  Show the number in the #show-number tag.
    $("#timer").text(number);
    // Once number hits zero...
    if (number === 0) {
      //  Clears our intervalId
      clearInterval(intervalId);
    }
}

// function to populate the site with questions from the bank PROGRAMMATICALLY 
function populateQuestions(){
    for (i=0 ; i<questionBank.length ; i++){
        //create a label and set its text to be the question then display it
        let currentQ = $("<label>");
        currentQ.text(questionBank[i].q);
        $("#questions").append(currentQ,"<br>");
        //display the options by looping thru the array of options inside the current question
        for (j=0 ; j<questionBank[i].options.length ; j++){
            //create a label and set its text to be the question then display it
            let opt = questionBank[i].options[j];  
            //needed format:        <input type="radio" id="q0o0" name="q0" class="radio-button" value="Whitney Houston"></input>    
            $("#questions").append("<input type='radio' id= "+ "'q"+i+"o"+j+"' name= "+ "'q"+i+"'"+ " class='radio-button' value='" + opt +"'>" + opt +"<br>");
            // the name of the radio button is needed to group the items under the same question
            }
        $("#questions").append("<br>");
    };// end of for loop
}// populateQuestions

$("#submit-button").click(function(){

    console.log("entered submit-button")

    // prevent button click from refreshing the page
    event.preventDefault();

    //end the game and display stats
    endGame();
});


// function to end the game when the user clicks "Done" OR timer runs out
function endGame(){
    //stop the timer
    clearInterval(intervalId);

    let correct =0;
    let incorrect =0;
    let unanswered =0;

    //extract the user answers given for each question
    for (i=0 ; i<questionBank.length ; i++){
        let radio_buttons = $('input[name=q'+i+']:checked');
        //  input[name=q#]:checked -> read input tags only with name=q#.
        //  [name=q#] -> tags with the name q# belong within the same group aka question #.
        //  :checked limits it to checkboxes/radio buttons that are selected within the group.   

        if( radio_buttons.filter(':checked').length == 0){
            // None checked
            unanswered++
        } else {
            //something is checked, validate result right away to avoid another costly jquery call
            let userAnswer = radio_buttons.val();
            
            if (questionBank[i].a === userAnswer){
                correct++;
            } else {
                incorrect++;
            }
        }
    }

    //show results
    console.log("yes" + correct);
    console.log("nope" + incorrect);
    console.log("unan" + unanswered);

    // clear all elements inside the form (including done button)
    $("#quizForm").empty();

    // display h2 "Done!"
    let byeMsg = $("<h2>");
    byeMsg.text("Thanks for playing music trivia!");
    byeMsg.addClass("bye-msg-div");
    $("#quizForm").append(byeMsg);

    // Create h3 tags to display the results inside of each
    let correctDiv = $("<h3>");
    correctDiv.text("Correct Answers: "+ correct);
    correctDiv.addClass("correct-div");
    $("#quizForm").append(correctDiv);

    let inCorrectDiv = $("<h3>");
    inCorrectDiv.text("Incorrect Answers: "+ incorrect);
    inCorrectDiv.addClass("inCorrect-div");
    $("#quizForm").append(inCorrectDiv);

    let unansweredDiv = $("<h3>");
    unansweredDiv.text("Unanswered: "+ unanswered);
    unansweredDiv.addClass("unanswered-div");
    $("#quizForm").append(unansweredDiv);
}

});//end of (document).ready


         



            

          


