

var password_request = [];
var pseudo = ""

function handleChangePseudo() {
    pseudo = document.getElementById('pseudo-user').value;


}

function handleChange(num) {
    console.log(pseudo)
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
            localStorage.setItem('connected',pseudo)
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
        fetch('http://127.0.0.1:5000/api/user_data', {
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
                return res.json();
            })
            .then((data) => console.log(data));

            
        window.location = "/view/type_selection.html"
    }

}

async function getUsers(pseudo) {
    localStorage.setItem('connected',pseudo)

    try {
        let res = await fetch('http://127.0.0.1:5000/api/user_data/' + pseudo);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}