// 1 - Primeiro passo: Declarar um array para armazenar os nomes dos amigos
let amigos = [];

// 2 - Segundo passo: Função para adicionar amigos
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim(); // A função .trim remove espaços em branco do início e do fim de uma cadeia de caracteres

    // Validar se o campo não está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adicionar o nome ao array e limpar o campo de entrada
    amigos.push(nome);
    input.value = "";

    // Atualizar a lista na interface
    atualizarListaAmigos();
}

// 3 - Terceiro passo: Atualizar a lista de amigos no HTML
function atualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    // Percorrer o array e criar elementos <li> para cada nome
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        // Botão de remover ao lado de cada nome
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remover";
        removeButton.classList.add("remove-button"); // Adicionar classe ao botão
        removeButton.onclick = () => removerAmigo(index);

        li.appendChild(removeButton);
        lista.appendChild(li);
    });
}

// Função para remover um amigo pelo índice
function removerAmigo(index) {
    amigos.splice(index, 1); // Remove o elemento pelo índice
    atualizarListaAmigos(); // Atualiza a lista exibida
}

// Quarto passo: Função para sortear um amigo
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    // Validar se há amigos disponíveis
    if (amigos.length === 0) {
        resultado.innerHTML = "Nenhum amigo disponível para sortear.";
        return;
    }

    // Gerar um índice aleatório e selecionar um nome
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibir o amigo sorteado
    resultado.innerHTML = `O amigo sorteado foi: <strong>${amigoSorteado}</strong>`;
}

// Função para remover um amigo e limpar o sorteio
function removerAmigo(index) {
  amigos.splice(index, 1); // Remove o amigo do array
  atualizarListaAmigos(); // Atualiza a lista de amigos

  // Limpar o resultado do sorteio
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpa o conteúdo exibido sobre o sorteio
}