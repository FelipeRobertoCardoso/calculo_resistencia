// L = comprimento do condutor  [m]
// A = Área da seção transversal [mm²]
// mat = material = resistência do material =>
function calcularResistencia(L, A, mat){
    return (mat * L) / A

}

// Atribui o valor do material
function verTipoMaterial(mat){
    const cobre = 0.017
    const aluminio = 0.028

    if(mat == 'cobre'){
        return cobre
    }else if(mat == 'aluminio'){
        return aluminio
    }else{
        return "Material inválido!!!"
    }
}

let resposta = document.getElementById('resposta')
let calcular = document.getElementById('calcular')

calcular.addEventListener('click', ()=>{ // função principal

    let material = document.getElementById('material').value
    let comprimento = Number(document.getElementById('comprimento').value)
    let area = Number(document.getElementById('area').value)
    let resistencia = 0.0

    let mat = verTipoMaterial(material)
    //console.log(mat)

    resistencia = calcularResistencia(comprimento, area, mat)
    //console.log(`A resistência do condutor é ${resistencia.toFixed(3)}`)

    resposta.innerHTML = ''
    resposta.innerHTML += `A resistência do condutor é ${resistencia.toFixed(3)}`
    resposta.style.fontSize = '2rem'
    resposta.style.fontFamily = 'Verdana'
    resposta.style.fontWeight = 'bold'
})

