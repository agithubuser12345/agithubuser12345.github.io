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
        gameAnswer.innerHTML = fname + ", basketball is very fun, but you need to guess the lie!"
    } else if (twoselected){
        gameAnswer.innerHTML = fname + ", you are correct, this was the lie! But it sounds fun."
    } else if (threeselected){
        gameAnswer.innerHTML = fname + ", robots are very interesting, but you need to guess the lie!"
    }
}

function game2(){
    let gameAnswer2 = document.getElementById("game-answer-2")

    let onetwoselected = document.getElementById("one.two").checked;
    let twotwoselected = document.getElementById("two.two").checked;
    let threetwoselected = document.getElementById("three.two").checked;

    if (onetwoselected){
        gameAnswer2.innerHTML = fname + ", you need to choose two items to submit."
    } else if (twotwoselected){
        gameAnswer2.innerHTML = fname + ", you need to choose two items to submit."
    } else if (threetwoselected){
        gameAnswer2.innerHTML = fname + ", you need to choose two items to submit."
    } else if (onetwoselected, twotwoselected){
        gameAnswer2.innerHTML = fname + ", this is wrong."
    } else if (onetwoselected, threetwoselected){
        gameAnswer2.innerHTML = fname + ", this is wrong."
    } else if (twotwoselected, threetwoselected){
        gameAnswer2.innerHTML = fname + ", this is correct"
    }
}