//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []; // Lista para armazenar os nomes dos amigos

function adicionarAmigo() {
    const nomeInput = document.getElementById("amigo");
    const nome = nomeInput.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome!");
        return;
    }

    amigos.push(nome); // Adiciona o nome à lista
    nomeInput.value = ""; // Limpa o campo de entrada

    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 5) {
        alert("Adicione pelo menos cinco amigos para o sorteio.");
        return;
    }

    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = ""; // Limpa o resultado anterior

    const copiaAmigos = [...amigos];

    // Embaralha os amigos aleatoriamente
    for (let i = copiaAmigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copiaAmigos[i], copiaAmigos[j]] = [copiaAmigos[j], copiaAmigos[i]];
    }

    const sorteio = copiaAmigos.map((amigo, i) => {
        const indiceSorteado = (i + 1) % copiaAmigos.length; // Próximo índice
        return `${amigo} tirou ${copiaAmigos[indiceSorteado]}`;
    });

    // Adiciona o título "Resultado do Sorteio" na interface
    const tituloResultado = document.createElement("h3");
    tituloResultado.textContent = "Resultado do Sorteio:";
    tituloResultado.style.marginTop = "20px"; // Adiciona espaço acima
    resultadoElement.appendChild(tituloResultado);

    // Adiciona os resultados do sorteio na interface
    sorteio.forEach(resultado => {
        const li = document.createElement("li");
        li.textContent = resultado;
        resultadoElement.appendChild(li);
    });
}
