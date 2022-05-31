
const PossibleChoice = ['rock','paper','scissors'];
const choiceStrings = {
    'scissors': '✌️',
    'paper': '✋',
    'rock' : '👊'
};
var UserScore = 0, ComputerScore = 0;



function onPlayIA(user_choice){
    //On recupère le choix de l'ordinateur
    const computer_choice = computerChoice();

    //On lance la mécanique de jeu
    gameMechanic(user_choice, computer_choice)
}

function gameMechanic(user_choice, computer_choice){
    const displayIAResult = document.getElementById('result-IA');
    displayIAResult.classList = "";
    
    //Si les choix sont identiques
    if(user_choice == computer_choice){
        //Affichage des class perdant pour les deux
        equality();

    }else{
        if(PossibleChoice.indexOf(user_choice) == 2 && PossibleChoice.indexOf(computer_choice) == 0){
             //Affichage des class perdant et gagnat
             youLoose();
        }else if(PossibleChoice.indexOf(computer_choice) == 2 && PossibleChoice.indexOf(user_choice) == 0){
            //Affichage des class perdant et gagnat
            youWin();
        }
        else if(PossibleChoice.indexOf(user_choice) > PossibleChoice.indexOf(computer_choice)){
            //Affichage des class perdant et gagnat
            youWin();

        }else if(PossibleChoice.indexOf(user_choice) < PossibleChoice.indexOf(computer_choice)){
            //Affichage des class perdant et gagnat
            youLoose();
        }
    }

    displayIAResult.style.display = 'block';
    displayIAResult.innerHTML = '<p>'+choiceStrings[computer_choice]+'</p>';

    //Affichage des scores en temps réel
    document.getElementById('user-score').innerHTML = UserScore;
    document.getElementById('computer-score').innerHTML = ComputerScore;

}

function youLoose(){
    const displayIAResult = document.getElementById('result-IA');

    displayIAResult.classList.add('result-IA-win');
    ComputerScore++;

    setTimeout(function reset(){displayIAResult.style.display = 'none'}, 1000)
}
function youWin(){
    const displayIAResult = document.getElementById('result-IA');

    displayIAResult.classList.add('result-IA-loose');
    UserScore++;

    setTimeout(function reset(){displayIAResult.style.display = 'none'}, 1000)


}
function equality(){
    const displayIAResult = document.getElementById('result-IA');

    displayIAResult.classList.add('result-IA-loose');

    setTimeout(function reset(){displayIAResult.style.display = 'none'}, 1000)

}


function computerChoice(){
    //On sort un chriffe random sur le nombre d'élement de la liste des choix
    const random = Math.floor(Math.random() * PossibleChoice.length);
    //On retourne le choix de l'ordinateur 
    return PossibleChoice[random];
}