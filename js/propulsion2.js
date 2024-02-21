// generate systeme de propulsion auto function here instead of in propulsion.js

function generatePropulsionAuto(nom, description, type, id, idType){
    var propulsionAuto = {
        nom: nom,
        description: description,
        type: type,
        id: id,
        idType: idType
    }
    
    for (var i = 0; i < propulsionAuto.length; i++) {
        propulsionAuto.push({
            propulsion: i,
            etat: 0
        })
        propulsionAuto.map(function(propulsionAuto) {
            return propulsionAuto
        })
    }
    return propulsionAuto
}

generatePropulsionAuto("Système de propulsion", "Système de propulsion", "Système", 1, 1)