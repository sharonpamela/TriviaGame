
//create the bank of questions to populate the site with
let questionBank = [
    {q:"Whose 2013 world tour was called ‘The Mrs Carter Show’?", a:"Beyonce", options:["Whitney Houston","Beyonce","Shakira"]},
    {q:"What was Madonna’s first UK top ten single?", a:"Holiday", options:["Holiday","Madonna","Like a Virgin"]},
    {q:"The live album Beauty and the Beat featured pianist George Shearring and which singer? ", a:"Peggy Lee", options:["Martha Argerich","Peggy Lee","Claudio Arrau"]},
    {q:"Whose band was the Tijuana Brass?", a:"Herb Alpert", options:["MJs","Herb Alpert","Carlton Main"]},
    {q:"Who were Cliff Richard’s backing group through the 60s?", a:"The Shadows", options:["The Shadows","The voices","The Rythms"]},
    {q:"Miley Cyrus is the daughter of country singer Billy Ray Cyrus?", a:"True", options:["True","False"]},
    {q:"Stewart Copeland was the drummer with which band?", a:"The Police", options:["Ilegal Voices","Poping Beats","The Police"]},
    {q:"Who were the famous backing singers on most of Elvis Presley’s early hits?", a:"The Jordanaires", options:["The Shadows","The Jordanaires","The Cascades"]},
    {q:"Which piano-playing singer’s first hit was The Fat Man?", a:"", options:["Fats","Regina Spektor","Sarah Bareilles"]},
    {q:"Who made the highly rated 1959 jazz album Kind of Blue? Miles Davis?", a:"Miles Davis", options:["Frank Sinatra","Nina Simones","Miles Davis"]}
];
    
//console log values of the question bank to confirm structure
// console.log(questionBank);
// console.log(questionBank[0].q);
// console.log(questionBank[0].a);
// console.log(questionBank[0].options[1]);

//listen for a click on the 'Start' button to allow user to start the timer and enter quiz
    //hide the start button

    //create and display a variable that self updates for the time inside of the quiz

    //populate the site with questions from the bank PROGRAMMATICALLY 
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
    };


 
//when the user clicks on Done form OR when the timer runs out:
    //create var correct =0
    //create var incorrect =0
    //create var unanswered =0

    //extract the user answer given for each question
        //if answer is empty
        //unanswered++
        //if user answer = right answer
        //correct++
        //if user answer != right answer
        //unanswered++

    //show a modal with user stats



         



            

          


