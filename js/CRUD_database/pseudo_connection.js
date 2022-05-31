

var password_request = [];
var pseudo = ""

localStorage.setItem('score', 0)

function handleChangePseudo() {
    pseudo = document.getElementById('pseudo-user').value;


}

function handleChange(num) {
    if (password_request.indexOf(num) == -1) {

        password_request.push(num);

    } else {
        var index = password_request.indexOf(num);
        password_request.splice(index, 1);
    }
}

async function handleSubmit() {
    var returnData = await getUsers(pseudo);
    var notGood = false;

    if (returnData == null) {
        document.getElementById('pop-up-verification').classList.remove('unactive')
    } else {
        if (JSON.stringify(returnData.password) == JSON.stringify(password_request)) {
            localStorage.setItem('connected', returnData._id)
            window.location = "/view/type_selection.html"
        }else{
            document.getElementById('error').innerHTML = "Pseudo déjà utilisé / Mot de passe incorrect"
        }
    }

}

function handleValid(value) {
    if (value == 0) {
        document.getElementById('pop-up-verification').classList.add('unactive')
    } else {
        var returnId;
        fetch('https://shifumi-1.herokuapp.com/api/user_data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                pseudo: pseudo,
                password: password_request,
                score: 0,
                bonus: 0,
                last_connection: new Date()
            }),
        })
            .then((res) => {
                return returnId = res.json();
            })
            .then((data) => localStorage.setItem('connected', data.insertedId)
            );

           
            
       setTimeout(
           function f(returnId){
                window.location = "/view/type_selection.html"
           }, 1000
       )
    }

}

async function getUsers(pseudo) {

    try {
        let res = await fetch('https://shifumi-1.herokuapp.com/api/user_data/' + pseudo);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}