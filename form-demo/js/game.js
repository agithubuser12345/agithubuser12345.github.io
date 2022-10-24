// Anything on top is known as the global variable 
let fname = "";
let lname = "";

// Function for the greet 
function greet(){
    // grab the greet paragraph
    let greetParagraph = document.getElementById("greet");

    // get values from the form

    fname = document.getElementById("fname").value; 
    let age = document.getElementById("age").value;
    let lname = document.getElementById("lname").value;

    // show the result!
    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + " " + lname + "!"; // Append strings by using a +
}

function trivia(){
    let triviaAnswer = document.getElementById("trivia-answer");
    // get the checked values from form
    let chocolateselected = document.getElementById("chocolate").checked;
    let tunaselected = document.getElementById("tuna").checked;
    let honeyselected = document.getElementById("honey").checked; 

    // decide what to print
    if (chocolateselected){
        triviaAnswer.innerHTML = fname + ", you are wrong. Sweet tooth, eh?";         
    } else if (tunaselected){
        triviaAnswer.innerHTML = fname + ", you are wrong. Rotten tuna, yuck!";
    } else if (honeyselected){
        triviaAnswer.innerHTML = fname + ", you are correct!";
    }
    // Don't need === becuase the variable will either be true or false not a user inputed value like "Batman" or "Superman"
}

function game(){
    let gameAnswer = document.getElementById("game-answer");

    let oneselected = document.getElementById("one").checked;
    let twoselected = document.getElementById("two").checked;
    let threeselected = document.getElementById("three").checked;

    if (oneselected){
        gameAnswer.innerHTML = fname + ", you are wrong."
    } else if (twoselected){
        gameAnswer.innerHTML = fname + ", you are right."
    } else if (threeselected){
        gameAnswer.innerHTML = fname + ", you are wrong."
    }

}