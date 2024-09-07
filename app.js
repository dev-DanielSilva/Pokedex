function pesquisar() {
  let sectionPokemon = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

  if (campoPesquisa === "" || campoPesquisa.length < 2) {
    sectionPokemon.innerHTML = "<p>Nada foi encontrado, digite o nome do Pokémon ou seu tipo.</p>";
    return;
  }

  let resultados = "";

  for (let dado of pokemons) {
    let tipos = dado.tipo.join(", ").toLowerCase();
    let tags = dado.tags.join(", ").toLowerCase();

    if (dado.nome.toLowerCase().includes(campoPesquisa) || 
        tipos.includes(campoPesquisa) ||
        tags.includes(campoPesquisa)) {

      let evolucaoHTML = dado.evolucao ? `<p>Evolui para: ${dado.evolucao}</p>` : '';

      resultados += `
          <div class="item-resultado">
            <h2>${dado.nome}</h2>
            <p>Tipo: ${dado.tipo.join(", ")}</p>
            <p>${dado.descricao}</p>
            ${evolucaoHTML}
            <a href="${dado.link}" target="_blank">Mais informações</a>
            <img src="${dado.image}" alt="${dado.nome}">
          </div>
        `;
    }
  }

  sectionPokemon.innerHTML = resultados;
}
