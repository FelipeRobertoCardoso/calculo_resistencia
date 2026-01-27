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

function principal(){
    let material = 'cobre' // cobre, Aluminio
    let resistencia = 0.0
    let comprimento = 1000.0
    let area = 6.0

    let resposta = ''

    let mat = verTipoMaterial(material)
    console.log(mat)

    resistencia = calcularResistencia(comprimento, area, mat)
    console.log(`A resistência do condutor é ${resistencia.toFixed(3)} \u2126`)
}

principal()