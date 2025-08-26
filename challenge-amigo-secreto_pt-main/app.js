//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const inputAmigo =  document.querySelector("#amigo");
const listaAmigos = document.querySelector("#listaAmigos");
const resultado = document.querySelector("#resultado");


let amigos = [];

function adicionarAmigo() {
    const nome = inputAmigo.value.trim(); // pega e limpa espaços
    if (nome === "") {
        alert("Você não digitou nada!");
    } // não adiciona vazio

    amigos.push(nome); // adiciona na lista

    // cria um li para mostrar na página
    const li = document.createElement("li");
    li.textContent = nome;
    listaAmigos.appendChild(li);

    inputAmigo.value = ""; // limpa o input
}
function sortearAmigo() {
    if (amigos.length === 0){
        //lista vazia
        alert("Adicione pelo menos um amigo!");
        return;
    }
    // aqui continua o sorteio
    const indice = Math.floor(Math.random()) * amigos.length;
    const sorteado = amigos[indice];
    resultado.textContent = `O amigo sorteado é: ${sorteado}`;
    // remover o amigo da lista para não ser sorteado de novo
    amigos.splice(indice, 1);
}