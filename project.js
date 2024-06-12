let userScore =0;
let comScore =0;
let choices = document.querySelectorAll(".choice");
let userScorePara = document.querySelector("#user-score");
let comScorePara = document.querySelector("#com-score");
let msg = document.querySelector("#msg");
const showWinner =(userWin,userChoice,comChoice)=>{
    if(userWin==true){
       userScore++;
       userScorePara.innerText= userScore;
        msg.innerText=`you win! Your ${userChoice} beats ${comChoice} `;
        msg.style.backgroundColor="green";
    }
    else{
       comScore++;
       comScorePara.innerText= comScore;
        msg.innerText=`you lost ${comChoice} beats your ${userChoice} `;
        msg.style.backgroundColor="red";
    }
};
const drawGame=()=>{
    console.log("Game was drawn");
    msg.innerText=`you lost! ${comChoice} beats your ${userChoice} `;
    msg.style.backgroundColor="yellow";
};
const genComChoice =()=>{
    const options =["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};
const playGame = (userChoice)=>{
console.log("user choice" , userChoice);
const comChoice = genComChoice();
console.log("com choice" , comChoice);
if(userChoice===comChoice){
drawGame();
}else{
    let userWin = true;
    if(userChoice==="rock"){
        //paper,scissor
        userWin = comChoice==="paper"?false: true;
    }else if( userChoice==="paper"){
        //scissors , rock
        userWin = comChoice==="scissors" ? false : true;
    }else{
        // com have rock and user scissors
        userWin=comChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,comChoice);
}
};
choices.forEach((choice) =>
{
    choice.addEventListener("click", ()=>{
         const userChoice = choice.getAttribute("id");
         playGame(userChoice);
        
    });
})