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
        if (marker === undefined || marker === null) return null;
        if (marker.titre === undefined || marker.description === undefined ||
            marker.lat === undefined || marker.long === undefined) {
            return null;
        }
        
        const villes = require("@/assets/data/villes/villes.json");
        const infosVille = villes[ville.toUpperCase()];

        if (infosVille === undefined || infosVille === null) return null;
        
        if (marker.id && marker.id !== 0) {
            const marqueurVille = infosVille.markers.some(m => m.id === marker.id);

            if (infosVille.markers.some(m => m.id === marker.id)) {
                infosVille.markers.find(m => m.id === marker.id);
            } else {
                infosVille.markers.add(marker);
            }


            console.log(marqueurVille);
        }
        
    }
}