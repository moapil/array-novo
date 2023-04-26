let parcial = document.getElementById('parcial')
let total = document.getElementById('total')
let res = document.getElementById('res')
let valor_compra = document.getElementById('valor_compra')

let tipo_produto = []
let quantidade = []
let preco_produtos = []

parcial.addEventListener('click', ()=>{
    let produto=document.getElementById("produto").value
    tipo_produto.push(produto)
    console.log(tipo_produto)

    let qtde_produtos=document.getElementById("qtde_produtos").value
    quantidade.push(qtde_produtos)
    console.log(quantidade)

    let preco_produto=document.getElementById("preco_produto").value
    preco_produtos.push(preco_produto)
    console.log(preco_produtos)

    let soma = 0.0
    for(i=0;i<preco_produtos.length;i++){
        soma = soma + (quantidade[i]*preco_produtos[i])
    }

    console.log(soma)

    vetor.innerHTML = ''
    for(i=0;i<preco_produtos.length;i++){
        vetor.innerHTML += 'Produto = ' + tipo_produto[i] + '&emsp;'
        vetor.innerHTML += 'Quantidade = ' + quantidade[i] + '&emsp;'
        vetor.innerHTML += 'Preço produto = R$ ' + preco_produtos[i] + '<br>'
}

})