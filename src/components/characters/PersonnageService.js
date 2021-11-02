export default class PersonnageService {
    static obtenirPersonnages() {
        const personnages = require("@/assets/data/characters/characters.json");
        return personnages;
    }

    static obtenirPersonnage(nom) {
        const personnages = require("@/assets/data/characters/characters.json");
        return personnages.find(p => p.name === nom);
    }
}