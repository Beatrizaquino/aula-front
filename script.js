const form = document.querySelector("#forms");
const nome = document.querySelector("#name");
const menssage = document.querySelector("#menssage");
const email = document.querySelector("#email");
const curso = document.querySelector("#curso");
const atendimento = document.querySelector("#atendimento");
const checkbox  = document.querySelector("#checkbox");




form.addEventListener("submit", (e) => {
    e.preventDefault();
const incricao = {
    nome: nome.value,
    email: email.value,
    curso: curso.value,
    atendimento: atendimento.value
    
}
nome.focus();

console.table(incricao);

 
nome.value = "";
email.value = "";
atendimento.value = "";
curso.selectIndex = 0;

});



//escutado => escut ao que o usuario faz com o que foi selecionado
/*form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Formulário enviado!");
});

menssage.addEventListener("click", (e) => {
    alert("Você não devia ter clicado ai!!");
});

menssage.addEventListener("mouseover", (e) => {
    console.log("Você devia estudar mais, sua burra");
});


form.addEventListener("submit", (e) => {
    e.preventDefault();


    console.log(nome.value);
    console.log(email.value);
    console.log(curso.value);
    console.log(atendimento.value);

    nome.focus();
});

*/