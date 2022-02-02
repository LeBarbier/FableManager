export default class VilleService {
    static obtenirVilles() {
        const villes = require("../../assets/data/villes/villes.json");
        return Object.keys(villes);
    }

    static obtenirVilleFromNom(nom) {
        const villes = require("../../assets/data/villes/villes.json");
        return villes[nom];
    }
}