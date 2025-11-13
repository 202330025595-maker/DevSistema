function fazerlogin(){
    let login = document.getElementById('login').valuer
    let senha = document.getElementById('senha').valuer

    if(login === 'cenep' && senha === 'cenep123'){
        alert('Login e senha Corretos')
        localStorage.setItem('nome', login)
        window.location.href = 'pagina2.html'
    }





}