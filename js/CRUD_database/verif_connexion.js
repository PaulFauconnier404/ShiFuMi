if(localStorage.getItem('connected') == undefined){
    window.location = "../index.html"

    
}else{
    fetch('https://shifumi-1.herokuapp.com/api/user_data/'+localStorage.getItem('connected'), {
        method: 'PATCH',
        body: JSON.stringify({  
          score: localStorage.getItem('score'),
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));

}

