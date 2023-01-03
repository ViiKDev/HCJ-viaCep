let rua = document.querySelector('#rua')
let cidade = document.querySelector('#cidade')
let uf = document.querySelector('#estado')
let btnCep = document.querySelector('#btnBuscarCep')
let listaCep = document.querySelector('#listaCep')

rua.placeholder = "Domingos Jose"
cidade.placeholder = "Porto Alegre"
uf.placeholder = "RS"

btnCep.addEventListener('click', function (e) {
    e.preventDefault()

    let urlBase = 'https://viacep.com/br/ws/'
    let parametros = uf.value + '/' + cidade.value + '/' + rua.value + '/json/'
    let callback = '?callback=popularNaoSeiMeuCep'

    let script = document.createElement('script')
    script.src = urlBase + parametros + callback
    document.body.appendChild(script)
})

function popularNaoSeiMeuCep(resposta) {
    if (!Array.isArray(resposta)) {
        alert('O retorno não é uma lista de CEPs')
        return
    }

    resposta.forEach(function (i) {
        let li = document.createElement('li')
        let endereco = i.logradouro + ' | ' + i.bairro + ' | ' + i.localidade + ' | ' + i.uf + ' | ' + i.cep
        li.innerHTML = endereco
        li.setAttribute('onclick', 'exibirCep("' + i.cep + '")')
        listaCep.appendChild(li)
    })
}

function exibirCep(cep) {
    alert(cep)
}