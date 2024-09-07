function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    // se campoPesquisa for string sem nada
    if(!campoPesquisa){
        section.innerHTML = "<p>Nada foi Encontrado. Voce Precisa Digitar o nome de um Altleta ou Esporte</p>"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Itera sobre cada dado da pesquisa e constrói o HTML dos resultados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // Se titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        // Cria um novo elemento div para cada resultado
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais Informações...</a>
            </div>
        `;

        }
        
       
    }

    if(!resultados){
        resultados = "<p>Nada foi Encontrado</p>"
    }

    // Substitui o conteúdo da seção pelos resultados formatados
    section.innerHTML = resultados;
}


    /*<div class="item-resultado">
        <h2>Rayssa Leal</h2>
            <p class="descricao-meta">A fada do skate. Rayssa Leal é uma skatista brasileira que, com sua habilidade
                 e carisma, conquistou o mundo do skate e se tornou um ícone para a nova geração.</p>
            <a href="https://pt.wikipedia.org/wiki/Rayssa_Leal" target="_blank">Mais Informações...</a>
        </div>

    <div class="item-resultado">
        <h2>Beatriz Souza</h2>
            <p class="descricao-meta">A nova estrela do judô. Beatriz Souza é uma judoca brasileira que vem se
                    destacando no cenário internacional e mostrando seu potencial para grandes conquistas.</p>
            <a href="https://pt.wikipedia.org/wiki/Beatriz_Souza" target="_blank">Mais Informações...</a>
        </div*/
