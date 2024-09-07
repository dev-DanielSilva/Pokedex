function pesquisar() {
  // Seleciona a seção onde os resultados da pesquisa serão exibidos
  let sectionPokemon = document.getElementById("resultados-pesquisa");

  // Obtém o valor do campo de pesquisa e o converte para letras minúsculas
  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

  // Verifica se o campo de pesquisa está vazio ou contém menos de 2 caracteres
  if (campoPesquisa === "" || campoPesquisa.length < 2) {
    sectionPokemon.innerHTML = "<p>Nada foi encontrado, digite o nome do Pokémon ou seu tipo.</p>"; // Limpa os resultados anteriores
    return;
  }

  // Inicializa uma string vazia para armazenar o HTML dos resultados
  let resultados = "";

  // Itera sobre cada Pokémon no array de dados
  for (let dado of pokemons) {
    // Transforma o array de tipos e tags em uma string
    let tipos = dado.tipo.join(", ").toLowerCase();
    let tags = dado.tags.join(", ").toLowerCase();

    // Adiciona o Pokémon ao resultado se o nome, descrição, tipo ou tags contiver a pesquisa
    if (dado.nome.toLowerCase().includes(campoPesquisa) || 
        tipos.includes(campoPesquisa) ||
        tags.includes(campoPesquisa)) {
      
      // Adiciona a linha da evolução somente se não for null
      let evolucaoHTML = dado.evolucao ? `<p>Evolui para: ${dado.evolucao}</p>` : '';

      resultados += `
          <div class="item-resultado">
            <h2>${dado.nome}</h2>
            <p>Tipo: ${dado.tipo.join(", ")}</p> <!-- Exibe os tipos formatados -->
            <p>${dado.descricao}</p>
            ${evolucaoHTML} <!-- Adiciona a linha da evolução se aplicável -->
            <a href="${dado.link}" target="_blank">Mais informações</a>
            <img src="${dado.image}" alt="${dado.nome}">
          </div>
        `;
    }
  }
  // Insere o HTML gerado na seção de resultados
  sectionPokemon.innerHTML = resultados;
}
