// console.log("hello");
let guess = document.querySelector(".guess");
let check = document.querySelector(".check");
let number = document.querySelector(".number");
let again =  document.querySelector(".again");
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
let sectionTitle = document.querySelector(".section-title");
let randNumber = Math.floor(Math.random() * 20 )+ 1;
let message = document.querySelector(".message");
let scores = 20;

check.addEventListener("click",()=>{
    
    if(!guess.value ){
        sectionTitle.textContent = "No number";
    }

    else if (guess.value > randNumber){
         if(guess.value <= 0 || guess.value > 20){
            message.textContent = "Enter number 1 to 20"
         }else{
            message.textContent = "Number Too High";
            // number.textContent = randNumber
            scores = scores - 1;
            score.textContent = scores;
         }
         if(scores == 0){
            message.textContent = "You lose this game press again";
            check.disabled = true;
        }
    }

    else if (guess.value < randNumber){

         if(guess.value <= 0 || guess.value > 20){
            message.textContent = "Enter number 1 to 20"
         }else{
            message.textContent = "Number Too Low";
            // number.textContent = randNumber;
            scores = scores - 1;
            score.textContent = scores;
         }

       
        if(scores == 0){
            message.textContent = "You lose this game press again";
            check.disabled = true;
        }

    }

    else if (guess.value == randNumber){
        message.textContent = "You are win !!!";
        number.textContent = randNumber;
        highScore.textContent = scores;
        scores = 20;
        score.textContent = scores;
       
    }
})


again.addEventListener("click",()=>{
    scores = 20;
    score.textContent =scores;
    check.disabled = false;
    // highScore = 0;
})