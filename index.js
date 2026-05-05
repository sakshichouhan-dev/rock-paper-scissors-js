let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () =>{
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};

const drawGame = () =>{
    msg.innerText = "DRAW";
     msg.style.backgroundcolor = "#081b31";
};
const showWinner = (userwin) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;

        msg.innerText = "YOU WIN!";
        msg.style.backgroundColor = "green";
    } else{
        compscore++;
        compscorepara.innerText = compscore;

        msg.innerText = "YOU LOSE!"; 
        msg.style.backgroundColor = "red";
    }
}
const playGame = (choiceId) =>{
    // generate computer choice
    const compchoice = gencompchoice();
    
    if(choiceId == compchoice){
        // draw game
        drawGame();
    } else {
        let userwin = true;
        if(choiceId == "rock"){
            userwin = compchoice == "paper"? false : true;
        } else if(choiceId == "paper"){
            userwin = compchoice == "scissor"? false : true; 
    }else {
         userwin = compchoice == "rock"? false : true;
    }
    showWinner(userwin);
    }
};

choices.forEach( (choice) => {
    choice.addEventListener("click", () =>{
        const choiceId = choice.getAttribute("id");     
         playGame(choiceId);

    });
});