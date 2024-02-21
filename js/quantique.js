function generateQuantiqueAuto(qbit){
    let quantique = []
    for (let i = 0; i < qbit; i++){
        quantique.push({
            qbit: i,
            etat: 0
        })
    }
}

generateQuantiqueAuto(8)