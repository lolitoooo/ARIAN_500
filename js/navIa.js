function generateNavIa(nom, description, type, id, idType){
   let navigation = []
    for (let i = 0; i < 10; i++){
         navigation.push({
              nom: nom,
              description: description,
              type: type,
              id: id,
              idType: idType
         })
    }
}

generateNavIa("Système de navigation", "Système de navigation", "Système", 1, 1)