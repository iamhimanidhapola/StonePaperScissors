let userScore=0;
let machineScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const machineScorePara=document.querySelector("#machine-score");

const genMachineChoice=()=>{
    const options=["Stone","Paper","Scissors"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
};

 const drawGame=()=>{
    msg.innerText="it's a Draw😁.Play again";
    msg.style.color = "#C0C0C0";
 };

 const showWinner=(userWin,userChoice,machineChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win!!!!👏👏 your ${userChoice} beats ${machineChoice}`;
        msg.style.color="#D2691E";
    }
    else{
        machineScore++;
        machineScorePara.innerText=machineScore;
        msg.innerText=`You lost 🙁. ${machineChoice} beats your ${userChoice}`;
        msg.style.color="#A4B809";
    }
 };
 const playGame=(userChoice)=>{
    const machineChoice=genMachineChoice();
    if(userChoice===machineChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice=="Stone"){
            userWin=machineChoice==="Paper"?false:true;
        }
        else if(userChoice=="Paper"){
            userWin=machineChoice==="Scissors"?false:true;
        }
        else{
            userWin=machineChoice==="Stone"?false:true;
        }
        showWinner(userWin,userChoice,machineChoice);
    }
 };

 choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
      const userChoice=choice.getAttribute("id");
      playGame(userChoice);
    });
 });