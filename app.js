// console.log(dados[0].descricao);

function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
    console.log(section);

    let resultados = ""

// para cada dado dentro da lista de dados 

    for (let dado of dados) {
     resultados += `
            <div class="item-resultado">
                <h2> 
                    <a href="https://www.instagram.com/taylorswift/" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações sobre Taylor Swift</a>
            </div>
`
}
section.innerHTML = resultados
}
