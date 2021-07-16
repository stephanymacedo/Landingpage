const form = document.getElementById('form')

form.addEventListener('submit',(e) =>{
e.preventDefault();
alert('Cadastro realizado com sucesso!')
let nome = document.getElementById('nome').value;
let email = document.getElementById('email').value;
let info ={
    nome,
    email,
}
let convertInfo = JSON.stringify(info);

localStorage.setItem('lead', convertInfo)

})