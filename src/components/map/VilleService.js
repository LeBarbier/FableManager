export default class VilleService {
    static obtenirVilles() {
        const villes = require("@/assets/data/villes/villes.json");
        return Object.keys(villes);
    }

    static obtenirVilleFromNom(nom) {
        const villes = require("@/assets/data/villes/villes.json");
        return villes[nom];
    }

    static modifierMarqueurVille(ville, marker) {
        const villes = require("@/assets/data/villes/villes.json");
        // villes.SILVERCOVES.markers
        villes[ville].markers.find(m => m.id = marker.id);
    }
}