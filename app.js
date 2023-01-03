let cep = document.querySelector('#cep')
let rua = document.querySelector('#rua')
let bairro = document.querySelector('#bairro')
let cidade = document.querySelector('#cidade')
let estado = document.querySelector('#estado')
let ddd = document.querySelector('#ddd')
let ibge = document.querySelector('#ibge')

cep.placeholder = '01001000'

cep.addEventListener('blur', function (e) {
    let cep = e.target.value
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=popularForm'
    document.body.appendChild(script)
})

function popularForm(response) {

    if ("erro" in response) {
        alert("CEP não encontrado")
        return
    }

    rua.value = response.logradouro
    bairro.value = response.bairro
    cidade.value = response.localidade
    estado.value = response.uf
    ddd.value = response.ddd
    ibge.value = response.ibge
}