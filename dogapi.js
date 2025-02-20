'use strict'

async function pesquisarFotos(raca){//vai no servidor e pega informacao
    const url = `https://dog.ceo/api/breed/${raca}/images`//pegando uma api pronta/${aqui a pessoa digita o que ela quer}
    const response = await fetch(url) //fetch(vai no site pega a requisao e retorna no response) 
    const dados = await response.json() //pega os dados do json para saber o que ta recebendo
    return dados.message

}

function criaImagem(link){
    const galeria = document.getElementById('galeria')
    const novaImg = document.createElement('img')

    novaImg.src = link
    galeria.appendChild(novaImg)
}
async function preencherFotos(){
    const raca = document.getElementById('raca').value //value é para o conteudo da caixa, o valor
    const fotos = await pesquisarFotos(raca) //pesquisa foto pela raça //await é pra aguardar um pouco

    galeria.replaceChildren ('') //apaga e coloca um novo, nao coloca embaixo
    fotos.forEach(criaImagem)//foreach envia o link para criar imagem 
    
    
}
document.getElementById('pesquisar')
        .addEventListener('click', preencherFotos)