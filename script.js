const form = document.querySelector("#forms");
const nome = document.querySelector("#name");
const menssage = document.querySelector("#menssage");

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
});*/

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(nome);
    nome.value = "";
    nome.focus();
});

