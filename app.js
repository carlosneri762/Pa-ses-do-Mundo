function pesquisar() {
    const input = document.getElementById('campo-pesquisa').value.toLowerCase();
    const resultados = document.getElementById('resultados-pesquisa');

    if (input.trim() === '') {
        resultados.innerHTML = '<p>Por favor, digite o nome de um país.</p>';
        return;
      }

    resultados.innerHTML = '';

    for (let pais of dados) {
        if (pais.nome.toLowerCase().includes(input) ||
            pais.capital.toLowerCase().includes(input) ||
            pais.continente.toLowerCase().includes(input) ||
            pais.lingua.toLowerCase().includes(input) ||
            pais.moeda.toLowerCase().includes(input)) {
            resultados.innerHTML += `
                <div class="item-resultado">
                    <h2>${pais.nome}</h2>
                    <p>Capital: ${pais.capital}</p>
                    <p>Continente: ${pais.continente}</p>
                    <p>Língua: ${pais.lingua}</p>
                    <p>Moeda: ${pais.moeda}</p>
                    <p>População aproximada: ${pais.populacao}</p>
                    <p>Área em km²: ${pais.area}</p>
                    <img src="${pais.bandeira}" alt="Bandeira de ${pais.nome}">
                </div>
            `;
        }
    }

    if (!resultados.innerHTML) {
        resultados.innerHTML = '<p>Nenhum país encontrado.</p>';
    }
}