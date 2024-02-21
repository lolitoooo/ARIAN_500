function generateSystemeAuto(nom, description, type, id, idType){
    var systemeAuto = {
        nom: nom,
        description: description,
        type: type,
        id: id,
        idType: idType
    }
    return systemeAuto
}

generateSystemeAuto("Système de navigation", "Système de navigation", "Système", 1, 1)