import villeService from '../../../src/components/villes/VilleService.js';

describe('Test de villeService', () => {
    test('obtenirVilles_Retourne le nom de toutes les viles', () => {
        const nomVilles = obtenirNomVille();

        expect(nomVilles).toBeInstanceOf(Array);
        expect(nomVilles.length).toBeGreaterThan(1);
    });

    test('obtenirVilleFromNom_NomChaineVide_RetourneUndefined', () => {
        const infoVille = villeService.obtenirVilleFromNom('');
        expect(infoVille).toBe(undefined);
    });

    test('obtenirVilleFromNom_NomNull_RetourneUndefined', () => {
        const infoVille = villeService.obtenirVilleFromNom(null);
        expect(infoVille).toBe(undefined);
    });

    test('obtenirVilleFromNom_NomExistant_RetourneInfoVille', () => {
        const nomVilles = obtenirNomVille();

        expect(nomVilles.length).toBeGreaterThan(1);
        const infoVille = villeService.obtenirVilleFromNom(nomVilles[0]);

        expect(infoVille).toBeInstanceOf(Object);
    });

    test('obtenirVilleFromNom_NomInexistant_RetourneInfoVille', () => {
        const infoVille = villeService.obtenirVilleFromNom('allo');
        expect(infoVille).toBe(undefined);
    });
});

function obtenirNomVille() {
    return villeService.obtenirVilles();
}
