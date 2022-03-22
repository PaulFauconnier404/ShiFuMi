

var password_request = [];
var pseudo = ""

function handleChangePseudo(){
    pseudo = document.getElementById('pseudo-user').value;

}

function handleChange(num){

    if(password_request.indexOf(num) == -1){

        password_request.push(num);

    }else{
        var index = password_request.indexOf(num);
        password_request.splice(index, 1);
    }
}

function handleSubmit(){
    console.log(pseudo)
    console.log(password_request)
}