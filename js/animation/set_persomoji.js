function ChangePerso(id, icon){
    const ButtonToChange = document.getElementById('persomiji-'+id);

    for(let i=1; i<5; i++){
        document.getElementById('persomiji-'+i).classList.remove('active');
    }
    localStorage.setItem('persomoji',icon);
    
    document.getElementById('persomoji-menu').innerHTML ='<p>'+localStorage.getItem('persomoji')+'</p>'

    ButtonToChange.classList.add('active');
}