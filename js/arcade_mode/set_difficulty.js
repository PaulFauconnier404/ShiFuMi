
var emojiTab = ["😌", "😯", "🤯"];
var order = [0, 1, 2];
var classBack = {0 : 'linear-gradient(-45deg, hsl(164, 66%, 59%), hsl(217, 90%, 88%) )', 1 : 'linear-gradient(-45deg, hsl(35, 83%, 71%), hsl(55, 69%, 61%))', 2 : 'linear-gradient(-45deg, hsl(334, 69%, 61%), hsl(37, 83%, 71%))'};

function setViewDifficulty(){
    if(document.getElementById("set-difficulty").classList.contains('disabled')){
        document.getElementById("set-difficulty").classList.remove('disabled');
    }else{
        document.getElementById("set-difficulty").classList.add('disabled');
    }
}


function setGameDifficulty(idDifficulty){

    document.getElementById("selected-difficulty").innerHTML = emojiTab[order[idDifficulty]];
    
    //On sauvegarde l'élément en tete du tableau [Difficulté active]
    sauvFirstId = order[0];

    //On remplace la difficulté souhaité en tete de liste
    order[0] = order[idDifficulty];

    //On passe la difficulté précédente à la place de lancien élément
    order[idDifficulty] = sauvFirstId;
    
    //Changement des emojis
    document.getElementById('position-1-difficulty').innerHTML = emojiTab[order[1]];
    document.getElementById('position-2-difficulty').innerHTML = emojiTab[order[2]];
    
    //Changement des fonds
    document.getElementById('game-container').className = '';
    document.getElementById('game-container').classList.add('play-container');
    document.getElementById('game-container').style.backgroundImage= classBack[order[0]];

}

