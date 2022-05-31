


const PossibleChoice = ['rock','paper','scissors'];
const choiceStrings = {
    'scissors': '✌️',
    'paper': '✋',
    'rock' : '👊'
};
var UserScore = 0, ComputerScore = 0;
var BonusScore = 0;
var gamePicker = 0;



function onPlayButton(user_choice){
    //On recupère le choix de l'ordinateur
    const computer_choice = computerChoice();

    if(UserScore%3 == 0 && UserScore > 1 && BonusScore<10){
        newBonus();
    }

    //On lance la mécanique de jeu
    gameMechanic(user_choice, computer_choice)
}

function useBonus(){
    BonusScore--;
    
    //Paramettrage des élement de display des choix
    const user_choice_display = document.getElementById('user-play');
    const computer_choice_display = document.getElementById('machine-play');

    //Remise à zero de qualité d'affichage Gagnant / Perdant
    user_choice_display.classList = "";
    computer_choice_display.classList = "";


    const containerBonus = document.getElementById('container-bonus');
    const numberBonus = document.getElementById('bonus-number');
    const computer_choice = computerChoice();

    if(BonusScore <= 0){
        containerBonus.innerHTML = "";
    }else{
        numberBonus.innerHTML = 'x'+BonusScore;
    }

    if(PossibleChoice.indexOf(computer_choice) == 1){
        //Affichage des class perdant et gagnant
        youLoose(user_choice_display);
        youWin(computer_choice_display, 'computer');
    }else{
        //Affichage des class perdant et gagnant
        youLoose(computer_choice_display);
        youWin(user_choice_display, 'user');
    }
    //Affichage des emoji sur l'interface
    computer_choice_display.innerHTML = choiceStrings[computer_choice];
    user_choice_display.innerHTML = '👌';
}

function newBonus(){
    const containerBonus = document.getElementById('container-bonus');
    const numberBonus = document.getElementById('bonus-number');

    BonusScore++;

    if(BonusScore == 1){

        var container = document.createElement('div');
        container.id = 'bonus-1';
        container.className = 'bonus';
        container.innerHTML = '<p>👌</p><div><p id="bonus-number">x'+ BonusScore +'</p></div>'


        containerBonus.appendChild(container);

        document.getElementById('bonus-1').addEventListener('click', useBonus);
    }else{
        numberBonus.innerHTML = 'x'+BonusScore;
    }

}

function gameMechanic(user_choice, computer_choice){
    //Paramettrage des élement de display des choix
    const user_choice_display = document.getElementById('user-play');
    const computer_choice_display = document.getElementById('machine-play');

    //Remise à zero de qualité d'affichage Gagnant / Perdant
    user_choice_display.classList = "";
    computer_choice_display.classList = "";

    //Si les choix sont identiques
    if(user_choice == computer_choice){
        //Affichage des class perdant pour les deux
        youLoose(user_choice_display);
        youLoose(computer_choice_display, 'computer');

        for(let i=1; i<4; i++){
            document.getElementById('text-end-game-'+i).innerHTML = 'Equality !';
        }
        document.getElementById('text-end-game-1').classList.add("equality");

        document.getElementById('animation-end-game').style.display = 'block';
        setTimeout(function test(){document.getElementById('animation-end-game').style.display = 'none'}, 1000)

    }else{
        if(PossibleChoice.indexOf(user_choice) == 2 && PossibleChoice.indexOf(computer_choice) == 0){
             //Affichage des class perdant et gagnant
             youLoose(user_choice_display);
             youWin(computer_choice_display, 'computer');
        }else if(PossibleChoice.indexOf(computer_choice) == 2 && PossibleChoice.indexOf(user_choice) == 0){
            //Affichage des class perdant et gagnant
            youWin(user_choice_display, 'user');
            youLoose(computer_choice_display);
        }
        else if(PossibleChoice.indexOf(user_choice) > PossibleChoice.indexOf(computer_choice)){
            //Affichage des class perdant et gagnant
            youWin(user_choice_display, 'user');
            youLoose(computer_choice_display);

        }else if(PossibleChoice.indexOf(user_choice) < PossibleChoice.indexOf(computer_choice)){
            //Affichage des class perdant et gagnant
            youLoose(user_choice_display);
            youWin(computer_choice_display, 'computer');
        }
    }

    //Affichage des emoji sur l'interface
    computer_choice_display.innerHTML = choiceStrings[computer_choice];
    user_choice_display.innerHTML = choiceStrings[user_choice];

    //Affichage des scores en temps réel
    document.getElementById('user-score').innerHTML = UserScore;
    document.getElementById('computer-score').innerHTML = ComputerScore;

}

function youLoose(element){
    element.classList.add('loose');
}
function youWin(element, winner){
    element.classList.add('win');

    document.getElementById('text-end-game-1').classList="";

    if(winner == 'computer'){
        ComputerScore++;

        for(let i=1; i<4; i++){
            document.getElementById('text-end-game-'+i).innerHTML = 'You loose';
        }   
        document.getElementById('text-end-game-1').classList.add("loose");

        document.getElementById('animation-end-game').style.display = 'block';
        setTimeout(function reset(){document.getElementById('animation-end-game').style.display = 'none'}, 1000)
    }else{
        UserScore++;

        for(let i=1; i<4; i++){
            document.getElementById('text-end-game-'+i).innerHTML = 'You win !';
        }
        document.getElementById('text-end-game-1').classList.add("win");

        document.getElementById('animation-end-game').style.display = 'block';
        setTimeout(function reset(){document.getElementById('animation-end-game').style.display = 'none'}, 1000)
    }

    localStorage.setItem('score',UserScore)
}

function computerChoice(){
    //On sort un chriffe random sur le nombre d'élement de la liste des choix
    const gameType = [0,0,0,1,1,2,2,1,1,2,2,0,0,1,1,0,0,1,1,2,2,1,1,2,2,0,0,2,2];
    gamePicker ++;

    if(gamePicker > gameType.length-1){
        gamePicker=0;
    }
    //On retourne le choix de l'ordinateur 
    return PossibleChoice[gameType[gamePicker]];


}