function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<h2><strong>Nada foi encontrado.</strong></h2>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let atividades = "";
    let dicas = "";
    let tags = "";
  
    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        atividades = dado.atividades.toLowerCase()
        dicas = dado.dicas.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || atividades.includes(campoPesquisa) || dicas.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="atividades:">${dado.atividades}</p>
                <p class="dicas:">${dado.dicas}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
               
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
  
    // Atribui o conteúdo da string 'resultados' à seção HTML
    section.innerHTML = resultados;
  }

//console.log(dados)




function mostrarPopup() {
    document.getElementById("popup").style.display = "block";
  }
  
  function fecharPopup() {
    document.getElementById("popup").style.display   
   = "none";   
  
}